import axios from 'axios'

axios.defaults.timeout = 20000

export default async (method = 'post', url = '', data = {}) => {
  try {
    let res = await axios({
      method,
      url,
      data,
      headers: {'Content-Type': 'application/json'}
    })
    console.log(res.data)
  } catch (err) {
    console.log(err)
  }
}
