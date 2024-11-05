import { createServer } from "./server";

const app = createServer();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send("Hello World!");
});