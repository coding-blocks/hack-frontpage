const ENV = process.env.NODE_ENV || 'development'
const config = {
  // BASE State
  COOKIE_NAME: 'cb_auth'
}

if (ENV === 'development') {
  config.axios = {
    host: "localhost",
    port: 3000,
    prefix: "/api/v2"
  }
  config.publicUrl = "http://localhost:8081"
  config.ONEAUTH_URL= "http://localhost:3838"
  config.ONEAUTH_CLIENT_ID = 3680446660
} else if (ENV === 'production') {
  config.axios = {
    host: "hack-api.codingblocks.com",
    https: true,
    port: 443,
    prefix: "/api/v2"
  }
  config.publicUrl = "http://hack.codingblocks.com"
  config.ONEAUTH_URL= "https://account.codingblocks.com"
  config.ONEAUTH_CLIENT_ID = 2146237097
}

export default config
