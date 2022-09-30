const router = require("express").Router();
const artists = require("./artists");

/** Artist Endpoints **/
router.get("/api/artists/search", artists.search);
router.get("/api/artist/:artistId/details", artists.details);

module.exports = router;