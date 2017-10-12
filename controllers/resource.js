var express = require("express");
var router = express.Router();

global.resource = [
    {
        id: 1,
        image: "https://nessaating.files.wordpress.com/2015/04/wpid-img-20150416-wa0001.jpg",
        name: "Books"
    }
];

router.get("/", function(req, res){
    return res.json({
        resource: global.resource,
        error: false
    });
});

router.post("/", function(req, res){
    if(!req.body.name){
        return res.json({
            messsage: "resource name is required",
            error: true
        });
    }
    global.resource.push(req.body);
        return res.json({
            messsage: "success",
            error: false
        });
});


module.exports = router;