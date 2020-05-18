const axios = require("axios");

class Controller {
  static read(req, res) {
    axios.get("https://api.ipify.org/?format=json").then(({ data }) => {
      axios.get(`https://ipapi.co/${data.ip}/json`).then(({ data }) => {
          return res.status(200).json({
              city: data.city,
              region: data.region,
              country: data.country_name,
              lat : data.latitude,
              long: data.longitude
          })
      });
    });
  }
}

module.exports = Controller;
