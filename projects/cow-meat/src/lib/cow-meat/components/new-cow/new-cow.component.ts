import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-new-cow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-cow.component.html',
  styleUrls: ['./new-cow.component.css']
})
export class NewCowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
