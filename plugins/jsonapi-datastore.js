import { JsonApiDataStore } from 'jsonapi-datastore'

// eslint-disable-next-line
export default ({ app }, inject) => {
  const store = new JsonApiDataStore()
  inject('jsonApiStore', store)
}
