const express = require('express');
const routerApi = require('./routes');

const port = 3000;

const app = express();
const appRouter = express.Router();
const v1Router = express.Router();

app.use('/api', v1Router);
routerApi(appRouter);
v1Router.use('/v1', appRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});