import {
  loggerErr,
  loggerInfo
} from '../logger/logger.js'

export function logError(err,req,res,next) {
    
    loggerErr.log('error',err);
    loggerInfo.log('info',err);
    next(err);
}

export function errorHnadler(err,req,res,next){
    res.status(500).render("partials/error", { error: {statusCode:500,error:err.stack,message:err.message}});
    
}

export function boomErrorHnadler(err,req,res,next){
    if(err.isBoom){
        const {output}=err;
      
        res.status(output.statusCode).render("partials/error", { error: output.payload});

    }
    next(err);
    
}
