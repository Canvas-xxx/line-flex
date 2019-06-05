import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

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
          "footer": {
            "separator": true
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
        }
      },
      {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "https://linecorp.com"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "action": {
            "type": "uri",
            "uri": "https://linecorp.com"
          },
          "contents": [
            {
              "type": "text",
              "text": "Brown's Burger",
              "size": "xl",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png"
                    },
                    {
                      "type": "text",
                      "text": "$10.5",
                      "weight": "bold",
                      "margin": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "400kcl",
                      "size": "sm",
                      "align": "end",
                      "color": "#aaaaaa"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "icon",
                      "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png"
                    },
                    {
                      "type": "text",
                      "text": "$15.5",
                      "weight": "bold",
                      "margin": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": "550kcl",
                      "size": "sm",
                      "align": "end",
                      "color": "#aaaaaa"
                    }
                  ]
                }
              ]
            },
            {
              "type": "text",
              "text": "Sauce, Onions, Pickles, Lettuce & Cheese",
              "wrap": true,
              "color": "#aaaaaa",
              "size": "xxs"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "spacer",
              "size": "xxl"
            },
            {
              "type": "button",
              "style": "primary",
              "color": "#905c44",
              "action": {
                "type": "uri",
                "label": "Add to Cart",
                "uri": "https://linecorp.com"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "http://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Brown Cafe",
              "weight": "bold",
              "size": "xl"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": [
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                },
                {
                  "type": "text",
                  "text": "4.0",
                  "size": "sm",
                  "color": "#999999",
                  "margin": "md",
                  "flex": 0
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Place",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Time",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "10:00 - 23:00",
                      "wrap": true,
                      "color": "#666666",
                      "margin": "xs",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "link",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "CALL",
                "uri": "https://linecorp.com"
              }
            },
            {
              "type": "button",
              "style": "link",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "WEBSITE",
                "uri": "https://linecorp.com"
              }
            },
            {
              "type": "spacer",
              "size": "sm"
            }
          ],
          "flex": 0
        }
      },
      {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "http://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "text",
              "text": "BROWN'S ADVENTURE\nIN MOVIE",
              "wrap": true,
              "weight": "bold",
              "gravity": "center",
              "size": "xl"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": [
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                },
                {
                  "type": "icon",
                  "size": "sm",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                },
                {
                  "type": "text",
                  "text": "4.0",
                  "size": "sm",
                  "color": "#999999",
                  "margin": "md",
                  "flex": 0
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Date",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "Monday 25, 9:00PM",
                      "wrap": true,
                      "size": "sm",
                      "color": "#666666",
                      "flex": 4
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Place",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "7 Floor, No.3",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 4
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Seats",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 1
                    },
                    {
                      "type": "text",
                      "text": "C Row, 18 Seat",
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 4
                    }
                  ]
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "xxl",
              "contents": [
                {
                  "type": "spacer"
                },
                {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png",
                  "aspectMode": "cover",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": "You can enter the theater by using this code instead of a ticket",
                  "color": "#aaaaaa",
                  "wrap": true,
                  "margin": "xxl",
                  "size": "xs"
                }
              ]
            }
          ]
        }
      }
    ]
  }

  constructor() {  }

  ngOnInit() {
  }

  onAction = (action: string): void => {
    this.actions.next(action)
  }

  getJsonData = ($e: object | boolean): void => {
    if($e) {
      this.data = $e
      this.status = 'OK'
    }
    if(!$e) {
      console.log('JSON syntax Error')
      this.status = 'JSON syntax Error'
    }
  }
}