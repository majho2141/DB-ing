const workerModel = require('../models/worker');

const createWorker = async (req, res) => {
    try {
        const workerData = req.body;
        console.log(workerData)
        const newWorker = new workerModel({ ...workerData });
        console.log(newWorker);
        await newWorker.save();
        res.status(201).json(workerData);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllWorker = async (req, res) => {
    try {
        const allWorker = await workerModel.find();
        res.status(200).json(allWorker)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getWorkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await workerModel.findById(id);
        console.log(id);
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

const updateWorkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const workerDataEdit = req.body;
        const response= await workerModel.findByIdAndUpdate(id,workerDataEdit);
        res.status(200).json( {message: "Cambio exitoso"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteWorkerById= async(req,res)=>{
    try {
        const { id } = req.params;
        const response = await workerModel.findByIdAndDelete(id);
        res.status(200).json( {message: "Trabajo eliminado exitosamente"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = {
    createWorker,
    getAllWorker,
    getWorkerById,
    updateWorkerById,
    deleteWorkerById,
}
