import axios from 'axios'

axios.defaults.timeout = 20000

const baseUrl = 'http://localhost:9498/'

export default async (method, url, data) => {
  try {
    let requestUrl
    !url.includes('http') ? requestUrl = baseUrl + url : requestUrl = url
    let res = await axios({
      method,
      url: requestUrl,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}
