const axios = require("axios");
const baseUrl = "https://api.deezer.com";

module.exports = {
  /**
   * Get artist info
   * @return {Array}
   * @description
   * The endpoint returns:
   * Image,
   * Artists name,
   * Fan count
   */
  getArtist: (req, res) => {
    const { artistId } = req.params;
    axios
      .get(`${baseUrl}/artist/${artistId}`)
      .then((response) => {
        //console.log(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  /**
   * Get artist albums
   * @return {Array}
   * @description
   * The endpoint returns:
   * Album image,
   * ALbum name,
   * Album release date
   */
  getAlbums: (req, res) => {
    const { artistId } = req.params;
    const { indexId } = req.body;
    axios
      .get(`${baseUrl}/artist/${artistId}/albums?index=${indexId}`)
      .then((response) => {
        //console.log(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  /**
   * Get artist top tracks
   * @return {Array}
   * @description
   * The endpoint returns:
   * tracks,
   * track duration
   */
  getTracks: (req, res) => {
    const { artistId } = req.params;
    axios
      .get(`${baseUrl}/artist/${artistId}/top`)
      .then((response) => {
        //console.log(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
