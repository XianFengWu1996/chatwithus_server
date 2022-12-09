import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';

import { errorHandler } from '../error-handler/error-handler';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.get('/page2', (req: Request, res: Response) => {
  res.render('page2');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log('App started at port 3000');
});
