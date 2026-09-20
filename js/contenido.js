const contenedorContenido = document.querySelector("#Contenido");
historial.forEach((contenido)=>{
    const contenedorCompetencia = document.createElement('div');
    contenedorCompetencia.classList.add("tarjeta", "historia");

    const contenedorImagen = document.createElement('div');
    const imagenPrincipal = document.createElement('img');
    imagenPrincipal.src = "Recursos/" + contenido.img;
    contenedorImagen.appendChild(imagenPrincipal);

    const contenedorLogosHistorial = document.createElement('div'); // ← nuevo, solo para el <ul>
    contenedorLogosHistorial.classList.add("logosHistorial");

    const contenedorListado = document.createElement('ul');

    const titulo = document.createElement('li');
    titulo.classList.add("titulo-evento", "apuntado");
    titulo.addEventListener("click", () => window.open(contenido.url, '_blank'));
    titulo.textContent = contenido.titulo;

    function crearLinea(iconoSrc, texto) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = "Recursos/" + iconoSrc;
        li.appendChild(img);
        li.appendChild(document.createTextNode(" " + texto));
        return li;
    }

    const fecha = crearLinea("Fecha.jpeg", "Fecha: " + contenido.fecha);
    const integrantes = crearLinea("Integrantes.jpeg", "Integrantes: " + contenido.integrantes);
    const prototipos = crearLinea("Prototipos.jpeg", "Prototipos: " + contenido.prototipos);
    const categorias = crearLinea("Categorías.jpeg", "Categorías: " + contenido.categorias);
    const puesto = crearLinea("Puesto.jpeg", "Puesto: " + contenido.puesto);

    const enlace = document.createElement('li');
    const imgEnlace = document.createElement('img');
    imgEnlace.src = "Recursos/Enlace.jpeg";
    enlace.appendChild(imgEnlace);
    enlace.appendChild(document.createTextNode(" Consulta el album en: "));

    const botonEnlace = document.createElement('a');
    botonEnlace.href = contenido.url;
    botonEnlace.classList.add("driveLogo");
    const imgBoton = document.createElement('img');
    imgBoton.src = "Recursos/driveLogo.jpeg";
    botonEnlace.appendChild(imgBoton);
    enlace.appendChild(botonEnlace);

    contenedorListado.append(titulo, fecha, integrantes, prototipos, categorias, puesto, enlace);
    contenedorLogosHistorial.appendChild(contenedorListado); // ul dentro de logosHistorial

    contenedorCompetencia.append(contenedorImagen, contenedorLogosHistorial); // imagen y logosHistorial como hermanos
    contenedorContenido.appendChild(contenedorCompetencia);
});