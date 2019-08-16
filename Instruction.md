# Step by Step

1. npm init === package.json file
2. server.js === main source for server
3. npm i -D concurrently json-server
   concurrently ==> server restart
   json-server ==> json database source
4. npm i express mssql nodemon
   express and mssql ==> server to sql interpreter
   nodemon ==> restart server
5. npx create-react-app client === react server folder
6. cd client --> npm i axios react-router-dom react-table
   axios ==> fetch data from api
   react-router-dom ==> routes for changing webpages
   react-table ==> datatable
   design table ==> import 'react-table/react-table.css';
7. npm install @material-ui/core, npm install @material-ui/icons  
   @material ==> design bootstrap
8. add "proxy": "http://localhost:5000" in client/package.json file
9. In server package.json
   "client": "npm start --prefix client",
   "clientinstall": "npm install --prefix client",
   "dev": "concurrently \"npm run server\" \"npm run client\""
10. In client package.json
    "proxy": "http://localhost:5000"
11. learn and read link in material icons
    https://google.github.io/material-design-icons/#icon-font-for-the-web
    and get icons from
    https://material.io/tools/icons/?icon=commute&style=baseline
    copy link to index html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet">
    add this code to generate icon <i class="material-icons">commute</i>
    watch https://www.youtube.com/watch?v=D9ciQq6cwmI
12. npm i redux react-redux redux-thunk redux-devtools-extension
    (state management)
    npm install --save redux (save because of error)
13. Add redux extension for chrome for debugging purposes.
14. create a store.js boilerplate copy code below
    import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers';

    const initialState = {};
    const middleware = [thunk];
    const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

    export default store;

15. create actions reducer types folder.

watch for redux tutorials
https://www.youtube.com/channel/UC2xRE4hUCQ3xO3ymEtMh1Hw/videos
https://www.youtube.com/watch?v=jXp05H8whtM

16. npm i @material-ui/pickers @date-io/date-fns date-fns@next
    datetimepickers = https://material-ui-pickers.dev/getting-started/installation

17. npm i react-swipeable-views
    used for mobile devices swiping gestures
