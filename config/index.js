export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxf6e965a45c05c4f3",
    // 公众号appSecret
    appSecret: "c173558437f1faad79a6c3b228cae36a",
    // 模板消息id
    templateId: "MBzxRnaXJ8fQXGX7Iu5NdRosToids8kYtD3N96wYb_M",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o8X0y53RfHNbaJTXhEZRKo0SK-Y0"],
     
    // 信息配置
    // 所在省份
    province: "湖北",
    // 所在城市
    city: "武汉",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝宝", "year": "2001", "date": "07-13", "type": 'new'},
      {"name": "大肚菩萨", "year": "1999", "date": "12-11", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-06-10",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
