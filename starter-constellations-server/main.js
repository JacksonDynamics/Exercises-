const axios = require("axios");
const BASE_URL = "http://localhost:5000";

async function getConstellationNameById(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  try {
    return await axios.get(url);
  } catch (error) {
    throw `Constellation with id of ${id} could not be found.`;
  }
}

getConstellationNameById("n2OEOzp").then(console.log)