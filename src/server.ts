import express from 'express';
import cookieParser from 'cookie-parser';

import { errorHandler } from '../error-handler/error-handler';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(errorHandler);

app.listen(port, () => {
  console.log('App started at port 3000');
});
