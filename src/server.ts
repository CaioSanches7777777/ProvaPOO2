import express from 'express';
import MainRouter from './routes/MainRoute';
import UsuarioRouter from './routes/UsuarioRoutes';
import LanceRouter from './routes/LanceRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';

const app = express();
const port = 3000;

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(UsuarioRouter);
app.use(MainRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})