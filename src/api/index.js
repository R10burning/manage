import axios from 'axios'
import apis from './apis'

axios.defaults.timeout = 20000

const baseUrl = 'http://localhost:9498/'

let request = async (method = 'post', url = '', data = {}) => {
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
    console.log(res.data)
  } catch (err) {
    console.log(err)
  }
}

export default {
  request,
  apis
}
