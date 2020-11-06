import html from 'tauri/api/http'

/**
 * 
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'} method
 * @param {string} url
 * @param {Record<string, any> | {}} head
 * @param {string | {}} body
 * @param {(value: any) => void} onPass
 * @param {(reason: any) => void} onFail
 * @param {(reason: any) => void} onErr
 */
export default function performRequest(method, url, head, body, onPass, onFail, onErr) {
  html.request({
    method: method,
    url: url,
    headers: head,
    body: body,
    responseType: 2, //ResponseType.Text
  }).then(onPass)
  .catch(onErr)
}