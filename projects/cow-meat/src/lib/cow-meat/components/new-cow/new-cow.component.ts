import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {
  ActivatedRoute,
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet
} from '@angular/router';
import {map} from 'rxjs';
import {CowMeatModule} from '../../cow-meat.module';

@Component({
  selector: 'lib-new-cow',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLinkWithHref, MatTabsModule, RouterLinkActive,
    CowMeatModule
  ],
  templateUrl: './new-cow.component.html',
  styleUrls: ['./new-cow.component.scss']
})
export class NewCowComponent implements OnInit {
  tabs$ : any;

  constructor(private readonly _activateRouter : ActivatedRoute) { }

  ngOnInit() : void {
    this.tabs$ = this._activateRouter.data.pipe(map(data => data['config'].route))
  }
}
