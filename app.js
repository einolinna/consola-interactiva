require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu,mostrarListadoCheckList, pausa,confirmar, leerImput,listadoTareasPorBorrar } = require("./helpers/inquirer");
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
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toogleCompletadas(ids);

        break;
      case "6":
        const id = await listadoTareasPorBorrar(tareas.listadoArr);
        if(id === '0') await inquirerMenu();
        const ok = await confirmar(`Esta seguro?`.white.bgRed );
        if(ok ==true){
          tareas.borrarTarea(id);
          console.log('Tarea borrada..'.green)
        }await inquirerMenu();
        

        break;
      case "0":
        //Finish program
        break;
    }

    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
