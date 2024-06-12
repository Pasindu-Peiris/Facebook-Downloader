const router = require("express").Router();
const link = require("../module/link");

router.route("/get").get((req, res) => {
   console.log("Hello");
    
})


router.route("/add").post((req, res) => {
    const slink = req.body.slink;
  
    console.log(slink);
    
})

module.exports = router;