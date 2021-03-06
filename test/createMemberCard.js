const WeChatCard = require('../index')
const _config = require('../libs/config')
WeChatCard.setConfig({
  appId: 'wx7003da87224dd76a',
  appSecret: 'c52a86f5511bd26cee0bed8e81119d97'
})
let memberCardInfo = {
  "card_type": "MEMBER_CARD",
  "base_info": {
    "logo_url": "http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZ/0",
    "brand_name": "海底捞",
    "code_type": "CODE_TYPE_TEXT",
    "title": "海底捞会员卡",
    "color": "Color010",
    "notice": "使用时向服务员出示此券",
    "service_phone": "020-88888888",
    "description": "不可与其他优惠同享",
    "date_info": {
      "type": "DATE_TYPE_PERMANENT"
    },
    "sku": {
      "quantity": 50000000
    },
    "get_limit": 3,
    "use_custom_code": false,
    "can_give_friend": true,
    "location_id_list": [
      123,
      12321
    ],
    "custom_url_name": "立即使用",
    "custom_url": "http://weixin.qq.com",
    "custom_url_sub_title": "6个汉字tips",
    "promotion_url_name": "营销入口1",
    "promotion_url": "http://www.qq.com",
    "need_push_on_view": true
  },
  "advanced_info": {
    "use_condition": {
      "accept_category": "鞋类",
      "reject_category": "阿迪达斯",
      "can_use_with_other_discount": true
    },
    "abstract": {
      "abstract": "微信餐厅推出多种新季菜品，期待您的光临",
      "icon_url_list": [
        "http://mmbiz.qpic.cn/mmbiz/p98FjXy8LacgHxp3sJ3vn97bGLz0ib0Sfz1bjiaoOYA027iasqSG0sj  piby4vce3AtaPu6cIhBHkt6IjlkY9YnDsfw/0"
      ]
    },
    "text_image_list": [
      {
        "image_url": "http://mmbiz.qpic.cn/mmbiz/p98FjXy8LacgHxp3sJ3vn97bGLz0ib0Sfz1bjiaoOYA027iasqSG0sjpiby4vce3AtaPu6cIhBHkt6IjlkY9YnDsfw/0",
        "text": "此菜品精选食材，以独特的烹饪方法，最大程度地刺激食 客的味蕾"
      },
      {
        "image_url": "http://mmbiz.qpic.cn/mmbiz/p98FjXy8LacgHxp3sJ3vn97bGLz0ib0Sfz1bjiaoOYA027iasqSG0sj piby4vce3AtaPu6cIhBHkt6IjlkY9YnDsfw/0",
        "text": "此菜品迎合大众口味，老少皆宜，营养均衡"
      }
    ],
    "time_limit": [
      {
        "type": "MONDAY",
        "begin_hour": 0,
        "end_hour": 10,
        "begin_minute": 10,
        "end_minute": 59
      },
      {
        "type": "HOLIDAY"
      }
    ],
    "business_service": [
      "BIZ_SERVICE_FREE_WIFI",
      "BIZ_SERVICE_WITH_PET",
      "BIZ_SERVICE_FREE_PARK",
      "BIZ_SERVICE_DELIVER"
    ]
  },
  "member_card": {
    "background_pic_url": "https://mmbiz.qlogo.cn/mmbiz/",
    "supply_bonus": true,
    "supply_balance": false,
    "prerogative": "test_prerogative",
    "wx_activate": true,
    // "auto_activate": true,
    "custom_field1": {
      "name_type": "FIELD_NAME_TYPE_LEVEL",
      "url": "http://www.qq.com"
    },
    // "activate_url": "http://www.qq.com",
    "custom_cell1": {
      "name": "使用入口2",
      "tips": "激活后显示",
      "url": "http://www.xxx.com"
    },
    "bonus_rule": {
      "cost_money_unit": 100,
      "increase_bonus": 1,
      "max_increase_bonus": 200,
      "init_increase_bonus": 10,
      "cost_bonus_unit": 5,
      "reduce_money": 100,
      "least_money_to_use_bonus": 1000,
      "max_reduce_bonus": 50
    },
    "discount": 10
  }
}

// 创建会员卡
WeChatCard.card.createCard(memberCardInfo)
  .then(result => {
    console.log('创建成功', result)
    let useForm = {
      "card_id": null,
      "required_form": {
        "can_modify": false,
        "common_field_id_list": [
          "USER_FORM_INFO_FLAG_MOBILE",
          "USER_FORM_INFO_FLAG_SEX",
          "USER_FORM_INFO_FLAG_IDCARD",
          "USER_FORM_INFO_FLAG_SEX"
        ]
      }
    }
    useForm.card_id = result.card_id
    return WeChatCard.memberCard.setActivateUserform(useForm)
  })
  .then(result => console.log(result))
  .catch(e => console.log('创建失败', e))

// 设置白名单
let openid = [
  "onmbcwHGMspGimdY7J5q3wHNVnSY", // 李浩
  "onmbcwMC3OXkEL7QfTPpHXue3CIE",
]
// WeChatCard.memberCard.setTestWhiteList(openid)
//   .then(result => console.log('设置成功', result))
//   .catch(e => console.log('设置失败', e))

// 得到access_token
// WeChatCard.basic.getAccessToken().then(token => console.log(token))


// const ticket = _config.getTicket()
// console.log(11111, ticket)

// const arr = ['123213', 'ahdshfdhas']
// const result = WeChatCard.basic.getSignature(arr)

// console.log(result)



