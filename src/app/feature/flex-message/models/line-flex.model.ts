export class TextComponent {
    type: string = 'text'
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
    type: string = 'button'
    action: PostbackActionModel | MessageActionModel | URIActionModel = null
    flex?: number = 0
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    height?: 'sm' | 'md' = 'md'
    style?: 'link' | 'primary' | 'secondary' = 'link'
    color?: string = ''
    gravity?: 'top' | 'bottom' | 'center' = 'top'
}

export class IconComponent {
    type: string = 'icon'
    url: string = ''
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' = 'md'
    aspectRatio?: string = ''
}

export class ImageComponent {
    type: string = 'image'
    url: string = ''
    flex?: number = 0
    margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' = 'md'
    align?: 'start' | 'end' | 'center' = 'start'
    gravity?: 'top' | 'bottom' | 'center' = 'top'
    aspectRatio?: string = ''
    aspectMode?: 'cover' | 'fit' = 'fit'
    backgroundColor?: string = ''
    action?: PostbackActionModel | MessageActionModel | URIActionModel = null
}

export class BoxComponent {
    type: string = 'box'
    layout: 'vertical' | 'horizontal' = 'vertical'
    spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'none'
    contents: Array<TextComponent | ButtonComponent | IconComponent | ImageComponent> = []
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