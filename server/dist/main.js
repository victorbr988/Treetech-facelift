"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const app = (0, server_1.createServer)();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get('/', (req, res) => {
    res.send(process.env.NODE_ENV);
});
