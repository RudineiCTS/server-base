const express = require('express');

const app = express();

app.use(express.json());

app.get('/project', (request, response)=>{
    return response.json([
        'projeto1',
        'projeto2'

    ])
});

app.post('/project', (request, response)=>{
    return response.json([
        'projeto1',
        'projeto2',
        'projeto3',
    ])
})

app.listen(3333, ()=>{
    console.log('Back-end started! 🚀')
});