const axios = require('axios')

module.exports = {
    function1() {
        return 2
    },
    function2() {
        return 'Hunter is the greatest'
    },
    func1() {
        return 'Tyler'
    },
    func3(str, cb){
        cb(str)
    },
    getInternetData(){
    return axios.get('https://swapi.co/api/people').then(res =>{
        return res.data.results
    })
    }
}