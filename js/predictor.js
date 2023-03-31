
function predecir() {
  
    if (!validInput()) {
      return;
    }
  
    const placa = document.getElementById("placa").value;
    const fecha = new Date(document.getElementById("fecha").value);
    const hora = document.getElementById("hora").value;
  
    const ultimoDigito = parseInt(placa.slice(-1));
    

    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    

    const diaSemana = diasSemana[fecha.getDay()];
    

    let puedeCircular = true;
    if (diaSemana === "Lunes") {
      puedeCircular = ultimoDigito !== 1 && ultimoDigito !== 2;
    } else if (diaSemana === "Martes") {
      puedeCircular = ultimoDigito !== 3 && ultimoDigito !== 4;
    } else if (diaSemana === "Miércoles") {
      puedeCircular = ultimoDigito !== 5 && ultimoDigito !== 6;
    } else if (diaSemana === "Jueves") {
      puedeCircular = ultimoDigito !== 7 && ultimoDigito !== 8;
    } else if (diaSemana === "Viernes") {
      puedeCircular = ultimoDigito !== 9 && ultimoDigito !== 0;
    } else {
      // No aplica el pico y placa los fines de semana
      puedeCircular = true;
    }
  

    const horaInicioPicoManana = new Date(`1970-01-01T07:00:00`);
    const horaFinPicoManana = new Date(`1970-01-01T09:30:00`);
    const horaInicioPicoTarde = new Date(`1970-01-01T16:00:00`);
    const horaFinPicoTarde = new Date(`1970-01-01T21:00:00`);
    const horaFecha = new Date(`1970-01-01T${hora}:00`);
  
    const enPicoPlaca = (diaSemana !== "Sábado" && diaSemana !== "Domingo") &&
      ((horaFecha >= horaInicioPicoManana && horaFecha <= horaFinPicoManana) ||
      (horaFecha >= horaInicioPicoTarde && horaFecha <= horaFinPicoTarde));
    

    if (enPicoPlaca && puedeCircular) {
      document.getElementById("resultado").style.display = "block";
      document.getElementById("resultado").innerHTML = "No puede circular en el día y hora especificados";
      setTimeout(()=>{
        document.getElementById("resultado").style.display= "none";
      },4000);
    } else {
      document.getElementById("resultado").style.display = "block";
      document.getElementById("resultado").innerHTML = "Puede circular en el día y hora especificados";
      setTimeout(() => {
        document.getElementById("resultado").style.display= "none";
      },4000);
    }
  }
  
  function validInput() {
    const placa = document.getElementById("placa").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
  
    const regexPlaca = /^[A-Z]{3}-\d{4}$/;
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    const regexHora = /^([01]\d|2[0-3]):[0-5]\d$/;
  
    if (!regexPlaca.test(placa) || !regexFecha.test(fecha) || !regexHora.test(hora)) {
      alert("Ingrese valores válidos para los campos.");
      return false;
    }
    return true;
  }
  