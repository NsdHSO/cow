import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  MatDrawerMode,
  MatSidenav
} from '@angular/material/sidenav';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'lib-cow-meat',
  templateUrl: './cow-meat.component.html',
  styleUrls: ['./cow-meat.component.scss']
})
export class CowMeatComponent implements AfterViewInit {
  mode = new FormControl('over' as MatDrawerMode);
  @ViewChild('sidenav') public sidenav : any;

  constructor(
    private _router : Router,
    private _route : ActivatedRoute) {}

  ngAfterViewInit() : void {
    this.closeSidenav();
  }

  public goToSidenav(sidenav : MatSidenav, path = 'new-cow') : void {
    sidenav.open();
    this._router.navigate([{outlets: {sidenav: path}}], {relativeTo: this._route});
  }

  @HostListener('keyup', ['$event'])
  public handleKeyDown(event : KeyboardEvent) {
    if(event.key === 'Escape') {
      this._router.navigate([{outlets: {sidenav: null}}], {relativeTo: this._route});
    }
  }

  private closeSidenav() : void {
    let url = this._router.url.includes('sidenav');
    if(url) {
      this.sidenav.open();
    }
  }
}
