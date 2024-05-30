const connection = require("../../services/database");

const getName = async (req, res) => {
  const getId = req.query.getId;
  if (!getId) {
    return res.json({
      success: false,
      data: null,
      error: "id is invalid",
    });
  }
  try {
    const queryName = await connection
      .promise()
      .query(`SELECT name from preHackathon WHERE id = ${getId}`);
    const name = queryName[0][0];

    if (!name) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "no name found",
      });
    }
    return res.json({
      success: true,
      data: name,
      error: null,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      data: null,
      error: "Internal server error",
    });
  }
};
module.exports = getName;
