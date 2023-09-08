const expressContent = `
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(\`App listening at http://localhost:\${PORT}\`);
});
`;

module.exports = expressContent;
