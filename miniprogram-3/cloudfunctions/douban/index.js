const axios = require('axios')
// 云函数入口文件
const cloud = require('wx-server-sdk')
// 解密
const doubanbook = require('doubanbook');
// 解析html文档用的
const cheerio = require('cheerio');
cloud.init()
// 调试
// 这就抓回来数据了?,获取的就是原来的网页右键源代码
async function searchDouban (isbn) {
  console.log('isbn');
  // url
  const url = 'https://book.douban.com/subject_search?search_text=' + isbn
  // 在node端用做http的爬虫请求
  let searchInfo = await axios.get(url)
  // console.log(searchInfo);
  // 获取后面的数据window.__DATA__=后面的数据,就是括号里面的数据 解密
  let reg = /window\.__DATA__ = "(.*)"/;
  // let reg = /window\.__DATA__ = "(.*)"/
  if (reg.test(searchInfo.data)) {
    // 表示第一个匹配到的括号,并且打印或者使用都会有效果
    let searchData = doubanbook(RegExp.$1);
    console.log("searchData", searchData)
    return searchData;
  }
}


async function getDouban (isbn) {
  let searchDatadetail = await searchDouban(isbn);
  console.log(typeof searchDatadetail[0].url);

  let detailPage = await axios.get(searchDatadetail[0].url);
  // 下面写第二个爬虫
  // 在node里面使用jq的语法来解析文档
  // console.log(detailPage);

  const $ = cheerio.load(detailPage.data);
  // 作者,id=info
  // 过滤掉空的
  const info = $('#info').text().split('\n').map(v => v.trim()).filter(v => v)
  console.log(info);
  let author = info[1];
  let tags = [];
  $('db-tags-section a.tag').each((i, v) => {
    tags.push({
      title: $(v).text()
    })
  })
  const ret = {
    // 获取tag
    create_time: new Date().getTime(),
    tags,
    author,
    title: searchDatadetail[0].title,
    rate: searchDatadetail[0].rating.value,
    image: searchDatadetail[0].cover_url,
    url: searchDatadetail[0].url,
    summary: $('#link-report .intro').text()
  }
  console.log(ret);

  return ret;

}

console.log(getDouban('9787010009148'));

// 云函数入口函数
// 所谓云函数,就是一个node项目,或者说函数
// 暴露一个main
exports.main = async (event, context) => {
  // 云函数的逻辑
  const { isbn } = event;
  return getDouban(isbn)
}