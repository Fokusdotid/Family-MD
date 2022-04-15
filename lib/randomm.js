const fetch = require('node-fetch')

function fetchRandomJson(url, options) {
    return new Promise(async (resolve, reject) => {
        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                const json = JSON.parse(JSON.stringify(res))
                const index = Math.floor(Math.random() * json.length)
                const random = json[index]
                resolve(random)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

module.exports = { fetchRandomJson }
