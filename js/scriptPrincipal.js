var Reglamento = `
            <br>
            <img src="Recursos/Reglamento.jpeg" alt="Reglamento" style="width:90%; max-width:500px; border-radius:8px; display:block; margin:0 auto;">
            <br>
        `;
        var horario = ``;

        function resetInfo() {
            document.getElementById('informacion').innerHTML = "";
            document.getElementById('reglamento').innerHTML = "";
        }

        // Oculta/muestra todos los bloques de contenido
        var bloques = ['Noticias','Mision','Objetivos','Acreditaciones','Contenido', 'Roles', 'Ubicacion'];
        function ocultarTodo() {
            bloques.forEach(function(id) {
                document.getElementById(id).classList.add('oculto');
            });
        }

        function mostrarCarrusel(visible) {
            var c = document.getElementById('carrusel');
            visible ? c.classList.remove('oculto') : c.classList.add('oculto');
            if (visible) reiniciarIntervalo(); else clearInterval(intervalo);
        }

        function mostrarTorneo(){
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('TorneoRobotix').classList.remove('oculto');
        }

        function mostrarNoticias() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(true);
            document.getElementById('Noticias').classList.remove('oculto');
        }
        function mostrarNosotros() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('Mision').classList.remove('oculto');
            document.getElementById('Objetivos').classList.remove('oculto');
        }
        function mostrarReglamento() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('reglamento').innerHTML = Reglamento;
        }
        function mostrarHorarios() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('informacion').innerHTML = horario;
            document.getElementById('Roles').classList.remove('oculto');
        }
        function mostrarAcreditaciones() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('Acreditaciones').classList.remove('oculto');
        }
        function mostrarHistorial() {
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('Contenido').classList.remove('oculto');
        }
        function mostrarUbicacion(){
            resetInfo();
            ocultarTodo();
            mostrarCarrusel(false);
            document.getElementById('Ubicacion').classList.remove('oculto');
        }

        // ── Carrusel ──
        var slides     = document.querySelectorAll('.carrusel-slide');
        var puntosCont = document.getElementById('puntos');
        var slideActual = 0;
        var intervalo;

        slides.forEach(function(_, i) {
            var punto = document.createElement('div');
            punto.className = 'punto' + (i === 0 ? ' activo' : '');
            punto.addEventListener('click', function() { irASlide(i); });
            puntosCont.appendChild(punto);
        });

        function actualizarPuntos() {
            document.querySelectorAll('.punto').forEach(function(p, i) {
                p.classList.toggle('activo', i === slideActual);
            });
        }
        function irASlide(n) {
            slides[slideActual].classList.remove('activo');
            slideActual = (n + slides.length) % slides.length;
            slides[slideActual].classList.add('activo');
            actualizarPuntos();
            reiniciarIntervalo();
        }
        function cambiarSlide(dir) { irASlide(slideActual + dir); }
        function reiniciarIntervalo() {
            clearInterval(intervalo);
            intervalo = setInterval(function() { irASlide(slideActual + 1); }, 4000);
        }
        // ── Mini Carrusel ──
        var miniSlides    = document.querySelectorAll('.mini-slide');
        var miniPuntosCont = document.getElementById('miniPuntos');
        var miniActual    = 0;

        miniSlides.forEach(function(_, i) {
            var p = document.createElement('div');
            p.className = 'mini-punto' + (i === 0 ? ' activo' : '');
            p.addEventListener('click', function() { irAMiniSlide(i); });
            miniPuntosCont.appendChild(p);
        });

        function irAMiniSlide(n) {
            miniSlides[miniActual].classList.remove('activo');
            miniActual = (n + miniSlides.length) % miniSlides.length;
            miniSlides[miniActual].classList.add('activo');
            document.querySelectorAll('.mini-punto').forEach(function(p, i) {
                p.classList.toggle('activo', i === miniActual);
            });
        }
        function cambiarMiniSlide(dir) { irAMiniSlide(miniActual + dir); }
        // ── Noticias paginadas ──
        var noticias = [
            { titulo: "Robot FES ARAGÓN 2026 ¡Primera Edición!", fecha:"31/08/2026", texto:"Querida comunidad amante de la robótica y la innovacion:<br>La <strong>Facultad de Estudios Superiores Aragón</strong> se enorgullece en anunciar la <strong>primera edición de Robot FES Aragón</strong>, un evento que reunirá a estudiantes, profesionales y apasionados de la tecnología en un espacio de competencia, creatividad y aprendizaje.<br><br><strong>FECHA:</strong> Viernes 25 de Septiembre,2026.<br><strong>LUGAR:</strong> Salón de Usos Múltiples, FES Aragón.<br>Categorías de la competencia:<ul><li>RC (PRO y Amateur)</li><li>Autónomo (PRO y Amateur)</li><li>Seguidor de línea sin turbina (PRO y Amateur)</li><li>Combate (1 lb y 3D)</li><li>Futbolito PRO</li><li>Proyecto de ingeniería</li></ul>Inscripción:<br><ul><li>Amateur: $150</li><li>Profesional: $200</li></ul>Premiación:<ul><li>Categoría Profesional: Incentivo en efetivo para los primeros tres ganadores.</li><li>Categoría Amateur: Premio en efectivo para el primer lugar.</li></ul>¿Por qué participar?<br>Vive la emoción de competir con los mejores equipos de robótica.<br>Demuestra tus habilidades en diseño, programación y control.<br>Conecta con estudiantes, ingenieros y entusiastas de la tecnología.<br>Inspírate con proyectos innovadores y abre puertas a nuevas oportunidades académicas y profesionales.<br><br>¡Inscríbete ya!<br><br>No te pierdas la oportunidad de ser parte de este evento histórico en la FES Aragón.<br><br>Las inscripciones estarán abiertas hasta el 20 de Septiembre.<br><br>Robot FES Aragón 2026: Donde la creatividad y la ingeniería se encuentran para construir su camino hacia el futuro."},
            { titulo: "ARX Robotics: una nueva etapa para nuestro equipo", fecha: "08/06/2026", texto: "Nos complace anunciar que el grupo anteriormente conocido como Fesatronix inicia una nueva etapa bajo el nombre de ARX Robotics. <br>Este cambio representa la evolución y crecimiento del equipo, así como el compromiso de seguir impulsando el desarrollo de proyectos de robótica, innovación tecnológica y participación en competencias nacionales e internacionales.<br>Aunque nuestro nombre cambia, mantenemos la misma pasión por el aprendizaje, el trabajo colaborativo y la formación de estudiantes comprometidos con la ingeniería y la tecnología.<br>Agradecemos a todos los integrantes, egresados y colaboradores que han formado parte de nuestra historia y los invitamos a acompañarnos en esta nueva etapa como ARX Robotics."},
        ];

        var noticiasPorPagina = 5;
        var paginaActual = 0;

        function renderNoticias() {
            var lista = document.getElementById('listaNoticias');
            var paginacion = document.getElementById('paginacion');
            var totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);
            var inicio = paginaActual * noticiasPorPagina;
            var fin = inicio + noticiasPorPagina;
            var visibles = noticias.slice(inicio, fin);

            // Renderiza noticias
            lista.innerHTML = visibles.map(function(n) {
                return `
                    <div class="noticia-item">
                        <p class="noticia-fecha">📅 ${n.fecha}</p>
                        <h4>${n.titulo}</h4>
                        <p>${n.texto}</p>
                    </div>
                `;
            }).join('');

            // Renderiza botones de paginación solo si hay más de una página
            if (totalPaginas <= 1) { paginacion.innerHTML = ''; return; }
            paginacion.innerHTML = '';
            for (var i = 0; i < totalPaginas; i++) {
                var btn = document.createElement('button');
                btn.className = 'pagina-btn' + (i === paginaActual ? ' activo' : '');
                btn.textContent = i + 1;
                btn.addEventListener('click', (function(idx) {
                    return function() { paginaActual = idx; renderNoticias(); };
                })(i));
                paginacion.appendChild(btn);
            }
        }

        renderNoticias();

        setInterval(function() { irAMiniSlide(miniActual + 1); }, 3500);

        reiniciarIntervalo();
        mostrarNoticias();
        (function() {
          /* ============================================================
             ACTUALIZA AQUÍ CADA SEMESTRE
             - integrantes: nombre y color de cada persona
             - schedule: días y horas de disponibilidad por integrante
             Horas válidas: "08:30","09:00","09:30","10:00","10:30",
                            "11:00","11:30","12:00","12:30","13:00",
                            "13:30","14:00","14:30","15:00","15:30",
                            "16:00","16:30","17:00","17:30","18:00"
             Días válidos: "Lunes","Martes","Miércoles","Jueves","Viernes"
             ============================================================ */
          var integrantes = [
            { nombre: "Genaro",        color: "#3B82F6" },
            { nombre: "Zurita",        color: "#1e3a5f" },
            { nombre: "Naibi",        color: "#f87171" },
            { nombre: "David",        color: "#9cc4ff" },
            { nombre: "Brandon",    color: "#a855f7" },
            { nombre: "Joshua",        color: "#e879f9" },
            { nombre: "Ángel",         color: "#fb923c" },
            { nombre: "Omar Padilla",  color: "#86efac" },
            { nombre: "Yare",          color: "#7c2d12" },
            { nombre: "David",         color: "#818cf8" },
            { nombre: "Edgar",         color: "#ef4444" },
            { nombre: "", color: "#ffffff"}
          ];

          var schedule = {
            "Genaro":        { "Miércoles":["10:00","10:30","11:00","11:30","12:00"], "Viernes":["12:00","12:30","13:00","13:30","14:00","14:30","15:00"] },
            "Zurita":        { "Lunes":["12:00","12:30","13:00","13:30","14:00"],"Martes":["16:00","16:30","17:00","17:30","18:00","18:30","19:00"], "Miércoles":["12:00","12:30","13:00","13:30","14:00"], "Jueves":["13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"]},
            "Naibi":        { "Martes":["10:00","10:30","11:00","11:30","12:00","12:30","16:00","16:30","17:00"], "Miércoles":["10:00","10:30","11:00","11:30","12:00","12:30"], "Jueves":["10:00","10:30","11:00","11:30","12:00","12:30"], "Viernes":["12:00","12:30","13:00","13:30","14:00","14:30"]},
            "David":        { "Martes":["16:00","16:30","17:00"], "Miércoles":["10:00","10:30","11:00","11:30","12:00","12:30"], "Viernes":["12:00","12:30","13:00","13:30","14:00","14:30"]},
            "Brandon":      { "Martes":["12:30","13:00","13:30","14:00","14:30"], "Jueves":["12:30","13:00","13:30","14:00","14:30"], "Viernes":["11:00","11:30","12:00","12:30","13:00","13:30"]},
            "Joshua":        { "Martes":["10:00","10:30","11:00","11:30","12:00"], "Jueves":["11:00","11:30","12:00"], "Viernes":["12:00","12:30","13:00","13:30","14:00"]},
            "Ángel":         { "Martes":["13:00","13:30","14:00","14:30","15:00"], "Jueves":["13:00","13:30","14:00","14:30","15:00"], "Viernes":["11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00"]},
            "Omar Padilla":  { "Martes":["09:30","10:00","10:30","13:00","13:30","14:00"], "Miércoles":["12:00","12:30","13:00","13:30","14:00","14:30","15:00"], "Jueves":["09:30","10:00","10:30","13:00","13:30","14:00"]},
            "Yare":          { "Martes":["10:00","10:30","11:00","11:30","12:00","12:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"], "Miércoles":["10:00","10:30","11:00","11:30","12:00","12:30"], "Jueves":["10:00","10:30","11:00","11:30","12:00","12:30"]},
            "Edgar":         { "Lunes":["11:00","11:30","12:00","12:30"], "Miércoles":["11:00","11:30","12:00","12:30"], "Viernes":["11:00","11:30","12:00","12:30","14:00","14:30","15:00","15:30","16:00"]},
            "": {"Lunes": ["11:00","11:30"],"Martes":["11:00","11:30"],"Miércoles":["11:00","11:30"],"Jueves":["11:00","11:30"],"Viernes":["11:00","11:30"]},
          };

          /* ── No es necesario modificar nada debajo de esta línea ── */
          var dias  = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
          var horas = ["08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"];

          var tabla = document.getElementById('horario-tabla');
          if (!tabla) return;

          var presentesPorDia = {};
          dias.forEach(function(dia) {
            presentesPorDia[dia] = integrantes.filter(function(ing) {
              return schedule[ing.nombre] && schedule[ing.nombre][dia];
            });
          });

          var html = '<thead><tr><th class="h-hora-th">Hora</th>';
          dias.forEach(function(dia) {
            var cols = presentesPorDia[dia].length || 1;
            html += '<th colspan="' + cols + '" style="border-left:2px solid #1a4a8a; border-right:2px solid #1a4a8a;">' + dia + '</th>';
          });
          html += '</tr></thead><tbody>';

          horas.forEach(function(hora) {
            html += '<tr><td class="h-hora-cell">' + hora + '</td>';
            dias.forEach(function(dia) {
              var presentes = presentesPorDia[dia];
              if (presentes.length === 0) {
                html += '<td class="h-block-cell" style="border-left:2px solid #0F2E5E; border-right:2px solid #0F2E5E;"><div></div></td>';
              } else {
                presentes.forEach(function(ing, idx) {
                  var activo = schedule[ing.nombre][dia] && schedule[ing.nombre][dia].indexOf(hora) !== -1;
                  var extraStyle = '';
                  if (idx === 0) extraStyle += 'border-left:2px solid #0F2E5E;';
                  if (idx === presentes.length - 1) extraStyle += 'border-right:2px solid #0F2E5E;';
                  html += '<td class="h-block-cell" style="' + extraStyle + '"><div style="background:' + (activo ? ing.color : 'transparent') + ';"></div></td>';
                });
              }
            });
            html += '</tr>';
          });
          html += '</tbody>';
          tabla.innerHTML = html;

          var legendList = document.getElementById('horarios-legend-list');
          integrantes.forEach(function(ing) {
            var row = document.createElement('div');
            row.className = 'horarios-legend-row';
            row.innerHTML = '<span class="horarios-legend-name">' + ing.nombre + '</span><div class="horarios-legend-dot" style="background:' + ing.color + '"></div>';
            legendList.appendChild(row);
          });
        })();