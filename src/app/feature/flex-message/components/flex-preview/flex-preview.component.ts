import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flex-preview',
  templateUrl: './flex-preview.component.html',
  styleUrls: ['./flex-preview.component.css']
})
export class FlexPreviewComponent implements OnInit {
  @Input() status: string
  @Input() data: object

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
