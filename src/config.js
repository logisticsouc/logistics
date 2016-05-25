export const API_ROOT = (process.env.NODE_ENV !== 'production')
      ? 'http://121.249.216.217:8888/api/'
      : 'http://127.0.0.1:8080/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
      ? '.logistics.cn'
      : ''
