
const defaultEngines = [{
  name: '通用搜索',
  value: 'commonsearch',
  children: [{
    name: '谷歌',
    value: 'https://www.google.com/search?q=',
  }, {
    name: '必应',
    value: 'https://www.bing.com/search?q=',
  }, {
    name: '百度',
    value: 'https://www.baidu.com/s?wd=',
  }, {
    name: '搜狗',
    value: 'https://www.sogou.com/web?query=',
  }, {
    name: '360',
    value: 'so',
  }],
}, {
  name: 'AI 搜索',
  value: 'aisearch',
  children: [{
    name: 'AI谷歌',
    value: 'google',
  }, {
    name: '必应',
    value: 'bing',
  }, {
    name: '搜狗',
    value: 'sogou',
  }, {
    name: '360',
    value: 'so',
  }],
}, {
  name: '图片搜索',
  value: 'imagesearch',
  children: [{
    name: '谷歌图片',
    value: 'google',
  }, {
    name: '必应',
    value: 'bing',
  }, {
    name: '搜狗',
    value: 'sogou',
  }, {
    name: '360',
    value: 'so',
  }],
}, {
  name: '购物生活',
  value: 'shopinglife',
  children: [{
    name: '京东',
    value: 'google',
  }, {
    name: '必应',
    value: 'bing',
  }, {
    name: '搜狗',
    value: 'sogou',
  }, {
    name: '360',
    value: 'so',
  }],
}]


export default defaultEngines;
