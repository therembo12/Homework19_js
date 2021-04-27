class PrintMachine {
  constructor(
    fontSize = "14px",
    fontColor = "black",
    fontFamily = "serif",
    sometext = "Printed Text"
  ) {
    (this.fontSize = fontSize),
      (this.fontColor = fontColor),
      (this.fontFamily = fontFamily),
      (this.sometext = sometext);
  }
  print() {
    let $p = document.createElement("P");
    $p.style.fontSize = `${this.fontSize}px`;
    $p.style.color = `${this.fontColor}`;
    $p.style.fontFamily = `${this.fontFamily}`;
    $p.textContent = `${this.sometext}`;
    console.log($p);
    text.appendChild($p);
  }
}

addPrint.addEventListener("click", (event) => {
  event.preventDefault();
  let size, color, family, printText;
  fontSize.value.trim() == ""? size = undefined: size = fontSize.value  
  fontColor.value.trim() == ""? color = undefined: color = fontColor.value  
  fontFamily.value.trim() == ""? family = undefined: family = fontFamily.value  
  sometext.value.trim() == ""? printText = undefined: printText = sometext.value  

  let Printed = new PrintMachine(size, color, family, printText);
  Printed.print();
});