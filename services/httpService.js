import axios from 'axios'

export class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.apiEndpoint,
      headers: {},
    })
  }

  setJWT(jwt) {
    this.client.defaults.headers.common['x-auth-token'] = jwt
  }

  get(url, config = null) {
    return this.client.get(url, config)
  }
  post(url, params, config = null) {
    return this.client.post(url, params, config)
  }
  delete(url, config = null) {
    return this.client.delete(url, config)
  }
  put(url, params, config = null) {
    this.client.put(url, params, config)
  }
}
