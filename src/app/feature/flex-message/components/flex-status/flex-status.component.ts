import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flex-status',
  templateUrl: './flex-status.component.html',
  styleUrls: ['./flex-status.component.css']
})
export class FlexStatusComponent implements OnInit {
  @Input() status: string

  constructor() { }

  ngOnInit() {
  }

}
