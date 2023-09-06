const koaContent = `
import Koa, { ExtendableContext } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

const port = process.env.PORT || 9999;

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(router.routes());
app.use(bodyParser());

app.on('error', (error: Error, ctx: ExtendableContext) => {
  console.error('SERVER_ERROR', error, ctx);
});

app.listen(port || 9999);
`;

module.exports = koaContent;
