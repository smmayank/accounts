var sequelizeOptions = {}

var devOption = {
  username: "root",
  password: null,
  database: "accounts",
  host: "127.0.0.1",
  dialect: "mysql"
}

sequelizeOptions.dev = devOption;

module.exports = sequelizeOptions;
