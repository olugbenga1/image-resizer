import express from 'express';
import imageResize from './api/image_resize';

 const routes = express.Router();

 routes.get('/', (req, res) => {
    res.send('Welcome to the resize endpoint')
    // console.log(req.params)
})

routes.use(imageResize)

export default routes;