const path = require('path');
const contactSchema = path.Schema({
    name : {
        type : String,
        required: [true, "Please add the contact name"],
    },
    email : {
        type : String,
        required: [true, "Please add the contact email address"],
    },
    phone : {
        type : String,
        required: [true, "Please add the contact phone number"],
    }
});
module.exports = path.model("Contact", contactSchema);