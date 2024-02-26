module.exports = theFunc => (req,res,next) => {
    // promise is the class of javascript
    
    Promise.resolve(theFunc(req,res,next)).catch(next)

}