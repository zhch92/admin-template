import axios from 'axios';
import {storageManager} from '../tool/cache.js'
import { message } from 'antd';


let apiData = (url, params,method='post') => {
  return new Promise((resolve, reject) => {
    let modeParam = ['post', 'put', 'patch']
    let modePost = modeParam.indexOf(method) !== -1
    axios({
      url: url,
      method: method, // default
      baseURL: ``,
      data: modePost ? params : '',
      params: !modePost ? params : '',
      timeout: 1000 * 30,
      responseType: 'json',
      headers:{Authorization:storageManager.getStorage('token')}
    }).then(resp => {
      if(resp.data&&resp.data.code===200){
        resolve(resp.data)
      }else{
        message.error(resp.data.message);
        // resolve(resp.data)
      }
    }).catch(function (error) {
      // console.log(error)
      reject(error)
    })
  })
}
export default apiData
