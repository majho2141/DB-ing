const mongoose = require("mongoose");
const WorkerDosSchema = mongoose.Schema({
    first_name : {
        type: String,
        require: true,
    },
    last_name : {
        type: String,
        require: true,
    },
    addres : [
        {
            zip_code : {
                type: String,
                require: true,
                unique:true,
            },
            city : {
                type: String,
                require: true,
            },
            municipality : {
                type: String,
                require: true,
            },
            country : {
                type: String,
                require: true,
            },
        }
    ],
    pets:{
            type: Array,
            require: true,
        },
    work : [
        {
            id_work : {
                type: String,
                require: true,
                unique:true,
            },
            job : {
                type: String,
                require: true,
            },
            company: [{
                id_company : {
                    type: String,
                    require: true,
                    unique:true,
                },
                name_company : {
                    type: String,
                    require: true,
                },
            }]
        }
    ],
});
const WorkerDos =  mongoose.model("WorkerDos",WorkerDosSchema);
module.exports = WorkerDos;
