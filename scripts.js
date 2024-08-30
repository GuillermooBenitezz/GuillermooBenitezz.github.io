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
        question: "El desarrollo del conocimiento aprovechando la capacidad del ser humano de adaptarse al medio ambiente, es el fundamento de:",
        options: ["A. Teoría de la imitación.", 
        "B. Teoría del conductismo.", 
        "C. Teoría del desarrollo cognitivo."],
        correctAnswer: "C"
    },
    {
        question: "La palabra 'Derecho' posee varias acepciones, cuando se refiere al hecho que consiste en dar a cada uno lo suyo, la palabra Derecho aparece como equivalente a:",
        options: ["A. Orden normativo por el que se rige una sociedad.", 
        "B. Orden Jurídico o Justicia.", 
        "C. Conjunto de normas atribuidas a una persona."],
        correctAnswer: "B"
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
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Frontex está dirigido por un Consejo de Adminisracion, que está compuesto por:",
        options: ["A. Un represente de cada Estado miembro responsable de las fronteras y un representante de la comisión.", 
        "B. Un representante de cada Estado miembro responsables de las fronteras y dos representantes de la comisión.", 
        "C. Un representante de cada Estado miembro responsables de las fronteras."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "El procedimiento de votación más común en el Consejo de la Unión Europea es la toma de ediciones por:",
        options: ["A. Consenso.", 
        "B. Unaminidad.", 
        "C. Mayoria cualificada."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "El principal órgano legislativo y de toma de decisiones en la Unión Europea es:",
        options: ["A. El Consejo.", 
        "B. En Consejo Europeo.", 
        "C. La Asamblea (El Parlamento Europeo)."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Permite conrolar la legalidad de la inactividad de las instituciones comunitarias:",
        options: ["A. Recurso por incumplimiento.", 
        "B. Recurso por omision.", 
        "C. Recurso por anulacion."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "¿En qué año se puso marcha el sistema de colaboracion entre tres presidencias consecutivas para hacer frente al corto plazo de sesis meses de la Presidencia en el Consejo de la UE?",
        options: ["A. 2003.", 
        "B. 2007.", 
        "C. 2009."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "En una cuestion prejudicial ane el Tribunal de Justicia de la UE, una vez notificada a las partes la peticion de la cuestion, estas disponen de _____ para presenar al Tribunal de Justicia sus observaciones escritas",
        options: ["A. Un mes.", 
        "B. Dos meses.", 
        "C. Tres meses."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "La armonizacion de los intereses nacionales con el intereses nacionales con el interes comunitario se lleva a cabo por:",
        options: ["A. La comision.", 
        "B. El Parlamento.", 
        "C. El Consejo de la Union Europea."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien nombra al director de la oficina de la lucha contra el fraude en materia europea?",
        options: ["A. El Parlamento, la comision y el Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. La comision."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Para el noombramiento del Presidente de la Comision Europea: Con base en la propuesta de su Presidente, el Consejo Europeo adopara, por ___ una decision por la que se proponga al Parlamento Europeo un candidato a la presidencia de la Comision.",
        options: ["A. Mayoria simple.", 
        "B. Mayoria absoluta.", 
        "C. Mayoria cualificada."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "No es una afirmacion ciera en relacion con la Decision comunitaria:",
        options: ["A. Que, si fija desinatarios, precise su notificacion a los ineresados para su entrada en vigor como obligatoria.", 
        "B. Que sea obligatoria respecto a los fines, pudiendo elegir los Estados los actos necesarios para su cumplimiento.", 
        "C. Que en general se dirija a destinatarios individualizados, ya sean Estados o personas fisicas o juridicas."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "¿En que fecha se inegro España de pleno derecho en la Union Europea?",
        options: ["A. 1 de enero 1986.", 
        "B. 1 de enero 1991.", 
        "C. 1 de enero de 1992."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Los fiscales Europeos tienen un mandato de:",
        options: ["A. 7 años no renovables.", 
        "B. 6 años no renovables.", 
        "C. 5 años no renovables."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Propone legislacion al Parlamento y al Consejo de la Union Europea, ejerciendo con exclusividad la iniciativa normativa.",
        options: ["A. Consejo Europeo.", 
        "B. Consejo de Ministros.", 
        "C. Comision."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien establecio los Criterios de Copenhague en 1993?",
        options: ["A. Consejo Europeo.", 
        "B. Parlamento.", 
        "C. Comision."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Organo consultivo de la Union Europea que representa a las organizaciones de los trabajadores y empresarios.",
        options: ["A. Comite de las Regiones.", 
        "B. Comite Economico y Regional.", 
        "C. Ninguna respuesta es correcta."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "¿Quien propone el anteproyecto del Presupuesto de la Union Europea?",
        options: ["A. El Consejo de la UE.", 
        "B. El Parlamento de la UE.", 
        "C. La Comision de la UE."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "Las Salas permanentes de la Fiscalia europea estaran conformadas por:",
        options: ["A. Tres miembros.", 
        "B. Cuatro miembros.", 
        "C. Cinco miembros."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "La oficina para la lucha contra el Fraude de la UE protege los intereses financieros de la Unikn Europea y es:",
        options: ["A. Autonoma en lo que respecta a sus funciones de investigacion, presupuestarias y administrativas, aunque forma parte de la Comision.", 
        "B. Autonoma en lo que respecta a sus funciones de investigacion y de administracion, aunque forma parte de Europol.", 
        "C. Autonoma en lo que respecta a sus funciones de investigacion, aunque forma parte del Tribunal de Cuentas de la UE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Son reglamentos adoptados por el Consejo, y tienen un caracter plenamente legislativo:",
        options: ["A. Reglamentos legislativos.", 
        "B. Reglamentos ejecutivos.", 
        "C. Reglamentos de base."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "El interventor financiero de Europol sera nombrado por unanimidad por:",
        options: ["A. El Consejo.", 
        "B. El Parlamento y el Consejo.", 
        "C. El Consejo de Adminisracion de Europol."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "En 1993, a razi de las solicitudes de adhesion a la Union Europea de los antiguos paises comunistas, el Consejo Europeo estableción tres criterios que debian cumplir para convertirse en Estados miembros. Entre ellos no se encuentra:",
        options: ["A. Capacidad de hacer frente a la presion competitiva y las fuerzas de mercado.", 
        "B. Respeto y proteccion de las minorias.", 
        "C. Sistema de cooperacion intergubernamental entre los Estados miembros en materia de politica exterior y seguridad comun."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "La comision se designara tras las elecciones al Parlamento Europeo en un plazo de:",
        options: ["A. Tres meses.", 
        "B. Seis meses.", 
        "C. Nueves meses."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Eurojust está formado por un colegio de:",
        options: ["A. 28 representantes.", 
        "B. 29 representantes.", 
        "C. 30 representantes."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "Antecedente inmediato de la OCDE, establecido en Paris en 1948 por la Convencion de Cooperacion Economica para colaborar en la distribucion de los creditos del Plan Marshall.",
        options: ["A. OECE.", 
        "B. CECA.", 
        "C. CEE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Cual es el segundo pilar de la Union Europea?",
        options: ["A. JAI.", 
        "B. PESC.", 
        "C. UEM."],
        topic: 4,
        correctAnswer: "B"
    },
    {
        question: "Se puede asimilar a las leyes y reglamentos del derecho interno:",
        options: ["A. Los actos unilaterales del derecho derivado.", 
        "B. Los Acuerdos convencionales del derecho derivado.", 
        "C. Los tratados modificativos."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Cual de las siguientes no es una funcion del Alto Representante de la Union para Asuntos Exteriores?",
        options: ["A. Preside el Consejo de Asuntos Exteriores.", 
        "B. Es miemrbo de la Comision.", 
        "C. Forma parte del Consejo Europeo."],
        topic: 4,
        correctAnswer: "C"
    },
    {
        question: "Inicialmente,cuando el orden público o la seguridad interior de un Estado miembro exijan una actuación inmediata, se podrá restablecer el control fronterizo por un periodo de tiempo no superior a :",
        options: ["A. 10 días.", 
        "B. 20 días.", 
        "C. 30 días."],
        correctAnswer: "A"
    },
    {
        question: "El último objetivo de la Agenda 2030 es:",
        options: ["A. Promover sociedades pacíficas e inclusivas para el desarrollo sostenible.", 
        "B. Fortalecer los medios de implementación y revitalizar la Alianza Mundial para el Desarrollo Sostenible.", 
        "C. Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos."],
        correctAnswer: "B"
    },
    {
        question: "El procedimiento abreviado en materia de protección de la seguridad ciudadana:",
        options: ["A. Será de aplicación por la comisión de infracciones leves.", 
        "B. Será de aplicación por la comisión de infracciones leves y graves, no procediendo en caso de infracciones muy graves.", 
        "C. Permite satisfacer el pago obligatorio de las sanciones con el efecto de la reducción del importe correspondiente."],
        correctAnswer: "B"
    },
    {
        question: "El Convenio Aarhus:",
        options: ["A. Regula el acceso a la información y participación pública.", 
        "B. Regula el acceso en la toma de decisiones y acceso a la justicia en materia de medio ambiente, así como la normativa comunitaria derivada del mismo.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "La huella ecológica se mide en :",
        options: ["A. Hectáreas ambientales.", 
        "B. Hectáreas biodesarrolladas.", 
        "C. Hectáreas globales."],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. La Comisión Interministerial para el Cambio Climático y la Transición Energética se crea con el fin de lograr el mejor tratamiento de las políticas públicas en esta materia, desde una perspectiva participativa y multidisciplinar.", 
        "B. Se crea la Comisión Interministerial para el Cambio Climático y la Transición Energética, adscrita al Ministerio para la Transición Ecológica, como órgano colegiado interministerial de los previstos en la Ley 20/2015, de 4 de octubre, de Régimen Jurídico del Sector Público.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué año se negocia el Protocolo de Montreal?",
        options: ["A. 1987.", 
        "B. 1988.", 
        "C. 1989."],
        correctAnswer: "A"
    },
    {
        question: "Fue la reunión que, en 1984, creó la agenda global para el cambio sostenible, fomentada también por la Asamblea General de las Naciones Unidas:",
        options: ["A. Primera reunión de la Estrategia Medioambiental para el Cambio.", 
        "B. Carta Mundial de la ONU para la Naturaleza.", 
        "C. Reunión de la Comisión Mundial sobre Medio Ambiente y Desarrollo."],
        correctAnswer: "C"
    },
    {
        question: "¿A qué órgano audita principalmente el Tribunal de Cuentas?",
        options: ["A. Comisión.", 
        "B. Parlamento.", 
        "C. Consejo de la UE."],
        topic: 4,
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo de migración es la de aquellos de se desplazan desde el lugar de residencia al lugar de trabajo, estudio o abastecimiento por periodos diarios, ida y vuelta, favorecidos por el transporte público?",
        options: ["A. Pendular.", 
        "B. Estacional.", 
        "C. Intraurbana."],
        correctAnswer: "A"
    },
    {
        question: "De las auditorias voluntarias, las empresas podrán someter con carácter voluntario sus sistemas de prevención al control de una auditoria o evaluación externa, para permitir la adopción de decisiones dirigidas a su perfeccionamiento y mejora. ¿Cuándo puede realizarse una auditoria voluntaria?",
        options: ["A. En casos en que la auditoria externa no sea legalmente exigible.", 
        "B. Solo en casos de que la auditoria externa sea legalmente exigible.", 
        "C. Se realicen con una menor frecuencia o un alcance menos amplio de lo establecido."],
        correctAnswer: "A"
    },
    {
        question: "Funcionario diplomatico que ocupa temporalmente la Jefatura de una Misión Diplomática por hallarse vacante dicho puesto, por ausencia del titular, etc.",
        options: ["A. Encargado de negocios.", 
        "B. Jefe de misión.", 
        "C. Canciller."],
        topic: 5,
        correctAnswer: "A"
    },
    {
        question: "Quien sustitue al titular de un Departamento en el despacho de los asuntos ordinarios de su competencia, en caso de ausencia en el extranjero o enfermedad?",
        options: ["A. El Secretario de Estado.", 
        "B. El Subsecretario.", 
        "C. El Ministro que designe el Presidente del Gobierno."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "La responsabilidad criminal del Presidente y los demas miembros del Gobierno será exigible:",
        options: ["A. La sala de lo Contencioso - Administrativo del Tribunal Supremo.", 
        "B. La Sala de lo Penal de la Audiencia Nacional.", 
        "C. La Sala de lo Penal del Tribunal Supremo."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "La suplencia de los Ministros, para el despacho ordinario de los asuntos de su competencia, sera determinada por:",
        options: ["A. Real Decreto del Presidente del Gobierno.", 
        "B. Real Decreto del Consejo en Madrid.", 
        "C. Ninguna de las respuestas es correcta."],
        topic: 5,
        correctAnswer: "A"
    },
    {
        question: "Con caracter general, no son delegables las competencias del Ministro en favor de:",
        options: ["A. Los Secretarios de Estado.", 
        "B. Los Delegados del Gobierno en las Comunidades Autonomas.", 
        "C. Del Vicepresidente."],
        topic: 5,
        correctAnswer: "C"
    },
    {
        question: "Los embajadores serán designados y cesados:",
        options: ["A. Por Real Decreto del Consejo de Ministros, a propuesta del titular del Ministerio o del Presidente del Gobierno.", 
        "B. Por Real Decreto acordado en Consejo de Ministros a propuesta del Ministro de Asuntos exteriores, UE y Cooperacion.", 
        "C. Por Real Decreto del Consejo de Ministros, a iniciativos del ministro ha interesado y a propuesta del ministro de Hacienda y Administraciones Públicas."],
        topic: 5,
        correctAnswer: "B"
    },
    {
        question: "¿Quien puede ordenar operaciones a la Fuerzas Armadas en el exterior que no esten directamente relacionadas con la defensa de España o el interes nacional?",
        options: ["A. El Gobierno.", 
        "B. El Presidente del Gobierno.", 
        "C. Las Cortes Generales."],
        topic: 5,
        correctAnswer: "B"
    },
    {
        question: "Solo uno de los siguientes principios está garantizado constitucionalmente:",
        options: ["A. La responsabilidad de la Administración Pública.", 
        "B. La interdicción de la arbitrariedad del poder judicial.", 
        "C. La responsabilidad e interdicción de la arbitrariedad de los poderes públicos."],
        correctAnswer: "C"
    },
    {
        question: "En el contexto del PEPIC se insta a los Estados miembros a elaborar un programa nacional de protección, que incluya",
        options: ["A. La identificación de las interdependencias geográficas.", 
        "B. La programación de planes de intervención.", 
        "C. La clasificación de las infraestructuras críticas nacionales en función de su operatividad activa."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué instancia de la personalidad del ser humano, se inscribe la inconsciencia?",
        options: ["A. En el “yo”.", 
        "B. En el “ello”.", 
        "C. En el “superyó”."],
        correctAnswer: "B"
    },
    {
        question: "Órgano colegiado de apoyo al Consejo de Seguridad Nacional cuya composición reflejará el espectro de los ámbitos de los departamentos, organismos y agencias de las administraciones públicas con competencias en materia de ciberseguridad. Hablamos de:",
        options: ["A. El Instituto Nacional de Ciberseguridad.", 
        "B. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.", 
        "C. El Consejo Nacional de Ciberseguridad."],
        correctAnswer: "C"
    },
    {
        question: "La Ley de Medidas para la Protección de las Infraestructuras Críticas, respecto al Programa Nacional de Seguridad de la Aviación Civil:",
        options: ["A. Lo deroga expresamente, puesto que sus previsiones se aplican en lugar de este Programa.", 
        "B. Lo deroga tácitamente, puesto que sus previsiones se aplican con preferencia a las del programa.", 
        "C. Se aplica sin perjuicio de lo que el Programa dispone."],
        correctAnswer: "C"
    },
    {
        question: "Los representantes de Estado en el Consejo de Política de Seguridad serán designados por:",
        options: ["A. El Gobierno.", 
        "B. El Ministerio del Interior.", 
        "C. El Secretario de Estado de Seguridad."],
        correctAnswer: "A"
    },
    {
        question: "Los Delegados del Gobierno:",
        options: ["A. Ejercen las competencias del Estado bajo la dependencia funcional del Ministerio del Interior a los efectos de proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.", 
        "B. Dirigen y coordinan la protección civil en todas las provincias.", 
        "C. Son nombrados por libre designación entre funcionarios de carrera del Estado, de las Comunidades Autónomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1."],
        correctAnswer: "A"
    },
    {
        question: "La conciencia colectiva es propia de las sociedades",
        options: ["A. Urbanas.", 
        "B. Rurales.", 
        "C. Urbanas y rurales."],
        correctAnswer: "B"
    },
    {
        question: "Para la contratación de servicios de seguridad privada en los sectores estratégicos definidos en la legislación de protección de infraestructuras críticas, las empresas de seguridad privada deberán contar, con carácter previo a su prestación, con:",
        options: ["A. Una certificación emitida por una entidad de certificación acreditada.", 
        "B. Una habilitación profesional expedida por el Ministerio del Interior.", 
        "C. Una autorización emitida por el Ministerio del Interior con los requisitos que reglamentariamente se determinen."],
        correctAnswer: "A"
    },
    {
        question: "Con carácter general,no son delegables las competencias del Ministro en favor de:",
        options: ["A. Los Secretarios de Estado.", 
        "B. Los Delegados del Gobierno en las Comunidades Autónomas.", 
        "C. Del Vicepresidente."],
        correctAnswer: "C"
    },
    {
        question: "Del estudio de las leyes necesarias para regular la convivencia social, se encarga",
        options: ["A. La Sociología.", 
        "B. La Estática social.", 
        "C. La Dinámica social."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes no forma parte de la composición del Consejo Europeo",
        options: ["A. Jefe de Estado o de Gobierno de los Estados miembros.", 
        "B. Míster Pesc.", 
        "C. Míster Europe."],
        correctAnswer: "B"
    },
    {
        question: "¿Cómo se crean los orgaos de examees para la seleccion de funcionarios?",
        options: ["A. Los tribunales se nombra, salvo excepcion justificada, en la Orden de la convocatoria.", 
        "B. Las Comisiones Permanenes de Seleccion y los Tribunales se crean a traves de Orden del ministerio de Transformacion Digital y Funcion publica.", 
        "C. Las Comisiones Permanentes de Seleccion se crean pro Orden del Ministerio al que esten adscritos los Cuerpos objeto de seleccion."],
        topic: 6,
        correctAnswer: "A"
    },
    {
        question: "El nombramiento de funcionario de carrera debe publicarse necesariamente:",
        options: ["A. En el BOE.", 
        "B. En el Boletin Oficial de la Provincia o Comunidad Autonoma.", 
        "C. En el Diario Oficial Correspondientet."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "Segun el Estatuto Basico del Empleado Publico, ¿a quien corresponde el ejercicio de las funciones que impliquen la participacin directa o indirecta en el ejercicio de las potestades publicas o en la salvaguardia de los inereses generales del Esado y de las Administraciones Publicas?",
        options: ["A. A los funcionarios publicos, anto de carrera como interinos.", 
        "B. Exclusivamente a los funcionarios de carrera.", 
        "C. A los funcionarios publicos  al personal laboral que se encuentre realizando sus funciones al servicio de la Administracion."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "No se menciona como fundamento de actuacion en el Estatuto Basico del Empleado Publico",
        options: ["A. Igualdad de trato entre hombres y mujeres.", 
        "B. Objetividad, profesionalidad e imparcialidad en el servicio garantizadas con la inamovilidad en la condicion de funcionario de carrera.", 
        "C. Transparencia en planificacion y la gestion de recursos humanos."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "Las pruebas de los procesos selectivos reguladas en el articulo 61 del texto refundido del Estatuto Basico del Empleado Publico, podra completarse con la superacion de cursos, periodos de practicas...al objeto de asegurar:",
        options: ["A. La igualdad y objetividad de los procedimientos.", 
        "B. La objetividad y racionalidad de los procesos.", 
        "C. El merito y capacidad de los aspirantes."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "Por acumulacion o exceso de tareas un funcionario interino puede ser nombrado por un plazo maximo de:",
        options: ["A. Seis meses.", 
        "B. Un año.", 
        "C. Nueve meses, dentro de un periodo de dieciocho meses."],
        topic: 6,
        correctAnswer: "C"
    },
    {
        question: "¿De cuantos miembros estara compuesto un Tribunal de seleccion?",
        options: ["A. Inferior a cinco.", 
        "B. No inferior a cinco.", 
        "C. Igual a cinco."],
        topic: 6,
        correctAnswer: "B"
    },
    {
        question: "Para la activación de los Niveles de Alerta Antiterrorista, la autoridad competente para hacerlo, deberá basarse en informes y otras circunstancias que elaborará:",
        options: ["A. Los Directores Generales de la Policía y de la Guardia Civil.", 
        "B. El Gabinete del Ministro del lnterior.", 
        "C. Un comité de expertos."],
        correctAnswer: "C"
    },
    {
        question: "Las deliberaciones de la Comisión General de Secretarios de Estado y Subsecretarios serán :",
        options: ["A. Reservadas.", 
        "B. Secretas.", 
        "C. Privadas."],
        correctAnswer: "A"
    },
    {
        question: "Instrumentos dirigidos a hacer que las fuerzas del mercado sean las principales propiciadoras del cumplimiento de las metas ambientales de la sociedad:",
        options: ["A. Instrumentos de información ambiental.", 
        "B. Instrumentos de mercado.", 
        "C. Instrumentos administrativos."],
        correctAnswer: "B"
    },
    {
        question: "La identidad supuesta del agente encubierto será otorgada por periodos de:",
        options: ["A. Seis meses prorrogables por períodos de igual duración.", 
        "B. Tres meses prorrogables por períodos de igual duración.", 
        "C. Ninguna de las respuestas es correcta."],
        correctAnswer: "A"
    },
    {
        question: "El procedimiento y condiciones para la expedición de visados uniformes y de validez territorial limitada se regulan por lo establecido:",
        options: ["A. En el derecho nacional.", 
        "B. En el Derecho de la Unión Europea.", 
        "C. En el Derecho Internacional."],
        correctAnswer: "B"
    },
    {
        question: "La gestión, custodia y mantenimiento del Catálogo de lnfraestructuras Críticas corresponden a:",
        options: ["A. Centro Nacional para la Protección de las lnfraestructuras y Ciberseguridad.", 
        "B. La Comisión Nacional para la Protección de las lnfraestructuras Críticas.", 
        "C. Ministerio del lniterior a través de la Secretaría de Estado de Seguridad."],
        correctAnswer: "C"
    },
    {
        question: "El mantenimiento período de los vehículos, basado fundamentalmente en detectar una falla antes de que suceda, para dar tiempo a corregirla sin prejuicios al servicio, es lo que se conoce como:",
        options: ["A. Mantenimiento correctivo.", 
        "B. Mantenimiento preventivo.", 
        "C. Mantenimiento predictivo."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué agente del Sistema para la Protección de las lnfraestructuras Críticas será el encargado de elaborar los Planes Estratégicos Sectoriales?",
        options: ["A. El Grupo de Trabajo lnterdepartamental.", 
        "B. La Secretaría de Estado de Seguridad.", 
        "C. El Centro Nacional para la Protección de las lnfraestructuras y Ciberseguridad."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué principio no permite que las ideas y acciones de una persona o grupo cultural esté por encima de otro, favorecienco en todo momento el diálogo y la concertación?:",
        options: ["A. Pluralismo cultural.", 
        "B. Adaptación social.", 
        "C. Interculturalidad."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué período de la historia se produjo la conocida como Revolución Agrícola?:",
        options: ["A. En el Neolítico.", 
        "B. En el siglo XVIII con la invención del motor en Inglaterra.", 
        "C. En el Renacimiento."],
        correctAnswer: "A"
    },
    {
        question: "El actual sistema de niveles de Alerta Antiterrorista data del año:",
        options: ["A. 2015.", 
        "B. 2013.", 
        "C. 2016."],
        correctAnswer: "A"
    },
    {
        question: "El control del Gobierno se va a llevar a cabo desde tres puntos de vista:",
        options: ["A. Jurisdiccional, administrativo y constitucional.", 
        "B. Jurisdiccional, político y constitucional.", 
        "C. Administrativo, político y constitucional."],
        correctAnswer: "B"
    },
    {
        question: "Según el art. 8.1 del Estatuto Básico del Empleado Público, quienes desempeñan funciones retribuidas en las Administraciones Públicas, son:",
        options: ["A. Empleados públicos.", 
        "B. Funcionarios públicos.", 
        "C. Los dos anteriores."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué órgano de  Naciones Unidas es el encargado de mejorar la situación de los derechos humanos en todos sus países miembros?:",
        options: ["A. El Consejo de Derechos Humanos.", 
        "B. La Comisión de Derechos Humanos.", 
        "C. El Comité de Derechos Humanos."],
        correctAnswer: "A"
    },
    {
        question: "El Estado Español cuenta desde el año 2013 con un documento donde se recoge las acciones a desarrollar por el Gobierno para proteger Ia libertad y el bienestar de los ciudadanos, garantizar la defensa nacional y sus principios y valores constitucionales denominado:",
        options: ["A. Estrategia de Seguridad Nacional.", 
        "B. Ley de Seguridad Nacional.", 
        "C. Plan Nacional de Protección de las lnfraestructuras Críticas."],
        correctAnswer: "A"
    },
    {
        question: "En el procedimiento prejudicial de urgencia (PPU) ante el Tribunal de Justicia de la UE , estos asuntos:",
        options: ["A. Se confían a una sala de tres jueces especialmente designada.", 
        "B. Se confían a una sala de cinco jueces especialmente designada.", 
        "C. Se confían a una sala de siete jueces especialmente designada."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién propone al Parlamento Europeo un candidato para el cargo de presidente de la Comisión Europea?",
        options: ["A. El Consejo Europeo.", 
        "B. El consejo de la UE.", 
        "C. El Parlamento."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué organismo desempeña la función de guardián del Tribunal Europeo de Derechos Humanos?",
        options: ["A. El Comisario del Consejo de Europa.", 
        "B. La Asamblea Parlamentaria del Consejo de Europa.", 
        "C. El Comité de Ministros del Consejo de Europa."],
        correctAnswer: "C"
    },
    {
        question: "El documento sobre Estrategia de Seguridad Nacional vigente en la actualidad en España considera necesario la actuación en varios ámbitos prioritarios, siendo estos un total de:",
        options: ["A. Cinco.", 
        "B. Quince.", 
        "C. Diez."],
        correctAnswer: "B"
    },
    {
        question: "¿Que medida establecida en la Ley de Enjuiciamiento Criminal tiene la duracion maxima de un mes, prorrogable por iguales periodos hasta un maximo de tres meses?",
        options: ["A. Registro de almacenamientos masivos de informacion.", 
        "B. Registros remotos sobre equipos informaticos.", 
        "C. Utilizacion de dispositivos tecnicos de captacion de la imagen, de seguimiento y de localizacion."],
        correctAnswer: "B"
    },
    {
        question: "¿De quien depende la OLAF u Oficina Europea de la Lucha contra el Fraude?",
        options: ["A. Del Consejo Europeo.", 
        "B. De la Comision Europea.", 
        "C. Del COnsejo de la UE."],
        correctAnswer: "B"
    },
    {
        question: "La UE le otroga la competencia para la defensa y la proeccion del 'principio de subsidiariedad'",
        options: ["A. Comite de las Regiones.", 
        "B. Comite Economico y Social.", 
        "C. Parlamento."],
        correctAnswer: "A"
    },
    {
        question: "No se inscribiran en el Registro Nacional de Seguridad Privada:",
        options: ["A. Sanciones impuesas a empresas de seguridad privada por infracciones en el ambito de la Seguridad Social.", 
        "B. Modificaciones de conratos en el ambito de seguridad privada.", 
        "C. Centros de formacion de seguridad privada."],
        correctAnswer: "A"
    },
    {
        question: "Aparte de la Agenda 21, en el seno de la UNCED o Cumbre de la Tierra se adopta­ron otras dos resoluciones de enorme interés:",
        options: ["A. La Declaración de Río sobre Desarrollo y Medioambiente y la Resolución The future we want.", 
        "B. La Declaración de Río sobre Desarrollo y Medioambiente y la Declaración de Principios para la Gestión Sostenible de bosques.", 
        "C. Ninguna de las anteriores es cierta, y además el enunciado no es correcto: la Agenda 21 no se adoptó en el seno de la UNCED."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. La aculturación es un proceso que dura toda la vida.", 
        "B. La enculturación es un proceso que dura toda la vida.", 
        "C. La transculturación es un proceso que dura toda la vida."],
        correctAnswer: "A"
    },
    {
        question: "El director del gabinete de un Secretario de Esado sera nombrado por:",
        options: ["A. ORden Ministerial", 
        "B. Real Decreto Presidente del Gobierno", 
        "C. Real Decreto Consejo de Ministros"],
        correctAnswer: "A"
    },
    {
        question: "Es correcto afirmar, en cuanto a lo que establece la Constitucion sobre el Tribunal Constitucional:",
        options: ["A. Que su funcionamiento, el estatuto de sus miembros y el procedimiento ante este Tribunal se desarrolla posteriormente en una ley ordinaria.", 
        "B. Las sentencias del Tribunal Constitucional se plucaran en el BOE, teniendo estas el valor de cosa juzgada, sin que procesa el recurso contra dichas sentencias", 
        "C. Que los mimebros del Tribunal Constitucional estaran nombrados para un mandato de 5 años, renovados por terceras partes cada tres"],
        correctAnswer: "B"
    },
    {
        question: "El Pacto Internacional de Derechos Sociales, Economicos y Culturales de la ONU, equivale a :",
        options: ["A. Carta de Turin", 
        "B. Convenio de Roma", 
        "C. Ninguna de las respuestas anteriores es correcta"],
        correctAnswer: "A"
    },
    {
        question: "En el cumplimiento de sus funciones el Consejo Nacional de Ciberseguridad sera apoyado por:",
        options: ["A. Las Fuerzas y Cuerps de Seguridad del Estado", 
        "B. Un comite de expertos de las Administraciones Publicas", 
        "C. Departamento de Seguridad Nacional"],
        correctAnswer: "C"
    },
    {
        question: "El uso del agua de la huella hidrica se mide:",
        options: ["A. En volumen de agua contaminada por unidad de tiempo", 
        "B. En volumen de agua consumida o evaporada y/o contaminada pr unidad de tiempo.", 
        "C. Ninguna de las anteriores es correcta."],
        correctAnswer: "B"
    },
    {
        question: "Cuando la gravedad urgencia de los hechos lo aconsejen, el Defensor del Pueblo pos presentar un informe extraordinario ¿A quien lo dirigira?",
        options: ["A. Al Presidente del Gobierno, si las Camaras no estuvieran reunidas.", 
        "B. A las Diputaciones Permanente de las Camaras, si estas no se encontraran reunidas.", 
        "C. Al presidente del Congreso, si las camaras no estuvieran reunidas."],
        correctAnswer: "B"
    },
    {
        question: "¿Durante cuanto tiempo puede estar ejerciendo el Presidente del tribunal Europeo de los DDHH?",
        options: ["A. 6 años reelegibles.", 
        "B. 3 años reelegibles.", 
        "C. 9 años no reelegibles."],
        correctAnswer: "B"
    },
    {
        question: "La COP es la Conferencia de las Partes, ¿a qué partes hace referencia esta denominación?",
        options: ["A. A las partes de la CMNUC.", 
        "B. A las Partes de la Convención Marco de las Naciones Unidas sobre el Cambio Climático.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Tal como establece el artículo 18 del Real Decreto 240/2007, de 16 de febrero, sobre entrada, libre circulación y residencia en España de ciudadanos de los Estados miembros de la Unión Europea y de otros Estados parte en el Acuerdo sobre el Espacio Económico Europeo, las resoluciones de expulsión establecerán un plazo para abandonar el territorio español. Excepto en casos urgentes, debidamente justificados, dicho plazo no podrá ser inferior a :",
        options: ["A. 15 días.", 
        "B. Un mes.", 
        "C. Tres meses."],
        correctAnswer: "B"
    },
    {
        question: "Entre las teorías más conocidas realizadas sobre las actitudes de la persona autoritaria figura la de:",
        options: ["A. Adorno.", 
        "B. Cooley.", 
        "C. Merton."],
        correctAnswer: "A"
    },
    {
        question: "Los actos y disposiciones dictados por la Presidencia de la Agencia Española de Protección de Datos son recurribles, directamente ante:",
        options: ["A. El Tribunal Superior de Justicia.", 
        "B. La Audiencia Nacional.", 
        "C. El Tribunal Supremo."],
        correctAnswer: "B"
    },
    {
        question: "La derogación de alguno de los derechos establecidos en el Convenio de Roma en caso de estado de urgencia por parte de una nación:",
        options: ["A. Le obliga a comunicarlo al Secretario General de Naciones Unidas.", 
        "B. Le obliga a comunicarlo al Secretario General del Consejo de Europa.", 
        "C. Le obliga a comunicarlo al Presidente del Tribunal de Justicia Europeo."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué recurso cabe contra la denegación de entrada en territorio español?",
        options: ["A. Recurso de alzada.", 
        "B. Recurso potestativo de reposición.", 
        "C. Recurso contencioso - administrativo."],
        correctAnswer: "A"
    },
    {
        question: "¿De los modelos de convivencia existentes, cual representa realmente una socialización terciaria?",
        options: ["A. Asimilación.", 
        "B. Melting pot.", 
        "C. Integración."],
        correctAnswer: "A"
    },
    {
        question: "¿Los sentimientos y las emociones, de qué componente de las actitudes forman parte?",
        options: ["A. Evaluativo.", 
        "B. Cognitivo.", 
        "C. Conductual."],
        correctAnswer: "A"
    },
    {
        question: "¿De cuánto tiempo dispone la autoridad laboral para notificar una resolución de revocación de la autorización a una entidad acreditada?",
        options: ["A. Seis meses desde la fecha del acuerdo de iniciación del expediente de revocación.", 
        "B. Cinco meses desde la fecha del acuerdo de iniciación del expediente de revocación.", 
        "C. Tres meses desde la fecha del acuerdo de iniciación del expediente de revocación."],
        correctAnswer: "A"
    },
    {
        question: "La ley de Seguridad Privada establece el marco para la más eficiente coordinación de los servicios de seguridad privada con los de las Fuerzas y Cuerpos de Seguridad, de los que son complementarios:",
        options: ["A. En beneficio de la seguridad privada.", 
        "B. En beneficio de la seguridad pública.", 
        "C. Las dos son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Los Ministros son órganos:",
        options: ["A. Políticos y de gestión.", 
        "B. Políticos y administrativos.", 
        "C. Ejecutivos y políticos."],
        correctAnswer: "B"
    },
    {
        question: "Por qué principio se rigen las relaciones entre las normas de carácter estatal y las de los órganos de las CCAA.",
        options: ["A. Principio de legalidad.", 
        "B. Principio de competencia.", 
        "C. Jerarquía normativa."],
        correctAnswer: "B"
    },
    {
        question: "La capacidad de obrar tiene 3 manifestaciones:",
        options: ["A. Negocial, procesal y penal.", 
        "B. Jurídica, natural y personal.", 
        "C. Negocial, penal y obligatoria."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué es necesario para que prospere una moción de censura?: ",
        options: ["A. Aprobación por la décima parte de los Diputados.", 
        "B. Aprobación por mayoría simple del Congreso.", 
        "C. Aprobación por mayoría absoluta del Congreso."],
        correctAnswer: "C"
    },
    {
        question: "De acuerdo con el artículo 314 del Tratado de Funcionamiento de la Unión Europea, el presupuesto anual de la Unión:",
        options: ["A. Es aprobado por el Parlamento Europeo a propuesta del Consejo.", 
        "B. Es aprobado por la Comisión.", 
        "C. Es aprobado por el Parlamento Europeo y el Consejo, a propuesta de la Comisión."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién ejerce las competencias correspondientes a los servicios comunes del Departamento?:",
        options: ["A. Los Subsecretarios.", 
        "B. Los Secretarios de Estado.", 
        "C. Los Directores generales."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa internacional sobre la materia, haya acordado su representación con otro Estado en materia de visados de tránsito o estancia..", 
        "B. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, salvo en los supuestos excepcionales que se contemplen reglamentariamente o en los supuestos en los que el Estado español, de acuerdo con la normativa comunitaria sobre la materia, haya  acordado su representación con otro Estado miembro de la Unión Europea en materia de visados de tránsito o estancia..", 
        "C. El visado se solicitará y expedirá en las Misiones Diplomáticas y Oficinas Consulares de España, en todo caso.."],
        correctAnswer: "A"
    },
    {
        question: "Fue el protocolo que eliminó las limitaciones geográficas y temporales contenidas en la Convención de Ginebra  del año 1951:",
        options: ["A. Protocolo de Ginebra, de 1968.", 
        "B. Protocolo de Estocolmo, de 1969.", 
        "C. Protocolo de Nueva York, de 1967."],
        correctAnswer: "C"
    },
    {
        question: "La autoridad competente para clasificar una infraestructura como estratégica, así como incluirla en el Catálogo corresponde a:",
        options: ["A. Secretario de Estado de Seguridad.", 
        "B. Comisión Nacional para la Protección de las lnfraestructuras Críticas.", 
        "C. Ministro del lnterior."],
        correctAnswer: "C"
    },
    {
        question: "Según el Art. 27 del Código Penal son responsables criminalmente de los delitos",
        options: ["A. Los autores, inductores y cooperadores.", 
        "B. Los autores, cómplices y encubridores.", 
        "C. Los autores y cómplices."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién asegurará la coordinación de las actividades de las Unidades de Igualdad, favoreciendo el desarrollo homogéneo de sus funciones y el intercambio de información y experiencias?",
        options: ["A. La Comisión laboral de Igualdad entre mujeres y hombres.", 
        "B. La Secretaría de Estado de Igualdad, a través del Observatorio estatal de violencia sobre la mujer.", 
        "C. La Dirección General de la Función Pública, a través de la Subdirección General de Relaciones Laborales."],
        correctAnswer: "C"
    },
    {
        question: "La patogenia de la enfermedad profesional es:",
        options: ["A. Predecible.", 
        "B. Brusca.", 
        "C. Difícil de establecer."],
        correctAnswer: "C"
    },
    {
        question: "Señala en cuál de las siguientes ideas no se basa la PRL",
        options: ["A. Un accidente laboral es un suceso inevitable.", 
        "B. Si la tarea está bien estudiada de antemano, se podrán prever los riesgos que puedan aparecer.", 
        "C. Un accidente laboral no es algo que ocurra irremediablemente, por casualidad."],
        correctAnswer: "A"
    },
    {
        question: "La aparición del accidente de trabajo no es:",
        options: ["A. Brusco.", 
        "B. Predecible", 
        "C. Difícil de establecer."],
        correctAnswer: "B"
    },
    {
        question: "Son funciones de la Inspección de Trabajo y Seguridad Social:",
        options: ["A. La elaboración de los informes solicitados por los Juzgados de lo Social en las demandas de accidentes de trabajo y enfermedades profesionales.", 
        "B. El asesoramiento técnico en la elaboración de la normativa legal, tanto a nivel nacional como internacional.", 
        "C. La colaboración con organismos internacionales y el desarrollo de programas de cooperación internacional."],
        correctAnswer: "A"
    },
    {
        question: "El término “declaración” implica:",
        options: ["A. Es un documento de obligatorio cumplimiento.", 
        "B. Su vulneración no es sancionable por el Derecho Internacional.", 
        "C. Su violación es sancionable por el Derecho Internacional."],
        correctAnswer: "B"
    },
    {
        question: "La clasificación de los grupos en endogrupo y exogrupo se debe a:",
        options: ["A. Emile Durkheim.", 
        "B. William Summer.", 
        "C. Robert Merton."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El “superyo” siempre trata de equilibrar los deseos del “ello” con las reglas del “yó”.", 
        "B. El “yo” siempre trata de equilibrar los deseos del “ello” con las reglas del “superyó”..", 
        "C. El “ello” siempre trata de equilibrar los deseos del “yo” con las reglas del “superyó”.."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién sostuvo que la sociedad varía a través del tiempo?",
        options: ["A. Emile Durkheim.", 
        "B. Max Weber.", 
        "C. Peter Berger."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de solidaridad existe en una sociedad con poca o ninguna división en el trabajo, en las cuales las funciones suelen ser las mismas para todas la personas?",
        options: ["A. Solidaridad orgánica.", 
        "B. Solidaridad mecánica.", 
        "C. Solidaridad funcional."],
        correctAnswer: "B"
    },
    {
        question: "En el año 1981, el Consejo de Calidad Medioambiental de los Estados Unidos elaboró un informe que consideraba que la biodiversidad era un factor crítico para el adecuado funcionamiento del planeta. ¿Cómo se llamó tal informe?",
        options: ["A. Informe sobre Medio Ambiente y Desarrollo.", 
        "B. Informe Global 2000.", 
        "C. Informe sobre Medio Humano de las Naciones Unidas."],
        correctAnswer: "B"
    },
    {
        question: "Europa 2020 es la estrategia de crecimiento de la unión Europea para la década.",
        options: ["A. 2010-2020.", 
        "B. Ninguna es correcta.", 
        "C. 2020-2030."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién mantiene operativo y actualizado el Catálogo Nacional de infraestructuras estratégicas, estableciendo los procedimientos de alta, baja y modificación de las infraestructuras, tanto nacionales como europeas?",
        options: ["A. El Ministerio del interior, a través de la Secretaria de Estado de Seguridad.", 
        "B. El Centro Nacional de Protección de Infraestructuras y Ciberseguridad.", 
        "C. La Comisión Nacional para la Protección de las Infraestructuras Críticas."],
        correctAnswer: "B"
    },
    {
        question: "Para que una infraestructura sea calificada como estratégica, y en su caso, como infraestructura critica o Infraestructura critica europea, debe cumplir:",
        options: ["A. Dos o más de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas..", 
        "B. Al menos uno de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas..", 
        "C. Más de tres de los criterios horizontales de criticidad previstos en la Ley de Medidas para la Protección de las Infraestructuras Criticas.."],
        correctAnswer: "B"
    },
    {
        question: "Respecto a los nacionales de terceros países hallados ilegamente en un Estado Miembro, ¿Cuándo va a proceder la comparación de sus datos con los del Sistema Central del Eurodac?",
        options: ["A. Cuando El nacional del país tercero o apátrida no solicite la protección internacional, pero solicita que le devuelvan a su país de origen, alegando que estaría en peligro.", 
        "B. Cuando el nacional del país tercero o apátrida declare que ha presentado una solicitud de protección internacional, pero que no indique el Estado miembro en que lo ha hecho.", 
        "C. Siempre va a proceder la comparación."],
        correctAnswer: "B"
    },
    {
        question: "Son competencias de los delegados de prevencion:",
        options: ["A. Acompañar a los tecnicos en las evaluaciones preventivas.", 
        "B. Acompañar a los inspectores de Trabajo y Seguridad Social en sus visitas.", 
        "C. Controlar el cumplimiento de la normativa."],
        correctAnswer: "C"
    },
    {
        question: "El organo competente para imponer la sancion puede practicar 'actuaciones complementarias', que en tal caso, debe dar traslado de nuevo al interesado para que formule alegaciones, a los que se les concedera un plazo para formular las alegaciones que estimen pertinentes:",
        options: ["A. De 15 dias.", 
        "B. De 10 dias.", 
        "C. De 7 dias."],
        correctAnswer: "C"
    },
    {
        question: "Despues de la Segundad Guerra Mundial los españoles emigran al continente europeo por:",
        options: ["A. Motivo laborales.", 
        "B. Motivos politicos.", 
        "C. Motivos sociales."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta, los analistas de inteligencia:",
        options: ["A. Seleccionan a sus fuentes y obtienen informacion de las mismas, ya sean fuenten humanas, fuentes abiertas, imagenes, señales, o cualquier otro.", 
        "B. Contrastan la informacion obtenida y producen inteligencia mediante la aplicacion de tecnicas estructuradas y no estructuradas de inteligencia.", 
        "C. Dirigen la Unidad de Inteligencia, gestionan los recursos y planifican/priorizan las actividades en base a la Directiva de Inteligencia."],
        correctAnswer: "B"
    },
    {
        question: "La reforma de la Constitucion española operada el 27 de agosto de 992, ha sido realizada para facilitar a los extranjeros comunitarios el acceso:",
        options: ["A. Al regimen legal de extranjeria y al asilo politico, en su caso.", 
        "B. A participar en las elecciones para sufragio activo.", 
        "C. A participar en las elecciones municipales para sufragio pasivo."],
        correctAnswer: "C"
    },
    {
        question: "La obtencion de informacion en el ambito de OSINT de cuantos tipos puede ser:",
        options: ["A. Tres.", 
        "B. Cuatro.", 
        "C. Cinco."],
        correctAnswer: "A"
    },
    {
        question: "El Comite de seguridad y salud se reune trimestralmente, con lo que las empresas que cuenten con varios centros de trabajo dotados de Comite podran acordar con su trabajadores, la creacion de:",
        options: ["A. Un Comite de Centros.", 
        "B. Un Comite Intercentros.", 
        "C. Un Comite Interdisciplinar para Centros de trabajo."],
        correctAnswer: "B"
    },
    {
        question: "¿Quien ejerce la representacion global del Consejo como institucion comunitaria?",
        options: ["A. ministro-presidente del Consejo de Asuntos de Exterior.", 
        "B. ministro-presidente del Consejo de Asuntos Generales.", 
        "C. ministro-presidente del Consejo de Asuntos de la Presidencia."],
        correctAnswer: "B"
    },
    {
        question: "Su fuerza vinculante arranca desde la publicación en DOUE y no precisa de ningún acto de incorporación en el derecho interno de los estados miembros, dirigiéndose directamente al Estado o ciudadano, quien puede invocarlo ante los tribunales nacionales como fuente directa de derechos y obligaciones",
        options: ["A. Decisión.", 
        "B. Directiva.", 
        "C. Reglamento."],
        correctAnswer: "C"
    },
    {
        question: "Cuando una propuesta normativa afecte a la organización administrativa de la Administración General del Estado, a su régimen de personal, procedimientos y a la inspección de los servicios, será necesario:",
        options: ["A. Recabar la aprobación previa del Ministerio de Política Territorial antes de ser sometidas al órgano competente para promulgarlos..", 
        "B. Informe previo del Ministerio de Política Territorial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Los órganos competentes podrán eximir de la implantación de medidas de seguridad obligatorias cuando las circunstancias que concurran en el caso concreto las hicieren Innecesarias o Improcedentes. ¿Es ésta  una norma extraída de la Ley de Seguridad Privada?",
        options: ["A. No, es contraria a las disposiciones de esta ley..", 
        "B. No, si bien se contempla en su Reglamento de desarrollo.", 
        "C. Si, la Ley así lo permite."],
        correctAnswer: "C"
    },
    {
        question: "A las empresas que se dediquen a las actividades de seguridad informática, entendida como el conjunto de medidas encaminadas a proteger los sistemas de información a fin de garantizar la confidencialidad, disponibilidad e integridad de la misma se les podrán imponer reglamentariamente requisitos específicos para garantizar la calidad de los servicios que presten:",
        options: ["A. Siempre que sean de seguridad privada.", 
        "B. Siempre que no sean de seguridad privada.", 
        "C. Sean o no de seguridad privada."],
        correctAnswer: "C"
    },
    {
        question: "A las reuniones de las Comisiones de Garantías de Videovigilancia podrán asistir, como asesores, expertos en materia de seguridad ciudadana, designados por:",
        options: ["A. El Delegado del Gobierno en la Comunidad Autónoma.", 
        "B. El Delegado o el Subdelegado de Gobierno.", 
        "C. El Fiscal Jefe del Tribunal Superior de Justicia en la Comunidad Autónoma correspondiente."],
        correctAnswer: "B"
    },
    {
        question: "En el caso de los menores, el consentimiento en relación al derecho a la intimidad cuando no pueda darse por ellos mismos, habrá de otorgarse mediante escrito por su representante legal, quien estará obligado a poner en conocimiento previo del Ministerio Fiscal el consentimiento proyectado. Si en el plazo de _______ el Ministerio Fiscal se opusiere, resolverá el juez.",
        options: ["A. 8 días.", 
        "B. 10 días", 
        "C. 15 días."],
        correctAnswer: "A"
    },
    {
        question: "De los principios rectores de la Ley de Enjuiciaminento Criminal relativos a la a la interceptación de las comunicaciones telefónicas y telemáticas, la captación y grabación de comunicaciones orales... El principio de especialidad:",
        options: ["A. Exige que una medida esté relacionada con la investigación de un delito concreto. No podrán autorizarse medidas de investigación tecnológica que tengan por objeto prevenir o descubrir delitos o despejar sospechas sin base objetiva..", 
        "B. Servirá para definir el ámbito objetivo y subjetivo y la duración de las medidas en virtud de su utilidad.", 
        "C. Establece que solo se aplicarán las medidas cuando no estén a disposición de la investigación otras medidas menos gravosas."],
        correctAnswer: "A"
    },
    {
        question: "La ley de accidentes del trabajo nace como respuesta a:",
        options: ["A. A la asusencia de cultura preventiva.", 
        "B. A consecuencia de la aparición de la Medicina del trabajo.", 
        "C. A las incesantes reivindicaciones ejercidas por los movimientos obreros en esta materia."],
        correctAnswer: "C"
    },
    {
        question: "El documento base que sirvió para la creación del Pacto Internacional de Derechos Económicos, Sociales y Culturales y el Pacto Internacional de Derechos Civiles y Políticos, fue:",
        options: ["A. La Carta de Naciones Unidas.", 
        "B. La Declaración Universal de los DDHH.", 
        "C. La Declaración de los Derechos del Hombre y del Ciudadano."],
        correctAnswer: "B"
    },
    {
        question: "Una opinión emitida sin comprobación previa, constituye:",
        options: ["A. Un juicio de valor.", 
        "B. Un prejuicio.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Cuando un grupo de personas que descienden de un tronco común, viven juntas y bajo la autoridad del mismo jefe, hablamos de:",
        options: ["A. Clan.", 
        "B. Aldea patriarcal.", 
        "C. Patriarcado."],
        correctAnswer: "A"
    },
    {
        question: "Para Sigmund Freud, el principio de la razón, se inscribe en:",
        options: ["A. En la conciencia.", 
        "B. En la consciencia.", 
        "C. En la inconsciencia."],
        correctAnswer: "B"
    },
    {
        question: "Son instrumentos consistentes en el otorgamiento de licencias y permisos que garantizan el disfrute de los recursos naturales previstos:",
        options: ["A. Instrumentos de mercado.", 
        "B. Instrumentos de regulación directa.", 
        "C. Instrumentos administrativos."],
        correctAnswer: "C"
    },
    {
        question: "Sobre esta parte del neumático se desarrolla el complicado proceso de adherencia:",
        options: ["A. Banda de rodamiento.", 
        "B. Carcasa.", 
        "C. Flanco."],
        correctAnswer: "B"
    },
    {
        question: "Las migraciones entre zonas de una misma ciudad son:",
        options: [
            "A.Migraciones interurbanas .", 
            "B. Migraciones intraurbanas.", 
            "C. Ninguna es correcta."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué documento sirvió de base para lo que más tarde pasaría a ser la Declaración Universal de los DDHH?:",
        options: [
            "A. la Carta de las Naciones Unidas.", 
            "B. La Carta de la Sociedad de Naciones.", 
            "C. Las dos respuestas son falsas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Para proceder por los delitos de descubrimiento y revelación de secretos será siempre necesaria denuncia:",
        options: [
            "A. De la persona agraviada o de su representante legal.", 
            "B. De la persona agraviada.", 
            "C. Ninguna de las respuestas es correcta."
        ],
        correctAnswer: "C"
    },
    {
        question: "Una de las categorías de empleados público que recoge el Estatuto Básico del Empleado Público es el personal laboral, el cual:",
        options: [
            "A. Presta servicios retribuidos por las Administraciones Públicas en virtud de nombramiento legal.", 
            "B. Su procedimiento de selección es público, rigiéndose en todo caso por los principios de igualdad, mérito e idoneidad.", 
            "C. En el caso del personal laboral temporal se regirá su selección por el principio de celeridad, teniendo por finalidad atender razones expresamente justificadas de necesidad y urgencia."
        ],
        correctAnswer: "C"
    },
    {
        question: "En el caso de un procedimiento por falta de atención de una solicitud de ejercicio de los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/1679, este se iniciará por",
        options: [
            "A. Acuerdo de admisión a trámite.", 
            "B. Por iniciativa propia.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta:",
        options: [
            "A. EI agente encubierto informático podrá intercambiar o enviar por sí mismo archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos.", 
            "B. El agente encubierto informático, con autorización específica para ello, podrá intercambiar o enviar por si mismo archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos.", 
            "C. El agente encubierto informático no podrá intercambiar o enviar archivos ilícitos por razón de su contenido y analizar los resultados de los algoritmos aplicados para la identificación de dichos archivos ilícitos."
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de las siguientes no es una de las dependencias que el artículo 2 del Real Decreto 865/2001, de 20 de julio, por el que se aprueba el Reglamento de reconocimiento del estatuto de apátrida reconoce como habilitada para solicitar el estatuto de apátrida.",
        options: [
            "A. Oficina de Asilo y refugio.", 
            "B. Centro Internamiento Extranjeros.", 
            "C. Comisarias de Policía."
        ],
        correctAnswer: "B"
    },
    {
        question: "Según la Ley 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, los Tribunales y órganos de selección del personal de la Administración General del Estado responderán al principio o principios de:",
        options: [
            "A. Presencia equilibrada de mujeres y hombre.", 
            "B. Paridad entre hombres y mujeres.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "El artículo 14 de la Ley de Seguridad Privada establece la especial obligación de colaboración de las empresas de seguridad, los despachos de detectives y el personal de seguridad privada con las Fuerzas y Cuerpos de Seguridad se desarrollará con sujeción al principio de: ",
        options: [
            "A. Legalidad.", 
            "B. Subordinación.", 
            "C. Coordinación."
        ],
        correctAnswer: "A"
    },
    {
        question: " ¿Qué teoría mantiene la tesis de que un Individuo se vuelve delincuente al estar más frecuentemente en relación con modelos criminales que con modelos no criminales?",
        options: [
            "A. Teoria del aprendizaje social.", 
            "B. Teoria de la subcultura desviada.", 
            "C. Teoría de la estructura social defectuosa."
        ],
        correctAnswer: "B"
    },
    {
        question: "'Es correcto afirmar con respecto a lo establecido en la Ley Orgánica 3/1981 del Defensor del Pueblo:",
        options: [
            "A. Que la actividad de este cesará en los supuestos en los que se declaren los estados de excepción o sitio.", 
            "B. Que pueden dirigirse al Defensor del Pueblo personas naturales españolas, que invoquen un interés legitimo..", 
            "C. Que podrá iniciar o proseguir de oficio o petición de parte, ya que el Defensor del Pueblo actúa con autonomía y según su criterio."
        ],
        correctAnswer: "C"
    },
    {
        question: "Según la Ley Orgánica 7/2021, de 26 de mayo, de protección de datos personales tratados para fines de prevención, detección, investigación y enjuiciamiento de infracciones penates, en casos de urgencia o necesidad inaplazable será el responsable operativo de las Fuerzas y Cuerpos de Seguridad competentes el que podrá determinar su uso, siendo comunicada tal actuación al Delegado o Subdelegado del Gobierno o autoridad competente de las comunidades autónomas. con la mayor brevedad posible, y siempre en el plazo de:",
        options: [
            "A. 24 horas.", 
            "B. 48 horas", 
            "C. 72 horas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Las estadísticas policiales sobre delincuencia, constituyen:",
        options: [
            "A. Un dato objetivo.", 
            "B. Un dato subjetivo porque habria que añadir los delitos que no se denuncian.", 
            "C. Las dos son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "La personalidad modal, son:",
        options: [
            "A. Tipo de personalidad que se encuentra con mas frecuencia entre la gente de un pais.", 
            "B. la responsable en gran medida del caracter nacional.", 
            "C. Las dos son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Es el órgano ejecutivo del Observatorio Estatal de Violencia sobre la Mujer?",
        options: [
            "A. La Comisión Permanente.", 
            "B. El Pleno.", 
            "C. Ninguna es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "El grupo de personas que comparten comportamientos y creencias diferentes a los de la cultura dominante, constituye:",
        options: [
            "A. Una subcultura.", 
            "B. Una contracultura.", 
            "C. Una cultura dominante."
        ],
        correctAnswer: "A"
    },
    {
        question: "La responsabilidad sobre la custodia y el traslado de armas de titularidad de la empresa a la que pertenezca, es función del:",
        options: [
            "A. Jefe de seguridad.", 
            "B. Director de seguridad.", 
            "C. Vigilante de seguridad."
        ],
        correctAnswer: "A"
    },
    {
        question: "Seguridad de facto, es:",
        options: [
            "A. La segundad objetiva que puede ser medida estadísticamente.", 
            "B. La segundad subjetiva.", 
            "C. La percibida por la sociedad."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué sociólogo distinguia entre 'endogrupo' y 'exogrupo'?:",
        options: [
            "A. Gordon ALLPORT.", 
            "B. Robert MERTON.", 
            "C. Wlliam SUMMER."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué clase de valor es el amor?",
        options: [
            "A. Material.", 
            "B. Objetivo.", 
            "C. Subjetivo."
        ],
        correctAnswer: "C"
    },
    {
        question: "Para Katz, la función instrumental de las actitudes sirve para:",
        options: [
            "A. Conocer el mundo donde vivimos.", 
            "B. Defendemos de frustraciones.", 
            "C. Satisfacer parte de nuestras necesidades."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de los siguiente no es uno de los ámbitos establecidos para las cláusulas freno: ",
        options: [
            "A. las medidas de coordinación de los regimenes de seguridad social de los trabajadores migrantes.", 
            "B. el establecimiento de normas comunes para determinadas infracciones penales.", 
            "C. la cooperación policial."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿A que sistema politico nos referimos cuando hablamos de la concentracion de todos los poderes estatales en manos de un grupo o partido impidiendo la presencia de otros partidos?",
        options: [
            "A. Autoritarismo.", 
            "B. Tirania.", 
            "C. Totalitarismo."
        ],
        correctAnswer: "C"
    },
    {
        question: "Cuando un individuo no acepta parte o todos los valores sociales, hablamos de: Seleccione una:",
        options: [
            "A. Inadaptado.", 
            "B. Delincuente.", 
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los Planes de Seguridad Ciudadana, son:",
        options: ["A. Proactivos.", 
        "B. Reactivos.", 
        "C. Globales."],
        correctAnswer: "C"
    },
    {
        question: "El Subcomité para la Prevención de Tortura, depende:",
        options: ["A. Del Comité contra la Tortura de la ONU.", 
        "B. Del Consejo de Europa.", 
        "C. De Naciones Unidas."],
        correctAnswer: "C"
    },
    {
        question: "La prórroga de un visado expedido en Esparta se llevará a cabo según lo establecido:",
        options: [
            "A. En el Derecho Español.", 
            "B. En el Derecho de la UE.", 
            "C. En el Derecho Inernacional."
        ],
        correctAnswer: "B"
    },
    {
        question: "Los miembros de Subcomité de Prevención Contra la Tortura, deberán:",
        options: [
            "A. Ser expertos en materia de Derecho Penal Administración Penitenciaria o Policial.", 
            "B. Pertenecer a la Admintstracitm de Justicia.", 
            "C. De gran integridad moral y de reconocida competencia en la Administracion Publica."
        ],
        correctAnswer: "A"
    },
    {
        question: "En el control jurisdiccional de los actos del Gobierno, si la acusación fuera por traición , solo podrá ser planteada por iniciativa de :",
        options: ["A. Una cuarta parte del Congreso.", 
        "B. Dos tercios del Congreso.", 
        "C. La mayoría absoluta del Congreso de los Diputados."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién facilita a cada embajador, una vez que ha sido nombrado, la carta de instrucciones?",
        options: ["A. El Presidente del Gobierno.", 
        "B. El Secretario de Estado.", 
        "C. El Ministro de Asuntos Exteriores."],
        correctAnswer: "C"
    },
    {
        question: "Dentro de la Administración Central del Estado, el nombramiento del personal eventual corresponde a:",
        options: ["A. Los Ministros y Secretarios de Estado.", 
        "B. Los Subsecretarios como jefes de personal.", 
        "C. A los tres en determinados casos."],
        correctAnswer: "A"
    },
    {
        question: "Si como consecuencia de la instrucción del procedimiento resultase modificada la determinación inicial de los hechos, de su posible calificación, de las sanciones imponibles o de las responsabilidades susceptibles de sanción, se notificará todo ello al expedientado en:",
        options: ["A. La resolución del procedimiento.", 
        "B. La propuesta de resolución.", 
        "C. Ninguna es correcta."],
        correctAnswer: "B"
    },
    {
        question: "La habilitación del personal de seguridad privada corresponderá al:",
        options: ["A. Ministerio del lnterior u órgano autonómico correspondiente.", 
        "B. Ministerio de lnterior.", 
        "C. Si van a desempeñar únicamente funciones en una comunidad autónoma con competencias en seguridad privada, corresponderá al órgano autonómico."],
        correctAnswer: "B"
    },
    {
        question: "Las Comisiones de Seguridad Privada de colaboración entre las administraciones públicas y los representantes del sector de seguridad privada deberán celebrar al menos.",
        options: ["A. Una reunión al año.", 
        "B. Una reunión cada semestre.", 
        "C. Una reunión cada trimestre."],
        correctAnswer: "A"
    },
    {
        question: "En relación con el Consejo de Seguridad Nacional, marque la respuesta correcta.",
        options: ["A. Es un órgano directivo adscrito a la Presidencia del Gobierno de España.", 
        "B. Está constituido por el Ministerio del lnterior y por el de Defensa.", 
        "C. Entre sus funciones figura la de aprobar informes anuales de seguridad."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué cargo de los enumerados a continuación le corresponden al Director del Centro Nacional para la Protección de las Infraestructuras Críticas?",
        options: ["A. Las dos anteriores son ciertas.", 
        "B. Ejerce de Secretario en la Comisión Nacional para la Protección de las Infraestructuras Críticas.", 
        "C. Preside el Grupo de Trabajo lnterdepartamental parta la Protección de las Infraestructuras Críticas."],
        correctAnswer: "A"
    },
    {
        question: "Órgano colegiado de apoyo al Consejo de Seguridad Nacional cuya composición reflejará el espectro de los ámbitos de los departamentos, organismos y agencias de las administraciones públicas con competencias en materia de ciberseguridad. Hablamos de:",
        options: ["A. El Consejo Nacional de Ciberseguridad.", 
        "B. El Instituto Nacional de Ciberseguridad.", 
        "C. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad."],
        correctAnswer: "A"
    },
    {
        question: "Los delitos leves se sancionan:",
        options: ["A. Cuando sean consumadas y las intentadas contra las personas y el patrimonio.", 
        "B. Cuando sean consumados o haya tentativa de delito.", 
        "C. Cuando sean consumadas solamente."],
        correctAnswer: "A"
    },
    {
        question: "Rubén, que está desde hace años en una lista de espera para recibir un riñón, decide aceptar la propuesta de adquirir uno a cambio de un precio en una clínica legal, practicándose el trasplante. Su conducta:",
        options: ["A. Es impune, puesto que prima el interés principal del estado de necesidad en el que se encuentra.", 
        "B. Es castigada con la misma pena que al que ha hecho el ofrecimiento y efectuado el trasplante, pudiendo rebajarse en grado.", 
        "C. Se castiga como un delito leve."],
        correctAnswer: "B"
    },
    {
        question: "El ensañamiento en el asesinato puede cometerse mediante:",
        options: ["A. Dolo directo.", 
        "B. Dolo directo o dolo eventual.", 
        "C. Dolo directo, eventual o imprudente."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién tendrá a cargo la custodia sobre las grabaciones que se obtengan mediant la instalación de videocámaras fijas y móviles?",
        options: ["A. Los órganos facultados para formular las solicitudes de instalaciones fijas de o móviles.", 
        "B. Los órganos facultados para aprobar las solicitudes de instalaciones fijas de o móviles.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Señale la opción correcta:",
        options: ["A. El sobreseimiento libre conlleva el archivo definitivo de las actuaciones.", 
        "B. El sobreseimiento libre conlleva el archivo temporal de las actuaciones.", 
        "C. El sobreseimiento provisional conlleva el archivo definiWvo de las actuaciones."],
        correctAnswer: "B"
    },
    {
        question: "El deber del juzgador de realizar cuantas diligencias sean necesarias para conocer la verdad material o histórica, obedece al principio de:",
        options: ["A. Inmutabilidad.", 
        "B. Oficialidad.", 
        "C. Verdad material."],
        correctAnswer: "C"
    },
    {
        question: "Toman sus decisiones por mayoría de votos de los miembros presentes…:",
        options: ["A. El Subcomité para la Prevención de la Tortura.", 
        "B. El Comité de Ministros del Consejo de Europa.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "El espacio abierto de encuentro para reflexionar sobre el mundo opuesto al dominio del capital, empeñados en construir una sociedad diferente, es:",
        options: ["A. El FMI.", 
        "B. El FSM.", 
        "C. El FEM (WEF)."],
        correctAnswer: "B"
    },
    {
        question: "La Comisión Interministerial para el Cambio Climático y la Transición Energética estará integrada por Vocales. ¿Qué rango mínimo han de tener?",
        options: ["A. Director General.", 
        "B. No se requiere un rango mínimo.", 
        "C. Subdirector General."],
        correctAnswer: "A"
    },
    {
        question: "Los delincuentes profesionales, en general, son:",
        options: ["A. Delincuentes asociales.", 
        "B. Delicuentes habituales.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Teoria que considera las migraciones como unidireccionales y que se basa en una pareja de factores, usada por los investigadores como un instrumento conceptual que permite identificar una serie de causas y efectos de unas migraciones particulares que tienen su origen en el destierro y en el lugar de acogida marcadas por la necesidad de integracion.",
        options: ["A. Teoria del Push and Pull.", 
        "B. Teoria de la dependencia.", 
        "C. Teoria de la causacion acumulativa."],
        correctAnswer: "A"
    },
    {
        question: "EI maltrato de obra a quien sea o haya sido esposa del agresor:",
        options: ["A. Constituye un delito de lesiones con me al art 153 CP.", 
        "B. Constituye un delito de maltrato de obra a al no necesitar asistencia facultativa, tipificado en art 147.3 CP..", 
        "C. Constituye un delito contra las relaciones familiares."],
        correctAnswer: "A"
    },
    {
        question: "La coexistencia entre culturas diferentes, con intercambio entre ellas, que supongan un enriquecimiento mutuo, pero sometiéndose a los valores y principios de la sociedad del país que le acoge, ¿a qué modelo de convivencia corresponde?",
        options: ["A. Modelo francés.", 
        "B. Modelo español.", 
        "C. Modelo alemán."],
        correctAnswer: "C"
    },
    {
        question: "Lo importante de esta cumbre es que establece una relación ambivalente entre desarrollo sostenible y los peligros de la agresión continua que estaba sufriendo el medio ambiente por las acciones humanas, indicando la necesidad de poner limites a las emisiones do gases de efecto invernadero.",
        options: ["A. Primera Cumbre de la tierra.", 
        "B. Segunda Cumbre de la tierra.", 
        "C. Tercera Cumbre de la tierra."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El Derecho pone limites a la libertad de las personas.", 
        "B. La libertad es un derecho fundamental y el Derecho (la ley) no puede ponerle limites.", 
        "C. El Derecho no pone límites a la libertad de las personas."],
        correctAnswer: "A"
    },
 {
        question: "Sin perjuicio de la regulación específica, en el ámbito de la Administración General del Estado cada sistema de prevención deberá someterse a un control periódico externo cuya realización corresponderá a:",
        options: ["A. La Inspección de Trabajo y Seguridad Social.", 
        "B. La Comisión Nacional de Seguridad y Salud en el Trabajo.", 
        "C. El Instituto Nacional de Seguridad y Salud en el Trabajo."],
        correctAnswer: "C"
    },
    {
        question: "El derecho de asilo puede se invocado:",
        options: ["A. Por delitos comunes.", 
        "B. Por delitos políticos.", 
        "C. Las dos son verdaderas."],
        correctAnswer: "B"
    },

    {
        question: "El fenómeno del rumor,propicia:",
        options: ["A. Inseguridad virtual.", 
        "B. Inseguridad imaginada.", 
        "C. Las dos son correctas."],
        correctAnswer: "B"
    },

    {
        question: "El beneficio de justicia gratuita para las víctimas de violencia de género se perderá:",
        options: ["A. Tras la firmeza de la sentencia absolutoria, o del sobreseimiento definitivo o provisional por no resultar acreditados los hechos delictivos.", 
        "B. Tras la firmeza de la sentencia absolutoria, o del sobreseimiento definitivo por no resultar acreditados los hechos delictivos..", 
        "C. Tras la firmeza de la sentencia absolutoria."],
        correctAnswer: "A"
    },
{
        question: "Cuando la evaluación de los riesgos exija la realización de mediciones, análisis o ensayos y la normativa no indique o concrete los métodos que deben emplearse, o cuando los criterios de  evaluación contemplados en dicha normativa deban ser interpretados o precisados a la luz de otros  criterios de carácter técnico, se podrán utilizar, si existen, los métodos o criterios recogidos en:",
        options: ["A. Normas UNE.", 
        "B. Gulas de la Comisión Nacional de Seguridad y Salud.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Se establece en el articulo 122 de la Constitución, que el Consejo General del Poder Judicial:",
        options: ["A. Es el órgano de gobierno del poder judicial.", 
        "B. Está presidido por el Fiscal General del Estado.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "A"
    },
{
        question: "El sinónimo de orden jurídico, del orden establecido por el Derecho, es:",
        options: ["A. Seguridad colectiva.", 
        "B. Orden publico.", 
        "C. Seguridad social."],
        correctAnswer: "B"
    },
{
        question: "Cuando un individuo se o opone ex resamente al orden establecido, hablamos de:",
        options: ["A. Inadaptado.", 
        "B. Delincuente.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "El extranjero que se encuentre internado, ¿a disposición de quién se encontrará en todo momento?",
        options: ["A. Del transportista que lo hubiera traído a la frontera tanto por vía aérea, marítima o terrestre, el cual estará obligado a hacerse cargo de él inmediatamente.", 
        "B. De los agentes encargados del control de fronteras.", 
        "C. De la autoridad judicial que lo autorizó.."],
        correctAnswer: "C"
    },
{
        question: "¿En qué año se establecieron por el Consejo Europeo los llamados Criterios de Copenhague?",
        options: ["A. 1989.", 
        "B. 1993.", 
        "C. 1997."],
        correctAnswer: "B"
    },
{
        question: "¿Quién podrá autorizar la retirada temporal del dispositivo de control?",
        options: ["A. La autoridad judicial.", 
        "B. La autoridad policial.", 
        "C. La autoridad policial y la judicial."],
        correctAnswer: "B"
    },
 {
        question: "El Convenio Europeo de los DDHH fue firmado por España en el año:",
        options: ["A. 1980.", 
        "B. 1979.", 
        "C. 1977."],
        correctAnswer: "C"
    },
{
        question: "Juan es empleado de una empresa de alquiler de vehículos sita en el aeropuerto. Una mañana accedió al interior de un vehículo de alquiler y se apropió de una cartera, propiedad del cliente que acababa de entregar el vehículo, la cual contenía diversa documentación personal, así como 800 euros en efectivo:",
        options: ["A. Juan puede ser responsable de un delito de apropiación indebida.", 
        "B. Juan comete un delito de hurto del tipo básico, excediendo la cuantía de lo sustraído, de 400€..", 
        "C. Juan comete un delito de robo considerándose llave falsa no destinada a ese uso, la que utiliza Juan para acceder al vehículo."],
        correctAnswer: "A"
    },
{
        question: "En un delito de tráfico de órganos si el receptor del órgano consintiere la realización del trasplante conociendo su origen ilícito será castigado:",
        options: ["A. Las mismas penas establecidas para el tipo básico tipificado en el art 156 bis.", 
        "B. Con las mismas establecidas para el tipo básico tipificado en el art 156 bis. ,que podrán ser rebajadas en uno o dos grados atendiendo a las circunstancias del hecho y del culpable.", 
        "C. Con la pena inferior en grado con respecto al tipo básico."],
        correctAnswer: "B"
    },
    {
        question: "El delito es un término eminentemente:",
        options: ["A. Social.", 
        "B. Legal.", 
        "C. Policial."],
        correctAnswer: "B"
    },
{
        question: "La seguridad subjetiva depende de:",
        options: ["A. Los valores del individuo.", 
        "B. La actitud del individuo.", 
        "C. La personalidad del individuo."],
        correctAnswer: "C"
    },
{
        question: "En la Rioja, ¿quien será la autoridad designada para establecer una sanción por infringir una de las infracciones previstas en el régimen sancionador en materia de extranjería comprendida en el título III de la L.0.4/2000?",
        options: ["A. Al subdelegado del Gobierno, en todo caso.", 
        "B. Al delegado del Gobierno o por delegación de este, el subdelegado del Gobierno siempre que la comunidad autónoma tenga atribuidas competencias en materia de extranjería.", 
        "C. Al delegado del Gobierno."],
        correctAnswer: "C"
    },
    {
        question: "¿Por qué se caracteriza la primera etapa de la globalización?",
        options: ["A. El movimiento de capital y mano de obra a través de las fronteras nacionales..", 
        "B. Está asociada la división del trabajo horizontal.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
{
        question: "Para el Consejo de Europa, la principal causa de las migraciones se debe a:",
        options: ["A. El efecto llamada.", 
        "B. Las diferencias entre los desarrollos de las economías de los pases.", 
        "C. Las dos son correctas."],
        correctAnswer: "C"
    },
{
        question: "Los individuos que tienen influencia en las personas y en el comportamiento social de las mismas a través de los cuales van a desarrollar su actividad social, son:",
        options: ["A. Agentes socializadores.", 
        "B. Agentes de control social.", 
        "C. Agentes institucionales."],
        correctAnswer: "A"
    },
    {
        question: "Qué nombre recibe el proceso basado en transacciones de bienes y servicios, que permita la expansión de negocios por todo el mundo:",
        options: ["A. Globalización productiva.", 
        "B. Globalización comercial.", 
        "C. Globalización financiera."],
        correctAnswer: "B"
    },
{
        question: "La persona titular del cargo de fiscal de Sala Delegada contra la Violencia sobre la Mujer forma parte de la composición de :",
        options: ["A. De la Delegación de Gobierno para la Violencia de Género.", 
        "B. Del Observatorio Estatal de Violencia sobre la mujer", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué casos de los siguientes, se deberá motivar la denegación del visado?",
        options: ["A. En visados de residencia para reagrupación familiar o para el trabajo por, cuenta propia.", 
        "B. En visados de residencia para reagrupación familiar o para el trabajo por cuenta ajena, así como de estancia o tránsito.", 
        "C. En visados de residencia para reagrupacion conyugal o para el trabajo por cuenta ajena, así como de estancia o tránsito."],
        correctAnswer: "B"
    },
{
        question: "¿De qué se percataron los países desarrollados en la década de los 70?",
        options: ["A. De que su prosperidad se basaba en el uso intensivo de recursos naturales ilimitados.", 
        "B. De que los recursos naturales en que sustentaban su crecimiento no eran inagotables.", 
        "C. De que el crecimiento económico y medio ambiente no podían ir juntos."],
        correctAnswer: "B"
    },
    {
        question: "Tal como establece el artículo 3.1 del Código Civil:",
        options: ["A. Las normas se interpretarán según el sentido propio de sus palabras, en relación con el contexto, los antecedentes históricos y legislativos y la realidad social del tiempo en que han de ser aplicadas atendiendo fundamentalmente al espíritu y finalidad de aquellas.", 
        "B. Procederá la aplicación análoga de las normas cuando estas no contemplen un supuesto específico, pero regulen otro semejante entre los que se aprecie identidad de razón. La analogía permite la aplicación del Derecho a casos no previstos por él, es una laguna del derecho que es cubierta por una ley semejante.", 
        "C. Las disposiciones del Código Civil, se aplicarán como supletorias en las materias recogidas por otras leyes."],
        correctAnswer: "A"
    },
 {
        question: "Señale cuál de los siguientes servicios no tiene que ser prestado únicamente por empresas de seguridad privada",
        options: ["A. La vigilancia y protección de bienes, establecimientos, lugares y eventos, tanto públicos como privados, así de las personas que pudieran encontrarse en los mismos.", 
        "B. El depósito y custodia de explosivos, armas, cartuchería metálica, sustancias, materias, mercancías y cualquiera objetos que por su peligrosidad precisen de vigilancia y protección especial.", 
        "C. La explotación de centrales para la conexión, recepción, verificación y, en su caso, respuesta y transmisión de las señales de alarma, así como la monitorización de cualesquiera señales de dispositivos auxiliares para la segundad de personas, de bienes muebles o inmuebles o de cumplimiento de medidas impuestas, y la comunicación a las Fuerzas y Cuerpos de Seguridad competentes en estos casos."],
        correctAnswer: "B"
    },
{
        question: "La Estrategia Española de Desarrollo Sostenible:",
        options: ["A. Fue renovada en el Consejo de Bruselas en el año 2006 con un principio general y uno adicional.", 
        "B. Fue renovada en el Consejo de Bruselas en el año 2006 con un principio general y dos adicionales.", 
        "C. Fue renovada en el Consejo de Bruselas en el año 2006 con un principio general."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes es una característica del estado de excepción enunciada en la Ley Orgánica 4/1981?:",
        options: ["A. Cuando la autorización del Congreso comprenda la suspensión del artículo veintiuno de la Constitución, la autoridad gubernativa podrá someter a autorización previa o prohibir la celebración de reuniones y manifestaciones.", 
        "B. Un decreto determinará el ámbito territorial, la duración y os efectos de la declaración, que no podrá exceder de quince días.", 
        "C. Podrá declararse este estado por paralización de servicios públicos esenciales para la comunidad."],
        correctAnswer: "A"
    },
    {
        question: "Marta y María, ambas mayores de edad, estaban en trámites de separación y habían quedado en un bar para hablar de temas legales, María aprovechó un descuido de Marta y metió benzodiazepina en la croqueta que esta había pedido. Marta, al llegar a casa empezó a encontrarse mal y se acostó. A la mañana siguiente le habían desaparecido 27.000€ de una cuenta, María realizó la operación desde el móvil de Marta, por eso la necesitaba inconsciente:",
        options: ["A. Maria podía ser investigada por un delito de asesinato en grado de tentativa.", 
        "B. María podría ser investigada por un delito de estafa.", 
        "C. Maria sería responsable de un delito de robo."],
        correctAnswer: "B"
    },
    {
        question: "El movimiento que rechaza el capitalismo y el modelo neoliberal, es:",
        options: ["A. El movimiento de resistencia global.", 
        "B. El movimiento altermundista.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál es un órgano directivo de la Administraciórt General del Estado?",
        options: ["A. Secretario de Estado.", 
        "B. Ministro.", 
        "C. Secretario General Técnico."],
        correctAnswer: "C"
    },
    {
        question: "El indigente es un tipo de inconformismo llamado:",
        options: ["A. Innovación.", 
        "B. Retraimiento.", 
        "C. Ritualismo."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué miembro de la ONU proclamó la Declaración Universal de los Derechos Humanos?",
        options: ["A. La Comisión Europea de Derechos Humanos.", 
        "B. La Asamblea general de Naciones Unidas.", 
        "C. El Tribunal Europeo de Derechos Humanos."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué teoría criminológica se basa en el miedo que provoca en el individuo potencialmente infractor, las consecuencias de la comisión de un acto delictivo?:",
        options: ["A. Teoría de la tensión o la frustración.", 
        "B. Teoría Crítica al Sistema Tradicional de Investigación.", 
        "C. Teoría del arraigo social."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién podrá acordar, previo informe de las Salas de Gobierno, que, en aquellas circunscripciones donde sea conveniente en función de la carga de trabajo existente, el conocimiento de los asuntos referidos a Violencia de Género, corresponda a uno de los Juzgados de Primera Instancia e Instrucción, o de Instrucción?",
        options: ["A. El Ministerio Fiscal.", 
        "B. El Consejo General del Poder Judicial.", 
        "C. La Fiscalía de los Tribunales Superiores de Justicia y de las Audiencias Provinciales."],
        correctAnswer: "B"
    },
    {
        question: "La patogenia de la enfermedad profesional es:",
        options: ["A. Predecible.", 
        "B. Difícil de establecer.", 
        "C. Brusca."],
        correctAnswer: "B"
    },
    {
        question: "El II Plan de Acción de lucha contra los delitos de odio (2022-2024) aprobado por la ISES 5/2022, establece la creación de una Comisión de Seguimiento, ¿con qué periodicidad enviarán la Dirección General de la Policía y la Dirección General de la Guardia Civil un informe con las actuaciones desarrolladas en sus respectivos ámbitos territoriales?:",
        options: ["A. Anual.", 
        "B. Semestral.", 
        "C. Trimestral."],
        correctAnswer: "B"
    },
    {
        question: "El objeto de conciencia, es un tipo de inconformismo denominado:",
        options: ["A. Rebelt.", 
        "B. Ritualismo.", 
        "C. Retraimiento."],
        correctAnswer: "A"
    },
    {
        question: "El Indice de Bienestar Económico Sostenible °BES) es un indicador compuesto por alrededor de un veintena de variables de distinta naturaleza, que pretende reflejar los distintos aspectos económicos, sociales y ambientales que son relevantes para el bienestar. Originalmente fue propuesto en 1989 por:",
        options: ["A. James Tobin.", 
        "B. Ignacio Ramonet y George Mombiot.", 
        "C. Herman Daly y John Cobb Jr."],
        correctAnswer: "C"
    },
    {
        question: "El aborto realizado por imprudencia se encuentra tipificado en:",
        options: ["A. Art 144 CP.", 
        "B. Art 145 CP.", 
        "C. Art 146 CP."],
        correctAnswer: "C"
    },
    {
        question: "Son componentes de la ideología:",
        options: ["A. Los valores, las actitudes y las creencias.", 
        "B. Los símbolos, el lenguaje y los valores.", 
        "C. Las creencias, las normas sociales y los comportamientos."],
        correctAnswer: "A"
    },
 
    {
        question: "¿En qué consiste el efecto desvanecimiento de los prejuicios?",
        options: ["A. En que los prejuicios casi siempre son equivocados.", 
        "B. En que tienden a desaparecer con el paso del tiempo.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué organismo desempeña la función de guardián del Tribunal Europeo de Derechos Humanos?",
        options: ["A. El Comisario del Consejo de Europa.", 
        "B. La Asamblea Parlamentaria del Consejo de Europa.", 
        "C. El Comité de Ministros del Consejo de Europa."],
        correctAnswer: "C"
    },
    {
        question: "El proceso de armonización de culturas con motivo de la llegada de inmigrantes a un pais, se llama:",
        options: ["A. Integración.", 
        "B. Asimilación.", 
        "C. Pluralismo cultural."],
        correctAnswer: "A"
    },
    {
        question: "En el tipo de lesiones graves •¿se sanciona la deformidad grave?",
        options: ["A. En el delito de lesiones, el cp sanciona expresamente, entre otras lesiones, el causar una grave deformidad..", 
        "B. El Código penal contem'pla, además de la sanción expresa de la deformidad grave, un tipo atenuado si el agresor asume los costes de una cirugía reparadora..", 
        "C. El CP contempla un tipo agravado si además de la deformidad grave se ocasiona alguna otra lesiónEl CP contempla un tipo agravado si además de la deformidad grave se ocasiona alguna otra lesión."],
        correctAnswer: "A"
    },
    {
        question: "Responsabilizarse del asesoramiento jurídico al Ministro en el desarrollo de las funciones que a éste le corresponden y, en particular, en el ejercicio de su potestad normativa y en la producción de los actos administrativos de la competencia de aquel, así como a los demás órganos del Ministerio.",
        options: ["A. Secretarios Generales Técnicos.", 
        "B. Subsecretarios.", 
        "C. Gabinetes."],
        correctAnswer: "B"
    },
    {
        question: "El individuo meticuloso a la hora de planificar sus delitos, obedece al perfil que Kretschmer llama:",
        options: ["A. Pícnicos.", 
        "B. Displásicos.", 
        "C. Leptosomáticos."],
        correctAnswer: "C"
    },
    {
        question: "C.M. Cooiey afirma que la experiencia que los sujetos adquieren en estos grupos sociales será la base de su propio desarrollo como persona y del propio desarrollo de lagran organización social. ¿A qué grupos se refiere?:",
        options: ["A. Grupos de referencia.", 
        "B. Grupos primarios.", 
        "C. Grupos secundarios"],
        correctAnswer: "B"
    },
    {
        question: "La resolución sobre el periodo de restablecimiento y reflexión a una extranjera víctima de trata de seres humanos será notificada a la persona interesada, de manera inmediata y por el medio más rápido:",
        options: [
            "A. por la Delegación o Subdelegación del Gobierno",
            "B. por la autoridad policial que hubiera realizado la propuesta de concesión",
            "C. Las dos respuestas son correctas"
        ],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Las resoluciones de expulsión de territorio nacional que se dicten en los procedimientos de tramitación ordinaria contendrán un plazo de cumplimiento voluntario para que el extranjero abandone el territorio nacional. ¿Cuál es la duración del mismo plazo?",
        options: [
            "A. Entre quince y treinta días",
            "B. Entre siete y treinta días",
            "C. De treinta días en todo caso, no superior a treinta días"
        ],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 51 de la Ley Orgánica 4/2000, ¿en qué tipo de responsabilidad incurrirán los autores o partícipes de las infracciones tipificadas en esta ley?",
        options: [
            "A. Administrativa",
            "B. Administrativa o civil",
            "C. Administrativa o penal"
        ],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "En el procedimiento simplificado, el órgano competente, al dictar el acuerdo de iniciación, lo comunicará al órgano instructor y simultáneamente será notificado a los interesados. En el plazo de __________, a partir de la comunicación y notificación del acuerdo de iniciación, el órgano instructor y los interesados efectuarán, respectivamente, las actuaciones pertinentes, la aportación de cuantas alegaciones, documentos o informaciones estimen convenientes y, en su caso, la proposición y práctica de prueba.",
        options: [
            "A. diez días",
            "B. veinte días",
            "C. treinta días"
        ],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "En materia de extranjería, en los supuestos de infracciones que tengan carácter laboral el procedimiento sancionador se iniciará por:",
        options: [
            "A. resolución del Delegado o Subdelegado del Gobierno",
            "B. acta de la Inspección de Trabajo y Seguridad Social",
            "C. acta de la Autoridad de las CCAA que tenga atribuidas competencias en materia de autorización inicial de trabajo de extranjeros"
        ],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La sanción de expulsión no podrá ser impuesta con carácter general a:",
        options: [
            "A. John, estadounidense que ha residido legalmente en España en los últimos seis años.",
            "B. Marie, francesa de origen que ha perdido la nacionalidad española que había adquirido a consecuencia de su matrimonio con un español.",
            "C. Rodrigo, ciudadano colombiano que percibe una prestación contributiva por desempleo."
        ],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Desde el momento en que se inicie un procedimiento sancionador en el que pueda proponerse la expulsión, el instructor, a fin de asegurar la resolución final que pudiera recaer, podrá adoptar la detención cautelar:",
        options: [
            "A. Por la autoridad gubernativa.",
            "B. Por sus agentes.",
            "C. Por la autoridad gubernativa o por sus agentes."
        ],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "El incumplimiento de las medidas impuestas por razón de seguridad pública, de presentación periódica o de alejamiento de fronteras o núcleos de población concretados singularmente será una infracción:",
        options: [
            "A. Leve",
            "B. Grave",
            "C. Muy grave"
        ],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Para la graduación de las sanciones en materia de extranjería, el órgano competente en imponerlas:",
        options: [
            "A. se ajustará a criterios de proporcionalidad, valorando el grado de culpabilidad y, en su caso, el daño producido o el riesgo derivado de la infracción y su trascendencia.",
            "B. tendrá especialmente en cuenta la capacidad económica del infractor.",
            "C. Las dos respuestas son correctas."
        ],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Simular la relación laboral con un extranjero, cuando dicha conducta se realice con ánimo de lucro o con el propósito de obtener indebidamente derechos reconocidos en esta Ley, siempre que tales hechos no constituyan delito es una infracción:",
        options: [
            "A. Leve",
            "B. Grave",
            "C. Muy grave"
        ],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "En un procedimiento ordinario sancionador de extranjería, transcurrido el plazo sin haberse resuelto el procedimiento y notificado la expresada resolución se producirá la caducidad y se procederá al archivo de las actuaciones a solicitud de cualquier interesado o de oficio por el órgano competente para dictar la resolución salvo:",
        options: [
            "A. Que la paralización sea causa imputable a los interesados.",
            "B. Que se resuelva a favor del extranjero.",
            "C. Las dos son correctas."
        ],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Marion, un ciudadano etiope tiene residencia temporal en Grecia pero se ha venido este verano a España trabajar sin autorización de trabajo y residencia. Cuando llevaba un mes en España lo han interceptado en esta situación, en este caso procederá:",
        options: ["A. Da un advertencia mediante diligencia en el pasaporte de la obligación de dirigirse de inmediato a Grecia.", 
        "B. Se tramitará el expediente de expulsión a Grecia.", 
        "C. Se tramitará el expediente de expulsión a Etiopia."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Cuando un extranjero se encuentre procesado o imputado en un procedimiento judicial por delito para el que la ley prevea una pena privativa de libertad inferior a seis años y conste este hecho acreditado en el expediente administrativo de expulsión la autoridad gubernativa someterá al juez que, previa audiencia del Ministerio Fiscal y oído el interesado y las partes personadas, autorice su expulsión en el plazo más breve posible y en todo caso no superior:",
        options: ["A. Tres días.", 
        "B. Cinco días.", 
        "C. Diez días."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "La expulsión llevará consigo la prohibición de entrada en territorio español. La duración de la prohibición se determinará en consideración a las circunstancias que concurran en cada caso y su vigencia no excederá de:",
        options: ["A. Tres años.", 
        "B. Cinco años.", 
        "C. Diez años."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Tanto en los supuestos de prórroga del plazo de cumplimiento voluntario como de aplazamiento o suspensión de la ejecución de la expulsión, que se deben acreditar en un documento notificado al interesado, se tendrá en cuenta la garantía para el extranjero afectado de:",
        options: ["A. Mantenimiento unidad familiar con los miembros que se hallen en territorio español.", 
        "B. Prestación atención sanitaria de urgencia y tratamiento básico de enfermedades.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Cuando el Ministerio Fiscal tenga conocimiento de que un extranjero, contra el que se ha dictado una resolución de expulsión es víctima, perjudicado o testigo imprescindible en un procedimiento penal para la práctica de diligencias judiciales, lo pondrá de manifiesto a la _________ competente para que no se realice la ejecución o si se hubiese ejecutado, autorice su regreso a España durante el tiempo necesario para las diligencias.",
        options: ["A. La autoridad gubernativa.", 
        "B. El juez competente.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Si los órganos administrativos competentes estiman hay motivos razonables para creer que una persona extranjera irregular ha sido víctima de trata de seres humanos informarán a la persona sobre la posibilidad de acogerse a esta vía y elevarán a la Delegación o Subdelegación del Gobierno de la provincia donde se hubiere realizado la identificación, en el plazo _____ la propuesta sobre la concesión de un periodo de restablecimiento y reflexión.",
        options: ["A. 24 horas.", 
        "B. 48 horas.", 
        "C. 72 horas."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "En todo caso la comisión de una tercera infracción leve constituirá:",
        options: ["A. Una infracción grave.", 
        "B. Una infracción muy grave.", 
        "C. Ninguna es correcta."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "¿Quiénes podrán visitar los centros de internamiento?",
        options: ["A. Las organizaciones constituidas legalmente en España para la defensa de los inmigrantes.", 
        "B. Los organismos internacionales pertinentes.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Carlos es un ciudadano Venezolano implicado en actividades contrarias al orden público previstas como muy graves en la Ley Orgánica Protección de la Seguridad Ciudadana, en este caso la competencia sancionadora corresponderá a:",
        options: ["A. Secretario de Estado de Seguridad.", 
        "B. Delegado o Subdelegado del Gobierno.", 
        "C. Las dos son correctas."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La protección concedida con el derecho de asilo y la protección subsidiaria consiste en la no devolución ni expulsión de las personas a quienes se les haya reconocido, así como en la adopción de las medidas contempladas la Ley 12/2009 y:",
        options: ["A. En las normas que la desarrollen.", 
        "B. En la normativa de la Unión Europea y en los Convenios internacionales ratificados por España.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Son establecimientos de alojamiento colectivo y estancia provisional, en los que se valoran las necesidades particulares de acogida, se ofrece orientación básica sobre el sistema de acogida, se atienden las necesidades básicas y urgentes de las personas destinatarias.",
        options: ["A. Centros de Valoración Inicial y Derivación.", 
        "B. Centros de acogida de Protección Internacional (CAPI).", 
        "C. Centros de Acogida Inicial, Valoración y Derivación."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Las personas solicitantes de protección internacional cuando su solicitud haya sido inadmitida a trámite en España por haber aceptado otro Estado miembro de la Unión Europea la responsabilidad de examinar su solicitud de asilo, en virtud del reglamento (UE) 604/2013 del Parlamento Europeo y del Consejo, de 26 de junio de 2013, podrán ser destinatarias del sistema de acogida durante un periodo no superior a:",
        options: ["A. Un mes a partir de la notificación de la inadmisión prorrogable.", 
        "B. Un mes a partir de la notificación de la inadmisión prorrogable por causas excepcionales.", 
        "C. Un mes a partir de la notificación de la inadmisión sin posibilidad de prórroga."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Contra la resolución de inadmisión a trámite o de denegación de la solicitud de protección internacional presentada en frontera se podrá presentar una petición de reexamen que suspenderá los efectos de aquella en el plazo de:",
        options: ["A. 2 días desde su notificación.", 
        "B. 2 días desde su presentación en el puesto fronterizo.", 
        "C. 2 días desde su solicitud."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "En el Sistema de acogida de Protección Internacional las personas destinatarias serán derivadas al recurso de alojamiento que se considere más adecuado atendiendo a los criterios siguientes:",
        options: ["A. La edad, el sexo, la discapacidad y la situación familiar, así como, en la medida de lo posible, otras características asociadas a su posible vulnerabilidad y a las eventuales necesidades específicas de acogida que se detecten y la promoción de una distribución territorial equilibrada.", 
        "B. El lugar de presentación de su solicitud de protección internacional y el estado de su tramitación.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Los fundados temores de ser perseguido o el riesgo real de sufrir daños graves:",
        options: ["A. Pueden basarse en acontecimientos sucedidos o actividades en que haya participado la persona solicitante con posterioridad al abandono del país de origen.", 
        "B. No pueden basarse en acontecimientos sucedidos o actividades en que haya participado la persona solicitante con posterioridad al abandono del país de origen.", 
        "C. Deben basarse en acontecimientos sucedidos o actividades en que haya participado la persona solicitante con posterioridad al abandono del país de origen."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "El Comité español de ACNUR lleva trabajando para sensibilizar y captar fondos para los proyectos humanitarios de ACNUR desde:",
        options: ["A. 1991.", 
        "B. 1993.", 
        "C. 1995."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Excepcionalmente, y salvo en los casos en los que concurra fuerza mayor o citación de las autoridades o de los tribunales, la persona que desee abandonar temporalmente la provincia en que se sitúa el recurso de acogida del sistema de Protección Internacional al que fue asignada, podrá solicitar la autorización:",
        options: ["A. Del órgano administrativo correspondiente de la Secretaría de Estado de Migraciones.", 
        "B. De la autoridad gubernativa de la provincia donde esté ubicado el centro.", 
        "C. De la autoridad gubernativa de la provincia en la que se le asignó el recurso de acogida."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Reynen solicita entrar al territorio español y para ello solicita protección internacional en un puesto fronterizo. Una vez allí y tras hacer unas comprobaciones se comprueba que procede de un tercer país seguro. En este caso a Reynen:",
        options: ["A. Se le inadmite la solicitud.", 
        "B. Se le denegará la solicitud.", 
        "C. Se le tramitará por el procedimiento de urgencia."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "La Oficina de Asilo y Refugio iniciará los trámites para revocar la resolución por la que se concede la protección temporal cuando esta se haya obtenido mediante datos, documentos o declaraciones cuya falta de veracidad se ponga de manifiesto por otros a los que se tenga acceso posteriormente y que resulten esenciales y determinantes para la resolución final. En este caso decidirá:",
        options: ["A. El Consejo de Ministros a propuesta del Ministro del Interior.", 
        "B. El Ministro del Interior previa propuesta de la Comisión Interministerial de Asilo y Refugio.", 
        "C. El Ministro del Interior oída la Comisión Interministerial de Extranjería."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Para casos de afluencia de personas de forma espontánea a nuestras fronteras. En este procedimiento, el Ministro del Interior, oída a la Comisión Interministerial de Extranjería:",
        options: ["A. Elevará al Consejo de Ministros una propuesta para acordar el régimen de protección temporal si procede.", 
        "B. La recomendación de solicitar al Consejo de la UE la presentación de una propuesta a la Comisión para que tome la decisión sobre la existencia de una afluencia masiva de personas desplazadas.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Se pondrá fin al procedimiento de protección internacional mediante el archivo de la solicitud cuando la persona solicitante la retire o desista de ella. En todo caso, se podrá presumir que dicha retirada o desistimiento se ha producido cuando:",
        options: ["A. En el plazo de treinta días el solicitante no hubiese respondido a las peticiones de información.", 
        "B. No compareciera para la renovación de la documentación de la que se le hubiera provisto.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "La persona que desee abandonar temporalmente la provincia en que se sitúa el recurso de acogida al que fue asignada, podrá solicitar la autorización por motivos laborales, razones médicas o situaciones relacionadas con familiares de hasta:",
        options: ["A. El primer grado.", 
        "B. El segundo grado.", 
        "C. El tercer grado."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Con el fin de atender casos de protección internacional que se presenten fuera del territorio nacional, los embajadores de España podrán promover el traslado del o de los solicitantes de asilo a España para hacer posible la presentación de la solicitud conforme al procedimiento previsto en la ley reguladora siempre y cuando:",
        options: ["A. El solicitante no sea nacional del país en que se encuentre la representación diplomática y corra peligro su integridad física.", 
        "B. El solicitante sea nacional del país en que se encuentre la representación diplomática y corra peligro su integridad física.", 
        "C. El solicitante no sea nacional del país en que se encuentre la representación diplomática y corra peligro su integridad física o moral."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes no es una de las formas que pueden revestir los actos de persecución previsto en el artículo 6 de la ley 12/2009 de las condiciones para el reconocimiento del derecho de asilo:",
        options: ["A. Actos de violencia psíquica.", 
        "B. Medidas administrativas que no son discriminatorias en sí mismas pero se aplican de manera discriminatoria.", 
        "C. Procesamientos o penas por la negativa a prestar servicio militar en un conflicto."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Dentro del sistema de acogida de protección internacional se encuentra Giselle, una ciudadana extranjera que tiene cuatro hijos y a la cual han determinado que se encuentra en situación de vulnerabilidad. ¿Cuánto tiempo podrá encontrarse dentro de la fase de acogida?",
        options: ["A. Seis meses.", 
        "B. Seis meses pudiendo excepcionalmente dicho plazo ser superior siempre que no exceda de la mitad de los mismos, si las circunstancias lo aconsejan y con ello no se perjudican derechos de tercero.", 
        "C. Seis meses que podrán extenderse por una duración adicional de un máximo de seis meses más."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Al efecto de valorar si una organización internacional controla un Estado o una parte considerable de su territorio y proporciona la protección descrita en la Ley de Protección Internacional se tendrá en cuenta la orientación que pueda desprenderse de los actos pertinentes:",
        options: ["A. De las instituciones de la Unión Europea.", 
        "B. De organizaciones internacionales relevantes.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de los siguientes no es un requisito de exclusión de la protección subsidiaria.",
        options: ["A. Las personas que estén comprendidas en el ámbito de aplicación de la Convención de Ginebra en lo relativo a la protección o asistencia de un órgano u organismo de las Naciones Unidas distinto del Alto Comisionado de las Naciones Unidas para los Refugiados.", 
        "B. Han cometido fuera del país de protección antes de ser admitidas como beneficiarias de la protección subsidiaria, es decir, antes de la expedición de la autorización de residencia basada en el reconocimiento de la condición de beneficiario de protección subsidiaria, un delito grave, entendiéndose por tal los que lo sean conforme al Código Penal español.", 
        "C. Han cometido un delito contra la paz, un delito de guerra o un delito contra la humanidad, de los definidos en los instrumentos internacionales que establecen disposiciones relativas a tales delitos."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "¿Quién tiene la competencia para declarar cesados los beneficios de la protección temporal por renuncia tácita del beneficiario?",
        options: ["A. La Comisión Interministerial de Asilo y Refugio.", 
        "B. Consejo de Ministros.", 
        "C. Ministro del Interior."],
        topic: 101112,
        correctAnswer: "C"
    },



    {
        question: "Indique cuál de las siguientes definiciones hace referencia a 'Sistema de acogida de protección internacional':",
        options: ["A. Conjunto de recursos, actuaciones y servicios que se proporcionan a través del correspondiente itinerario a las personas incluidas en el ámbito subjetivo de aplicación de la protección internacional con la finalidad de asegurar la satisfacción de sus necesidades básicas en condiciones de dignidad.", 
        "B. Conjunto de recursos y servicios que se proporcionan a través del correspondiente itinerario a las personas incluidas en el ámbito subjetivo de aplicación de la protección internacional con la finalidad de asegurar la satisfacción de sus necesidades básicas en condiciones de dignidad.", 
        "C. Conjunto de recursos, actuaciones, acciones y servicios que se proporcionan a través del correspondiente itinerario a las personas incluidas en el ámbito subjetivo de aplicación de la protección internacional con la finalidad de asegurar la satisfacción de sus necesidades básicas en condiciones de dignidad."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Dentro del sistema de acogida de Protección Internacional el objetivo de esta fase es apoyar la adquisición de autonomía de las personas beneficiarias de protección internacional o del estatuto de apatridia, así como la consolidación de conocimientos y habilidades que hagan efectiva su plena inclusión en la sociedad:",
        options: ["A. Fase de autonomía.", 
        "B. Fase de inclusión.", 
        "C. Fase de acogida."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Señale la INCORRECTA. Junto a los derechos reconocidos a los solicitantes de protección internacional las personas destinatarias del sistema de acogida de Protección Internacional tendrán, desde que accedan al sistema de acogida de protección internacional y durante el tiempo en que permanezcan en él, los siguientes derechos:",
        options: ["A. Recibir una atención integral para la recuperación de la violencia que, en su caso, hubiera sufrido con anterioridad o en el contexto del desplazamiento.", 
        "B. Dirigirse al Juez responsable del recurso asignado y utilizar las vías establecidas para formular las peticiones y reclamaciones relativas a su tratamiento o al sistema que eventualmente formulen.", 
        "C. Ser informadas, en un idioma que comprendan, sobre las condiciones del sistema de acogida de protección internacional y del recurso de acogida, de sus derechos y deberes como personas usuarias, así como de las causas para la reducción o retirada de las condiciones de acogida."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "El estatuto personal de todo apátrida se regirá por:",
        options: ["A. La ley del país de su domicilio.", 
        "B. La ley del país de su residencia.", 
        "C. La ley de su país de domicilio o residencia indistintamente."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "¿Qué procedimiento regula la legislación española para los casos de llegada de desplazados que se producen en el marco de programas de evacuación humanitarios?",
        options: ["A. Procedimiento de emergencia.", 
        "B. Procedimiento de evacuación.", 
        "C. Procedimiento de readmisión."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de las siguientes no es un motivo de cese del estatuto de refugiado:",
        options: ["A. Se hayan acogido de nuevo, voluntariamente, a la protección del país de su nacionalidad.", 
        "B. La persona beneficiaria ha tergiversado u omitido hechos, incluido el uso de documentos falsos, que fueron decisivos para la concesión del estatuto de refugiado o de protección subsidiaria.", 
        "C. Han abandonado el territorio español y fijado su residencia en otro país."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La Agencia de Asilo de la Unión Europea (AAUE) es una agencia descentralizada de la UE que brinda apoyo operativo y técnico, así como formación, a las autoridades nacionales de los países de la UE. Esta tiene su sede en:",
        options: ["A. Malta.", 
        "B. Viena.", 
        "C. Polonia."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Cuando presente una solicitud de protección Internacional ante las autoridades competentes de un Estado miembro un solicitante que se encuentre en el territorio de otro Estado miembro, la determinación del Estado miembro responsable incumbirá al Estado miembro:",
        options: ["A. En cuyo territorio haya presentado la solicitud.", 
        "B. En cuyo territorio se encuentre el solicitante de asilo.", 
        "C. En cuyo territorio determine el solicitante de asilo."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "En protección internacional toda información relativa al procedimiento, incluido el hecho de la presentación de la solicitud, tendrá carácter:",
        options: ["A. Confidencial.", 
        "B. Secreto.", 
        "C. Reservado."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes no es un lugar establecido para solicitar la iniciación un procedimiento de protección internacional.",
        options: ["A. Oficina de Asilo y Refugio.", 
        "B. Oficina consular.", 
        "C. Comisarías de policía autorizadas."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La Comisión Interministerial de Asilo y Refugio es un órgano colegiado adscrito al:",
        options: ["A. Ministerio de Inclusión, Seguridad Social y Migraciones.", 
        "B. Ministerio de Interior.", 
        "C. Ministerio de Asuntos Exteriores, UE y cooperación."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Respecto del periodo de restablecimiento y reflexión de las víctimas de Tratas de Seres Humanos, el Delegado o Subdelegado del Gobierno competente resolverá sobre la propuesta de concesión y duración del mismo en el plazo máximo de:",
        options: ["A. 5 días.", 
        "B. 3 días.", 
        "C. 2 días."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Según la LOEX, el órgano de consulta, información y asesoramiento en materia de integración de los inmigrantes es:",
        options: ["A. Comisión para la Integración de los Inmigrantes.", 
        "B. El Foro para la Integración Social de los Inmigrantes.", 
        "C. El Observatorio Español del Racismo y la Xenofobia."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 31 de la Ley Orgánica 4/2000, un extranjero que solicite una autorización de residencia por arraigo:",
        options: ["A. Necesitará visado si proviene de un país establecido por el Código de Visados de la UE.", 
        "B. No necesitará visado.", 
        "C. Necesitará visado si va a estar en territorio español por un plazo superior a tres meses."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La autorización de residencia para profesionales altamente cualificados titulares de una Tarjeta azul-UE procederá en el supuesto de trabajadores extranjeros que vayan a desempeñar una actividad laboral para la que se requiera contar con una cualificación derivada de una formación de enseñanza superior de duración mínima de tres años y equivalente al menos al:",
        options: ["A. Nivel 1 del Marco Español de Cualificaciones para la Educación Superior.", 
        "B. Nivel 2 del Marco Español de Cualificaciones para la Educación Superior.", 
        "C. Nivel 3 del Marco Español de Cualificaciones para la Educación Superior."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La Autorización de residencia para profesionales altamente cualificados titulares de una Tarjeta azul-UE tendrá una duración de:",
        options: ["A. Tres años.",
        "B. Dos años", 
        "C. Cinco años.",],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Según el art. 2 de la LO 1/2004 uno de los principios rectores es reforzar hasta la consecución de los mínimos exigidos por los objetivos de la ley los servicios sociales de información, de atención, de emergencia, de apoyo y de recuperación integral, así como establecer un sistema para la más eficaz coordinación de los servicios ya existentes a nivel:",
        options: ["A. Estatal y autonómico.", 
        "B. Municipal y autonómico.", 
        "C. Estatal, municipal y autonómico."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Para la concesión de una Tarjeta azul-UE, será necesario cumplir los siguientes requisitos:",
        options: ["A. El extranjero deberá acreditar la posesión de la cualificación establecida y, en el caso del ejercicio de profesiones reguladas, acreditar su homologación conforme a la normativa sectorial relativa al ejercicio de profesiones reguladas.", 
        "B. El solicitante deberá presentar un contrato de trabajo válido o una oferta firme de empleo de alta cualificación para un periodo de al menos un año que garantice al trabajador una actividad continuada durante el periodo de vigencia de la Tarjeta azul-UE.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Se revocará o se denegará la renovación de la Tarjeta azul-UE, tras analizar las circunstancias específicas y de acuerdo con el principio de proporcionalidad, cuando el extranjero ya no esté en posesión de un contrato de trabajo válido para un empleo de alta cualificación, y:",
        options: ["A. Acumule un periodo de desempleo superior a tres meses habiendo sido titular de la Tarjeta azul-UE durante al menos dos años.", 
        "B. Acumule un periodo de desempleo superior a tres meses habiendo sido titular de la Tarjeta azul-UE durante menos de dos años.", 
        "C. Acumule un periodo de desempleo superior a seis meses habiendo sido titular de la Tarjeta azul-UE durante menos de dos años."],
        topic: 101112,
        correctAnswer: "B"
    },





    {
        question: "¿Cuál sería el proceso normal para llegar a residir en España de manera permanente de un ciudadano comunitario?",
        options: ["A. Entrada en territorio español con pasaporte o documento de identidad, solicitud del certificado de registro en una oficina de extranjería o Comisaría, en un plazo de tres meses desde su entrada y la solicitud del certificado de residencia permanente en la oficina de extranjería o Comisaría en un plazo de cinco años.", 
        "B. Entrada en territorio español con visado o autorización de residencia, solicitud del certificado de registro en una oficina de extranjería o Comisaría, en un plazo de dos meses desde su entrada y la solicitud del certificado de residencia permanente en la oficina de extranjería o Comisaría en un plazo de cinco años.", 
        "C. Entrada en territorio español con pasaporte o documento de identidad, solicitud del certificado de registro en una oficina de extranjería o Comisaría, en un plazo de dos meses desde su entrada y la solicitud del certificado de residencia permanente en la oficina de extranjería o Comisaría en un plazo de cinco años."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "La supresión de controles en fronteras interiores no significa que la legislación española no les imponga a los extranjeros que las cruzan ningún tipo de obligación; así, los extranjeros deberán realizar la declaración de entrada. ¿Dónde habrá de realizar tal declaración?",
        options: ["A. En puesto policial existente en la frontera y en caso de que no exista dicho puesto policial en cualquier Comisaría de Policía u Oficina de Extranjeros.", 
        "B. En puesto policial existente en la frontera o en cualquier Comisaría de Policía u Oficina de Extranjeros.", 
        "C. En puesto policial existente en la frontera o en una Comisaría de Policía acreditada u Oficina de Extranjeros."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Tal como establece el artículo 18 del Real Decreto 240/2007, de 16 de febrero, sobre entrada, libre circulación y residencia en España de ciudadanos de los Estados miembros de la Unión Europea y de otros Estados parte en el Acuerdo sobre el Espacio Económico Europeo, las resoluciones de expulsión establecerán un plazo para abandonar el territorio español. Excepto en casos urgentes, debidamente justificados, dicho plazo no podrá ser inferior a:",
        options: ["A. 15 días.", 
        "B. Un mes.", 
        "C. Tres meses."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 30 bis de la LO 4/2000, los extranjeros residentes en España podrán encontrarse en:",
        options: ["A. Residencia temporal o residencia permanente.", 
        "B. Residencia temporal o residencia de larga duración.", 
        "C. Las dos son correctas."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Un extranjero solicita un visado para venir al territorio español. En este caso el examen de la solicitud y la decisión al respecto corresponderá al consulado del Estado miembro competente:",
        options: ["A. En cuyo ámbito territorial se encuentre el solicitante.", 
        "B. En cuyo ámbito territorial resida legalmente el solicitante.", 
        "C. En cuyo ámbito territorial lo solicite."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Según establece el art 15 del RD 557/2011, relativo a la denegación de entrada, establece que en estos casos el regreso se ejecutará de forma inmediata y, en todo caso, dentro del plazo de 72 horas desde que se hubiese acordado. Si no pudiera ejecutarse dentro de dicho plazo, ¿quién se dirigirá al juez de instrucción para que determine, en su caso, el lugar donde haya de ser internado el extranjero?",
        options: ["A. El Instructor del procedimiento sancionador.", 
        "B. La autoridad gubernativa.", 
        "C. La autoridad gubernativa o el responsable del puesto fronterizo por delegación de esta."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Si un extranjero expulsado tuviera derecho a la asistencia jurídica gratuita y se encontrase fuera de España:",
        options: ["A. El derecho se extinguirá al hacer efectiva la expulsión.", 
        "B. La solicitud de esta asistencia podrá realizarse ante el Ministerio de Asuntos Exteriores, UE y Cooperación.", 
        "C. La solicitud de esta asistencia podrá realizarse ante la misión diplomática u oficina consular correspondiente."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Los ciudadanos de un Estado miembro de la Unión Europea o de otro Estado parte en el Acuerdo sobre el Espacio Económico Europeo, y los miembros de su familia con independencia de su nacionalidad, tendrán derecho a salir de España para trasladarse a otro Estado miembro, ello con independencia de la presentación del pasaporte o documento de identidad en vigor a los funcionarios del control fronterizo si la salida se efectúa por un puesto habilitado, para su obligada comprobación, y de los supuestos legales de prohibición de salida por:",
        options: ["A. Razones de seguridad nacional, salud pública y casos previstos en el Código Penal.", 
        "B. Razones de orden público, salud pública y casos previstos en el Código Penal.", 
        "C. Razones de seguridad nacional, orden público, salud pública y casos previstos en el Código Penal."],
        topic: 101112,
        correctAnswer: "A"
    },
    





    {
        question: "Las Autoridades competentes para tramitar y resolver las solicitudes de certificado de registro o de tarjetas de residencia que se regulan en el presente real decreto podrán:",
        options: ["A. Excepcionalmente, recabar información sobre posibles antecedentes penales del interesado a las autoridades del Estado de origen o a las de otros Estados.", 
        "B. En todo caso, recabar información sobre posibles antecedentes penales del interesado a las autoridades del Estado de origen o a las de otros Estados.", 
        "C. Recabar información sobre posibles antecedentes penales del interesado a las autoridades del Estado de origen o a las de otros Estados."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "El visado válido para el tránsito o la estancia en el territorio de uno o más de los Estados que integran el Espacio Schengen, pero no para todos ellos es el visado:",
        options: ["A. Uniforme.", 
        "B. De validez territorial limitada.", 
        "C. De residencia y trabajo de temporada."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Un Estado Miembro incumple una decisión del Consejo, representando tal circunstancia una amenaza grave para el orden público del espacio sin controles en las fronteras interiores. En este caso se decide restablecer el control fronterizo por un periodo inicial no superior a:",
        options: ["A. 10 días.", 
        "B. 30 días.", 
        "C. 6 meses."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "¿Quién será competente para prorrogar los visados de estancia de corta duración expedidos a los titulares de pasaportes diplomáticos, oficiales o de servicio por razones de cortesía?",
        options: ["A. La Dirección General de Españoles en el Exterior y Asuntos Migratorios y Consulares.", 
        "B. La Dirección General de Migraciones.", 
        "C. Dirección General de Política Exterior."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Únicamente podrá adoptarse una decisión de expulsión respecto a ciudadanos de un Estado miembro de la Unión Europea o de otro Estado parte en el Acuerdo sobre el Espacio Económico Europeo, o a miembros de su familia, con independencia de su nacionalidad, que hayan adquirido el derecho de residencia permanente en España, si:",
        options: ["A. Existan motivos imperiosos de seguridad pública.", 
        "B. Existan motivos graves de orden público o seguridad pública.", 
        "C. Existan motivos graves de orden público."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Las fronteras comunes del Espacio Schengen podrán cruzarse en cualquier lugar sin efectuar control alguno de las personas:",
        options: ["A. Siempre que tengan la nacionalidad de algunos de los países suscritos al Convenio Schengen.", 
        "B. Siempre que sean nacionales de la Unión Europea.", 
        "C. Cualquiera que sea su nacionalidad."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "La residencia de arraigo para la formación tendrá una duración de 12 meses pudiendo ser prorrogada una única vez por otro periodo de doce meses si:",
        options: ["A. La formación tiene una duración superior a doce meses.", 
        "B. La duración exceda la vigencia de la primera autorización concedida.", 
        "C. Las dos respuestas son correctas."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "En el caso de que la minoría de edad de un extranjero indocumentado no pueda ser establecida con seguridad, las Fuerzas y Cuerpos de Seguridad del Estado, en cuanto tengan conocimiento de esa circunstancia o localicen al supuesto menor en España, informarán a los servicios autonómicos de protección de menores para que le presten la atención inmediata que precise de acuerdo con lo establecido en la legislación de protección jurídica del menor. Con carácter inmediato, se pondrá el hecho en conocimiento del Ministerio Fiscal, que dispondrá la determinación de su edad:",
        options: ["A. En el plazo más breve posible.", 
        "B. En el plazo máximo de 15 días.", 
        "C. En el plazo máximo de un mes."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "El trabajador extranjero que se desplace a un centro de trabajo en España y dependa, mediante expresa relación laboral, de una empresa establecida en un Estado no perteneciente a la UE ni al Espacio Económico Europeo es:",
        options: ["A. Un trabajador transnacional.", 
        "B. Un trabajador transfronterizo.", 
        "C. Un trabajador laboral."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguiente no es un supuesto específico de exención de la situación nacional de empleo a la hora de otorgar una residencia de un extranjero en el territorio nacional:",
        options: ["A. Los extranjeros que hayan renunciado a su autorización de residencia y trabajo en virtud de un programa de retorno voluntario.", 
        "B. Los trabajadores necesarios para el montaje por renovación de una instalación o equipos productivos.", 
        "C. Los que hubieran gozado de la condición de refugiados, durante el año siguiente a la cesación de la aplicación de la convención de ginebra de 28 de julio de 1954."],
        topic: 101112,
        correctAnswer: "C"
    },
    {
        question: "Señale la INCORRECTA. En caso de solicitud de un visado, la Misión Diplomática tendrá que comprobar:",
        options: ["A. Tener garantizados los medios económicos necesarios para sufragar los gastos de estancia y regreso a su país, y los de sus familiares.", 
        "B. No padecer ninguna de las enfermedades que pueden tener repercusiones de salud de conformidad con el Reglamento Sanitario Internacional de 2005.", 
        "C. Si el extranjero es menor de edad y no viene acompañado de sus padres o tutores, está autorizado por estos para el desplazamiento a España a efectos de realizar la actividad de que se trate, con constancia del centro, organización, entidad y organismo responsable de la actividad y del periodo de estancia previsto."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "La entrada en territorio nacional de los extranjeros a los que no les sea de aplicación el régimen comunitario:",
        options: ["A. Deberá ser registrada por las autoridades españolas a los efectos de control de su período de permanencia legal en España, de conformidad con la Ley de protección de datos de carácter personal.", 
        "B. Podrá ser registrada por las autoridades españolas a los efectos de control de su periodo de permanencia legal en España, de conformidad con la Ley de protección de datos de carácter personal.", 
        "C. No podrá ser registrada por las autoridades españolas a los efectos de control de su periodo de permanencia legal en España, de conformidad con la Ley de protección de datos de carácter personal."],
        topic: 101112,
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes no es un requisito de un visado expedido en frontera:",
        options: ["A. El solicitante cumple con los requisitos de entrada establecidos en el Código de Visados.", 
        "B. Si es de estancia tendrá una duración máxima de 15 días y de una sola entrada y una salida.", 
        "C. Se ha de considerar garantizado el retorno del solicitante a su país de origen o residencia, o su tránsito por otro país."],
        topic: 101112,
        correctAnswer: "A"
    },
    {
        question: "Las misiones diplomáticas u oficinas consulares españolas, previa autorización expresa del ____________________ podrán expedir documentos de viaje y salvoconductos a extranjeros cuya protección internacional haya sido determinada por España en aplicación de la legislación española sobre protección internacional o para proceder a su evacuación hacia países con los que existan acuerdos de cooperación a tal efecto.",
        options: ["A. Ministerio de Asuntos Exteriores, UE y Cooperación.", 
        "B. Ministerio del Interior.", 
        "C. Ministerio de Inclusión, Seguridad Social y Migraciones."],
        topic: 101112,
        correctAnswer: "A"
    },
    
    

    /* {
        question: "",
        options: ["A. .", 
        "B. .", 
        "C. ."],
        correctAnswer: "B"
    }, */

];


const lastExamQuestions = [
    {
        question: "En cuanto al permiso de conducir policial, las autorizaciones temporales para el personal NO policial tendrán una duración mínima de:",
        options: ["A. Un año.", "B. Un mes.", "C. Ninguna es correcta."],
        correctAnswer: "C"
    },
    {
        question: "Cuando una propuesta normativa afecte a la organización administrativa de la Administración General del Estado, a su régimen de personal, procedimientos y a la inspección de los servicios, será necesario:",
        options: ["A. Recabar la aprobación previa del Ministerio de Política Territorial antes de ser sometidas al órgano competente para promulgarlas.", 
        "B. Informe previo del Ministerio de Política Territorial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué clase de inconformismo social representa el indigente?:",
        options: ["A. Ritualismo.", "B. Retraimiento.", "C. Innovación."],
        correctAnswer: "B"
    },
    {
        question: "La orden de protección es:",
        options: ["A. Un instrumento legal diseñado para proteger a las víctimas de violencia de género frente a todo tipo de agresiones.", 
        "B. Un instrumento legal diseñado para proteger a las víctimas de la violencia doméstica y/o de género frente a todo tipo de agresiones.", 
        "C. Un instrumento legal diseñado para proteger a las víctimas de la violencia doméstica, de género y sexual frente a todo tipo de agresiones."],
        correctAnswer: "B"
    },
    {
        question: "La entidad responsable o encargada del tratamiento que designe un DPD tiene la obligación, de acuerdo con el artículo 37.7 de RGPD:",
        options: ["A. Comunicarlo a la autoridad de control en el plazo 10 días.", 
        "B. Publicar su existencia a través de medios electrónicos.", 
        "C. Informar a las partes interesadas."],
        correctAnswer: "C"
    },
    {
        question: "ACNUR, cuya sede central se ubica en Ginebra (Suiza), es un organismo que depende de:",
        options: ["A. Unión Europea.", "B. Consejo de Europa.", "C. Naciones Unidas."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de migraciones son las que se producen ante la falta de oportunidades?:",
        options: ["A. Voluntarias.", "B. Forzosas.", "C. Políticas."],
        correctAnswer: "A"
    },
    {
        question: "En cuanto a la investigación privada, los detectives podrán investigar:",
        options: ["A. Cualquier tipo de delito independientemente de sus requisitos de perseguibilidad.", 
        "B. Delitos perseguibles a instancia de parte.", 
        "C. Pueden investigar delitos públicos."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué sistema operativo es completamente gratuito?:",
        options: ["A. UNIX.", "B. LINUX.", "C. Android."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué tipo de marginación representan el vagabundo, el mendigo o el suicida?:",
        options: ["A. Marginación por reclusión.", 
        "B. Marginación por represión de conducta.", 
        "C. Marginación por indiferencia."],
        correctAnswer: "A"
    },
    {
        question: "Según el Código Penal. ¿Se considera depósito de armas de fuego reglamentadas la fabricación, comercialización o reunión de…?",
        options: ["A. Cinco o más de dichas armas aun cuando se hallen en piezas desmontadas.", 
        "B. Más de cinco armas, aun cuando se hallen en piezas desmontadas.", 
        "C. Ninguna de las respuestas es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Si atendemos a la costumbre como una fuente del ordenamiento jurídico diríamos que esta es:",
        options: ["A. Una fuente formal y primaria.", 
        "B. Una fuente material y primaria.", 
        "C. Una fuente formal y secundaria."],
        correctAnswer: "C"
    },
    {
        question: "Al lenguaje creado especialmente para introducir datos y modificar los contenidos de las bases de datos se le denomina:",
        options: ["A. SQL.", "B. SLQ.", "C. LQS."],
        correctAnswer: "A"
    },
    {
        question: "El elemento fundamental de la seguridad pasiva en vehículos tipo turismo es:",
        options: ["A. El chasis.", "B. El cinturón de seguridad.", "C. El ABS."],
        correctAnswer: "B"
    },
    {
        question: "El tipo básico de las coacciones se regula en el artículo 172.1 CP y se establece de la siguiente manera:",
        options: ["A. 'El que sin estar legítimamente autorizado impidiere a otro hacer lo que la ley no prohíbe o le compeliere a efectuar lo que no quiere, será castigado con la pena de prisión de seis meses a tres años o con multa de doce a veinticuatro meses, según la gravedad de la coacción o de los medios empleados.'", 
        "B. 'El que sin estar legítimamente autorizado impidiere a otro hacer lo que la ley no prohíbe o le compeliere a efectuar lo que no quiere, será castigado con la pena de prisión de seis meses a tres años o con multa de doce a veinticuatro meses.'", 
        "C. 'El que sin estar legítimamente autorizado impidiere o con violencia hacer lo que la ley no prohíbe o le compeliere a efectuar lo que no quiere, será castigado con la pena de prisión de seis meses a tres años o con multa de doce a veinticuatro meses, según la gravedad de la coacción o de los medios empleados.'"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál podríamos catalogar como el cuarto pilar del desarrollo sostenible, promovido por la ONU como integrador?",
        options: ["A. Pilar Ecológico.", "B. Pilar Económico.", "C. Pilar Cultural."],
        correctAnswer: "C"
    },
    {
        question: "Las medidas de seguridad ante o postdelictuales, son contrarias a qué principios:",
        options: ["A. Al principio de culpabilidad y a la presunción de inocencia.", 
        "B. Al principio de tipicidad y principio de antijuridicidad.", 
        "C. Dichas medidas se adoptan para evitar la comisión de hechos delictivos."],
        correctAnswer: "A"
    },
    {
        question: "La Oficina de Extranjería en la provincia en la que esté fijado el domicilio del menor iniciará el procedimiento relativo a la autorización de residencia una vez haya quedado acreditada la imposibilidad de repatriación del menor:",
        options: ["A. De oficio.", "B. De oficio o a instancia de parte.", "C. De oficio, por orden superior o a instancia de parte."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué psicólogo mantuvo la tesis de que la conducta del individuo se ve influenciada por la experiencia?:",
        options: ["A. Theodore NEWCOMB.", "B. Vander ZANDEN.", "C. Gordon ALLPORT."],
        correctAnswer: "C"
    },
    {
        question: "El artículo 20, Asistencia jurídica, de la Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género, contiene la siguiente redacción:",
        options: ["A. 'Las víctimas de violencia de género tienen derecho a recibir asesoramiento jurídico gratuito en el momento inmediatamente previo a la interposición de la denuncia, y a la defensa y representación gratuitas por abogado y procurador en todos los procesos y procedimientos administrativos que tengan causa directa o indirecta en la violencia padecida.'", 
        "B. 'Las víctimas de violencia de género tienen derecho a recibir asesoramiento jurídico gratuito en el momento de la interposición de la denuncia, y a la defensa y representación gratuitas por abogado y procurador en todos los procesos y procedimientos administrativos que tengan causa directa o indirecta en la violencia padecida.'", 
        "C. 'Las víctimas de violencia de género tienen derecho a recibir asesoramiento jurídico gratuito en el momento que sea solicitado por la víctima durante la interposición de la denuncia, y a la defensa y representación gratuitas por abogado y procurador en todos los procesos y procedimientos administrativos que tengan causa directa o indirecta en la violencia padecida.'"],
        correctAnswer: "A"
    },
    {
        question: "Los funcionarios que continúen desempeñando sus cargos bajo el mando de los alzados o que, sin habérseles admitido la renuncia de su empleo, lo abandonen cuando haya peligro de rebelión, incurrirán en la pena de:",
        options: ["A. Inhabilitación absoluta para empleo o cargo público.", 
        "B. Inhabilitación especial para empleo o cargo público.", 
        "C. Ninguna de las respuestas es correcta."],
        correctAnswer: "B"
    },
    {
        question: "La autorización para la interceptación de las comunicaciones telefónicas y telemáticas solo podrá ser concedida cuando la investigación tenga por objeto alguno de los delitos establecidos por la Ley de Enjuiciamiento Criminal. La duración máxima inicial de la intervención, que se computará desde la fecha de autorización judicial, será de:",
        options: ["A. Tres meses, prorrogables por periodos sucesivos de igual duración hasta el plazo máximo de dieciocho meses.", 
        "B. Tres meses, prorrogables por periodos iguales o inferiores hasta el plazo máximo de dieciocho meses.", 
        "C. Un mes, prorrogables por periodos sucesivos de igual duración hasta el plazo máximo de dieciocho meses."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de los siguientes es uno de los diecisiete objetivos de desarrollo sostenible de Naciones Unidas, recogidos en la Agenda 2030?",
        options: ["A. Acción por el Clima.", "B. Energía asequible y no contaminante.", "C. Educación en el voluntariado."],
        correctAnswer: "C"
    },
    {
        question: "En la tutela y la regencia es preciso ser español y mayor de edad. ¿Qué las diferencia?",
        options: ["A. La regencia la tiene que ejercer un español de nacimiento y mayor de edad, haciendo las veces de Rey.", 
        "B. Para ejercer la regencia y la tutela es preciso ser español de nacimiento y mayor de edad, ya que hace las veces de Rey y la tutela corresponde a la esfera privada del rey menor, la defensa de su integridad, de sus bienes, y el cuidado de su enseñanza y educación.", 
        "C. Para ejercer la tutela es necesario ser español de nacimiento y mayor de edad, corresponde a la esfera privada del rey menor, la defensa de su integridad, de sus bienes y el cuidado de su enseñanza y educación."],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta INCORRECTA, Serán obligaciones de los solicitantes de protección internacional:",
        options: ["A. Cooperar con las autoridades españolas en el procedimiento para la concesión de protección internacional.", 
        "B. Presentar, lo antes posible, todos aquellos elementos que, junto a su propia declaración, contribuyan a fundamentar su solicitud.", 
        "C. Informar sobre su domicilio en el extranjero."],
        correctAnswer: "C"
    },
    {
        question: "Un servidor DNS asigna:",
        options: ["A. Las direcciones IP de una red.", 
        "B. El nombre de un dominio a una IP.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Señale cual de las siguientes medidas no queda establecida por la Ley 4/2015 del Estatuto de las Víctimas del delito para adoptar durante la Fase de enjuiciamiento:",
        options: ["A. Que se les reciba declaración en dependencias especialmente concebidas o adaptadas a tal fin.", 
        "B. Que se les reciba declaración por profesionales que hayan recibido una formación especial para reducir o limitar perjuicios a la víctima, o con su ayuda.", 
        "C. Que todas las tomas de declaración a una misma victima le sean realizadas por la misma persona, salvo que ello pueda perjudicar de forma relevante el desarrollo del proceso o deba tomarse la declaración directamente por un Juez o un Fiscal."],
        correctAnswer: "B"
    },
    {
        question: "La principal función de la tilde es señalar que la sílaba de la que forma parte la vocal sobre la que se escribe se pronuncia con acento:",
        options: ["A. Prosódico.", 
        "B. Diacrítico.", 
        "C. Gráfico."],
        correctAnswer: "A"
    },
    {
        question: "Alexia recibe una llamada telefónica en la que se le amenaza con causarle la muerte cuando salga de su domicilio. La persona que realiza tal llamada la hace en nombre de una entidad. Nos encontramos aquí ante un caso de:",
        options: ["A. Amenazas graves puras agravadas porque se ha realizado por teléfono y también en nombre de una entidad.", 
        "B. Amenazas graves puras agravadas porque se ha realizado por teléfono.", 
        "C. Amenazas graves puras en su tipo básico."],
        correctAnswer: "C"
    },
    {
        question: "En la disposición derogatoria de la constitución que se menciona:",
        options: ["A. Que quedan derogadas todas las leyes anteriores a la constitución por carecer de valor democrático.", 
        "B. Que quedan derogadas todas las leyes fundamentales y disposiciones que se opongan a lo establecido en esta Constitución.", 
        "C. Al tratarse de una constitución no se menciona ninguna disposición derogatoria."],
        correctAnswer: "B"
    },
    {
        question: "¿Para quién la globalización es un proceso de universalización, de 'occidentalización' (o, incluso, de 'americanización') y de imperialismo de las estrategias neoliberales, que afecta e impera en todos los ámbitos de nuestra vida?",
        options: ["A. Guillermo de la Dehesa.", 
        "B. E. Durkheim.", 
        "C. Maria José Fariñas Dulce."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué plazo se ha de elevar a la Delegación del Gobierno o Subdelegación de la provincia donde se hubiere realizado la identificación de una víctima de trata de seres humanos la propuesta sobre la concesión de un periodo de restablecimiento y reflexión?",
        options: ["A. 24 horas.", 
        "B. 48 horas.", 
        "C. 72 horas."],
        correctAnswer: "B"
    },
    {
        question: "Por Orden del titular del Ministerio de la Presidencia, Relaciones con las Cortes y Memoria Democrática, a propuesta de los titulares de los Ministerios del Interior, de Inclusión Seguridad Social y Migraciones, y de Trabajo y Economía Social y previo informe de la Comisión Laboral Tripartita de Inmigración, se podrá determinar la aplicación de la situación nacional de empleo a las solicitudes de autorización de residencia temporal por razones de:",
        options: ["A. Arraigo laboral.", 
        "B. Arraigo social.", 
        "C. Arraigo familiar."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué órgano de Naciones Unidas se encarga de realizar un Examen Periódico Universal sobre el cumplimiento por cada Estado miembro de las obligaciones y compromisos adquiridos en materia de Derechos Humanos?",
        options: ["A. Comité de Derechos Humanos.", 
        "B. Consejo de Derechos Humanos.", 
        "C. Alto Comisionado de Derechos Humanos."],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. El agua que se botaba en el baño alago la casa.", 
        "B. El agua que se botaba en el baño halago la casa.", 
        "C. El agua que se botaba en el baño alargó la casa."],
        correctAnswer: "A"
    },
    {
        question: "La globalización se caracteriza:",
        options: ["A. La defensa del libre comercio.", 
        "B. Marvinismo social.", 
        "C. Ambas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "El asesinato será castigado con pena de prisión permanente revisable cuando:",
        options: ["A. La víctima sea menor de 16 años de edad, o se trate de una persona especialmente vulnerable por razón de su edad, enfermedad o discapacidad.", 
        "B. El hecho fuera anterior a un delito contra la libertad sexual que el autor hubiera cometido sobre la víctima.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "El tratamiento de datos personales solo podrá considerarse fundado en el cumplimiento de una misión realizada en interés público:",
        options: ["A. Cuando derive de una competencia atribuida por una norma con rango de ley.", 
        "B. Cuando así lo prevea una norma de Derecho de la Unión Europea o una norma con rango de ley.", 
        "C. Cuando así lo prevea una norma de Derecho de la Unión Europea."],
        correctAnswer: "B"
    },
    {
        question: "En el protocolo IPV6 el sistema numérico es:",
        options: ["A. Hexadecimal.", 
        "B. Decimal.", 
        "C. Hasta el 9."],
        correctAnswer: "A"
    },
    {
        question: "El ejercicio de la potestad sancionadora por la comisión de las infracciones administrativas previstas en la Ley Orgánica 4/2000, de 11 de enero establece que, si no pertenecen a un tercero no responsable de la infracción, en el supuesto de inmigración clandestina, serán objeto de decomiso los vehículos, embarcaciones, aeronaves, y cuantos bienes muebles o inmuebles, de cualquier naturaleza que sean, hayan servido de instrumento para la comisión de la citada infracción. A fin de garantizar la efectividad estos podrán ser aprehendidos y, desde las primeras intervenciones serán puestos a disposición de:",
        options: ["A. La autoridad gubernativa.", 
        "B. La autoridad judicial.", 
        "C. La autoridad gubernativa o la autoridad judicial."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién tendrá capacidad para obligar a una empresa a constituir un servicio propio de prevención debido a la peligrosidad de la actividad desarrollada o de la frecuencia o gravedad de la siniestralidad en la empresa?",
        options: ["A. La Comisión Nacional de Seguridad y Salud en el Trabajo.", 
        "B. La Inspección de Trabajo y Seguridad Social y, en su caso, de los órganos técnicos en materia preventiva de las Comunidades Autónomas.", 
        "C. La autoridad laboral."],
        correctAnswer: "C"
    },
    {
        question: "Solo han sido sometidos a reforma constitucional 2 artículos. ¿Cuál de los siguientes han sido reformados?",
        options: ["A. El 9 y el 17.", 
        "B. El 13 y el 135.", 
        "C. El 13 y el 154."],
        correctAnswer: "B"
    },
    {
        question: "La seguridad que se centra en que el accidente nunca llegue a sucederse, implementando con su uso las capacidades del conductor para igualarlas a las exigencias de la carretera, es conocida como:",
        options: ["A. Seguridad Pasiva.", 
        "B. Seguridad Terciaria.", 
        "C. Seguridad Activa."],
        correctAnswer: "C"
    },
    {
        question: "La prórroga de estancia podrá ser concedida por:",
        options: ["A. Los Subdelegados del Gobierno y por los Delegados del Gobierno en las Comunidades Autónomas uniprovinciales.", 
        "B. Por el Comisario General de Extranjería y Fronteras de la Dirección General de la Policía.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "¿La teoría de qué autor dio lugar a la identificación delictiva antropométrica?",
        options: ["A. Sheldon.", 
        "B. Bertillon.", 
        "C. Krestcher."],
        correctAnswer: "B"
    },
    {
        question: "Tal como indica el articulado de la Ley 12/2009, de 30 de octubre, reguladora del derecho de asilo y de la protección subsidiaria no es una causa de exclusión de la Protección Subsidiaria:",
        options: ["A. Han cometido fuera del país de protección antes de ser admitidas como beneficiarias de la protección subsidiaria, es decir, antes de la expedición de la autorización de residencia basada en el reconocimiento de la condición de beneficiario de protección subsidiaria, un delito grave, entendiéndose por tal los que lo sean conforme al Código Penal español.", 
        "B. Las personas a quienes las autoridades competentes del país donde hayan fijado su residencia les hayan reconocido los derechos y obligaciones que son inherentes a la posesión de la nacionalidad de tal país, derechos y obligaciones equivalentes a ellos.", 
        "C. Constituyen un peligro para la seguridad interior o exterior de España o para el orden público."],
        correctAnswer: "B"
    },
    {
        question: "Según la Estrategia Nacional de Ciberseguridad 2019, aprobada por el Consejo de Seguridad Nacional, las ciberamenazas son:",
        options: ["A. El conjunto de actividades ilícitas cometidas en el ciberespacio que tiene por objeto los elementos, sistemas informáticos o cualesquiera otros bienes jurídicos, siempre que en su planificación y ejecución resulte determinante la utilización de herramientas tecnológicas.", 
        "B. Las actividades ilícitas que usan la conectividad y la mayor dependencia de las redes para generar vulnerabilidades y atacarlas para subvertir la protección de la información.", 
        "C. Todas aquellas disrupciones o manipulaciones maliciosas que afectan a elementos tecnológicos."],
        correctAnswer: "C"
    },
    {
        question: "El tercer escalón de la pirámide de las necesidades de Abraham Maslow se denomina:",
        options: ["A. Reconocimiento.", 
        "B. Seguridad.", 
        "C. Afiliación."],
        correctAnswer: "C"
    },
    {
        question: "Atendiendo al crecimiento que han sufrido las grandes ciudades, ¿qué conocemos por el conjunto de áreas metropolitanas, cuyo crecimiento urbano acelerado lleva al contacto del área de influencia de una con las otras?",
        options: ["A. Metrópoli.", 
        "B. Megalópolis.", 
        "C. Yuxtaposición."],
        correctAnswer: "B"
    },
    {
        question: "José Luis dentro de un establecimiento comercial coge un reloj valorado en 254 euros, le quita la alarma que va adosada al mismo objeto y sin ánimo de lucro se lo lleva, sin salir del establecimiento y una vez en un determinado pasillo, lanza violentamente el reloj contra el suelo con ánimo de romperlo como protesta por la política ambiental del establecimiento. José Luis respondería de:",
        options: ["A. Delito leve de hurto agravado.", 
        "B. Delito de hurto por inutilización de elementos de guarda.", 
        "C. Ninguna de las anteriores."],
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de los siguientes no es uno de los ámbitos establecidos para las cláusulas freno:",
        options: ["A. Las medidas de coordinación de los regímenes de seguridad social de los trabajadores migrantes.", 
        "B. El establecimiento de normas comunes para determinadas infracciones penales.", 
        "C. La cooperación policial."],
        correctAnswer: "C"
    },
    {
        question: "El COSI es:",
        options: ["A. Un Grupo de Contacto de la Comisión Europea para la recopilación y evaluación de la estadística criminal en los Estados miembros.", 
        "B. Un sistema de Inteligencia para la Coordinación Operativa establecido en el Tratado de Lisboa y de aplicación en los Estados miembros, coordinado por la Comisión Europea.", 
        "C. Un Comité Permanente del Consejo recogido en el Tratado de Funcionamiento de la Unión Europea."],
        correctAnswer: "C"
    },
    {
        question: "La Comisión Nacional de Seguridad y Salud en el Trabajo funcionará en:",
        options: ["A. Pleno, en Comisión Permanente o en Comités.", 
        "B. Pleno, en Comisión Permanente o en Grupos de Trabajo.", 
        "C. Pleno, en Comisión Permanente o en Secciones."],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta incorrecta en relación al delito de riña tumultuaria:",
        options: ["A. El sujeto pasivo será cualquier persona que, sea como contendiente o como pacificador, se haya puesto en peligro su vida o integridad personal, aunque se encontrase en una posición externa a la riña.", 
        "B. Se considera sujeto activo solo aquel o aquellos que además de participar en la riña hagan uso de los instrumentos o medios peligrosos.", 
        "C. Es necesario que existan más de 2 sujetos, aunque no existan bandos, y esa riña tiene que ser confusa y caótica de todos contra todos."],
        correctAnswer: "A"
    },
    {
        question: "Si un particular detiene a quien le intenta robar la cartera y lo entrega a la autoridad:",
        options: ["A. No comete ningún delito.", 
        "B. Comete un delito de detención ilegal.", 
        "C. Comete un delito de detención ilegal atenuado."],
        correctAnswer: "A"
    },
    {
        question: "De acuerdo con el censo de electores de cada escala para representantes en el consejo de la policía, si existen 5003 electores se designarán:",
        options: ["A. 6 delegados.", 
        "B. 7 delegados.", 
        "C. 8 delegados."],
        correctAnswer: "A"
    },
    {
        question: "Luis, anciano afecto de Alzheimer no es capaz de reconocer a nadie de su familia ni llevar las cuentas de sus gastos de manutención, por ello:",
        options: ["A. Carece de capacidad jurídica.", 
        "B. Carece de capacidad de obrar.", 
        "C. Tiene plena capacidad de obrar."],
        correctAnswer: "B"
    },
    {
        question: "¿De los siguientes, qué personal no se rige por legislación específica propia y sí por el estatuto básico del empleado público?",
        options: ["A. Personal del Centro Nacional de Inteligencia.", "B. El personal docente y el personal estatutario de los Servicios de Salud.", "C. Personal del Banco de España y Fondos de Garantía de Depósitos en Entidades de Crédito."],
        correctAnswer: "B"
    },
    {
        question: "La proyección de haces de luz, mediante cualquier tipo de dispositivo, sobre los pilotos o conductores de medios de transporte que puedan deslumbrarles o distraer su atención y provocar accidentes, es:",
        options: ["A. Infracción muy grave.", "B. Infracción grave.", "C. Infracción leve."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué personaje de los que se citan es conocido como 'El gurú de Seattle'?",
        options: ["A. John Zerzan.", "B. José Bové.", "C. Bernard Cassen."],
        correctAnswer: "A"
    },
    {
        question: "¿Podrán los alcaldes imponer sanciones según lo previsto en la Ley Orgánica Protección a la Seguridad Ciudadana?",
        options: ["A. No, en ningún caso.", "B. Sí, aunque solo las de carácter leve.", "C. Sí, siempre que afecten a bienes de titularidad local o se cometieran en espacios públicos municipales."],
        correctAnswer: "C"
    },
    {
        question: "Fidel es un extranjero que acredita su permanencia continuada en territorio español durante un periodo de cuatro años. Cuenta con un contrato de trabajo firmado por él mismo y un empresario para un periodo de un año, no constan antecedentes penales de él en España, ni en su país de origen ni en el país donde haya residido en los últimos cinco años y, además, acredita tener vínculos familiares con otros extranjeros residentes en España, ¿podrá solicitar autorización de residencia temporal por arraigo?",
        options: ["A. Familiar.", "B. Laboral.", "C. Social."],
        correctAnswer: "C"
    },
    {
        question: "¿A quién le corresponde promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integra sean reales y efectivas; remover los obstáculos que impidan o dificulten su plenitud y facilitar la participación de todos los ciudadanos en la vida política, económica, cultural y social?",
        options: ["A. Al Gobierno del Estado español y a los diferentes gobiernos de las comunidades autónomas.", "B. A las Cortes Generales, al gobierno de España y al Jefe del Estado.", "C. A todos los poderes públicos."],
        correctAnswer: "C"
    },
    {
        question: "Se conoce como zona crítica a:",
        options: ["A. Aquella zona geográfica continua donde estén establecidas varias infraestructuras críticas a cargo de operadores diferentes e interdependientes, que sea declarada como tal por la Autoridad competente. La declaración de una zona crítica tendrá por objeto facilitar la mejor protección y una mayor coordinación entre los diferentes operadores titulares de infraestructuras críticas o infraestructuras críticas europeas radicadas en un sector geográfico reducido, así como con las Fuerzas y Cuerpos de Seguridad del Estado y las Policías Locales de carácter integral.", "B. Aquella zona geográfica continua donde estén establecidas varias infraestructuras críticas a cargo de operadores diferentes e interdependientes, que sea declarada como tal por la Autoridad competente. La declaración de una zona crítica tendrá por objeto facilitar la mejor protección y una mayor coordinación entre los diferentes operadores titulares de infraestructuras críticas o infraestructuras críticas europeas radicadas en un sector geográfico reducido, así como con las Fuerzas y Cuerpos de Seguridad del Estado y las Policías Autonómicas de carácter integral.", "C. Aquella zona geográfica continua donde estén establecidas varias infraestructuras críticas a cargo de operadores diferentes y dependientes, que sea declarada como tal por la Autoridad competente. La declaración de una zona crítica tendrá por objeto facilitar la mejor protección y una mayor coordinación entre los diferentes operadores titulares de infraestructuras críticas o infraestructuras críticas europeas radicadas en un sector geográfico reducido, así como con las Fuerzas y Cuerpos de Seguridad del Estado y las Policías Autonómicas de carácter integral."],
        correctAnswer: "B"
    },
    {
        question: "Circunstancias como el frenado, la suspensión y la dirección del vehículo, el trazado y el mal estado del firme de la vía, los fenómenos atmosféricos, los relativos a la persona, etc., son causas:",
        options: ["A. Mediatas.", "B. Inmediatas.", "C. Directas."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué límites tienen las libertades reconocidas en la Declaración Universal de los Derechos Humanos?",
        options: ["A. El derecho ajeno.", "B. El bienestar, la moral y el orden público.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Un software malicioso que encripta los archivos en el ordenador infectado, por lo tanto impide al propietario que acceda a ellos:",
        options: ["A. Pharming.", "B. Ransomware.", "C. Skimming."],
        correctAnswer: "B"
    },
    {
        question: "La orden europea de detención y entrega se tramitará y ejecutará con carácter de urgencia. Si no media consentimiento, el plazo máximo para adoptar una resolución firme será:",
        options: ["A. De sesenta días desde que se produjera la detención.", "B. De treinta días desde que se produjera la detención.", "C. De noventa días desde que se produjera la detención."],
        correctAnswer: "A"
    },
    {
        question: "Según el Artículo 103 de la constitución, la ley regulará el estatuto de los funcionarios públicos, el acceso a la función pública de acuerdo con qué principios?",
        options: ["A. De mérito, capacidad y antigüedad.", "B. De desconcentración y descentralización.", "C. De mérito y capacidad."],
        correctAnswer: "C"
    },
    {
        question: "Un hub es:",
        options: ["A. Un switch.", "B. Un concentrador.", "C. Un tipo de cable de red."],
        correctAnswer: "B"
    },
    {
        question: "El ACNUR tiene su sede en:",
        options: ["A. Suiza.", "B. Suecia.", "C. Nueva York."],
        correctAnswer: "A"
    },
    {
        question: "La señal V-1 será visible a:",
        options: ["A. Una distancia máxima de 50 metros.", "B. Una distancia mínima de 50 metros.", "C. Una distancia mínima de 50 metros, solo si es de color azul."],
        correctAnswer: "B"
    },
    {
        question: "Cuando entre varios existe la decisión conjunta de realizar un hecho delictivo, aportando cada uno una contribución a la acción que, por su importancia, resulte cualificada para el resultado y vaya más allá de la acción preparatoria; con una concurrencia de intervenciones en la fase de ejecución del delito, nos estamos refiriendo a:",
        options: ["A. Conspiración.", "B. Cooperación necesaria.", "C. Coautoría."],
        correctAnswer: "C"
    },
    {
        question: "Para la evaluación de la fuente en el ciclo de la inteligencia policial, se utilizan una serie de códigos alfabéticos, a saber:",
        options: ["A. A, B, C y X.", "B. A, B, C y D.", "C. Ninguna es correcta."],
        correctAnswer: "A"
    },
    {
        question: "La restitución de un vehículo a motor sustraído previamente con intención de usarlo ha de ser:",
        options: ["A. Directa o indirecta.", "B. Solo directa.", "C. Preferiblemente indirecta."],
        correctAnswer: "A"
    },
    {
        question: "Órgano colegiado asesor de las Administraciones públicas en la formulación de las políticas de prevención y órgano de participación institucional en materia de seguridad y salud en el trabajo:",
        options: ["A. Comisión Nacional de Seguridad y Salud en el Trabajo.", "B. Inspección de Trabajo y Seguridad Social.", "C. Instituto Nacional de Seguridad y Salud en el Trabajo."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué nombre reciben los movimientos sociales formados por activistas provenientes de distintas corrientes políticas, que a finales del siglo XX convergieron en la crítica social al proceso de globalización?",
        options: ["A. Altermundismo.", "B. Alterglobalización.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El derecho al trabajo se reconoce en:",
        options: ["A. El Convenio Europeo de Derechos Humanos.", "B. La Carta Social Europea.", "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Señale la alternativa de respuesta correcta: El Sistema de Seguimiento Integral de los casos de violencia de género (VioGen):",
        options: ["A. Asignará automáticamente uno de los siguientes niveles: «no apreciado», «bajo», «medio», «alto» o «extremo», pudiendo ser modificados al alza por apreciaciones de los agentes.", "B. Asignará automáticamente uno de los siguientes niveles: «no apreciado», «bajo», «medio», «alto» o «extremos», pudiendo ser modificados por apreciaciones de los agentes.", "C. Asignará automáticamente uno de los siguientes niveles: «no apreciado», «bajo», «medio», «alto» o «extremos», no pudiendo ser modificados por apreciaciones de los agentes."],
        correctAnswer: "A"
    },
    {
        question: "La prevención se convierte por primera vez en disciplina científica a principios del siglo XX. ¿Bajo qué denominación?",
        options: ["A. Seguridad e Higiene en el Trabajo.", "B. Seguridad y Salud en el Trabajo.", "C. Salud e Higiene en el Trabajo."],
        correctAnswer: "A"
    },
    {
        question: "Las normas integrantes del derecho están sujetas al principio de jerarquía normativa, que se encuentra reconocido y garantizado en:",
        options: ["A. Artículo 9.2 CE.", "B. Artículo 9.1 CE.", "C. Artículo 0.3 CE."],
        correctAnswer: "C"
    },
    {
        question: "¿Podría un vehículo NO uniformado de la Policía Nacional llevar puesta la pegatina distintiva de haber pasado la ITV, señal V-197?",
        options: ["A. No puede llevarla.", "B. Sí puede llevarla, aunque está exenta de su uso.", "C. Está obligado a llevarla, estando exento de su uso los vehículos rotulados."],
        correctAnswer: "B"
    },
    {
        question: "Se considera estafa hiper agravada:",
        options: ["A. Si la defraudación supera los 50,000 euros.", "B. Si supera los 180,000 euros y se impondrá la misma pena si coinciden las circunstancias 4ª, 5ª, 6ª y 7ª.", "C. La anterior es correcta si bien la cuantía es superior a los 250,000 euros."],
        correctAnswer: "C"
    },
    {
        question: "Cuando alguien llama y se presenta falsamente como representante de tu banco y pregunta por los datos de tu cuenta o los datos de su tarjeta de crédito, usted es víctima de:",
        options: ["A. Spoofing telefónico.", "B. Phishing telefónico.", "C. Skimming telefónico."],
        correctAnswer: "A"
    },
    {
        question: "Las Fuerzas y Cuerpos de Seguridad podrán facilitar al personal de seguridad privada, en el ejercicio de sus funciones, informaciones que faciliten su evaluación de riesgos y consiguiente implementación de medidas de protección. Si estas informaciones contuvieran datos de carácter personal:",
        options: ["A. Sólo podrán facilitarse en caso de peligro real para la seguridad privada o para evitar la comisión de sanciones penales.", "B. Sólo podrán facilitarse en caso de peligro real para la seguridad pública o para evitar la comisión de infracciones penales.", "C. Sólo podrán facilitarse en caso de peligro real para la seguridad privada o para evitar la comisión de infracciones penales."],
        correctAnswer: "B"
    },
    {
        question: "El particular que detiene por error a una persona creyendo que está amparado por una causa de justificación:",
        options: ["A. No responderá penalmente puesto que se trata de un error vencible de tipo, que, según el art 14.1 CP, determina la aplicación del tipo imprudente inexistente en este delito.", "B. Responderá penalmente por el tipo atenuado del art 163.4 CP, siempre que la detención se practique dentro de los casos permitidos por la ley.", "C. Responderá penalmente por el tipo atenuado del art 163.4 CP, siempre que actuando fuera de los casos permitidos por la ley tenga la intención de presentarlo inmediatamente a la autoridad."],
        correctAnswer: "C"
    },
    {
        question: "Los actos dictados por el Rey, sin necesidad de propuesta ni refrendo ministerial, se denominan:",
        options: ["A. Actos de prerrogativa.", "B. Actos delegados.", "C. Actos prerefrendados."],
        correctAnswer: "A"
    },
    {
        question: "En términos ortográficos de la oración, ¿cuál no se considera un signo auxiliar?",
        options: ["A. El guión.", "B. Paréntesis.", "C. La llave."],
        correctAnswer: "B"
    },
    {
        question: "¿A qué equivale la Carta de Turín?",
        options: ["A. Al Pacto Internacional de Derechos Sociales, Económicos y Culturales.", "B. Al Pacto Internacional de Derechos Civiles y Políticos.", "C. A la Carta de Naciones Unidas."],
        correctAnswer: "A"
    },
    {
        question: "Simular la relación laboral con un extranjero, cuando dicha conducta se realice con ánimo de lucro o con el propósito de obtener indebidamente derechos, siempre que tales hechos no constituyan delito es una infracción:",
        options: ["A. Muy grave.", "B. Grave.", "C. Leve."],
        correctAnswer: "A"
    },
    {
        question: "El Consejo de Ministros podrá avocar para sí, a propuesta del Presidente del Gobierno, el conocimiento de un asunto cuya decisión corresponda a las Comisiones Delegadas del Gobierno. Contra el acuerdo de avocación:",
        options: ["A. Cabrá recurso contencioso-administrativo.", "B. Cabrá recurso potestativo de reposición.", "C. No cabrá recurso."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué grupo se encuadran los agentes biológicos dentro del cuadro de enfermedades profesionales establecido por el RD 1299/2006 de 10 de noviembre?",
        options: ["A. Grupo 2.", "B. Grupo 3.", "C. Grupo 4."],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta:",
        options: ["A. El valor es posterior al juicio de valor.", 
        "B. El valor es anterior al juicio de valor.", 
        "C. El juicio de valor es independiente del valor."],
        correctAnswer: "B"
    },
    {
        question: "Señale la opción correcta:",
        options: ["A. La Comisión presentará al Parlamento Europeo y al Consejo, anualmente, un informe sobre el funcionamiento del espacio sin controles fronterizos en las fronteras interiores. Dicho informe incluirá una lista de todas las decisiones de restablecimiento de los controles fronterizos en las fronteras interiores que se hayan adoptado durante el año de que se trate.", 
        "B. La Comisión presentará al Parlamento Europeo y al Consejo, al menos anualmente, un informe sobre el funcionamiento del espacio sin controles fronterizos en las fronteras interiores. Dicho informe incluirá una lista de todas las decisiones de restablecimiento de los controles fronterizos en las fronteras interiores que se hayan adoptado durante el año de que se trate.", 
        "C. La Comisión presentará al Parlamento Europeo y al Consejo, bienalmente, un informe sobre el funcionamiento del espacio sin controles fronterizos en las fronteras interiores. Dicho informe incluirá una lista de todas las decisiones de restablecimiento de los controles fronterizos en las fronteras interiores que se hayan adoptado durante el año de que se trate."],
        correctAnswer: "B"
    },
    {
        question: "Tal como establece el artículo 4 de la Ley 4/2015 del Estatuto de las Víctimas del Delito, todas las comunicaciones con las víctimas, orales o escritas, se harán en un lenguaje:",
        options: ["A. Claro, sencillo y accesible.", 
        "B. Claro, sencillo y asequible.", 
        "C. Claro, sencillo y comprensible."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo de tratados necesitan para su integración en el ordenamiento jurídico español la aprobación de una ley orgánica?",
        options: ["A. Los Tratados Ordinarios que necesitan previa aprobación por las Cortes.", 
        "B. Los Tratados Extraordinarios que sean inconstitucionales.", 
        "C. Los Tratados Extraordinarios que cedan el ejercicio de competencias atribuidas por la Constitución a organismos internacionales."],
        correctAnswer: "C"
    },
    {
        question: "¿Cómo se denomina el documento que publica la evaluación de amenazas contra la delincuencia organizada en Internet que afectan a los gobiernos, las empresas y los ciudadanos de la UE?",
        options: ["A. EURODAC.", 
        "B. IOCTA.", 
        "C. EUROPOL."],
        correctAnswer: "C"
    },
    {
        question: "La Declaración del Milenio propone:",
        options: ["A. Ocho objetivos principales, con dieciocho metas interrelacionadas y con sus correspondientes indicadores de logro.", 
        "B. Un acuerdo internacional sobre la aplicación de recursos al desarrollo.", 
        "C. Que los gobernantes de cada país en desarrollo decidan sus objetivos prioritarios, acordes con su propia cultura."],
        correctAnswer: "A"
    },
    {
        question: "La solidaridad, como valor social, es:",
        options: ["A. Un valor subjetivo.", 
        "B. Un valor objetivo.", 
        "C. Un valor intermedio."],
        correctAnswer: "B"
    },
    {
        question: "Rubén quiere sustraer dinero a su vecino Marcos pero le da pena asustarlo así que le invita a tomar café y le pone 3 mg de somnífero en el café. Cuando Marcos se duerme, Rubén le sustrae la cartera y un reloj Rolex. Según la doctrina, Rubén comete:",
        options: ["A. Hurto del tipo básico.", 
        "B. Hurto agravado por el uso de somníferos.", 
        "C. Robo con violencia, pues utiliza los somníferos para asegurarse la consumación del delito."],
        correctAnswer: "B"
    },           
    
];


let currentQuestions = [];
let correctAnswers = 0;
let wrongAnswers = 0;

document.getElementById('testButton').addEventListener('click', () => {
    const questionCount = parseInt(document.getElementById('questionCount').value);
    const selectedTopic = document.getElementById('topicSelect').value;

    if (selectedTopic === 'all') {
        currentQuestions = shuffle(questions).slice(0, questionCount);
    } else {
        const filteredQuestions = questions.filter(q => q.topic === parseInt(selectedTopic));
        currentQuestions = shuffle(filteredQuestions).slice(0, questionCount);
    }

    correctAnswers = 0;
    wrongAnswers = 0;
    displayTest();
    hideAllSections();
    document.getElementById('testSection').classList.remove('hidden');
});

document.getElementById('viewAllButton').addEventListener('click', () => {
    hideAllSections();
    displayAllQuestions();
    document.getElementById('allQuestionsSection').classList.remove('hidden');
});

document.getElementById('lastExamButton').addEventListener('click', () => {
    hideAllSections();
    currentQuestions = [...lastExamQuestions];
    correctAnswers = 0;
    wrongAnswers = 0;
    displayTest();
    document.getElementById('testSection').classList.remove('hidden');
});

function displayTest() {
    const testSection = document.getElementById('testSection');
    testSection.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map((option, i) => `<li data-question-index="${index}" data-option-index="${i}" class="option">${option}</li>`).join('')}
            </ul>
        `;
        testSection.appendChild(questionDiv);
    });

    testSection.classList.remove('hidden');
    document.querySelectorAll('#testSection ul li').forEach(li => {
        li.addEventListener('click', handleAnswerClick);
    });
}

function handleAnswerClick(event) {
    const questionIndex = event.target.getAttribute('data-question-index');
    const optionIndex = event.target.getAttribute('data-option-index');
    const question = currentQuestions[questionIndex];
    const selectedOption = question.options[optionIndex];

    const listItems = event.target.parentNode.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('correct', 'incorrect', 'default'));

    if (!event.target.classList.contains('selected')) {
        if (selectedOption.startsWith(question.correctAnswer)) {
            correctAnswers++;
            event.target.classList.add('correct');
        } else {
            wrongAnswers++;
            event.target.classList.add('incorrect');
            listItems.forEach(li => {
                if (li.textContent.startsWith(question.correctAnswer)) {
                    li.classList.add('correct');
                }
            });
        }

        listItems.forEach(li => {
            if (!li.classList.contains('correct') && !li.classList.contains('incorrect')) {
                li.classList.add('default');
            }
        });

        event.target.classList.add('selected'); // Marca la opción seleccionada como 'selected'
        listItems.forEach(li => li.removeEventListener('click', handleAnswerClick)); // Desactiva el resto de opciones
        calculateFinalScore();
    }
}

function calculateFinalScore() {
    const totalQuestions = currentQuestions.length;
    const score = ((correctAnswers - (wrongAnswers / 2)) / totalQuestions) * 10;
    const scoreSection = document.createElement('div');
    scoreSection.classList.add('note-section');
    scoreSection.textContent = `Nota final: ${score.toFixed(2)}`;
    const existingScoreSection = document.querySelector('.note-section');
    if (existingScoreSection) {
        existingScoreSection.remove();
    }
    document.querySelector('main').appendChild(scoreSection);
}

function displayAllQuestions() {
    const allQuestionsSection = document.getElementById('allQuestionsSection');
    allQuestionsSection.innerHTML = '';
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map(option => {
                    const isCorrect = option.startsWith(question.correctAnswer);
                    return `<li class="${isCorrect ? 'correct' : ''}">${option}</li>`;
                }).join('')}
            </ul>
        `;
        allQuestionsSection.appendChild(questionDiv);
    });

    allQuestionsSection.classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('testSection').classList.add('hidden');
    document.getElementById('allQuestionsSection').classList.add('hidden');
    document.getElementById('lastExamSection').classList.add('hidden');
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    const updateDate = document.getElementById('updateDate');
    const lastUpdated = '18 de agosto de 2024';  // Cambia esta fecha a la actual
    updateDate.textContent = lastUpdated;
});
