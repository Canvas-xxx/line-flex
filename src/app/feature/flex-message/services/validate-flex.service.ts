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
    const colorTest = new RegExp('^#([A-Fa-f0-9]{6})$', 'igm')
    return colorTest.test(color)
  }

  instanceOfCarouselContainer = (object: any): object is CarouselContainer => {
    this.jsonValidate.property = ''
    this.jsonValidate.message = 'type: invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'carousel') { return false }
    this.jsonValidate.message = 'contents: must be non-empty array'
    if('contents' in object && object.contents.length === 0) { this.jsonValidate.property += '/contents'; return false }
    if(object.contents.some((content, index) => {
      if(!this.instanceOfBubbleContainer(content, index.toString())) {
        this.jsonValidate.property = `/contents${this.jsonValidate.property}`
        return true
      }
    })) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new CarouselContainer()).indexOf(key) === -1) {
        this.jsonValidate.property = `/${key}`
        this.jsonValidate.message = `unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfBubbleContainer = (object: any, index?: string): object is BubbleContainer => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.property = index ? this.jsonValidate.property : ''
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'bubble') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('direction' in object && this.directionValues.indexOf(object.direction) === -1) { this.jsonValidate.property = `${status}/direction${this.jsonValidate.property}`; return false }
    if('header' in object && !this.instanceOfBoxComponent(object.header)) { this.jsonValidate.property = `${status}/header${this.jsonValidate.property}`; return false }
    if('hero' in object && !this.instanceOfImageComponent(object.hero)) { this.jsonValidate.property = `${status}/hero${this.jsonValidate.property}`; return false }
    if('body' in object && !this.instanceOfBoxComponent(object.body)) { this.jsonValidate.property = `${status}/body${this.jsonValidate.property}`; return false }
    if('footer' in object && !this.instanceOfBoxComponent(object.footer)) { this.jsonValidate.property = `${status}/footer${this.jsonValidate.property}`; return false }
    if('styles' in object && !this.instanceOfBubbleStyle(object.styles)) { this.jsonValidate.property = `${status}/styles${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BubbleContainer()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  validateOfBoxComponent = (content: any, index?: string): boolean => {
    switch(content.type) {
      case 'text':
        return !this.instanceOfTextComponent(content, index ? index : null)
      case 'button':
        return !this.instanceOfButtonComponent(content, index ? index : null)
      case 'icon':
        return !this.instanceOfIconComponent(content, index ? index : null)
      case 'image':
        return !this.instanceOfImageComponent(content, index ? index : null)
      case 'filler':
          return !this.instanceOfFillerComponent(content, index ? index : null)
      case 'separator':
          return !this.instanceOfSeparatorComponent(content, index ? index : null)
      case 'spacer':
          return !this.instanceOfSpacerComponent(content, index ? index : null)
      case 'box':
          return !this.instanceOfBoxComponent(content, index ? index : null)
      default:
        this.jsonValidate.property += `${index ? `/${index}` : ''}`
        this.jsonValidate.message = 'invalid property'
        return true
    }
  }

  instanceOfTextComponent = (object: any, index?: string): object is TextComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'text') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('text' in object && typeof object.text !== 'string') { this.jsonValidate.property = `${status}/text${this.jsonValidate.property}`; return false }
    if('flex' in object && typeof object.flex !== 'number') { this.jsonValidate.property = `${status}/flex${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { this.jsonValidate.property = `${status}/size${this.jsonValidate.property}`; return false }
    if('align' in object && this.alignValues.indexOf(object.align) === -1 ) { this.jsonValidate.property = `${status}/align${this.jsonValidate.property}`; return false }
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { this.jsonValidate.property = `${status}/gravity${this.jsonValidate.property}`; return false }
    if('wrap' in object && typeof object.wrap !== 'boolean' ) { this.jsonValidate.property = `${status}/wrap${this.jsonValidate.property}`; return false }
    if('maxLines' in object && typeof object.maxLines !== 'number' ) { this.jsonValidate.property = `${status}/maxLines${this.jsonValidate.property}`; return false }
    if('weight' in object && this.weightValues.indexOf(object.weight) === -1 ) { this.jsonValidate.property = `${status}/weight${this.jsonValidate.property}`; return false }
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color))) { this.jsonValidate.property = `${status}/color${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new TextComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfButtonComponent = (object: any, index?: string): object is ButtonComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'button') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('flex' in object && typeof object.flex !== 'number') { this.jsonValidate.property = `${status}/flex${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('height' in object && this.heightValues.indexOf(object.height) === -1 ) { this.jsonValidate.property = `${status}/height${this.jsonValidate.property}`; return false }
    if('style' in object && this.styleValues.indexOf(object.style) === -1 ) { this.jsonValidate.property = `${status}/style${this.jsonValidate.property}`; return false }
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color)) ) { this.jsonValidate.property = `${status}/color${this.jsonValidate.property}`; return false }
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { this.jsonValidate.property = `${status}/gravity${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new ButtonComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfIconComponent = (object: any, index?: string): object is IconComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'icon') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('url' in object && typeof object.url !== 'string') { this.jsonValidate.property = `${status}/url${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { this.jsonValidate.property = `${status}/size${this.jsonValidate.property}`; return false }
    if('aspectRatio' in object && typeof object.aspectRatio !== 'string' ) { this.jsonValidate.property = `${status}/aspectRatio${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new IconComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfImageComponent = (object: any, index?: string): object is ImageComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'image') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('url' in object && typeof object.url !== 'string') { this.jsonValidate.property = `${status}/url${this.jsonValidate.property}`; return false }
    if('flex' in object && typeof object.flex !== 'number') { this.jsonValidate.property = `${status}/flex${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { this.jsonValidate.property = `${status}/size${this.jsonValidate.property}`; return false }
    if('align' in object && this.alignValues.indexOf(object.align) === -1 ) { this.jsonValidate.property = `${status}/align${this.jsonValidate.property}`; return false }
    if('gravity' in object && this.gravityValues.indexOf(object.gravity) === -1 ) { this.jsonValidate.property = `${status}/gravity${this.jsonValidate.property}`; return false }
    if('aspectRatio' in object && typeof object.aspectRatio !== 'string' ) { this.jsonValidate.property = `${status}/aspectRatio${this.jsonValidate.property}`; return false }
    if('aspectMode' in object && this.aspectModeValues.indexOf(object.aspectMode) === -1 ) { this.jsonValidate.property = `${status}/aspectMode${this.jsonValidate.property}`; return false }
    if('backgroundColor' in object && (typeof object.backgroundColor !== 'string' || !this.colorHexValidation(object.backgroundColor)) ) { this.jsonValidate.property = `${status}/backgroundColor${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new ImageComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfFillerComponent = (object: any, index?: string): object is FillerComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'filler') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new FillerComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfSeparatorComponent = (object: any, index?: string): object is SeparatorComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'separator') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('color' in object && (typeof object.color !== 'string' || !this.colorHexValidation(object.color)) ) { this.jsonValidate.property = `${status}/color${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new SeparatorComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfSpacerComponent = (object: any, index?: string): object is SpacerComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'spacer') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('size' in object && this.sizeValues.indexOf(object.size) === -1 ) { this.jsonValidate.property = `${status}/size${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new SpacerComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }  

  instanceOfBoxComponent = (object: any, index?: string): object is BoxComponent => {
    let status = `${index ? `/${index}` : ''}`
    this.jsonValidate.message = 'invalid property'
    if(!('type' in object) || typeof object.type !== 'string' || object.type !== 'box') { this.jsonValidate.property = `${status}${this.jsonValidate.property}`; return false }
    if('layout' in object && this.layoutValues.indexOf(object.layout) === -1 ) { this.jsonValidate.property = `${status}/layout${this.jsonValidate.property}`; return false }
    if('margin' in object && this.marginValues.indexOf(object.margin) === -1 ) { this.jsonValidate.property = `${status}/margin${this.jsonValidate.property}`; return false }
    if('spacing' in object && this.spacingValues.indexOf(object.spacing) === -1 ) { this.jsonValidate.property = `${status}/spacing${this.jsonValidate.property}`; return false }
    if('flex' in object && typeof object.flex !== 'number') { this.jsonValidate.property = `${status}/flex${this.jsonValidate.property}`; return false }
    if('contents' in object && object.contents.length === 0) { this.jsonValidate.property = `${status}/contents${this.jsonValidate.property}`; return false }
    if(object.contents.some((content, i) => {
      if(this.validateOfBoxComponent(content, i.toString())) {
        this.jsonValidate.property = `${status}/contents${this.jsonValidate.property}`
        return true
      }
    })) { return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BoxComponent()).indexOf(key) === -1) {
        this.jsonValidate.property += `${status}/${key}`
        this.jsonValidate.message = `${key} unknown field`
        return true
      }
      return false
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }

  instanceOfBlockStyle = (object: any): object is BlockStyle => {
    this.jsonValidate.message = 'invalid property'
    if('backgroundColor' in object && (typeof object.backgroundColor !== 'string' || !this.colorHexValidation(object.backgroundColor)) ) { this.jsonValidate.property = `${status}/backgroundColor${this.jsonValidate.property}`; return false }
    if('separator' in object && typeof object.separator !== 'boolean' ) { this.jsonValidate.property = `${status}/separator${this.jsonValidate.property}`; return false }
    if('separatorColor' in object && (typeof object.separatorColor !== 'string' || !this.colorHexValidation(object.separatorColor)) ) { this.jsonValidate.property = `${status}/separatorColor${this.jsonValidate.property}`; return false }
    if(Object.keys(object).some(key => {
      if(Object.keys(new BlockStyle()).indexOf(key) === -1) {
        this.jsonValidate.property += `/${key}`
        this.jsonValidate.message = `unknown field`
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
        this.jsonValidate.property += `/${key}`
        this.jsonValidate.message = `unknown field`
        return true
      }
      if(!this.instanceOfBlockStyle(object[key])) {
        this.jsonValidate.property = `/${key}${this.jsonValidate.property}`
        return true
      }
    })) { return false }
    this.jsonValidate.message = ''
    return true
  }
}

interface JSONValidate {
  property: string,
  message: string
}