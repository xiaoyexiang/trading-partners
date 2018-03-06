import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getUserInfo(id) {
  const url = debug ? 'http://rap2api.taobao.org/app/mock/6560/GET//user/info' : 'http://api.xiaoyexiang.com/api/user/info'

  const data = {
    id
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
