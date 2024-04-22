import express from 'express'
import RegistrationRoute from './Routes/RegistrationRoute';
import HomeRoute from './Routes/HomeRoute';

const Routers  = express.Router();
Routers.use('/Register',RegistrationRoute);
Routers.use('/Home',HomeRoute);
export default Routers