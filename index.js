let estudiantes = [	
    {nombre: "Manuel", semestre: 2, nota: 19}, 
    {nombre: "Jose", semestre: 4, nota: 13}, 
    {nombre: "Luis", semestre: 1, nota: 10}, 
    {nombre: "Maria", semestre: 3, nota: 4}, 
    {nombre: "Javier", semestre: 5, nota: 16}
]
let estudiantesSemestre = (estudiantes, semestre) => {	
    let estudiantesSemestre = estudiantes.filter(estudiante => estudiante.semestre == semestre)
    return estudiantesSemestre
}
salida.innerHTML = `
Los estudiantes del 2do semestre son: ${JSON.stringify(estudiantesSemestre(estudiantes, 2))} <br>
Los estudiantes del 3er semestre son: ${JSON.stringify(estudiantesSemestre(estudiantes, 3))} <br>
Los estudiantes del 4to semestre son: ${JSON.stringify(estudiantesSemestre(estudiantes, 4))} <br>
Los estudiantes del 5to semestre son: ${JSON.stringify(estudiantesSemestre(estudiantes, 5))} <br>
`
