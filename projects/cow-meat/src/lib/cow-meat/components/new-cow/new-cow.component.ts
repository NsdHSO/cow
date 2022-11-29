import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'lib-new-cow',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, MatTabsModule, RouterLinkActive],
  templateUrl: './new-cow.component.html',
  styleUrls: ['./new-cow.component.scss']
})
export class NewCowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
