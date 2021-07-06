const { v4: uuidv4 } = require("uuid");
class Tarea {
  id = "";
  desc = "";
  compleadoEn = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.compleadoEn = null;
  }
}

module.exports = Tarea;
