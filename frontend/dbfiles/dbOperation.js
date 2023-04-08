const mssql = require("mssql");
const config = require("./dbConfig"),
  sqlConnectionToserver = require("mssql");

const Above21Nochilderen = async () => {
  try {
    let pool = await mssql.connect(config);
    let data = pool
      .request()
      .query(
        "select c_Name from Contraception where Rec_Age = 21 and childrenInterval= 'i dont want child' "
      );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  Above21Nochilderen,
};
