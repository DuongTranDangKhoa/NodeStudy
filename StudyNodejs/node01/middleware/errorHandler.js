const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
      const statusCode = res.statusCode ?  res.statusCode : 500;
      switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                  title : "Validation Failed",
                  message: err.message,
                  stackTrace : err.stack,
            });
            break;
            case constants.VALIDATION_ERROR:
            res.json({
                  title: "Not Found",
                  message: err.message,
                  stackTrace: err.stack,
            });
            case constants.UNAUTHORIZED:
            res.json({
                  title: "Not Found",
                  message: err.message,
                  stackTrace: err.stack,
            });
            case constants.FORBIDDEN:
            res.json({
                  title: "Not Found",
                  message: err.message,
                  stackTrace: err.stack,
            });
            case constants.NOT_FOUND:
            res.json({
                  title: "Not Found",
                  message: err.message,
                  stackTrace: err.stack,
            });
            
            default:
            break;
      }
     
};
module.exports = errorHandler;