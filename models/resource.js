const mongoose = require('mongoose')

const ResourceSchema = new mongoose.Schema({
    developerId = [type = mongoose.Schema.Types.ObjectId],
    question: {
        type: String,
        required: true
    },
    decription: [String]
})
const ResourceModel = mongoose.model('resource', ResourceSchema)



module.exports = {
    ResourceModel
}