var fs = require('fs')

fs.readFile('data.txt', (err, data) => {
    if(err) {
        console.log('error has been found :(')
    }

    setTimeout(() => {
        console.log('timeout here. :D')
        console.log(data.toString())
    }, 3000)
})

console.log('this should have the end')