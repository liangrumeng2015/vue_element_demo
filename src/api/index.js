/**
 * 所有的请求接口
 */
import Axios from './axios'
const httpURL = 'http://39.105.230.151/api'

// 登录接口
export const reqLogin = (data) =>Axios(httpURL + '/users/api/login.do',data,'post')