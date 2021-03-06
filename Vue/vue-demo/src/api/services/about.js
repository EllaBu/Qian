// api.js
import { httpGet, httpPost } from './instances'
export const getBookList = (params = {}) =>
  httpGet({ url: 'goodbook/catalog', params })
  // httpGet({ url: 'joke/content/list.php', params })

 export const getWeather = (data) => {
  return httpPost({
    url: '/simpleWeather/query',
    data
  })
 }