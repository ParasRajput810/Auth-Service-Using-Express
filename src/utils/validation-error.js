const {StatusCodes} = require("http-status-codes");
const error = require("./error-handler");

class ValidationError extends error{
    constructor(error){
        let errorName = error.name; 
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        super(errorName , "Not able to validate request",
        explanation , StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError;