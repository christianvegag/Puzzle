let lblLetras = document.getElementById("letras");
let lblNumeros = document.getElementById("numeros");

let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

const letnumA1 = () => {
  if (lblLetras.innerHTML == "") {
    lblLetras.innerHTML = "A";
  } else if (lblLetras.innerHTML == "ABCDEFGHIJ") {
    lblNumeros.innerHTML = "1";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumB2 = () => {
  if (lblLetras.innerHTML == "A") {
    lblLetras.innerHTML += "B";
  } else if (lblNumeros.innerHTML == "1") {
    lblNumeros.innerHTML += "2";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumC3 = () => {
  if (lblLetras.innerHTML == "AB") {
    lblLetras.innerHTML += "C";
  } else if (lblNumeros.innerHTML == "12") {
    lblNumeros.innerHTML += "3";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumD4 = () => {
  if (lblLetras.innerHTML == "ABC") {
    lblLetras.innerHTML += "D";
  } else if (lblNumeros.innerHTML == "123") {
    lblNumeros.innerHTML += "4";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumE5 = () => {
  if (lblLetras.innerHTML == "ABCD") {
    lblLetras.innerHTML += "E";
  } else if (lblNumeros.innerHTML == "1234") {
    lblNumeros.innerHTML += "5";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumF6 = () => {
  if (lblLetras.innerHTML == "ABCDE") {
    lblLetras.innerHTML += "F";
  } else if (lblNumeros.innerHTML == "12345") {
    lblNumeros.innerHTML += "6";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumG7 = () => {
  if (lblLetras.innerHTML == "ABCDEF") {
    lblLetras.innerHTML += "G";
  } else if (lblNumeros.innerHTML == "123456") {
    lblNumeros.innerHTML += "7";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumH8 = () => {
  if (lblLetras.innerHTML == "ABCDEFG") {
    lblLetras.innerHTML += "H";
  } else if (lblNumeros.innerHTML == "1234567") {
    lblNumeros.innerHTML += "8";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumI9 = () => {
  if (lblLetras.innerHTML == "ABCDEFGH") {
    lblLetras.innerHTML += "I";
  } else if (lblNumeros.innerHTML == "12345678") {
    lblNumeros.innerHTML += "9";
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

const letnumJ0 = () => {
  if (lblLetras.innerHTML == "ABCDEFGHI") {
    lblLetras.innerHTML += "J";
    alert("Usted completo las letras, ahora debe continuar con los números")
  } else if (lblNumeros.innerHTML == "123456789") {
    lblNumeros.innerHTML += "0";
    alert("Trabajo completado, ¡felicidades!")
  } else {
    alert("No puede seleccionar, debe seguir el orden correlativo");
  }
};

// eventos
btnA1.onclick = () => {
  letnumA1();
};
btnB2.onclick = () => {
  letnumB2();
};
btnC3.onclick = () => {
  letnumC3();
};
btnD4.onclick = () => {
  letnumD4();
};
btnE5.onclick = () => {
  letnumE5();
};
btnF6.onclick = () => {
  letnumF6();
};
btnG7.onclick = () => {
  letnumG7();
};
btnH8.onclick = () => {
  letnumH8();
};
btnI9.onclick = () => {
  letnumI9();
};
btnJ0.onclick = () => {
  letnumJ0();
};
