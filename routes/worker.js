const workerController = require ("../controllers/worker");
const express = require("express");

const router = express.Router();

//http://localhost:3100/api/v1/worker/new-worker
router.post('/new-worker',workerController.createWorker);
//http://localhost:3100/api/v1/worker
router.get('/',workerController.getAllWorker);
//http://localhost:3100/api/v1/worker?id=""""
router.get('/:id',workerController.getWorkerById);
//http://localhost:3100/api/v1/worker?id=""""
router.patch('/:id',workerController.updateWorkerById);
//http://localhost:3100/api/v1/worker?id=""""
router.put('/:id',workerController.updateWorkerById);
//http://localhost:3100/api/v1/worker?id=""""
router.delete('/:id',workerController.deleteWorkerById);

module.exports=router;
