const axios = require('axios')

module.exports = {
  function1() {
    return 2
  },
  func3(message, cb) {
    cb(message);
  },
  stupidFunction() {
    let i = 0;
    return () => ++i;
  },
  getInternetData() {
    return axios.get('https://swapi.co/api/people')
      .then(response => response.data.results)
  }
}