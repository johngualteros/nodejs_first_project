import express from 'express';
// import ejs from 'ejs'; ExpressJS Template Engine
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from "./routes/index.js";
const app=express();

const __dirname=dirname(fileURLToPath(import.meta.url));

app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');
app.use(indexRoutes);

app.use(express.static(join(__dirname,'public')));


app.listen(3000)

