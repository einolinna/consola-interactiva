require("colors");
const { inquirerMenu, pausa, leerImput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await leerImput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);

        break;
      case "3":
        //crear opcion en

        break;
      case "4":
        //crear opcion en

        break;
      case "5":
        //crear opcion en

        break;
      case "6":
        //crear opcion en

        break;
      case "0":
        //crear opcion en

        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
