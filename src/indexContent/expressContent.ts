export default `
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (_req: Request, res: Response): void => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(\`App listening at http://localhost:\${PORT}\`);
});
`;
