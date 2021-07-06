require("colors");
const { inquirerMenu, pausa } = require("./helpers/inquirer");

console.clear();

const main = async () => {

  let opt = "";

  //ITERO QUE MUESTRE EL MENU HASTA QUE SEA 0
  do {

    opt = await inquirerMenu();
    console.log(opt);
    
    await pausa();
  } while (opt !== "0");
};

main();
