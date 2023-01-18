import { Router } from 'express';

import {ClientesController} from './../controllers';


const router = Router();


router.get('/', (_, res) => {
  return res.send('Olá CHECADOR!');
});


router.get('/clientes', ClientesController.getAllValidation, ClientesController.getAll);
router.post('/clientes', ClientesController.createValidation, ClientesController.create);
router.get('/clientes/:id', ClientesController.getByIdValidation, ClientesController.getById);
router.put('/clientes/:id', ClientesController.updateByIdValidation, ClientesController.updateById);
router.delete('/clientes/:id', ClientesController.deleteByIdValidation, ClientesController.deleteById);


export { router };