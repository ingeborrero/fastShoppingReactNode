exports.success = funcrion (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    });        
}