var COBBLESTONE = 4;
var WOOD_PLANK = 5;
var WOOD = 17;
var COAL = 263;
var DIAMOND = 264;
var GOLD = 266;
var STICK = 280;
var STRING = 287;
var FEATHER = 288;
var FLINT = 318;
var REDSTONE = 331;


var craftTable = [0,0,0,0,0,0,0];
var inventory = [COBBLESTONE,WOOD,IRON_INGOT,GOLD,DIAMOND,REDSTONE,STRING,FEATHER,FLINT,COAL,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var selectedCell;
var selectedIngredient=0;
var newItem=0;



function selectInventoryItem(cell_ID) {
  if (selectedCell) {
    selectedCell.style.backgroundColor="#8b8b8b";
  }
  selectedCell = document.getElementById("inventory-" + cell_ID);
  selectedCell.style.backgroundColor="#88FF88";
  selectedIngredient = inventory[cell_ID];
}

//sætte tingene som du klikker på i en af cellerne.
function selectCraftTable(cell_ID) {
  var craftTableCell = document.getElementById("craftTable-" + cell_ID);
  if (craftTableCell.innerHTML=="") {
    if (selectedCell) {
      craftTableCell.innerHTML=selectedCell.innerHTML;
      craftTable[cell_ID]=selectedIngredient;
    }
  } else {
    craftTableCell.innerHTML="";
    craftTable[cell_ID]=0;
  }
  craft();
}


