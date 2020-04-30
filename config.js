const ENV = process.env.NODE_ENV || 'development'
const config = {
  // BASE State
  COOKIE_NAME: 'hack_auth_session'
}

if (ENV === 'development') {
  config.axios = {
    host: "localhost",
    port: 3001,
    prefix: "/api/v2"
  }
  config.publicUrl = "http://test.hackerblocks"
} else if (ENV === 'production') {
  config.axios = {
    host: "hack-api.codingblocks.com",
    https: true,
    port: 443,
    prefix: "/api/v2"
  }
  config.publicUrl = "http://hack.codingblocks.com"
}

export default config
