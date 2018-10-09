import axios from 'axios'

axios.defaults.timeout = 20000

const baseUrl = 'http://localhost:9498/'

export default async (method, url, data) => {
  try {
    // let requestUrl
    // !url.includes('http') ? requestUrl = baseUrl + url : requestUrl = url
    console.log(method, url, data)
    let res = await axios({
      method,
      url: url,
      data,
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (const it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        console.log(ret)
        return ret
      }],
      headers: {
        'Authorization': 'Basic dnVlOnZ1ZQ==',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
