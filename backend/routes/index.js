const router = require("express").Router();

const artists = require("./artists");
const artist = require("./artist");

/** Artist Endpoints **/
router.post("/api/artists/tracks", artists.search);

/** Artists Endpoints **/
router.get("/api/artist/:artistId", artist.getArtist);
router.post("/api/artist/albums/:artistId", artist.getAlbums);
router.get("/api/artist/tracks/:artistId", artist.getTracks);

module.exports = router;
