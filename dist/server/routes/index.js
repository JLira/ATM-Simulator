"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('Olá DEV!');
});
router.get('/clientes', controllers_1.ClientesController.getAllValidation, controllers_1.ClientesController.getAll);
router.post('/clientes', controllers_1.ClientesController.createValidation, controllers_1.ClientesController.create);
