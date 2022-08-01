import express from 'express';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());

/*  ------------------------------------- */
app.use('/products', productsRouter);
// app.use('/users', usersRouter);
// app.use('/orders', ordersRouter);
// app.use('/login', loginRouter);
/*  ------------------------------------- */

export default app;
