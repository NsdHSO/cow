import {
  Component,
  Input
} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'lib-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() product = {} as Product;
}
