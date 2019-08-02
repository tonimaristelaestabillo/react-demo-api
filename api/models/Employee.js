const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
    personalDetails: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        middleName: {
            type: String,
        },
        gender: {
            type: String,
        },
        title: {
            type: String,
        },
        address: {
            unitNumber: {
                type: String
            },
            street: {
                type: String
            },
            city: {
                type: String
            },
            province: {
                type: String
            },
            region: {
                type: String
            },
            zipCode: {
                type: Number
            }
        },
        contact: {
            landlineNumber: {
                type: String
            },
            mobileNumber: {
                type: String
            },
            email: {
                type: String
            }
        }
    },
    jobDetails: {
        title: {
            type: String
        },
        employeeNumber: {
            type: String
        },
        location: {
            type: String
        },
        department: {
            type: String
        },
        email: {
            type: String
        },
        salary: {
            type: Number
        }
    },
    benefitsDetails: {
        SSS: {
            type: String
        },
        Philhealth: {
            type: String
        },
        PAGIBIG: {
            type: String
        },
        BIR: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Employee', EmployeeSchema);