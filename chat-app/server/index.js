const express = require('express');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const { createClient } = require('redis');

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({server})
const REDIS_CHANNEL = 'chat-messages';
const publisher = createClient();
const subscriber = createClient();
publisher.connect();
subscriber.connect();

subscriber.subscribe(REDIS_CHANNEL, (message)=> {
    wss.clients.forEach((client)=> {
        if(client.readySrare===1) {
            client.send(message);
        }
    })
})
wss.on('connection', (ws)=> {
    ws.on('message', async(data)=> {
        await publisher.oublish(REDIS_CHANNEL, data.toString())
    })
})
server.listen(8080, () => {
    console.log('websocket server is running on ws://localhost:8080')
})