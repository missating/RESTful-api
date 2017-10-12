var express = require("express");
var router = express.Router();

global.resource = [{
    id: 1,
    image: "https://nessaating.files.wordpress.com/2015/04/wpid-img-20150416-wa0001.jpg",
    name: "Books"
}];

router.get("/", function (req, res) {
    return res.json({
        resource: global.resource,
        error: false
    });
});

router.post("/", function (req, res) {
    if (!req.body.name) {
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

router.put("/:resourceid", function(req, res) {
    for (var i = 0; i < global.resource.length; i++) {
        if (global.resource[i].id === parseInt(req.params.resourceid, 10)) {
            global.resource[i].image = req.body.image;
            global.resource[i].name = req.body.name;
            return res.json({
                messsage: "success",
                error: false
            });
        }
    }
    return res.status(404).json({
        messsage: "resource not found",
        error: true
    });

});


router.delete("/:resourceid", function (req, res) {

});

router.get("/:resourceid", function (req, res) {
    for (var i = 0; i < global.resource.length; i++) {
        if (global.resource[i].id === parseInt(req.params.resourceid, 10)) {
            return res.json({
                resource: global.resource[i],
                messsage: "success",
                error: false
            });
        }
    }

    return res.status(404).json({
        messsage: "resource not found",
        error: true
    });
});

module.exports = router;