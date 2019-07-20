export default key => ({
  value: state => state[key] ? state[key].value : 0,
  text: state => state[key] ? state[key].text : ''
})