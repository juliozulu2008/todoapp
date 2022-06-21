const express = require('express');
const server = express();

server.get('/teste',(req, res) =>{
    res.send('Tudo Certo com o backend mudei a api');
});

server.listen(5000, () => {
    console.log("Its works");
});