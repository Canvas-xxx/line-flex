import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgJsonEditorModule } from 'ang-jsoneditor'

import { FlexMessageRoutingModule } from './flex-message-routing.module';
import { ConsolePageComponent } from './components/console-page/console-page.component';
import { PreviewContentComponent } from './components/preview-content/preview-content.component';
import { FlexPreviewComponent } from './components/flex-preview/flex-preview.component';
import { FlexStatusComponent } from './components/flex-status/flex-status.component';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';

import { ValidateFlexService } from './services/validate-flex.service'

@NgModule({
  declarations: [ConsolePageComponent, PreviewContentComponent, FlexPreviewComponent, FlexStatusComponent, JsonEditorComponent],
  imports: [
    CommonModule,
    FlexMessageRoutingModule,
    NgJsonEditorModule
  ],
  providers: [ ValidateFlexService ]
})
export class FlexMessageModule { }
