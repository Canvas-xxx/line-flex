import { Injectable } from '@angular/core';
import { TextComponent, ButtonComponent, IconComponent, ImageComponent, BoxComponent } from '../models/line-flex.model'

@Injectable({
  providedIn: 'root'
})
export class ValidateFlexService {
  private marginValues: Array<string> = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  private sizeValues: Array<string> = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl']
  private alignValues: Array<string> = ['start', 'end', 'center']
  private gravityValues: Array<string> = ['top', 'bottom', 'center']
  private weightValues: Array<string> = ['regular', 'bold']
  private heightValues: Array<string> = ['sm', 'md']
  private styleValues: Array<string> = ['link', 'primary', 'secondary']
  private aspectModeValues: Array<string> = ['cover', 'fit']
  private layoutValues: Array<string> = ['vertical', 'horizontal']
  private spacingValues: Array<string> = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']

  jsonValidate: JSONValidate = { property: '' , message: '' }

  constructor() { }

  instanceOfTextComponent = (object: any): object is TextComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string') { return false }
    this.jsonValidate.message = 'text: invalid property'
    if(!('text' in object) || typeof object.text !== 'string') { return false }
    this.jsonValidate.message = 'flex: invalid property'
    if('flex' in object && typeof object.flex !== 'number') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'size: invalid property'
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { return false }
    this.jsonValidate.message = 'align: invalid property'
    if('align' in object && this.alignValues.indexOf(object.align) === -1 ) { return false }
    this.jsonValidate.message = 'gravity: invalid property'
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { return false }
    this.jsonValidate.message = 'wrap: invalid property'
    if('wrap' in object && typeof object.warp !== 'boolean' ) { return false }
    this.jsonValidate.message = 'maxLines: invalid property'
    if('maxLines' in object && typeof object.maxLines !== 'number' ) { return false }
    this.jsonValidate.message = 'weight: invalid property'
    if('weight' in object && this.weightValues.indexOf(object.weight) === -1 ) { return false }
    this.jsonValidate.message = 'color: invalid property'
    if('color' in object && typeof object.text !== 'string' ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new TextComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfButtonComponent = (object: any): object is ButtonComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string') { return false }
    this.jsonValidate.message = 'flex: invalid property'
    if('flex' in object && typeof object.flex !== 'number') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'height: invalid property'
    if('height' in object && this.heightValues.indexOf(object.height) === -1 ) { return false }
    this.jsonValidate.message = 'style: invalid property'
    if('style' in object && this.styleValues.indexOf(object.style) === -1 ) { return false }
    this.jsonValidate.message = 'color: invalid property'
    if('color' in object && typeof object.text !== 'string' ) { return false }
    this.jsonValidate.message = 'gravity: invalid property'
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new ButtonComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfIconComponent = (object: any): object is IconComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string') { return false }
    this.jsonValidate.message = 'url: invalid property'
    if(!('url' in object) || typeof object.url !== 'string') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'size: invalid property'
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { return false }
    this.jsonValidate.message = 'aspectRatio: invalid property'
    if('aspectRatio' in object && typeof object.aspectRatio !== 'string' ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new IconComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfImageComponent = (object: any): object is ImageComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string') { return false }
    this.jsonValidate.message = 'url: invalid property'
    if(!('url' in object) || typeof object.url !== 'string') { return false }
    this.jsonValidate.message = 'flex: invalid property'
    if('flex' in object && typeof object.flex !== 'number') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'size: invalid property'
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { return false }
    this.jsonValidate.message = 'align: invalid property'
    if('align' in object && this.alignValues.indexOf(object.align) === -1 ) { return false }
    this.jsonValidate.message = 'gravity: invalid property'
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { return false }
    this.jsonValidate.message = 'aspectRatio: invalid property'
    if('aspectRatio' in object && typeof object.aspectRatio !== 'string' ) { return false }
    this.jsonValidate.message = 'aspectMode: invalid property'
    if('aspectMode' in object && this.aspectModeValues.indexOf(object.aspectMode) === -1 ) { return false }
    this.jsonValidate.message = 'backgroundColor: invalid property'
    if('backgroundColor' in object && typeof object.backgroundColor !== 'string' ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new ImageComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfBoxComponent = (object: any): object is BoxComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string') { return false }
    this.jsonValidate.message = 'layout: invalid property'
    if(!('layout' in object) || this.layoutValues.indexOf(object.layout) === -1 ) { return false }
    this.jsonValidate.message = 'spacing: invalid property'
    if('spacing' in object && this.spacingValues.indexOf(object.spacing) === -1 ) { return false }
    this.jsonValidate.message = 'contents: must be non-empty array'
    if(!('contents' in object) || object.contents.length === 0) { return false }
    if(object.contents.some(content => {
      return this.instanceOfFlexComponet(content)
    })) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BoxComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfFlexComponet = (content: any): boolean => {
    switch(content.type) {
      case 'text':
        return !this.instanceOfTextComponent(content)
      case 'button':
        return !this.instanceOfButtonComponent(content)
      case 'icon':
        return !this.instanceOfIconComponent(content)
      case 'image':
        return !this.instanceOfImageComponent(content)
      default:
        this.jsonValidate.message = 'invalid property'
        return true
    }
  }
}

interface JSONValidate {
  property: string,
  message: string
}