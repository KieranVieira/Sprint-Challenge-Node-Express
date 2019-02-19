- [ ] Mention two parts of Express that you learned about this week.

    2 parts of express I learned about was that we can create routes using express.Router() to split our server.js file into multiple routes making our clone a ton cleaner. Another thing I learned about express was that we can add middleware to any of our route handlers and it will act as a wall between the handler making us able to modify data, or do checks for authentication.

- [ ] Describe Middleware?

    Middleware is technically every route handler that we create but it can also be third party. There are 3 types of middleware, Error handling middleware, Third Party Middleware, and custom middleware. These all serve different purposes but the middleware functions add a couple arguments to the normal homies which are next and an error argument.

- [ ] Describe a Resource?

    Resources are things that we use in express to create our server, his could me middleware, requests, responses, etc. we can separate some resources like our Port and any API Keys that we use by creating a .env file and using the dotenv dependency.

- [ ] What can the API return to help clients know if a request was successful?

    The api can return multiple HTTP codes to let the client know a request was successfull. Usually it will send back a 200 (OK) or a 201 (Created) error code.

- [ ] How can we partition our application into sub-applications?

    We can partition our application into sub applications using express.Router() to create multiple routes and then requireing said routes in our server file using server.use('/api/route', routeHere) the first argument is the path for the route to start on and the seccond is the route itself. After creating the route any route handlers inside it will be found at the base path of /api/route/(route handler path goes here).
