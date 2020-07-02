# gt-express-server

## Initial Setup

1. Create a server.js file
2. `npm init -y` - this creates our package.json file
3. `npm install express`

## Code the Server
1. Require express
2. Create an instance of express
3. Define a PORT for the app to run on.
4. Tell the app to listen on the port.

## Add Functionality to the Server

### Add Text/Html for the Homepage at Root Route
1. Use `res.send()` to return a string.
2. Optionally, we could also send back HTML.

### Add an API Route
1. Use res.json to send back a value
2. Use path params to accept input from the user.
