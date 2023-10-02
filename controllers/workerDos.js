const workerDosModel = require('../models/workerDos');

const createWorkerDos = async (req, res) => {
    try {
        const workerDosData = req.body;
        console.log(workerDosData)
        const newWorkerDos = new workerDosModel({ ...workerDosData });
        console.log(newWorkerDos);
        await newWorkerDos.save();
        res.status(201).json(workerDosData);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllWorkerDos = async (req, res) => {
    try {
        const allWorkerDos = await workerDosModel.find();
        res.status(200).json(allWorkerDos)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const getWorkerDosById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await workerDosModel.findById(id);
        console.log(id);
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

const updateWorkerDosById = async (req, res) => {
    try {
        const { id } = req.params;
        const workerDosDataEdit = req.body;
        const response= await workerDosModel.findByIdAndUpdate(id,workerDosDataEdit);
        res.status(200).json( {message: "Cambio exitoso"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteWorkerDosById= async(req,res)=>{
    try {
        const { id } = req.params;
        const response = await workerDosModel.findByIdAndDelete(id);
        res.status(200).json( {message: "Trabajo eliminado exitosamente"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = {
    createWorkerDos,
    getAllWorkerDos,
    getWorkerDosById,
    updateWorkerDosById,
    deleteWorkerDosById,
}
