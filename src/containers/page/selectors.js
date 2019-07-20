const selector = (key, name, init) => (
  state => state[key] ? state[key][name] : init
)

export default key => ({
  value: selector(key, 'value', 0),
  text: selector(key, 'text', ''),
  username: selector(key, 'username', ''),
  token: selector(key, 'token', ''),
})