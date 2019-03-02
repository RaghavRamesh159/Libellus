const flash = require('connect-flash')

module.exports = {
    ensureAuthenticated : (req,res,next) => {
        if(req.isAuthenticated()){
            username=req.user.fname+' '+req.user.lname;
            next();
                
        }
        else{
            
            req.flash('error','please login')
            res.redirect('/')
        }
    }
}