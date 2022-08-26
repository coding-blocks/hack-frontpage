import config from '~/config'

export default function({ $axios, app: { $cookies } }) {
  const token = $cookies.get(config.COOKIE_NAME)
  const jwt = token

  if (jwt) {
    // we have loggedIn session
    $axios.defaults.headers.common['Authorization'] = `JWT ${jwt}`
  }
}
