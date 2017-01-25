# Serverside rendering with React-Redux
An example of serverside rendering using react/redux along with typescript, to get static typing.

# Notable libs:
* Typescript
* Webpack with HMR 
* React
* Redux
* Redux-connect
* React-helmet
* Express

# Structure:
* App
  * Server.tsx is the serverside of the app where the serverside rendering occurs
  * Client.tsx is the clientside or browser which is the actual app
* API
  * API that the App uses
* Webpack
  * Folder containing webpack config and devserver

# Usage
* npm install
* node api/api.js
* node webpack/devserver.js
* webpack -config webpack.dev.server.config --watch
* node webpack/server/server.js

# Typings
Due to type constraint there is a problem with React-router and ReduxAsyncConnect, where the router expects RoutingContext. To fix this  modify the following file: node_modules/@types/react-router/lib/Router.d.ts at line 67:

<code>
   render?: (renderProps: React.Props<{}>) => RouterContext;
</code>

with

<code>
  render?: (renderProps: React.Props<{}>) => RouterContext | JSX.Element;
</code>

Todo: Create typings for ReduxAsyncConnect to avoid modifing existing typings