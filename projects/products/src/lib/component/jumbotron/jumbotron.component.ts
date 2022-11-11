import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'lib-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements AfterViewInit {
  @ViewChild('contentProjection') contentProjection : ElementRef = {} as ElementRef;
  showContent = true;

  constructor(private _cdRef : ChangeDetectorRef) { }

  public ngAfterViewInit() : void {
    this.showContent = this.contentProjection.nativeElement.children[0].childElementCount >= 1;
  }
}
