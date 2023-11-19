import jsonArray from "../sampleData.js";

const getAllData = async (req, res) => {
  res.status(200).json(jsonArray);
};

export { getAllData };
