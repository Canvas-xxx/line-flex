import { Injectable } from '@angular/core';
import { TextComponent, ButtonComponent, IconComponent, 
  ImageComponent, FillerComponent, SeparatorComponent,
  SpacerComponent, BoxComponent, BlockStyle,
  BubbleStyle, BubbleContainer, CarouselContainer } from '../models/line-flex.model'

@Injectable({
  providedIn: 'root'
})
export class ValidateFlexService {
  private directionValues: Array<string> = ['ltr', 'rtl']
  private marginValues: Array<string> = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
  private sizeValues: Array<string> = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl', 'full']
  private alignValues: Array<string> = ['start', 'end', 'center']
  private gravityValues: Array<string> = ['top', 'bottom', 'center']
  private weightValues: Array<string> = ['regular', 'bold']
  private heightValues: Array<string> = ['sm', 'md']
  private styleValues: Array<string> = ['link', 'primary', 'secondary']
  private aspectModeValues: Array<string> = ['cover', 'fit']
  private layoutValues: Array<string> = ['vertical', 'horizontal', 'baseline']
  private spacingValues: Array<string> = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']

  jsonValidate: JSONValidate = { property: '' , message: '' }

  constructor() { }

  private colorHexValidation = (color: string): boolean => {
    const colorTest = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'igm')
    return colorTest.test(color)
  }

  instanceOfTextComponent = (object: any): object is TextComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'text') { return false }
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
    if('wrap' in object && typeof object.wrap !== 'boolean' ) { return false }
    this.jsonValidate.message = 'maxLines: invalid property'
    if('maxLines' in object && typeof object.maxLines !== 'number' ) { return false }
    this.jsonValidate.message = 'weight: invalid property'
    if('weight' in object && this.weightValues.indexOf(object.weight) === -1 ) { return false }
    this.jsonValidate.message = 'color: invalid property'
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color))) { return false }
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
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'button') { return false }
    this.jsonValidate.message = 'flex: invalid property'
    if('flex' in object && typeof object.flex !== 'number') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'height: invalid property'
    if('height' in object && this.heightValues.indexOf(object.height) === -1 ) { return false }
    this.jsonValidate.message = 'style: invalid property'
    if('style' in object && this.styleValues.indexOf(object.style) === -1 ) { return false }
    this.jsonValidate.message = 'color: invalid property'
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color)) ) { return false }
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
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'icon') { return false }
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
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'image') { return false }
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
    if('backgroundColor' in object && (typeof object.backgroundColor !== 'string' || !this.colorHexValidation(object.backgroundColor)) ) { return false }
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

  instanceOfFillerComponent = (object: any): object is FillerComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'filler') { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new FillerComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfSeparatorComponent = (object: any): object is SeparatorComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'separator') { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'color: invalid property'
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color)) ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new SeparatorComponent()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfSpacerComponent = (object: any): object is SpacerComponent => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'spacer') { return false }
    this.jsonValidate.message = 'size: invalid property'
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new SpacerComponent()).indexOf(key) === -1) {
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
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'box') { return false }
    this.jsonValidate.message = 'layout: invalid property'
    if(!('layout' in object) || this.layoutValues.indexOf(object.layout) === -1 ) { return false }
    this.jsonValidate.message = 'margin: invalid property'
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { return false }
    this.jsonValidate.message = 'spacing: invalid property'
    if('spacing' in object && this.spacingValues.indexOf(object.spacing) === -1 ) { return false }
    this.jsonValidate.message = 'flex: invalid property'
    if('flex' in object && typeof object.flex !== 'number') { return false }
    this.jsonValidate.message = 'contents: must be non-empty array'
    if(!('contents' in object) || object.contents.length === 0) { return false }
    if(object.contents.some(content => {
      return this.validateOfBoxComponent(content)
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

  instanceOfBlockStyle = (object: any): object is BlockStyle => {
    this.jsonValidate.message = 'backgroundColor: invalid property'
    if('backgroundColor' in object && (typeof object.backgroundColor !== 'string' || !this.colorHexValidation(object.backgroundColor)) ) { return false }
    this.jsonValidate.message = 'separator: invalid property'
    if('separator' in object && typeof object.separator !== 'boolean' ) { return false }
    this.jsonValidate.message = 'separatorColor: invalid property'
    if('separatorColor' in object && (typeof object.separatorColor !== 'string' || !this.colorHexValidation(object.separatorColor)) ) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BlockStyle()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfBubbleStyle = (object: any): object is BubbleStyle => {
    if(Object.keys(object).some(key => {
      if(Object.keys(new BubbleStyle()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return !this.instanceOfBlockStyle(object[key])
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfBubbleContainer = (object: any): object is BubbleContainer => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'bubble') { return false }
    this.jsonValidate.message = 'direction: invalid property'
    if('direction' in object && this.directionValues.indexOf(object.direction) === -1) { return false }
    this.jsonValidate.message = 'header: invalid property'
    if('header' in object && !this.instanceOfBoxComponent(object.header)) { return false }
    this.jsonValidate.message = 'hero: invalid property'
    if('hero' in object && !this.instanceOfImageComponent(object.hero)) { return false }
    this.jsonValidate.message = 'body: invalid property'
    if('body' in object && !this.instanceOfBoxComponent(object.body)) { return false }
    this.jsonValidate.message = 'footer: invalid property'
    if('footer' in object && !this.instanceOfBoxComponent(object.footer)) { return false }
    this.jsonValidate.message = 'styles: invalid property'
    if('styles' in object && !this.instanceOfBubbleStyle(object.styles)) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BubbleContainer()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfCarouselContainer = (object: any): object is CarouselContainer => {
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'carousel') { return false }
    this.jsonValidate.message = 'contents: must be non-empty array'
    if(!('contents' in object) || object.contents.length === 0) { return false }
    if(object.contents.some(content => {
      return !this.instanceOfBubbleContainer(content)
    })) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new CarouselContainer()).indexOf(key) === -1) {
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  validateOfBoxComponent = (content: any): boolean => {
    switch(content.type) {
      case 'text':
        return !this.instanceOfTextComponent(content)
      case 'button':
        return !this.instanceOfButtonComponent(content)
      case 'icon':
        return !this.instanceOfIconComponent(content)
      case 'image':
        return !this.instanceOfImageComponent(content)
      case 'filler':
          return !this.instanceOfFillerComponent(content)
      case 'separator':
          return !this.instanceOfSeparatorComponent(content)
      case 'spacer':
          return !this.instanceOfSpacerComponent(content)
      case 'box':
          return !this.instanceOfBoxComponent(content)
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