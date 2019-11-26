/**
 * 发送异步请求的
 */
import axios from 'axios';
import qs from 'qs';
import {
  Message
} from 'element-ui';

function Axios(url, data = {}, method = 'get') {
  var that = this;
  return new Promise((resolve, reject) => {
    let promise;
    if (method == 'get') {
      promise = axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, qs.stringify(data))
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      console.log('请求失败', error.message)
      Message({
        message: error.message,
        type: 'error'
      })
    })
  })
}
export default Axios;
