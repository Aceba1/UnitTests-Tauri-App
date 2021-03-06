import http, { ResponseType } from 'tauri/api/http'

/**
 * 
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'} method
 * @param {string} url
 * @param {Record<string, any> | {}} param
 * @param {Record<string, any> | {}} head
 * @param {string | {}} body
 * @param {(value: any) => void} onPass
 * @param {(reason: any) => void} onFail
 * @param {(reason: any) => void} onErr
 */
export default function performRequest(method, url, param, head, body, onPass, onFail, onErr, index) {
  try {
    http.request({
      method: method,
      url: url,
      params: param,
      headers: head,
      body: body,
      responseType: ResponseType.Text,
      
    }).then(v => onPass(v, index), v => onFail(v, index))
    .catch(v => onErr(v, index))
  } catch(e) {
    onErr(e, index);
  }
}