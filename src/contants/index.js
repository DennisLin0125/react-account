export const billListData = {
  pay: [
    {
      type: "foods",
      name: "餐飲",
      list: [
        {type: "food", name: "餐費"},
        {type: "drinks", name: "酒水飲料"},
        {type: "dessert", name: "甜食"},
      ],
    },
    {
      type: "taxi",
      name: "出行交通",
      list: [
        {type: "taxi", name: "車費"},
        {type: "longdistance", name: "旅行票費"},
      ],
    },
    {
      type: "recreation",
      name: "休閒娛樂",
      list: [
        {type: "bodybuilding", name: "健身"},
        {type: "game", name: "休閒玩樂"},
        {type: "audio", name: "媒體影音"},
        {type: "travel", name: "旅遊度假"},
      ],
    },
    {
      type: "daily",
      name: "日常支出",
      list: [
        {type: "clothes", name: "衣服"},
        {type: "bag", name: "包包"},
        {type: "book", name: "知識學習"},
        {type: "promote", name: "能量提升"},
        {type: "home", name: "家庭布置"},
      ],
    },
    {
      type: "other",
      name: "其他支出",
      list: [
        {type: "community", name: "管理費"},
      ],
    }
  ],
  income: [
    {
      type: "professional",
      name: "其他支出",
      list: [
        {type: "salary", name: "薪水"},
        {type: "overtimepay", name: "加班"},
        {type: "bonus", name: "獎金"},
      ],
    },
    {
      type: "other",
      name: "其他支出",
      list: [
        {type: "financial", name: "理財收入"},
        {type: "cashgift", name: "禮金收入"},
      ],
    }
  ]
}

export const billTypeToName = Object.keys(billListData).reduce((pre,key)=>{
  billListData[key].forEach(bill=>{
    bill.list.forEach(item=>pre[item.type] = item.name)
  })
  return pre
},{})