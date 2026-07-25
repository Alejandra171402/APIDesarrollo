module.exports = {
  HOST: "ep-falling-lake-awns4jv2-pooler.c-12.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_GYKlsJI4R6qL",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
