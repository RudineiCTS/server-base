const express = require('express');

const app = express();

app.use(express.json());

app.use(express.json());

app.get('/project', (request, response)=>{
    const query = request.query;

    return response.json([
        'projeto1',
        'projeto2'

    ])
});

app.post('/projects', (request, response)=>{
    const body = request.body;

    return response.json([
        'projeto1',
        'projeto2',
        'projeto3',
    ])
});
app.put('/projects/:id', (request, response)=>{
    const params = request.params;


    return response.json([
        'projeto1',
        'projeto2',
        'projeto3',
    ])
});
app.delete('/projects/:id', (request, reponse)=>{
    return reponse.json([
        'projeto1',
        'projeto2',
        'projeto3',
    ])
})

app.listen(3333, ()=>{
    console.log('Back-end started! 🚀')
});