module.exports = {
    ensureAuthenticated : (req,res,next) => {
        if(req.isAuthenticated()){
            //console.log(req.user)
            //console.log('authed')
            next();
                
        }
        else{
            //console.log(req.user);
            //console.log(req.isAuthenticated())
            res.send('no')
        }
    }
}