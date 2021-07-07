require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa,confirmar, leerImput,listadoTareasPorBorrar } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if(tareasDB){

    tareas.cargarTareasFromArray(tareasDB);
    
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerImput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();

        break;
      case "3":
        tareas.listarPendientesCompletadas(true);

        break;
      case "4":
        tareas.listarPendientesCompletadas(false);

        break;
      case "5":
        //crear opcion en

        break;
      case "6":
        const id = await listadoTareasPorBorrar(tareas.listadoArr);
        const ok = await confirmar(`Esta seguro?` );
        if(ok ==true){
          tareas.borrarTarea(id);
        }else {await inquirerMenu();}
        

        break;
      case "0":
        //crear opcion en

        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
