const datos = [
    {
        nombre:"lucas ",
        apellido:"bran",
        fecha_nacimiento:"32/enero/1900",
        puesto:"sistemas",
        matricula: 12345,
        carrera: "sistemas",
        edad:"18 ",
        escuela:"tecnm itma ii",
        semestre: 5,

    },{

    nombre:"daniel",
    apellido:"linares",
    fecha_nacimiento:"30/enero/1900",
    puesto:"sistemas",
    matricula: 12345,
    carrera: "sistemas",
    edad:"34 ",
    escuela:"tecnm itma ii",
    semestre: 5,
},{

    nombre:"dana",
    apellido:"luna ",
    fecha_nacimiento:"30/enero/1900",
    puesto:"sistemas",
    matricula: 12345,
    carrera: "electronica",
    edad:"30 ",
    escuela:"tecnm itma ii",
    semestre: 2,
},{

    nombre:"toño",
    apellido:"solis",
    fecha_nacimiento:"30/enero/1900",
    puesto:"sistemas",
    matricula: 12345,
    carrera: "sistemas",
    edad:"34 ",
    escuela:"tecnm itma ii",
    semestre: 5,
},{

    nombre:"adres ",
    apellido:"render ",
    fecha_nacimiento:"10/dic/1900",
    puesto:"sistemas",
    matricula: 12345,
    carrera: "turismo ",
    edad:"20 ",
    escuela:"tecnm itma ii",
    semestre: 5,
}

];

datos.push({
    nombre:"ana ",
    apellido:"led ",
    fecha_nacimiento:"10/dic/1900",
    puesto:"turismo",
    matricula: 12345,
    carrera: "turismo ",
    edad:"20 ",
    escuela:"tecnm itma ii",
    semestre: 5,
});

datos.push({
    nombre:"andrea  ",
    apellido:"romin ",
    fecha_nacimiento:"10/dic/1900",
    puesto:"sistemas",
    matricula: 12345,
    carrera: "electronia  ",
    edad:"20 ",
    escuela:"tecnm itma ii",
    semestre: 5,
});

datos.map(({nombre,apellido,fecha_nacimiento,puesto,matricula,carrera,edad,escuela,semestre} = datos) => {
console.log(`los datos son :${nombre},${apellido},${fecha_nacimiento},${puesto},${matricula},${carrera},${edad},${escuela},${semestre}`)
});

