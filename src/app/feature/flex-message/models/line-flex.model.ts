export class TextComponent {
    type: 'text' = 'text'
    text: string = ''
    flex?: number = 0
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' = 'md'
    align?: 'start' | 'end' | 'center' = 'start'
    gravity?: 'top' | 'bottom' | 'center' = 'top'
    wrap?: boolean = false
    maxLines?: number = 0
    weight?: 'regular' | 'bold' = 'regular'
    color?: string = ''
    action?: PostbackActionModel | MessageActionModel | URIActionModel = null
}

export class ButtonComponent {
    type: 'button' = 'button'
    action: PostbackActionModel | MessageActionModel | URIActionModel = null
    flex?: number = 0
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    height?: 'sm' | 'md' = 'md'
    style?: 'link' | 'primary' | 'secondary' = 'link'
    color?: string = ''
    gravity?: 'top' | 'bottom' | 'center' = 'top'
}

export class IconComponent {
    type: 'icon' = 'icon'
    url: string = ''
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' = 'md'
    aspectRatio?: string = ''
}

export class ImageComponent {
    type: 'image' = 'image'
    url: string = ''
    flex?: number = 0
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | 'full' = 'md'
    align?: 'start' | 'end' | 'center' = 'start'
    gravity?: 'top' | 'bottom' | 'center' = 'top'
    aspectRatio?: string = ''
    aspectMode?: 'cover' | 'fit' = 'fit'
    backgroundColor?: string = ''
    action?: PostbackActionModel | MessageActionModel | URIActionModel = null
}

export class FillerComponent {
    type: 'filler' = 'filler'
}

export class SeparatorComponent {
    type: 'separator' = 'separator'
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    color?: string = ''
}

export class SpacerComponent {
    type: 'spacer' = 'spacer'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' = 'md'
}

export class BoxComponent {
    type: 'box' = 'box'
    layout: 'vertical' | 'horizontal' | 'baseline' = 'vertical'
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    flex?: number = 0
    action?: PostbackActionModel | MessageActionModel | URIActionModel = null
    contents: Array<TextComponent | ButtonComponent | IconComponent | ImageComponent> = []
}

export class BlockStyle {
    backgroundColor?: string = ''
    separator?: boolean = false
    separatorColor?: string = ''
}

export class BubbleStyle {
    header?: BlockStyle = null
    hero?: BlockStyle = null
    body?: BlockStyle = null
    footer?: BlockStyle = null
}

export class BubbleContainer {
    type: 'bubble' = 'bubble'
    direction?: 'ltr' | 'rtl' = 'ltr'
    header?: BoxComponent = null
    hero?: ImageComponent = null
    body?: BoxComponent = null
    footer?: BoxComponent = null
    styles?: BubbleStyle = null
}

export class CarouselContainer {
    type: 'carousel' = 'carousel'
    contents: Array<BubbleContainer> = []
}

interface PostbackActionModel {
    type: string,
    label?: string,
    data: string,
    displayText?: string,
    text?: string
}

interface MessageActionModel {
    type: string,
    label?: string,
    text: string
}

interface URIActionModel {
    type: string,
    label?: string,
    uri: string
}