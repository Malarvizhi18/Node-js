const http = require('http')
const url=require('url')
http.createServer((req,res) => {
    res.writeHead(200,{'content-Type': 'text/html'})
    url.parse(req.url,true)
    const requrl=url.parse(req.url,true)
    const namevar=requrl.query.name;
    const number=requrl.query.number;
    // console.log(namevar)
    // console.log(number)

    if(requrl.pathname=== '/home'){
        res.write('<html>'
        +
        '<h1>Home page</h1></html>')
    }
    else if(requrl.pathname=== '/contact'){
        if(requrl.query.region ==='India')
        {
            res.write('<html>'
        +
        '<h1>India contact number:9780456787</h1></html>')
        console.log('India')
        }
        else if(requrl.query.region === 'Tamilnadu')
        {
            res.write('<html>'
        +
        '<h1>Tamilnadu is culture full country</h1></html>')
        console.log('Tamilnadu')
        }
        else{
            res.write('<html>'
            +
            '<h1>region not found</h1></html>')
        }
    }
    else{
        res.write('<html>'
        +'<h1>page not found</h1></html>')
    }
    // res.write('<html>' + '<h1>hello world</h1></html>')
    res.end();
}).listen(1040)
