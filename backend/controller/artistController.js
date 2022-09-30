const fetch = require("../utils/fetch");

module.exports = {
    /**
     * Search artists
     * @param {String} query 
     * @returns {Array}
     */
    getSearch: async (query) => {
        if (!query) return null;
        const searchResults = await fetch.get(`/search/artist?q=${query}`);
        return searchResults;
    },

    /**
     * Get artists details
     * @param {String} artistId 
     * @returns {Object}
     */
    getDetails: async (artistId) => {
        try {
            const requestSeries = [{
                name: "artist",
                url: "/"
            },
            {
                name: "tracks",
                url: "top?limit=5"
            },
            {
                name: "albums",
                url: "/albums"
            }];

            return Promise.all(requestSeries.map(async (request) => {
                const apiResponse = await fetch.get(`/artist/${artistId}/${request.url}`);
                return { [request.name]: apiResponse };
            })).then((response) => {
                return response.reduce((obj, item) => {
                    const key = Object.keys(item)[0]
                    obj[key] = item[key]
                    return obj
                }, {})
            });
        } catch (error) {
            throw error;
        }
    }
}