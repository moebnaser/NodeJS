const {readFile, writeFile} = require ('fs')

readFile ('./content/first.txt','utf8', (err, result) => {
    if (err){
        return "error"
    }
    const first = result 
    readFile ('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            return "error"
        }
        const second = result 

        writeFile ('./content/result-async.txt', 
        `here is the result: ${first}, ${second}`)

    })

})





