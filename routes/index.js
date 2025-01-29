const bandsRouter = require('./bands.router');
const venuesRouter = require('./venues.router');
const usersRouter = require('./users.router');
const eventsRouter = require('./events.router');

function routerApi(appRouter) {
  appRouter.use('/bands', bandsRouter);
  appRouter.use('/venues', venuesRouter);
  appRouter.use('/users', usersRouter);
  appRouter.use('/events', eventsRouter);

  appRouter.get('/', (req, res) => {
    res.send('Hello World!');
  });
}

module.exports = routerApi;
