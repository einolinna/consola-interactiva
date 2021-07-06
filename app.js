require("colors");
const { mostrarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {

  let opt = "";

  //ITERO QUE MUESTRE EL MENU HASTA QUE SEA 0
  do {

    opt = await mostrarMenu();
    //CONDICION PARA TERMINAR PROGRAMA
    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
