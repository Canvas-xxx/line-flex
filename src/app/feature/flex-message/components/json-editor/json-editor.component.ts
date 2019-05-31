import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { JsonEditorComponent as JsonComponent, JsonEditorOptions } from 'ang-jsoneditor'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {
  @ViewChild('editor') editor: JsonComponent

  @Input() data: object
  @Input() actions: Subject<string> = new Subject<string>()
  @Output() jsonData: EventEmitter<object | boolean> = new EventEmitter<object | boolean>()

  options = new JsonEditorOptions()

  storeJsonData: any
  syntaxError: boolean = false

  constructor() {
    this.options.mode = 'code'
    this.options.statusBar = false
    this.options.mainMenuBar = false
    this.options.onChange = () => {
      if(this.editor.isValidJson()) {
        this.data = this.editor.get()
        this.syntaxError = false
      }
      if(!this.editor.isValidJson())
        this.syntaxError = true
    }
  }

  ngOnInit() {
    this.storeJsonData = { ...this.data }
    this.actions.subscribe(action => {
      console.log('action => ', action)
      switch(action) {
        case 'preview':
          this.jsonData.emit(this.syntaxError ? false : this.data)
          break
      }
    })
  }

}
