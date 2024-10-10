import cl_fijo from "./Cl_fijo.js";

export default class Cl_main {
  constructor() {
    let profesorFijo1 = new cl_fijo("Carlos", 25, 100);
    let profesorFijo2 = new cl_fijo("Carolina", 40, 90);

    //Salida para primer profesor Fijo
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del profesor fijo: ${
      profesorFijo1.nombre
    }<br><br> Monto del bono: $${
      profesorFijo1.bono
    }<br><br> Monto del sueldo: $${
      profesorFijo1.sueldo
    }<br><br> Ingreso total: $${profesorFijo1.ingresoTotal()}<br>`;

    //Segunda salida para segundo profesor fijo
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del profesor fijo: ${
      profesorFijo2.nombre
    }<br><br> Monto del bono: $${
      profesorFijo2.bono
    }<br><br> Monto del sueldo: $${
      profesorFijo2.sueldo
    }<br><br> Ingreso total: $${profesorFijo2.ingresoTotal()}<br>`;
  }
}
