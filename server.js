if (process.env.Node_ENV !== 'production') require('dotenv').config();

const app = require('./server/app'),
    port = process.env.PORT || 8080;


    //converting server to a websocket
    const io = require("socket.io")(8080, {
        cors: {
          origin: "http://localhost:3000",
        },
      });

      //connection event
io.on("connection", socket => {
    console.log("New user connected", socket.id);
})

app.listen(port, () => console.log(`Express server is up on port ${port}`));