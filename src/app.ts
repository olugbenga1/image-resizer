import express from 'express';
import routes from './route/index'

const app = express();
const PORT = 3000;

app.use('/api/v1', routes)

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})

export default app;