// Definimos las preguntas y respuestas
const questions = [
    {
        question: "Con respecto al neumático Runflat:",
        options: ["A. Equivale a circular con un neumático convencional inflado entre 1 y 1,5 barias.", 
        "B. Tiene una banda de rodamiento de caucho con fibras reforzadas.", 
        "C. Tiene capas de tejidos sintéticos o de aluminio."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál es el plazo de caducidad del procedimiento sancionador según el artículo 50 de la L.O. 4/2015 Protección a la Seguridad Ciudadana?:",
        options: ["A. 1 año desde su incoación sin que se haya notificado la resolución.", 
        "B. 2 años desde su incoación sin que se haya notificado la resolución.", 
        "C. 6 meses desde su incoación sin que se haya notificado la resolución."],
        correctAnswer: "A"
    },
    {
        question: "Las actuaciones a seguir en el caso de los vehículos intervenidos deberán ajustarse a lo establecido en la ISES 1/2011, en donde se contemplan, según el destino que proceda dar a los bienes intervenidos:",
        options: ["A. Dos tipos de actuaciones.", 
        "B. Tres tipos de actuaciones.", 
        "C. Cuatro tipo de actuaciones."],
        correctAnswer: "B"
    },
    {
        question: "Son competencias de los delegados de prevención:",
        options: ["A. Acompañar a los técnicos en las evaluaciones preventivas.", 
        "B. Acompañar a los inspectores de Trabajo y Seguridad Social en sus visitas.", 
        "C. Controlar el cumplimiento de la normativa."],
        correctAnswer: "C"
    },
    {
        question: "El Comité de Seguridad y Salud se reúne trimestralmente, con lo que las empresas que cuenten con varios centros de trabajo dotados de Comité podrán acordar con su trabajadores, la creación de:",
        options: ["A. Un Comité de Centros.", 
        "B. Un Comité Intercentros.", 
        "C. Un Comité Interdisciplinar para Centros de Trabajo."],
        correctAnswer: "B"
    },
    {
        question: "El Subcomité para la Prevención contra la Tortura y otros tratos o penas crueles, inhumanos o degradantes, es un órgano de carácter:",
        options: ["A. Nacional.", 
        "B. Internacional.", 
        "C. Nacional independiente."],
        correctAnswer: "B"
    },
    {
        question: "Jose Antonio se introduce en el supermercado de El Corte Ingles, guardándose entre sus ropas un paquete de jamón serrano Joselito valorado en 27,99 euros. Instantes después y dentro aún del establecimiento es interceptado por un Vigilante de Seguridad que le pide que le acompañe, momento en el que Jose Antonio empuja fuertemente al Vigilante, cayendo este al suelo y saliendo Jose Antonio por la línea de caja, una vez en la calle es interceptado por el indicativo Z-22. El vigilante como consecuencia de la caída ha sufrido una fractura de muñeca, que ha precisado una intervención quirúrgica y 34 sesiones de fisioterapia para su curación, sin secuelas tras esta. José Antonio responderá de:",
        options: ["A. Un delito leve de hurto, al ser el precio inferior a 400 euros.", 
        "B. Un delito de robo violento agravado por las lesiones causadas.", 
        "C. Un delito de robo violento agravado más un delito de lesiones."],
        correctAnswer: "C"
    },
    {
        question: "Según el artículo 16 de la Ley Orgánica 3/2018 de Protección de Datos, con respecto de los datos que se vean afectados por una reclamación del derecho a la limitación de tratamiento:",
        options: ["A. Estos datos no podrán ser objeto de tratamiento, debiendo procederse inmediatamente con la supresión de los mismos del sistema de información.", 
        "B. Estos datos no podrán ser objeto de tratamiento, con la excepción de su cesión al afectado que solicitó la limitación de su uso.", 
        "C. Estos datos no podrán ser objeto de tratamiento, con la excepción de su conservación."],
        correctAnswer: "C"
    },
    {
        question: "Señale la proposición que considere correcta en relación al libro-registro de identificados de la Ley de Seguridad Ciudadana",
        options: ["A. Los asientos de los libro-registros se cancelarán a petición del identificado a los 3 años.", 
        "B. El órgano competente de la Administración remitirá mensualmente al Ministerio Fiscal extracto de las diligencias de identificación con expresión del tiempo utilizado en cada una.", 
        "C. Las diligencias de identificación practicadas, así como los motivos, circunstancias y duración de las mismas, sólo podrán ser comunicados sus datos a la Autoridad Judicial."],
        correctAnswer: "B"
    },
    {
        question: "La resolución de expulsión deberá ser notificada al interesado, con indicación de:",
        options: ["A. Los recursos que contra la misma puedan interponer y el órgano ante el que hubieran de presentarlo.", 
        "B. El órgano o autoridad que emite la resolución, la duración de la prohibición y la autoridad gubernativa que se encargará de tramitar el expediente.", 
        "C. Los recursos que contra la misma se puedan interponer, órgano ante el que hubieran de presentarse y plazo para presentarlos."],
        correctAnswer: "C"
    },
    {
        question: "La característica de la “enculturación” es:",
        options: ["A. La fuerte carga afectiva.", 
        "B. La aplicación de técnicas pedagógicas.", 
        "C. La división social del trabajo."],
        correctAnswer: "A"
    },
    {
        question: "Los anteproyectos de ley habrán de ser informados por:",
        options: ["A. La Secretaría General Técnica.", 
        "B. El Ministro correspondiente.", 
        "C. Congreso de los diputados."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué caso puede suplirse la autorización administrativa que deben obtener las empresas de seguridad privada para la prestación de servicios de seguridad privada, por una declaración responsable?",
        options: ["A. Cuando pretendan dedicarse exclusivamente al transporte y distribución de monedas y billetes, títulos-valores, joyas, metales preciosos, antigüedades, obras de arte u otros objetos que, por su valor económico, histórico o cultural, y expectativas que generen, puedan requerir vigilancia y protección especial.", 
        "B. Cuando pretendan dedicarse exclusivamente al depósito, custodia, recuento y clasificación de monedas y billetes, títulos-valores, joyas, metales preciosos, antigüedades, obras de arte u otros objetos que, por su valor económico, histórico o cultural, y expectativas que generen, puedan requerir vigilancia y protección especial.", 
        "C. Cuando pretendan dedicarse exclusivamente a la actividad de instalación y mantenimiento de aparatos, equipos, dispositivos y sistemas de seguridad conectados a centrales receptoras de alarmas o a centros de control o de videovigilancia."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué función desempeñan las actitudes en la personalidad de un individuo?",
        options: ["A. Una función expresiva.", 
        "B. Una función mecánica.", 
        "C. Una función adaptativa."],
        correctAnswer: "A"
    },
    {
        question: "El delito de extorsión es un delito de:",
        options: ["A. Peligro.", 
        "B. Resultado.", 
        "C. Resultado cortado."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo  de escala de actitudes se caracteriza porque en ella tan solo hay dos respuestas posibles a las distintas preguntas: “de acuerdo” o “desacuerdo”?",
        options: ["A. Método de las actitudes summativas de Likert.", 
        "B. Método de las actitudes acumulativas de Guttman.", 
        "C. Método de las actitudes diferenciales de Thurstone."],
        correctAnswer: "A"
    },
    {
        question: "La asunción de otra cultura por desencanto de la propia, es un fenómeno llamado:",
        options: ["A. Resocialización.", 
        "B. Desocialización.", 
        "C. Aculturación."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién declara la vacante en el cargo del Defensor del Pueblo por muerte, renuncia o expiración del plazo de mandato?:",
        options: ["A. El presidente del Congreso de los Diputados.", 
        "B. Las tres quintas partes de los componentes de cada cámara.", 
        "C. El presidente del Senado."],
        correctAnswer: "A"
    },
    {
        question: "El plazo de presentación del recurso de amparo contra los actos de los órganos ejecutivos colegiados de las comunidades autónomas, de sus autoridades, funcionarios o agentes es de:",
        options: ["A. 20 días siguientes a la notificación de la resolución recaída en el proceso judicial previo.", 
        "B. 30 días a partir de la notificación de la resolución recaída en el proceso judicial previo.", 
        "C. 3 meses desde que, con arreglo a las normas internas de las Cámaras o Asambleas, dichos actos sean firmes."],
        correctAnswer: "A"
    },
    {
        question: "La carencia de la autorización de residencia y trabajo, sin perjuicio de las responsabilidades del empresario a que dé lugar, incluidas las de Seguridad Social:",
        options: ["A. Invalidará el contrato de trabajo con respecto a los derechos del trabajador extranjero.", 
        "B. No invalidará el contrato de trabajo con respecto a los derechos del trabajador civil extranjero.", 
        "C. Será obstáculo para la obtención de las prestaciones derivadas de supuestos contemplados por los convenios internacionales de protección de los trabajadores u otras que pudieran corresponderle, siempre que sean compatibles con su situación."],
        correctAnswer: "B"
    },
    {
        question: "Las relaciones del Ministerio del Interior con las Delegaciones y Subdelegaciones del Gobierno en cuestiones relacionadas con la protección internacional, corresponde a:",
        options: ["A. Dirección General de Política Interior.", 
        "B. Secretaría General Técnica.", 
        "C. Subsecretario de Interior."],
        correctAnswer: "A"
    },
    {
        question: "Dentro de una empresa de seguridad, en cuya plantilla están integradas ¿quién realiza las funciones de organización, dirección e inspección del personal y servicios de seguridad privada?:",
        options: ["A. Directores de seguridad.", 
        "B. Jefes de seguridad.", 
        "C. Vigilantes de seguridad."],
        correctAnswer: "B"
    },
    {
        question: "Según el Real Decreto 67/2010 sobre adaptación de la Prevención de Riesgos Laborales en la Administración general del Estado, el órgano específico de participación y negociación de las organizaciones sindicales en materia de prevención de riesgos laborales será:",
        options: ["A. El Comité de Seguridad y Salud en el Trabajo.", 
        "B. La Inspección de Personal de Servicios y Servicios de Seguridad.", 
        "C. La Comisión Técnica de Prevención de Riesgos Laborales."],
        correctAnswer: "C"
    },
    {
        question: "La presidencia del Consejo Superior de Tráfico, Seguridad Vial y Movilidad Sostenible corresponde al:",
        options: ["A. Subsecretario de Estado de Seguridad.", 
        "B. Subsecretario del Interior.", 
        "C. Ministerio del Interior."],
        correctAnswer: "C"
    },
    {
        question: "El Tribunal de Justicia de la Unión Europea está compuesto por:",
        options: ["A. Un juez por Estado miembro y está asimismo asistido por 27 abogados generales.", 
        "B. Dos jueces por Estado miembro y están asistidos por 27 abogados generales.", 
        "C. Un juez por Estado miembro y está asimismo asistido por 11 abogados generales."],
        correctAnswer: "C"
    },
    {
        question: "¿Cómo acuña, Daniel Cougeau, el término 'Espacio de vida' relacionado con las migraciones?",
        options: ["A. Como el conjunto de lugares que frecuenta un individuo, polarizados por el domicilio y el trabajo.", 
        "B. Como el conjunto de servicios que contrata un individuo, polarizados por el domicilio y el trabajo.", 
        "C. Ambas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "El proceso que implica un “contacto estrecho de los inmigrantes con la población autóctona cuyo resultado es la adquisición por parte de los primeros de la cultura de la sociedad receptora, eliminando todo vestigio de su cultura de origen”, recibe el nombre de:",
        options: ["A. Asimilación.", 
        "B. Integración.", 
        "C. Segregación."],
        correctAnswer: "A"
    },
    {
        question: "Según el RD 1325/2003, de 24 de octubre, por el que se aprueba el reglamento del régimen de protección temporal en caso de afluencia masiva de personas desplazadas,para casos de afluencia de personas de forma espontánea a nuestras fronteras. En este procedimiento, el Ministro del Interior:",
        options: ["A. Elevará a la Comisión Interministerial de Extranjería una propuesta para acordar el régimen de protección temporal si procede.", 
        "B. Elevará al Consejo de Ministros la recomendación, en su caso, de solicitar a la Comisión Europea la presentación de una propuesta al Consejo de la Unión Europea para que tome la decisión sobre la existencia de una afluencia masiva de personas desplazadas.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿A qué órgano transmitirá el Tribunal Europeo de Derechos Humanos la sentencia definitiva para que vele por su ejecución?",
        options: ["A. El Comité de Ministros.", 
        "B. Al Consejo Económico y Social.", 
        "C. Al Parlamento Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El objetivo de la socialización estriba en la conseguir una posición social.", 
        "B. El objetivo de la socialización estriba en la formación de la personalidad.", 
        "C. El objetivo de la socialización estriba en la enculturación, la aculturación y la transculturación."],
        correctAnswer: "A"
    },
    {
        question: "La LSP considera a la conexión a centrales receptoras de alarmas de sistemas de prevención o protección contra Incendios o de alarmas de tipo técnico o asistencial, o de sistemas o servicios de control o mantenimiento una actividad:",
        options: ["A. De seguridad privada.", 
        "B. Compatible.", 
        "C. Incompatible."],
        correctAnswer: "B"
    },
    {
        question: "Para Milton Rokeach",
        options: ["A. La figura es el fondo ", 
        "B. La figura es la forma.", 
        "C. La figura es el fin."],
        correctAnswer: "B"
    },
    {
        question: "Cuando una propuesta normativa afecte a la organización administrativa de la Administración General del Estado, a su régimen de personal, procedimientos y a la inspección de los servicios, será necesario:",
        options: ["A. Recabar la aprobación previa del Ministerio de Política Territorial antes de ser sometidas al órgano competente para promulgarlos.", 
        "B. Informe previo del Ministerio de Política Territorial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },  
    {
        question: "A los efectos de la LSP, los despachos de detectives se consideran:",
        options: ["A. Empresa de seguridad privada.", 
        "B. Prestadores de servicios de seguridad privada.", 
        "C. Personal acreditado."],
        correctAnswer: "B"
    },   
    {
        question: "Con respecto a la acción popular en la administración de justicia, la Constitución española establece en su artículo 125:",
        options: ["A. Que podrá participarse en la administración de justicia por medio de la institución del Jurado.", 
        "B. La Constitución también contempla la participación en los tribunales consuetudinarios y tradicionales.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "C"
    }, 
    {
        question: "La verdadera tolerancia:",
        options: ["A. Discrepa pero respeta.", 
        "B. Aprueba pero no justifica.", 
        "C. Justifica pero no aprueba."],
        correctAnswer: "A"
    },
    {
        question: "Indique cuál de los servicios de vigilancia y protección no pueden prestarse fuera de los edificios, de las instalaciones o propiedades sin necesidad de autorización previa:",
        options: ["A. La retirada y reposición de fondos en cajeros automáticos, así como la prestación de servicios de vigilancia y protección de los mismos durante las citadas operaciones, o en las de reparación de averías.", 
        "B. Los desplazamientos al exterior de los inmuebles objeto de protección para la realización de actividades directamente relacionadas con las funciones de vigilancia y seguridad de dichos inmuebles.", 
        "C. La vigilancia en acontecimientos culturales, deportivos o cualquier otro evento de relevancia social que se desarrolle en vías o espacios públicos o de uso común, en coordinación, en todo caso, con las Fuerzas y Cuerpos de Seguridad."],
        correctAnswer: "C"
    },
    {
        question: "El desarrollo del conocimiento aprovechando la capacidad del ser humano de adaptarse al medio ambiente, es el fundamento de:",
        options: ["A. Teoría de la imitación.", 
        "B. Teoría del conductismo.", 
        "C. Teoría del desarrollo cognitivo."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué casos le corresponde la competencia sancionadora al Secretario de Estado de Seguridad?",
        options: ["A. Inducir, promover, favorecer o facilitar con ánimo de lucro, individualmente o formando parte de una organización, la inmigración clandestina de personas en tránsito o con destino al territorio español o su permanencia en el mismo, siempre que el hecho no constituya delito.", 
        "B. La comisión de una tercera infracción grave siempre que en un plazo de un año anterior hubiera sido sancionado por dos faltas graves de la misma naturaleza.", 
        "C. En los supuestos de participación en actividades contrarias a la seguridad nacional o que pueden perjudicar las relaciones de España con otros países."],
        correctAnswer: "C"
    },
    {
        question: "La inclinación del respaldo, manteniendo una posición vertical sin llegar a esta, debe estar en torno a los:",
        options: ["A. 90º y 100º.", 
        "B. 100º y 110º.", 
        "C. 110º y 120º."],
        correctAnswer: "B"
    },
    {
        question: "La palabra 'Derecho' posee varias acepciones, cuando se refiere al hecho que consiste en dar a cada uno lo suyo, la palabra Derecho aparece como equivalente a:",
        options: ["A. Orden normativo por el que se rige una sociedad.", 
        "B. Orden Jurídico o Justicia.", 
        "C. Conjunto de normas atribuidas a una persona."],
        correctAnswer: "B"
    },
    {
        question: "La Iglesia es un agente de control social:",
        options: ["A. Formal.", 
        "B. Informal.", 
        "C. Religioso."],
        correctAnswer: "B"
    },
    {
        question: "Señale la opción incorrecta en relación a las causas de denegación de las solicitudes realizadas en puestos transfronterizos:",
        options: ["A. Cuando no corresponda a España su examen de conformidad con los convenios internacionales en que sea Parte.", 
        "B. Que planteen exclusivamente cuestiones que no guarden relación con el examen de los requisitos para el reconocimiento de la condición de refugiado o la concesión de la protección subsidiaria.", 
        "C. Que la persona solicitante incurra en alguno de los supuestos de exclusión o de denegación."],
        correctAnswer: "A"
    },
    {
        question: "Cuando Ia devolución no se pudiera ejecutar en el plazo de 72 horas, ¿qué medida se podrá solicitar de la autoridad judicial?",
        options: ["A. La medida de expulsión.", 
        "B. La medida de autorización de residencia provisional por circunstancias excepcionales.", 
        "C. La medida de internamiento prevista para los expedientes de expulsión."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién relaciona las actitudes con el sistema nervioso?:",
        options: ["A. Rockeach.", 
        "B. Newcomb.", 
        "C. Allport."],
        correctAnswer: "C"
    },
    {
        question: "Los valores influyen en la toma de decisiones:",
        options: ["A. No. Lo que influyen son las actitudes.", 
        "B. Si, aunque son abstractos.", 
        "C. Sí, porque son concretos."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién asume la responsabilidad de daños o lesiones a terceros causados por un vehículo policial circulando con carácter de urgencia?",
        options: ["A. El conductor de dicho vehículo.", 
        "B. La dotación policial de dicho vehículo.", 
        "C. El cuerpo policial al que pertenezca dicho vehículo."],
        correctAnswer: "A"
    },
    {
        question: "El periodo de internamiento se mantendrá por el tiempo imprescindible para los fines del expediente y no podrá exceder en ningún caso:",
        options: ["A. De 90 días.", 
        "B. De dos meses.", 
        "C. De sesenta días."],
        correctAnswer: "C"
    },
];

// Función para mezclar preguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showTestQuestions() {
    const testSection = document.getElementById("testSection");
    const allQuestionsSection = document.getElementById("allQuestionsSection");
    const questionCount = parseInt(document.getElementById("questionCount").value);

    testSection.innerHTML = "";
    allQuestionsSection.innerHTML = "";
    allQuestionsSection.classList.add("hidden");

    const shuffledQuestions = shuffle([...questions]).slice(0, questionCount);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let answeredQuestions = 0;

    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>${q.question}</p>
            <ul>
                ${q.options.map(option => `<li>${option}</li>`).join("")}
            </ul>
        `;
        questionElement.querySelector("ul").addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                const selectedOption = event.target.textContent;
                const correctOption = q.options.find(option => option.startsWith(q.correctAnswer));
                const isCorrect = selectedOption.startsWith(q.correctAnswer);

                if (isCorrect) {
                    event.target.classList.add("correct");
                    correctAnswers++;
                } else {
                    event.target.classList.add("incorrect");
                    incorrectAnswers++;
                }

                Array.from(this.children).forEach(li => {
                    if (li.textContent.startsWith(q.correctAnswer)) {
                        li.classList.add("correct");
                    } else {
                        li.classList.add("incorrect");
                    }
                    li.style.pointerEvents = "none";
                });

                answeredQuestions++;
                if (answeredQuestions === questionCount) {
                    const score = ((correctAnswers - (incorrectAnswers / 2)) / questionCount) * 10;
                    const noteSection = document.createElement("div");
                    noteSection.innerHTML = `<p>Nota final: <strong>${score.toFixed(2)}</strong></p>`;
                    noteSection.className = 'note-section';
                    testSection.appendChild(noteSection);
                }
            }
        });
        testSection.appendChild(questionElement);
    });

    testSection.classList.remove("hidden");
}

function showAllQuestions() {
    const testSection = document.getElementById("testSection");
    const allQuestionsSection = document.getElementById("allQuestionsSection");

    allQuestionsSection.innerHTML = "";
    testSection.innerHTML = "";
    testSection.classList.add("hidden");

    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>${q.question}</p>
            <ul>
                ${q.options.map(option => {
                    const isCorrect = option.startsWith(q.correctAnswer);
                    return `<li class="${isCorrect ? 'correct' : ''}">${option}</li>`;
                }).join("")}
            </ul>
        `;
        allQuestionsSection.appendChild(questionElement);
    });
    allQuestionsSection.classList.remove("hidden");
}


document.getElementById("testButton").addEventListener("click", showTestQuestions);
document.getElementById("viewAllButton").addEventListener("click", showAllQuestions);
