import axios from 'axios'

let base = '/learn'

export const AdminLogin = params => {
  return axios.post(`${base}/admin/login`, {params: params})
}
