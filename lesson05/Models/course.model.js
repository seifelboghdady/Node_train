const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title : {
        type : 'string',
        require : 'true'
    },
    price :{
        type: 'number',
        require : 'true'
    }
})

module.exports = mongoose.model('Course', courseSchema);