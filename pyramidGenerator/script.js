const count = 10;
const rows = [];
const pyramid = document.getElementById("pyramid");
const myButton = document.getElementById("button");
const myButton2 = document.getElementById("button2");
const choice1 = document.getElementById("option1");
const choice2 = document.getElementById("option2");
let inverted;
/* User Events:
1. Enter characters - input value is taken to variable - character defined inside myPyramid function.
2. myPyramid function is called when the generate pyramid is clicked
3. User can choose whether he wants non-iverted pyramid or inverted pyramid, the vaalues are taken using option1.checked, option2.checked
4. After clicking on reset, hidden class is added to the pyramid.
*/
function padRow(rowNumber, rowCount, character) {
  return (
    "&nbsp;" +
    "&nbsp;".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    "&nbsp;".repeat(rowCount - rowNumber)
  );
}

const myPyramid = function () {
  const character = document.getElementById("galactic-glyphs").value;
  if (character !== "") {
    pyramid.classList.remove("hidden");
  }

  if (option1.checked) {
    inverted = false;
  } else if (option2.checked) {
    inverted = true;
  }

  rows.length = 0;
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count, character));
    } else {
      rows.push(padRow(i, count, character));
    }
  }

  let result = "";

  for (const row of rows) {
    result = result + "<br>" + row;
  }
  return result;
};

myButton.addEventListener("click", function myPyramidClicked() {
  pyramid.innerHTML = myPyramid();
});

myButton2.addEventListener("click", function gameReset() {
  pyramid.classList.add("hidden");
  document.getElementById("galactic-glyphs").value = "";
});
