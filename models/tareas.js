const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }
  constructor() {
    this._listado = {};
  }
  borrarTarea(id = '') {

    if(this._listado[id]){
    delete this._listado[id];
 
    }
  }


  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, i) => {
      console.log();
      const idx = `${i + 1}`.green;
      const { desc, compleadoEn } = tarea;
      const estado = compleadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completada = true) {
    this.listadoArr.forEach((tarea) => {
      let contador = 0;
      console.log();
      const { desc, compleadoEn } = tarea;
      const estado = compleadoEn ? "Completada".green : "Pendiente".red;

      if (completada) {
        if (compleadoEn) {
          contador += 1;
          console.log(`${(contador +'.').green } ${desc} :: ${estado}`);
        }
      } else {
        if (!compleadoEn) {
          contador += 1;
          console.log(`${(contador +'.').green}. ${desc} :: ${estado}`);
        }
      }
    });
  }
}

module.exports = Tareas;
