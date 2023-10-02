const mongoose = require("mongoose");
const WorkerSchema = mongoose.Schema({
    first_name : {
        type: String,
        require: true,
    },
    last_name : {
        type: String,
        require: true,
    },
    work : [
        {
            id_work : {
                type: String,
                require: true,
                unique:true,
            },
            name_work : {
                type: String,
                require: true,
            },
        }
    ],
    type_document : {
        type: String,
        require: true,
    },
    document_number : {
        type: String,
        require: true,
        unique:true,
    },
});
const Worker =  mongoose.model("Worker",WorkerSchema);
module.exports = Worker;
