import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ValidateFlexService } from '../../services/validate-flex.service'

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.css']
})
export class ConsolePageComponent implements OnInit {
  actions: Subject<string> = new Subject<string>()
  status: string = 'OK'

  data: any = {
    "type": "carousel",
    "contents": [
      {
          "type": "bubble",
          "styles": {
            "body": {
              "backgroundColor": "#ffaaaa",
              "separator": true,
              "separatorColor": "#a3ff00"
            },
            "footer": {
              "backgroundColor": "#ffaaaa",
              "separator": true,
              "separatorColor": "#a3ff00"
            }
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "RECEIPT",
                "weight": "bold",
                "color": "#1DB446",
                "size": "sm"
              },
              {
                "type": "text",
                "text": "Brown Store",
                "weight": "bold",
                "size": "xxl",
                "margin": "md"
              },
              {
                "type": "text",
                "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                "size": "xs",
                "color": "#aaaaaa",
                "wrap": true
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Energy Drink",
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "$2.99",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Chewing Gum",
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "$0.99",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Bottled Water",
                        "size": "sm",
                        "color": "#555555",
                        "flex": 0
                      },
                      {
                        "type": "text",
                        "text": "$3.33",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "separator",
                    "margin": "xxl",
                    "color": "#111111"
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "xxl",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ITEMS",
                        "size": "sm",
                        "color": "#555555"
                      },
                      {
                        "type": "text",
                        "text": "3",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "TOTAL",
                        "size": "sm",
                        "color": "#555555"
                      },
                      {
                        "type": "text",
                        "text": "$7.31",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "CASH",
                        "size": "sm",
                        "color": "#555555"
                      },
                      {
                        "type": "text",
                        "text": "$8.0",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "text",
                        "text": "CHANGE",
                        "size": "sm",
                        "color": "#555555"
                      },
                      {
                        "type": "text",
                        "text": "$0.69",
                        "size": "sm",
                        "color": "#111111",
                        "align": "end"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "separator",
                "margin": "xxl"
              },
              {
                "type": "box",
                "layout": "horizontal",
                "margin": "md",
                "contents": [
                  {
                    "type": "text",
                    "text": "PAYMENT ID",
                    "size": "xs",
                    "color": "#aaaaaa",
                    "flex": 0
                  },
                  {
                    "type": "text",
                    "text": "#743289384279",
                    "color": "#aaaaaa",
                    "size": "xs",
                    "align": "end"
                  }
                ]
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "style": "primary",
                "action": {
                  "type": "message",
                  "text":"ok",
                  "label": "ok"
                }
              }
            ]
          }
        },
        {
        "type": "bubble",
        "styles": {
          "body": {
            "backgroundColor": "#894370",
            "separator": true,
            "separatorColor": "#a3ff00"
          },
          "footer": {
            "backgroundColor": "#894370",
            "separator": true,
            "separatorColor": "#a3ff00"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "RECEIPT",
              "weight": "bold",
              "color": "#1DB446",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "Brown Store",
              "weight": "bold",
              "size": "xxl",
              "margin": "md"
            },
            {
              "type": "text",
              "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
              "size": "xs",
              "color": "#aaaaaa",
              "wrap": true
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "xxl",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Energy Drink",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$2.99",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Chewing Gum",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$0.99",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Bottled Water",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$3.33",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "separator",
                  "margin": "xxl"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "margin": "xxl",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ITEMS",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "3",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "TOTAL",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$7.31",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "CASH",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$8.0",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "CHANGE",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$0.69",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                }
              ]
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "margin": "md",
              "contents": [
                {
                  "type": "text",
                  "text": "PAYMENT ID",
                  "size": "xs",
                  "color": "#aaaaaa",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "#743289384279",
                  "color": "#aaaaaa",
                  "size": "xs",
                  "align": "end"
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "action": {
                "type": "message",
                "text":"ok",
                "label": "ok"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "styles": {
          "body": {
            "backgroundColor": "#075ba3",
            "separator": true,
            "separatorColor": "#a3ff00"
          },
          "footer": {
            "backgroundColor": "#075ba3",
            "separator": true,
            "separatorColor": "#a3ff00"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "RECEIPT",
              "weight": "bold",
              "color": "#1DB446",
              "size": "sm"
            },
            {
              "type": "text",
              "text": "Brown Store",
              "weight": "bold",
              "size": "xxl",
              "margin": "md"
            },
            {
              "type": "text",
              "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
              "size": "xs",
              "color": "#aaaaaa",
              "wrap": true
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "xxl",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Energy Drink",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$2.99",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Chewing Gum",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$0.99",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Bottled Water",
                      "size": "sm",
                      "color": "#555555",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "$3.33",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "separator",
                  "margin": "xxl"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "margin": "xxl",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ITEMS",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "3",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "TOTAL",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$7.31",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "CASH",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$8.0",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "CHANGE",
                      "size": "sm",
                      "color": "#555555"
                    },
                    {
                      "type": "text",
                      "text": "$0.69",
                      "size": "sm",
                      "color": "#111111",
                      "align": "end"
                    }
                  ]
                }
              ]
            },
            {
              "type": "separator",
              "margin": "xxl"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "margin": "md",
              "contents": [
                {
                  "type": "text",
                  "text": "PAYMENT ID",
                  "size": "xs",
                  "color": "#aaaaaa",
                  "flex": 0
                },
                {
                  "type": "text",
                  "text": "#743289384279",
                  "color": "#aaaaaa",
                  "size": "xs",
                  "align": "end"
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "action": {
                "type": "message",
                "text":"ok",
                "label": "ok"
              }
            }
          ]
        }
      }
    ]
  }

  constructor(private validateFlexService: ValidateFlexService) {  }

  ngOnInit() {
    this.getJsonData(this.data)
  }

  onAction = (action: string): void => {
    this.actions.next(action)
  }

  getJsonData = ($e: object | boolean): void => {
    if($e) {
      this.data = $e
      switch(this.data.type) {
        case 'carousel':
          this.validateFlexService.instanceOfCarouselContainer(this.data)
          this.status = this.validateFlexService.jsonValidate.message.length > 0 ? this.validateFlexService.jsonValidate.message : 'OK'
          break
        case 'bubble':
          this.validateFlexService.instanceOfBubbleContainer(this.data)
          this.status = this.validateFlexService.jsonValidate.message.length > 0 ? this.validateFlexService.jsonValidate.message : 'OK'
          break
        default:
          this.status = 'invalid property'
      }
    }
    if(!$e) {
      console.log('JSON syntax Error')
      this.status = 'JSON syntax Error'
    }
  }
}