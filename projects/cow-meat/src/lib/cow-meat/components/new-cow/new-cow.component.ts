import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet
} from '@angular/router';
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

  constructor() { }

  ngOnInit(): void {
  }

}
