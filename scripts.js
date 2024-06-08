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
        question: "Las actuaciones a seguir en el caso de los vehículos intervenidos deberán ajustarse a lo establecido en la ISES 1/2011, en donde se contemplan, según el destino que proceda dar a los bienes intervenidos:",
        options: ["A. Dos tipos de actuaciones.", 
        "B. Tres tipos de actuaciones.", 
        "C. Cuatro tipo de actuaciones."],
        correctAnswer: "B"
    },
    {
        question: "El Comité de Seguridad y Salud se reúne trimestralmente, con lo que las empresas que cuenten con varios centros de trabajo dotados de Comité podrán acordar con su trabajadores, la creación de:",
        options: ["A. Un Comité de Centros.", 
        "B. Un Comité Intercentros.", 
        "C. Un Comité Interdisciplinar para Centros de Trabajo."],
        correctAnswer: "B"
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
        question: "Los anteproyectos de ley habrán de ser informados por:",
        options: ["A. La Secretaría General Técnica.", 
        "B. El Ministro correspondiente.", 
        "C. Congreso de los diputados."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo  de escala de actitudes se caracteriza porque en ella tan solo hay dos respuestas posibles a las distintas preguntas: “de acuerdo” o “desacuerdo”?",
        options: ["A. Método de las actitudes summativas de Likert.", 
        "B. Método de las actitudes acumulativas de Guttman.", 
        "C. Método de las actitudes diferenciales de Thurstone."],
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
        question: "Señale la opción incorrecta en relación a las causas de denegación de las solicitudes realizadas en puestos transfronterizos:",
        options: ["A. Cuando no corresponda a España su examen de conformidad con los convenios internacionales en que sea Parte.", 
        "B. Que planteen exclusivamente cuestiones que no guarden relación con el examen de los requisitos para el reconocimiento de la condición de refugiado o la concesión de la protección subsidiaria.", 
        "C. Que la persona solicitante incurra en alguno de los supuestos de exclusión o de denegación."],
        correctAnswer: "A"
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
        question: "El periodo de internamiento se mantendrá por el tiempo imprescindible para los fines del expediente y no podrá exceder en ningún caso:",
        options: ["A. De 90 días.", 
        "B. De dos meses.", 
        "C. De sesenta días."],
        correctAnswer: "C"
    },
    {
        question: "Representan al reino de España en un órgano de una organización internacional, en una conferencia de estados convocada por una organicé internacional o bajo sus auspicios, o en un acto concreto organizado por un tercer estado para el que se requiera conformar una delegación con carta oficial.",
        options: ["A. Delegaciones.", 
        "B. Oficinas consulares.", 
        "C. Misiones Diplomaticas Especiales."],
        correctAnswer: "A"
    },
    {
        question: "¿Cada cuanto se reúne las representaciones permanentes en el COREPER?",
        options: ["A. Semanalmente.", 
        "B. Mensualmene.", 
        "C. Trimestralmente."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué año pasó el Consejo Europeo a ser una de las 7 instituciones de la UE?",
        options: ["A. 2003.", 
        "B. 1999.", 
        "C. 2009."],
        correctAnswer: "C"
    },
    {
        question: "Cuando el volumen de las consultas lo exija, ¿A propuesta de quién se puede ampliar el número de secciones del Consejo de Estado?",
        options: ["A. El Pleno del Consejo de Estado.", 
        "B. La Comision Permanente del Consejo de Estado.", 
        "C. Las Comisiones de Estudio del Consejo de Estado."],
        correctAnswer: "B"
    },
    {
        question: "¿Que son los oficiales de enlace?",
        options: ["A. Los encargados de comunicarse y cooperar directamente con los oficiales de enlaces de otros Estados miembros.", 
        "B. Los encargados de representar los intereses de los Estados miembros en la Unidad Central de La Haya.", 
        "C. Unidad de representación por cada Unidad Nacional, en tanto cada estado tiene una unidad nacional formada por al menos 3 oficiales de enlace."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué consejos de las 10 formaciones del Consejo de la UE se sustrae el régimen general de presidencia rotatoria?",
        options: ["A. No existe.", 
        "B. Consejo de asuntos generales.", 
        "C. Consejo de asuntos exteriores."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál será la composición de jueces del Tribunal General de la Unión Europea a final del 2019?",
        options: ["A. 2 jueces por Estado miembro.", 
        "B. 47 jueces.", 
        "C. 40 jueces."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién define la socialización como la consecuencia de experiencias de aprendizaje, que tienen lugar como resultado de la integración del individuo en la sociedad?",
        options: ["A. Kant.", 
        "B. Freud.", 
        "C. McDavid."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién propone el anteproyecto del presupuesto de la Unión Europea?",
        options: ["A. El Consejo de la UE.", 
        "B. El Parlamento de la UE.", 
        "C. La Comision de la UE."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué instituciones de la Unión Europea tiene la consideración de máximo órgano 'ejecutivo', máximo órgano 'decisorio y legislativo' y máximo órgano político?",
        options: ["A. El Consejo Europeo, el Consejo de la UE y la Comisión, respectivamente", 
        "B. El Consejo de la UE, el Consejo Europeo y la Comision Europea, respectivamente.", 
        "C. La Comision Europea, el Consejo de la UE y el Consejo Europeo, respectivamente."],
        correctAnswer: "C"
    },
    {
        question: "En una cuestión prejudicial presentada ante el tribunal de Justicia de la UE, una vez notificada la misma, los Estados miembros y las instituciones disponen de:",
        options: ["A. 15 días para presentar al Tribunal de Justicia sus observaciones escritas.", 
        "B. Un mes para presentar al Tribunal de Justicia sus observaciones escritas.", 
        "C. Dos meses para presentar el Tribunal de Justicia sus observaciones escritas."],
        correctAnswer: "C"
    },
    {
        question: "Los llamados planes de apoyo operativo deben ser elaborados por:",
        options: ["A. Siempre por la fuerza y cuerpo segura del Estado.", 
        "B. En la Comunidad Autónoma con competencias la materia, su cuerpo policial, si lo posee.", 
        "C. La Secretaría de Estado de seguridad."],
        correctAnswer: "B"
    },
    {
        question: "¿De cuantos miembros está compuesto el Comité Ejecutivo de Interpol?",
        options: ["A. De un presidente, cuatro vicepresidente y ocho vocales.", 
        "B. De un presidente, tres vicepresidentes y nueve vocales.", 
        "C. De un presidente, dos vicepresidentes y cuatro vocales."],
        correctAnswer: "B"
    },
    {
        question: "Con respecto al altruismo cuál no es una forma estudiada según los sociólogos para que se realice la altruista:",
        options: ["A. Que el acto sea voluntario.", 
        "B. Que se favorezca a los ajeno.", 
        "C. Que el que la realiza pretenda obtener beneficios."],
        correctAnswer: "C"
    },
    {
        question: "El compromiso estratégico para igualdad entre mujeres y hombre es una activa básica de la UE en concreto:",
        options: ["A. La Comision Europea.", 
        "B. El Consejo de la Unión Europea.", 
        "C. El Consejo Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Los tribunales para acceso a la administración general del Estado cómo funcionar de carrera estarán compuestos por un número de miembros:",
        options: ["A. Impar no superior a cinco.", 
        "B. Par no inferior a seis.", 
        "C. Impar no inferior a cinco."],
        correctAnswer: "C"
    },
    {
        question: "La autoridad competente que sola o conjuntamente con otras, determine los fines y medios del tratamiento de datos personales; en caso de que los fines y medios del tratamiento estén determinados por el Derecho de la Unión Europea o por la legislación española se denomina:",
        options: ["A. Encargado del tratamiento.", 
        "B. Delegado de Protección de datos.", 
        "C. Responsable del tratamiento."],
        correctAnswer: "C"
    },
    {
        question: "El uso de EPI es una medida de prevención:",
        options: ["A. De carácter general.", 
        "B. De carácter específico.", 
        "C. De carácter excepcional."],
        correctAnswer: "C"
    },
    {
        question: "Las autoridades competentes adoptarán las medidas necesarias para la identificación de las víctimas de la trata de personas conforme a lo previsto por:",
        options: ["A. El Consejo de Europa.", 
        "B. El Consejo Europeo.", 
        "C. El Consejo de la UE."],
        correctAnswer: "A"
    },
    {
        question: "La teoría del riesgo constante fue enunciada por:",
        options: ["A. Joseph Joubert.", 
        "B. Barjonet Inrets.", 
        "C. Erich Fromm."],
        correctAnswer: "B"
    },
    {
        question: "Para el sociólogo Robert Merton, aquellos que no tienen prejuicios contra las minorías y rehúsan la discriminación aunque pueda ser costosa personalmente, son:",
        options: ["A. Liberales consecuentes.", 
        "B. Liberales tímidos.", 
        "C. Liberales tibios."],
        correctAnswer: "A"
    },
    {
        question: "Las decisiones del Subcomité para la prevención de la tortura, se tomarán:",
        options: ["A. Por mayoría absoluta.", 
        "B. Por mayoría cualificada.", 
        "C. Por mayoría simple."],
        correctAnswer: "C"
    },
    {
        question: "¿Cómo se denomina al espacio rural que rodea a la ciudad, que es ocupado por viviendas?",
        options: ["A. Las dos respuestas son correctas.", 
        "B. Franja periurbana.", 
        "C. Rurbanización."],
        correctAnswer: "A"
    },
    {
        question: "En la Declaración Universal de los Derechos Humanos, el derecho de asilo se encuadra dentro del grupo de:",
        options: ["A. Derechos del individuo en sus relaciones con los grupos.", 
        "B. Derechos y libertades políticas.", 
        "C. Derechos de orden internacional."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes es un requisito suficiente para que una directiva entre en vigor en el ámbito del derecho de la Unión Europea.",
        options: ["A. La simple publicación en el  DOUE.", 
        "B. La simple notificación a sus destinatarios.", 
        "C. La simple publicación en el Boletín del país al que se dirige."],
        correctAnswer: "B"
    },
    // Tema 4
    {
        question: "¿Qué Tribunal Español será competente para el conocimiento y fallo de los procedimientos que investigue la Fiscalía europea?",
        options: ["A. Audiencia Nacional.", 
        "B. Tribunal Supremo.", 
        "C. Tribunal Superior de Justicia."],
        correctAnswer: "A"
    },
    {
        question: "Frontex está dirigido por un Consejo de Adminisracion, que está compuesto por:",
        options: ["A. Un represente de cada Estado miembro responsable de las fronteras y un representante de la comisión.", 
        "B. Un representante de cada Estado miembro responsables de las fronteras y dos representantes de la comisión.", 
        "C. Un representante de cada Estado miembro responsables de las fronteras."],
        correctAnswer: "B"
    },
    {
        question: "El procedimiento de votación más común en el Consejo de la Unión Europea es la toma de ediciones por:",
        options: ["A. Consenso.", 
        "B. Unaminidad.", 
        "C. Mayoria cualificada."],
        correctAnswer: "C"
    },
    {
        question: "El principal órgano legislativo y de toma de decisiones en la Unión Europea es:",
        options: ["A. El Consejo.", 
        "B. En Consejo Europeo.", 
        "C. La Asamblea (El Parlamento Europeo)."],
        correctAnswer: "A"
    },
    {
        question: "Permite conrolar la legalidad de la inactividad de las instituciones comunitarias:",
        options: ["A. Recurso por incumplimiento.", 
        "B. Recurso por omision.", 
        "C. Recurso por anulacion."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué año se puso marcha el sistema de colaboracion entre tres presidencias consecutivas para hacer frente al corto plazo de sesis meses de la Presidencia en el Consejo de la UE?",
        options: ["A. 2003.", 
        "B. 2007.", 
        "C. 2009."],
        correctAnswer: "B"
    },
    {
        question: "Señale cual de las siguientes no es una caracteristica de las clausulas pasarela:",
        options: ["A. Permiten de un procedimiento legislativo especial al procedimienot legislativo ordinario para adoptar un acto en un ámbito determinado.", 
        "B. Permiten pasar de una votación por mayoría cualificada a una votación por unanimidad para adoptar un acto en un ámbito determinado.", 
        "C. La activación de una cláusula pasarela siempre depende de una decisión adoptada por unanimidad."],
        correctAnswer: "B"
    },
    {
        question: "En una cuestion prejudicial ane el Tribunal de Justicia de la UE, una vez notificada a las partes la peticion de la cuestion, estas disponen de _____ para presenar al Tribunal de Justicia sus observaciones escritas",
        options: ["A. Un mes.", 
        "B. Dos meses.", 
        "C. Tres meses."],
        correctAnswer: "B"
    },
    {
        question: "La armonizacion de los intereses nacionales con el intereses nacionales con el interes comunitario se lleva a cabo por:",
        options: ["A. La comision.", 
        "B. El Parlamento.", 
        "C. El COnsejo de la Union Europea."],
        correctAnswer: "C"
    },
    {
        question: "¿Quien nombra al director de la oficina de la lucha contra el fraude en materia europea?",
        options: ["A. El Parlamento, la comision y el Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. La comision."],
        correctAnswer: "A"
    },
    {
        question: "Para el noombramiento del Presidente de la Comision Europea: Con base en la propuesta de su Presidente, el Consejo Europeo adopara, por ___ una decision por la que se proponga al Parlamento Europeo un candidato a la presidencia de la Comision.",
        options: ["A. Mayoria simple.", 
        "B. Mayoria absoluta.", 
        "C. Mayoria cualificada."],
        correctAnswer: "C"
    },
    {
        question: "No es una afirmacion ciera en relacion con la Decision comunitaria:",
        options: ["A. Que, si fija desinatarios, precise su notificacion a los ineresados para su entrada en vigor como obligatoria.", 
        "B. Que sea obligatoria respecto a los fines, pudiendo elegir los Estados los actos necesarios para su cumplimiento.", 
        "C. Que en general se dirija a destinatarios individualizados, ya sean Estados o personas fisicas o juridicas."],
        correctAnswer: "B"
    },
    {
        question: "¿En que fecha se inegro España de pleno derecho en la Union Europea?",
        options: ["A. 1 de enero 1986.", 
        "B. 1 de enero 1991.", 
        "C. 1 de enero de 1992."],
        correctAnswer: "A"
    },
    {
        question: "Los fiscales Europeos tienen un mandato de:",
        options: ["A. 7 años no renovables.", 
        "B. 6 años no renovables.", 
        "C. 5 años no renovables."],
        correctAnswer: "B"
    },
    {
        question: "Propone legislacion al Parlamento y al Consejo de la Union Europea, ejerciendo con exclusividad la iniciativa normativa.",
        options: ["A. Consejo Europeo.", 
        "B. Consejo de Ministros.", 
        "C. Comision."],
        correctAnswer: "C"
    },
    {
        question: "¿Quien establecio los Criterios de Copenhague en 1993?",
        options: ["A. Consejo Europeo.", 
        "B. Parlamento.", 
        "C. Comision."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuantas lenguas oficiales tiene la UE?",
        options: ["A. 22.", 
        "B. 23.", 
        "C. 24."],
        correctAnswer: "C"
    },
    {
        question: "Fue el tratado por el que se creo una unica Comision y un unico Consejo:",
        options: ["A. Tratado de Bruselas.", 
        "B. Acta Unica Europea.", 
        "C. Tratado de Amsterdam."],
        correctAnswer: "A"
    },
    {
        question: "Organo consultivo de la Union Europea que representa a las organizaciones de los trabajadores y empresarios.",
        options: ["A. Comite de las Regiones.", 
        "B. Comite Economico y Regional.", 
        "C. Ninguna respuesta es correcta."],
        correctAnswer: "C"
    },
    {
        question: "¿Quien propone el anteproyecto del Presupuesto de la Union Europea?",
        options: ["A. El Consejo de la UE.", 
        "B. El Parlamento de la UE.", 
        "C. La Comision de la UE."],
        correctAnswer: "C"
    },
    {
        question: "Las Salas permanentes de la Fiscalia europea estaran conformadas por:",
        options: ["A. Tres miembros.", 
        "B. Cuatro miembros.", 
        "C. Cinco miembros."],
        correctAnswer: "A"
    },
    {
        question: "La oficina para la lucha contra el Fraude de la UE protege los intereses financieros de la Unikn Europea y es:",
        options: ["A. Autonoma en lo que respecta a sus funciones de investigacion, presupuestarias y administrativas, aunque forma parte de la Comision.", 
        "B. Autonoma en lo que respecta a sus funciones de investigacion y de administracion, aunque forma parte de Europol.", 
        "C. Autonoma en lo que respecta a sus funciones de investigacion, aunque forma parte del Tribunal de Cuentas de la UE."],
        correctAnswer: "A"
    },
    {
        question: "Son reglamentos adoptados por el Consejo, y tienen un caracter plenamente legislativo:",
        options: ["A. Reglamentos legislativos.", 
        "B. Reglamentos ejecutivos.", 
        "C. Reglamentos de base."],
        correctAnswer: "C"
    },
    {
        question: "El interventor financiero de Europol sera nombrado por unanimidad por:",
        options: ["A. El Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. El Consejo de Adminisracion de Europol."],
        correctAnswer: "C"
    },
    {
        question: "En 1993, a razi de las solicitudes de adhesion a la Union Europea de los antiguos paises comunistas, el Consejo Europeo estableción tres criterios que debian cumplir para convertirse en Estados miembros. Entre ellos no se encuentra:",
        options: ["A. Capacidad de hacer frente a la presion competitiva y las fuerzas de mercado.", 
        "B. Respeto y proteccion de las minorias.", 
        "C. Sistema de cooperacion intergubernamental entre los Estados miembros en materia de politica exterior y seguridad comun."],
        correctAnswer: "C"
    },
    {
        question: "La comision se designara tras las elecciones al Parlamento Europeo en un plazo de:",
        options: ["A. Tres meses.", 
        "B. Seis meses.", 
        "C. Nueves meses."],
        correctAnswer: "B"
    },
    {
        question: "Eurojust está formado por un colegio de:",
        options: ["A. 28 representantes.", 
        "B. 29 representantes.", 
        "C. 30 representantes."],
        correctAnswer: "A"
    },
    {
        question: "Antecedente inmediato de la OCDE, establecido en Paris en 1948 por la Convencion de Cooperacion Economica para colaborar en la distribucion de los creditos del Plan Marshall.",
        options: ["A. OECE.", 
        "B. CECA.", 
        "C. CEE."],
        correctAnswer: "A"
    },
    {
        question: "¿Cual es el segundo pilar de la Union Europea?",
        options: ["A. JAI.", 
        "B. PESC.", 
        "C. UEM."],
        correctAnswer: "B"
    },
    {
        question: "Se puede asimilar a las leyes y reglamentos del derecho interno:",
        options: ["A. Los actos unilaterales del derecho derivado.", 
        "B. Los Acuerdos convencionales del derecho derivado.", 
        "C. Los tratados modificativos."],
        correctAnswer: "A"
    },
    {
        question: "¿Cual de las siguientes no es una funcion del Alto REpresentante de la Union para Asuntos Exteriores?",
        options: ["A. Preside el Consejo de Asuntos Exteriores.", 
        "B. Es miemrbo de la Comision.", 
        "C. Forma parte del Consejo Europeo."],
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
