import config from '~/config'

export default function({ $axios, app: { $cookies } }) {
  const session = $cookies.get(config.COOKIE_NAME)
  const jwt = session?.authenticated?.jwt

  if (jwt) {
    // we have loggedIn session
    $axios.defaults.headers.common['Authorization'] = `JWT ${jwt}`
  }
}
