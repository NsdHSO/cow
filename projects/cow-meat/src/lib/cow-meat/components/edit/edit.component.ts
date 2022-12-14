import {CommonModule} from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment'
import {
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap
} from 'rxjs';
import {
  Gender,
  ICow,
  IStateCattle
} from '../../util/interfaces';
import {CowMeatService} from '../../util/service';
import {DashboardService} from '../dashboard/util/dashboard.service';
import {IsNotEmpty} from '../invoice/util';
import {ProfitabilityClockService} from '../profitability-clock/util';


@Component({
  selector: 'lib-edit',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    MatDatepickerModule,
    MatSelectModule, MatButtonModule
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  public cow : Observable<ICow> | undefined;
  cowForm : FormGroup;
  public stateCattle$ : Observable<IStateCattle[]> | undefined;
  private _destroyed$ : Subject<void> = new Subject<void>();
  private _profitabilityService = inject(
    ProfitabilityClockService);

  get Gender() : typeof Gender {
    return Gender;
  }

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private _cowMeatService : CowMeatService,
    private readonly _formBuilder : FormBuilder,
    private readonly _dashboardService : DashboardService
  ) {
    this.cowForm = this._formBuilder.group(
      {
        id: [''],
        numberFromEar: [
          {value: '', disabled: true}, [
            Validators.required,
            IsNotEmpty
          ]
        ],
        kg: [''],
        birth: [''],
        age: [''],
        numberOfLiveCattle: [''],
        howMuchEats: [''],
        tel: [''],
        state: [''],
        group: [''],
        gynecologicalStatus: [''],
        gender: ['']
      });
  }

  ngOnInit() : void {
    this.cow = this._activateRouter.queryParams.pipe(
      switchMap(data => {
        return this._cowMeatService.getCowById(
          +data['cowId']);
      }),
      switchMap((data : any) => {
        this.stateCattle$ = this._cowMeatService.getStateCattle();
        return of(data);
      }),
      tap((cow : any) => {
        if(cow) {
          cow.birth = moment(
            new Date(cow.birth))
            .format();
          cow.gender = cow.state === 'Early'
            ? Gender.MALE
            : Gender.FEMALE;
          this.cowForm.patchValue(cow);
        }
      }),
      takeUntil(this._destroyed$)
    );
    this.cowForm.get('state')
      ?.valueChanges
      .pipe(takeUntil(this._destroyed$)
      )
      .subscribe(value => {
          if(value !== 'Early') {
            this.cowForm.get('gender')
              ?.patchValue(Gender.FEMALE);
          }
        }
      );
  }

  public sendData(event : any) {
    if(this.cowForm.valid) {
      this.cowForm.get('birth')
        ?.patchValue(moment(
          this.cowForm.get(
            'birth')?.value)
          .format('YYYY/DD/MM'));
      this._dashboardService.updatedCow(
        this.cowForm.value)
        .pipe(
          switchMap(
            data => this._cowMeatService.getCows())
          , switchMap(data => {
            this._profitabilityService.statisticData();
            return of(data);
          })
        )
        .subscribe();
      this._cowMeatService.sendDateCloseSidenav(
        true);
    }
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
