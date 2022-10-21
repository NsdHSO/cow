import {
  Component,
  Input,
} from "@angular/core";
import {ICardData} from "../../util";

@Component({
  selector: "lib-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input()
  data! : ICardData;
}
