module.exports = {
    ensureAuthenticated : (req,res,next) => {
        if(req.isAuthenticated()){
            username=req.user.fname+' '+req.user.lname;
            next();
                
        }
        else{
            res.send('no')
        }
    }
}