//import express
const express = require('express');
//define backend application
const app = express();
const PORT = 8383;

/*
let data = {
    users: ['James']
}*/

let data = ['James'];

// middleware
// tells the server to expect json data in a request
app.use(express.json());

// listen(port, function)
//app.listen(PORT, () => {console.log(`Server has started on: ${PORT}`)});


// running "npm init -y" is needed to vreate package.json
// all that is technically needed to start a server, to run server:
//   1. node server.js
//      - the file will run indefinitely 
//      - CTRL + C kills the server
//   2. Create a script in package.json         
//      - a script needs a key, in our case dev
//      - a command, same as one yped into terminal, in our case, node server.js
//      - "dev": "node server.js"
//      in terminal: npm run dev
//      terminal has to be killed and reran upon every change
//   3. Use nodemon
//      - We only need it in the dev environment so we give it a dev depencency flag
//      - npm install --save-dev nodemon
//      - script: "dev": "nodemon server.js"


/* Endpoints: "GET /" - the / is the HTTP path, the GET is the HTTP verb (method)
 Configure HTTP Verbs and Routes (or paths) 

 The method informs the nature of request and the route is a further subdirectory
(basically we direct the request to a body of code to respond appropriately,
    and these locations or routes are called endpoints      ) 
    
    Request Codes:
        - 100: Informational, request received, still processing
        - 200s: Successful, request fulfilled successfully
        - 300s: Redirection, further action required
        - 400s: Not Found, error in communication. 403 Forbidden, not authorised to do
        - 500s: error on server side
    */
 //get(route, (request, response)=>{}))

// Website Endpoints (for sending back HTMl and typically when a user enters a url in a browser)
/*app.get('/', (req, res) => {
    //this is endpoint number 1 - /
    console.log("Yay I hit an endpoint", req.method);
    //res.sendStatus(200);// causes the page to have the word ok
    res.send('<h1>Homepage</h1>');
});*/
app.get("/", (req, res) => {
    res.send(`
        <body style="background: pink; color: blue;">
            <h1>Data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `);
});

app.get("/dashboard", (req, res) => {
    console.log("I hit the /dashboard endpoint");
    res.send(`<body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>
        </body>`);
})


// API Endpoints (non-visual)
// to test this, a client emulator becomes extremely helpful

//CRUD (Method) - Create (POST), Read (GET), Update (PUT), Delete (DELETE)
app.get('/api/data' , (req, res) => {
    console.log("This one was for data");
    //res.send(data);
    res.status(203).send(data);
});

app.post('api/data', (req, res) => {
    const newEntry = req.body; // body is the data of the request

    /* Scenario: someone wants to create a user (for example when they click a sigh up button)
            The user clicks the sign up button after entering their credentials
            Thie browser is wired up to send out a network request to the server to
            handle that action*/
            data.push(newEntry.name);
    res.sendStatus(201);
})

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log("Deleted last element");
    res.sendCode(203);
});

// listen(port, function)
app.listen(PORT, () => {console.log(`Server has started on: ${PORT}`)});