import {CommonModule} from '@angular/common';
import {
  Component,
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
import * as moment from 'moment';
import {
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap
} from 'rxjs';
import {
  Gender,
  ICow
} from '../../util/interfaces';
import {CowMeatService} from '../../util/service';
import {DashboardService} from '../dashboard/util/dashboard.service';

@Component({
  selector: 'lib-edit',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatSelectModule, MatButtonModule
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  public cow : Observable<ICow> | undefined;
  cowForm : FormGroup;
  private _destroyed$ : Subject<void> = new Subject<void>();

  get Gender() : typeof Gender {
    return Gender;
  }

  constructor(
    private readonly _activateRouter : ActivatedRoute, private _cowMeatService : CowMeatService,
    private readonly _formBuilder : FormBuilder,
    private readonly _dashboardService : DashboardService
  ) {
    this.cowForm = this._formBuilder.group({
      id: [''],
      numberFromEar: ['', Validators.required],
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
      takeUntil(this._destroyed$), switchMap(data => {
        return this._cowMeatService.getCowById(+data['cowId']);
      }), tap(cow => {
        if(cow) {
          cow.birth = moment(cow.birth).format()
          console.log(cow)
          this.cowForm.patchValue(cow);
        }
      }));
  }

  public sendData(event : any) {
    if(this.cowForm.valid) {
      this.cowForm.get('birth')
        ?.patchValue(moment(this.cowForm.get('birth')?.value)
          .format('MM/DD/YYYY'));
      this._dashboardService.updatedCow(this.cowForm.value)
        .pipe(switchMap(data => this._cowMeatService.getCow()))
        .subscribe();
      this._cowMeatService.sendDateCloseSidenav(true);
    }
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
