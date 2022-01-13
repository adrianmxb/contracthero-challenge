import express from 'express';
import cors from 'cors';
import { registerContollers } from './controllers';

const app = express();
app.use(cors());

registerContollers(app);

app.listen(3001, () => {
    console.log("server running strong on port 3001!");
})