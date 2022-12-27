const http= require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url=== '/home') {
        res.write('<body>Welcome home</body>');
    }

    if (url=== '/about') {
        res.write('<body>Welcome to About Us page</body>');
    }

    if (url=== '/node') {
        res.write('<body>Welcome to my Node Js project</body>');
    }

});

server.listen(3000);