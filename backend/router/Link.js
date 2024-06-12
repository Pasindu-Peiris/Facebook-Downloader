const router = require("express").Router();
const link = require("../module/link");

router.route("/").get((req, res) => {
    link.find().then(links => res.json(links)).catch(err => res.status(400).json('Error: ' + err));
})


router.route("/add").post((req, res) => {
    const slink = req.body.slink;
    const newLink = new link({ slink });
    newLink.save().then(() => res.json('Link added!')).catch(err => res.status(400).json('Error: ' + err));
})

const { ndown } = require("nayan-media-downloader")
router.route("/getdata").get(async (req, res) => {

    const slink = req.body.slink;

    try {
        console.log("Downloading video...");
        let URL = await ndown(slink)
        console.log("Video downloaded:", URL);
        res.json(URL);
    } catch (error) {
        console.error("Failed to download video:", error);
        res.status(500).json({ error: "Error downloading video" });
    }
});


module.exports = router;