const contenedorCompetencias = document.querySelector("#Competencias");
const contenedorSubtitulo = document.querySelector("#subtitulo");
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth()+1;
const year = fecha.getFullYear();
const fechaActual = year * 10000 + mes * 100 + dia;

if(competencias.length>0){
    const subtitulo = document.createElement('p');
    subtitulo.textContent = "PRESIONE LA IMAGEN PARA VER DETALLES";
    subtitulo.classList.add("nombre");
    contenedorSubtitulo.appendChild(subtitulo);
    competencias.forEach((competencia)=>{
        const fechaLimite = competencia.yearFinal * 10000 + competencia.mesFinal * 100 + competencia.diaFinal;
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = "../Recursos/Competencias/"+competencia.nombreImagen;
        img.addEventListener('click',()=>{
            window.location.href=competencia.url;
        });
        div.appendChild(img);
        contenedorCompetencias.appendChild(div);
        if(fechaActual > fechaLimite){
            img.classList.add("oculto");
            console.log("Están ocultos");
        }
        console.table(competencia);
    })
}
else{
    const proximamente = document.createElement('p');
    proximamente.textContent="PRÓXIMAMENTE";
    proximamente.classList.add("nombre");
    contenedorCompetencias.appendChild(proximamente);
}
console.log(dia, mes, year);
/*
Si añoactual > año indicado
si añoactual y mesactual > año y mes indicados
si añoactual mesactual y dia actual > año mes y dia indicados
*/
