const express = require('express');
let app = express();
app.use(express.static('public')); // NAME OF THE DIRECTORY IS PUBLIC

const serverPort = process.env.PORT || 3000;

const respHttpOptions = {
    root: `public/`,
    dotfiles: 'deny',
    headers: {
        'dina-timestamp': Date.now(),
        'my-xxx-header': true
    }
};
app.get('*', (req, resp) => { // HANDLE THE REQUEST HERE
    resp.sendFile('index.html', respHttpOptions, (err) => {
        // SEND INDEX.HTML INSIDE PUBLIC DIRECTORY
        if (!err)
            console.log(`Served index.html`);
        else
            console.log(`Failed to serve index.html ${err}`);
    })
});

try {
    app.listen(serverPort);
    console.log(`Server started at ${serverPort}`);
} catch (e) {
    console.log(e);
}