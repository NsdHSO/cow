import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import {
  Subject,
  takeUntil
} from 'rxjs';
import {CowMeatService} from './util/service';

@Component({
  selector: 'lib-cow-meat',
  templateUrl: './cow-meat.component.html',
  styleUrls: ['./cow-meat.component.scss']
})
export class CowMeatComponent implements AfterViewInit, OnDestroy {
  mode = new FormControl(
    'over' as MatDrawerMode);
  @ViewChild(
    'sidenav') public sidenav : any;
  private _destroyed$ : Subject<void> = new Subject<void>();

  constructor(
    private _router : Router,
    private _route : ActivatedRoute,
    private _cowMeatService : CowMeatService
  ) {}

  ngAfterViewInit() : void {
    this.closeSidenav();
    this._cowMeatService.sidenavData$.subscribe(
      nameSidenav => {
        this.goToSidenav(
          nameSidenav.path,
          nameSidenav.queryParam
        );
      });
    this.toggle();
  }

  public goToSidenav(
    path = 'new-cow',
    idParams : Params = {}) : void {
    this.sidenav.open();
    this._router.navigate(
      [{outlets: {sidenav: path}}], {
        relativeTo: this._route,
        queryParams: idParams,
        queryParamsHandling: 'merge'
      });
  }

  @HostListener('keyup', ['$event'])
  public handleKeyDown(event : KeyboardEvent) {
    if(event.key === 'Escape') {
      this._router.navigate(
        [{outlets: {sidenav: null}}],
        {relativeTo: this._route}
      );
    }
  }

  public toggle() {
    this._cowMeatService.closeSide$.pipe(
      takeUntil(this._destroyed$))
      .subscribe(
        d => {
          if(d) {
            this._router.navigate(
              [{outlets: {sidenav: null}}],
              {relativeTo: this._route}
            );
            this.sidenav.toggle();
          }
        });
  }

  public destroySidenav() {
    this._router.navigate(
      [{outlets: {sidenav: null}}],
      {relativeTo: this._route}
    );
  }

  public closeSidenav() : void {
    let url = this._router.url.includes(
      'sidenav');
    if(url) {
      this.sidenav.open();
    }
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
