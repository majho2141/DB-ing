const workerDosController = require ("../controllers/workerDos");
const express = require("express");

const router = express.Router();

//http://localhost:3100/api/v1/workerDos/new-worker
router.post('/new-workerDos',workerDosController.createWorkerDos);
//http://localhost:3100/api/v1/workerDos
router.get('/',workerDosController.getAllWorkerDos);
//http://localhost:3100/api/v1/workerDos?id=""""
router.get('/:id',workerDosController.getWorkerDosById);
//http://localhost:3100/api/v1/workerDos?id=""""
router.patch('/:id',workerDosController.updateWorkerDosById);
//http://localhost:3100/api/v1/workerDos?id=""""
router.put('/:id',workerDosController.updateWorkerDosById);
//http://localhost:3100/api/v1/workerDos?id=""""
router.delete('/:id',workerDosController.deleteWorkerDosById);

module.exports=router;
