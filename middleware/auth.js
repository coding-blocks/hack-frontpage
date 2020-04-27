import config from '~/config'

export default async function ({ store, app: { $cookies }, $axios }) {
  const isAuthenticated = !!store.state.session.user
  const session = $cookies.get(config.COOKIE_NAME)
  const jwt = session?.authenticated?.jwt

  if (isAuthenticated || !jwt) {
    return;
  }
  if (jwt) {
    // fetch current users
    try {
      const { data: { data: response } } = await $axios.request('/users/me')
      const user = {
        id: response.id,
        ...response.attributes
      }
      store.commit('session/setUser', user)
    } catch (err) {
      $cookies.remove(config.COOKIE_NAME)
    }
  }
}
