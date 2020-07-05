import express from 'express';
const app = express();
import routes from './routes'

app.use(express.json());
app.use(routes)

app.listen(3000, function(){
    console.log('App listening on port 3000')
})