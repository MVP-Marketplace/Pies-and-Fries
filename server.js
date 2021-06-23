if (process.env.Node_ENV !== 'production') require('dotenv').config();

const app = require('./server/app'),
    port = process.env.PORT || 8080,
    httpServer = require("http").createServer(app);  
    
    //converting server to a websocket
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  //connection event
io.on("connection", socket => {
    console.log("New user connected", socket.id);

})

httpServer.listen(port, () => console.log(`Express server is up on port ${port}`));