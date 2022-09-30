const messages = require("../utils/response");
const ArtistController = require("../controller/artistController")

module.exports = {
    /**
     * Search Artists
     * @return {Array}
     * @description
     * The endpoint returns:  
     * Image,
     * Artists name,
     * Fan count
     */
    search: async (req, res) => {
        try {
            const { qs } = req.query;
            const response = await ArtistController.getSearch(qs);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(messages.err500(error.message));
        }
    },

    /**
     * Get Artists Info
     * @return {Object}
     * @description
     * The endpoint returns:   
     * Image artist,
     * Artist with their fan count,
     * Artists top 5 most popular tracks,
     * Artists albums
     */
    details: async (req, res) => {
        try {
            const { artistId } = req.params;
            const response = await ArtistController.getDetails(artistId);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(messages.err500(error.message));
        }
    }
}