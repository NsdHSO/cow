import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {ProductImage} from '../../product.model';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Output()
  actionArrow : EventEmitter<{ index : number }> = new EventEmitter<{ index : number }>();
  index = 0;
  @Input()
  images : ProductImage[] = [] as ProductImage[];

  public triggerArrow($event : { key : boolean }) : void {
    if(this.images.length > 0) {
      if(this.images.length - 1 <= this.index && !$event.key) {
      }
      else {
        if(this.images.length > 0) {
          if($event.key) {
            --this.index;
          }
          else {
            ++this.index;
          }
        }
      }
      if(this.index === -1) {
        this.index = 0;
      }
      this.actionArrow.emit({
        index: this.index
      });
    }
  }
}
