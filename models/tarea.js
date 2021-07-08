const { v4: uuidv4 } = require("uuid");
class Tarea {
  id = "";
  desc = "";
  completadoEn = '';

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completadoEn = null;
  }


}

module.exports = Tarea;
