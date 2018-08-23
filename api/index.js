import axios from 'axios'

export default async (method = 'post', url = '', data = {}, timeout = 1000 * 20) => {
  try {
    let res = await axios({
      method,
      url,
      data,
      timeout
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
