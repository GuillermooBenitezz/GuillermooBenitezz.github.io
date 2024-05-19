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
        question: "Las faltas de respeto y consideración cuyo destinatario sea un miembro de las FCS en el ejercicio de sus funciones de protección de la seguridad ciudadana tendrán la consideración de falta:",
        options: ["A. Leve", 
        "B. Grave", 
        "C. Muy grave."],
        correctAnswer: "A"
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
        question: "Conectan las ruedas de cada eje en un turismo y sirven para controlar la inclinación del coche en las curvas, evitando así una salida no deseada:",
        options: ["A. Barras de torsión.", 
        "B. Barras estabilizadoras.", 
        "C. Resortes."],
        correctAnswer: "B"
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
    // Agrega más preguntas aquí
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
                const selectedAnswer = event.target.textContent.trim().split(".")[0];
                if (selectedAnswer === q.correctAnswer) {
                    event.target.classList.add("correct");
                    correctAnswers++;
                } else {
                    event.target.classList.add("incorrect");
                    incorrectAnswers++;
                    Array.from(questionElement.querySelectorAll("li")).forEach(li => {
                        if (li.textContent.trim().split(".")[0] === q.correctAnswer) {
                            li.classList.add("correct");
                        }
                    });
                }
                answeredQuestions++;
                questionElement.querySelector("ul").removeEventListener("click", arguments.callee);
                if (answeredQuestions === shuffledQuestions.length) {
                    updateNote();
                }
            }
        });
        testSection.appendChild(questionElement);
    });
    testSection.classList.remove("hidden");

    function updateNote() {
        const totalQuestions = shuffledQuestions.length;
        const score = ((correctAnswers - (incorrectAnswers / 2)) / totalQuestions) * 10;
        const noteSection = document.createElement("div");
        noteSection.innerHTML = `<p>Nota final: <strong>${score.toFixed(2)}</strong></p>`;
        noteSection.className = 'note-section';
        testSection.appendChild(noteSection);
    }
}

function showAllQuestions() {
    const testSection = document.getElementById("testSection");
    const allQuestionsSection = document.getElementById("allQuestionsSection");
    const questionCount = parseInt(document.getElementById("questionCount").value);

    allQuestionsSection.innerHTML = "";
    testSection.innerHTML = "";
    testSection.classList.add("hidden");

    const shuffledQuestions = shuffle([...questions]).slice(0, questionCount);

    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>${q.question}</p>
            <ul>
                ${q.options.map(option => `<li>${option}</li>`).join("")}
            </ul>
        `;
        allQuestionsSection.appendChild(questionElement);
    });
    allQuestionsSection.classList.remove("hidden");
}

document.getElementById("testButton").addEventListener("click", showTestQuestions);
document.getElementById("viewAllButton").addEventListener("click", showAllQuestions);