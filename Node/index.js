const { application } = require('express');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'})); //allows server to parse incoming data as json.

app.post('/api',(request, response) => {
    console.log('I got a request');
    console.log(request.body);
    response.json({
        status: 'success',
        
    })
});