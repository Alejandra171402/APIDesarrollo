module.exports = {
  HOST: "ep-bitter-wind-axpf3w2h-pooler.c-4.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_lIR6OV2atjup",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
