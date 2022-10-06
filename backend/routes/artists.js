const axios = require("axios");
const baseUrl = "https://api.deezer.com";

module.exports = {
  /**
   * Search tracks
   * @return {Array}
   * @description
   * The endpoint returns:
   * Track image,
   * Artists name,
   * Track
   */
  search: (req, res) => {
    const { query, indexId } = req.body;
    axios
      .get(`${baseUrl}/search?q=${query}&index=${indexId}`)
      .then((response) => {
        //console.log(response);
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
