tareas=[];
	
	function ingresarDatos()
	{
        
        var nombre= document.getElementById("Nombre").value;
        var materia = document.getElementById("Materia").value;
        var tarea = document.getElementById("Actividad").value;
        var fecha = document.getElementById("Fecha_de_entrega").value;

        tareas.push(nombre);
        tareas.push(materia);
        tareas.push(tarea);
        tareas.push(fecha);

		console.log(tareas);
		
        document.getElementById("Nombre").innerHTML = tareas;
        var nombre= document.getElementById("Nombre").value;
    
    
        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Materia", materia);
        localStorage.setItem("Tarea", tarea);
        localStorage.setItem("Fecha", fecha);
        //nombre + "Materia " + materia + "  Actividad a realizar " + actividad + "  entregar antes de: " + fecha       
        document.getElementById("info").innerHTML =  tareas;
        
        addUser()

	}


function addUser() {
      
   
    Nomb = localStorage.getItem("Nombre");
	Mat = localStorage.getItem("Materia");
    Tar = localStorage.getItem("Tarea");
	Fec = localStorage.getItem("Fecha");
    console.log(Nomb + "  Materia: " + Mat + "  Actividad a realizar: " + Tar + "  entregar antes de: " + Fec)
};
