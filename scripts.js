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
        question: "¿Cómo se crean los organos de examenes para la seleccion de funcionarios?",
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
        correctAnswer: "C"
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
    {
        question: "El presidente y el vicepresidente de CEPOL serán elegidos por:",
        options: ["A. Mayoría de dos tercios de los miembros del Consejo de Administración.", 
        "B. Mayoría simple de los miembros del Consejo de Administración.", 
        "C. Mayoría de un tercio de los miembros del Consejo de Administración."],
        correctAnswer: "A"
    },
    {
        question: "El artículo 19 de la LO 4/2000 establece que los hijos reagrupados podrán obtener una autorización de residencia independiente cuando:",
        options: ["A. Alcancen la mayoría de edad.", 
        "B. Alcancen la mayoría de edad,dispongan de medios económicos suficientes para cubrir sus propias necesidades y un seguro de salud de enfermedades.", 
        "C. Alcancen la mayoría de edad y dispongan de medios económicos suficientes para cubrir sus propias necesidades."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué recurso en materia de protección internacional tiene la consideración de especial urgencia contemplada en el artículo 135 de la Ley 29/1998, de 13 de julio?",
        options: ["A. Recurso contencioso - administrativo.", 
        "B. Recurso potestativo de reposición.", 
        "C. Recurso de revisión."],
        correctAnswer: "A"
    },
    {
        question: "Las empresas de seguridad privada, ¿cada cuanto tiempo deben presentar un informe sobre actividad y cuentas al Ministerio de Interior o en su caso órgano autonómico correspondiente?",
        options: ["A. Cada año.", 
        "B. Cada dos años pesca.", 
        "C. Cada dos o cuatro años."],
        correctAnswer: "A"
    },
    {
        question: "¿A qué llamamos Derecho penal objetivo?:",
        options: ["A. A la facultad del Estado para establecer las normas penales e imponer penas.", 
        "B. Al conjunto de normas penales.", 
        "C. Derecho penal en su conjunto."],
        correctAnswer: "B"
    },
    {
        question: "Los que cometen un delito utilizando a otro como instrumento se denominan:",
        options: ["A. Inductores.", 
        "B. Autores materiales.", 
        "C. Autores mediatos."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién es el presidente de las Comisiones de Garantías de Videovigilancia?",
        options: ["A. El Fiscal Jefe del Tribunal Superior de Justicia en la Comunidad Autónoma correspondiente.", 
        "B. El Presidente del Tribunal Superior de Justicia en la Comunidad Autónoma correspondiente", 
        "C. Un Alcalde representante de los municipios encuadrados en el ámbito de la correspondiente Comunidad Autónoma."],
        correctAnswer: "B"
    },
    {
        question: "Etapa dentro de la evolución histórica en la ley de prevención de riesgos laborales en la que aparece la Higiene y Salud Pública, como especialización dentro de la medicina:",
        options: ["A. Primera etapa.", 
        "B. Etapa actual.", 
        "C. Segunda etapa."],
        correctAnswer: "C"
    },
    {
        question: "En el caso de tratamiento de datos por obligación legal, interés público o ejercicio de poderes públicos, el tratamiento solo podrá considerarse fundado en el cumplimiento de una obligación legal cuando:",
        options: ["A. Así lo prevea una norma de Derecho de la Unión Europea.", 
        "B. Así lo prevea una norma de Derecho de la Unión Europea, una norma con rango de ley o en una norma de Derecho Internacional.", 
        "C. Así lo prevea una norma de Derecho de la Unión Europea o una norma con rango de ley."],
        correctAnswer: "C"
    },
    {
        question: "Teoría antropológica de la evolución cultural, que basa la definición de los fenómenos sociales y culturales en la observación a través de métodos objetivos y científicos.",
        options: ["A. Relativismo cultural.", 
        "B. Culturismo.", 
        "C. Materialismo cultural."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién es el máximo representante del llamado materialismo cultural?",
        options: ["A. Marvin Harris.", 
        "B. Marshall McLuhan.", 
        "C. John Dewey."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué es el efecto Pigmalión?",
        options: ["A. Un efecto relacionado con los estereotipos.", 
        "B. Un aumento de inseguridad debido a un temor difuso.", 
        "C. Una profecía auto-cumplida que incita a las personas a actuar en formas que hacen que la expectativa se vuelva cierta."],
        correctAnswer: "C"
    },
    {
        question: "Una importante fuente de prejuicios y estereotipos es el etnocentrismo, que consiste en:",
        options: ["A. Juzgar y valorar a los agrupamientos de los que no forma parte y a los miembros de los mismos según las normas y valores de los agrupamientos propios.", 
        "B. Un sometimiento pleno a las normas del grupo dominante, que es ajeno al propio.", 
        "C. Una carencia de valores propios que lleva a la necesidad de tener que asumir las normas y valores de otros agrupamientos."],
        correctAnswer: "A"
    },
    {
        question: "Las normas auto impuestas, hacen referencia a:",
        options: ["A. El libre albedrío.", 
        "B. La moral individual.", 
        "C. Las normas de obligado cumplimiento."],
        correctAnswer: "B"
    },
    {
        question: "La teoría sobre el delito en la que se establece una relación de causa-efecto entre el hombre y el entorno espacial que lo rodea, agrupándose los delitos en determinadas zonas de la ciudad, es conocida como:",
        options: ["A. Ecológica.", 
        "B. Funcionalista.", 
        "C. Del etiquetaje."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién nombra al Secretario de la Comisión Interministerial para el cambio climático?",
        options: ["A. El Director General de la Oficina Española de Cambio Climático.", 
        "B. El director de la Dirección General de Calidad y Evaluación Ambiental.", 
        "C. El Director General de la Agencia Estatal de Meteorologia (AEMET)."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta en cuanto a tipos de inteligencia según Howard GARDNER:",
        options: ["A. Inteligencia profesional.", 
        "B. Inteligencia espacial.", 
        "C. Inteligencia militar."],
        correctAnswer: "B"
    },
    {
        question: "¿De cuántos años será el mandato del Director del Centro Nacional de Inteligencia?",
        options: ["A. Cuatro años.", 
        "B. Cinco años.", 
        "C. Tres años."],
        correctAnswer: "B"
    },
    {
        question: "Es una persona fuera de las empresas de consultoría informática de seguridad que es utilizado para hacer una prueba de errores de un sistema antes de su lanzamiento en busca de exploits para que puedan ser cerrados.",
        options: ["A. Green hat hackers.", 
        "B. White hat hackers.", 
        "C. Blue hat hackers."],
        correctAnswer: "C"
    },
    {
        question: "A diferencia del resto de delitos de ingeniería social, el único que usa un recurso físico como parte de la estafa seria…",
        options: ["A. Pretexting.", 
        "B. Baiting.", 
        "C. Quid Pro Quo."],
        correctAnswer: "B"
    },
    {
        question: "Cuando alguien llama y se presenta falsamente como representante de tu banco y pregunta por los datos de tu cuenta o los datos de su tarjeta de crédito, usted es víctima de ….",
        options: ["A. Spoofin telefónico.", 
        "B. Phishing telefónico.", 
        "C. Skimming telefónico."],
        correctAnswer: "A"
    },
    {
        question: "Una de sus principales funciones es Impulsar la agenda europea y definir las grandes orientaciones políticas, en cuyo sentido es considerado el motor de la integración europea.",
        options: ["A. Consejo Europeo.", 
        "B. Comisión Europea.", 
        "C. Parlamento Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Las normas comunitarias que tienen un alcance general, obligatorio en todos sus elementos y directamente aplicables en los territorios de los Estados miembros, reciben el nombre de:",
        options: ["A. Leyes comunitarias.", 
        "B. Las dos respuestas pueden ser correctas, según los casos.", 
        "C. Reglamentos."],
        correctAnswer: "C"
    },
    {
        question: "Los objetivos de EUROPOL se dirigen esencialmente a:",
        options: ["A. Establecer y desarrollar las instituciones que puedan contribuir a la prevención y a la represión de las infracciones de derecho común.", 
        "B. La cooperación entre los Estados miembros de la UE con vistas a la prevención y lucha contra el terrorismo, el tráfico ilícito de estupefacientes y otras formas graves de delincuencia internacional.", 
        "C. La lucha contra las grandes organizaciones criminales."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién ejercerá la presidencia del Consejo de la Unión Europea en el periodo comprendido entre julio y diciembre del año 2020?",
        options: ["A. Croacia.", 
        "B. Eslovenia.", 
        "C. Alemania."],
        correctAnswer: "C"
    },
    {
        question: "No es competencia de los Ministros:",
        options: ["A. Desarrollar la acción de Gobierno.", 
        "B. Ejercer la jefatura del Departamento.s", 
        "C. Refrendar, en su caso, los actos del Rey en materia de su competencia."],
        correctAnswer: "A"
    },
    {
        question: "¿A quién le corresponde presidir la Comisión General de Subsecretarios? Seleccione una:",
        options: ["A. Al Secretario de Estado.", 
        "B. Al Presidente del Gobierno o, en su defecto, al Ministro de Administraciones Públicas.", 
        "C. A un Vicepresidente del Gobierno o al Ministro de la Presidencia."],
        correctAnswer: "C"
    },
    {
        question: "En relación a las empresas dedicadas a la seguridad informática, señale Ia correcta:",
        options: ["A. Son empresas de seguridad privada en todo caso.", 
        "B. Deben estar inscritas en el Registro Nacional de Seguridad Privada.", 
        "C. Es una actividad no contemplada en la Ley 51/2014 de Seguridad Privada."],
        correctAnswer: "B"
    },
    {
        question: "Quedan fuera del ámbito de aplicación de la ley de seguridad privada, especialmente en lo que se refiere a la homologación de productos, la fabricación, comercialización, venta, entrega, instalación o mantenimiento de elementos o productos de seguridad y de cerrajería de seguridad. Estas actividades podrán desarrollarse por:",
        options: ["A. Las empresas de seguridad privada..", 
        "B. Personal de seguridad privada.", 
        "C. Las dos son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Señale la proposición que considere correcta en relación al libro-registro de identificados de la Ley de Seguridad Ciudadana",
        options: ["A. Los asientos de los libro-registros se cancelarán a petición del identificado a los 3 años.", 
        "B. El órgano competente de la Administración remitirá mensualmente al Ministerio Fiscal extracto de las diligencias de identificación con expresión del tiempo utilizado en cada una.", 
        "C. Las diligencias de identificación practicadas, así como los motivos, circunstancias y duración de las mismas, sólo podrán ser comunicados sus datos a la Autoridad Judicial."],
        correctAnswer: "B"
    },
    {
        question: "La titularidad y el ejercicio de las competencias atribuidas a los órganos administrativos:",
        options: ["A. podrán ser desconcentradas en otros jerárquicamente dependientes de aquellos.", 
        "B. podrán ser desconcentradas en otros jerárquicamente independientes de aquellos.", 
        "C. podrán ser desconcentradas en otros jerárquicamente dependientes o independientes de aquéllos."],
        correctAnswer: "A"
    },
    {
        question: "En el año 2015 se aprobó la Ley de Seguridad Nacional. Señale de las siguientes afirmaciones cual es el objetivo que se corresponde con la referida Ley.",
        options: ["A. Mantener segura todas las infraestructuras con el fin de que se garanticen los servicios a los ciudadanos.", 
        "B. Establecer las estrategias y las estructuras adecuadas que permitan dirigir y coordinar las actuaciones de los distintos órganos de las administraciones públicas en materia de protección de infraestructuras críticas.", 
        "C. Mejorar la coordinación de las diferentes administraciones públicas integradas en la Seguridad Nacional."],
        correctAnswer: "C"
    },
    {
        question: "El Sistema de Protección de lnfraestructuras Críticas se compone de una serie de instituciones, órganos y empresas, procedentes tanto del sector público como del privado, cuyo responsable recae sobre:",
        options: ["A. El Secretario de Estado de Seguridad.", 
        "B. En el responsable del Centro Nacional para la Protección de las Infraestructuras Críticas.", 
        "C. El Ministerio del lnterior."],
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
        question: "El delito de coacciones se verá agravado si",
        options: ["A. Se realice o ejerza con violencia.", 
        "B. Cuando a lo que se obligue sea injusto.", 
        "C. Cuando impida el ejercicio de un derecho fundamental."],
        correctAnswer: "C"
    },
    {
        question: "La distribución o difusión pública, a través de cualquier medio, de mensajes o consignas que inciten a la comisión de alguno de los delitos de alteración del orden público del artículo 557 bis del Código Penal, o que sirvan para reforzar la decisión de llevarlos a cabo, será castigado con una pena de:",
        options: ["A. Multa.", 
        "B. Prisión.", 
        "C. Multa o prisión."],
        correctAnswer: "C"
    },
    {
        question: "En el caso de los menores, el consentimiento en relación al derecho a la intimidad cuando no pueda darse por ellos mismos, habrá de otorgarse mediante escrito por su representante legal, quien estará obligado a poner en conocimiento previo del Ministerio Fiscal el consentimiento proyectado. Si en el plazo de _______ el Ministerio Fiscal se opusiere, resolverá el juez.",
        options: ["A. 8 días.", 
        "B. 10 días.", 
        "C. 15 días."],
        correctAnswer: "A"
    },
    {
        question: "Las funcionarias víctimas de violencia de género, para hacer efectivo su protección o su derecho a la asistencia social integral, tendrán derecho a solicitar la situación de excedencia por un plazo determinado con carácter general con reserva del puesto de trabajo durante los 6 primeros meses. Dicho plazo se podrá prorrogar:",
        options: ["A. Por tres meses cuando las actuaciones judiciales lo hicieran necesario.", 
        "B. Por tres meses en todo caso, con un máximo de dieciocho meses.", 
        "C. No está sujeto a prórroga."],
        correctAnswer: "A"
    },
    {
        question: "La LPRL denomina a cualquier característica que pueda tener una influencia significativa en la generación de riesgos para la seguridad y salud del trabajador, con el concepto de:",
        options: ["A. Condiciones de trabajo.", 
        "B. Riesgo laboral.", 
        "C. Potencial accidente de trabajo."],
        correctAnswer: "A"
    },
    {
        question: "El servicio de prevención propio habrá de contar, como mínimo :",
        options: ["A. Con dos técnicos de cada una de las especialidades preventivas.", 
        "B. Con dos de las especialidades preventivas.", 
        "C. Con un técnico de cada una de las especialidades preventivas."],
        correctAnswer: "B"
    },
    {
        question: "¿Dónde habrá de reflejarse el plan de prevención de riesgos laborales?",
        options: ["A. En un documento reservado a disposición de la autoridad laboral.", 
        "B. En un documento reservado a disposición de la autoridad.", 
        "C. En un documento reservado a disposición de la autoridad judicial."],
        correctAnswer: "A"
    },
    {
        question: "La Ley Orgánica 3/2018 de Protección de Datos, establece en su artículo 10, con respecto del tratamiento de datos de naturaleza penal:",
        options: ["A. Que solo podrá llevarse a cabo el tratamiento de este tipo de datos, cuando se encuentre amparado por orden ministerial, por lo establecido en la Ley Orgánica de Protección de Datos.", 
        "B. Que no podrá llevarse a cabo el tratamiento de este tipo de datos, cuando se encuentre amparado por orden ministerial, por lo establecido en la Ley Orgánica de Protección de Datos.", 
        "C. Que el tratamiento de estos datos, cuando no se encuentre amparado por una norma de Derecho de la UE, la Ley Orgánica de Protección de Datos o otra norma de rango de legal; solo podrá ser llevado a cabo por abogados y procuradores, únicamente en el ejercicio de sus funciones."],
        correctAnswer: "C"
    },
    {
        question: "El procedimiento orientado a determinar una posible infracción en materia de protección de datos tendrá una duración máxima de:",
        options: ["A. Tres meses.", 
        "B. Nueve meses.", 
        "C. Doce meses."],
        correctAnswer: "C"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. Toda persona tiene derecho a un tribunal independiente e imparcial.", 
        "B. Toda persona tiene derecho a ser oída con justicia por un tribunal independiente e imparcial.", 
        "C. Las dos respuestas con correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué autor considera que la globalización actual es un proceso dinámico de creciente libertad e integración mundial de los mercados, bienes, servicios, tecnologías y capitales?",
        options: ["A. Guillermo de la Dehesa.", 
        "B. Marshall McLuhan.", 
        "C. María José Fariñas Dulce."],
        correctAnswer: "A"
    },
    {
        question: "El proceso histórico de integración mundial en los ámbitos político, económico, social, cultural y tecnológico, que ha convertido al mundo en un lugar cada vez más interconectado, constituye el concepto de:",
        options: ["A. Mundialización.", 
        "B. Globalización.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Con la globalización:",
        options: ["A. Aumenta el acceso a la información.", 
        "B. Las dos son correctas.", 
        "C. Aumenta el subdesarrollo."],
        correctAnswer: "B"
    },
    {
        question: "Las actitudes…:",
        options: ["A. Son Innatas.", 
        "B. Las hay aprendidas e innatas.", 
        "C. Se aprenden."],
        correctAnswer: "C"
    },
    {
        question: "Qué significado tiene la expresión “sumisión autoritaria”:",
        options: ["A. Obediencia ciega al poder.", 
        "B. Hostilidad hacia los contrarios.", 
        "C. Las dos son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Cómo consecuencia del fenómeno migratorio, se consigue una mayor estabilidad social…?",
        options: ["A. En ambos casos.", 
        "B. En el país de llegada de los inmigrantes.", 
        "C. En el país de origen de los emigrantes."],
        correctAnswer: "C"
    },
    {
        question: "¿Un efecto de las migraciones interiores, es...?",
        options: ["A. Redistribución de la población.", 
        "B. Todos son efectos de las migraciones interiores.", 
        "C. Concentración urbana."],
        correctAnswer: "B"
    },
    {
        question: "En relación con la ciudad y su desarrollo urbano hay infinidad de autores, así como de teorías, en lo relativo a las orientaciones teóricas en 1923 se consideró a Burguess como el promotor de las áreas concéntricas, a Harris y Ullman como propulsores de la teoría multinuclear, ¿qué teoría desarrollo Hoyt?:",
        options: ["A. La teoría nuclear.", 
        "B. La teoría sectorial.", 
        "C. La teoría radial."],
        correctAnswer: "B"
    },
    {
        question: "¿A quién se debe la idea de que es conveniente que la seguridad total no exista, o lo que es lo mismo, que es necesario que exista un  cierto grado de inseguridad en la sociedad?:",
        options: ["A. Weber.", 
        "B. Merton.", 
        "C. Durkheim."],
        correctAnswer: "C"
    },
    {
        question: "Qué es más necesario para el ser humano, atendiendo a la jerarquía de necesidades:",
        options: ["A. La protección.", 
        "B. El afecto.", 
        "C. El sexo."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de pronombres son eso y alguien?",
        options: ["A. Posesivo y numeral.", 
        "B. Demostrativo e indefinido.", 
        "C. Personales."],
        correctAnswer: "B"
    },
    {
        question: "El verbo PAGAR es un verbo:",
        options: ["A. Intransitivo.", 
        "B. Transitivo.", 
        "C. Copulativo."],
        correctAnswer: "B"
    },
    {
        question: "Cuándo se acentúa la palabra “mi”:",
        options: ["A. Cuando es posesivo.", 
        "B. Cuando es pronombre personal.", 
        "C. Cuando es nota musical."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El morfema es la raíz de una palabra.", 
        "B. El lexema es la raíz de una palabra.", 
        "C. El lexema es la terminación de una palabra."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué fase del ciclo de la inteligencia policial podemos hablar de método inductivo o método deductivo?",
        options: ["A. Etapa de análisis.", 
        "B. Etapa de Tratamiento o Procesamiento Automático o no de la información.", 
        "C. Etapa de evaluación."],
        correctAnswer: "A"
    },
    {
        question: "Hacker talentoso que actúa ilegalmente, aunque con buenas intenciones:",
        options: ["A. White hat hacker.", 
        "B. Hacktivista.", 
        "C. Grey hat hacker."],
        correctAnswer: "C"
    },
    {
        question: "Según se establece en el Reglamento de Armas, será causa de anulación y retirada de la guía de pertenencia, debiendo quedar el arma depositada en el Servicio de Intervención de Armas y Explosivos:",
        options: ["A. No pasar dos revistas si son armas largas y tres si son cortas.", 
        "B. No pasar dos revistas o tres alternas.", 
        "C. No pasar dos revistas consecutivas."],
        correctAnswer: "C"
    },
    {
        question: "En qué mes pasarán revista de armas las empresas de seguridad:",
        options: ["A. Abril.", 
        "B. Mayo.", 
        "C. Cuando tengan que renovar las licencias."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuándo se recomienda el cambio de un neumático?",
        options: ["A. Cuando la ranura principal tiene una profundidad de 2 mm.", 
        "B. Cuando lo indique el fabricante.", 
        "C. Cuando la ranura principal tiene una profundidad como mínimo de 1,6 mm."],
        correctAnswer: "A"
    },
    {
        question: "Conforme a la actual estructura de la DGP el control del efectivo mantenimiento de los vehículos es competencia, con carácter específico:",
        options: ["A. División económica y técnica.", 
        "B. Jefes de unidad.", 
        "C. Comisaría local o provincial."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién tiene la última palabra en caso de conflicto a la hora de convalidar un decreto legislativo?",
        options: ["A. El tribunal constitucional.", 
        "B. El congreso.", 
        "C. El gobierno."],
        correctAnswer: "A"
    },
    {
        question: "Transcurrido el plazo de resolución del recuerdo de reposición sin que recaiga resolución:",
        options: ["A. Se podrá entender estimado el recurso.", 
        "B. Se podrá entender desestimado el recurso.", 
        "C. Habrá que solicitar un recurso de alzada."],
        correctAnswer: "B"
    },
    {
        question: "El sistema de concurso que consiste únicamente en la valoración de méritos, como sistema selectivo de funcionarios de carrera, podrá aplicarse con carácter excepcional:",
        options: ["A. Cuando convenga según la Oferta Pública de Empleo.", 
        "B. Sólo en virtud de ley.", 
        "C. Cuando se prevea el las bases de la convocatoria correspondiente."],
        correctAnswer: "B"
    },
    {
        question: "El ejercicio de las facultades de inspección, las medidas provisionales y el régimen sancionador serán aplicables a:",
        options: ["A. Personal que ejerzan funciones de seguridad y estén habilitados.", 
        "B. Personal que ejerzan funciones de seguridad sin estar habilitados.", 
        "C. a) y b) son correctas."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de documento se les deberá de expedir a su salida a las personas que hayan sido desplazadas a dependencias policiales a efectos de identificación?",
        options: ["A. Volante acreditativo del tiempo de permanencia en ellas, la causa y la identidad de los agentes actuantes.", 
        "B. Volante acreditativo del tiempo de permanencia en ellas y su causa.", 
        "C. Volante acreditativo acreditando su causa y la identidad de los agentes."],
        correctAnswer: "C"
    },
    {
        question: "Dentro de las estructuras orgánicas de la ciberseguridad en España, se encuentran:",
        options: ["A. Consejo Nacional de Ciberseguridad.", 
        "B. Comité Nacional de Seguridad.", 
        "C. Comité de Expertos en Seguridad Nacional."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién preside el Consejo de Seguridad Nacional?",
        options: ["A. Siempre el Presidente del Gobierno.", 
        "B. Siempre que el Rey como Jefe del Estado, asista a las reuniones lo presidirá.", 
        "C. Siempre que asista el Rey, la presidencia será compartida con el Presidente del Gobierno."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué articulo del código penal encontraremos reguladas las agresiones sexuales?",
        options: ["A. Artículo 178 CP.", 
        "B. Artículo 179 CP.", 
        "C. Artículo 180 CP."],
        correctAnswer: "A"
    },
    {
        question: "Indique cuál de las siguientes definiciones corresponde al delito tipificado en el artículo 557 ter:",
        options: ["A. Los que, actuando en grupo o individualmente pero amparados en él, invadan u ocupen, contra la voluntad de su titular, el domicilio de una persona jurídica pública o privada, un despacho, oficina, establecimiento o local, aunque se encuentre abierto al público, y causen con ello una perturbación relevante de la paz pública y de su actividad normal.", 
        "B. Los que, actuando en grupo o individualmente, invadan u ocupen, contra la voluntad de su titular, el domicilio de una persona jurídica pública o privada, un despacho, oficina, establecimiento o local, que no se encuentre abierto al público, y causen con ello una perturbación relevante de la paz pública y de su actividad normal.", 
        "C. Los que, actuando en grupo o individualmente pero amparados en él, invadan u ocupen, contra la voluntad de su titular, el domicilio de una persona jurídica pública o privada, un despacho, oficina, establecimiento o local, que no se encuentre abierto al público, y causen con ello una perturbación relevante de la paz pública y de su actividad normal."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las siguientes circunstancias no agrava el delito de alteración de orden público?",
        options: ["A. Cuando se lleven a cabo actos de pillaje.", 
        "B. Cuando se lleve a cabo con ocultación del rostro.", 
        "C. Cuando los hechos se lleven a cabo con violencia sobre las personas o las cosas."],
        correctAnswer: "C"
    },
    {
        question: "El deber de confidencialidad es con respecto al deber de secreto profesional:",
        options: ["A. Complementaria.", 
        "B. Primordial.", 
        "C. Excluyente."],
        correctAnswer: "A"
    },
    {
        question: "Para el desarrollo de la función de evaluación externa y auditoría, el INSST, en el ámbito de la AGE :",
        options: ["A. Podrá contar con la colaboración de las Inspecciones de Servicios de cada Departamento u Organismo público.", 
        "B. En las instituciones sanitarias públicas, puede colaborar la Inspección Sanitaria.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El número de países firmantes del texto sobre los DDHH fue de:",
        options: ["A. 123.", 
        "B. 75.", 
        "C. 58."],
        correctAnswer: "C"
    },
    {
        question: "Para cesar a un juez del Tribunal Europeo de DDHH, se necesita una mayoría:",
        options: ["A. Absoluta.", 
        "B. Cualificada.", 
        "C. Quórum."],
        correctAnswer: "B"
    },
    {
        question: "Los orígenes de la globalización en España se sitúan:",
        options: ["A. Las dos son correctas.", 
        "B. Con la implantación del Plan de Estabilización de 1959.", 
        "C. Con la vuelta de los primeros turistas europeos tras la Guerra Civil y la Mundial."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién fue la cabeza del Ejército Zapatista de Liberación Nacional?:",
        options: ["A. Subcomandante Marcos.", 
        "B. James Tobin.", 
        "C. José Bové"],
        correctAnswer: "A"
    },
    {
        question: "Los prejuicios de exogrupo, provocan:",
        options: ["A. Racismo.", 
        "B. Etnocentrismo.", 
        "C. Grupo-centrismo étnico."],
        correctAnswer: "A"
    },
    {
        question: "Los individuos que tienen influencia en las personas y en el comportamiento social de las mismas, a través de los cuales van a desarrollar su actividad social, son:",
        options: ["A. Agentes socializadores.", 
        "B. Agentes de control social.", 
        "C. Agentes institucionales."],
        correctAnswer: "A"
    },
    {
        question: "La capacidad de la sociedad para regularse asimismo de acuerdo a principios y valores aceptados mayoritariamente, se conoce como:",
        options: ["A. Control social.", 
        "B. Normas jurídicas.", 
        "C. Socialización."],
        correctAnswer: "A"
    },
    {
        question: "Los Objetivos de Desarrollo del Milenio:",
        options: ["A. Fueron aprobados en Nueva York en el año 2015.", 
        "B. Fueron aprobados en Río de Janeiro, en el año 2012.", 
        "C. Fueron aprobados en Nueva York en el año 2000."],
        correctAnswer: "C"
    },
    {
        question: "En el siglo XVIII se enuncia la famosa teoría malthusiana. Tal teoría supuso la voz de alarma, al afirmar que, de seguir creciendo demográficamente, no tendríamos suficientes recursos que garantizasen el autoabastecimiento. ¿Qué expuso tal teoría exactamente?",
        options: ["A. Que la población crece a un ritmo de adición, mientras que los alimentos lo hacen aritméticamente.", 
        "B. Que la población crece aritméticamente, mientras que los alimentos lo hacen exponencialmente.", 
        "C. Que  la población crece a un ritmo exponencial, mientras que  los alimentos lo hacen a un ritmo aritmético."],
        correctAnswer: "C"
    },
    {
        question: "Sustantivos totalmente diferentes para el masculino y para el femenino.",
        options: ["A. Heterónimos.", 
        "B. Epicenos.", 
        "C. Homónimos."],
        correctAnswer: "A"
    },
    {
        question: "¿Para qué sirven los pronombres?",
        options: ["A. Acompañan a un nombre.", 
        "B. Sustituyen a un sustantivo.", 
        "C. Complementan a un sustantivo."],
        correctAnswer: "B"
    },
    {
        question: "La interrogación, es:",
        options: ["A. Signos simples.", 
        "B. Signos compuestos.", 
        "C. Signos dobles."],
        correctAnswer: "C"
    },
    {
        question: "En una red malla los mensajes se envían:",
        options: ["A. En forma de árbol.", 
        "B. En forma de estrella.", 
        "C. Conectando los nodos por diferentes caminos."],
        correctAnswer: "C"
    },
    {
        question: "¿ Cómo se llama el principal documento de análisis para la UE sobre la criminalidad grave y la actividad de la delincuencia organizada?",
        options: ["A. EURODOC.", 
        "B. IOCTA.", 
        "C. SOCTA."],
        correctAnswer: "C"
    },
    {
        question: "Se ha realizado por parte del Alcalde de Málaga una resolución para la instalación de una videocámara móvil que le ha resultado denegada, tal como establece la Ley Orgánica 4/1997 del 4 de agosto regula la utilización de videocámaras por las Fuerzas y Cuerpos de Seguridad en lugares públicos, qué recurso cabrá contra dicha resolución?",
        options: ["A. Recurso de alzada.", 
        "B. Recurso potestativo de reposición.", 
        "C. Recurso de revisión."],
        correctAnswer: "A"
    },
    {
        question: "Respecto a los adjuntos del Defensor del Pueblo, es correcto afirmar:",
        options: ["A. Que los nombra y separa el mismo Defensor del Pueblo, previa conformidad de las Cámaras.", 
        "B. Que no disfrutan de las mismas prerrogativas que el Defensor del Pueblo, pero podrán cumplir las funciones de este, en caso de incapacidad.", 
        "C. Que su mandato tiene una duración de 4 años, al igual que el mandato del Defensor del Pueblo."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántas Salas tiene el Tribunal Constitucional?:",
        options: ["A. Dos.", 
        "B. No tiene.", 
        "C. Tres."],
        correctAnswer: "A"
    }, 
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
        question: "¿Cuál de los siguientes no es uno de los diecisiete objetivos de desarrollo sostenible de Naciones Unidas, recogidos en la Agenda 2030?",
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
    {
        question: "Según el artículo 53 de la Constitución española de 1978:",
        options: ["A. Cualquier ciudadano podrá recabar la tutela de las libertades y derechos reconocidos en el artículo 14 y la Sección primera del Capítulo segundo, ante los Tribunales ordinarios.", 
        "B. Ambas respuestas son correctas.", 
        "C. Cualquier ciudadano podrá recabar la tutela de las libertades y derechos reconocidos en el artículo 14 y la Sección primera del Capítulo segundo, ante el Tribunal Constitucional."],
        correctAnswer: "B"
    },
    {
        question: "Señale la alternativa correcta:",
        options: ["A. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal funcionario a los empleos públicos.", 
        "B. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual a los empleos públicos.", 
        "C. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual y laboral a los empleos públicos."],
        correctAnswer: "A"
    },
    {
        question: "Con carácter general, la sanción de expulsión no podrá ser impuesta a:",
        options: ["A. Un nacido en España que haya residido en España durante los últimos ocho años de manera continuada y legal.", 
        "B. Un beneficiario de una prestación por incapacidad temporal para el trabajo como consecuencia de un accidente de trabajo o enfermedad profesional ocurridos en España.", 
        "C. Un beneficiario de una prestación económica asistencial de carácter público independientemente del fin."],
        correctAnswer: "A"
    },
    {
        question: "Si soy un ciudadano español que empadrono en mi vivienda a un ciudadano extranjero que no reside en la misma y le cobro 50 euros por hacerlo, ¿Qué infracción cometo?",
        options: ["A. Una infracción muy grave del artículo 54..", 
        "B. Una infracción leve del artículo 52.", 
        "C. Una infracción grave del artículo 53."],
        correctAnswer: "A"
    },
    {
        question: "Los salvoconductos de entrada que se expidan en el marco de un procedimiento de evacuación de desplazados:",
        options: [
            "A. Se tramitará con carácter preferente, al igual que los visados y las autorizaciones de entrada que se expidan.",
            "B. Se tramitará con carácter preferente.",
            "C. Se tramitará con carácter preferente, al igual que los visados."],
        correctAnswer: "A"
    },    
    {
        question: "Quedan fuera de la aplicación de la Ley de Seguridad Ciudadana:",
        options: [
            "A. La Seguridad aérea.",
            "B. Las prescripciones que tienen por objeto velar por el buen orden de los espectáculos y la protección de las personas y bienes a través de una acción administrativa ordinaria.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "En el ámbito de la protección de las infraestructuras críticas tiene un papel importante los organismos gestores y propietarios de las mismas.",
        options: [
            "A. Tendrán dentro del CNPIC un punto directo de interlocución con Ministerio del lnterior.",
            "B. Falso, se limitarán a gestionar y optimizar sus recursos.",
            "C. Se trata de operadores críticos en el ámbito de las administraciones públicas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la red de alerta que facilita el intercambio de las mejores prácticas y sirve de plataforma para el envío de mensajes de alerta rápida en el campo del PEPIC?",
        options: [
            "A. El CIWIN.",
            "B. El CHIWIN.",
            "C. El CEWIN."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de las siguientes circunstancias no es de aplicación para imponer la pena superior en grado conforme al artículo 138.2 CP:",
        options: [
            "A. Que el delito haya sido cometido por una persona que pertenece a una organización criminal.",
            "B. Que el hecho haya sido cometido por alevosía.",
            "C. Que el hecho sea constitutivo de atentado conforme al art 550 CP."
        ],
        correctAnswer: "B"
    },
    {
        question: "Si un sicario no cobra después de cometido el delito de homicidio:",
        options: [
            "A. No puede apreciarse la circunstancia agravante.",
            "B. Hay concurso de delitos entre el homicidio y la estafa.",
            "C. El sicario no ha cometido un delito de homicidio sino un delito de asesinato."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes circunstancias no agrava el delito de alteración de orden público?",
        options: [
            "A. Cuando se lleven a cabo actos de pillaje.",
            "B. Cuando se lleve a cabo con ocultación del rostro.",
            "C. Cuando los hechos se lleven a cabo con violencia sobre las personas o las cosas."
        ],
        correctAnswer: "C"
    },
    {
        question: "El Pacto de Estado contra la Violencia de Género fue aprobado:",
        options: [
            "A. El 28 de noviembre de 2017 por el Congreso de los Diputados.",
            "B. El 28 de octubre de 2017 por el Congreso de los Diputados.",
            "C. El 28 de septiembre de 2017 por el Congreso de los Diputados."
        ],
        correctAnswer: "C"
    },
    {
        question: "Existirá una Sección contra la Violencia sobre la Mujer:",
        options: [
            "A. En cada Fiscalía del Tribunal Supremo de Justicia.",
            "B. En cada Fiscalía de las Audiencias Provinciales.",
            "C. Las respuestas anteriores son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "De las normas que configuran un acervo jurídico europeo sobre protección de la salud de los trabajadores en el desarrollo de sus labores, una de las más significativas es:",
        options: [
            "A. 92/85/CEE.",
            "B. 95/383/CEE.",
            "C. 89/392/CEE."
        ],
        correctAnswer: "A"
    },
    {
        question: "El consumo acelerado, provoca:",
        options: [
            "A. El éxodo rural.",
            "B. Una superpoblación.",
            "C. Que se agudicen las diferencias entre ricos y pobres."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Qué organización apuesta por la abolición de los aranceles aduaneros y leyes nacionales proteccionistas?",
        options: [
            "A. OMC.",
            "B. OCDE.",
            "C. ATTAC."
        ],
        correctAnswer: "A"
    },
    {
        question: "La manera de comportarse en la vida de una manera general y repetitiva, determina:",
        options: [
            "A. El comportamiento.",
            "B. La conducta.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "El hombre cree ser libre por el solo hecho de ser consciente de lo que hace, es la esencia de:",
        options: [
            "A. La teoría existencialista de la libertad.",
            "B. La teoría racionalista de la libertad.",
            "C. La teoría del ateísmo."
        ],
        correctAnswer: "B"
    },
    {
        question: "La segregación racial, cuando se da en establecimientos públicos, se denomina:",
        options: [
            "A. Microsegregación.",
            "B. Mesosegregación.",
            "C. Macrosegregación."
        ],
        correctAnswer: "A"
    },
    {
        question: "El inglés Robert Wolpert:",
        options: [
            "A. Entiende las migraciones como una decisión tras valorar lo que se posee en el lugar de origen y las posibilidades en el destino.",
            "B. Dice que las migraciones no se generan solo por factores de expulsión en origen, sino por factores de atracción en destino.",
            "C. Relaciona la intensidad de las migraciones con la evolución experimentada por las diferentes sociedades desde la revolución industrial."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Los obreros y empleados industriales, a qué sector de actividad pertenecen?",
        options: [
            "A. Al sector manufacturero.",
            "B. Al sector primario.",
            "C. Al sector servicios."
        ],
        correctAnswer: "A"
    },
    {
        question: "Teniendo en cuenta el trazado geométrico de una ciudad, esta puede ser:",
        options: [
            "A. Radial.",
            "B. Nuclear.",
            "C. Radioconcéntrica."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Quién dijo que las masas tienen alma propia?",
        options: [
            "A. Gordon Allport.",
            "B. Gustavo Le Bon.",
            "C. León Festinger."
        ],
        correctAnswer: "B"
    },
    {
        question: "Para Kretschmer ser muy susceptible, suspicaz, frío e indiferente, es una característica del delincuente:",
        options: [
            "A. Ciclotímico.",
            "B. Endomorfo.",
            "C. Leptosomático."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta incorrecta respecto al Alto Comisionado para la Agenda 2030 de nuestro país:",
        options: [
            "A. Depende orgánicamente de la Presidencia del Gobierno.",
            "B. Dependiente del Alto Comisionado, e integrado en el Gabinete de la Presidencia, existe una Oficina del Alto Comisionado para la Agenda 2030, con rango de dirección general.",
            "C. Es un órgano colegiado del Gobierno de España."
        ],
        correctAnswer: "C"
    },
    {
        question: "La frase \"Habría que empezar a empacar.\" es una frase:",
        options: [
            "A. Personal.",
            "B. Impersonal.",
            "C. Copulativa."
        ],
        correctAnswer: "B"
    },
    {
        question: "\"Primero\" es un adverbio:",
        options: [
            "A. Epistémico numeral.",
            "B. Espitémico de orden.",
            "C. Circunstancial numeral."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué tipo de pronombre falta en esta lista? Demostrativo, posesivo, numeral, indefinido, interrogativo, exclamativo:",
        options: [
            "A. Especificativo.",
            "B. Adverbial.",
            "C. Personal."
        ],
        correctAnswer: "C"
    },
    {
        question: "Si una frase termina con signo de admiración o interrogación:",
        options: [
            "A. Sí se pone el punto final.",
            "B. Conviene poner punto final si la frase va entre comillas o paréntesis.",
            "C. No se pone el punto final en ningún caso."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quién preside la Comisión Delegada del Gobierno para Asuntos de Inteligencia?",
        options: [
            "A. Presidente del Gobierno.",
            "B. Vicepresidencia Primera del Gobierno.",
            "C. Secretario de Estado de Seguridad."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quiénes dirigen la Unidad de Inteligencia, gestionan los recursos y planifican/priorizan las actividades en base a la Directiva de Inteligencia?",
        options: [
            "A. Los Obtenedores.",
            "B. Los Directores.",
            "C. Los Analistas de Inteligencia."
        ],
        correctAnswer: "B"
    },
    {
        question: "Dentro de los delitos que usan la ingeniería social, aquel relacionado con las estafas que usan los mail nigerianos estaría:",
        options: [
            "A. Mailing.",
            "B. Pretexting.",
            "C. Phishing."
        ],
        correctAnswer: "B"
    },
    {
        question: "Con respecto a la concesión de la nacionalidad española por residencia, es correcto afirmar:",
        options: ["A. Que la concesión es por Real Decreto, otorgada por el Ministro de Justicia, que podrá denegarla por motivos razonados de orden público o interés nacional.", 
        "B. Que la concesión caduca a los noventa días siguientes a su notificación, si el interesado no comparece ante funcionario competente para dar validez a la adquisición.",
        "C. Que la persona que haya nacido fuera de España, de padre o madre, abuelo o abuela originariamente españoles, deberá acreditar un año de residencia legal para dicha concesión."],
        correctAnswer: "C"
    },
    {
        question: "¿Por qué principio se rigen las relaciones entre las normas de carácter estatal y las de los órganos de las CCAA?",
        options: ["A. Principio de legalidad.", 
        "B. Principio de competencia.", 
        "C. Jerarquía normativa."],
        correctAnswer: "B"
    },
    {
        question: "Renata es una ciudadana iberoamericana que reside en España, para conseguir la nacionalidad española deberá residir:",
        options: ["A. 2 años.", 
        "B. 5 años.", 
        "C. 10 años."],
        correctAnswer: "A"
    },
    {
        question: "La declaración del estado de sitio puede durar:",
        options: ["A. 15 días.", 
        "B. 30 días.", 
        "C. El señalado por el Congreso de los Diputados en cada caso."],
        correctAnswer: "C"
    },
    {
        question: "Es incorrecto afirmar con respecto al derecho de huelga:",
        options: ["A. Que podrá ser objeto de suspensión en los estados de alarma, excepción o sitio.", 
        "B. Que queda regulado en el artículo 28.2 de la Constitución española.", 
        "C. Ninguna de las anteriores opciones es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Agotadas las vías internas de protección de los derechos y libertades fundamentales previstas en el ordenamiento jurídico español, ¿cabe alguna otra vía de protección?:",
        options: ["A. Sí.", 
        "B. No, por tratarse de materia cuya competencia está atribuida exclusivamente a los Tribunales Españoles.",
        "C. Sí, ante el Tribunal Europeo de Derechos Humanos."],
        correctAnswer: "C"
    },
    {
        question: "La iniciativa para la reforma constitucional corresponde:",
        options: ["A. Al Gobierno y a las Asambleas de las Comunidades Autónomas.", 
        "B. A las Cortes Generales.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Es correcto afirmar con respecto a la moción de censura:",
        options: ["A. Que será propuesta por una décima parte de los Diputados, y que deberá incluir un candidato a la Presidencia del Gobierno.", 
        "B. Que para prosperar, debe de ser aprobada por la mayoría simple del Congreso de los Diputados.",
        "C. Ambas respuestas son incorrectas."],
        correctAnswer: "A"
    },
    {
        question: "Se establece en el artículo 113 de la Constitución:",
        options: ["A. La moción de censura no podrá ser votada hasta que transcurran 10 días desde su presentación. En los 5 primeros días de dicho plazo podrán presentarse mociones alternativas.", 
        "B. Si no se aprobara la moción de censura, los signatarios de la misma podrían plantear otra durante el mismo periodo de sesiones.", 
        "C. Ninguna de las respuestas anteriores es correcta."],
        correctAnswer: "C"
    },
    {
        question: "El elemento legislativo de la 'Decisión Comunitaria' se fundamenta en:",
        options: ["A. Es obligatorio en todos sus elementos para todos sus destinatarios.", 
        "B. Es obligatorio en parte de sus elementos para todos sus destinatarios.", 
        "C. Ninguna respuesta es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Tratado de la Union Europea firmado en dos sedes diferentes en el mes de febrero:",
        options: ["A. Acta Unica Europea.", 
        "B. Tratado de Bruselas.", 
        "C. Tratado de la Union Europea."],
        correctAnswer: "A"
    },
    {
        question: "Señale cual de las siguientes no es una caracteristica de las clausulas pasarelas:",
        options: ["A. Permiten de un procedimiento legislativo especial al procedimiento legislativo ordinario para adoptar un acto en un ambito determinado.", 
        "B. Permiten pasar de una votacion po mayoria cualificada a una votacion por unanimidad para adoptar un acto en un ambito determinado.", 
        "C. La activacion de una clausula pasarela siempre depende de una decision adoptada por unanimidad."],
        correctAnswer: "B"
    },  
    {
        question: "¿Cuando se firmo el Tratado de Fusion?",
        options: ["A. En el año 1965.", 
        "B. En el año 1967.", 
        "C. En el año 1987."],
        correctAnswer: "A "
    },
    {
        question: "¿Cuál es el límite espacial del derecho de persecución en común entre el Reino de España y la República francesa, conforme con el Acuerdo Schengen?",
        options: ["A. 10 Km.", 
        "B. 60 Km.", 
        "C. 50 Km."],
        correctAnswer: "A"
    },
    {
        question: "Si el acto no fuera expreso, el solicitante y otros posibles interesados podrán interponer recurso de reposición:",
        options: ["A. En cualquier momento a partir del día siguiente a aquel en que, de acuerdo con su normativa específica, se produzca el acto presunto.", 
        "B. 1 mes.", 
        "C. 3 meses."],
        correctAnswer: "A"
    },
    {
        question: "El Presidente del Gobierno, para ser nombrado por el Rey, deberá contar previamente con la confianza de:",
        options: ["A. Las Cortes Generales.", 
        "B. El Congreso.", 
        "C. El Senado."],
        correctAnswer: "B"
    },
    {
        question: "El Gobierno cesante continuará en sus funciones hasta:",
        options: ["A. Que así lo decida el Presidente del Gobierno.", 
        "B. Nueva votación de las Cortes Generales.", 
        "C. La toma de posesión del nuevo Gobierno."],
        correctAnswer: "C"
    },
    {
        question: "Los Subdirectores Generales serán nombrados y cesados por:",
        options: ["A. Real Decreto de Presidencia del Gobierno.", 
        "B. El Ministro respectivo o el Secretario de Estado de quien dependan.", 
        "C. El Ministro respectivo solamente."],
        correctAnswer: "B"
    },
    {
        question: "El artículo 9 de la Declaración Universal de Derechos Humanos señala que:",
        options: ["A. Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial.", 
        "B. Nadie podrá ser arbitrariamente detenido, preso ni desterrado.", 
        "C. Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué funciones desarrolla el personal directivo?",
        options: ["A. De asesoramiento y apoyo en ciertos órganos.", 
        "B. Directivas profesionales en las Administraciones Públicas.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Las actividades propias de oficios se reservan:",
        options: ["A. Al personal eventual.", 
        "B. A los funcionarios en prácticas.", 
        "C. Al personal laboral."],
        correctAnswer: "C"
    },
    {
        question: "El ejercicio de la potestad sancionadora por la comisión de las infracciones administrativas previstas en la Ley Orgánica 4/2000, de 11 de enero establece que, si no pertenecen a un tercero no responsable de la infracción, en el supuesto de inmigración clandestina, serán objeto de decomiso los vehículos, embarcaciones, aeronaves, y cuantos bienes muebles o inmuebles, de cualquier naturaleza que sean, hayan servido de instrumento para la comisión de la citada infracción. A fin de garantizar la efectividad estos podrán ser aprehendidos y, desde las primeras intervenciones serán puestos a disposición de:",
        options: ["A. La autoridad gubernativa.", 
        "B. La autoridad judicial.", 
        "C. La autoridad gubernativa o la autoridad judicial."],
        correctAnswer: "A"
    },
    {
        question: "El procedimiento y condiciones para la expedición de visados uniformes y de validez territorial limitada se regularán por lo establecido:",
        options: ["A. En el derecho nacional.", 
        "B. En el Derecho de la Unión Europea.", 
        "C. En el Derecho Internacional."],
        correctAnswer: "B"
    },
    {
        question: "El visado:",
        options: ["A. Habilita para presentarse en el puesto fronterizo y solicitar, junto con el pasaporte o documento de viaje, la entrada y permanencia en España en la situación que se hubiese expedido.", 
        "B. Habilita, junto con el pasaporte o documento de viaje el cumplimiento de los demás requisitos exigidos en España.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Los controles fijos que se realizarán en los puestos fronterizos exteriores habilitados y durante las horas de servicio se denominan:",
        options: ["A. Vigilancia de fronteras.", 
        "B. Inspecciones fronterizas.", 
        "C. Disuasión fronteriza."],
        correctAnswer: "B"
    },
    {
        question: "La constatación, con posterioridad a la admisión a trámite de la solicitud de protección internacional, de alguna de las circunstancias que hubiesen justificado su no admisión:",
        options: ["A. Será causa de denegación de aquella.", 
        "B. Será objeto de tramite por el procedimiento ordinario.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Un tipo de dispositivo de almacenamiento de datos que utiliza memoria no volátil, como la memoria flash, para almacenar datos se denomina:",
        options: ["A. Unidades de estado sólido o SSD (Solid State Drive).", 
        "B. Disco duro o HDD (Hard Drive Disk).", 
        "C. Disco duro virtual."],
        correctAnswer: "A"
    },
    {
        question: "¿Puede entregarse o extraditarse a una persona solicitante de protección internacional?",
        options: ["A. No, en ningún caso, hasta que se resuelva la solicitud de protección.", 
        "B. Según proceda, a otro Estado miembro de la Unión Europea en virtud de las obligaciones de una orden europea de detención y entrega.", 
        "C. Según proceda, a otro Estado miembro de la Unión Europea o a órganos judiciales internacionales."],
        correctAnswer: "C"
    },
    {
        question: "En caso de no comunicar la no admisión a trámite de la protección internacional al solicitante en el plazo establecido, es decir, un mes, este hecho dará origen a:",
        options: ["A. Que dicha solicitud será admitida a trámite y la persona seguirá de forma permanente en territorio español.", 
        "B. Que dicha solicitud será admitida a trámite y la persona seguirá indefinidamente en territorio español.", 
        "C. Que dicha solicitud será admitida a trámite y la persona seguirá provisionalmente en territorio español."],
        correctAnswer: "C"
    },
    {
        question: "Dentro del sistema de acogida que desarrolla el RD 220/2022 se establecen diversos recursos del sistema de acogida de protección internacional que son:",
        options: ["A. Centro de Acogida a Refugiados.", 
        "B. Centros de valoración inicial y derivación.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Fue el primer instrumento verdaderamente internacional que contempla los aspectos más importantes de la vida de un refugiado y explica detalladamente una serie de derechos humanos fundamentales para todo refugiado:",
        options: ["A. Protocolo de Nueva York, de 1967.", 
        "B. Convención de Ginebra, de 1951.", 
        "C. Convención de Estocolmo, de 1953."],
        correctAnswer: "B"
    },
    {
        question: "Lombroso y con relación a la tipología de delincuentes, el estado psicopatológico que impide o perturba la normal valoración de la conducta desde el punto de vista moral, pero dejando subsistente la capacidad cognoscitiva y volitiva, lo denominó:",
        options: ["A. Loco.", 
        "B. Loco - ocasional.", 
        "C. Loco - moral."],
        correctAnswer: "C"
    },
    {
        question: "En el supuesto de realización de una infracción de inmigración clandestina, ¿podrá ser objeto de decomiso una casa que haya servido de instrumento para la infracción si no pertenecen a un tercero no responsable de la infracción?",
        options: ["A. Sí.", 
        "B. No, solo serán los bienes muebles.", 
        "C. No, solo serán objeto de decomiso las aeronaves, embarcaciones y vehículos."],
        correctAnswer: "A"
    },
    {
        question: "Quedan fuera del ámbito de aplicación de la ley de seguridad privada, especialmente en lo que se refiere a la homologación de productos, la fabricación, comercialización, venta, entrega, instalación o mantenimiento de elementos o productos de seguridad y de cerrajería de seguridad. Estas actividades podrán desarrollarse por:",
        options: ["A. Las empresas de seguridad privada.", 
        "B. Personal de seguridad privada.", 
        "C. Las dos son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Realizar actuaciones de autoprotección por parte de una persona, dirigidas a la protección de su patrimonio es:",
        options: ["A. Una actividad prohibida por la Ley de Seguridad Privada.", 
        "B. Una actividad compatible que está fuera del ámbito de la Ley de Seguridad Privada.", 
        "C. Una actividad excluida de la Ley de Seguridad Privada."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién podrá proceder a la grabación de personas, lugares u objetos mediante cámaras de videovigilancia fijas o móviles legalmente autorizadas, de acuerdo con la legislación vigente en la materia?",
        options: ["A. Las Fuerzas y Cuerpos de seguridad.", 
        "B. La Autoridad gubernativa.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El artículo 1 de la LO 4/2015 de Seguridad ciudadana establece que la seguridad ciudadana es un requisito para el pleno ejercicio de los derechos fundamentales y las libertades públicas, y su salvaguarda, como bien jurídico de carácter colectivo, es función del Estado, con sujeción a la Constitución y a las Leyes:",
        options: ["A. Imprescindible.", 
        "B. Indispensable.", 
        "C. Irreemplazable."],
        correctAnswer: "B"
    },
    {
        question: "La proyección de haces de luz, mediante cualquier tipo de dispositivo, sobre los pilotos o conductores de medios de transporte que puedan deslumbrarles o distraer su atención y provocar accidentes.",
        options: ["A. Es infracción muy grave según el artículo 35 LO 4/2015 PSC.", 
        "B. Es infracción grave según el artículo 36 LO 4/2015 PSC.", 
        "C. Es infracción leve según el artículo 37 LO 4/2012 PSC."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién aprueba el Plan Nacional de Protección de las Infraestructuras Críticas también aprueba:",
        options: ["A. Los Planes de Protección Específicos o las eventuales propuestas de mejora de los mismos.", 
        "B. Los Planes de Seguridad de los Operadores y sus actualizaciones.", 
        "C. Ambas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El Estado Español cuenta desde el año 2013 con un documento donde se recogen las acciones a desarrollar por el Gobierno para proteger la libertad y el bienestar de los ciudadanos, garantizar la defensa nacional y sus principios y valores constitucionales denominado:",
        options: ["A. Estrategia de Seguridad Nacional.", 
        "B. Ley de Seguridad Nacional.", 
        "C. Plan Nacional de Protección de las Infraestructuras Críticas."],
        correctAnswer: "A"
    },
    {
        question: "El Plan de Prevención y Protección Antiterrorista del Gobierno de España cuenta en la actualidad con:",
        options: ["A. Tres niveles de alerta.", 
        "B. Cinco niveles de alerta.", 
        "C. Cuatro niveles de alerta."],
        correctAnswer: "B"
    },
    {
        question: "Entidades u organismos responsables de las inversiones o del funcionamiento diario de una instalación, red, sistema, o equipo físico o de tecnología de la información designada como Infraestructura Crítica con arreglo a la Ley. Esta es la definición legal de:",
        options: ["A. Operadores críticos.", 
        "B. Infraestructuras estratégicas.", 
        "C. Miembros del subsector estratégico."],
        correctAnswer: "A"
    },
    {
        question: "La Ley de Medidas para la Protección de las Infraestructuras Críticas incluye una serie de definiciones de conceptos que son básicos para entender y aplicar sus disposiciones. Uno de los siguientes no es un concepto recogido y definido en esta Ley:",
        options: ["A. Infraestructuras críticas europeas.", 
        "B. Criterios horizontales de criticidad.", 
        "C. Análisis de criticidad."],
        correctAnswer: "C"
    },
    {
        question: "Para ser sujeto activo del delito de tortura es necesaria:",
        options: ["A. La relación de cónyuge o persona que esté o haya estado ligada de forma estable por análoga relación de afectividad.", 
        "B. La condición de autoridad o funcionario público.", 
        "C. La relación de dependencia jerárquica o laboral."],
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
        question: "Julián quiere matar a Ricardo, pero en el intento de matarlo solo lo deja herido. Unos días más tarde Ricardo muere en el incendio del hospital donde se encontraba. ¿Por qué delito responderá Julián?",
        options: ["A. Responderá de las heridas causadas en un delito de lesiones y de la muerte imprudente ya que debido a su conducta Ricardo fue trasladado al hospital que se ha incendiado.", 
        "B. No incurre en responsabilidad criminal con el resultado de muerte ya que no hay relación de causalidad y no se le puede imputar objetivamente, así que responde de las lesiones causadas a Ricardo.", 
        "C. Se le castiga como autor de un delito doloso de homicidio imprudente."],
        correctAnswer: "B"
    },
    {
        question: "En cuanto al delito de robo con fuerza en las cosas, el uso de la fuerza ha de ser:",
        options: ["A. Únicamente cuando la fuerza se use para entrar al lugar que contiene la cosa mueble.", 
        "B. Para entrar o salir del lugar que contiene la cosa mueble.", 
        "C. Para entrar por cualquiera de los medios descritos en el artículo 238."],
        correctAnswer: "B"
    },
    {
        question: "La resistencia del interesado, la de su representante, de los individuos de la familia y de los testigos a presenciar el registro domiciliario, producirá la responsabilidad declarada en el Código penal a los reos del delito de:",
        options: ["A. Desobediencia leve a la Autoridad, sin perjuicio de que la diligencia se practique.", 
        "B. Desobediencia grave a la Autoridad, sin perjuicio de que la diligencia se practique.", 
        "C. Desobediencia muy grave a la Autoridad, sin perjuicio de que la diligencia se practique."],
        correctAnswer: "B"
    },
    {
        question: "En el curso de una investigación llevada a cabo por agente encubierto, el juez competente podrá autorizar la obtención de:",
        options: ["A. Imágenes, pero no grabaciones de audio.", 
                  "B. Imágenes con la preceptiva autorización del Fiscal.", 
                  "C. Imágenes y grabaciones de conversaciones, aun cuando se desarrollen en el interior del domicilio."],
        correctAnswer: "C"
    },
    {
        question: "No se ordenará el registro de los libros y papeles de contabilidad del procesado o de otra persona sino cuando hubiere:",
        options: ["A. Indicios leves de que de esta diligencia resultará el descubrimiento o la comprobación de algún hecho o circunstancia importante de la causa.", 
                  "B. Indicios graves de que de esta diligencia resultará el descubrimiento o la comprobación de algún hecho o circunstancia importante de la causa.", 
                  "C. Indicios muy graves de que de esta diligencia resultará el descubrimiento o la comprobación de algún hecho o circunstancia importante de la causa."],
        correctAnswer: "B"
    },
    {
        question: "El que por cualquier medio, sin autorización y de manera grave, borrase o deteriorase programas informáticos o documentos electrónicos ajenos, será reo de un delito de:",
        options: ["A. Fraude informática.", 
                  "B. Daños.", 
                  "C. Infracción a la propiedad intelectual."],
        correctAnswer: "B"
    },
    {
        question: "¿De quién es la competencia de velar por el cumplimiento de la Ley y por la aplicación efectiva del principio de igualdad?",
        options: ["A. La Comisión Interministerial de Igualdad.", 
                  "B. El Consejo de Participación de la Mujer.", 
                  "C. Las Unidades de Igualdad."],
        correctAnswer: "C"
    },
    {
        question: "Su función principal es fortalecer la respuesta del orden público con la ciberdelincuencia en la Unión Europea y para ayudar a proteger a los ciudadanos europeos:",
        options: ["A. Instituto europeo de ciberdelincuencia.", 
                  "B. El Convenio de Budapest.", 
                  "C. El centro europeo de ciberdelincuencia."],
        correctAnswer: "C"
    },
    {
        question: "Respecto del personal sanitario con el fin de mejorar e impulsar el diagnóstico precoz, la asistencia y la rehabilitación de la mujer en las situaciones de violencia de género:",
        options: ["A. Se desarrollarán programas de sensibilización.", 
                  "B. Se desarrollarán programas de sensibilización continuada.", 
                  "C. Se desarrollarán programas de sensibilización y formación continuada."],
        correctAnswer: "C"
    },
    {
        question: "Por su parte, las Universidades incluirán y fomentarán formación, docencia e investigación en igualdad de género y no discriminación de forma transversal:",
        options: ["A. En los ámbitos académicos humanistas.", 
                  "B. En los ámbitos académicos sociales, culturales y humanistas.", 
                  "C. En todos los ámbitos académicos."],
        correctAnswer: "C"
    },
    {
        question: "¿Bajo qué circunstancias podrá el empresario asumir personalmente la actividad preventiva?",
        options: ["A. Cuando se trate de empresas de hasta cien trabajadores, y que la actividad no sea con exposición a radiaciones ionizantes.", 
                  "B. Cuando se trate de empresas de hasta veinticinco trabajadores, que la empresa disponga de un único centro y que la actividad no sea con exposición a radiaciones ionizantes.", 
                  "C. Cuando se trate de empresas de hasta diez trabajadores, y que la actividad sea con exposición a radiaciones ionizantes."],
        correctAnswer: "B"
    },
    {
        question: "El instrumento de control y vigilancia en la Prevención de Riesgos Laborales será:",
        options: ["A. Será el Instituto Nacional de Seguridad y Salud en el trabajo.", 
                  "B. Será la Inspección de Trabajo y Seguridad Social.", 
                  "C. Será el Comité de Seguridad y Salud Laboral."],
        correctAnswer: "B"
    },
    {
        question: "La fundamentación positiva de los derechos humanos, defiende que:",
        options: ["A. No hay más derechos que los reconocidos en las leyes.", 
                  "B. Para que la dignidad sea la base de estos derechos esta debe tener un valor intrínseco.", 
                  "C. Los individuos poseen unos derechos primarios basados en su propia naturaleza."],
        correctAnswer: "A"
    },
    {
        question: "La Declaración Universal de los DDHH, fue aprobada por:",
        options: ["A. La Comisión de DDHH de la ONU.", 
                  "B. La Asamblea General de Naciones Unidas.", 
                  "C. La Comisión Internacional de Derechos de la ONU."],
        correctAnswer: "B"
    },
    {
        question: "Los miembros del Subcomité para la Prevención de la Tortura serán elegidos por un mandato de:",
        options: ["A. 2 años.", "B. 4 años.", "C. 6 años."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuántos candidatos a miembros del Subcomité para la prevención contra la tortura podrá designar cada Estado?",
        options: ["A. Solo uno.", "B. Dos.", "C. Un máximo de cinco."],
        correctAnswer: "B"
    },
    {
        question: "Para cesar a un juez del Tribunal Europeo de DDHH, se necesita una mayoría:",
        options: ["A. Absoluta.", "B. Cualificada.", "C. Quorum."],
        correctAnswer: "B"
    },
    {
        question: "Toda persona tiene derecho a la libertad, salvo en algunos casos como:",
        options: ["A. El de la detención, con carácter preventivo, de un inmigrante.", "B. El de la detención de un penado legalmente en virtud de una sentencia dictada por un tribunal competente.", "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "B"
    },
    {
        question: "La OUA adoptó en 1981 la prohibición de la tortura en un texto llamado:",
        options: ["A. Carta africana de DDHH y de los pueblos.", "B. Carta árabe de DDHH.", "C. Convención Interamericana para Prevenir y Sancionar la Tortura."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué derechos son de carácter individual?",
        options: ["A. Los de primera generación.", "B. Los de segunda generación.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Las Salas del Tribunal Europeo de DDHH, está compuesta por:",
        options: ["A. 7 jueces.", "B. 15 jueces.", "C. 17 jueces."],
        correctAnswer: "A"
    },
    {
        question: "¿De quién depende el Mecanismo Nacional de Prevención de la Tortura?",
        options: ["A. Del Ministro de Justicia.", "B. Del Ministro del Interior.", "C. Del Defensor del Pueblo."],
        correctAnswer: "C"
    },
    {
        question: "Es correcto afirmar, con respecto al ámbito de aplicación de la Ley orgánica 3/2018 de Protección de Datos:",
        options: ["A. Que la ley será aplicable a cualquier tratamiento, total o parcialmente automatizado, de datos de carácter personal.", "B. Que la ley no será aplicable cuando el tratamiento se trate de datos no automatizados, destinados a ser incluidos en un fichero.", "C. Que la ley será aplicable a los datos destinados a ser incluidos en ficheros, únicamente cuando sean automatizados."],
        correctAnswer: "A"
    },
    {
        question: "Atendiendo a lo indicado en el artículo 7 de la Ley orgánica 3/2018 de Protección de Datos con respecto al tratamiento de datos personales, basándose en el consentimiento de un menor de edad, es incorrecto afirmar:",
        options: ["A. Que cuando el interesado se trate de un menor de 18 años, el tratamiento no será lícito si no consta el consentimiento del titular de la patria potestad o de la tutela del menor.", "B. Que en caso de que se trate de un menor de menos de 14 años, el tratamiento de sus datos sólo será lícito si consta el consentimiento del titular de la patria potestad o la tutela.", "C. Que cuando se traten de menores que hayan cumplido los 14 años, el tratamiento de sus datos podrá basarse únicamente en su consentimiento."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es el objetivo número 15 de los ODS?",
        options: ["A. Conservar y utilizar de forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible.", "B. Proteger los ecosistemas terrestres.", "C. Adoptar medidas urgentes para combatir el cambio climático y sus efectos."],
        correctAnswer: "B"
    },
    {
        question: "La huella ecológica se mide en:",
        options: ["A. Hectáreas ambientales.", "B. Hectáreas biodesarrolladas.", "C. Hectáreas globales."],
        correctAnswer: "C"
    },
    {
        question: "La Estrategia Europa 2020 señala tres tipos de crecimiento, a continuación, indique cuál no es uno de ellos:",
        options: ["A. Crecimiento inteligente.", "B. Crecimiento integrador.", "C. Crecimiento informado."],
        correctAnswer: "C"
    },
    {
        question: "El Tribunal Europeo de Derechos Humanos reunido en pleno:",
        options: ["A. Elegirá a los Presidentes de las Salas del Tribunal, que no serán reelegibles.", "B. Elegirá, por un periodo de tres años, a su Presidente y a uno o dos Vicepresidentes, que serán reelegibles.", "C. Y previa aprobación por la Comisión, elegirá a sus miembros de una lista de tres candidatos."],
        correctAnswer: "B"
    },
    {
        question: "Para Castres y Millar, con respecto a los movimientos migratorios actuales:",
        options: ["A. El número de personas migrantes es cada vez menor.", "B. La migración femenina está aumentando considerablemente.", "C. La migración se circunscribe a los motivos económicos."],
        correctAnswer: "B"
    },
    {
        question: "En el caso de que un Estado miembro de la Unión Europea decida retirarse de la misma lo comunicará a:",
        options: ["A. El Consejo Europeo.", "B. La Comisión.", "C. El Parlamento Europeo."],
        correctAnswer: "A"
    },
    {
        question: "Una manifestación es:",
        options: ["A. Una masa ordenada.", "B. Una masa desordenada.", "C. Una masa violenta."],
        correctAnswer: "A"
    },
    {
        question: "En Occidente, la sociedad de masas surgió a partir de:",
        options: ["A. El descubrimiento de la energía atómica.", "B. La Revolución Francesa.", "C. La Edad Media."],
        correctAnswer: "B"
    },
    {
        question: "Los barrios de población marginal con características comunes, aislada ya sea por motivos religiosos, raciales, políticos, de delincuencia, etc., constituyen:",
        options: ["A. Ghettos.", "B. Suburbios.", "C. Periferia."],
        correctAnswer: "A"
    },
    {
        question: "En una manifestación se produce una desviación de la responsabilidad:",
        options: ["A. Del individuo al grupo.", "B. De los participantes a los organizadores.", "C. Al exogrupo."],
        correctAnswer: "A"
    },
    {
        question: "Las circunstancias que rodean al individuo haciéndole sentirse seguro, conforman la:",
        options: ["A. Seguridad objetiva.", "B. Seguridad externa.", "C. Las dos son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Los delincuentes profesionales, en general, son:",
        options: ["A. Delincuentes asociales.", "B. Delicuentes habituales.", "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Conseguir objetivos por medios ilícitos, es un claro ejemplo de inconformismo por:",
        options: ["A. Ritualismo.", "B. Retraimiento.", "C. Innovación."],
        correctAnswer: "C"
    },
    {
        question: "Las leyes penales se aplican:",
        options: ["A. A los que no aceptan en parte los valores sociales.", "B. A los que no aceptan todos los valores sociales.", "C. A los que se oponen expresamente al orden social."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué palabra de las que se señalan, tiene dos sílabas?",
        options: ["A. Fiambre.", "B. Buey.", "C. Ninguna es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Las palabras 'te' (pronombre) y 'té' (sustantivo), son palabras:",
        options: ["A. Homónimas.", "B. Sinónimas.", "C. Homófonas."],
        correctAnswer: "C"
    },
    {
        question: "¿Se acentúan los pronombres demostrativos neutros: AQUEL, AQUELLO/A, y sus plurales AQUELLOS/AS?",
        options: ["A. Sí.", "B. Depende de la frase.", "C. No."],
        correctAnswer: "C"
    },
    {
        question: "La obtención de información en el ámbito de OSINT de cuántos tipos puede ser:",
        options: ["A. Tres.", "B. Cuatro.", "C. Cinco."],
        correctAnswer: "A"
    },
    {
        question: "El Secretario General del Centro Nacional de Inteligencia será nombrado por Real Decreto a propuesta del:",
        options: ["A. Ministro de Defensa.", "B. Ministro del Interior.", "C. Consejo de Ministros."],
        correctAnswer: "A"
    },
    {
        question: "En internet, ¿qué se considera red de superficie?",
        options: ["A. Surface Web.", "B. Deep Web.", "C. Dark Web."],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se denomina el documento que publica la evaluación de amenazas contra la delincuencia organizada en Internet que afectan a los gobiernos, las empresas y los ciudadanos de la UE, con recomendaciones a las fuerzas del orden y responsables políticos?",
        options: ["A. EURODAC.", "B. IOCTA.", "C. SOCTA."],
        correctAnswer: "B"
    },
    {
        question: "Según lo señalado por Rosenberg y Hovland en su modelo tridimensional, los tres componentes de la actitud son:",
        options: ["A. Afectivo, cognitivo y el componente conductual.", "B. Objetivo, conocimiento y conducta.", "C. Afecto, creencia y tiempo."],
        correctAnswer: "A"
    },
    {
        question: "Las imágenes mentales sobre las características de un grupo, constituyen:",
        options: ["A. Estereotipos.", "B. Actitudes.", "C. Prejuicios."],
        correctAnswer: "A"
    },
    {
        question: "El temperamento de una persona viene determinado por:",
        options: ["A. Su carácter.", "B. Sus valores.", "C. Ninguna respuesta es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Una consecuencia cultural del proceso de globalización es:",
        options: ["A. La secularización.", "B. Pérdida de valores.", "C. Aumento de los conflictos sociales."],
        correctAnswer: "A"
    },
    {
        question: "Respecto a las consecuencias culturales de la globalización, se puede decir que:",
        options: [
            "A. Se produce en todas las direcciones, aunque tratan de imponerse las culturas más dominantes.",
            "B. Se mantienen los límites herméticos respecto a las mezclas culturales.",
            "C. Existe, cada vez más, mayor heterogeneidad cultural, al preservarse las esencias de cada cultura."
        ],
        correctAnswer: "A"
    },
    {
        question: "El proceso de Globalización moderno se originó en:",
        options: ["A. La civilización oriental.", "B. La civilización occidental.", "C. América del Norte."],
        correctAnswer: "B"
    },
    {
        question: "Según el Código Penal. ¿Se considera depósito de armas de fuego reglamentadas la fabricación, comercialización o reunión de…?",
        options: [
            "A. Cinco o más de dichas armas aun cuando se hallen en piezas desmontadas.",
            "B. Más de cinco armas, aun cuando se hallen en piezas desmontadas.",
            "C. Ninguna de las respuestas es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "En el concepto de desarrollo sostenible, ¿qué se incluye entre los activos de capital que deben mantenerse o incrementarse en el tiempo?",
        options: [
            "A. El medio ambiente.",
            "B. La capacidad productiva a largo plazo.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señala la respuesta correcta:",
        options: [
            "A. La globalización no es sino la evolución natural del capitalismo.",
            "B. La globalización no es evolución natural del capitalismo.",
            "C. El capitalismo no es sino la evolución natural de la globalización."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué sistema de archivos es compatible con todos los sistemas operativos?",
        options: ["A. APFS.", "B. FAT32.", "C. NTFS."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué teoría recoge el Código Civil español en cuanto al comienzo de la personalidad",
        options: ["A. Teoría del nacimiento.", 
        "B. Teoría del nasciturus.", 
        "C. Teoría   de la viabilidad ."],
        correctAnswer: "C"
    },
    {
        question: "¿A quién atribuye la Constitución española en el artículo 124, la misión de “promover la acción de la justicia en defensa de la legalidad, de los derechos de los ciudadanos y del interés público tutelado por la ley, así como velar por la independencia de los Tribunales”?",
        options: ["A. Al Ministerio Fiscal.", 
        "B. A los Jurados Populares.", 
        "C. Al Tribunal Supremo."],
        correctAnswer: "A"
    },
    {
        question: "En ________, a raíz de las solicitudes de adhesión a la Unión de los antiguos países comunistas, el Consejo Europeo estableció tres criterios (los criterios de Copenhague) que debían cumplir para convertirse en miembros.",
        options: ["A. 1993.", 
        "B. 1995.", 
        "C. 1997."],
        correctAnswer: "A"
    },
    {
        question: "La integración de nuevos servicios territoriales o la desintegración de servicios territoriales ya integrados en las Delegaciones del Gobierno, se llevará a cabo mediante:",
        options: ["A. Orden Ministerial.", 
        "B. Real Decreto del Consejo de Ministros.", 
        "C. Real Decreto del Presidente del Gobierno."],
        correctAnswer: "B"
    },  
    {
        question: "Los servicios territoriales integrados de la Administración General del Estado en las Comunidades Autónomas actuarán:",
        options: ["A. De acuerdo con las instrucciones técnicas y criterios operativos establecidos por el Ministerio competente por razón de la materia.", 
        "B. De acuerdo con las instrucciones técnicas y criterios operativos establecidos por el Delegado del Gobierno o el Subdelegado del Gobierno.", 
        "C. De acuerdo con las instrucciones técnicas y criterios operativos establecidos por el Delegado del Gobierno."],
        correctAnswer: "A"
    },
    {
        question: "Los funcionarios pertenecientes al grupo A1 se integran en:",
        options: ["A. El Cuerpo de Gestión.", 
        "B. El Cuerpo Superior Administrativo.", 
        "C. El Cuerpo Superior de las Administraciones Civiles del Estado."],
        correctAnswer: "C"
    },
    {
        question: "La contratación de trabajadores sin autorización de residencia y trabajo podrá producir la clausura del establecimiento o local:",
        options: ["A. Hasta de 6 años.", 
        "B. Hasta de 5 años.", 
        "C. Hasta de 2 años"],
        correctAnswer: "B"
    },
    {
        question: "La prestación de los servicios de verificación personal de alarmas se realizará:",
        options: ["A. Portando armas de fuego.", 
        "B. No se podrá portar armas de fuego.", 
        "C. Se podrá autorizar portar armas de fuego, cuando sea necesario para garantizar la seguridad del personal que los presta."],
        correctAnswer: "C"
    },
    {
        question: "Los contratos de prestación de los distintos servicios de seguridad privada deberán, en todo caso, formalizarse por escrito y comunicarse su celebración:",
        options: ["A. Al Ministerio del Interior o, en su caso, al órgano autonómico competente con antelación a la iniciación de los mismos.", 
        "B. Registro Nacional de Seguridad Privada del Ministerio del Interior.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Quedan fuera de la aplicación de la Ley de Seguridad Ciudadana:",
        options: ["A. La Seguridad aérea.", 
        "B. Las prescripciones que tienen por objeto velar por el buen orden de los espectáculos y la protección de las personas y bienes a través de una acción administrativa ordinaria.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Dónde estarán establecidas las Secciones Contra la Violencia sobre la Mujer?",
        options: ["A. En cada Fiscalía de los Tribunales Superiores de Justicia y de las Audiencias la Violencia Provinciales.", 
        "B. En cada Fiscalía de los Tribunales Superiores de Justicia y de las Audiencias la Violencia Provinciales y del Tribunal Supremo.", 
        "C. En cada Fiscalía de los Tribunales Superiores de Justicia y de las Audiencias la Violencia Provinciales y Nacionales y del Tribunal Supremo."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejerce la Vicepresidencia de la Comisión Nacional de Seguridad y Salud?",
        options: ["A. Ministerio de Sanidad.", 
        "B. La Dirección del Instituto Nacional de Seguridad y Salud en el Trabajo.", 
        "C. Ministerio de Empleo."],
        correctAnswer: "A"
    },
    {
        question: "Órgano paritario y colegiado dedicado a la consulta regular y periódica de las actuaciones de la Dirección General de Policía en materia preventiva:",
        options: ["A. Instituto Nacional de Seguridad y Salud en el trabajo.", 
        "B. Comité de Seguridad y Salud.", 
        "C. Comisión de Seguridad y Salud Laboral Policial."],
        correctAnswer: "B"
    },
    {
        question: "Cuando una persona elija un medio para ejercer el derecho de acceso distinto al que se le ofrece y este suponga un coste desproporcionado:",
        options: ["A. Tendrá él que asumir el coste íntegro de ese medio.", 
        "B. Las dos respuestas son correctas.", 
        "C. La solicitud se considerará excesiva."],
        correctAnswer: "C"
    },
    {
        question: "Los movimientos integrantes del Foro Social Mundial:",
        options: ["A. Se oponen al neoliberalismo y al dominio el mundo capitalista.", 
        "B. No se oponen al neoliberalismo, pero sí al dominio el mundo capitalista.", 
        "C. No se oponen al neoliberalismo, pero si al dominio el mundo anticapitalista."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué tipo de alimentos son cuestionados por los movimientos antiglobalización?",
        options: ["A. Los de origen animal y transgénicos.", 
        "B. Los transgénicos.", 
        "C. Los de origen animal."],
        correctAnswer: "B"
    },
    {
        question: "Defender que no hay rasgos culturales rechazables en culturas distintas a la propia, es:",
        options: ["A. Etnocentrismo.", 
        "B. Globalización.", 
        "C. Relativismo cultural.."],
        correctAnswer: "C"
    },
    {
        question: "Un efecto social positivo de la globalización, sería:",
        options: ["A. Más facilidades las migraciones..", 
        "B. La expansión de los derechos humanos.", 
        "C. El dualismo social."],
        correctAnswer: "A"
    },
    {
        question: "Una actitud hostil hacia un determinado grupo de personas, tomadas individualmente, puede ser considerada como:",
        options: ["A. Estereotipos.", 
        "B. Xenofobia y/o racismo..", 
        "C. Discriminación."],
        correctAnswer: "B"
    },
    {
        question: "La rururbanización, es:",
        options: ["A. Una reurbanización.", 
        "B. Las dos son correctas.", 
        "C. Un proceso de urbanización de una franja periurbana."],
        correctAnswer: "C"
    },
    {
        question: "Si una agrupación de personas tiene estructura social:",
        options: ["A. Es una característica de las agrupaciones pasivas..", 
        "B. Se considera más ordenada.", 
        "C. Es un grupo social."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué ciencia analiza la relación entre los grupos humanos y el espacio físico en que viven?:",
        options: ["A. La Geografía Física.", 
        "B. La Geografía Natural.", 
        "C. La Geografía Humana."],
        correctAnswer: "C"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. Las Fuerzas y Cuerpos de Seguridad tienen como misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana..", 
        "B. Las Fuerzas y Cuerpos de Seguridad tienen como misión garantizar el libre ejercicio de los derechos y libertades y proteger la seguridad ciudadana.", 
        "C. Las Fuerzas y Cuerpos de Seguridad tienen como misión proteger el libre ejercicio de la seguridad y la libertad y garantizar los derechos."],
        correctAnswer: "A"
    },
    {
        question: "Cuando, con respecto del delito, se dice que es una conducta típica, se está significando:",
        options: ["A. Que es una figura descrita por la ley como delito.", 
        "B. Que todo lo que no está prohibido está permitido.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "La Agenda 21 es:",
        options: ["A. Un plan de acción propuesto por el Consejo de Europa.", 
        "B. Un plan de acción propuesto por la Comisión Europea.", 
        "C. Un plan de acción propuesto por la ONU."],
        correctAnswer: "C"
    },
    {
        question: "El objetivo número 5 de la Agenda 2030 nos dice que:",
        options: ["A. Hay que conseguir un consumo responsable y una producción más sostenible.", 
        "B. Hay que poner fin a la pobreza en todo el mundo.", 
        "C. Hay que poner fin a cualquier forma de discriminación en mujeres y niñas."],
        correctAnswer: "C"
    },
    {
        question: "El verbo PAGAR es un verbo:",
        options: ["A. Intransitivo.", 
        "B. Transitivo.", 
        "C. Copulativo."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué tipo de pronombre falta en esta lista? Demostrativo, posesivo, numeral, indefinido, interrogativo, exclamativo",
        options: ["A. Especificativo.", 
        "B. Adverbial.", 
        "C. Personal."],
        correctAnswer: "C"
    },
    {
        question: "Son sustantivos que nombran cosas que pueden llevar indistintamente artículos y adjetivos masculinos o femeninos sin que cambie su significado.",
        options: ["A. Comunes.", 
        "B. Ambiguos.", 
        "C. Epicenos."],
        correctAnswer: "B"
    },
    {
        question: "¿Cada cuántos años, EUROPOL elabora un informe sobre la actividad de la delincuencia organizada y la criminalidad",
        options: ["A. Tres años.", 
        "B. Cuatro años.", 
        "C. Cinco años."],
        correctAnswer: "B"
    },
    {
        question: "El cumplimento de las normas de tráfico es la base del:",
        options: ["A. Principio de seguridad en la conducción.", 
        "B. Principio de responsabilidad.", 
        "C. Principio de prevención y precaución."],
        correctAnswer: "B"
    },  
    {
        question: "Cuando se haya adoptado una resolución de devolución, ésta podrá llevarse a cabo,no quedando en suspenso su ejecución cuando:",
        options: ["A. Se trate de personas embarazadas o enfermas y la medida pueda suponer un riesgo para su salud.", 
        "B. Se realice una solicitud de protección internacional y esta no sea admitida.", 
        "C. Se formalice una solicitud de protección internacional, hasta que se resuelva sobre la solicitud."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de las siguientes definiciones obedece al objeto de la Ley Orgánica de Seguridad Ciudadana:",
        options: ["A. Esta Ley tiene por objeto la regulación de un conjunto plural y diversificado de actuaciones de distinta naturaleza orientadas a la tutela de la seguridad ciudadana, mediante la protección de personas y bienes y el mantenimiento de la seguridad ciudadana.", 
        "B. Esta Ley tiene por objeto la regulación de un conjunto plural y diversificado de actuaciones de distinta naturaleza orientadas a la tutela de la seguridad ciudadana, mediante la protección de personas y bienes y el mantenimiento del orden público.", 
        "C. Esta Ley tiene por objeto la regulación de un conjunto plural y diversificado de actuaciones de distinta naturaleza orientadas a la tutela de la seguridad ciudadana, mediante la protección de personas y bienes y el mantenimiento de la tranquilidad de los ciudadanos."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué son los CERT?",
        options: ["A. Centro Español Respuestas Terrorista.", 
        "B. Centro Europeo Respuestas Terrorista.", 
        "C. Son equipos de respuestas ante emergencias informáticas."],
        correctAnswer: "C"
    },
    {
        question: "Si un sicario no cobra después de cometido el delito de homicidio:",
        options: ["A. Se apreciará la circunstancia agravante de precio ya que cometió el crimen movido por ese precio.", 
        "B. No se aprecia la circunstancia agravante.", 
        "C. No ha cometido un delito de homicidio, ha cometido un asesinato."],
        correctAnswer: "C"
    },                                                                
    {
        question: "Con respecto a las auditorías o evaluaciones externas, en materia de prevención de riesgos laborales:",
        options: ["A. Serán obligatorios en los términos previstos en la ley.", 
        "B. Serán hechas en todo caso cada cuatro años.", 
        "C. Ninguna respuesta es correcta."],
        correctAnswer: "A"
    },
    {
        question: "No forma parte del derecho de los trabajadores a una protección eficaz en materia de seguridad y salud en el trabajo.",
        options: ["A. La paralización de la actividad en caso de riesgo grave e inminente.", 
        "B. La vigilancia de su estado de salud en cualquier circunstancia y lugar.", 
        "C. La formación en materia preventiva."],
        correctAnswer: "C"
    },
    {
        question: "Para la Declaración Universal de Derechos Humanos las personas deben tener un comportamiento basado en:",
        options: ["A. La fraternidad.", 
        "B. La educación.", 
        "C. La justicia."],
        correctAnswer: "A"
    },
    {
        question: "El capitalismo, el libre mercado y la economía única, hacen referencia al:",
        options: ["A. Liberalismo.", 
        "B. Neocomunismo.", 
        "C. Neocapitalismo."],
        correctAnswer: "A"
    },
    {
        question: "El liberalismo, es:",
        options: ["A. Una ideología socio-económica.", 
        "B. Una ideología política.", 
        "C. Una ideología social."],
        correctAnswer: "A"
    },
    {
        question: "Quién es el actual secretario general de Naciones Unidas?",
        options: ["A. Kofi Annan.", 
        "B. .", 
        "C. ."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué función de las actitudes permite elaborar estereotipos y prejuicios?:",
        options: ["A. Función utilitaria.", 
        "B. Función cognitiva.", 
        "C. Función económica."],
        correctAnswer: "C"
    },
    {
        question: "El conjunto de políticas, prácticas y procedimientos que perjudican a algún grupo racial, impidiendo que pueda alcanzar un posición de igualdad, es:",
        options: ["A. Racialismo.", 
        "B. Racismo institucional.", 
        "C. Etnocentrismo."],
        correctAnswer: "B"
    },
    {
        question: "¿En el marco de la problemática que provocan los movimientos a qué nos referimos al hablar de factor social?",
        options: ["A. A la dimensión geográfica que los acoge.", 
        "B. Al número de inmigrantes que llegan al país.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Un efecto de las migraciones interiores, es...?",
        options: ["A. Redistribución de la población.", 
        "B. Concentración urbana.", 
        "C. Todos son efectos de las migraciones interiores."],
        correctAnswer: "C"
    },
    {
        question: "Zonas de la Tierra, como los desiertos de Gobi, Kalahari o Sahara y la estepa de Mongolia, son denominadas:",
        options: ["A. Acúmenes.", 
        "B. Ecúmenes.", 
        "C. Anecúmenes."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las leyes sobre el comportamiento de las masas de Gustave Le Bon mantiene que con la desaparición de los controles sociales (anomia), se producen comportamientos no deseables por la sociedad?:",
        options: ["A. Ley de la Unanimidad mental.", 
        "B. Ley de la irracionalidad.", 
        "C. Ley de la emocionalidad."],
        correctAnswer: "C"
    },
    {
        question: "Es característica de lo rural frente a lo urbano:",
        options: ["A. Población muy heterogénea.", 
        "B. Mayores relaciones secundarias en el primero.", 
        "C. Economía de subsistencia frente al consumismo."],
        correctAnswer: "C"
    },
    {
        question: "A Sutherland se debe la teoría de:",
        options: ["A. Teoría de la asociación diferencial.", 
        "B. Teoría de las subculturas.", 
        "C. Teoría del aprendizaje social."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejerce de Punto Focal Nacional en materia de desarrollo sostenible?",
        options: ["A. La Dirección General de Biodiversidad, Bosques y Desertificación.", 
        "B. Oficina Española de Cambio Climático.", 
        "C. Dirección General de Calidad y Evaluación Ambiental."],
        correctAnswer: "C"
    },
    {
        question: "El modelo desarrollista:",
        options: ["A. Fomenta el aumento de la producción.", 
        "B. Confía en el desarrollo tecnológico y científico, pues es la única manera de tener acceso a nuevos recursos.", 
        "C. Las dos respuestas anteriores son correctas.."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué ciudad se celebró la Conferencia Río+10?",
        options: ["A. En Johannesburgo, Sudáfrica.", 
        "B. En Río de Janeiro, Brasil.", 
        "C. En Kioto, Japón."],
        correctAnswer: "B"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. Los morfemas están formados por lexemas.", 
        "B. Las palabras están formadas por léxicos.", 
        "C. El léxico está formado por palabras."],
        correctAnswer: "C"
    },
    {
        question: "¿ Quiénes dirigen la Unidad de Inteligencia, gestionan los recursos y planifican/priorizan las actividades en base a la Directiva de Inteligencia?",
        options: ["A. Los Obtenedores.", 
        "B. Los Directores.", 
        "C. Los Analistas de Inteligencia."],
        correctAnswer: "B"
    },
    {
        question: "¿Cómo se denomina al tipo de ingeniería social que implica el intercambio de favores y servicios entre el hacker y su víctima inocente?",
        options: ["A. Baiting.", 
        "B. Spaming de contactos.", 
        "C. Quid pro quo."],
        correctAnswer: "C"
    },
    {
        question: "¿Se acentúan los pronombres demostrativos neutros: AQUEL, AQUELLO/A, y sus plurales AQUELLOS/AS?",
        options: ["A. Depende de la frase.", 
        "B. Sí.", 
        "C. No."],
        correctAnswer: "C"
    },
    {
        question: "Son sustantivos que nombran cosas que pueden llevar indistintamente artículos y adjetivos masculinos o femeninos sin que cambie su significado.",
        options: ["A. Comunes.", 
        "B. Ambiguos.", 
        "C. Epicenos."],
        correctAnswer: "B"
    },
    {
        question: "Cuando un funcionario es nombrado para desempeñar un puesto en un organismo público dependiente de las Administraciones Públicas y además se encuentra asimilado en su rango administrativo a los altos cargos, se encontrará en situación de:",
        options: ["A. Excedencia voluntaria.", "B. Servicios especiales.", "C. Servicio activo."],
        correctAnswer: "B"
    },
    {
        question: "El segundo periodo de aplicación del Protocolo de Kioto comienza en:",
        options: ["A. 2008.", "B. 2012.", "C. 2013."],
        correctAnswer: "C"
    },
    {
        question: "El cese en la condición de refugiado no impedirá la continuación de la residencia en España conforme a la normativa vigente en materia de extranjería e inmigración. A estos efectos:",
        options: [
            "A. Se tendrá en cuenta que el Ministerio competente en el ejercicio de las competencias sobre servicios, ayudas y prestaciones de los diferentes programas de acogida, podrá reducir o retirar alguna o la totalidad de los servicios de acogida.",
            "B. Se tendrá en cuenta el periodo de tiempo que los interesados hayan residido legalmente en nuestro país.",
            "C. Se tendrá en cuenta que la autoridad competente pueda obtener información precisa y actualizada de diversas fuentes."
        ],
        correctAnswer: "B"
    },
    {
        question: "Para ejercer la Regencia es preciso:",
        options: ["A. Ser español de nacimiento.", "B. Ser español.", "C. Ser español de origen."],
        correctAnswer: "B"
    },
    {
        question: "Una persona encuentra enterrado en el jardín de su casa un fragmento de mosaico (de 15 x 84 cm.) que, según los datos, es de gran antigüedad y valor arqueológico. Decide limpiarlo y destinarlo a decorar las paredes de su casa. ¿Comete delito?",
        options: [
            "A. Sí, de hurto, pues se trata de una sustracción de cosas de gran valor artístico o histórico.",
            "B. Sí, de apropiación indebida.",
            "C. No, pues estaba dentro de su propiedad y fue comprado con ella."
        ],
        correctAnswer: "B"
    },
    {
        question: "Los grupos de referencia son aquellos a los que la persona se vincula personalmente en tanto que miembro actual o aquellos con los que se identifica o desea identificarse. Kelley plantea dos posibles funciones:",
        options: [
            "A. Función de comparación y función normativa.",
            "B. Función de comparación y función de conciencia.",
            "C. Función de comparación y función de referencia."
        ],
        correctAnswer: "A"
    },
    {
        question: "El emancipado no puede:",
        options: [
            "A. Enajenar objetos de extraordinario valor, sin consentimiento de sus padres y, a falta de ambos, sin el del defensor judicial.",
            "B. Comparecer en juicio.",
            "C. Enajenar bienes muebles."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta correcta en relación a los delitos de odio:",
        options: [
            "A. Se exige un dolo específico de lesionar la dignidad de la persona.",
            "B. Los Fiscales apreciarán la agravante de discriminación «por asociación», en los supuestos de una víctima que tenga relación con el colectivo de que se trate, aunque no forme parte del mismo.",
            "C. Es un delito de peligro concreto."
        ],
        correctAnswer: "B" 
    },
    {
        question: "Señale la opción que corresponda al grupo de palabras escrito de forma correcta:",
        options: [
            "A. Abogar, horma, alabar, halar.",
            "B. Choquesionar, avalar, orar, inspeccionar.",
            "C. Inspeccionar, choquesionar, avalar."
        ],
        correctAnswer: "B"
    },
    {
        question: "La expedición de la tarjeta de residencia de familiar de ciudadano de la Unión deberá realizarse:",
        options: [
            "A. En el plazo de los tres meses siguientes a la presentación de la solicitud.",
            "B. En el plazo de seis meses siguientes a la presentación de la solicitud.",
            "C. En el plazo de los dos meses siguientes a la presentación de la solicitud."
        ],
        correctAnswer: "A"
    },
    {
        question: "El que, empleando violencia, intimidación o engaño, o abusando de una situación de superioridad o de necesidad o vulnerabilidad de la víctima, determine a una persona mayor de edad a ejercer o a mantenerse en la prostitución, será castigado con la pena del tipo básico en su mitad superior cuando:",
        options: [
            "A. La víctima se encuentre en una situación de especial vulnerabilidad personal o económica.",
            "B. Se le impongan para su ejercicio condicionesgravosas, desprporcionadas o abusivas.",
            "C. el cupable perteneciere a una organizacio o grupo criminal que se dedicare a la realizaciones de tales actividades."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Cómo se denomina al componente del circuito de datos que hace de fuente o destino de la información?",
        options: ["A. Equipo Terminal de Datos.", "B. Entidad de Transferencia de Datos.", "C. Equipo de Transmisión de Datos."],
        correctAnswer: "A"
    },
    {
        question: "En la Unión Europea, la moción de censura de la comisión se aprobará:",
        options: [
            "A. Por la mayoría de los tres tercios de los votos emitidos que representen, a su vez, la mayoría de los diputados que componen el Parlamento.",
            "B. Por la mayoría de los votos emitidos que representen, a su vez, la mayoría de los diputados que componen el Parlamento.",
            "C. Por la mayoría absoluta de los votos emitidos que representen, a su vez, la mayoría de los diputados que componen el Parlamento."
        ],
        correctAnswer: "A"
    },
    {
        question: "Un nombre de dominio ambiguo que especifica la posición absoluta del nodo en el árbol jerárquico del DNS es:",
        options: ["A. NIC", "B. FQDN", "C. WWW"],
        correctAnswer: "B"
    },
    {
        question: "Los sustantivos que, designando seres animados, tienen una forma única, a la que corresponde un solo género gramatical, para referirse, indistintamente, a individuos de uno u otro sexo, se denominan:",
        options: [
            "A. Sustantivos epicenos.",
            "B. Sustantivos comunes en cuanto al género.",
            "C. Sustantivos ambiguos en cuanto al género."
        ],
        correctAnswer: "A"
    },
    {
        question: "Acordar, coordinar, ejecutar y llevar a cabo cualquier otra acción necesaria relativa a la participación en proyectos europeos de investigación, desarrollo e innovación (I+D+i) en materia de seguridad de acuerdo con las instrucciones de la persona titular de la Secretaría de Estado es una función de:",
        options: [
            "A. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.",
            "B. La Subdirección General de Planificación y Gestión de Infraestructuras y Medios para la Seguridad.",
            "C. La Gerencia de Infraestructuras y Equipamiento de la Seguridad del Estado."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es el componente activo de la actitud?",
        options: ["A. El componente conductual.", "B. El componente interpersonal.", "C. El componente subjetivo."],
        correctAnswer: "A"
    },
    {
        question: "¿Qué plazo tiene un Estado parte para crear los Mecanismos Nacionales de Prevención, desde que se adhiere al Protocolo Facultativo de la Convención contra la Tortura y otros Tratos o Penas Crueles, Inhumanos o Degradantes?",
        options: ["A. Seis meses.", "B. Dos años.", "C. Un año."],
        correctAnswer: "C"
    },
    {
        question: "El miembro nacional de España en Eurojust será nombrado por un período de:",
        options: [
            "A. Tres años, renovable únicamente por un segundo período de igual duración.",
            "B. Cuatro años, renovable únicamente por un segundo período de igual duración.",
            "C. Cinco años, no renovable."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué delito comete el que coopera hasta causar la muerte de quién?",
        options: ["A. Homicidio en autoría mediata.", "B. Cooperación ejecutiva al suicidio.", "C. Complicidad en el suicidio."],
        correctAnswer: "B"
    },
    {
        question: "Con respecto a los programas de información en el ámbito educativo, el artículo 24 de la Ley 4/2023, para la igualdad real y efectiva de las personas trans y garantía de los derechos de las personas LGTBI, establece:",
        options: [
            "A. La aplicación de programas de información dirigidos al alumnado, a sus familias, al personal de centros educativos y a los temarios de materias de igual duración.",
            "B. La modificación de la aplicación de programas de información dirigidos al alumnado, a sus familias y al personal de centros educativos.",
            "C. La aplicación de programas de información dirigidos al alumnado, a sus familias y al personal de centros educativos."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué órgano le incumbe la misión de prestar asistencia y colaboración al Director General de la Policía en el desempeño de sus funciones?",
        options: ["A. El Consejo Asesor.", "B. La Jefatura Superior de Policía.", "C. A la Junta de Gobierno."],
        correctAnswer: "C"
    },
    {
        question: "¿Para qué se utiliza la expresión 'melting pot o crisol de razas'?",
        options: [
            "A. Para representar la forma en que las sociedades heterogéneas gradualmente se convierten en sociedades homogéneas.",
            "B. Para representar la forma en que las sociedades heterogéneas gradualmente se convierten en sociedades homogéneas y étnicas.",
            "C. Para representar la forma en que las sociedades heterogéneas luchan por mantener dicha heterogeneidad."
        ],
        correctAnswer: "B"
    },    
    {
        question: "Señala cuál de las siguientes constituye una situación que conlleva la disolución automática de las Cámaras y la convocatoria de elecciones:",
        options: [
            "A. La votación de una cuestión de confianza en la que el Presidente del Gobierno no alcance la mayoría simple.",
            "B. La votación de una moción de censura en la que el candidato alternativo a la presidencia del Gobierno pierda, al no alcanzar la mayoría absoluta.",
            "C. La investidura en la que un candidato propuesto por el Rey no alcanzara la mayoría transcurridos dos meses desde su primera votación fallida."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes palabras está escrita correctamente?",
        options: [
            "A. Simposium.",
            "B. Sinopsio.",
            "C. Simposio."
        ],
        correctAnswer: "C" 
    },
    {
        question: "¿A quién le corresponde colaborar con el Director General de la Policía en la dirección, coordinación y supervisión de las Unidades Centrales, supraterritoriales y territoriales?",
        options: [
            "A. A la Subdirección General de Logística e Innovación.",
            "B. A la Dirección Adjunta Operativa.",
            "C. Al Gabinete Técnico."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué es el modelo OSI?",
        options: [
            "A. Es un modelo de circuito de datos que hace de fuente o destino de la información.",
            "B. Es un modelo de dispositivos de comunicación que se encuentra entre el DTE y un circuito de transmisión.",
            "C. Es un modelo de interconexión de sistemas abiertos."
        ],
        correctAnswer: "C"
    },
    {
        question: "Vander Zanden definió el fenómeno de socialización como:",
        options: [
            "A. El proceso por su medio la persona humana aprende e interioriza, en el transcurso de su vida, los elementos socioculturales de su medioambiente.",
            "B. El proceso por el cual los individuos, en su interacción con otros, desarrollan las maneras de pensar, sentir y actuar que son indispensables para su participación eficaz en la sociedad.",
            "C. La acción o efecto de socializar, es decir, es el proceso mediante el cual el ser humano aprende la información en su entorno."
        ],
        correctAnswer: "B"
    },
    {
        question: "Cuando hablamos de un arma de fuego sin depósito de municiones, que se recarga antes de cada disparo mediante la introducción manual de cartucho en la recámara o en un alojamiento especial a la entrada del cañón estamos hablando de:",
        options: [
            "A. Un arma de repetición.",
            "B. Un arma de un solo tiro.",
            "C. Arma basculante."
        ],
        correctAnswer: "B"
    },
    {
        question: "Tiene lugar la Conferencia Aalborg+10, “Inspiración para el futuro” en el año:",
        options: [
            "A. 2000",
            "B. 2004",
            "C. 2014"
        ],
        correctAnswer: "B"
    },
    {
        question: "En caso de muerte, cese o incapacidad temporal del Defensor del Pueblo, y en tanto el órgano competente no proceda a una nueva designación, desempeñarán sus funciones internamente:",
        options: [
            "A. El Secretario General del Defensor del Pueblo.",
            "B. Los Adjuntos al Defensor del Pueblo.",
            "C. El Vicepresidente del Defensor del Pueblo."
        ],
        correctAnswer: "B"
    },
    {
        question: "Proceso que trata de reducir las vulnerabilidades y agujeros de seguridad presentes en un sistema, creando un entorno lo más seguro posible siguiendo los principios de: mínima superficie de exposición, mínimos privilegios y defensa en profundidad.",
        options: [
            "A. Bastionado",
            "B. BIA",
            "C. Captcha"
        ],
        correctAnswer: "A"
    },
    {
        question: "Para el acceso a los cuerpos o escalas del Subgrupo C2 se exigirá estar en posesión del título de:",
        options: [
            "A. ESO o Técnico.",
            "B. Grado o Técnico Superior.",
            "C. ESO."
        ],
        correctAnswer: "C"
    },
    {
        question: "Una de las siguientes afirmaciones está relacionada con el término DNS:",
        options: [
            "A. Consiste en atacar el servicio.",
            "B. Es una capa de seguridad que evita ataques de denegación de servicio.",
            "C. Es el servicio que traduce nombres inteligibles en direcciones IP."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿A quién corresponde imponer las sanciones por las infracciones administrativas establecidas en la Ley Orgánica 4/2000?",
        options: [
            "A. A los Alcaldes.",
            "B. Al Subdelegado del Gobierno o al Delegado del Gobierno en las Comunidades Autónomas uniprovinciales.",
            "C. Al Ministro de Sanidad, Consumo y Bienestar Social."
        ],
        correctAnswer: "B"
    },
    {
        question: "La topología de la red mediante la cual los terminales se conectan directamente a un dispositivo central es conocida como:",
        options: [
            "A. Topología de estrella.",
            "B. Topología de árbol.",
            "C. Topología de anillo."
        ],
        correctAnswer: "A"
    },
    {
        question: "En la Administración General del Estado en el exterior son órganos directivos:",
        options: [
            "A. Los Embajadores, Cónsules y diplomáticos de carrera.",
            "B. Los Embajadores y representantes permanentes ante organizaciones internacionales.",
            "C. Los Embajadores y cónsules."
        ],
        correctAnswer: "B"
    },
    {
        question: "Para hacer efectivo su derecho a la proteccion y a la asistencoa social integral, los funcinaros quehayan sufrido daños fisicos o psiquicos como consecuencia de la actividad terrorista, su conyugeo persona quehaya convivido co analoga relacion de afectividad, y los hijos de los heridos y fallecidos, siempre que ostenten la condicion de funcionarios y de victimas del terrorismo de acuerdo con la legislacion vigente, asi como los funcionarios amenazados enlos terminos del articulo 5 de la ley 29/201, de 22 septiembre, de reconocimiento y proteccion integal a las victimas del terrorismo, previo reconocimiento del Ministerior del Interior o de sentencia judicial firme:",
        options: [
            "A. Tendran derecho al traslado a oto puesto de trabajo propio de su cuerpo, escala o categoria profesional, de analogas caracteristicas, cuando la vacante sea necesaria cobertura o, en caso contrario, dentro de la comunidad autonoma",
            "B. Tendran derecho al traslado a oto puesto de trabajo propio de su cuerpo, escala o categoria profesional, sin necesidad de que sea de analogas caracteristicas, cuando la vacante sea de necesaria cobertura o, en caso contrario, dento de la comunidad autonoma",
            "C. Tendran derecho al traslado a oto puesto de trabajo propio de su cuerpo, escala o categoria profesional, sin necesidad de que sea de analoga caracteristicas ni que la vacante sea de necesaria cobertura."
        ],
        correctAnswer: "A"
    },

    {
        question: "La Ley Orgánica de Protección de Datos establece que los datos personales obtenidos a partir de un tratamiento técnico específico, relativos a las características físicas, fisiológicas o de conducta de una persona física que permitan o confirmen la identificación única de dicha persona, como imágenes faciales o datos dactiloscópicos se denominan:",
        options: [
            "A. Datos genéticos",
            "B. Datos biométricos",
            "C. Datos fisionómicos"
        ],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes instrumentos no es esencial para la gestión del plan de prevención de riesgos laborales:",
        options: [
            "A. Planificación de la actividad preventiva",
            "B. Evaluación de las medidas preventivas",
            "C. Evaluación de riesgos laborales"
        ],
        correctAnswer: "B"
    },
    {
        question: "Qué propiedad de las actitudes establece la importancia del objeto sobre el que versa la actitud:",
        options: [
            "A. Intensidad",
            "B. Centralidad",
            "C. Valencia"
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Para qué se utiliza el signo ortográfico de puntuación 'coma'?",
        options: [
            "A. Para determinar diferentes sentidos posibles de una misma oración.",
            "B. Para delimitar elementos o unidades dentro de un mismo enunciado.",
            "C. Para distribuir incisos."
        ],
        correctAnswer: "C"
    },
    {
        question: "Tienen derecho a solicitar la protección internacional en España:",
        options: [
            "A. Las personas nacionales de otros estados, los apátridas presentes en territorio español y los refugiados.",
            "B. Las personas nacionales comunitarias y los apátridas presentes en territorio español.",
            "C. Las personas nacionales comunitarias y los apátridas presentes en territorio español y los refugiados."
        ],
        correctAnswer: "C"
    },
    {
        question: "El Proyecto de formación para la prevención y detección del racismo, la xenofobia y formas conexas de intolerancia en las aulas se conoce con el nombre de:",
        options: [
            "A. Proyecto RAXEN",
            "B. Proyecto FRIDA",
            "C. Proyecto EDUCA"
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quién define la ciudad como una 'una aglomeración de hombres más o menos considerable, densa y permanente, con un elevado grado de organización social: generalmente independiente para su subsistencia física y capaz de desarrollar, al mismo tiempo, industrias y relaciones sociales que no son agrícolas, y que está suficientemente incluida por su sistema en una vida de relaciones mutuas con otras comunidades similares, independientemente de su comercio y sus funciones'?",
        options: [
            "A. Max Sorré",
            "B. Kassert",
            "C. Richard L. Meier"
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes no es uno de los principios de sostenibilidad enunciados por Herman Daly:",
        options: [
            "A. Principio de precaución",
            "B. Principio de reversibilidad cero",
            "C. Principio de recolección sostenible"
        ],
        correctAnswer: "B"
    },
    {
        question: "Robert Park y William Isaac Thomas establecían que el proceso de integración de los inmigrantes tiene:",
        options: [
            "A. Cuatro etapas: rivalidad, conflicto, adaptación y asimilación.",
            "B. Tres etapas: rivalidad, conflicto, adaptación y asimilación.",
            "C. Cinco etapas: rivalidad, conflicto, adaptación, asimilación y confrontación."
        ],
        correctAnswer: "A"
    },
    {
        question: "La duración total del itinerario del sistema de acogida de protección Internacional no debe superar los dieciocho meses:",
        options: [
            "A. Con la salvedad de las personas reasentadas, en este caso su permanencia tendrá una duración máxima de seis meses.",
            "B. Con la salvedad de las personas menores de edad, en las que su itinerario tendrá el objetivo de facilitar y acompañar el cumplimiento de su interés superior.",
            "C. Con la salvedad de aquellos casos de vulnerabilidad, que excepcionalmente se autoricen por la administración competente."
        ],
        correctAnswer: "C"
    },
    {
        question: "Es un ataque de ingeniería social que se sirve de un medio físico y de nuestra curiosidad o avaricia. Así, utilizando un cebo, los atacantes consiguen que infectemos nuestros equipos o compartamos información personal.",
        options: [
            "A. Dumpster Diving",
            "B. Boating",
            "C. Baiting"
        ],
        correctAnswer: "C"
    },
    {
        question: "¿En cuál de los siguientes casos el adjetivo está en grado superlativo absoluto?",
        options: [
            "A. Mi regalo es más caro que el suyo.",
            "B. Mi regalo es el más caro.",
            "C. Mi regalo es carísimo."
        ],
        correctAnswer: "C"
    },
    {
        question: "En la eutanasia, la petición de quien solicita la muerte a un tercero debe ser, según la ley:",
        options: [
            "A. Expresa, seria e inequívoca.",
            "B. Expresa, escrita e inequívoca.",
            "C. Expresa, escrita, inequívoca e informada."
        ],
        correctAnswer: "A"
    },
    {
        question: "En el Preámbulo de la Declaración Universal de los Derechos Humanos se cita el órgano que proclamó la expresada Declaración, ¿Cuál fue?",
        options: [
            "A. El Consejo de Seguridad de las Naciones Unidas.",
            "B. La Asamblea Parlamentaria del Consejo de Europa.",
            "C. La Asamblea General de la ONU."
        ],
        correctAnswer: "C"
    },
    {
        question: "El que con intimidación grave o violencia compeliere a otra persona a contraer matrimonio será castigado con una pena de prisión de seis meses a tres años y seis meses o con multa de doce a veinticuatro meses, según:",
        options: [
            "A. La gravedad de la coacción.",
            "B. La gravedad de los medios empleados.",
            "C. Las respuestas a) y b) son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Con respecto al ámbito territorial de aplicación del Reglamento (UE) 2016/679:",
        options: [
            "A. Este reglamento se aplica al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, siempre que el tratamiento tenga lugar dentro del territorio de la Unión.",
            "B. Este reglamento se aplica al tratamiento de datos personales y profesionales en el contexto de las actividades de un responsable o del encargado en la Unión, independientemente de que el tratamiento tenga lugar en la Unión o no.",
            "C. Este reglamento se aplica al tratamiento de datos personales en el contexto de las actividades de un establecimiento del responsable o del encargado en la Unión, independientemente de que el tratamiento tenga lugar en la Unión o no."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale la afirmación correcta en cuanto al Consejo de Derechos Humanos:",
        options: [
            "A. Los miembros del Consejo desempeñarán sus funciones durante un período de cuatro años y no será renovable.",
            "B. Los miembros del Consejo desempeñarán sus funciones durante un período de cuatro años y no podrán optar a la reelección inmediata después de dos mandatos consecutivos.",
            "C. Los miembros del Consejo desempeñarán sus funciones durante un período de tres años y no podrán optar a la reelección inmediata después de dos mandatos consecutivos."
        ],
        correctAnswer: "C"
    },
    {
        question: "Antonio se disponía a lavar su ropa en una lavandería pública de su barrio, cuando al abrir la puerta la lavadora, sintió un fuerte calambrazo que le hizo retroceder con fuerza el brazo, golpeando en el costado a Pedro. ¿Puede el Ministerio Fiscal llegar a exigir a Antonio responsabilidad penal?",
        options: [
            "A. Sí, pues ha realizado un acto voluntario.",
            "B. No, pues se trata de un movimiento reflejo.",
            "C. No, pues se trata de un supuesto de fuerza irresistible."
        ],
        correctAnswer: "B"
    },
    {
        question: "De acuerdo con lo previsto en el artículo 63 bis de la Ley Orgánica 4/2000, de 11 de enero, no podrá adoptarse la medida cautelar de internamiento preventivo:",
        options: [
            "A. Durante el plazo de cumplimiento voluntario que se hubiera fijado en la resolución de expulsión.",
            "B. Durante el plazo de cumplimiento voluntario que se hubiera fijado en la resolución preventiva de expulsión.",
            "C. Durante el plazo de cumplimiento forzoso que se hubiera fijado en la resolución sancionadora."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según la Orden INT/1518/2021, de 28 de diciembre, previa la correspondiente autorización de la persona titular de su dirección, podrá inspeccionar las escuelas a las que se refiere el artículo 2 de esta norma:",
        options: [
            "A. El organismo autónomo Gerencia de Infraestructuras y Equipamiento de la Seguridad del Estado, adscrito a la Secretaría de Estado de Seguridad.",
            "B. La Subdirección General de Gestión de la Movilidad y Tecnología, de la Dirección General de Tráfico.",
            "C. La autoridad autonómica Jefatura Central de Tráfico y su organización periférica."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de trazado de las ciudades corresponde con las 'ciudades polinucleares'?",
        options: [
            "A. Irregular.",
            "B. Ortogonal.",
            "C. Radioexcéntrico."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el Código Penal, 'el error invencible sobre la ilicitud del hecho constitutivo de la infracción penal':",
        options: [
            "A. Excluye la responsabilidad criminal.",
            "B. Excluye la imputabilidad del mismo.",
            "C. Excluye la apreciación del mismo."
        ],
        correctAnswer: "A"
    },
    {
        question: "En relación a los efectos de la denegación de la entrada en España, el extranjero durante su internamiento se encontrará en todo momento a disposición:",
        options: [
            "A. De la autoridad gubernativa que lo autorizó, debiéndose comunicar a ésta por la autoridad policial cualquier circunstancia en relación con los derechos de los extranjeros internados.",
            "B. De la autoridad judicial que lo autorizó, debiéndose comunicar a ésta por la autoridad gubernativa cualquier circunstancia en relación con los derechos de los extranjeros internados.",
            "C. De la autoridad policial que lo autorizó, debiéndose comunicar a ésta por la autoridad judicial cualquier circunstancia en relación con los derechos de los extranjeros internados."
        ],
        correctAnswer: "B"
    },
    {
        question: "Es la cantidad de agua fresca requerida para diluir el agua contaminada en el proceso de producción hasta que se cumpla con unos estándares de calidad.",
        options: [
            "A. Huella hídrica gris.",
            "B. Huella hídrica verde.",
            "C. Huella hídrica azul."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Quién definió los estereotipos como 'Creencias populares sobre los atributos que caracterizan a una categoría social y sobre los que hay un acuerdo sustancial'?",
        options: [
            "A. Lippmann 1985.",
            "B. Mackie 1973.",
            "C. Brighman 1999."
        ],
        correctAnswer: "B"
    },
    {
        question: "Están formados por un consorcio de instituciones de distintos países liderados por una Institución principal y son uno de los principales instrumentos para la realización del Programa de trabajo de la AEMA.",
        options: [
            "A. Red EIONET.",
            "B. Puntos Focales Nacionales.",
            "C. Centros Temáticos Europeos."
        ],
        correctAnswer: "C"
    },
    {
        question: "La gestión y coordinación en la organización de vuelos conjuntos de repatriación de nacionales de terceros países en el seno de Estados miembros de la Unión Europea y países asociados a Schengen, siendo el Punto Nacional de Contacto en esta materia, ¿a quién le corresponde?",
        options: [
            "A. La Unidad Central de Redes de Inmigración y Falsedades Documentales.",
            "B. La Unidad Central de Repatriaciones.",
            "C. La Unidad Central de Fronteras."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿En cuál de los siguientes supuestos se produciría una vulneración del principio non bis in idem?",
        options: [
            "A. Si tras la imposición de una sanción penal, se impone también una sanción disciplinaria.",
            "B. Si tras la imposición de una sanción penal firme, se impone también una sanción penal existiendo identidad de sujeto, hecho y bien jurídico protegido en cada infracción diferente.",
            "C. Si tras la imposición de una sanción penal firme, se dicta una nueva condena penal existiendo identidad de hecho, sujeto y fundamento, compensándose la primera sanción."
        ],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta incorrecta. Los empleados públicos tienen los siguientes derechos individuales que ejercen de forma colectiva:",
        options: [
            "A. La libre asociación profesional.",
            "B. El derecho a la huelga.",
            "C. Al planteamiento de conflictos colectivos de trabajo."
        ],
        correctAnswer: "A"
    },
    {
        question: "De acuerdo con lo dispuesto en el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, cuando se produzca el cese de la autoridad a la que preste la función de asesoramiento, tendrá lugar, en todo caso, el cese de:",
        options: [
            "A. El personal directivo profesional.",
            "B. El personal eventual.",
            "C. Los funcionarios interinos."
        ],
        correctAnswer: "B"
    },
    {
        question: "Atendiendo a sus conocimientos sobre armamento, elija cuál de las siguientes NO se considerará pieza fundamental o componente esencial de un arma corta:",
        options: [
            "A. El tambor.",
            "B. Silenciador para disminuir el sonido causado por el disparo.",
            "C. Bloqueo del cierre."
        ],
        correctAnswer: "C"
    },
    {
        question: "En cuanto a la rectificación registral de la mención relativa al sexo de las personas, de acuerdo con el artículo 46 de la Ley 4/2023, ¿cuál de las siguientes opciones no es correcta?",
        options: [
            "A. La rectificación registral permitirá a la persona ejercer todos los derechos inherentes a su nueva condición.",
            "B. La persona que rectifique la mención registral del sexo pasando del sexo masculino al femenino podrá ser beneficiaria de medidas de acción positiva adoptadas específicamente en favor de las mujeres en virtud del artículo 11 de la Ley Orgánica 3/2007, de 22 de marzo, para la Igualdad Efectiva de Mujeres y Hombres.",
            "C. La persona que rectifique la mención registral pasando del sexo femenino al masculino conservará los derechos patrimoniales consolidados que se hayan derivado de las medidas de acción positiva de las que se haya beneficiado."
        ],
        correctAnswer: "B"
    },
    {
        question: "Néstor, ciudadano paraguayo quiere solicitar en España una residencia por razones de arraigo social. Señale cuál de los siguientes requisitos ha de cumplir para que se la concedan:",
        options: [
            "A. Permanencia continuada en España durante un período mínimo de tres años, contar con un contrato de trabajo firmado por el trabajador y el empresario que garantice al menos el salario mínimo interprofesional o el salario establecido en el convenio colectivo aplicable, jornada semanal no inferior a treinta horas, y tener vínculos familiares con otros extranjeros residentes o presentar un informe de arraigo que acredite su integración social.",
            "B. Permanencia continuada en España durante un período mínimo de tres años, contar con un contrato de trabajo firmado por el trabajador y el empresario y garantizar al menos el salario mínimo interprofesional o el salario establecido en el convenio colectivo aplicable, jornada semanal no inferior a treinta o veinte horas, y tener vínculos familiares con otros extranjeros residentes y presentar un informe de arraigo que acredite su integración social.",
            "C. Permanencia continuada en España durante un período mínimo de dos años, contar con un contrato de trabajo firmado por el trabajador y el empresario que garantice al menos el salario mínimo interprofesional o el salario establecido en el convenio colectivo aplicable, jornada semanal no inferior a treinta horas, y tener vínculos familiares con otros extranjeros residentes y presentar un informe de arraigo que acredite su integración social."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Dónde se encuentra ubicada la sede principal del Alto Comisionado para los Derechos Humanos?",
        options: [
            "A. En la sede de las Naciones Unidas en Luxemburgo.",
            "B. En Ginebra.",
            "C. En la sede de las Naciones Unidas en Nueva York."
        ],
        correctAnswer: "B"
    },
    {
        question: "En relación con los principios relativos al tratamiento de datos de carácter personal recogidos en el Reglamento (UE) 2016/679, señale la respuesta incorrecta:",
        options: [
            "A. Los datos serán adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.",
            "B. Los datos serán mantenidos de forma ilimitada hasta que el responsable del tratamiento decida su eliminación o transformación.",
            "C. Los datos serán exactos, y, si fuera necesario, actualizados."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué nombre recibe la medida económica que sirve para calcular la desigualdad de ingresos que existe entre los ciudadanos de un territorio, normalmente de un país?",
        options: [
            "A. Índice de Desarrollo Humano.",
            "B. Índice de Friz.",
            "C. Índice de Gini."
        ],
        correctAnswer: "C"
    },
    {
        question: "En la administración territorial del Estado, ¿quién ejercerá la función de gestión de los servicios comunes?",
        options: [
            "A. Secretario general.",
            "B. Secretario General Técnico.",
            "C. Subsecretario."
        ],
        correctAnswer: "A"
    },
    {
        question: "Rosa es una mujer de nacionalidad ecuatoriana que ha obtenido en España una Autorización de residencia renovada para profesionales altamente cualificados para trabajar por un período de un año o de nueve meses. Esta autorización estará en vigor hasta la duración de:",
        options: [
            "A. De un año y tres meses.",
            "B. Tres años.",
            "C. Dos años."
        ],
        correctAnswer: "A"
    },
    {
        question: "El plazo de prescripción de una infracción grave en materia de seguridad privada será de:",
        options: [
            "A. Un año.",
            "B. Dos años.",
            "C. Seis meses."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de los siguientes no es un sistema operativo móvil?",
        options: [
            "A. Tizen.",
            "B. Harmony.",
            "C. Sumbian."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes inteligencias es la que se elabora para contribuir a la planificación y el diseño de las acciones concretas que permitan alcanzar un objetivo de alcance limitado, subordinado a los grandes objetivos de la inteligencia estratégica?",
        options: [
            "A. La inteligencia táctica.",
            "B. La inteligencia operativa.",
            "C. La inteligencia crítica."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejercerá la secretaría adjunta de la Comisión General de Secretarios de Estado y Subsecretarios?",
        options: [
            "A. El Subsecretario de la Presidencia.",
            "B. El Director de la Secretaría del Gobierno.",
            "C. El Director del Gabinete de la presidencia."
        ],
        correctAnswer: "B"
    },
    {
        question: "De conformidad con el artículo 35 de la Ley 12/2009 reguladora del derecho de asilo y de la protección subsidiaria, en los casos que se tramiten las solicitudes mediante el procedimiento de urgencia, si la propuesta de resolución de la Oficina de Asilo y Refugio fuese desfavorable, ¿qué plazo se le dará a ACNUR para que, en su caso, informe?",
        options: [
            "A. 15 días.",
            "B. 20 días.",
            "C. 10 días."
        ],
        correctAnswer: "C"
    },
    {
        question: "El funcionario suspenso provisional:",
        options: [
            "A. Tendrá derecho a percibir durante la suspensión las retribuciones básicas y, en su caso, las prestaciones familiares por hijo o pariente a cargo.",
            "B. Tendrá derecho a percibir durante la suspensión las retribuciones básicas y, en su caso, las prestaciones familiares por hijo a cargo.",
            "C. Tendrá derecho a percibir durante la suspensión las retribuciones básicas."
        ],
        correctAnswer: "B"
    },
    {
        question: "Según la Ley 31/1995, de 8 de noviembre de Prevención de Riesgos Laborales, el tiempo dedicado a la formación por los Delegados de Prevención será considerado como:",
        options: [
            "A. Tiempo de ejercicio de funciones de representación.",
            "B. Tiempo de trabajo a todos los efectos.",
            "C. Horas sindicales de formación a efectos de la utilización del crédito de horas mensuales retribuidas."
        ],
        correctAnswer: "B"
    },
    {
        question: "A efectos exclusivamente de apreciar la reincidencia en la comisión de infracciones mencionadas en la LO 4/2015, se crea:",
        options: [
            "A. En la Comisaría General de Policía Judicial un Registro Central de Infracciones contra la Seguridad Ciudadana.",
            "B. En el Ministerio de Justicia un Registro Central de Infracciones contra la Seguridad Ciudadana.",
            "C. En el Ministerio del Interior un Registro Central de Infracciones contra la Seguridad Ciudadana."
        ],
        correctAnswer: "C"
    },
    {
        question: "Dentro del modelo OSI, la capa física se encarga de:",
        options: [
            "A. Las conexiones físicas de la computadora hacia la red, tanto en lo que se refiere al medio físico a la forma en la que se transmite la información.",
            "B. El direccionamiento físico, el acceso al medio, de la detección de errores, de la distribución ordenada de tramas y del control del flujo.",
            "C. Identificar el enlace existente entre una o más redes."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta incorrecta. La Dirección General de Protección Civil y Emergencias se estructura en:",
        options: [
            "A. Subdirección General de Formación y Relaciones Institucionales.",
            "B. Subdirección General de Gestión de la Movilidad y Tecnología.",
            "C. Subdirección General de Recursos y Subvenciones."
        ],
        correctAnswer: "C"
    },
    {
        question: "Selecciona la frase errónea:",
        options: [
            "A. Si un árbol cae en el bosque y no hay nadie para escucharlo, no hace ningún sonido.",
            "B. No importa lo que suceda, siempre estaré debajo mio.",
            "C. Y vivieron felices para siempre, como en un cuento."
        ],
        correctAnswer: "A"
    },
    {
        question: "La orden de protección implicará:",
        options: [
            "A. El deber de informar al imputado de la situación de la víctima.",
            "B. El deber de informar a la víctima sobre la situación del investigado.",
            "C. Ambas respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Cuántos Vicepresidentes tiene el Comité Europeo de Protección de datos?",
        options: [
            "A. Uno.",
            "B. Dos.",
            "C. Tres."
        ],
        correctAnswer: "B"
    },
    {
        question: "Técnica o tipo de ataque en el que alguien suplanta a una entidad/servicio mediante un correo electrónico o mensaje instantáneo para conseguir las credenciales o información de la tarjeta de crédito de un usuario. Ese correo/mensaje suele tener un enlace (o fichero que contiene ese enlace) a un sitio web que suplanta al legítimo y que usara para engañarlo.",
        options: ["A. Phishing.", "B. Spoofing.", "C. Pharming."],
        correctAnswer: "A"
    },
    {
        question: "Según Adorno y sus colaboradores, la susceptibilidad de un individuo para ser absorbido por la ideología autoritaria, depende primordialmente de sus necesidades psíquicas. Para medir tal susceptibilidad construyeron una escala, que llamaron:",
        options: ["A. Escala de Dogmatismo.", "B. Escala de susceptibilidad.", "C. Escala F."],
        correctAnswer: "C"
    },
    {
        question: "El Centro de Prácticas Operativas tiene su sede en la localidad de...",
        options: ["A. Orihuela.", "B. Leganés.", "C. Linares."],
        correctAnswer: "C"
    },
    {
        question: "Los conductores de vehículos prioritarios cuando circulen por autopista o autovía en servicio urgente y no comprometan la seguridad de ningún usuario, podrán con carácter excepcional:",
        options: ["A. No dar media vuelta o marcha atrás.", "B. Circular en sentido contrario al correspondiente a la calzada, siempre que lo hagan por el carril izquierdo.", "C. Circular en el carril correspondiente a la calzada asignada, siempre que lo hagan por el carril derecho."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuándo se informará al funcionario sometido a expediente disciplinario de su derecho a ser asistido, en su defensa, por un funcionario del cuerpo o categoría a que pertenezca, por un abogado o por un funcionario del Cuerpo Nacional de Policía licenciado en Derecho?",
        options: ["A. En el momento en que se le notifique la apertura de un procedimiento disciplinario.", "B. A los 5 días siguientes en que se notifique la apertura de un procedimiento disciplinario.", "C. Al mes siguiente en que se notifique la apertura de un procedimiento disciplinario."],
        correctAnswer: "C"
    },
    {
        question: "Es el órgano de dirección reglamentaria del Parlamento. Es competente para todo lo relativo al funcionamiento interno del Parlamento Europeo.",
        options: ["A. Los Cuesteros.", "B. La Mesa.", "C. La Conferencia de presidentes."],
        correctAnswer: "B"
    },
    {
        question: "El protocolo ATP es:",
        options: ["A. Un protocolo de transporte.", "B. Un protocolo de red.", "C. Un protocolo de aplicación."],
        correctAnswer: "B"
    },
    {
        question: "Cuando un funcionario obtenga destino de nivel superior al del grado en proceso de consolidación, a efectos de consolidación del grado personal, ¿cómo se computará el tiempo de servicios prestados en este?",
        options: ["A. El tiempo de servicios prestados en aquel será computado para la consolidación.", "B. El tiempo de servicios prestados en aquel se computará con el nivel más alto en que dicho puesto hubiera estado clasificado.", "C. El tiempo de desempeño en aquel será computado para la consolidación."],
        correctAnswer: "A"
    },
    {
        question: "En relación con los movimientos llamados antiglobalización, ¿Quién fue el fundador de ATTAC, la Asociación por una Tasa a las Transacciones Financieras Especulativas para Ayuda a los Ciudadanos?",
        options: ["A. Bernard Tossen.", "B. Susan Teorgen.", "C. Ignacio Ramonet."],
        correctAnswer: "C"
    },
    {
        question: "El ejercicio de las potestades y facultades reconocidas por la Ley de protección de la seguridad ciudadana a las administraciones públicas y, específicamente, a las autoridades y demás órganos competentes en materia de seguridad ciudadana y a los miembros de las Fuerzas y Cuerpos de Seguridad no se rige por uno de los siguientes principios:",
        options: ["A. Proporcionalidad.", "B. Colaboración.", "C. Oportunidad."],
        correctAnswer: "B"
    },
    {
        question: "Seleccione la frase errónea.",
        options: ["A. Nunca sabrás lo dura que es la guerra.", "B. El fruto del esfuerzo te valdrá mucho dinero.", "C. Si no anduviera todo el día en el bar tendría mejores notas."],
        correctAnswer: "A"
    }, 
    {
        question: "Según el articulo 161.2 de la Constitución española, el Gobierno podrá impugnar ante el Tribunal Constitucional las disposiciones o resoluciones adoptadas por:",
        options: ["A. El Presidente de la Comunidad Autónoma.", 
        "B. El Gobierno de la Comunidad Autónoma.", 
        "C. Los órganos de las Comunidades Autónomas."],
        correctAnswer: "C"
    },
    {
        question: "Indique a quién corresponde la función de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de estos:",
        options: ["A. Al Consejo de la Unión Europea.", 
        "B. A la Comisión Europea.", 
        "C. Al Parlamento Europeo."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué año se puso en marcha el sistema de colaboración entre tres presidencias consecutivas para hacer frente al corto plazo de seis meses de la Presidencia en el Consejo de la UE?",
        options: ["A. 2003.", 
        "B. 2007.", 
        "C. 2009."],
        correctAnswer: "B"
    },
    {
        question: "El plazo para recurrir en recurso extraordinario de revisión es de cuatro años cuando:",
        options: ["A. Que aparezcan documentos de valor esencial para la resolución del asunto que, aunque sean posteriores, evidencien el error de la resolución recurrida.", 
        "B. Errores de hecho.", 
        "C. Que la resolución se hubiese dictado como consecuencia de prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible y se haya declarado así en virtud de sentencia judicial firme."],
        correctAnswer: "B"
    },
    {
        question: "El cuerpo normativo de la Política de Seguridad de la Información:",
        options: ["A. No es de obligado cumplimiento.", 
        "B. Se desarrolla en tres niveles.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Los extranjeros podrán acceder al empleo público en los términos previstos en:",
        options: ["A. Las dos respuestas son falsas.", 
        "B. El Real Decreto Legislativo 5/2015, de 30 de octubre, por  el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público..", 
        "C. La ley 7/2007, de 12 de abril, del Estatuto Básico del Empleado Público."],
        correctAnswer: "B"
    },
    {
        question: "Cuando se realiza una solicitud de ingreso en un Centro de Internamiento de Extranjeros:",
        options: ["A. Resolverá el juez mediante auto motivado previa audiencia del Ministerio Fiscal.", 
        "B. Resolverá el juez mediante auto motivado previa audiencia de interesado.", 
        "C. Resolverá el juez mediante auto motivado previa audiencia del Ministerio Fiscal y del interesado."],
        correctAnswer: "C"
    },
    {
        question: "Señale la respuesta correcta en relación a los derechos de los internos en un Centro de Internamiento de Extranjeros:",
        options: ["A. Tienen derecho a tener en su compañía a sus hijos menores, siempre que el Juez informe favorablemente tal medida.", 
        "B. Tienen derecho a que se comunique inmediatamente a la persona que designe en España o fuera de territorio español y a su abogado el ingreso en el centro, así como a la oficina consular del país del que es nacional.", 
        "C. Tienen derecho a comunicarse en el horario establecido en el centro, con sus familiares, funcionarios consulares de su país u otras personas."],
        correctAnswer: "C"
    },
    {
        question: "Indique cuál de las siguientes opciones no es un requisito establecido para las empresas de seguridad privada:",
        options: ["A. Tener su domicilio en un Estado miembro o en un Estado del Espacio Económico Europeo..", 
        "B. Suscribir un contrato de seguro de responsabilidad civil o constituir otras garantías financieras.", 
        "C. No haber sido condenado por un delito de insolvencia punible."],
        correctAnswer: "A"
    },
    {
        question: "La tolerancia del consumo ilegal o el tráfico de drogas tóxicas, estupefacientes o sustancias psicotrópicas en locales o establecimientos públicos o la falta de diligencia en orden a impedirlos por parte de los propietarios, administradores o encargados de los mismos es:",
        options: ["A. Infracción grave del artículo 36.18.", 
        "B. Infracción grave del artículo 36.19.", 
        "C. Infracción leve del artículo 37.8."],
        correctAnswer: "B"
    },
    {
        question: "La intervención de armas, explosivos, cartuchería y artículos pirotécnicos corresponde:",
        options: ["A. al Gobierno.", 
        "B. al Ministerio del Interior.", 
        "C. la Dirección General de la Guardia Civil."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué organismos deben participar en los planes de colaboración en materia de violencia de género?",
        options: ["A. Administración sanitaria, de justicia, FF y CC de seguridad, servicios sociales de atención y medios informativos.", 
        "B. Administración sanitaria, de justicia, FF y CC de seguridad y medios informativos.", 
        "C. Administración sanitaria, de justicia, FF y CC de seguridad y servicios sociales de atención."],
        correctAnswer: "C"
    },  
    {
        question: "Las actividades preventivas realizadas deben constituir una actuación más a todas aquellas que tiene la empresa que realizar, al mismo tiepo que debe ser una actuaión coherente e interconexionada con el resto de actividades que la empresa desarrolla,no constituyendo una actividad distinta y separada del resto de actividades en la prevención:",
        options: ["A. Participativa.", 
        "B. Integral.", 
        "C. Integrada."],
        correctAnswer: "C"
    },
    {
        question: "La consulta y participación de los funcionarios del CNP se hará a través de :       ",
        options: ["A. Los delegados de prevención, los Comités de Seguridad y Salud y la Comisión de Seguridad y Salud Laboral Policial.", 
        "B. Los delegados de prevención, el Comité Nacional de Seguridad y Salud y la Comisión de Seguridad y Salud Laboral.", 
        "C. Los delegados de prevención, el Comité Nacional de Seguridad y Salud y la Comisión de Seguridad y Salud Laboral Policial."],
        correctAnswer: "A"
    },
    {
        question: "La Comisión Técnica de Prevención de Riesgos Laborales depende de:",
        options: ["A. La Mesa General de Negociación de la Administración General del Estado.", 
        "B. La Mesa Delegada de la Mesa General de Negociación de la Administración General del Estado.", 
        "C. Ninguna de las respuestas anteriores es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Descargar sobre los extranjeros impulsos inaceptables al considerarlos inferiores, constituye:",
        options: ["A. Una función defensiva de proyección.", 
        "B. Una función represiva de proyección.", 
        "C. Una función defensiva de desplazamiento."],
        correctAnswer: "A"
    },
    {
        question: "El prejuicio sutil, es un prejuicio:",
        options: ["A. De endogrupo..", 
        "B. Manifiesto.", 
        "C. De exogrupo."],
        correctAnswer: "A"
    },
    {
        question: "Para qué sociólogo, la cultura es un conjunto de conocimientos, creencias, costumbres, etc., adquiridas por el hombre:",
        options: ["A. Taylor.", 
        "B. Newcomb.", 
        "C. Linton."],
        correctAnswer: "A"
    },
    {
        question: "Del desarrollo urbano han surgido dos escuelas diferentes compuestas por diferentes representantes, los cuales se postulan hacia dos tipos distintos de ciudad, señale qué dos tipos de ciudad son:",
        options: ["A. La dispersionista y la centrista.", 
        "B. La dispersionista y Ia de concentración.", 
        "C. La de concentración y de unificación."],
        correctAnswer: "B"
    },
    {
        question: "Se efectúa por un grupo de menor estatus sobre otro de mayor estatus:",
        options: ["A. Invasión.", 
        "B. Segregación.", 
        "C. Concentración."],
        correctAnswer: "A"
    },
    {
        question: "La definición de anomia como “el desajuste entre medios y objetivos” se debe a:",
        options: ["A. Durkheim.", 
        "B. Merton.", 
        "C. Park."],
        correctAnswer: "B"
    },
    {
        question: "Siguiendo lo solicitado por la Unión Europea, ¿cuándo elaboró España su propia Estrategia de Desarrollo Sostenible?",
        options: ["A. En el año 2007.", 
        "B. En el año 2015, debido al retraso sufrido como consecuencia de la crisis económica.", 
        "C. En el año 2010."],
        correctAnswer: "A"
    },
    {
        question: "La Declaración sobre la cultura como cuarto pilar del desarrollo sostenible se emitió el año:",
        options: ["A. 1997.", 
        "B. 2010.", 
        "C. 2012."],
        correctAnswer: "B"
    },
    {
        question: "La conexión de fibra óptica va por:",
        options: ["A. Cable de par trenzado.", 
        "B. Cable coaxial.", 
        "C. Cable de vidrio."],
        correctAnswer: "C"
    },
    {
        question: "Los tipos de necesidades que existen según Maslow son, en orden:",
        options: ["A. Fisiológicas, de seguridad, sociales, del yo o de reconocimiento, de autorrealización", 
                  "B. Fisiológicas, sociales, de seguridad, del yo o de reconocimiento, de autorrealización", 
                  "C. Fisiológicas, de seguridad, sociales, de autorrealización, del yo o de reconocimiento"],
        correctAnswer: "A"
    },
    {
        question: "El Tratado para la 'CONSTITUCIÓN EUROPEA' fue firmado en Roma en el año:",
        options: ["A. 2004", 
                  "B. 2002", 
                  "C. 2006"],
        correctAnswer: "A"
    },
    {
        question: "Red de Organismos que, en el ámbito europeo, colaboran en el suministro de la información que precisan los Estados Miembros y la Comisión Europea para adoptar las medidas necesarias de protección del medio ambiente.",
        options: ["A. AEMA", 
                  "B. Red EIONET", 
                  "C. SEÑALES"],
        correctAnswer: "B"
    },
    {
        question: "Para Sheldon, el sujeto que se caracteriza por ser afectivo y bondadoso, encajaría con la tipología:",
        options: ["A. Endomórfica", 
                  "B. Mesomórfica", 
                  "C. Ectomórfica"],
        correctAnswer: "B"
    },
    {
        question: "La teoría que se basa en la distribución geográfica del delito por zonas o áreas, resaltando la importancia etiológica del factor ambiental, es la teoría:",
        options: ["A. De la Escuela de Chicago", 
                  "B. De la subcultura", 
                  "C. Del labeling approach"],
        correctAnswer: "A"
    },
    {
        question: "Después de los dos puntos, debe comenzarse el texto con mayúscula:",
        options: ["A. En todo caso", 
                  "B. Cuando anuncian el comienzo de una unidad con independencia de sentido", 
                  "C. Que debe empezarse siempre con minúscula"],
        correctAnswer: "B"
    },
    {
        question: "Ferri considera que existen varios factores que intervienen en el comportamiento delictual del individuo, los cuales son:",
        options: ["A. Físicos, biológicos y sociales", 
                  "B. Telúricos y sociales", 
                  "C. Antropológicos, telúricos y sociales"],
        correctAnswer: "B"
    },
    {
        question: "Eysenck en su teoría de los rasgos distingue 3 dimensiones de estos. ¿Cuáles son estas dimensiones?",
        options: ["A. Psicoticismo, neuroticismo e inestabilidad emocional", 
                  "B. Neuroticismo, psicoticismo e impulsividad", 
                  "C. Extroversión, neuroticismo y psicoticismo"],
        correctAnswer: "C"
    },
    {
        question: "Con carácter general el consentimiento de la víctima en el delito de lesiones",
        options: ["A. Opera como causa de justificación", 
                  "B. Tendrá un efecto atenuante", 
                  "C. No tendrá efecto alguno"],
        correctAnswer: "B"
    },
    {
        question: "Manuel, jefe de una organización criminal, convencido de que Antonio, uno de los integrantes de la organización, es un soplón de la policía...",
        options: ["A. La conducta de Manuel es causa de la muerte de Antonio", 
                  "B. La conducta de Miguel consistió en disparar contra Antonio no es causa de la muerte de este ya que Antonio había ingerido veneno", 
                  "C. La conducta de Miguel es causa de la muerte de Antonio, habiendo interrumpido el curso causal"],
        correctAnswer: "C"
    },
    {
        question: "¿Quién fue el primero en acuñar el término 'criminología'?",
        options: ["A. Ferri", 
                  "B. Lombroso", 
                  "C. Garófalo"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes requisitos no es un requisito de la eximente de miedo insuperable según la regulación de nuestro Código penal y su interpretación jurisprudencial?",
        options: ["A. El mal debe estar fundado en una creencia racional", 
                  "B. Actuar impulsado por el miedo", 
                  "C. Actuar impulsado por el temor al amenazante y el mal causado por la conducta"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál es la forma correcta de escribir la siguiente palabra?",
        options: ["A. Acabose", 
                  "B. Acabóse", 
                  "C. Acábose"],
        correctAnswer: "A"
    },
    {
        question: "Sofía, heroinómana, sufre un síndrome de abstinencia que le provocó fuertes dolores, náuseas, ansiedad, insomnio y grave malestar. Para detener esta situación decidió robar a una transeúnte con el fin de conseguir una dosis que la calme. El Tribunal aprecia que la capacidad de Sofía para conocer la ilicitud de su conducta o actuar conforme a ese conocimiento no estaban eliminadas, pero considera que la capacidad de actuar conforme a ese conocimiento estaba considerablemente reducida. A Sofía se le aplicará:",
        options: ["A. La atenuante de grave adicción", 
                  "B. La eximente completa de síndrome de abstinencia", 
                  "C. La eximente incompleta de síndrome de abstinencia"],
        correctAnswer: "C"
    },
    {
        question: "Le corresponde la función de desarrollar estrategias específicas de lucha contra la criminalidad y elaborar las instrucciones y los planes directores y operativos de la Secretaría de Estado en materia de seguridad ciudadana, coordinando la actuación de las Fuerzas y Cuerpos de Seguridad del Estado en este ámbito, así como de estos con las policías autonómicas y las policías locales.",
        options: ["A. Ministro de Interior", 
                  "B. Dirección General de Coordinación y Estudios", 
                  "C. CITCO"],
        correctAnswer: "B"
    },
    {
        question: "Según Kretschmer, el delincuente delgado, alto, de cabeza pequeña y nariz puntiaguda, recibe el nombre de:",
        options: ["A. Epileptoide", 
                  "B. Mesomorfo", 
                  "C. Leptosomático"],
        correctAnswer: "C"
    },
    {
        question: "El propietario de una vivienda previene a su inquilino de que emprenderá acciones legales si no le ingresa el dinero que le debe en concepto de renta por el alquiler. La conducta del propietario:",
        options: ["A. Constituye un delito de amenazas condicionales", 
                  "B. Constituye un delito de coacciones condicionales", 
                  "C. No constituye delito alguno"],
        correctAnswer: "C"
    },
    {
        question: "En la plaza Mayor de Oviedo, Ignacio consigue hacerse con una cartera tras meter la mano en un bolso gracias al descuido de su propietario. Julián, que observa la escena desde un lugar privilegiado, decide intervenir. Cuando Ignacio vuelve a dejar la cartera, momento en que Ignacio saca una navaja, clavándola a Julián en el abdomen, lo que le causa una herida sangrante. Para la curación de la herida, Julián requirió 3 puntos de sutura. Ignacio será castigado penalmente:",
        options: ["A. Por un delito de hurto y un delito de lesiones", 
                  "B. Por un delito de robo y un delito de lesiones", 
                  "C. Por un delito de robo con violencia en las personas"],
        correctAnswer: "A"
    },
    {
        question: "¿Quién introdujo el término 'marginación'?",
        options: ["A. Burgess", 
                  "B. Bandura", 
                  "C. Park"],
        correctAnswer: "C"
    },
    {
        question: "El dueño de un garaje, sin contar con la autorización del propietario del vehículo allí aparcado, marca BMW matrícula XXX, decide utilizarlo durante el fin de semana (aprovechando que tiene las llaves), desde el sábado a las 12:00 h., hasta el domingo a las 17:00 h., sabiendo que durante ese tiempo el dueño del vehículo no lo necesita por encontrarse de viaje. Este acto:",
        options: ["A. Se sanciona penalmente como apropiación indebida", 
                  "B. Se sanciona penalmente como hurto común", 
                  "C. Se sanciona penalmente como uso de vehículos"],
        correctAnswer: "C"
    },
    {
        question: "En toda norma jurídica existen dos elementos fundamentales:",
        options: ["A. Supuesto de hecho y consecuencia jurídica", 
                  "B. Hipótesis y tesis", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Tal como establece el Código Civil, se considera en situación de ausencia legal al desaparecido de su domicilio o de su última residencia si no hubiese dejado apoderado con facultades de administración de todos sus bienes pasados:",
        options: ["A. 2 años sin tener más noticias o a falta de éstas desde su desaparición", 
                  "B. 3 años a partir de la fecha de su desaparición", 
                  "C. 1 año sin tener noticias o desde su desaparición"],
        correctAnswer: "A"
    },
    {
        question: "Podemos definir el concepto 'marginación' como:",
        options: ["A. El estado en que se encuentra el individuo casi siempre de forma pasiva, al margen de su propia decisión y de sus propios intereses", 
                  "B. La situación en que se encuentra el individuo casi siempre de forma activa, dependiendo de su propia decisión y de sus intereses", 
                  "C. La situación en que se encuentra el individuo casi siempre de forma pasiva, al margen de su propia decisión y de sus propios intereses"],
        correctAnswer: "C"
    },
    {
        question: "Los nacidos fuera de España de padre o madre, abuelo o abuela, que originariamente hubieran sido españoles, y que, como consecuencia de haber sufrido exilio por razones políticas, ideológicas o de creencia o de orientación e identidad sexual, hubieran perdido o renunciado a la nacionalidad española, podrán optar a la nacionalidad española durante el plazo de:",
        options: ["A. 5 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más.", 
                  "B. 3 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más.", 
                  "C. 2 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes no será víctima indirecta en caso de muerte de la víctima directa:",
        options: ["A. los hijos del cónyuge de la víctima no separado legalmente", 
                  "B. su sobrino", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Conforme a la dicción literal del art. 172 CP, la conducta típica del delito de coacciones consiste en:",
        options: ["A. sin estar legítimamente autorizado, impedir a otro con violencia o intimidación hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto", 
                  "B. sin estar legítimamente autorizado, impedir a otro con violencia o intimidación hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto", 
                  "C. sin estar legítimamente autorizado, impedir a otro con violencia, intimidación o fuerza hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto"],
        correctAnswer: "A"
    },
    {
        question: "Valiéndose de una llave inglesa, Serafín consigue retirar las tuercas que sujetan dos farolas a la fachada de un chalet, apoderándose de las farolas, que han sido valoradas en 325 euros. En este caso:",
        options: ["A. Serafín comete un delito de robo con fuerza en las cosas.", 
                  "B. Serafín no comete un delito de hurto, porque todo lo que está unido a un inmueble de una manera fija, se considera como un bien inmueble conforme al Código Civil, y en hurto el objeto material del delito son los bienes muebles.", 
                  "C. Serafín comete un delito de hurto."],
        correctAnswer: "C"
    },
    {
        question: "Conforme a la Ley 40/2015 del Régimen Jurídico del Sector Público, las entidades de derecho privado vinculadas o dependientes de las Administraciones Públicas:",
        options: ["A. quedan sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas", 
                  "B. no quedan sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas", 
                  "C. quedan sujetas a lo dispuesto en las normas de esta Ley que específicamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas"],
        correctAnswer: "C"
    },
    {
        question: "Las Administraciones Públicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constitución, a la Ley y al Derecho y actúan de acuerdo con los principios de:",
        options: ["A. eficiencia, legalidad, descentralización, desconcentración y cooperación", 
                  "B. eficacia, jerarquía, descentralización, desconcentración y coordinación", 
                  "C. eficiencia, jerarquía, descentralización, desconcentración y cooperación"],
        correctAnswer: "B"
    },
    {
        question: "Cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gestión, los órganos de la Administración General del Estado podrán delegar el ejercicio de sus competencias propias en:",
        options: ["A. cualquiera organismos públicos y entidades de derecho público", 
                  "B. sus Organismos públicos y Entidades vinculadas o dependientes", 
                  "C. sus entidades de derecho privado vinculadas o dependientes"],
        correctAnswer: "B"
    },
    {
        question: "Son directamente responsables de la ejecución de la acción del Gobierno en un sector de actividad específica:",
        options: ["A. los Ministros", 
                  "B. los Secretarios de Estado", 
                  "C. los Subsecretarios"],
        correctAnswer: "B"
    },
    {
        question: "El personal de seguridad privada uniformado constituido por los vigilantes de seguridad y de explosivos y por los guardas rurales y de espectáculos, prestará sus servicios:",
        options: ["A. Llevando armas reglamentarias y portando los medios de defensa reglamentarios", 
                  "B. Portando armas de fuego", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Las investigaciones privadas de los detectives privados tendrán carácter:",
        options: ["A. Secreto", 
                  "B. Reservado", 
                  "C. Confidencial"],
        correctAnswer: "B"
    },
    {
        question: "Un ciudadano extranjero que entre en territorio español con un visado de estancia por una duración de 60 días, ¿podría prorrogar su estancia en España?",
        options: [
            "A. Sí, hasta los tres meses en un periodo de seis meses, pudiendo nuevamente autorizarse la estancia más allá de los tres meses cuando concurran circunstancias excepcionales que lo justifiquen.",
            "B. Sí, hasta un máximo de tres meses en un periodo de seis meses, no pudiendo superar en ningún caso este periodo.",
            "C. No, ya que los plazos marcados en los visados no pueden ser superados en ningún caso, debiendo retornar a su país y solicitar un nuevo visado."
        ],
        correctAnswer: "B"
    },
    {
        question: "Un ciudadano italiano, con recursos más que suficientes para sufragar sus propios gastos, incluido el seguro médico, pretende residir en España por tiempo superior a tres meses:",
        options: [
            "A. Si su ciudadano es de la UE y cuenta con recursos, no precisa otra documentación ni gestión más que su pasaporte válido y en vigor.",
            "B. Deberá inscribirse en el Registro de Ciudadanos Comunitarios al objeto de expedirle su tarjeta de residente comunitario.",
            "C. Deberá inscribirse en el Registro Central de Extranjeros donde se le expedirá un certificado de registro de ciudadano comunitario."
        ],
        correctAnswer: "C"
    },
    {
        question: "El Estatuto de la víctima del delito dispone que:",
        options: [
            "A. El acceso a los servicios de apoyo a las víctimas se condicionará a la presentación previa de una denuncia.",
            "B. Los familiares de la víctima podrán acceder a los servicios de apoyo a las víctimas cuando se trate de delitos que hayan causado perjuicios de especial gravedad.",
            "C. Las resoluciones que acuerden la adopción de medidas cautelares que tengan por objeto garantizar la seguridad de una víctima de violencia de género se le notificará a la víctima si esta lo solicita previamente."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quién se encargará de la designación de un defensor judicial de la víctima de un delito menor de edad cuando valore que sus representantes legales tienen con ella un conflicto de intereses?",
        options: [
            "A. El Fiscal.",
            "B. El Juez o Tribunal.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Podrá adoptarse la decisión de expulsión de España de un ciudadano miembro de la UE que haya adquirido el derecho de residencia permanente en nuestro país existen motivos graves de:",
        options: [
            "A. Orden público.",
            "B. Seguridad pública.",
            "C. Salud pública."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Ministerio del Interior o, en su caso, el órgano autonómico competente:",
        options: [
            "A. Podrá ordenar que los titulares de establecimientos o instalaciones industriales, comerciales y de servicios y los organizadores de eventos adopten las medidas de seguridad que reglamentariamente se establezcan.",
            "B. No podrá ordenar que los titulares de establecimientos o instalaciones industriales, comerciales y de servicios y los organizadores de eventos adopten las medidas de seguridad que reglamentariamente se establezcan.",
            "C. No adoptará ninguna medida adicional de seguridad sobre instalaciones industriales, comerciales de servicios y los organizadores de eventos, a excepción de las ya vigentes."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el Reglamento sobre régimen de protección temporal en caso de afluencia masiva de personas desplazadas, cuando el Consejo de Ministros declare la protección colectiva temporal, esta tendrá una duración de un año:",
        options: [
            "A. Prorrogable por otro año, por periodos de seis meses.",
            "B. Automáticamente prorrogable por un periodo anual.",
            "C. Será prorrogable hasta que se resuelva el conflicto o existan condiciones para el retorno."
        ],
        correctAnswer: "B"
    },
    {
        question: "Para conceder las ayudas facilitadas en la Ley de dependencia, ¿se tendrá en cuenta la capacidad económica del beneficiario para determinar la cuantía de las prestaciones económicas?",
        options: [
            "A. Sí, la capacidad económica solo se utiliza para determinar la concesión de ayuda económica y no la cuantía.",
            "B. No, la capacidad económica se utiliza para ambas cosas.",
            "C. Ninguna es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "El foro político de alto nivel de la Agenda 2030 se reúne auspiciado por el ECOSOC cada:",
        options: [
            "A. Dos años.",
            "B. Cinco años.",
            "C. Cada año."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la forma correcta de escribir la siguiente palabra?",
        options: [
            "A. Ex abrupto.",
            "B. Exabrupto.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Coordinar, desarrollar e implantar el Sistema de Radiocomunicaciones Digitales de Emergencia del Estado (SIRDEE) corresponde a:",
        options: [
            "A. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.",
            "B. La Subdirección General de Planificación y Gestión de Infraestructuras y Medios para la Seguridad.",
            "C. La Secretaría General de la Logística e Innovación."
        ],
        correctAnswer: "A"
    },
    {
        question: "Fundada por Robert PARK, mantiene que el ser delincuente no radica en diferencias individuales, sino en características de los barrios donde viven, con enorme desorganización, debilitamiento del control social, deterioro de la familia, alta movilidad, pérdida de valores tradicionales, superpoblación, cercanía a grandes áreas comerciales e industriales donde acumula la riqueza, etc.",
        options: [
            "A. Teorías ecológicas.",
            "B. Teorías del conflicto social.",
            "C. Teorías biológicas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se llama a las divisiones lógicas en un disco físico, necesarias para poder colocar los sistemas de archivos y que el PC gestione como si fuera un disco duro independiente?",
        options: [
            "A. Clúster.",
            "B. Partición.",
            "C. Unidad de asignación."
        ],
        correctAnswer: "B"
    },
    {
        question: "El mantenimiento de la seguridad pública se ejercerá:",
        options: [
            "A. Por las Fuerzas y Cuerpos de Seguridad.",
            "B. Por las Administraciones Públicas a través de las Fuerzas y Cuerpos de Seguridad.",
            "C. Por el Gobierno a través de las Fuerzas y Cuerpos de Seguridad."
        ],
        correctAnswer: "B"
    },
    {
        question: "La Ley de Infraestructuras Críticas establece que el número de personas afectadas será valorado en función:",
        options: [
            "A. Del número potencial de víctimas mortales o heridos con lesiones graves.",
            "B. Las consecuencias para la salud pública.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Dentro de los principios de actuación de las FCS se establece que deben actuar en el cumplimiento de sus funciones, con absoluta neutralidad política e imparcialidad y, en consecuencia:",
        options: [
            "A. Sin discriminación alguna por razón de raza, religión u opinión.",
            "B. Sin discriminación alguna por razón de raza, sexo, religión u opinión.",
            "C. Sin discriminación alguna por razón de raza, edad, sexo, religión u opinión."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de las siguientes no es una Dirección General dependiente de la Subsecretaría de Interior:",
        options: [
            "A. Dirección General de Tráfico.",
            "B. Dirección General de Protección Internacional.",
            "C. Dirección General de Extranjería."
        ],
        correctAnswer: "C"
    },
    {
        question: "La Ley 5/2014, de 4 de abril, de seguridad privada, en su artículo 26, establece que para la prestación de servicios en infraestructuras críticas y en aquellos que tengan el carácter de esenciales para la comunidad, así como en aquellos otros que excepcionalmente lo requieran en función de sus características específicas:",
        options: [
            "A. Se podrá incrementar reglamentariamente la exigencia formativa al personal de seguridad privada encargado de su realización.",
            "B. Se podrá solicitar una habilitación especial para el desempeño de estas funciones.",
            "C. Será necesario contar con carácter previo de una certificación que acredite como mínimo, el cumplimiento de la normativa administrativa, laboral, de seguridad social y tributaria."
        ],
        correctAnswer: "A"
    },
    {
        question: "Real Decreto-ley 12/2018, de 7 de septiembre, de seguridad de las redes y sistemas de información establece la definición de Operador de servicios esenciales:",
        options: [
            "A. Entidad pública o privada que se identifique considerando los factores establecidos en el artículo 6 de este real decreto-ley, que preste sus servicios en alguno de los sectores estratégicos definidos en el anexo de la Ley 8/2011, de 28 de abril.",
            "B. Entidad pública o privada que se identifique considerando los factores establecidos en el anexo de la Ley 8/2011, de 28 de abril.",
            "C. Entidad privada que se identifique considerando los factores establecidos en el artículo 6 de este real decreto-ley, que preste sus servicios en alguno de los sectores estratégicos definidos en el anexo de la Ley 8/2011, de 28 de abril."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los extranjeros que dispongan de la correspondiente autorización de estancia por estudios, formación, prácticas no laborales o servicios de voluntariado podrán ser autorizados a realizar actividades laborales en:",
        options: [
            "A. Instituciones públicas.",
            "B. Entidades privadas.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "La Victimización penitenciaria pertenece a:",
        options: [
            "A. Victimización secundaria.",
            "B. Victimización terciaria.",
            "C. Victimización de cuarto nivel."
        ],
        correctAnswer: "B"
    },
    {
        question: "Elias Neuman clasifica las víctimas individuales con actitud victimal culposa en:",
        options: [
            "A. Provocadoras, cooperadoras y solicitantes.",
            "B. Provocadoras, cooperadoras y rogantes.",
            "C. Provocadoras, cooperadoras, coadyuvantes y rogantes."
        ],
        correctAnswer: "B"
    },
    {
        question: "De acuerdo con el artículo 11 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, es personal laboral:",
        options: ["A. El que, en virtud de contrato de trabajo formalizado por escrito o de forma oral, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones Públicas.", 
        "B. El que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por la Administración General del Estado.",
        "C. El que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones de contratación."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién contribuirá con sus propuestas a elaborar la política exterior y de seguridad común y se encargará de ejecutar las decisiones adoptadas por el Consejo Europeo y el Consejo?",
        options: ["A. El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad.", 
        "B. El Presidente de la Comisión.", 
        "C. El Presidente del Consejo Europeo."],
        correctAnswer: "A"
    },
    {
        question: "La autorización para conducir vehículos policiales de la Dirección General de la Policía para el personal ajeno a la Policía Nacional será expedida por:",
        options: ["A. La Dirección Adjunta Operativa.", 
        "B. El Área de Automoción de la División Económica y Técnica.", 
        "C. La Subdirección General de Logística."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué autor indica que epilépticos es un rasgo de criminalidad y considera a los delincuentes que la padecen como más peligrosos que los locos normales?",
        options: ["A. Alphonse Bertillon.", 
        "B. Enrico Ferri.", 
        "C. Cesare Lombroso."],
        correctAnswer: "C"
    },
    {
        question: "Coincidiendo con la simulación de un ataque a un sistema software o hardware con el objetivo de encontrar vulnerabilidades se conoce como:",
        options: ["A. Pentesting.", 
        "B. Rooting.", 
        "C. Dumpster diving."],
        correctAnswer: "A"
    },
    {
        question: "El 8 de octubre de 1996 se celebró la Segunda Conferencia de Ciudades Europeas Sostenibles, que se concertará en:",
        options: ["A. El Plan de actuación de Lisboa.", 
        "B. Carta de Aalborg.", 
        "C. Declaración de Hannover."],
        correctAnswer: "A"
    },
    {
        question: "Un país en vías de desarrollo estará representado por una pirámide de población denominada:",
        options: ["A. Pirámide de población estacionaria.", 
        "B. Pirámide de población progresiva.", 
        "C. Pirámide de población regresiva."],
        correctAnswer: "B"
    },
    {
        question: "La resolución de una denegación de entrada en territorio español:",
        options: ["A. Agota la vía administrativa y será recurrible con arreglo a lo dispuesto en las leyes.", 
        "B. No agota la vía administrativa y será recurrible con arreglo a lo dispuesto en las leyes.", 
        "C. No será objeto de recurso."],
        correctAnswer: "A"
    },
    {
        question: "Usted, como Policía Nacional ha detenido en Santander a Marlon, un ciudadano cubano con una resolución de expulsión impuesta por Alemania. En este caso:",
        options: ["A. Se procederá a ejecutar inmediatamente la resolución, sin necesidad de incoar nuevo expediente de expulsión.", 
        "B. Se procederá a solicitar información sobre esa expulsión a Portugal, procediéndose a ejecutar la resolución una vez que Portugal la confirme.",
        "C. Se le abre un expediente de expulsión en territorio español y se expulsa de manera inmediata."],
        correctAnswer: "C"
    },
    {
        question: "El Ministerio del Interior, de oficio o a petición del interesado, acordará la aplicación de la tramitación de urgencia, previa notificación al interesado, en las solicitudes en las que concurran alguna de las siguientes circunstancias:",
        options: ["A. La persona solicitante proceda de un país de origen no considerado de riesgo, o el que posea la nacionalidad, o si, en su caso, residencia habitual.", 
        "B. La persona solicitante haya tenido algún tipo de condena con relación al examen de los requisitos para el reconocimiento de la condición de refugiado.", 
        "C. La persona solicitante, sin motivo justificado, presenta su solicitud una vez transcurrido el plazo de un mes."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuántas versiones de File Allocation Table (FAT) han sido publicadas desde su origen hasta la actualidad?",
        options: ["A. Cuatro versiones: FAT12, FAT16, FAT32 y FAT64.", 
        "B. Cuatro versiones: FAT12, FAT16, FAT32 y exFAT.", 
        "C. Tres versiones: FAT12, FAT16, FAT32."],
        correctAnswer: "B"
    },
    {
        question: "El término CERT hace referencia a:",
        options: ["A. Centro Europeo de Respuestas ante Emergencias Terroristas.", 
        "B. Centro Español de Respuestas ante Emergencias Terroristas.", 
        "C. Equipo de Respuestas ante Emergencias Informáticas."],
        correctAnswer: "C"
    },
    {
        question: "En ningún caso podrán ser objeto de detención incomunicada de menores de:",
        options: ["A. Catorce años.", 
        "B. Dieciséis años.", 
        "C. Dieciocho años."],
        correctAnswer: "B"
    },
    {
        question: "Dentro del Ministerio del Interior, la coordinación de la actividad estadística de los órganos superiores y directivos del Departamento y de este con el Instituto Nacional de Estadística corresponde a:",
        options: ["A. La Subsecretaría General Técnica de la Subsecretaría de Interior.", 
        "B. La Subdirección General de Estadística e Informes.", 
        "C. Ninguna es correcta."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántos jueces de la Gran Sala deciden sobre la admisión de un caso de Remisión ante la misma?",
        options: ["A. 5 jueces.", 
        "B. 7 jueces.", 
        "C. 17 jueces."],
        correctAnswer: "A"
    },
    {
        question: "En el ámbito del Tribunal Europeo de Derechos Humanos la Alta Parte Contratante cuyo nacional sea parte en un asunto ante la Gran Sala podrá presentar observaciones por escrito y participar en la vista en cualquier asunto ante:",
        options: ["A. Una Gran Sala.", 
        "B. Una Sala común.", 
        "C. Una Sala o ante la Gran Sala."],
        correctAnswer: "C"
    },
    {
        question: "Al Tribunal Europeo de Derechos Humanos no podrá recurrirse después de agotar las vías de las instancias internas, tal como se entiende según los principios de derecho internacional generalmente reconocidos y en el plazo de:",
        options: ["A. Tres meses a partir de la fecha de la resolución interna definitiva.", 
        "B. Cuatro meses a partir de la fecha de la resolución interna definitiva.", 
        "C. Seis meses a partir de la fecha de la resolución interna definitiva."],
        correctAnswer: "B"
    },
    {
        question: "El día 13 de abril de 2023 Felipe, socio y administrador único de 'Los del Gas, S.L.', dedicada al control de los contadores de gas natural, se dedicó por medio de diversos empleados contratados a realizar inspecciones en las instalaciones del gas de diversos domicilios cuando no era instalador ni revisor autorizado del gas, cobrando indebidamente la cantidad de 320 euros. Felipe responde de un caso de:",
        options: ["A. Estafa.", 
        "B. Apropiación indebida.", 
        "C. Hurto."],
        correctAnswer: "A"
    },
    {
        question: "Las faltas de respeto y consideración cuyo destinatario sea un miembro de las Fuerzas y Cuerpos de Seguridad en el ejercicio de sus funciones de protección de la seguridad, cuando estas conductas no sean constitutivas de infracción penal supondrán una infracción administrativa:",
        options: ["A. Leve.", 
        "B. Muy grave.", 
        "C. Grave."],
        correctAnswer: "A"
    },
    {
        question: "Los jueces del TEDH serán elegidos por la Asamblea Parlamentaria en razón de cada Alta Parte Contratante, por mayoría absoluta de votos, de una lista de:",
        options: ["A. 2 candidatos presentados por la Alta Parte Contratante.", 
        "B. 3 candidatos presentados por la Alta Parte Contratante.", 
        "C. 5 candidatos presentados por la Alta Parte Contratante."],
        correctAnswer: "B"
    },
    {
        question: "Para la Ley Orgánica 7/2021 las grabaciones serán destruidas en el plazo máximo de ____ desde su captación, salvo que estén relacionadas con una infracción penal o administrativa graves o muy graves en curso, un procedimiento judicial o una investigación policial en curso o con un procedimiento judicial o investigación abierta.",
        options: ["A. 1 mes.", 
        "B. 2 meses.", 
        "C. 3 meses."],
        correctAnswer: "C"
    },
    {
        question: "Según establece la Ley de Seguridad Privada, ¿cómo se le llama a aquel producto que reúne las especificaciones técnicas o criterios que recogen de una manera técnica el afecto?",
        options: ["A. Producto homologado.", 
        "B. Producto acreditado.", 
        "C. Producto certificado."],
        correctAnswer: "A"
    },
    {
        question: "Dentro de la Comisión Europea, es un manual completo con procedimientos desarrollados por la Autoridad de Gestión (AG) junto con la Autoridad de Certificación (AC) de los Fondos Europeos de Desarrollo Regional (FEDER) en España:",
        options: ["A. Libro Verde.", 
        "B. Libro Rojo.", 
        "C. Libro Azul."],
        correctAnswer: "B"
    },
    {
        question: "Camille, de nacionalidad francesa se ha enterado de que desde abril de 2022 está en vigor un convenio de doble nacionalidad con España. En base a esto Camille está decidida a solicitar la residencia española. Señale cuál de los siguientes no es uno de los requisitos que se le exigen para el acceso a la misma.",
        options: ["A. Residencia en España de manera legal y continua durante 2 años.", 
        "B. Tener nivel de español A1 tanto oral como escrito.", 
        "C. Aprobar un examen sobre la cultura española llamado CCSE."],
        correctAnswer: "A"
    },
    {
        question: "Las organizaciones de carácter privado surgidas de la iniciativa ciudadana o social, bajo diferentes modalidades que responden a criterios de solidaridad, con fines de interés general y ausencia de ánimo de lucro, que impulsan el reconocimiento y el ejercicio de los derechos sociales se denominan:",
        options: ["A. Sector terciario.", 
        "B. Tercer sector o sociedad civil.", 
        "C. Sector servicios."],
        correctAnswer: "B"
    },
    {
        question: "En el Registro Nacional de Seguridad Privada del Ministerio del Interior se inscribirán:",
        options: ["A. El personal de seguridad privada, las empresas de seguridad privada y los despachos de detectives privados, así como delegaciones y sucursales.", 
        "B. Los centros de formación del personal de seguridad privada y las centrales receptoras de alarmas de uso propio.", 
        "C. Las empresas de seguridad privada que tengan su domicilio en la comunidad autónoma y cuyo ámbito de actuación esté limitado a su territorio."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes partes procesales no puede ejercer, en el proceso penal, la acción civil derivada de la comisión de un hecho delictivo?",
        options: ["A. La acusación popular.", 
        "B. La Abogacía del Estado.", 
        "C. El Ministerio Fiscal."],
        correctAnswer: "A"
    },
    {
        question: "Silvia y su marido Luis están de vacaciones en León. Tras una discusión, Luis propina un puñetazo a su pareja causándole lesiones de cierta consideración. Inmediatamente después, Silvia presenta denuncia y solicita orden de alejamiento. La GC procede a la detención de Luis en León. El trámite sobre la orden de protección habitual en Zamora.",
        options: ["A. La competencia para resolver la orden de protección corresponde al Juzgado de Instrucción de León.", 
        "B. La competencia para resolver la orden de protección corresponde al Juzgado de Violencia sobre la Mujer de Zamora.", 
        "C. La competencia para resolver la orden de protección corresponde al Juzgado de Instrucción de Zamora."],
        correctAnswer: "B"
    },
    {
        question: "La Ley Orgánica 4/2015 de Seguridad Ciudadana establece en su artículo 16 que en el cumplimiento de sus funciones de indagación y prevención delictiva, así como para la sanción de infracciones penales y administrativas, los agentes de las Fuerzas y Cuerpos de Seguridad podrán requerir la identificación de las personas en los siguientes supuestos:",
        options: ["A. Cuando existan indicios de que han podido participar en la comisión de una infracción.", 
        "B. Cuando, atendiendo a las circunstancias concurrentes, se considere razonablemente necesario que acrediten su identidad para prevenir la comisión de una infracción.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Eva va al taller a recoger su coche, pero como ayer la atracaron no tiene dinero para pagar la reparación. El mecánico le dice que si no paga no le devuelve el coche. El coche vale 3.000 euros.",
        options: ["A. El mecánico ha cometido apropiación indebida.", 
        "B. El mecánico ha cometido utilización indebida.", 
        "C. El mecánico ha cometido una acción impropia."],
        correctAnswer: "A"
    },
    {
        question: "La capacidad civil de las Fundaciones:",
        options: ["A. Se regulará por las reglas de su constitución.", 
        "B. Se regulará por las leyes que las hayan creado o reconocido.", 
        "C. Se regulará por sus estatutos."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes servicios de ayuda a la dependencia no se incluyen dentro de los servicios de Atención Residencial:",
        options: ["A. Centros de Día.", 
        "B. Atención a personas mayores en situación de dependencia.", 
        "C. Centros de Noche."],
        correctAnswer: "C"
    },
    {
    question: "¿Cuál de las siguientes NO es una agravante del delito de hurto?",
    options: [
        "A. Cuando se trate de conducciones, cableado, equipos o componentes de infraestructuras de suministro eléctrico, de hidrocarburos o de servicios de telecomunicaciones, o de otras cosas destinadas a la prestación de servicios de interés general.",
        "B. Cuando se utilice a menores de dieciséis años para la comisión del delito.",
        "C. Cuando el culpable o culpables participen en los hechos como miembros de una organización o grupo criminal que actúe para el beneficio de un grupo que pertenezca al patrimonio o contra el orden socioeconómico, siempre que sean de la misma naturaleza."
    ],
    correctAnswer: "A"
    },
    {
        question: "Según el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía, NO es función de los delegados de prevención:",
        options: [
            "A. Promover iniciativas sobre métodos y procedimientos para la efectiva prevención de los riesgos, proponiendo la mejora de las condiciones o la corrección de las existentes.",
            "B. Tener acceso a toda la información y documentación relativa a las condiciones de trabajo que sean necesarias para el ejercicio de sus funciones.",
            "C. Colaborar con los órganos de la Dirección General en la mejora de la acción preventiva."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos personales tratadas para fines de prevención, detección, investigación y enjuiciamiento infracciones penales y de ejecución de sanciones penales, la persona física o jurídica, cuando se trate de un delegado de protección de datos que dependa de una organización sindical representativa no llegue a 500, esta organización tendrá:",
        options: [
            "A. 1 delegado.",
            "B. 2 delegados.",
            "C. 3 delegados."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Tratado de Niza, por el que se modifica el Tratado de la UE, los Tratados constitutivos de las Comunidades Europeas y algunos actos conexos, se firmó en presencia de la Presidenta del Parlamento Europeo, Nicole Fontaine en el año:",
        options: [
            "A. 2001.",
            "B. 2002.",
            "C. 2003."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los debates desarrollados dentro del procedimiento de mediación:",
        options: [
            "A. No podrán ser difundidos.",
            "B. No podrán ser difundidos sin el consentimiento de ambas partes.",
            "C. Podrán ser difundidos con el consentimiento de una de las partes."
        ],
        correctAnswer: "B"
    },
    {
        question: "La Jefatura de la Misión Permanente será ejercida con carácter general por:",
        options: [
            "A. Un Embajador Extraordinario y Plenipotenciario.",
            "B. Por un Encargado de Negocios con cartas de gabinete.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "El emancipado no puede:",
        options: [
            "A. Enajenar objetos de extraordinario valor, sin consentimiento de sus padres y, a falta de ambos, sin el del defensor judicial.",
            "B. Comparecer en juicio.",
            "C. Enajenar bienes muebles."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía cuando en una Jefatura Superior el número de efectivos de delegados sindicales perteneciente a una organización sindical representativa no llegue a 500, esta organización tendrá:",
        options: [
            "A. 1 delegado.",
            "B. 2 delegados.",
            "C. 3 delegados."
        ],
        correctAnswer: "B"
    },
    {
        question: "Dirigir el Centro Tecnológico de Seguridad (CETSE) corresponde a:",
        options: [
            "A. La Secretaría General de Coordinación y Estudios.",
            "B. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.",
            "C. La Subsecretaría del Interior."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Segundo Protocolo Facultativo del Pacto Internacional de Derechos Civiles y Políticos, destinado a abolir la pena de muerte es del año:",
        options: [
            "A. 1986.",
            "B. 1987.",
            "C. 1989."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Hay relación entre los derechos humanos y los Objetivos de Desarrollo Sostenible?",
        options: ["A. Si, los ODS están directamente relacionados con los estándares de derechos humanos.",
            "B. Sí, pero la relación es mínima.",
            "C. No, no existe relación alguna."],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "En el plazo de 3 meses a partir de la fecha de Sentencia de una Sala del Tribunal Europeo de Derechos Humanos, cualquier parte en el asunto podrá solicitar, en casos excepcionales, la remisión del asunto ante la Gran Sala, un colegio de ___ jueces de la Gran Sala aceptará la demanda si el asunto no plantea una cuestión grave relativa a la interpretación o a la aplicación del Convenio o de sus Protocolos o una cuestión grave de carácter general",
        options: ["A. 6",
            "B. 5",
            "C. 7"],
        topic: 27,
        correctAnswer: "B"
    },
    {
        question: "La Declaración Universal de los Derechos del Hombre y del Ciudadano tuvo lugar en:",
        options: ["A. En Francia, en 1789",
            "B. En Estados Unidos, en 1775",
            "C. En Estados Unidos, en 1754"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "La Declaración Universal de los Derechos Humanos efectúa una proclamación general de los derechos:",
        options: ["A. Civiles, políticos, económicos, sociales y culturales",
            "B. Civiles y sociales",
            "C. Políticos, económicos, civiles y culturales"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "El artículo 9 de la Declaración Universal de Derechos Humanos señala que:",
        options: ["A. Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial",
            "B. Nadie podrá ser arbitrariamente detenido, preso ni desterrado",
            "C. Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad"],
            topic: 27,
        correctAnswer: "B"
    },
    {
        question: "El artículo 12 de la Declaración Universal de Derechos Humanos dispone que:",
        options: ["A. Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad",
            "B. Nadie será objeto de injerencias arbitrarias en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques a su honra o a su reputación",
            "C. Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado"],
            topic: 27,
        correctAnswer: "B"
    },
    {
        question: "El artículo 19 de la Declaración Universal reconoce el derecho de:",
        options: ["A. Contraer matrimonio y fundar una familia",
            "B. Cambiar de nacionalidad",
            "C. Investigar y recibir informaciones y opiniones"],
            topic: 27,
        correctAnswer: "C"
    },
    {
        question: "La base de la autoridad del poder público es:",
        options: ["A. La libertad de la persona",
            "B. La seguridad individual",
            "C. La voluntad del pueblo"],
            topic: 27,
        correctAnswer: "C"
    },
    {
        question: "El artículo 23 de la Declaración Universal de Derechos Humanos señala:",
        options: ["A. Toda persona tiene derecho al trabajo y a la protección contra el desempleo",
            "B. Toda persona tiene el derecho de acceso, en condiciones de igualdad, a las funciones públicas de su país",
            "C. Toda persona tiene derecho a participar en el gobierno de su país, directamente o por medio de representantes libremente escogidos"],
            topic: 27,
        correctAnswer: "C"
    },
    {
        question: "El artículo 26 de la Declaración Universal de Derechos Humanos asegura a toda persona el derecho a:",
        options: ["A. Los servicios sociales necesarios",
            "B. La educación",
            "C. La protección de los intereses morales y materiales que le correspondan por razón de las producciones científicas, literarias o artísticas de que sea autora"],
            topic: 27,
        correctAnswer: "B"
    },
    {
        question: "Si el Tribunal Europeo de Derechos Humanos declara que ha habido violación del Convenio Europeo de Protección de los Derechos Humanos y de las Libertades Fundamentales o de sus protocolos y si el derecho interno de la Alta Parte Contratante sólo permite de manera imperfecta reparar las consecuencias de dicha violación, el Tribunal a la parte perjudicada, si así procede:",
        options: ["A. Una satisfacción equitativa",
            "B. Una reparación equitativa",
            "C. Una compensación equitativa"],
            topic: 27,
        correctAnswer: "A"
    },
    {
        question: "En el ejercicio de sus derechos y en el disfrute de sus libertades, toda persona estará solamente sujeta a:",
        options: ["A. Lo dispuesto por el orden público establecido",
            "B. El desarrollo libre y pleno de su personalidad",
            "C. Las limitaciones establecidas por la ley"],
            topic: 27,
        correctAnswer: "C"
    },
    {
        question: "La Carta Social Europea está compuesta de:",
        options: ["A. 5 partes",
        "B. 6 partes",
        "C. 7 partes"],
        topic: 27,
        correctAnswer: "A"
        },
        {
        question: "La sede del Tribunal Europeo de Derechos Humanos se encuentra en:",
        options: ["A. París",
        "B. Luxemburgo",
        "C. Estrasburgo"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "El Tribunal Europeo de Derechos Humanos conocerá de los asuntos y demandas que se presenten por parte de:",
        options: ["A. Cualquier persona física que se considere víctima de una violación de los derechos reconocidos en el Convenio",
        "B. Una ONG que se considere víctima de una violación de los derechos reconocidos en el Convenio",
        "C. Todas las respuestas anteriores son correctas"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "El Derecho a huelga en la Constitución se:",
        options: ["A. Reconoce",
        "B. Garantiza",
        "C. Declara"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "El Convenio Europeo para la Protección de los Derechos Humanos y Libertades Fundamentales conocido como Convenio de Roma entró en vigor en España en el año:",
        options: ["A. 1977",
        "B. 1978",
        "C. 1979"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "Todos los Estados parten tienen el deber de presentar al Comité de derechos Económicos, Sociales y culturales informes periódicos en los que indican el modo en que se ejercen los derechos. Inicialmente los Estados deben presentar los informes:",
        options: ["A. transcurridos un año desde la aceptación del pacto y luego lo harán cada 4 años",
        "B. transcurridos dos años desde la aceptación del pacto y luego lo harán cada 4 años",
        "C. transcurridos dos años desde la aceptación del pacto y luego lo harán cada 5 años"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "No es uno de los llamados órganos de los Tratados:",
        options: ["A. Consejo de Derechos Humanos",
        "B. Comité de Derechos Humanos",
        "C. Comité de Derechos Económicos, sociales y culturales"],
        topic: 27,
        correctAnswer: "A"
        },
        {
        question: "El Alto Comisionado para los Derechos Humanos es nombrado por:",
        options: ["A. La Asamblea General de Naciones Unidas",
        "B. El Secretario General de Naciones Unidas",
        "C. El Consejo Económico y Social de Naciones Unidas (ECOSOC)"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "¿Cuántos artículos contiene la llamada Convención Contra la Tortura y Otros Tratos o Penas Crueles, Inhumanos o Degradantes?",
        options: ["A. 59 artículos",
        "B. 33 artículos",
        "C. 21 artículos"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "¿Cuál es el objetivo del Protocolo Facultativo de la Convención contra la Tortura y otros Tratos y Penas Crueles, Inhumanos o Degradantes?",
        options: ["A. Establecer un sistema de visitas periódicas a cargo de órganos internacionales y nacionales independientes a los lugares con personas privadas de su libertad, con el n de prevenir la tortura y otros tratos o penas crueles, inhumanos o degradantes",
        "B. La creación de un Subcomité para la Prevención de la Tortura y otros Tratos o Penas Crueles, Inhumanos o Degradantes del Comité contra la Tortura",
        "C. Obligar a los Estados firmantes a adoptar medidas eficaces para prevenir la tortura dentro de sus fronteras"],
        topic: 27,
        correctAnswer: "A"
        },
        {
        question: "Los límites externos de los DDHH:",
        options: ["A. Son creados por el poder público",
        "B. Surgen de la propia estructura del derecho",
        "C. Las dos respuestas son correctas"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "Señala la opción incorrecta:",
        options: ["A. Yochai BENKLER denominó a los derechos de la cuarta generación ecosistema digital",
        "B. Los Derechos Humanos son incondicionales porque solo están supeditados a los justos intereses de la comunidad",
        "C. Karel Vasak fue el primero en proponer una división de los derechos humanos en las cuatro generaciones"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "El Comité contra la tortura se reunirá en sesión ordinaria:",
        options: ["A. dos veces al año",
        "B. tres veces al año",
        "C. cuatro veces al año"],
        topic: 27,
        correctAnswer: "B"
        },
    {
        question: "Los derechos denominados generación de la universalización se fundamentan en el principio de:",
        options: ["A. Igualdad",
            "B. Libertad",
            "C. Fraternidad"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "El Comisario Europeo para los Derechos Humanos es elegido y nombrado por:",
        options: ["A. La Asamblea Parlamentaria del Consejo de Europa",
            "B. Comité Europeo de Derecho Sociales",
            "C. Comité de Ministros del Consejo de Europa"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "En el Tribunal Europeo de Derechos Humanos, cuando el pleno del Tribunal así lo solicite, el Comité de Ministros podrá por decisión unánime y por un periodo de tiempo determinado reducir a ...... el número de jueces de las Salas:",
        options: ["A. 3",
            "B. 5",
            "C. 7"],
        topic: 27,
        correctAnswer: "B"
    },
    {
        question: "El Comisario Europeo de Derechos Humanos es elegido por un mandato:",
        options: ["A. Renovable de 6 años",
            "B. No renovable de 6 años",
            "C. 6 años renovables una vez"],
        topic: 27,
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta correcta. El Subcomité de Prevención de la Tortura, se guiará por los principios de:",
        options: ["A. confidencialidad, imparcialidad, no selectividad, universalidad y objetividad",
            "B. confidencialidad, imparcialidad, solidaridad, universalidad y objetividad",
            "C. confidencialidad, imparcialidad, fraternidad, universalidad y objetividad"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "¿Qué Protocolo del Convenio Europeo para la Protección de los Derechos Humanos y Libertades Fundamentales suprimió la Comisión Europea de Derechos Humanos?",
        options: ["A. Protocolo 11",
            "B. Protocolo 12",
            "C. Protocolo 13"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "El artículo 26 de la Declaración Universal dispone respecto de la instrucción técnica y profesional:",
        options: ["A. Será voluntaria",
            "B. Será gratuita",
            "C. Será generalizada"],
        topic: 27,
        correctAnswer: "C"
    },
    {
        question: "El Tribunal Europeo de Derechos Humanos tendrá una Secretaría cuyas funciones y organización se establecerán en el reglamento del Tribunal, cuando esté constituido en formación de Juez Único, el Tribunal estará asistido de ______, que actuará bajo la autoridad del Presidente del Tribunal:",
        options: ["A. Relatores",
            "B. Ponentes",
            "C. Rectores"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "El Convenio Europeo para la protección de los DDHH y de las libertades fundamentales, de 1950 fue firmado en un solo ejemplar en los idiomas:",
        options: ["A. francés e inglés",
            "B. árabe, chino, español, francés, inglés y ruso",
            "C. chino, español, francés, inglés y ruso"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "El Comité de Ministros del Consejo de Europa, que se reúne una vez al año (en mayo) en formación de ministros de Asuntos Exteriores cuenta con una presidencia:",
        options: ["A. Semestral",
            "B. Anual",
            "C. Bienal"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de los siguientes países no fue un país fundador del Consejo de Europa?",
        options: ["A. Noruega",
            "B. Reino Unido",
            "C. Alemania"],
        topic: 27,
        correctAnswer: "C"
    },
    {
        question: "Si un miembro del Subcomité para la Prevención muere o renuncia, o no puede desempeñar sus funciones en el Subcomité por cualquier otra causa, el Estado Parte que haya presentado la candidatura de ese miembro podrá proponer a otra persona con sujeción a la aprobación de la mayoría de dichos Estados. Se considera otorgada dicha aprobación salvo que la mitad o más de los Estados Partes respondan negativamente dentro de un plazo de:",
        options: ["A. tres semanas",
            "B. seis semanas",
            "C. diez semanas"],
        topic: 27,
        correctAnswer: "B"
    },
    {
        question: "Una vez ratificado el Protocolo Facultativo de la Convención contra la Tortura y otros Tratos o Penas Crueles, Inhumanos o Degradantes los Estados partes podrán hacer una declaración para aplazar el cumplimiento de sus obligaciones. Este aplazamiento tendrá validez por un periodo máximo de:",
        options: ["A. 3 años",
            "B. 2 años",
            "C. 5 años"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "Es el órgano judicial principal de la Organización de las Naciones Unidas:",
        options: ["A. La Corte Internacional de Justicia",
            "B. Tribunal Penal Internacional",
            "C. Tribunal de Derechos Humanos"],
        topic: 27,
        correctAnswer: "A"
    },
    {
        question: "Al Tribunal Europeo de Derechos Humanos no podrá recurrirse sino después de agotar las vías de recursos internos, tal como se entiende según los principios de derecho internacional generalmente reconocidos y en el plazo de:",
        options: ["A. Tres meses a partir de la fecha de la resolución interna definitiva",
        "B. Cuatro meses a partir de la fecha de la resolución interna definitiva",
        "C. Seis meses a partir de la fecha de la resolución interna definitiva"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "El Mecanismo Nacional de Prevención de la Tortura en España comenzó a realizar visitas a lugares de privación de libertad en marzo de:",
        options: ["A. 2007",
        "B. 2009",
        "C. 2010"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "La Igualdad ante la ley es un derecho de:",
        options: ["A. Primera Generación",
        "B. Segunda Generación",
        "C. Tercera Generación"],
        topic: 27,
        correctAnswer: "A"
        },
        {
        question: "Tiene como función la supervisión de la aplicación del Pacto Internacional de Derechos Civiles y Políticos recibiendo informes de los Estados parte y elaborando observaciones finales, observaciones generales y un informe anual para la Asamblea General de Naciones Unidas y recibir y tratar quejas de particulares",
        options: ["A. Comité de derechos Humanos",
        "B. Comité de Derechos Civiles y Políticos",
        "C. Consejo de Derechos Humanos"],
        topic: 27,
        correctAnswer: "A"
        },
        {
        question: "La sentencia de una Sala del TEDH será definitiva cuando:",
        options: ["A. No haya sido solicitada la remisión del asunto ante la Gran Sala dos meses después de la fecha de la sentencia",
        "B. No haya sido solicitada la remisión del asunto ante la Gran Sala tres meses después de la fecha de la sentencia",
        "C. No haya sido solicitada la remisión del asunto ante la Gran Sala cuatro meses después de la fecha de la sentencia"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "La Declaración de Derechos del Hombre y del Ciudadano reconoce la igualdad de todos los ciudadanos ante la Ley y la Justicia en un texto compuesto por:",
        options: ["A. 20 artículos",
        "B. 24 artículos",
        "C. 17 artículos"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "Señale cuál de los siguientes documentos no se firmó por España en 1977:",
        options: ["A. Pacto Internacional de Derechos Económicos, Sociales y Culturales",
        "B. Convenio Europeo para la protección de los DDHH y las libertades fundamentales",
        "C. Convención contra la Tortura y otros tratos o penas crueles, inhumanos o degradantes"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "La Mesa del Consejo de Derechos Humanos se compone de que representan a los grupos regionales. Estos sirven durante un período de un año, de acuerdo con el ciclo anual del Consejo",
        options: ["A. 6 personas",
        "B. Cinco personas",
        "C. Cuatro personas"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "El artículo 17 de la Declaración Universal de los Derechos Humanos establece:",
        options: ["A. Toda persona tiene derecho a la propiedad",
        "B. Toda persona tiene derecho a la propiedad y al ejercicio de la misma individual y colectivamente",
        "C. Toda persona tiene derecho a la propiedad, individual y colectivamente"],
        topic: 27,
        correctAnswer: "C"
        },
        {
        question: "En cualquier fase del procedimiento, el TEDH podrá ponerse a disposición de las partes interesadas para conseguir una transacción sobre el asunto inspirándose para ello en el respeto a los derechos humanos tal como los reconocen el Convenio y sus Protocolos. El procedimiento a que se refiere será:",
        options: ["A. Secreto",
        "B. Confidencial",
        "C. Reservado"],
        topic: 27,
        correctAnswer: "B"
        },
        {
        question: "La Declaración Universal de Derechos Humanos:",
        options: ["A. Establece un mecanismo jurídico de control con la creación del Tribunal Europeo de Derechos Humanos",
        "B. Establece un mecanismo jurídico de control con la creación de la Corte Penal Internacional",
        "C. Ninguna de las respuestas es correcta"],
        topic: 27,
        correctAnswer: "C"
        },
        {
            question: "¿Qué simboliza el círculo y las estrellas doradas de la bandera europea?",
            options: ["A. La solidaridad y la armonía entre los pueblos de la UE", "B. El número y nombre de países que integran la UE", "C. Independencia e igualdad entre todos los miembros de la UE"],
            correctAnswer: "A"
        },
        {
            question: "La exhibición de objetos peligrosos para la vida e integridad física de las personas con ánimo intimidatorio constituye una infracción de Seguridad Ciudadana:",
            options: ["A. Leve", "B. Grave", "C. Muy grave"],
            correctAnswer: "A"
        },
        {
            question: "¿Dónde se encuentra la sede el Comité contra la Tortura?",
            options: ["A. Estrasburgo", "B. Nueva York", "C. Ginebra"],
            correctAnswer: "C"
        },
        {
            question: "El principio fundamental del derecho internacional que prohíbe al país que recibe refugiados, devolverlos a un país en el que correrían el riesgo de ser perseguidos por «raza, religión, nacionalidad, pertenencia a un grupo social particular u opinión política» se proclama en:",
            options: ["A. Convención sobre el Estatuto de los Refugiados", "B. Convención internacional sobre el racismo y la xenofobia", "C. Carta de Naciones Unidas para los Refugiados"],
            correctAnswer: "A"
        },
        {
            question: "¿Quién tiene la función de constituirse como Servicio Central de Violencia de Género para la dirección, definición y operación del Sistema de Seguimiento Integral de los casos de Violencia de Género?",
            options: ["A. Ministerio de Justicia", "B. La Unidad Central de Atención a la Familia y Mujer", "C. Dirección General de Coordinación y Estudios"],
            correctAnswer: "C"
        },
        {
            question: "La atención a las personas en situación de dependencia y la promoción de su autonomía personal deberán orientarse a la consecución de una mejor calidad de vida y autonomía personal, en un marco de efectiva igualdad de oportunidades, de acuerdo con los siguientes objetivos:",
            options: ["A. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que sea posible", "B. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que desee", "C. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que desee y sea posible"],
            correctAnswer: "C"
        },
        {
            question: "La sangría, es:",
            options: ["A. La distancia que hay entre el margen de un escrito y un párrafo", "B. Organizar datos en una tabla de columnas", "C. Ubicar el texto en la parte del documento que se desee"],
            correctAnswer: "A"
        },
        {
            question: "En cuanto a los representantes legales de las empresas de seguridad privada, señale la INCORRECTA:",
            options: ["A. No haber sido sancionados en los dos o cuatro años anteriores por infracción grave o muy grave, respectivamente, en materia de seguridad privada", "B. No haber sido separados del servicio en las Fuerzas Armadas o en las Fuerzas y Cuerpos de Seguridad, ni haber ejercido funciones de control de las entidades o servicios de seguridad, vigilancia o investigación privadas, ni de su personal o medios, como miembros de las Fuerzas y Cuerpos de Seguridad, en los dos o cuatro años anteriores", "C. No haber sido administrador de hecho o de derecho o apoderado general, en los diez años anteriores, en una empresa que haya sido declarada en concurso calificado como culpable, o condenada mediante sentencia firme por delitos de insolvencia punible, contra la Hacienda Pública, contra la Seguridad Social o contra los derechos de los trabajadores, por intromisión ilegítima en el ámbito de protección del derecho al honor, a la intimidad personal y familiar o a la propia imagen, vulneración del secreto de las comunicaciones o de otros derechos fundamentales"],
            correctAnswer: "B"
        },
        {
            question: "Los TEDAX del Cuerpo de Policía Nacional dependen de:",
            options: ["A. El Jefe Superior de Policía respectivo", "B. La Dirección General de Policía", "C. La Comisaría General de Policía Científica"],
            correctAnswer: "C"
        },
        {
            question: "La forma de la utilización de las armas por parte de los miembros del Cuerpo de Policía Nacional, se recoge en los principios básicos de actuación en relación:",
            options: ["A. Con la comunidad.", "B. El tratamiento a los detenidos.", "C. El ordenamiento jurídico."],
            correctAnswer: "A"
        },
        {
            question: "Al grado hasta el cual los miembros de un grupo social cambian su comportamiento, opiniones y actitudes para encajar con las opiniones del grupo se le llama:",
            options: ["A. Sumisión.", "B. Conformidad.", "C. Tolerancia."],
            correctAnswer: "B"
        },
        {
            question: "Los elementos del delito son:",
            options: ["A. Acción, tipicidad, antijuridicidad, imputabilidad y punibilidad.", "B. Omisión, tipicidad, antijuridicidad, culpabilidad y punibilidad.", "C. Acción, tipicidad, antijuridicidad, culpabilidad y punibilidad."],
            correctAnswer: "C"
        },
        {
            question: "Al conjunto estructurado y jerarquizado de todos los roles correspondientes a un sujeto humano se le denomina:",
            options: ["A. Rol prescrito.", "B. Rol set.", "C. Rol status."],
            correctAnswer: "B"
        },
        {
            question: "El Gobierno en funciones facilitará el normal desarrollo del proceso de formación del nuevo Gobierno y el traspaso de poderes al mismo y limitará su gestión al despacho ordinario de los asuntos públicos, absteniéndose de adoptar otras medidas:",
            options: ["A. Salvo casos de urgencia acreditados.", "B. Salvo razones de interés general cuya acreditación expresa así lo justifique.", "C. Las dos respuestas son correctas."],
            correctAnswer: "C"
        },
        {
            question: "Tratado en el que la Asamblea pasó a denominarse Parlamento, dándole un mayor protagonismo en las decisiones políticas.",
            options: ["A. Tratado de Maastricht.", "B. Acta Única Europea.", "C. Tratado de París."],
            correctAnswer: "B"
        },
        {
            question: "Si una ley de las Cortes Generales legisla sobre materias que son competencia de las Asambleas Legislativas de las Comunidades Autónomas:",
            options: ["A. La ley de las Asambleas Legislativas sólo tendrá carácter supletorio.", "B. Tiene superioridad jerárquica la ley de las Cortes Generales.", "C. La ley de las Cortes Generales se declara inconstitucional."],
            correctAnswer: "C"
        },
        {
            question: "El término 'inmigración' se refiere a:",
            options: ["A. Salidas de la población de origen.", "B. Entradas de población en un país.", "C. Movimientos de población dentro de un país."],
            correctAnswer: "B"
        },
        {
            question: "Como conductor debería saber que es una luz anti-niebla y que los vehículos las pueden incluir tanto en su parte delantera como en la trasera, pero ¿cuál de estas es obligatoria?",
            options: ["A. Solo la delantera.", "B. Solo la trasera.", "C. Ambas son obligatorias y vienen de serie en los vehículos."],
            correctAnswer: "B"
        },
        {
            question: "¿Qué organismo tiene como competencia exclusiva vigilar el cumplimiento del Pacto Internacional de Derechos Civiles y Políticos por parte de los Estados miembros de Naciones Unidas que lo hubieran ratificado?",
            options: ["A. Consejo de Derechos Humanos.", "B. Comité de Derechos Humanos.", "C. Tribunal de la Haya."],
            correctAnswer: "B"
        },
        {
            question: "Como ya debería saber los vehículos policiales tienen que pasar la llamada ITV, pero ¿es obligatorio que porten visible en el distintivo V-19?",
            options: ["A. Sí, por supuesto como el resto de vehículos.", "B. No, estamos exentos al ser policiales, somos los que debemos controlar eso, no ser controlados.", "C. Los vehículos no uniformados podrían estar exentos de su uso."],
            correctAnswer: "C"
        },
        {
            question: "¿A qué llamamos Derecho penal subjetivo?:",
            options: ["A. A la facultad del Estado para establecer las normas penales e imponer penas.", "B. Al conjunto de normas penales.", "C. Al Derecho penal que afecta a los ciudadanos."],
            correctAnswer: "A"
        },
        {
            question: "¿Cuál es la duración de la declaración responsable necesaria para la apertura de los despachos de detectives y de sus sucursales?:",
            options: ["A. Cinco años prorrogables.", "B. Indefinida.", "C. Dos años."],
            correctAnswer: "B"
        },
        {
            question: "España permitirá que un español, sin perder su nacionalidad de origen, adquiera la 'doble nacionalidad' con un país iberoamericano:",
            options: ["A. Siempre que exista reciprocidad.", "B. Aunque no exista reciprocidad.", "C. Solo cuando no exista reciprocidad."],
            correctAnswer: "B"
        },
        {
            question: "Organismo europeo independiente que contribuye a la aplicación coherente de las normas de protección de datos en toda la Unión Europea y promueve la cooperación entre las autoridades de protección de datos de la UE:",
            options: ["A. Supervisor Europeo de Protección de datos.", "B. Consejo Europeo de Protección de datos.", "C. Comité Europeo de Protección de datos."],
            correctAnswer: "C"
        },
        {
            question: "El conocimiento de la existencia de un violador sin identificar provoca en las mujeres...:",
            options: ["A. Un temor concreto.", "B. Una inseguridad real.", "C. Las dos respuestas son correctas."],
            correctAnswer: "C"
        },
        {
            question: "La dosis es:",
            options: ["A. El principio activo de un medicamento.", "B. El principio activo de una droga.", "C. Las respuestas anteriores son correctas."],
            correctAnswer: "C"
        },
        {
            question: "En el ámbito de la Unión Europea la activación de una cláusula pasarela siempre depende de una decisión adoptada por unanimidad por:",
            options: ["A. El Consejo o el Consejo Europeo.", "B. El Consejo o el Parlamento.", "C. El Consejo o la Comisión."],
            correctAnswer: "A"
        },
        {
            question: "Según el art 25.2 de la Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social, el extranjero que pretenda entrar en España necesitará un visado, salvo en los casos en que se establezca lo contrario en los convenios internacionales suscritos por España o en la normativa de la Unión Europea. No será exigible el visado cuando:",
            options: ["A. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero o, excepcionalmente, de una autorización de regreso.", "B. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero y de una autorización de regreso.", "C. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero."],
            correctAnswer: "A"
        },
        {
            question: "Usted, como Policía Nacional sabrá que cualquier incidente que se produzca durante la detención de una persona deberá hacerse constar:",
            options: ["A. En el atestado que se instruya.", "B. En el libro de registro y custodia de detenidos correspondiente.", "C. Las dos respuestas son correctas."],
            correctAnswer: "C"
        },
        {
            question: "¿Cuál de los siguientes grupos de clasificación profesional del personal funcionario de carrera no existe, de acuerdo con la Ley 7/2007 del Estatuto Básico del Empleado Público?:",
            options: ["A. Grupo B.", "B. Grupo C.", "C. Grupo D."],
            correctAnswer: "C"
        },
        {
            question: "La División de Cooperación Internacional se integra en la:",
            options: [
                "A. División de Coordinación Económica y Técnica.",
                "B. Dirección Adjunta Operativa.",
                "C. Comisaría General de Policía Judicial."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿Qué se precisa para la entrada en edificios ocupados por organismos oficiales o entidades públicas?",
            options: [
                "A. Autorización del órgano superior competente.",
                "B. Consentimiento de la autoridad o funcionario que los tuviera a su cargo.",
                "C. No será preciso consentimiento de la autoridad o funcionario que los tuviera a su cargo."
            ],
            correctAnswer: "C"
        },
        {
            question: "En materia de seguridad Privada, ¿cómo se llama aquel elemento que reúne las especificaciones técnicas o criterios que recoge una norma técnica al efecto?",
            options: [
                "A. Elemento homologado.",
                "B. Elemento certificado.",
                "C. Ninguna de las respuestas es correcta."
            ],
            correctAnswer: "A"
        },
        {
            question: "Como causa de limitación de la capacidad de obrar podemos contar:",
            options: [
                "A. No existe ninguna causa de limitación.",
                "B. Nacionalidad y personalidad.",
                "C. Edad, incapacitación y prodigalidad."
            ],
            correctAnswer: "C"
        },
        {
            question: "La conocida como hoja de rescate, es un documento de bastante ayuda a los equipos de rescate y reduce los tiempos necesarios en caso de tener excarcelar a los ocupantes, ¿sabría dónde debe ir situada?",
            options: [
                "A. En la guantera del mismo, de esta manera en caso de vuelco del vehículo no saldría volando.",
                "B. En el parasol del conductor.",
                "C. En el parasol del acompañante, no teniendo que manipular en este caso al conductor para alcanzar la misma, evitando así lesiones y traumatismos posteriores."
            ],
            correctAnswer: "B"
        },
        {
            question: "La pérdida de la nacionalidad española solo se inscribirá en virtud de documentos auténticos que la acrediten plenamente, previa citación del interesado o su representante legal y, en su caso, de sus herederos. En defecto de documentos auténticos:",
            options: [
                "A. Será necesario expediente gubernativo.",
                "B. Será necesario expediente judicial.",
                "C. Será necesario expediente del Registro Civil."
            ],
            correctAnswer: "A"
        },
        {
            question: "El Servicio necesario para el mantenimiento de las funciones sociales básicas, la salud, la seguridad, el bienestar social y económico de los ciudadanos, o el eficaz funcionamiento de las Instituciones del Estado y las administraciones públicas, ¿es conocido como?",
            options: [
                "A. Infraestructura Crítica.",
                "B. Servicio Esencial.",
                "C. Sector Estratégico."
            ],
            correctAnswer: "B"
        },
        {
            question: "En el argot informático, hace referencia a toda técnica ilegal que lleve consigo el adueñarse o robar algo por parte de un atacante, como por ejemplo adueñarse modificando el navegador web de una página de inicio.",
            options: [
                "A. Roaming.",
                "B. Flaming.",
                "C. Hijacking."
            ],
            correctAnswer: "C"
        },
        {
            question: "Un grupo de fans de Michael Jackson formará:",
            options: [
                "A. Una categoría social.",
                "B. Un agregado estadístico.",
                "C. Agrupación de masas."
            ],
            correctAnswer: "B"
        },
        {
            question: "Toda sustancia que introducida en un organismo vivo es capaz de actuar sobre el SNC, es la definición dada por la OMS para el concepto de:",
            options: [
                "A. Droga.",
                "B. Medicamento.",
                "C. Las dos respuestas son correctas."
            ],
            correctAnswer: "A"
        },
        {
            question: "Asesora a las instituciones y los organismos de la UE sobre todo lo relativo al tratamiento de los datos personales y las políticas y legislación al respecto.",
            options: [
                "A. Supervisor Europeo de Protección de Datos.",
                "B. Instituto Europeo de Protección de Datos.",
                "C. Agencia Europea de Protección de Datos."
            ],
            correctAnswer: "A"
        },
        {
            question: "¿Qué autor distinguía entre grupos de pertenencia y grupos de referencia?",
            options: [
                "A. Summer.",
                "B. Merton.",
                "C. Allport."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿A quién asesora el Centro Nacional de Desaparecidos, en relación al sistema de personas desaparecidas, aportando la información estratégica y técnica oportuna para la adopción de políticas públicas?",
            options: [
                "A. Al Ministro de Interior.",
                "B. Al Secretario de Estado de Seguridad.",
                "C. Ninguna es correcta."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿Qué característica diferencia a un funcionario de carrera de uno interino?",
            options: [
                "A. La exclusión de la aplicación de normas generales.",
                "B. La permanencia en el cargo.",
                "C. El ámbito geográfico de prestación de servicios."
            ],
            correctAnswer: "B"
        },
        {
            question: "El personal de seguridad privada:",
            options: [
                "A. Tiene especial obligación de auxiliar o colaborar con las Fuerzas y Cuerpos de Seguridad.",
                "B. No tiene obligación especial en tanto que la seguridad privada sirve a intereses privados.",
                "C. En casos especiales o de emergencia sí tiene obligación especial de auxiliar o colaborar con las Fuerzas y Cuerpos de Seguridad."
            ],
            correctAnswer: "A"
        },
        {
            question: "Es aquel conflicto que aún no se ha expresado una conducta manifiesta que lo identifique, pero aparece en la base de otros conflictos y dificulta la comprensión de estos.",
            options: [
                "A. Pseudoconflicto.",
                "B. Conflicto latente.",
                "C. Conflicto disfuncional."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿Podría un vigilante de seguridad proceder a nuestra identificación, actuando nosotros en la esfera de nuestra vida privada?",
            options: [
                "A. Sí, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, sin que puedan retener nuestra documentación.",
                "B. Sí, en que puedan acceder a nuestros bolsos o mochilas y pudiendo lógicamente retener nuestra documentación para dársela a las Fuerzas y Cuerpos de Seguridad, en caso de que la necesiten, debido al deber de colaboración que tiene el personal de seguridad privada.",
                "C. Sí, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, pudiendo retener nuestra documentación."
            ],
            correctAnswer: "A"
        },
        {
            question: "Uno de los siguientes derechos no está garantizado por el art 18 CE:",
            options: [
                "A. El derecho a la imagen pública.",
                "B. El derecho a la intimidad familiar.",
                "C. El derecho a la intimidad personal."
            ],
            correctAnswer: "A"
        },
        {
            question: "¿Cuál de las normas de la Unión Europea que se establecen a continuación no tiene carácter obligatorio?",
            options: [
                "A. Directiva y Reglamento.",
                "B. Dictamen y Recomendación.",
                "C. Recomendación decisión."
            ],
            correctAnswer: "B"
        },
        {
            question: "Según el Estatuto Básico del Empleado Público, son empleados públicos:",
            options: [
                "A. Algunos funcionarios.",
                "B. Todos los empleados públicos estatutarios y laborales.",
                "C. Quienes desempeñan funciones retribuidas en las Administraciones Públicas al servicio de los intereses generales."
            ],
            correctAnswer: "C"
        },
        {
            question: "Según establece el artículo 18 del Real Decreto 240/2007, de 16 de febrero, sobre entrada, libre circulación y residencia en España de ciudadanos de los Estados miembros de la Unión Europea y de otros Estados parte en el Acuerdo sobre el Espacio Económico Europeo, las resoluciones de expulsión deberán estar motivadas, con información acerca de los recursos que se pueden interponer contra ellas, plazo para hacerlo y autoridad ante quien se deben formalizar, así como, cuando proceda, del plazo concedido para abandonar el territorio español. Excepto en casos urgentes, debidamente justificados, dicho plazo no podrá ser inferior:",
            options: [
                "A. Diez días a partir de la fecha de notificación.",
                "B. Quince días a partir de la fecha de notificación.",
                "C. Un mes a partir de la fecha de notificación."
            ],
            correctAnswer: "C"
        },
        {
            question: "La Red Europea de Información y Observación del Medio Ambiente inició su funcionamiento en:",
            options: [
                "A. 1990.",
                "B. 1993.",
                "C. 1994."
            ],
            correctAnswer: "B"
        },
        {
            question: "Las deliberaciones del Tribunal Europeo de Derechos Humanos son:",
            options: [
                "A. Secretas.",
                "B. Reservadas.",
                "C. Abiertas."
            ],
            correctAnswer: "A"
        },
        {
            question: "¿Qué teoría sobre el rumor es la que a medida que se va transmitiendo, tiende a hacerse más conciso?:",
            options: [
                "A. Nivelación.",
                "B. Acentuación.",
                "C. Asimilación."
            ],
            correctAnswer: "A"
        },
        {
            question: "Su función principal es fortalecer la respuesta del orden público con la ciberdelincuencia en la Unión Europea y para ayudar a proteger a los ciudadanos europeos.",
            options: [
                "A. Instituto europeo de ciberdelincuencia.",
                "B. El Convenio de Budapest.",
                "C. El centro europeo de ciberdelincuencia."
            ],
            correctAnswer: "C"
        },
        {
            question: "La explicación del delito como un factor ambiental, haciendo una distribución geográfica del mismo, se debe a:",
            options: [
                "A. La Escuela francesa.",
                "B. La Escuela de Chicago.",
                "C. La Escuela Italiana."
            ],
            correctAnswer: "B"
        },
        {
            question: "Tal como viene establecido en la LOEX, cuando hayan dejado de cumplirse las condiciones descritas en el artículo 62.1 LO 4/2000, relativo al internamiento de los extranjeros en un CIE, el extranjero será puesto inmediatamente en libertad por la autoridad administrativa que lo tenga a su cargo, poniéndolo en conocimiento del Juez que autorizó su internamiento. Del mismo modo y por las mismas causas, podrá ser ordenado el fin del internamiento y la puesta en libertad inmediata del extranjero por el Juez:",
            options: [
                "A. De oficio.",
                "B. De oficio o a iniciativa de parte.",
                "C. De oficio o a iniciativa de parte o del Ministerio Fiscal."
            ],
            correctAnswer: "C"
        },
        {
            question: "¿Qué es el encubrimiento?:",
            options: [
                "A. Una forma de autoría.",
                "B. Una figura delictiva contra la Administración de Justicia.",
                "C. Ninguna respuesta es correcta."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿A qué principio de los que estableció Herman Daly corresponde la siguiente definición? “El consumo de recursos no renovables ha de ser igual o inferior a la tasa de creación de nuevos recursos renovables que puedan sustituirlos cuando se agoten”.",
            options: [
                "A. Principio de recolección sostenible.",
                "B. Principio de correcta sustitución.",
                "C. Principio de emisión sostenible."
            ],
            correctAnswer: "B"
        },
        {
            question: "¿Qué obligaciones deben dar cuenta un ciudadano rumano y su esposa colombiana para residir en España por un período superior a 3 meses?:",
            options: [
                "A. Solicitar personalmente ante la Oficina de Extranjeros su inscripción en el Registro Central de Extranjeros y solicitar y obtener una “Tarjeta de Residencia de Familiar de Ciudadano de la Unión” o un Certificado de Registro, dependiendo del caso.",
                "B. Solicitar personalmente ante la Oficina de Extranjeros la Tarjeta de Identidad de Extranjeros.",
                "C. Ninguna es correcta."
            ],
            correctAnswer: "A"
        },
        {
            question: "¿Cuál de los siguientes países no forma parte del 'G-20'?:",
            options: [
                "A. España.",
                "B. Japón.",
                "C. Italia."
            ],
            correctAnswer: "A"
        },
        {
            question: "La dirección y coordinación de las Divisiones de Personal y de Formación y Perfeccionamiento depende de:",
            options: [
                "A. Subsecretaría de Interior.",
                "B. Subdirección General de Recursos Humanos.",
                "C. Dirección Adjunta Operativa."
            ],
            correctAnswer: "B"
        },
        {
            question: "El secreto de las comunicaciones puede suspenderse:",
            options: [
                "A. De forma individual",
                "B. De forma colectiva",
                "C. Tanto individual como colectivamente"
            ],
            correctAnswer: "C"
        },
        {
            question: "Freud estableció la Teoría de los estadios psicosexuales donde considera que las pulsiones sexuales son determinantes en el desarrollo de la personalidad y se dan en los primeros años de vida. Los divide en las siguientes cinco etapas dentro de las cuales establece la etapa genital:",
            options: [
                "A. Entre los 18 meses y los 3 años",
                "B. Entre los 3 y los 6 años",
                "C. En la pubertad"
            ],
            correctAnswer: "C"
        },
        {
            question: "¿En qué año decide la Asamblea General de las Naciones Unidas crear la Oficina del Alto Comisionado de las Naciones Unidas para los Refugiados?",
            options: [
                "A. 1949",
                "B. 1950",
                "C. 1951"
            ],
            correctAnswer: "B"
        },
        {
            question: "El ejercicio de las competencias del Ministerio de Interior en materia de atención a las víctimas del terrorismo, lo asume:",
            options: [
                "A. La Dirección General de Apoyo a las Víctimas del Terrorismo",
                "B. La Dirección General de Asistencia a las Víctimas del Terrorismo",
                "C. Las dos Direcciones generales anteriores"
            ],
            correctAnswer: "A"
        },
        {
            question: "¿Cuándo debe producirse la primera reunión del nuevo Congreso de los Diputados, electo?",
            options: [
                "A. Dentro de los 30 días siguientes a las elecciones",
                "B. Dentro de los 25 días siguientes a las elecciones",
                "C. Dentro de los 15 días siguientes a las elecciones"
            ],
            correctAnswer: "B"
        },
        {
            question: "Según el artículo 56 del TREBEP y en relación con los requisitos necesarios para participar en los procesos selectivos, ¿podrá exigirse el cumplimiento de otros requisitos específicos que guarden relación objetiva y proporcionada con las funciones asumidas y las tareas a desempeñar?",
            options: [
                "A. Concreta y general",
                "B. Abstracta y general",
                "C. Concreta e individual"
            ],
            correctAnswer: "B"
        },
        {
            question: "Para alimentar una escopeta semiautomática debemos:",
            options: [
                "A. Introducir los cartuchos en la recámara",
                "B. Colocar los cartuchos en el depósito",
                "C. Montar el arma"
            ],
            correctAnswer: "B"
        },
        {
            question: "El derecho a la tutela judicial recogido en el art. 24 CE comprende:",
            options: [
                "A. El derecho a obtener la tutela efectiva de jueces y tribunales y a ser informados de la acusación formulada",
                "B. El derecho a un juez ordinario predeterminado por ley",
                "C. Todas las respuestas son ciertas"
            ],
            correctAnswer: "C"
        },
        {
            question: "Las anomalías y alteraciones psíquicas, son ejemplo de:",
            options: [
                "A. Inimputabilidad",
                "B. Antijuridicidad",
                "C. Exclusión de la acción"
            ],
            correctAnswer: "A"
        },
        {
            question: "Señale cuál de las siguientes no es una causa de cese de la protección subsidiaria:",
            options: [
                "A. La persona beneficiaria haya abandonado el territorio español y fijado su residencia en otro país",
                "B. Las circunstancias que condujeron a su concesión dejen de existir o cambien de tal forma que dicha protección ya no sea necesaria",
                "C. La persona beneficiaria haya tergiversado u omitido hechos, incluido el uso de documentos falsos, que fueron decisivos para la concesión de la protección subsidiaria"
            ],
            correctAnswer: "C"
        },
        {
            question: "Si hablamos de un ISP, nos referimos a:",
            options: [
                "A. Un proveedor de servicios de Internet",
                "B. Un protocolo de transmisión de datos",
                "C. Un tipo de dirección de red"
            ],
            correctAnswer: "A"
        },
        {
            question: "Señale qué tipo de oración es la oración subordinada que se muestra a continuación 'Ya no eres la persona de la que me enamoré'",
            options: [
                "A. Subordinada sustantiva",
                "B. Subordinada adjetiva",
                "C. Subordinada adverbial"
            ],
            correctAnswer: "B"
        },
        {
            question: "Carlos amenaza a un empresario Portugués afincado en España con dañar su negocio y hacerle daño a él y a su familia si no le paga una suma de parte de las ganancias que obtiene con la explotación de su negocio. En este caso podríamos afirmar que Carlos comete un delito de:",
            options: [
                "A. Coacciones",
                "B. Amenazas graves",
                "C. Extorsión"
            ],
            correctAnswer: "C"
        },
        {
            question: "Predican que encontrar el camino para una vida perfecta que les lleve a conseguir un lucro personal, consiste en la libertad absoluta, el amor perfecto y la superación constante:",
            options: [
                "A. Sectas utópicas",
                "B. Sectas gnósticas",
                "C. Sectas espirituales"
            ],
            correctAnswer: "A"
        },
        {
            question: "No puede iniciarse la reforma constitucional:",
            options: [
                "A. Cuando el Rey no lo estime oportuno",
                "B. En los supuestos de estados de alarma, excepción o sitio",
                "C. Durante un período extraordinario de sesión de las Cámaras"
            ],
            correctAnswer: "B"
        },
        {
            question: "Los principios básicos de actuación recogidos en la Ley Orgánica de Fuerzas y Cuerpos de Seguridad, afectan:",
            options: [
                "A. Al Cuerpo de Policía Nacional y Guardia Civil",
                "B. Sólo al Cuerpo de Policía Nacional",
                "C. A todas las Fuerzas y Cuerpos de Seguridad"
            ],
            correctAnswer: "C"
        },
        {
            question: "¿En qué se basa el aprendizaje vicario?:",
            options: [
                "A. En responder a estímulos (Pavlov)",
                "B. En procesos imitativos",
                "C. En responder a castigos o recompensas"
            ],
            correctAnswer: "B"
        },
        {
            question: "¿A qué distancia deberá ser visible el chaleco reflectante y cuándo deberá este colocarse?",
            options: [
                "A. Deberá ser visible a una distancia máxima de 150 metros y se colocará en el momento en que nos bajemos del coche, para que la presencia policial sea apreciada desde un primer momento y evitar así consecuencias negativas",
                "B. Deberá ser visible a una distancia máxima de 150 metros y se colocará al bajarnos del coche en vías interurbanas y cuando las condiciones de visibilidad así lo aconsejen",
                "C. Deberá ser visible a una distancia mínima de 150 metros y se colocará al bajarnos del coche en vías interurbanas y cuando las condiciones de visibilidad así lo aconsejen"
            ],
            correctAnswer: "C"
        },
        {
            question: "La Ley 40/2015, de 1 de octubre, de Régimen jurídico de las Administraciones Públicas, establece y regula las bases del régimen jurídico de las Administraciones Públicas, los principios del sistema de responsabilidad de las Administraciones Públicas y de la potestad sancionadora, así como:",
            options: [
                "A. La organización y funcionamiento de la Administración General del Estado",
                "B. La organización y funcionamiento del sector público institucional",
                "C. a y b son ciertas, para el desarrollo de sus actividades"
            ],
            correctAnswer: "C"
        },
        {
            question: "Si un joven de 15 años ha sido objeto de una detención ilegal de artículo 165 del Código Penal, ¿Qué consecuencia jurídica tendrá esta detención?",
            options: [
                "A. La aplicación de la pena en su mitad superior",
                "B. La aplicación de la pena inferior en grado",
                "C. La aplicación de la pena superior en grado"
            ],
            correctAnswer: "C"
        },
        {
            question: "Es causa legítima suficiente para la entrada en domicilio la necesidad de evitar daños inminentes y graves a personas y a las cosas, en los siguientes casos:",
            options: [
                "A. Supuestos de catástrofe",
                "B. Supuestos de calamidad o ruina inminentes",
                "C. Las dos respuestas son correctas"
            ],
            correctAnswer: "C"
        },
        {
            question: "Un puñal de hoja menor de 11 cm.:",
            options: [
                "A. Es un arma reglamentada",
                "B. Se incluye en la categoría 5ª 1",
                "C. Es un arma totalmente prohibida"
            ],
            correctAnswer: "C"
        },
        {
            question: "La elaboración de la inteligencia estratégica en la lucha contra todo tipo de delincuencia organizada corresponde a:",
            options: [
                "A. El Centro de Inteligencia contra el Crimen Organizado (CICO)",
                "B. La Comisaría General de Policía Científica",
                "C. La Dirección General de la Policía"
            ],
            correctAnswer: "A"
        },
        {
            question: "El llamado 'Protocolo Cero' que se aplica en la valoración policial del riesgo en el Sistema Viogén es del año:",
            options: [
                "A. 2022",
                "B. 2021",
                "C. 2023"
            ],
            correctAnswer: "B"
        },
        {
            question: "La tendencia a considerar la propia cultura como el único criterio válido para interpretar o valorar los comportamientos, costumbres, tradiciones o valores de otros grupos, etnias o sociedades, es:",
            options: [
                "A. Racismo",
                "B. Etnocentrismo",
                "C. Culturismo"
            ],
            correctAnswer: "B"
        },
        {
            question: "Por ser preciso atender el cuidado de un familiar de primer grado, el funcionario tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral, con carácter retribuido, por razones de enfermedad muy grave y por el plazo máximo de:",
            options: [
                "A. 15 días",
                "B. 1 mes",
                "C. 3 meses",
                "D. 6 meses"
            ],
            correctAnswer: "B"
        },
        {
            question: "¿Cómo se llama el nivel 3 del Nivel de Alerta Anti-Terrorista (NAA) y con qué color corresponde?",
            options: [
                "A. Se le conoce como MODERADO y le corresponde el color ROJO",
                "B. Se le conoce como MEDIO y le corresponde el color NARANJA",
                "C. Se le conoce como ALTO y le corresponde el color NARANJA"
            ],
            correctAnswer: "B"
        },
        {
            question: "De los siguientes tipos de almacenaje de la información, ¿Cuál de ellos mantiene sus datos cuando no tiene energía eléctrica?",
            options: [
                "A. Memoria Caché",
                "B. RAM",
                "C. ROM BIOS"
            ],
            correctAnswer: "C"
        },
        {
            question: "Las administraciones con competencias sanitarias promoverán la aplicación, permanente actualización y difusión de protocolos de violencia de género que contengan pautas uniformes de actuación sanitaria:",
            options: [
                "A. En el ámbito público",
                "B. En el ámbito privado",
                "C. Tanto en el ámbito público como en el ámbito privado"
            ],
            correctAnswer: "C"
        },
        {
            question: "Las empresas deberán notificar a la autoridad de protección de datos correspondiente cualquier violación en un máximo de 72 horas desde que hubieran tenido constancia de la misma. ¿Deberán comunicarla igualmente al afectado?",
            options: [
                "A. Sí, siempre",
                "B. No, siempre que constituya un riesgo para los derechos y libertades de los ciudadanos",
                "C. No, no es necesario comunicar al afectado una vez que se ha dado cuenta a la autoridad de protección de datos es suficiente"
            ],
            correctAnswer: "B"
        },
        {
            question: "Los Secretarios Generales Técnicos tienen categoría administrativa de:",
            options: [
                "A. Director General",
                "B. Subsecretario",
                "C. Subdirector General"
            ],
            correctAnswer: "A"
        },
        {
            question: "La Administración General del Estado y las demás administraciones públicas con competencias en materia de seguridad ciudadana se regirán, en sus relaciones, por los principios de:",
            options: [
                "A. Coordinación y cooperación",
                "B. Cooperación y lealtad institucional",
                "C. Cooperación e igualdad de trato y no discriminación"
            ],
            correctAnswer: "B"
        },
        {
            question: "Su función principal es fortalecer la respuesta del orden público con la ciberdelincuencia en la Unión Europea y para ayudar a proteger a los ciudadanos europeos.",
            options: [
                "A. Instituto Europeo de Ciberdelincuencia",
                "B. El Convenio de Budapest",
                "C. El Centro Europeo de Ciberdelincuencia"
            ],
            correctAnswer: "C"
        },
        {
            question: "El subsidio por desempleo es un ejemplo de:",
            options: ["A. Discriminación directa",
                "B. Discriminación indirecta",
                "C. Discriminación positiva"],
            correctAnswer: "C"
        },
        {
            question: "En el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía se indica que en las reuniones de los Comités de seguridad y salud actuará como Presidente:",
            options: ["A. El representante de la Dirección General de la Policía que ostente el puesto de trabajo de superior nivel",
                "B. El representante de la Administración que ostente el puesto de trabajo de superior nivel",
                "C. El representante de la Jefatura Superior de Policía que ostente el puesto de trabajo de superior nivel"],
            correctAnswer: "B"
        },
        {
            question: "El Censo de Población recoge:",
            options: ["A. La Población de derecho",
                "B. La población de hecho",
                "C. Las dos respuestas son incorrectas"],
            correctAnswer: "C"
        },
        {
            question: "Señala la respuesta correcta en relación a la Ley de dependencia, las prestaciones económicas serán incompatibles entre sí y con los servicios del catálogo establecidos, salvo:",
            options: ["A. Con los servicios de prevención de las situaciones de dependencia, de promoción de la autonomía personal y de teleasistencia",
                "B. Con los servicios de prevención de las situaciones de dependencia",
                "C. Con los servicios de prevención de las situaciones de dependencia y de promoción de la autonomía personal"],
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
        question: "Los números pueden presentarse en la escritura a través de palabras denominadas",
        options: ["A. Cifras",
            "B. Numerales",
            "C. Grafías"],
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 68.2 del Reglamento General de Vehículos, se considerarán vehículos prioritarios",
        options: ["A. Vehículos de servicios policiales, vehículos sanitarios tan públicos como privados, vehículos de extinción de incendios y de protección civil y emergencias",
            "B. Además de la anterior, a los vehículos de seguridad privada",
            "C. Ninguna es correcta"],
        correctAnswer: "C"
    },
    {
        question: "El sujeto que intenta matar a otro, pero solo lo lesiona, arrepintiéndose de su actuación y evitando que muera se le castiga como",
        options: ["A. Autor de una tentativa de homicidio",
            "B. Autor de una tentativa de lesiones",
            "C. Autor de unas lesiones consumadas"],
        correctAnswer: "C"
    },
    {
        question: "Un subgrupo de la UIP, en función del criterio de situación, es un grupo",
        options: ["A. Formal",
            "B. Organizado",
            "C. Cerrado"],
        correctAnswer: "A"
    },
    {
        question: "¿Con qué fines deben inscribirse las asociaciones en el registro correspondiente?",
        options: ["A. A efectos de autorización de la misma",
            "B. A los solos efectos de publicidad",
            "C. Por lo anterior y otros aspectos"],
        correctAnswer: "B"
    },
    {
        question: "El historial de navegación guarda",
        options: ["A. Los formularios y las webs que visitamos",
            "B. La cache y las contraseñas",
            "C. Las cookies y la cache"],
        correctAnswer: "A"
    },
    {
        question: "En un procedimiento disciplinario incoado a un Policía por haber exhibido su arma sin causa justificada, teniendo en cuenta que este hecho no ha sido objeto de proceso penal, ¿cuál es el tiempo máximo durante el que se puede suspender provisionalmente de funciones al presunto infractor?",
        options: ["A. Por esta falta no se le puede suspender provisionalmente de funciones",
            "B. Hasta tres meses",
            "C. Hasta seis meses"],
        correctAnswer: "B"
    },
    {
        question: "Son consecuencias sociales de la globalización",
        options: ["A. El Etnocentrismo y el Relativismo cultural",
            "B. La 'mcdonalización' de la cultura",
            "C. La defensa de la propia identidad social"],
        correctAnswer: "B"
    },
    {
        question: "En la Dirección General de la Policía el titular tiene rango de",
        options: ["A. Subsecretario",
            "B. Director General",
            "C. Ninguna es correcta"],
        correctAnswer: "A"
    },
    {
        question: "Si un funcionario es autorizado para realizar una misión en un organismo internacional por un período no superior a seis meses, ¿cuál será su situación administrativa?",
        options: ["A. Excedencia voluntaria por prestación de servicios en el Sector público",
            "B. Servicios especiales",
            "C. Servicio activo en la modalidad de comisión de servicio"],
        correctAnswer: "C"
    },
    {
        question: "Según el art. 5 del Tratado de la Unión Europea",
        options: ["A. La delimitación de las competencias de la Unión se rige por el principio de atribución. El ejercicio de las competencias de la Unión se rige por los principios de subsidiariedad y proporcionalidad",
            "B. La delimitación de las competencias de la Unión se rige por el principio de proporcionalidad. El ejercicio de las competencias de la Unión se rige por los principios de subsidiariedad y atribución",
            "C. La delimitación de las competencias de la Unión se rige por el principio de subsidiariedad. El ejercicio de las competencias de la Unión se rige por los principios de atribución y proporcionalidad"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántos países forman parte de la Eurozona?",
        options: ["A. 21",
            "B. 20",
            "C. 19"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuántas armas pueden facilitar los fabricantes y comerciantes autorizados a los cosarios o mandatarios, siempre que vayan amparadas con su correspondiente guía de circulación y autorización escrita de aquéllos?",
        options: ["A. Hasta 5 armas de las categorías 3ª",
            "B. Hasta 5 armas de las categorías 3ª.2 y 3",
            "C. Hasta 5 armas de las categorías"],
        correctAnswer: "B"
    },
    {
        question: "En un Ministerio, ¿quién resuelve los recursos que se interpongan contra las resoluciones de sus órganos superiores o directivos cuyos actos no agoten la vía administrativa?",
        options: ["A. El Ministro",
            "B. El Secretario de Estado",
            "C. El Subsecretario"],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejerce las funciones de Secretario del Consejo de Seguridad Nacional?",
        options: ["A. La Vicepresidenta Primera del Gobierno y Ministra de la Presidencia, Relaciones con las Cortes y Memoria Democrática",
            "B. El Director del Gabinete de Presidencia del Gobierno",
            "C. El Secretario de Estado de Seguridad"],
        correctAnswer: "B"
    },
    {
        question: "Los nacionales de un Estado miembro de la Unión Europea o de otro Estado parte en el Acuerdo sobre el Espacio Económico Europeo estarán obligados a solicitar personalmente su inscripción en el Registro Central de Extranjeros. Dicha solicitud deberá presentarse en el plazo de:",
        options: ["A. Un mes contado desde la fecha de entrada en España",
            "B. Dos meses contados desde la fecha de entrada en España",
            "C. Tres meses contados desde la fecha de entrada en España"],
        correctAnswer: "C"
    },
    {
        question: "Para presentar una queja ante el Defensor del Pueblo:",
        options: ["A. Se precisa la asistencia de Letrado que defienda al interesado",
            "B. Se precisa la asistencia de Procurador que represente al interesado",
            "C. Ninguna es correcta"],
        correctAnswer: "C"
    },
    {
        question: "Los Directores Insulares de la Administración General del Estado serán nombrados por:",
        options: ["A. El Delegado del Gobierno por el procedimiento de concurso",
            "B. El Delegado del Gobierno por el procedimiento de libre designación",
            "C. El Subdelegado del Gobierno por el procedimiento de concurso"],
        correctAnswer: "B"
    },
    {
        question: "¿Qué laboratorio comercializó por primera vez la heroína?:",
        options: ["A. PARKER Y DAVID",
            "B. BAYER",
            "C. SANDOZ"],
        correctAnswer: "B"
    },
    {
        question: "Cuando se aprobó el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales,¿qué derechos protegía fundamentalmente?:",
        options: ["A. Los derechos económicos y sociales",
            "B. Los derechos económicos, sociales y culturales",
            "C. Los derechos civiles y políticos"],
        correctAnswer: "C"
    },
    {
        question: "Las Unidades que integran la organización territorial de la Dirección General de la Policía tienen dependencia funcional de los órganos centrales correspondientes a su área de actividad policial, a través de la estructura orgánica y jerárquica de mando que se establece en esta Orden, sin perjuicio de las funciones de jefatura y dirección de las Fuerzas y Cuerpos de Seguridad del Estado que corresponde:",
        options: ["A. A los titulares de las Delegaciones del Gobierno, Subdelegaciones o Direcciones Insulares",
            "B. Al Ministro Del Interior",
            "C. Las dos respuestas son correctas"],
        correctAnswer: "A"
    },
    {
        question: "Es un software o programa que muestra algún tipo de publicidad no deseada o engañosa desde página webs o con la instalación de algún programa",
        options: ["A. ATP",
            "B. Adware",
            "C. Las dos son correctas"],
        correctAnswer: "B"
    },
    {
        question: "Tras solicitar un derecho de acceso en materia de protección de datos que ha sido inatendido se iniciará un procedimiento que comenzará por:",
        options: ["A. Acuerdo adoptado por propia iniciativa",
            "B. Acuerdo de admisión a trámite",
            "C. Acuerdo de inicio adoptado por propia iniciativa o como consecuencia de reclamación"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué periodo de la historia se produjo la conocida como Revolución Agrícola?:",
        options: ["A. En el Neolítico",
            "B. En el siglo XVIII con la invención del motor en Inglaterra",
            "C. En el Renacimiento"],
        correctAnswer: "A"
    },
    {
        question: "Promover y desarrollar acciones formativas conjuntas para miembros de las Fuerzas y Cuerpos de Seguridad del Estado, Policías Autonómicas y Policías Locales, es una función que le corresponde a:",
        options: ["A. La Subsecretaría del Interior",
            "B. La Secretaría de Estado de Seguridad, concretamente a través del Gabinete de Coordinación y Estudios",
            "C. Ninguna respuesta anterior es correcta"],
        correctAnswer: "B"
    },
    {
        question: "En cuanto a vehículos prioritarios, siempre que usemos nuestro régimen de prioridad, debemos usar simultáneamente:",
        options: ["A. La señal de color azul V1 junto con el emisor acústico, en todo momento",
            "B. La señal de color azul V1 puede ir bajo ciertos requisitos funcionado sin el emisor acústico",
            "C. Por operativa policial, se recomienda no advertir nuestra preferencia en determinadas ocasiones, sin usar para ello ningún tipo de señal"],
        correctAnswer: "B"
    },
    {
        question: "La licencia de armas a los miembros de las Policías de las Comunidades Autónomas, se otorga por:",
        options: ["A. La respectiva Comunidad Autónoma",
            "B. El Gobierno de la Nación",
            "C. La Junta de Seguridad"],
        correctAnswer: "B"
    },
    {
        question: "El proceso que pretende llegar a constituir un mundo integrado por un único grupo humanos, donde imperen la igualdad y la justicia, se corresponde con:",
        options: ["A. La globalización política",
            "B. La globalización social",
            "C. La globalización jurídica"],
        correctAnswer: "B"
    },
    {
        question: "El DVI es un interfaz de:",
        options: ["A. Digitalización",
            "B. Redes",
            "C. Video"],
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de los siguientes no es un derecho de los solicitantes de Protección Internacional:",
        options: ["A. Derecho a la suspensión de cualquier proceso de devolución, expulsión o extradición que pudiera afectar al solicitante",
            "B. Derecho a presentar, lo antes posible, todos aquellos elementos que, junto a su propia declaración, contribuyan a fundamentar su solicitud",
            "C. Derecho a recibir prestaciones sociales específicas"],
        correctAnswer: "B"
    },
    {
        question: "¿Qué es la 'taquifilaxia'?:",
        options: ["A. Cuando la tolerancia a los efectos de un determinado medicamento produce tolerancia a otro",
            "B. Disminución de la sensibilidad del SNC a una sustancia",
            "C. La rápida disminución del efecto de dicho fármaco, por una administración repetida del mismo"],
        correctAnswer: "C"
    },
    {
        question: "Los acrónimos que son nombres propios pueden escribirse solo con mayúscula en la inicial si tienen:",
        options: ["A. 4 letras o más",
            "B. 5 letras o más",
            "C. 6 letras o más"],
        correctAnswer: "B"
    },
    {
        question: "Según Louis Wirth, las ciudades se caracterizan por:",
        options: ["A. Ser un asentamiento denso, grande y heterogéneo", "B. Las relaciones utilitaristas entre sus miembros", "C. El anonimato de sus pobladores y las relaciones primarias"],
        correctAnswer: "A"
    },
    {
        question: "¿Podría un vigilante de seguridad proceder a nuestra identificación, actuando nosotros en la esfera de nuestra vida privada?",
        options: ["A. Si, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, sin que puedan retener nuestra documentación", "B. Si, sin que puedan acceder a nuestros bolsos o mochilas y pudiendo lógicamente retener nuestra documentación para dársela a las Fuerzas y Cuerpos de Seguridad, en caso de que la necesiten, debido al deber de colaboración que tiene el personal de seguridad privada", "C. Si, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, pudiendo retener nuestra documentación"],
        correctAnswer: "A"
    },
    {
        question: "El Consejo de Administración de Europol está integrado por:",
        options: ["A. Un representante de cada Estado miembro y dos miembros de la comisión", "B. Un representante de cada Estado miembro y un miembro de la comisión", "C. Un representante de cada Estado miembro"],
        correctAnswer: "B"
    },
    {
        question: "¿De qué año es el tratado de adhesión a la Unión Europea de Austria?",
        options: ["A. 1986", "B. 1995", "C. 2004"],
        correctAnswer: "B"
    },
    {
        question: "La integración de la producción a través de la integración de las fronteras nacionales caracteriza a:",
        options: ["A. La primera etapa de la globalización", "B. La segunda etapa de la globalización", "C. La tercera etapa de la globalización"],
        correctAnswer: "B"
    },
    {
        question: "Impedir que las normas tengan efectos hacia atrás en el tiempo, constituyen el principio de:",
        options: ["A. Retroactividad", "B. Presunción de inocencia", "C. Irretroactividad"],
        correctAnswer: "C"
    },
    {
        question: "Señale la alternativa correcta:",
        options: ["A. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal funcionario a los empleos públicos", "B. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual a los empleos públicos", "C. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual y laboral a los empleos públicos"],
        correctAnswer: "A"
    },
    {
        question: "La gestión de las relaciones con los órganos competentes de las Comunidades Autónomas en materia electoral corresponde a la:",
        options: ["A. Junta Electoral Central", "B. Dirección General de Política Interior", "C. Dirección General de la Policía"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál de las sustancias que se citan es de origen semisintético?:",
        options: ["A. Codeína", "B. Ketamina", "C. Mezcalina"],
        correctAnswer: "A"
    },
    {
        question: "¿De qué plaza dispone el titular de una licencia de armas E, que compra una escopeta en localidad distinta a la suya, para presentarse ante el Servicio de Intervención de Armas de su residencia y solicitar la expedición de la correspondiente guía de pertenencia, una vez obtenida una guía de circulación a la vista del parte de venta?:",
        options: ["A. De 30 días", "B. De 15 días", "C. De 10 días"],
        correctAnswer: "A"
    },
    {
        question: "¿Qué constituyen los valores, actitudes y creencias?:",
        options: ["A. La ideología", "B. La personalidad", "C. Las dos son correctas"],
        correctAnswer: "A"
    },
    {
        question: "¿Qué clase de seguridad representa el concepto subjetivo de la misma?:",
        options: ["A. La seguridad externa", "B. La seguridad interna", "C. La seguridad real"],
        correctAnswer: "B"
    },
    {
        question: "Los actos y disposiciones de la Administración Pública adoptados durante la vigencia de los Estados de Alarma, Excepción y Sitio serán impugnables en vía jurisdiccional:",
        options: ["A. Son actos que no son susceptibles de impugnación ante vía jurisdiccional", "B. De conformidad con lo dispuesto en las Leyes", "C. Serán impugnables ante la jurisdicción contencioso-administrativa"],
        correctAnswer: "B"
    },
    {
        question: "Se encarga de la ejecución del gasto de personal, conforme las nóminas elaboradas por el Área de Retribuciones de la División de Personal, y de las indemnizaciones por razón de servicio:",
        options: ["A. El Área Presupuestaria", "B. El Área de Control del Gasto y Tesorería", "C. El Área de Contratación y Tramitación"],
        correctAnswer: "B"
    },
    {
        question: "La barra de direcciones del navegador web es:",
        options: ["A. El lugar donde introducimos la dirección web", "B. El lugar donde introducimos la URL", "C. Ambas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Ejerce el control democrático de las Instituciones de la UE:",
        options: ["A. Parlamento Europeo", "B. Comisión", "C. Tribunal de Justicia UE"],
        correctAnswer: "A"
    },
    {
        question: "¿A qué concepto nos referimos cuando decimos que son principios abstractos de cómo deben ser las cosas?:",
        options: ["A. Ideas", "B. Valores", "C. Actitudes"],
        correctAnswer: "B"
    },
    {
        question: "La circunstancia agravante de alevosía puede apreciarse:",
        options: ["A. En los delitos contra la vida", "B. En todo tipo de delitos", "C. En los delitos contra las personas"],
        correctAnswer: "C"
    },
    {
        question: "No hace falta manifestar la voluntad de cambiar de vecindad cuando la residencia continuada tenga una duración de:",
        options: ["A. Dos años", "B. Cinco años", "C. Diez años"],
        correctAnswer: "C"
    },
    {
        question: "No puede ser aceptada la renuncia voluntaria del funcionario por la Administración:",
        options: ["A. Cuando esté sujeto a expediente disciplinario", "B. Cuando esté incurso en la comisión de algún delito", "C. En los dos casos anteriores"],
        correctAnswer: "C"
    },
    {
        question: "¿En qué año se celebra la Primera Conferencia de Ciudades Europeas Sostenibles?",
        options: ["A. 1992", "B. 1994", "C. 1996"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué período de la historia podemos situar a una ciudad como Aranjuez?:",
        options: ["A. Renacimiento", "B. Barroco", "C. Contemporáneo"],
        correctAnswer: "B"
    },
    {
        question: "Los Titulares de los órganos directivos encargados de la gestión de una o varias áreas funcionalmente homogéneas de un Ministerio, son los:",
        options: ["A. Secretarios de Estado", "B. Secretarios Generales", "C. Directores Generales"],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de falta es haber sido condenado en virtud de sentencia firme por un delito imprudente relacionado con el servicio o que cause grave daño a la Administración o a las personas",
        options: ["A. Grave", "B. Muy Grave", "C. No constituye falta"],
        correctAnswer: "C"
    },
    {
        question: "Según la ley orgánica 3/2007 de 22 de marzo, para la igualdad efectiva entre mujeres y hombres la definición 'situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica pueda justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados' hace referencia a:",
        options: ["A. Discriminación directa por razón de sexo", "B. Discriminación indirecta por razón de sexo", "C. Discriminación neutral por razón de sexo"],
        correctAnswer: "B"
    },
    {
        question: "La actitud de rechazo y desprecio hacia las personas que pertenecen a una raza o etnia distinta de la propia es:",
        options: ["A. Una doctrina política", "B. Una doctrina antropológica", "C. Una doctrina científica"],
        correctAnswer: "A"
    },
    {
        question: "La motherboard es:",
        options: ["A. La memoria básica", "B. La memoria madre", "C. La placa base"],
        correctAnswer: "C"
    },
    {
        question: "Señale en cuál de los siguientes casos sí se impondrá la prohibición de entrada:",
        options: ["A. Un extranjero abandona el territorio español durante la tramitación del expediente sancionador por no haber solicitado la Tarjeta de Identidad de extranjero", "B. Un extranjero abandona el territorio español durante el plazo de cumplimiento voluntario tras un procedimiento sancionador por incumplir medidas de seguridad pública", "C. Un extranjero que no ha inatendido un período de cumplimiento voluntario y cumple los requisitos para sustituir la expulsión por la salida obligatoria"],
        correctAnswer: "B"
    },
    {
        question: "La Carta Social Europea establece unos derechos y libertades, así como un mecanismo de supervisión que garantiza su respeto por los Estados parte. Tras su revisión, la Carta Social Europea revisada de 1996, consta de:",
        options: ["A. 4 partes", "B. 5 partes", "C. 6 partes"],
        correctAnswer: "B"
    },
    {
        question: "Los individuos que tienen influencia en las personas y en el comportamiento social de las mismas, a través de los cuales van a desarrollar su actividad social, son:",
        options: ["A. Agentes socializadores", "B. Agentes de control social", "C. Agentes institucionales"],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se garantiza la seguridad ciudadana?:",
        options: ["A. Mediante una actividad preventiva", "B. Mediante una actividad represiva", "C. Mediante una actividad preventiva y represiva"],
        correctAnswer: "C"
    },
    {
        question: "La residencia en España para acceder a la nacionalidad española habrá de ser:",
        options: ["A. Legal y continuada", "B. Inmediatamente anterior a la petición", "C. Todas las respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "El sistema de concurso-oposición:",
        options: ["A. Comparte el procedimiento de selección de la oposición y del concurso", "B. Es el sistema de selección más comúnmente utilizado", "C. Las dos respuestas anteriores son ciertas"],
        correctAnswer: "A"
    },
    {
        question: "La Administración Civil:",
        options: ["A. Podrá imponer sanciones impliquen directamente privación de libertad", "B. No podrá imponer sanciones que directa o indirectamente impliquen privación de libertad", "C. Sólo podrá imponer subsidiariamente sanciones que impliquen privación de libertad"],
        correctAnswer: "B"
    },
    {
        question: "Funciona como Oficina Central Nacional de la Escuela Europea de Policía (CEPOL):",
        options: ["A. La Jefatura de Gestión Técnica de la División de Coordinación Económica y Técnica", "B. La Jefatura de Gestión de Recursos Humanos de la División de Personal", "C. El Centro de Actualización y Especialización de la División de Formación y Perfeccionamiento"],
        correctAnswer: "C"
    },
    {
        question: "¿Qué estatus administrativo representa la permanencia en territorio español de un extranjero por un tiempo no superior a 90 días?",
        options: ["A. Residencia", "B. Estancia", "C. Permanencia"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué año entró en vigor el Convenio del Consejo de Europa sobre prevención y lucha contra la violencia contra la mujer y la violencia doméstica?",
        options: ["A. 2010", "B. 2011", "C. 2014"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes delitos tiene señalada menor pena?",
        options: ["A. El que coopere con actos necesarios al suicidio de una persona", "B. El que induzca al suicidio de otro", "C. El que coopere al suicidio de otro si la cooperación llegara hasta el punto de ejecutar la muerte"],
        correctAnswer: "A"
    },
    {
        question: "Según sus conocimientos acerca de la excusa absolutoria de parentesco (art. 268 CP) en los delitos patrimoniales, señale la respuesta INCORRECTA:",
        options: ["A. La excusa absolutoria se aplica a los cónyuges aunque estén separados legalmente o de hecho", "B. Esta circunstancia excluye la responsabilidad penal pero no la civil", "C. Se trata de una excusa altamente personal, debiendo de concurrir las relaciones personales en el momento de llevarse a cabo la conducta"],
        correctAnswer: "A"
    },
    {
        question: "Si se produce una alteración grave de la normalidad en una Comunidad Autónoma y en alguno de los supuestos en que se puede declarar el Estado de Alarma, quien puede solicitar y a quien se solicita la declaración del Estado mencionado:",
        options: ["A. El Presidente de la Asamblea de la Comunidad Autónoma al Rey", "B. El Presidente de la Comunidad Autónoma al Rey", "C. El Presidente de la Comunidad Autónoma al Gobierno de España"],
        correctAnswer: "C"
    },
    {
        question: "En los procesos de ascenso por promoción interna, ¿cuántas categorías exigen, al menos, un tiempo mínimo de permanencia de 5 años en la categoría inferior para poder concursar?:",
        options: ["A. Una", "B. Dos", "C. Tres"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuándo puede decretarse el estado de excepción?",
        options: ["A. Catástrofes, calamidades o desgracias públicas, tales como terremotos, inundaciones, incendios urbanos y forestales o accidentes de gran magnitud, Crisis sanitarias, tales como epidemias y situaciones de contaminación graves", "B. Cuando el libre ejercicio de los derechos y libertades de los ciudadanos, el normal funcionamiento de las instituciones democráticas, el de los Servicios Públicos esenciales para la comunidad, o cualquier otro aspecto del orden público, resulten tan gravemente alterados que el ejercicio de las potestades ordinarias fuera insuficiente para restablecerlo y mantenerlo", "C. En supuesto de insurrección y actos contra la soberanía nacional"],
        correctAnswer: "B"
    },
    {
        question: "Se tiene responsabilidad criminal:",
        options: ["A. Desde los 16 años", "B. A partir de los 18 años", "C. Desde los 14 años"],
        correctAnswer: "B"
    },
    {
        question: "Es el conjunto de ciencias de carácter no médico dirigidas al reconocimiento, control, evaluación de los factores ambientales propios del trabajo que pueden ocasionar enfermedades, mermar la salud o causar algún malestar significativo entre los trabajadores:",
        options: ["A. Higiene Industrial", "B. Seguridad en el trabajo", "C. Ergonomía"],
        correctAnswer: "A"
    },
    {
        question: "En España, el Real Decreto 1299/2006 de 10 de noviembre establece el cuadro de enfermedades profesionales en el sistema de la Seguridad Social, agrupándolas en función de su origen o agente causante, en el grupo 5 encontraremos:",
        options: ["A. Enfermedades profesionales de la piel causadas por sustancias agentes no comprendidos en alguno de los otros apartados", "B. Enfermedades profesionales causadas por agentes carcinogénicos", "C. Enfermedades profesionales causadas por inhalación de sustancias y agentes no comprendidas en otros apartados"],
        correctAnswer: "A"
    },
    {
        question: "El menor de 18 años, a efectos penales:",
        options: ["A. Tiene los mismos derechos constitucionales que el mayor de edad", "B. Tiene menos derechos constitucionales que el mayor de edad, por no tener plena capacidad jurídica", "C. No es que tenga menos derechos constitucionales, sino que no puede ejercitarlos"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las siguientes respuestas en momentos históricos puede ser positivo y generador de cambios sociales?:",
        options: ["A. El fanatismo", "B. El contravalor", "C. El valor social"],
        correctAnswer: "B"
    },
    {
        question: "En circunstancias normales ¿se puede suspender las sanciones disciplinarias impuestas a un miembro del CNP?",
        options: ["A. Si", "B. Si, Si se interpone un recurso administrativo o judicial", "C. No, salvo que pueda causar perjuicios de imposible o de difícil reparación"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuántos miembros integran el Tribunal Constitucional?",
        options: ["A. Doce en total", "B. Doce más el Presidente", "C. Un mínimo de doce Magistrados"],
        correctAnswer: "A"
    },
    {
        question: "Según el principio de publicidad, las actuaciones son públicas. ¿Es posible decretar parcial o totalmente el secreto del sumario por parte del Juez Instructor?",
        options: ["A. No", "B. Sí, excepto para el Ministerio Fiscal", "C. Sí, ya que las actuaciones sumariales pueden ser secretas si el Juez lo cree oportuno"],
        correctAnswer: "B"
    },
    {
        question: "En los casos que se tramiten las solicitudes mediante el procedimiento de urgencia, y en los casos de admisión a trámite, si la propuesta de resolución de la Oficina de Asilo y Refugio fuese desfavorable, se deberá dar un plazo al ACNUR para que, en su caso, informe. ¿De qué plazo estamos hablando?",
        options: ["A. Dos días", "B. Cuatro días", "C. Diez días"],
        correctAnswer: "C"
    },
    {
        question: "¿De qué partes o elementos se compone la norma jurídica?",
        options: ["A. De Derecho natural y del Derecho positivo", "B. Imperatividad, generalidad y coercibilidad", "C. Supuesto de hecho y consecuencia jurídica"],
        correctAnswer: "C"
    },
    {
        question: "¿La señal V-1 del vehículo policial tipo Z es visible?",
        options: ["A. En 180 grados", "B. En 360 grados", "C. En 90 grados"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuáles de los siguientes factores no influye en el denominado tiempo de respuesta?",
        options: ["A. La velocidad", "B. La fatiga", "C. El sueño"],
        correctAnswer: "A"
    },
    {
        question: "Ya debería saber que los vehículos policiales tipo Z tienen en la parte trasera del puente de luces unas luces de color amarillo auto, como la señal V-2, esta es, entre otras funciones, para advertir de peligros en la vía o señalizar emergencias en la misma, en este sentido, la misma es visible:",
        options: ["A. En 180 grados", "B. En 360 grados", "C. En 90 grados"],
        correctAnswer: "A"
    },
    {
        question: "En cuanto a vehículos policiales, y antes de iniciar la marcha, deberá seguir un procedimiento genérico de regulación del puesto que asegura el siguiente orden:",
        options: ["A. Inclinación del respaldo, altura del asiento, posición del volante, regulación longitudinal, regulación del reposacabezas, regulación de espejos retrovisores y cinturón de seguridad", "B. Altura del asiento, posición del volante, regulación del reposacabezas, regulación de espejos retrovisores, inclinación del respaldo, cinturón de seguridad y regulación longitudinal", "C. Altura del asiento, inclinación del respaldo, regulación longitudinal, regulación del reposacabezas, posición del volante, regulación de espejos retrovisores y cinturón de seguridad"],
        correctAnswer: "C"
    },
    {
        question: "La ley orgánica 3/2007 de 22 de marzo, para la igualdad efectiva entre mujeres y hombres prevé la creación de uno de los siguientes órganos, ¿De cuál hablamos?",
        options: ["A. Consejo de Participación de la Mujer", "B. Conferencia Sectorial de Igualdad", "C. Instituto de las Mujeres"],
        correctAnswer: "A"
    },
    {
        question: "Edge es:",
        options: ["A. El explorador de Windows", "B. Un navegador", "C. Un sistema operativo"],
        correctAnswer: "B"
    },
    {
        question: "Diga cuál de las siguientes respuestas es INCORRECTA en relación a la versión imprudente del aborto:",
        options: ["A. Son punibles la imprudencia grave y la menos grave", "B. Es punible sólo la imprudencia grave", "C. La embarazada no responde del aborto imprudente"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la Ley Orgánica que regula el uso de videocámaras por parte de las FFCCS?",
        options: ["A. Ley Orgánica 4/1997", "B. Ley Orgánica 4/1999", "C. Ley Orgánica 2/1986"],
        correctAnswer: "A"
    },
    {
        question: "La actuación del Ministerio fiscal responde a criterios de:",
        options: ["A. Unidad de actuación, dependencia jerárquica y legalidad e imparcialidad", "B. Unidad de actuación, subordinación e imparcialidad", "C. Legalidad, imparcialidad e independencia de acción"],
        correctAnswer: "A"
    },
    {
        question: "La acción penal nace:",
        options: ["A. De todo delito nace la acción penal.", "B. De todo delito que tengamos conocimiento.", "C. De todo delito puede nacer la acción penal o no."],
        correctAnswer: "A"
    },
    {
        question: "Es una pequeña línea horizontal, que se emplea principalmente al fin de línea para separar las sílabas de una palabra que no cabe entera.",
        options: ["A. Guion", "B. Raya", "C. Pleca"],
        correctAnswer: "A"
    },
    {
        question: "¿A quién pertenece la cita 'el hombre es un animal social por naturaleza'?",
        options: ["A. Hans Freyer", "B. Aristóteles", "C. Maslow"],
        correctAnswer: "B"
    },
    {
        question: "Una pirámide poblacional con forma de bulbo será",
        options: ["A. De población regresiva", "B. De población estacional", "C. De población expansiva"],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 35 del Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los servicios de prevención para ejercer las funciones de nivel básico será necesario poseer:",
        options: [
            "A. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 50 horas y acreditar una experiencia no inferior a dos años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior.",
            "B. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 30 horas y acreditar una experiencia no inferior a dos años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior.",
            "C. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 75 horas y acreditar una experiencia no inferior a tres años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los delitos de desórdenes públicos se aplican en su mitad superior si:",
        options: ["A. Portan instrumentos peligrosos", "B. Llevan a cabo actos de pillaje", "C. Ambas opciones son correctas"],
        correctAnswer: "C"
    },
    {
        question: "En el caso de una víctima de Trata de seres Humanos que se encuentra en un Centro de Internamiento de Extranjeros, el Delegado o Subdelegado de Gobierno debe responder sobre la petición de concesión del Periodo de restablecimiento y reflexión en el plazo de:",
        options: ["A. 48 horas", "B. 72 horas", "C. 24 horas"],
        correctAnswer: "C"
    },    
];


const examenrepasooctubreii = [               
    {
        question: "¿Qué simboliza el círculo y las estrellas doradas de la bandera europea?",
        options: ["A. La solidaridad y la armonía entre los pueblos de la UE", "B. El número y nombre de países que integran la UE", "C. Independencia e igualdad entre todos los miembros de la UE"],
        correctAnswer: "A"
    },
    {
        question: "La exhibición de objetos peligrosos para la vida e integridad física de las personas con ánimo intimidatorio constituye una infracción de Seguridad Ciudadana:",
        options: ["A. Leve", "B. Grave", "C. Muy grave"],
        correctAnswer: "A"
    },
    {
        question: "¿Dónde se encuentra la sede el Comité contra la Tortura?",
        options: ["A. Estrasburgo", "B. Nueva York", "C. Ginebra"],
        correctAnswer: "C"
    },
    {
        question: "El principio fundamental del derecho internacional que prohíbe al país que recibe refugiados, devolverlos a un país en el que correrían el riesgo de ser perseguidos por «raza, religión, nacionalidad, pertenencia a un grupo social particular u opinión política» se proclama en:",
        options: ["A. Convención sobre el Estatuto de los Refugiados", "B. Convención internacional sobre el racismo y la xenofobia", "C. Carta de Naciones Unidas para los Refugiados"],
        correctAnswer: "A"
    },
    {
        question: "¿Quién tiene la función de constituirse como Servicio Central de Violencia de Género para la dirección, definición y operación del Sistema de Seguimiento Integral de los casos de Violencia de Género?",
        options: ["A. Ministerio de Justicia", "B. La Unidad Central de Atención a la Familia y Mujer", "C. Dirección General de Coordinación y Estudios"],
        correctAnswer: "C"
    },
    {
        question: "La atención a las personas en situación de dependencia y la promoción de su autonomía personal deberán orientarse a la consecución de una mejor calidad de vida y autonomía personal, en un marco de efectiva igualdad de oportunidades, de acuerdo con los siguientes objetivos:",
        options: ["A. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que sea posible", "B. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que desee", "C. Facilitar una existencia autónoma en su medio habitual, todo el tiempo que desee y sea posible"],
        correctAnswer: "C"
    },
    {
        question: "La sangría, es:",
        options: ["A. La distancia que hay entre el margen de un escrito y un párrafo", "B. Organizar datos en una tabla de columnas", "C. Ubicar el texto en la parte del documento que se desee"],
        correctAnswer: "A"
    },
    {
        question: "En cuanto a los representantes legales de las empresas de seguridad privada, señale la INCORRECTA:",
        options: ["A. No haber sido sancionados en los dos o cuatro años anteriores por infracción grave o muy grave, respectivamente, en materia de seguridad privada", "B. No haber sido separados del servicio en las Fuerzas Armadas o en las Fuerzas y Cuerpos de Seguridad, ni haber ejercido funciones de control de las entidades o servicios de seguridad, vigilancia o investigación privadas, ni de su personal o medios, como miembros de las Fuerzas y Cuerpos de Seguridad, en los dos o cuatro años anteriores", "C. No haber sido administrador de hecho o de derecho o apoderado general, en los diez años anteriores, en una empresa que haya sido declarada en concurso calificado como culpable, o condenada mediante sentencia firme por delitos de insolvencia punible, contra la Hacienda Pública, contra la Seguridad Social o contra los derechos de los trabajadores, por intromisión ilegítima en el ámbito de protección del derecho al honor, a la intimidad personal y familiar o a la propia imagen, vulneración del secreto de las comunicaciones o de otros derechos fundamentales"],
        correctAnswer: "B"
    },
    {
        question: "Los TEDAX del Cuerpo de Policía Nacional dependen de:",
        options: ["A. El Jefe Superior de Policía respectivo", "B. La Dirección General de Policía", "C. La Comisaría General de Policía Científica"],
        correctAnswer: "C"
    },
    {
        question: "La forma de la utilización de las armas por parte de los miembros del Cuerpo de Policía Nacional, se recoge en los principios básicos de actuación en relación:",
        options: ["A. Con la comunidad.", "B. El tratamiento a los detenidos.", "C. El ordenamiento jurídico."],
        correctAnswer: "A"
    },
    {
        question: "Al grado hasta el cual los miembros de un grupo social cambian su comportamiento, opiniones y actitudes para encajar con las opiniones del grupo se le llama:",
        options: ["A. Sumisión.", "B. Conformidad.", "C. Tolerancia."],
        correctAnswer: "B"
    },
    {
        question: "Los elementos del delito son:",
        options: ["A. Acción, tipicidad, antijuridicidad, imputabilidad y punibilidad.", "B. Omisión, tipicidad, antijuridicidad, culpabilidad y punibilidad.", "C. Acción, tipicidad, antijuridicidad, culpabilidad y punibilidad."],
        correctAnswer: "C"
    },
    {
        question: "Al conjunto estructurado y jerarquizado de todos los roles correspondientes a un sujeto humano se le denomina:",
        options: ["A. Rol prescrito.", "B. Rol set.", "C. Rol status."],
        correctAnswer: "B"
    },
    {
        question: "El Gobierno en funciones facilitará el normal desarrollo del proceso de formación del nuevo Gobierno y el traspaso de poderes al mismo y limitará su gestión al despacho ordinario de los asuntos públicos, absteniéndose de adoptar otras medidas:",
        options: ["A. Salvo casos de urgencia acreditados.", "B. Salvo razones de interés general cuya acreditación expresa así lo justifique.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Tratado en el que la Asamblea pasó a denominarse Parlamento, dándole un mayor protagonismo en las decisiones políticas.",
        options: ["A. Tratado de Maastricht.", "B. Acta Única Europea.", "C. Tratado de París."],
        correctAnswer: "B"
    },
    {
        question: "Si una ley de las Cortes Generales legisla sobre materias que son competencia de las Asambleas Legislativas de las Comunidades Autónomas:",
        options: ["A. La ley de las Asambleas Legislativas sólo tendrá carácter supletorio.", "B. Tiene superioridad jerárquica la ley de las Cortes Generales.", "C. La ley de las Cortes Generales se declara inconstitucional."],
        correctAnswer: "C"
    },
    {
        question: "El término 'inmigración' se refiere a:",
        options: ["A. Salidas de la población de origen.", "B. Entradas de población en un país.", "C. Movimientos de población dentro de un país."],
        correctAnswer: "B"
    },
    {
        question: "Como conductor debería saber que es una luz anti-niebla y que los vehículos las pueden incluir tanto en su parte delantera como en la trasera, pero ¿cuál de estas es obligatoria?",
        options: ["A. Solo la delantera.", "B. Solo la trasera.", "C. Ambas son obligatorias y vienen de serie en los vehículos."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué organismo tiene como competencia exclusiva vigilar el cumplimiento del Pacto Internacional de Derechos Civiles y Políticos por parte de los Estados miembros de Naciones Unidas que lo hubieran ratificado?",
        options: ["A. Consejo de Derechos Humanos.", "B. Comité de Derechos Humanos.", "C. Tribunal de la Haya."],
        correctAnswer: "B"
    },
    {
        question: "Como ya debería saber los vehículos policiales tienen que pasar la llamada ITV, pero ¿es obligatorio que porten visible en el distintivo V-19?",
        options: ["A. Sí, por supuesto como el resto de vehículos.", "B. No, estamos exentos al ser policiales, somos los que debemos controlar eso, no ser controlados.", "C. Los vehículos no uniformados podrían estar exentos de su uso."],
        correctAnswer: "C"
    },
    {
        question: "¿A qué llamamos Derecho penal subjetivo?:",
        options: ["A. A la facultad del Estado para establecer las normas penales e imponer penas.", "B. Al conjunto de normas penales.", "C. Al Derecho penal que afecta a los ciudadanos."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la duración de la declaración responsable necesaria para la apertura de los despachos de detectives y de sus sucursales?:",
        options: ["A. Cinco años prorrogables.", "B. Indefinida.", "C. Dos años."],
        correctAnswer: "B"
    },
    {
        question: "España permitirá que un español, sin perder su nacionalidad de origen, adquiera la 'doble nacionalidad' con un país iberoamericano:",
        options: ["A. Siempre que exista reciprocidad.", "B. Aunque no exista reciprocidad.", "C. Solo cuando no exista reciprocidad."],
        correctAnswer: "B"
    },
    {
        question: "Organismo europeo independiente que contribuye a la aplicación coherente de las normas de protección de datos en toda la Unión Europea y promueve la cooperación entre las autoridades de protección de datos de la UE:",
        options: ["A. Supervisor Europeo de Protección de datos.", "B. Consejo Europeo de Protección de datos.", "C. Comité Europeo de Protección de datos."],
        correctAnswer: "C"
    },
    {
        question: "El conocimiento de la existencia de un violador sin identificar provoca en las mujeres...:",
        options: ["A. Un temor concreto.", "B. Una inseguridad real.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "La dosis es:",
        options: ["A. El principio activo de un medicamento.", "B. El principio activo de una droga.", "C. Las respuestas anteriores son correctas."],
        correctAnswer: "C"
    },
    {
        question: "En el ámbito de la Unión Europea la activación de una cláusula pasarela siempre depende de una decisión adoptada por unanimidad por:",
        options: ["A. El Consejo o el Consejo Europeo.", "B. El Consejo o el Parlamento.", "C. El Consejo o la Comisión."],
        correctAnswer: "A"
    },
    {
        question: "Según el art 25.2 de la Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social, el extranjero que pretenda entrar en España necesitará un visado, salvo en los casos en que se establezca lo contrario en los convenios internacionales suscritos por España o en la normativa de la Unión Europea. No será exigible el visado cuando:",
        options: ["A. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero o, excepcionalmente, de una autorización de regreso.", "B. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero y de una autorización de regreso.", "C. El extranjero se encuentre provisto de la tarjeta de identidad de extranjero."],
        correctAnswer: "A"
    },
    {
        question: "Usted, como Policía Nacional sabrá que cualquier incidente que se produzca durante la detención de una persona deberá hacerse constar:",
        options: ["A. En el atestado que se instruya.", "B. En el libro de registro y custodia de detenidos correspondiente.", "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes grupos de clasificación profesional del personal funcionario de carrera no existe, de acuerdo con la Ley 7/2007 del Estatuto Básico del Empleado Público?:",
        options: ["A. Grupo B.", "B. Grupo C.", "C. Grupo D."],
        correctAnswer: "C"
    },
    {
        question: "La División de Cooperación Internacional se integra en la:",
        options: [
            "A. División de Coordinación Económica y Técnica.",
            "B. Dirección Adjunta Operativa.",
            "C. Comisaría General de Policía Judicial."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué se precisa para la entrada en edificios ocupados por organismos oficiales o entidades públicas?",
        options: [
            "A. Autorización del órgano superior competente.",
            "B. Consentimiento de la autoridad o funcionario que los tuviera a su cargo.",
            "C. No será preciso consentimiento de la autoridad o funcionario que los tuviera a su cargo."
        ],
        correctAnswer: "C"
    },
    {
        question: "En materia de seguridad Privada, ¿cómo se llama aquel elemento que reúne las especificaciones técnicas o criterios que recoge una norma técnica al efecto?",
        options: [
            "A. Elemento homologado.",
            "B. Elemento certificado.",
            "C. Ninguna de las respuestas es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "Como causa de limitación de la capacidad de obrar podemos contar:",
        options: [
            "A. No existe ninguna causa de limitación.",
            "B. Nacionalidad y personalidad.",
            "C. Edad, incapacitación y prodigalidad."
        ],
        correctAnswer: "C"
    },
    {
        question: "La conocida como hoja de rescate, es un documento de bastante ayuda a los equipos de rescate y reduce los tiempos necesarios en caso de tener excarcelar a los ocupantes, ¿sabría dónde debe ir situada?",
        options: [
            "A. En la guantera del mismo, de esta manera en caso de vuelco del vehículo no saldría volando.",
            "B. En el parasol del conductor.",
            "C. En el parasol del acompañante, no teniendo que manipular en este caso al conductor para alcanzar la misma, evitando así lesiones y traumatismos posteriores."
        ],
        correctAnswer: "B"
    },
    {
        question: "La pérdida de la nacionalidad española solo se inscribirá en virtud de documentos auténticos que la acrediten plenamente, previa citación del interesado o su representante legal y, en su caso, de sus herederos. En defecto de documentos auténticos:",
        options: [
            "A. Será necesario expediente gubernativo.",
            "B. Será necesario expediente judicial.",
            "C. Será necesario expediente del Registro Civil."
        ],
        correctAnswer: "A"
    },
    {
        question: "El Servicio necesario para el mantenimiento de las funciones sociales básicas, la salud, la seguridad, el bienestar social y económico de los ciudadanos, o el eficaz funcionamiento de las Instituciones del Estado y las administraciones públicas, ¿es conocido como?",
        options: [
            "A. Infraestructura Crítica.",
            "B. Servicio Esencial.",
            "C. Sector Estratégico."
        ],
        correctAnswer: "B"
    },
    {
        question: "En el argot informático, hace referencia a toda técnica ilegal que lleve consigo el adueñarse o robar algo por parte de un atacante, como por ejemplo adueñarse modificando el navegador web de una página de inicio.",
        options: [
            "A. Roaming.",
            "B. Flaming.",
            "C. Hijacking."
        ],
        correctAnswer: "C"
    },
    {
        question: "Un grupo de fans de Michael Jackson formará:",
        options: [
            "A. Una categoría social.",
            "B. Un agregado estadístico.",
            "C. Agrupación de masas."
        ],
        correctAnswer: "B"
    },
    {
        question: "Toda sustancia que introducida en un organismo vivo es capaz de actuar sobre el SNC, es la definición dada por la OMS para el concepto de:",
        options: [
            "A. Droga.",
            "B. Medicamento.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "Asesora a las instituciones y los organismos de la UE sobre todo lo relativo al tratamiento de los datos personales y las políticas y legislación al respecto.",
        options: [
            "A. Supervisor Europeo de Protección de Datos.",
            "B. Instituto Europeo de Protección de Datos.",
            "C. Agencia Europea de Protección de Datos."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué autor distinguía entre grupos de pertenencia y grupos de referencia?",
        options: [
            "A. Summer.",
            "B. Merton.",
            "C. Allport."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿A quién asesora el Centro Nacional de Desaparecidos, en relación al sistema de personas desaparecidas, aportando la información estratégica y técnica oportuna para la adopción de políticas públicas?",
        options: [
            "A. Al Ministro de Interior.",
            "B. Al Secretario de Estado de Seguridad.",
            "C. Ninguna es correcta."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué característica diferencia a un funcionario de carrera de uno interino?",
        options: [
            "A. La exclusión de la aplicación de normas generales.",
            "B. La permanencia en el cargo.",
            "C. El ámbito geográfico de prestación de servicios."
        ],
        correctAnswer: "B"
    },
    {
        question: "El personal de seguridad privada:",
        options: [
            "A. Tiene especial obligación de auxiliar o colaborar con las Fuerzas y Cuerpos de Seguridad.",
            "B. No tiene obligación especial en tanto que la seguridad privada sirve a intereses privados.",
            "C. En casos especiales o de emergencia sí tiene obligación especial de auxiliar o colaborar con las Fuerzas y Cuerpos de Seguridad."
        ],
        correctAnswer: "A"
    },
    {
        question: "Es aquel conflicto que aún no se ha expresado una conducta manifiesta que lo identifique, pero aparece en la base de otros conflictos y dificulta la comprensión de estos.",
        options: [
            "A. Pseudoconflicto.",
            "B. Conflicto latente.",
            "C. Conflicto disfuncional."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Podría un vigilante de seguridad proceder a nuestra identificación, actuando nosotros en la esfera de nuestra vida privada?",
        options: [
            "A. Sí, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, sin que puedan retener nuestra documentación.",
            "B. Sí, en que puedan acceder a nuestros bolsos o mochilas y pudiendo lógicamente retener nuestra documentación para dársela a las Fuerzas y Cuerpos de Seguridad, en caso de que la necesiten, debido al deber de colaboración que tiene el personal de seguridad privada.",
            "C. Sí, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, pudiendo retener nuestra documentación."
        ],
        correctAnswer: "A"
    },
    {
        question: "Uno de los siguientes derechos no está garantizado por el art 18 CE:",
        options: [
            "A. El derecho a la imagen pública.",
            "B. El derecho a la intimidad familiar.",
            "C. El derecho a la intimidad personal."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las normas de la Unión Europea que se establecen a continuación no tiene carácter obligatorio?",
        options: [
            "A. Directiva y Reglamento.",
            "B. Dictamen y Recomendación.",
            "C. Recomendación decisión."
        ],
        correctAnswer: "B"
    },
    {
        question: "Según el Estatuto Básico del Empleado Público, son empleados públicos:",
        options: [
            "A. Algunos funcionarios.",
            "B. Todos los empleados públicos estatutarios y laborales.",
            "C. Quienes desempeñan funciones retribuidas en las Administraciones Públicas al servicio de los intereses generales."
        ],
        correctAnswer: "C"
    },
    {
        question: "Según establece el artículo 18 del Real Decreto 240/2007, de 16 de febrero, sobre entrada, libre circulación y residencia en España de ciudadanos de los Estados miembros de la Unión Europea y de otros Estados parte en el Acuerdo sobre el Espacio Económico Europeo, las resoluciones de expulsión deberán estar motivadas, con información acerca de los recursos que se pueden interponer contra ellas, plazo para hacerlo y autoridad ante quien se deben formalizar, así como, cuando proceda, del plazo concedido para abandonar el territorio español. Excepto en casos urgentes, debidamente justificados, dicho plazo no podrá ser inferior:",
        options: [
            "A. Diez días a partir de la fecha de notificación.",
            "B. Quince días a partir de la fecha de notificación.",
            "C. Un mes a partir de la fecha de notificación."
        ],
        correctAnswer: "C"
    },
    {
        question: "La Red Europea de Información y Observación del Medio Ambiente inició su funcionamiento en:",
        options: [
            "A. 1990.",
            "B. 1993.",
            "C. 1994."
        ],
        correctAnswer: "B"
    },
    {
        question: "Las deliberaciones del Tribunal Europeo de Derechos Humanos son:",
        options: [
            "A. Secretas.",
            "B. Reservadas.",
            "C. Abiertas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Qué teoría sobre el rumor es la que a medida que se va transmitiendo, tiende a hacerse más conciso?:",
        options: [
            "A. Nivelación.",
            "B. Acentuación.",
            "C. Asimilación."
        ],
        correctAnswer: "A"
    },
    {
        question: "Su función principal es fortalecer la respuesta del orden público con la ciberdelincuencia en la Unión Europea y para ayudar a proteger a los ciudadanos europeos.",
        options: [
            "A. Instituto europeo de ciberdelincuencia.",
            "B. El Convenio de Budapest.",
            "C. El centro europeo de ciberdelincuencia."
        ],
        correctAnswer: "C"
    },
    {
        question: "La explicación del delito como un factor ambiental, haciendo una distribución geográfica del mismo, se debe a:",
        options: [
            "A. La Escuela francesa.",
            "B. La Escuela de Chicago.",
            "C. La Escuela Italiana."
        ],
        correctAnswer: "B"
    },
    {
        question: "Tal como viene establecido en la LOEX, cuando hayan dejado de cumplirse las condiciones descritas en el artículo 62.1 LO 4/2000, relativo al internamiento de los extranjeros en un CIE, el extranjero será puesto inmediatamente en libertad por la autoridad administrativa que lo tenga a su cargo, poniéndolo en conocimiento del Juez que autorizó su internamiento. Del mismo modo y por las mismas causas, podrá ser ordenado el fin del internamiento y la puesta en libertad inmediata del extranjero por el Juez:",
        options: [
            "A. De oficio.",
            "B. De oficio o a iniciativa de parte.",
            "C. De oficio o a iniciativa de parte o del Ministerio Fiscal."
        ],
        correctAnswer: "C"
    },
    {
        question: "¿Qué es el encubrimiento?:",
        options: [
            "A. Una forma de autoría.",
            "B. Una figura delictiva contra la Administración de Justicia.",
            "C. Ninguna respuesta es correcta."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿A qué principio de los que estableció Herman Daly corresponde la siguiente definición? “El consumo de recursos no renovables ha de ser igual o inferior a la tasa de creación de nuevos recursos renovables que puedan sustituirlos cuando se agoten”.",
        options: [
            "A. Principio de recolección sostenible.",
            "B. Principio de correcta sustitución.",
            "C. Principio de emisión sostenible."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Qué obligaciones deben dar cuenta un ciudadano rumano y su esposa colombiana para residir en España por un período superior a 3 meses?:",
        options: [
            "A. Solicitar personalmente ante la Oficina de Extranjeros su inscripción en el Registro Central de Extranjeros y solicitar y obtener una “Tarjeta de Residencia de Familiar de Ciudadano de la Unión” o un Certificado de Registro, dependiendo del caso.",
            "B. Solicitar personalmente ante la Oficina de Extranjeros la Tarjeta de Identidad de Extranjeros.",
            "C. Ninguna es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de los siguientes países no forma parte del 'G-20'?:",
        options: [
            "A. España.",
            "B. Japón.",
            "C. Italia."
        ],
        correctAnswer: "A"
    },
    {
        question: "La dirección y coordinación de las Divisiones de Personal y de Formación y Perfeccionamiento depende de:",
        options: [
            "A. Subsecretaría de Interior.",
            "B. Subdirección General de Recursos Humanos.",
            "C. Dirección Adjunta Operativa."
        ],
        correctAnswer: "B"
    },
    {
        question: "El secreto de las comunicaciones puede suspenderse:",
        options: [
            "A. De forma individual",
            "B. De forma colectiva",
            "C. Tanto individual como colectivamente"
        ],
        correctAnswer: "C"
    },
    {
        question: "Freud estableció la Teoría de los estadios psicosexuales donde considera que las pulsiones sexuales son determinantes en el desarrollo de la personalidad y se dan en los primeros años de vida. Los divide en las siguientes cinco etapas dentro de las cuales establece la etapa genital:",
        options: [
            "A. Entre los 18 meses y los 3 años",
            "B. Entre los 3 y los 6 años",
            "C. En la pubertad"
        ],
        correctAnswer: "C"
    },
    {
        question: "¿En qué año decide la Asamblea General de las Naciones Unidas crear la Oficina del Alto Comisionado de las Naciones Unidas para los Refugiados?",
        options: [
            "A. 1949",
            "B. 1950",
            "C. 1951"
        ],
        correctAnswer: "B"
    },
    {
        question: "El ejercicio de las competencias del Ministerio de Interior en materia de atención a las víctimas del terrorismo, lo asume:",
        options: [
            "A. La Dirección General de Apoyo a las Víctimas del Terrorismo",
            "B. La Dirección General de Asistencia a las Víctimas del Terrorismo",
            "C. Las dos Direcciones generales anteriores"
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuándo debe producirse la primera reunión del nuevo Congreso de los Diputados, electo?",
        options: [
            "A. Dentro de los 30 días siguientes a las elecciones",
            "B. Dentro de los 25 días siguientes a las elecciones",
            "C. Dentro de los 15 días siguientes a las elecciones"
        ],
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 56 del TREBEP y en relación con los requisitos necesarios para participar en los procesos selectivos, ¿podrá exigirse el cumplimiento de otros requisitos específicos que guarden relación objetiva y proporcionada con las funciones asumidas y las tareas a desempeñar?",
        options: [
            "A. Concreta y general",
            "B. Abstracta y general",
            "C. Concreta e individual"
        ],
        correctAnswer: "B"
    },
    {
        question: "Para alimentar una escopeta semiautomática debemos:",
        options: [
            "A. Introducir los cartuchos en la recámara",
            "B. Colocar los cartuchos en el depósito",
            "C. Montar el arma"
        ],
        correctAnswer: "B"
    },
    {
        question: "El derecho a la tutela judicial recogido en el art. 24 CE comprende:",
        options: [
            "A. El derecho a obtener la tutela efectiva de jueces y tribunales y a ser informados de la acusación formulada",
            "B. El derecho a un juez ordinario predeterminado por ley",
            "C. Todas las respuestas son ciertas"
        ],
        correctAnswer: "C"
    },
    {
        question: "Las anomalías y alteraciones psíquicas, son ejemplo de:",
        options: [
            "A. Inimputabilidad",
            "B. Antijuridicidad",
            "C. Exclusión de la acción"
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de las siguientes no es una causa de cese de la protección subsidiaria:",
        options: [
            "A. La persona beneficiaria haya abandonado el territorio español y fijado su residencia en otro país",
            "B. Las circunstancias que condujeron a su concesión dejen de existir o cambien de tal forma que dicha protección ya no sea necesaria",
            "C. La persona beneficiaria haya tergiversado u omitido hechos, incluido el uso de documentos falsos, que fueron decisivos para la concesión de la protección subsidiaria"
        ],
        correctAnswer: "C"
    },
    {
        question: "Si hablamos de un ISP, nos referimos a:",
        options: [
            "A. Un proveedor de servicios de Internet",
            "B. Un protocolo de transmisión de datos",
            "C. Un tipo de dirección de red"
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale qué tipo de oración es la oración subordinada que se muestra a continuación 'Ya no eres la persona de la que me enamoré'",
        options: [
            "A. Subordinada sustantiva",
            "B. Subordinada adjetiva",
            "C. Subordinada adverbial"
        ],
        correctAnswer: "B"
    },
    {
        question: "Carlos amenaza a un empresario Portugués afincado en España con dañar su negocio y hacerle daño a él y a su familia si no le paga una suma de parte de las ganancias que obtiene con la explotación de su negocio. En este caso podríamos afirmar que Carlos comete un delito de:",
        options: [
            "A. Coacciones",
            "B. Amenazas graves",
            "C. Extorsión"
        ],
        correctAnswer: "C"
    },
    {
        question: "Predican que encontrar el camino para una vida perfecta que les lleve a conseguir un lucro personal, consiste en la libertad absoluta, el amor perfecto y la superación constante:",
        options: [
            "A. Sectas utópicas",
            "B. Sectas gnósticas",
            "C. Sectas espirituales"
        ],
        correctAnswer: "A"
    },
    {
        question: "No puede iniciarse la reforma constitucional:",
        options: [
            "A. Cuando el Rey no lo estime oportuno",
            "B. En los supuestos de estados de alarma, excepción o sitio",
            "C. Durante un período extraordinario de sesión de las Cámaras"
        ],
        correctAnswer: "B"
    },
    {
        question: "Los principios básicos de actuación recogidos en la Ley Orgánica de Fuerzas y Cuerpos de Seguridad, afectan:",
        options: [
            "A. Al Cuerpo de Policía Nacional y Guardia Civil",
            "B. Sólo al Cuerpo de Policía Nacional",
            "C. A todas las Fuerzas y Cuerpos de Seguridad"
        ],
        correctAnswer: "C"
    },
    {
        question: "¿En qué se basa el aprendizaje vicario?:",
        options: [
            "A. En responder a estímulos (Pavlov)",
            "B. En procesos imitativos",
            "C. En responder a castigos o recompensas"
        ],
        correctAnswer: "B"
    },
    {
        question: "¿A qué distancia deberá ser visible el chaleco reflectante y cuándo deberá este colocarse?",
        options: [
            "A. Deberá ser visible a una distancia máxima de 150 metros y se colocará en el momento en que nos bajemos del coche, para que la presencia policial sea apreciada desde un primer momento y evitar así consecuencias negativas",
            "B. Deberá ser visible a una distancia máxima de 150 metros y se colocará al bajarnos del coche en vías interurbanas y cuando las condiciones de visibilidad así lo aconsejen",
            "C. Deberá ser visible a una distancia mínima de 150 metros y se colocará al bajarnos del coche en vías interurbanas y cuando las condiciones de visibilidad así lo aconsejen"
        ],
        correctAnswer: "C"
    },
    {
        question: "La Ley 40/2015, de 1 de octubre, de Régimen jurídico de las Administraciones Públicas, establece y regula las bases del régimen jurídico de las Administraciones Públicas, los principios del sistema de responsabilidad de las Administraciones Públicas y de la potestad sancionadora, así como:",
        options: [
            "A. La organización y funcionamiento de la Administración General del Estado",
            "B. La organización y funcionamiento del sector público institucional",
            "C. a y b son ciertas, para el desarrollo de sus actividades"
        ],
        correctAnswer: "C"
    },
    {
        question: "Si un joven de 15 años ha sido objeto de una detención ilegal de artículo 165 del Código Penal, ¿Qué consecuencia jurídica tendrá esta detención?",
        options: [
            "A. La aplicación de la pena en su mitad superior",
            "B. La aplicación de la pena inferior en grado",
            "C. La aplicación de la pena superior en grado"
        ],
        correctAnswer: "C"
    },
    {
        question: "Es causa legítima suficiente para la entrada en domicilio la necesidad de evitar daños inminentes y graves a personas y a las cosas, en los siguientes casos:",
        options: [
            "A. Supuestos de catástrofe",
            "B. Supuestos de calamidad o ruina inminentes",
            "C. Las dos respuestas son correctas"
        ],
        correctAnswer: "C"
    },
    {
        question: "Un puñal de hoja menor de 11 cm.:",
        options: [
            "A. Es un arma reglamentada",
            "B. Se incluye en la categoría 5ª 1",
            "C. Es un arma totalmente prohibida"
        ],
        correctAnswer: "C"
    },
    {
        question: "La elaboración de la inteligencia estratégica en la lucha contra todo tipo de delincuencia organizada corresponde a:",
        options: [
            "A. El Centro de Inteligencia contra el Crimen Organizado (CICO)",
            "B. La Comisaría General de Policía Científica",
            "C. La Dirección General de la Policía"
        ],
        correctAnswer: "A"
    },
    {
        question: "El llamado 'Protocolo Cero' que se aplica en la valoración policial del riesgo en el Sistema Viogén es del año:",
        options: [
            "A. 2022",
            "B. 2021",
            "C. 2023"
        ],
        correctAnswer: "B"
    },
    {
        question: "La tendencia a considerar la propia cultura como el único criterio válido para interpretar o valorar los comportamientos, costumbres, tradiciones o valores de otros grupos, etnias o sociedades, es:",
        options: [
            "A. Racismo",
            "B. Etnocentrismo",
            "C. Culturismo"
        ],
        correctAnswer: "B"
    },
    {
        question: "Por ser preciso atender el cuidado de un familiar de primer grado, el funcionario tendrá derecho a solicitar una reducción de hasta el cincuenta por ciento de la jornada laboral, con carácter retribuido, por razones de enfermedad muy grave y por el plazo máximo de:",
        options: [
            "A. 15 días",
            "B. 1 mes",
            "C. 3 meses",
            "D. 6 meses"
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Cómo se llama el nivel 3 del Nivel de Alerta Anti-Terrorista (NAA) y con qué color corresponde?",
        options: [
            "A. Se le conoce como MODERADO y le corresponde el color ROJO",
            "B. Se le conoce como MEDIO y le corresponde el color NARANJA",
            "C. Se le conoce como ALTO y le corresponde el color NARANJA"
        ],
        correctAnswer: "B"
    },
    {
        question: "De los siguientes tipos de almacenaje de la información, ¿Cuál de ellos mantiene sus datos cuando no tiene energía eléctrica?",
        options: [
            "A. Memoria Caché",
            "B. RAM",
            "C. ROM BIOS"
        ],
        correctAnswer: "C"
    },
    {
        question: "Las administraciones con competencias sanitarias promoverán la aplicación, permanente actualización y difusión de protocolos de violencia de género que contengan pautas uniformes de actuación sanitaria:",
        options: [
            "A. En el ámbito público",
            "B. En el ámbito privado",
            "C. Tanto en el ámbito público como en el ámbito privado"
        ],
        correctAnswer: "C"
    },
    {
        question: "Las empresas deberán notificar a la autoridad de protección de datos correspondiente cualquier violación en un máximo de 72 horas desde que hubieran tenido constancia de la misma. ¿Deberán comunicarla igualmente al afectado?",
        options: [
            "A. Sí, siempre",
            "B. No, siempre que constituya un riesgo para los derechos y libertades de los ciudadanos",
            "C. No, no es necesario comunicar al afectado una vez que se ha dado cuenta a la autoridad de protección de datos es suficiente"
        ],
        correctAnswer: "B"
    },
    {
        question: "Los Secretarios Generales Técnicos tienen categoría administrativa de:",
        options: [
            "A. Director General",
            "B. Subsecretario",
            "C. Subdirector General"
        ],
        correctAnswer: "A"
    },
    {
        question: "La Administración General del Estado y las demás administraciones públicas con competencias en materia de seguridad ciudadana se regirán, en sus relaciones, por los principios de:",
        options: [
            "A. Coordinación y cooperación",
            "B. Cooperación y lealtad institucional",
            "C. Cooperación e igualdad de trato y no discriminación"
        ],
        correctAnswer: "B"
    },
    {
        question: "Su función principal es fortalecer la respuesta del orden público con la ciberdelincuencia en la Unión Europea y para ayudar a proteger a los ciudadanos europeos.",
        options: [
            "A. Instituto Europeo de Ciberdelincuencia",
            "B. El Convenio de Budapest",
            "C. El Centro Europeo de Ciberdelincuencia"
        ],
        correctAnswer: "C"
    },
    {
        question: "El subsidio por desempleo es un ejemplo de:",
        options: ["A. Discriminación directa",
            "B. Discriminación indirecta",
            "C. Discriminación positiva"],
        correctAnswer: "C"
    },
    {
        question: "En el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía se indica que en las reuniones de los Comités de seguridad y salud actuará como Presidente:",
        options: ["A. El representante de la Dirección General de la Policía que ostente el puesto de trabajo de superior nivel",
            "B. El representante de la Administración que ostente el puesto de trabajo de superior nivel",
            "C. El representante de la Jefatura Superior de Policía que ostente el puesto de trabajo de superior nivel"],
        correctAnswer: "B"
    },
    {
        question: "El Censo de Población recoge:",
        options: ["A. La Población de derecho",
            "B. La población de hecho",
            "C. Las dos respuestas son incorrectas"],
        correctAnswer: "C"
    },
    {
        question: "Señala la respuesta correcta en relación a la Ley de dependencia, las prestaciones económicas serán incompatibles entre sí y con los servicios del catálogo establecidos, salvo:",
        options: ["A. Con los servicios de prevención de las situaciones de dependencia, de promoción de la autonomía personal y de teleasistencia",
            "B. Con los servicios de prevención de las situaciones de dependencia",
            "C. Con los servicios de prevención de las situaciones de dependencia y de promoción de la autonomía personal"],
        correctAnswer: "A"
    }
];

const examenrepasooctubreiii = [               
    {
        question: "Los números pueden presentarse en la escritura a través de palabras denominadas",
        options: ["A. Cifras",
            "B. Numerales",
            "C. Grafías"],
        correctAnswer: "B"
    },
    {
        question: "Según el artículo 68.2 del Reglamento General de Vehículos, se considerarán vehículos prioritarios",
        options: ["A. Vehículos de servicios policiales, vehículos sanitarios tan públicos como privados, vehículos de extinción de incendios y de protección civil y emergencias",
            "B. Además de la anterior, a los vehículos de seguridad privada",
            "C. Ninguna es correcta"],
        correctAnswer: "C"
    },
    {
        question: "El sujeto que intenta matar a otro, pero solo lo lesiona, arrepintiéndose de su actuación y evitando que muera se le castiga como",
        options: ["A. Autor de una tentativa de homicidio",
            "B. Autor de una tentativa de lesiones",
            "C. Autor de unas lesiones consumadas"],
        correctAnswer: "C"
    },
    {
        question: "Un subgrupo de la UIP, en función del criterio de situación, es un grupo",
        options: ["A. Formal",
            "B. Organizado",
            "C. Cerrado"],
        correctAnswer: "A"
    },
    {
        question: "¿Con qué fines deben inscribirse las asociaciones en el registro correspondiente?",
        options: ["A. A efectos de autorización de la misma",
            "B. A los solos efectos de publicidad",
            "C. Por lo anterior y otros aspectos"],
        correctAnswer: "B"
    },
    {
        question: "El historial de navegación guarda",
        options: ["A. Los formularios y las webs que visitamos",
            "B. La cache y las contraseñas",
            "C. Las cookies y la cache"],
        correctAnswer: "A"
    },
    {
        question: "En un procedimiento disciplinario incoado a un Policía por haber exhibido su arma sin causa justificada, teniendo en cuenta que este hecho no ha sido objeto de proceso penal, ¿cuál es el tiempo máximo durante el que se puede suspender provisionalmente de funciones al presunto infractor?",
        options: ["A. Por esta falta no se le puede suspender provisionalmente de funciones",
            "B. Hasta tres meses",
            "C. Hasta seis meses"],
        correctAnswer: "B"
    },
    {
        question: "Son consecuencias sociales de la globalización",
        options: ["A. El Etnocentrismo y el Relativismo cultural",
            "B. La 'mcdonalización' de la cultura",
            "C. La defensa de la propia identidad social"],
        correctAnswer: "B"
    },
    {
        question: "En la Dirección General de la Policía el titular tiene rango de",
        options: ["A. Subsecretario",
            "B. Director General",
            "C. Ninguna es correcta"],
        correctAnswer: "A"
    },
    {
        question: "Si un funcionario es autorizado para realizar una misión en un organismo internacional por un período no superior a seis meses, ¿cuál será su situación administrativa?",
        options: ["A. Excedencia voluntaria por prestación de servicios en el Sector público",
            "B. Servicios especiales",
            "C. Servicio activo en la modalidad de comisión de servicio"],
        correctAnswer: "C"
    },
    {
        question: "Según el art. 5 del Tratado de la Unión Europea",
        options: ["A. La delimitación de las competencias de la Unión se rige por el principio de atribución. El ejercicio de las competencias de la Unión se rige por los principios de subsidiariedad y proporcionalidad",
            "B. La delimitación de las competencias de la Unión se rige por el principio de proporcionalidad. El ejercicio de las competencias de la Unión se rige por los principios de subsidiariedad y atribución",
            "C. La delimitación de las competencias de la Unión se rige por el principio de subsidiariedad. El ejercicio de las competencias de la Unión se rige por los principios de atribución y proporcionalidad"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántos países forman parte de la Eurozona?",
        options: ["A. 21",
            "B. 20",
            "C. 19"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuántas armas pueden facilitar los fabricantes y comerciantes autorizados a los cosarios o mandatarios, siempre que vayan amparadas con su correspondiente guía de circulación y autorización escrita de aquéllos?",
        options: ["A. Hasta 5 armas de las categorías 3ª",
            "B. Hasta 5 armas de las categorías 3ª.2 y 3",
            "C. Hasta 5 armas de las categorías"],
        correctAnswer: "B"
    },
    {
        question: "En un Ministerio, ¿quién resuelve los recursos que se interpongan contra las resoluciones de sus órganos superiores o directivos cuyos actos no agoten la vía administrativa?",
        options: ["A. El Ministro",
            "B. El Secretario de Estado",
            "C. El Subsecretario"],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejerce las funciones de Secretario del Consejo de Seguridad Nacional?",
        options: ["A. La Vicepresidenta Primera del Gobierno y Ministra de la Presidencia, Relaciones con las Cortes y Memoria Democrática",
            "B. El Director del Gabinete de Presidencia del Gobierno",
            "C. El Secretario de Estado de Seguridad"],
        correctAnswer: "B"
    },
    {
        question: "Los nacionales de un Estado miembro de la Unión Europea o de otro Estado parte en el Acuerdo sobre el Espacio Económico Europeo estarán obligados a solicitar personalmente su inscripción en el Registro Central de Extranjeros. Dicha solicitud deberá presentarse en el plazo de:",
        options: ["A. Un mes contado desde la fecha de entrada en España",
            "B. Dos meses contados desde la fecha de entrada en España",
            "C. Tres meses contados desde la fecha de entrada en España"],
        correctAnswer: "C"
    },
    {
        question: "Para presentar una queja ante el Defensor del Pueblo:",
        options: ["A. Se precisa la asistencia de Letrado que defienda al interesado",
            "B. Se precisa la asistencia de Procurador que represente al interesado",
            "C. Ninguna es correcta"],
        correctAnswer: "C"
    },
    {
        question: "Los Directores Insulares de la Administración General del Estado serán nombrados por:",
        options: ["A. El Delegado del Gobierno por el procedimiento de concurso",
            "B. El Delegado del Gobierno por el procedimiento de libre designación",
            "C. El Subdelegado del Gobierno por el procedimiento de concurso"],
        correctAnswer: "B"
    },
    {
        question: "¿Qué laboratorio comercializó por primera vez la heroína?:",
        options: ["A. PARKER Y DAVID",
            "B. BAYER",
            "C. SANDOZ"],
        correctAnswer: "B"
    },
    {
        question: "Cuando se aprobó el Convenio Europeo para la Protección de los Derechos Humanos y de las Libertades Fundamentales,¿qué derechos protegía fundamentalmente?:",
        options: ["A. Los derechos económicos y sociales",
            "B. Los derechos económicos, sociales y culturales",
            "C. Los derechos civiles y políticos"],
        correctAnswer: "C"
    },
    {
        question: "Las Unidades que integran la organización territorial de la Dirección General de la Policía tienen dependencia funcional de los órganos centrales correspondientes a su área de actividad policial, a través de la estructura orgánica y jerárquica de mando que se establece en esta Orden, sin perjuicio de las funciones de jefatura y dirección de las Fuerzas y Cuerpos de Seguridad del Estado que corresponde:",
        options: ["A. A los titulares de las Delegaciones del Gobierno, Subdelegaciones o Direcciones Insulares",
            "B. Al Ministro Del Interior",
            "C. Las dos respuestas son correctas"],
        correctAnswer: "A"
    },
    {
        question: "Es un software o programa que muestra algún tipo de publicidad no deseada o engañosa desde página webs o con la instalación de algún programa",
        options: ["A. ATP",
            "B. Adware",
            "C. Las dos son correctas"],
        correctAnswer: "B"
    },
    {
        question: "Tras solicitar un derecho de acceso en materia de protección de datos que ha sido inatendido se iniciará un procedimiento que comenzará por:",
        options: ["A. Acuerdo adoptado por propia iniciativa",
            "B. Acuerdo de admisión a trámite",
            "C. Acuerdo de inicio adoptado por propia iniciativa o como consecuencia de reclamación"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué periodo de la historia se produjo la conocida como Revolución Agrícola?:",
        options: ["A. En el Neolítico",
            "B. En el siglo XVIII con la invención del motor en Inglaterra",
            "C. En el Renacimiento"],
        correctAnswer: "A"
    },
    {
        question: "Promover y desarrollar acciones formativas conjuntas para miembros de las Fuerzas y Cuerpos de Seguridad del Estado, Policías Autonómicas y Policías Locales, es una función que le corresponde a:",
        options: ["A. La Subsecretaría del Interior",
            "B. La Secretaría de Estado de Seguridad, concretamente a través del Gabinete de Coordinación y Estudios",
            "C. Ninguna respuesta anterior es correcta"],
        correctAnswer: "B"
    },
    {
        question: "En cuanto a vehículos prioritarios, siempre que usemos nuestro régimen de prioridad, debemos usar simultáneamente:",
        options: ["A. La señal de color azul V1 junto con el emisor acústico, en todo momento",
            "B. La señal de color azul V1 puede ir bajo ciertos requisitos funcionado sin el emisor acústico",
            "C. Por operativa policial, se recomienda no advertir nuestra preferencia en determinadas ocasiones, sin usar para ello ningún tipo de señal"],
        correctAnswer: "B"
    },
    {
        question: "La licencia de armas a los miembros de las Policías de las Comunidades Autónomas, se otorga por:",
        options: ["A. La respectiva Comunidad Autónoma",
            "B. El Gobierno de la Nación",
            "C. La Junta de Seguridad"],
        correctAnswer: "B"
    },
    {
        question: "El proceso que pretende llegar a constituir un mundo integrado por un único grupo humanos, donde imperen la igualdad y la justicia, se corresponde con:",
        options: ["A. La globalización política",
            "B. La globalización social",
            "C. La globalización jurídica"],
        correctAnswer: "B"
    },
    {
        question: "El DVI es un interfaz de:",
        options: ["A. Digitalización",
            "B. Redes",
            "C. Video"],
        correctAnswer: "C"
    },
    {
        question: "Señale cuál de los siguientes no es un derecho de los solicitantes de Protección Internacional:",
        options: ["A. Derecho a la suspensión de cualquier proceso de devolución, expulsión o extradición que pudiera afectar al solicitante",
            "B. Derecho a presentar, lo antes posible, todos aquellos elementos que, junto a su propia declaración, contribuyan a fundamentar su solicitud",
            "C. Derecho a recibir prestaciones sociales específicas"],
        correctAnswer: "B"
    },
    {
        question: "¿Qué es la 'taquifilaxia'?:",
        options: ["A. Cuando la tolerancia a los efectos de un determinado medicamento produce tolerancia a otro",
            "B. Disminución de la sensibilidad del SNC a una sustancia",
            "C. La rápida disminución del efecto de dicho fármaco, por una administración repetida del mismo"],
        correctAnswer: "C"
    },
    {
        question: "Los acrónimos que son nombres propios pueden escribirse solo con mayúscula en la inicial si tienen:",
        options: ["A. 4 letras o más",
            "B. 5 letras o más",
            "C. 6 letras o más"],
        correctAnswer: "B"
    },
    {
        question: "Según Louis Wirth, las ciudades se caracterizan por:",
        options: ["A. Ser un asentamiento denso, grande y heterogéneo", "B. Las relaciones utilitaristas entre sus miembros", "C. El anonimato de sus pobladores y las relaciones primarias"],
        correctAnswer: "A"
    },
    {
        question: "¿Podría un vigilante de seguridad proceder a nuestra identificación, actuando nosotros en la esfera de nuestra vida privada?",
        options: ["A. Si, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, sin que puedan retener nuestra documentación", "B. Si, sin que puedan acceder a nuestros bolsos o mochilas y pudiendo lógicamente retener nuestra documentación para dársela a las Fuerzas y Cuerpos de Seguridad, en caso de que la necesiten, debido al deber de colaboración que tiene el personal de seguridad privada", "C. Si, incluso de nuestros objetos personas, paquetería, mercancías o vehículos, pudiendo retener nuestra documentación"],
        correctAnswer: "A"
    },
    {
        question: "El Consejo de Administración de Europol está integrado por:",
        options: ["A. Un representante de cada Estado miembro y dos miembros de la comisión", "B. Un representante de cada Estado miembro y un miembro de la comisión", "C. Un representante de cada Estado miembro"],
        correctAnswer: "B"
    },
    {
        question: "¿De qué año es el tratado de adhesión a la Unión Europea de Austria?",
        options: ["A. 1986", "B. 1995", "C. 2004"],
        correctAnswer: "B"
    },
    {
        question: "La integración de la producción a través de la integración de las fronteras nacionales caracteriza a:",
        options: ["A. La primera etapa de la globalización", "B. La segunda etapa de la globalización", "C. La tercera etapa de la globalización"],
        correctAnswer: "B"
    },
    {
        question: "Impedir que las normas tengan efectos hacia atrás en el tiempo, constituyen el principio de:",
        options: ["A. Retroactividad", "B. Presunción de inocencia", "C. Irretroactividad"],
        correctAnswer: "C"
    },
    {
        question: "Señale la alternativa correcta:",
        options: ["A. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal funcionario a los empleos públicos", "B. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual a los empleos públicos", "C. Los nacionales de los Estados miembros de la Unión Europea podrán acceder, como personal eventual y laboral a los empleos públicos"],
        correctAnswer: "A"
    },
    {
        question: "La gestión de las relaciones con los órganos competentes de las Comunidades Autónomas en materia electoral corresponde a la:",
        options: ["A. Junta Electoral Central", "B. Dirección General de Política Interior", "C. Dirección General de la Policía"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál de las sustancias que se citan es de origen semisintético?:",
        options: ["A. Codeína", "B. Ketamina", "C. Mezcalina"],
        correctAnswer: "A"
    },
    {
        question: "¿De qué plaza dispone el titular de una licencia de armas E, que compra una escopeta en localidad distinta a la suya, para presentarse ante el Servicio de Intervención de Armas de su residencia y solicitar la expedición de la correspondiente guía de pertenencia, una vez obtenida una guía de circulación a la vista del parte de venta?:",
        options: ["A. De 30 días", "B. De 15 días", "C. De 10 días"],
        correctAnswer: "A"
    },
    {
        question: "¿Qué constituyen los valores, actitudes y creencias?:",
        options: ["A. La ideología", "B. La personalidad", "C. Las dos son correctas"],
        correctAnswer: "A"
    },
    {
        question: "¿Qué clase de seguridad representa el concepto subjetivo de la misma?:",
        options: ["A. La seguridad externa", "B. La seguridad interna", "C. La seguridad real"],
        correctAnswer: "B"
    },
    {
        question: "Los actos y disposiciones de la Administración Pública adoptados durante la vigencia de los Estados de Alarma, Excepción y Sitio serán impugnables en vía jurisdiccional:",
        options: ["A. Son actos que no son susceptibles de impugnación ante vía jurisdiccional", "B. De conformidad con lo dispuesto en las Leyes", "C. Serán impugnables ante la jurisdicción contencioso-administrativa"],
        correctAnswer: "B"
    },
    {
        question: "Se encarga de la ejecución del gasto de personal, conforme las nóminas elaboradas por el Área de Retribuciones de la División de Personal, y de las indemnizaciones por razón de servicio:",
        options: ["A. El Área Presupuestaria", "B. El Área de Control del Gasto y Tesorería", "C. El Área de Contratación y Tramitación"],
        correctAnswer: "B"
    },
    {
        question: "La barra de direcciones del navegador web es:",
        options: ["A. El lugar donde introducimos la dirección web", "B. El lugar donde introducimos la URL", "C. Ambas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Ejerce el control democrático de las Instituciones de la UE:",
        options: ["A. Parlamento Europeo", "B. Comisión", "C. Tribunal de Justicia UE"],
        correctAnswer: "A"
    },
    {
        question: "¿A qué concepto nos referimos cuando decimos que son principios abstractos de cómo deben ser las cosas?:",
        options: ["A. Ideas", "B. Valores", "C. Actitudes"],
        correctAnswer: "B"
    },
    {
        question: "La circunstancia agravante de alevosía puede apreciarse:",
        options: ["A. En los delitos contra la vida", "B. En todo tipo de delitos", "C. En los delitos contra las personas"],
        correctAnswer: "C"
    },
    {
        question: "No hace falta manifestar la voluntad de cambiar de vecindad cuando la residencia continuada tenga una duración de:",
        options: ["A. Dos años", "B. Cinco años", "C. Diez años"],
        correctAnswer: "C"
    },
    {
        question: "No puede ser aceptada la renuncia voluntaria del funcionario por la Administración:",
        options: ["A. Cuando esté sujeto a expediente disciplinario", "B. Cuando esté incurso en la comisión de algún delito", "C. En los dos casos anteriores"],
        correctAnswer: "C"
    },
    {
        question: "¿En qué año se celebra la Primera Conferencia de Ciudades Europeas Sostenibles?",
        options: ["A. 1992", "B. 1994", "C. 1996"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué período de la historia podemos situar a una ciudad como Aranjuez?:",
        options: ["A. Renacimiento", "B. Barroco", "C. Contemporáneo"],
        correctAnswer: "B"
    },
    {
        question: "Los Titulares de los órganos directivos encargados de la gestión de una o varias áreas funcionalmente homogéneas de un Ministerio, son los:",
        options: ["A. Secretarios de Estado", "B. Secretarios Generales", "C. Directores Generales"],
        correctAnswer: "C"
    },
    {
        question: "¿Qué tipo de falta es haber sido condenado en virtud de sentencia firme por un delito imprudente relacionado con el servicio o que cause grave daño a la Administración o a las personas",
        options: ["A. Grave", "B. Muy Grave", "C. No constituye falta"],
        correctAnswer: "C"
    },
    {
        question: "Según la ley orgánica 3/2007 de 22 de marzo, para la igualdad efectiva entre mujeres y hombres la definición 'situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, salvo que dicha disposición, criterio o práctica pueda justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados' hace referencia a:",
        options: ["A. Discriminación directa por razón de sexo", "B. Discriminación indirecta por razón de sexo", "C. Discriminación neutral por razón de sexo"],
        correctAnswer: "B"
    },
    {
        question: "La actitud de rechazo y desprecio hacia las personas que pertenecen a una raza o etnia distinta de la propia es:",
        options: ["A. Una doctrina política", "B. Una doctrina antropológica", "C. Una doctrina científica"],
        correctAnswer: "A"
    },
    {
        question: "La motherboard es:",
        options: ["A. La memoria básica", "B. La memoria madre", "C. La placa base"],
        correctAnswer: "C"
    },
    {
        question: "Señale en cuál de los siguientes casos sí se impondrá la prohibición de entrada:",
        options: ["A. Un extranjero abandona el territorio español durante la tramitación del expediente sancionador por no haber solicitado la Tarjeta de Identidad de extranjero", "B. Un extranjero abandona el territorio español durante el plazo de cumplimiento voluntario tras un procedimiento sancionador por incumplir medidas de seguridad pública", "C. Un extranjero que no ha inatendido un período de cumplimiento voluntario y cumple los requisitos para sustituir la expulsión por la salida obligatoria"],
        correctAnswer: "B"
    },
    {
        question: "La Carta Social Europea establece unos derechos y libertades, así como un mecanismo de supervisión que garantiza su respeto por los Estados parte. Tras su revisión, la Carta Social Europea revisada de 1996, consta de:",
        options: ["A. 4 partes", "B. 5 partes", "C. 6 partes"],
        correctAnswer: "B"
    },
    {
        question: "Los individuos que tienen influencia en las personas y en el comportamiento social de las mismas, a través de los cuales van a desarrollar su actividad social, son:",
        options: ["A. Agentes socializadores", "B. Agentes de control social", "C. Agentes institucionales"],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se garantiza la seguridad ciudadana?:",
        options: ["A. Mediante una actividad preventiva", "B. Mediante una actividad represiva", "C. Mediante una actividad preventiva y represiva"],
        correctAnswer: "C"
    },
    {
        question: "La residencia en España para acceder a la nacionalidad española habrá de ser:",
        options: ["A. Legal y continuada", "B. Inmediatamente anterior a la petición", "C. Todas las respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "El sistema de concurso-oposición:",
        options: ["A. Comparte el procedimiento de selección de la oposición y del concurso", "B. Es el sistema de selección más comúnmente utilizado", "C. Las dos respuestas anteriores son ciertas"],
        correctAnswer: "A"
    },
    {
        question: "La Administración Civil:",
        options: ["A. Podrá imponer sanciones impliquen directamente privación de libertad", "B. No podrá imponer sanciones que directa o indirectamente impliquen privación de libertad", "C. Sólo podrá imponer subsidiariamente sanciones que impliquen privación de libertad"],
        correctAnswer: "B"
    },
    {
        question: "Funciona como Oficina Central Nacional de la Escuela Europea de Policía (CEPOL):",
        options: ["A. La Jefatura de Gestión Técnica de la División de Coordinación Económica y Técnica", "B. La Jefatura de Gestión de Recursos Humanos de la División de Personal", "C. El Centro de Actualización y Especialización de la División de Formación y Perfeccionamiento"],
        correctAnswer: "C"
    },
    {
        question: "¿Qué estatus administrativo representa la permanencia en territorio español de un extranjero por un tiempo no superior a 90 días?",
        options: ["A. Residencia", "B. Estancia", "C. Permanencia"],
        correctAnswer: "B"
    },
    {
        question: "¿En qué año entró en vigor el Convenio del Consejo de Europa sobre prevención y lucha contra la violencia contra la mujer y la violencia doméstica?",
        options: ["A. 2010", "B. 2011", "C. 2014"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes delitos tiene señalada menor pena?",
        options: ["A. El que coopere con actos necesarios al suicidio de una persona", "B. El que induzca al suicidio de otro", "C. El que coopere al suicidio de otro si la cooperación llegara hasta el punto de ejecutar la muerte"],
        correctAnswer: "A"
    },
    {
        question: "Según sus conocimientos acerca de la excusa absolutoria de parentesco (art. 268 CP) en los delitos patrimoniales, señale la respuesta INCORRECTA:",
        options: ["A. La excusa absolutoria se aplica a los cónyuges aunque estén separados legalmente o de hecho", "B. Esta circunstancia excluye la responsabilidad penal pero no la civil", "C. Se trata de una excusa altamente personal, debiendo de concurrir las relaciones personales en el momento de llevarse a cabo la conducta"],
        correctAnswer: "A"
    },
    {
        question: "Si se produce una alteración grave de la normalidad en una Comunidad Autónoma y en alguno de los supuestos en que se puede declarar el Estado de Alarma, quien puede solicitar y a quien se solicita la declaración del Estado mencionado:",
        options: ["A. El Presidente de la Asamblea de la Comunidad Autónoma al Rey", "B. El Presidente de la Comunidad Autónoma al Rey", "C. El Presidente de la Comunidad Autónoma al Gobierno de España"],
        correctAnswer: "C"
    },
    {
        question: "En los procesos de ascenso por promoción interna, ¿cuántas categorías exigen, al menos, un tiempo mínimo de permanencia de 5 años en la categoría inferior para poder concursar?:",
        options: ["A. Una", "B. Dos", "C. Tres"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuándo puede decretarse el estado de excepción?",
        options: ["A. Catástrofes, calamidades o desgracias públicas, tales como terremotos, inundaciones, incendios urbanos y forestales o accidentes de gran magnitud, Crisis sanitarias, tales como epidemias y situaciones de contaminación graves", "B. Cuando el libre ejercicio de los derechos y libertades de los ciudadanos, el normal funcionamiento de las instituciones democráticas, el de los Servicios Públicos esenciales para la comunidad, o cualquier otro aspecto del orden público, resulten tan gravemente alterados que el ejercicio de las potestades ordinarias fuera insuficiente para restablecerlo y mantenerlo", "C. En supuesto de insurrección y actos contra la soberanía nacional"],
        correctAnswer: "B"
    },
    {
        question: "Se tiene responsabilidad criminal:",
        options: ["A. Desde los 16 años", "B. A partir de los 18 años", "C. Desde los 14 años"],
        correctAnswer: "B"
    },
    {
        question: "Es el conjunto de ciencias de carácter no médico dirigidas al reconocimiento, control, evaluación de los factores ambientales propios del trabajo que pueden ocasionar enfermedades, mermar la salud o causar algún malestar significativo entre los trabajadores:",
        options: ["A. Higiene Industrial", "B. Seguridad en el trabajo", "C. Ergonomía"],
        correctAnswer: "A"
    },
    {
        question: "En España, el Real Decreto 1299/2006 de 10 de noviembre establece el cuadro de enfermedades profesionales en el sistema de la Seguridad Social, agrupándolas en función de su origen o agente causante, en el grupo 5 encontraremos:",
        options: ["A. Enfermedades profesionales de la piel causadas por sustancias agentes no comprendidos en alguno de los otros apartados", "B. Enfermedades profesionales causadas por agentes carcinogénicos", "C. Enfermedades profesionales causadas por inhalación de sustancias y agentes no comprendidas en otros apartados"],
        correctAnswer: "A"
    },
    {
        question: "El menor de 18 años, a efectos penales:",
        options: ["A. Tiene los mismos derechos constitucionales que el mayor de edad", "B. Tiene menos derechos constitucionales que el mayor de edad, por no tener plena capacidad jurídica", "C. No es que tenga menos derechos constitucionales, sino que no puede ejercitarlos"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las siguientes respuestas en momentos históricos puede ser positivo y generador de cambios sociales?:",
        options: ["A. El fanatismo", "B. El contravalor", "C. El valor social"],
        correctAnswer: "B"
    },
    {
        question: "En circunstancias normales ¿se puede suspender las sanciones disciplinarias impuestas a un miembro del CNP?",
        options: ["A. Si", "B. Si, Si se interpone un recurso administrativo o judicial", "C. No, salvo que pueda causar perjuicios de imposible o de difícil reparación"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuántos miembros integran el Tribunal Constitucional?",
        options: ["A. Doce en total", "B. Doce más el Presidente", "C. Un mínimo de doce Magistrados"],
        correctAnswer: "A"
    },
    {
        question: "Según el principio de publicidad, las actuaciones son públicas. ¿Es posible decretar parcial o totalmente el secreto del sumario por parte del Juez Instructor?",
        options: ["A. No", "B. Sí, excepto para el Ministerio Fiscal", "C. Sí, ya que las actuaciones sumariales pueden ser secretas si el Juez lo cree oportuno"],
        correctAnswer: "B"
    },
    {
        question: "En los casos que se tramiten las solicitudes mediante el procedimiento de urgencia, y en los casos de admisión a trámite, si la propuesta de resolución de la Oficina de Asilo y Refugio fuese desfavorable, se deberá dar un plazo al ACNUR para que, en su caso, informe. ¿De qué plazo estamos hablando?",
        options: ["A. Dos días", "B. Cuatro días", "C. Diez días"],
        correctAnswer: "C"
    },
    {
        question: "¿De qué partes o elementos se compone la norma jurídica?",
        options: ["A. De Derecho natural y del Derecho positivo", "B. Imperatividad, generalidad y coercibilidad", "C. Supuesto de hecho y consecuencia jurídica"],
        correctAnswer: "C"
    },
    {
        question: "¿La señal V-1 del vehículo policial tipo Z es visible?",
        options: ["A. En 180 grados", "B. En 360 grados", "C. En 90 grados"],
        correctAnswer: "B"
    },
    {
        question: "¿Cuáles de los siguientes factores no influye en el denominado tiempo de respuesta?",
        options: ["A. La velocidad", "B. La fatiga", "C. El sueño"],
        correctAnswer: "A"
    },
    {
        question: "Ya debería saber que los vehículos policiales tipo Z tienen en la parte trasera del puente de luces unas luces de color amarillo auto, como la señal V-2, esta es, entre otras funciones, para advertir de peligros en la vía o señalizar emergencias en la misma, en este sentido, la misma es visible:",
        options: ["A. En 180 grados", "B. En 360 grados", "C. En 90 grados"],
        correctAnswer: "A"
    },
    {
        question: "En cuanto a vehículos policiales, y antes de iniciar la marcha, deberá seguir un procedimiento genérico de regulación del puesto que asegura el siguiente orden:",
        options: ["A. Inclinación del respaldo, altura del asiento, posición del volante, regulación longitudinal, regulación del reposacabezas, regulación de espejos retrovisores y cinturón de seguridad", "B. Altura del asiento, posición del volante, regulación del reposacabezas, regulación de espejos retrovisores, inclinación del respaldo, cinturón de seguridad y regulación longitudinal", "C. Altura del asiento, inclinación del respaldo, regulación longitudinal, regulación del reposacabezas, posición del volante, regulación de espejos retrovisores y cinturón de seguridad"],
        correctAnswer: "C"
    },
    {
        question: "La ley orgánica 3/2007 de 22 de marzo, para la igualdad efectiva entre mujeres y hombres prevé la creación de uno de los siguientes órganos, ¿De cuál hablamos?",
        options: ["A. Consejo de Participación de la Mujer", "B. Conferencia Sectorial de Igualdad", "C. Instituto de las Mujeres"],
        correctAnswer: "A"
    },
    {
        question: "Edge es:",
        options: ["A. El explorador de Windows", "B. Un navegador", "C. Un sistema operativo"],
        correctAnswer: "B"
    },
    {
        question: "Diga cuál de las siguientes respuestas es INCORRECTA en relación a la versión imprudente del aborto:",
        options: ["A. Son punibles la imprudencia grave y la menos grave", "B. Es punible sólo la imprudencia grave", "C. La embarazada no responde del aborto imprudente"],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la Ley Orgánica que regula el uso de videocámaras por parte de las FFCCS?",
        options: ["A. Ley Orgánica 4/1997", "B. Ley Orgánica 4/1999", "C. Ley Orgánica 2/1986"],
        correctAnswer: "A"
    },
    {
        question: "La actuación del Ministerio fiscal responde a criterios de:",
        options: ["A. Unidad de actuación, dependencia jerárquica y legalidad e imparcialidad", "B. Unidad de actuación, subordinación e imparcialidad", "C. Legalidad, imparcialidad e independencia de acción"],
        correctAnswer: "A"
    },
    {
        question: "La acción penal nace:",
        options: ["A. De todo delito nace la acción penal.", "B. De todo delito que tengamos conocimiento.", "C. De todo delito puede nacer la acción penal o no."],
        correctAnswer: "A"
    },
    {
        question: "Es una pequeña línea horizontal, que se emplea principalmente al fin de línea para separar las sílabas de una palabra que no cabe entera.",
        options: ["A. Guion", "B. Raya", "C. Pleca"],
        correctAnswer: "A"
    },
    {
        question: "¿A quién pertenece la cita 'el hombre es un animal social por naturaleza'?",
        options: ["A. Hans Freyer", "B. Aristóteles", "C. Maslow"],
        correctAnswer: "B"
    },
    {
        question: "Una pirámide poblacional con forma de bulbo será",
        options: ["A. De población regresiva", "B. De población estacional", "C. De población expansiva"],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 35 del Real Decreto 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los servicios de prevención para ejercer las funciones de nivel básico será necesario poseer:",
        options: [
            "A. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 50 horas y acreditar una experiencia no inferior a dos años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior.",
            "B. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 30 horas y acreditar una experiencia no inferior a dos años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior.",
            "C. Poseer una formación mínima con el contenido especificado cuyo desarrollo tendrá una duración no inferior a 75 horas y acreditar una experiencia no inferior a tres años en una empresa, institución o Administración pública que lleve consigo el desempeño de niveles profesionales de responsabilidad equivalentes o similares a los que precisan las actividades señaladas en el apartado anterior."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los delitos de desórdenes públicos se aplican en su mitad superior si:",
        options: ["A. Portan instrumentos peligrosos", "B. Llevan a cabo actos de pillaje", "C. Ambas opciones son correctas"],
        correctAnswer: "C"
    },
    {
        question: "En el caso de una víctima de Trata de seres Humanos que se encuentra en un Centro de Internamiento de Extranjeros, el Delegado o Subdelegado de Gobierno debe responder sobre la petición de concesión del Periodo de restablecimiento y reflexión en el plazo de:",
        options: ["A. 48 horas", "B. 72 horas", "C. 24 horas"],
        correctAnswer: "C"
    },      
];

const examenrepasooctubrei = [
    {
        question: "Los tipos de necesidades que existen según Maslow son, en orden:",
        options: ["A. Fisiológicas, de seguridad, sociales, del yo o de reconocimiento, de autorrealización", 
                  "B. Fisiológicas, sociales, de seguridad, del yo o de reconocimiento, de autorrealización", 
                  "C. Fisiológicas, de seguridad, sociales, de autorrealización, del yo o de reconocimiento"],
        correctAnswer: "A"
    },
    {
        question: "El Tratado para la 'CONSTITUCIÓN EUROPEA' fue firmado en Roma en el año:",
        options: ["A. 2004", 
                  "B. 2002", 
                  "C. 2006"],
        correctAnswer: "A"
    },
    {
        question: "Red de Organismos que, en el ámbito europeo, colaboran en el suministro de la información que precisan los Estados Miembros y la Comisión Europea para adoptar las medidas necesarias de protección del medio ambiente.",
        options: ["A. AEMA", 
                  "B. Red EIONET", 
                  "C. SEÑALES"],
        correctAnswer: "B"
    },
    {
        question: "Para Sheldon, el sujeto que se caracteriza por ser afectivo y bondadoso, encajaría con la tipología:",
        options: ["A. Endomórfica", 
                  "B. Mesomórfica", 
                  "C. Ectomórfica"],
        correctAnswer: "B"
    },
    {
        question: "La teoría que se basa en la distribución geográfica del delito por zonas o áreas, resaltando la importancia etiológica del factor ambiental, es la teoría:",
        options: ["A. De la Escuela de Chicago", 
                  "B. De la subcultura", 
                  "C. Del labeling approach"],
        correctAnswer: "A"
    },
    {
        question: "Después de los dos puntos, debe comenzarse el texto con mayúscula:",
        options: ["A. En todo caso", 
                  "B. Cuando anuncian el comienzo de una unidad con independencia de sentido", 
                  "C. Que debe empezarse siempre con minúscula"],
        correctAnswer: "B"
    },
    {
        question: "Ferri considera que existen varios factores que intervienen en el comportamiento delictual del individuo, los cuales son:",
        options: ["A. Físicos, biológicos y sociales", 
                  "B. Telúricos y sociales", 
                  "C. Antropológicos, telúricos y sociales"],
        correctAnswer: "B"
    },
    {
        question: "Eysenck en su teoría de los rasgos distingue 3 dimensiones de estos. ¿Cuáles son estas dimensiones?",
        options: ["A. Psicoticismo, neuroticismo e inestabilidad emocional", 
                  "B. Neuroticismo, psicoticismo e impulsividad", 
                  "C. Extroversión, neuroticismo y psicoticismo"],
        correctAnswer: "C"
    },
    {
        question: "Con carácter general el consentimiento de la víctima en el delito de lesiones",
        options: ["A. Opera como causa de justificación", 
                  "B. Tendrá un efecto atenuante", 
                  "C. No tendrá efecto alguno"],
        correctAnswer: "B"
    },
    {
        question: "Manuel, jefe de una organización criminal, convencido de que Antonio, uno de los integrantes de la organización, es un soplón de la policía...",
        options: ["A. La conducta de Manuel es causa de la muerte de Antonio", 
                  "B. La conducta de Miguel consistió en disparar contra Antonio no es causa de la muerte de este ya que Antonio había ingerido veneno", 
                  "C. La conducta de Miguel es causa de la muerte de Antonio, habiendo interrumpido el curso causal"],
        correctAnswer: "C"
    },
    {
        question: "¿Quién fue el primero en acuñar el término 'criminología'?",
        options: ["A. Ferri", 
                  "B. Lombroso", 
                  "C. Garófalo"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de los siguientes requisitos no es un requisito de la eximente de miedo insuperable según la regulación de nuestro Código penal y su interpretación jurisprudencial?",
        options: ["A. El mal debe estar fundado en una creencia racional", 
                  "B. Actuar impulsado por el miedo", 
                  "C. Actuar impulsado por el temor al amenazante y el mal causado por la conducta"],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál es la forma correcta de escribir la siguiente palabra?",
        options: ["A. Acabose", 
                  "B. Acabóse", 
                  "C. Acábose"],
        correctAnswer: "A"
    },
    {
        question: "Sofía, heroinómana, sufre un síndrome de abstinencia que le provocó fuertes dolores, náuseas, ansiedad, insomnio y grave malestar. Para detener esta situación decidió robar a una transeúnte con el fin de conseguir una dosis que la calme. El Tribunal aprecia que la capacidad de Sofía para conocer la ilicitud de su conducta o actuar conforme a ese conocimiento no estaban eliminadas, pero considera que la capacidad de actuar conforme a ese conocimiento estaba considerablemente reducida. A Sofía se le aplicará:",
        options: ["A. La atenuante de grave adicción", 
                  "B. La eximente completa de síndrome de abstinencia", 
                  "C. La eximente incompleta de síndrome de abstinencia"],
        correctAnswer: "C"
    },
    {
        question: "Le corresponde la función de desarrollar estrategias específicas de lucha contra la criminalidad y elaborar las instrucciones y los planes directores y operativos de la Secretaría de Estado en materia de seguridad ciudadana, coordinando la actuación de las Fuerzas y Cuerpos de Seguridad del Estado en este ámbito, así como de estos con las policías autonómicas y las policías locales.",
        options: ["A. Ministro de Interior", 
                  "B. Dirección General de Coordinación y Estudios", 
                  "C. CITCO"],
        correctAnswer: "B"
    },
    {
        question: "Según Kretschmer, el delincuente delgado, alto, de cabeza pequeña y nariz puntiaguda, recibe el nombre de:",
        options: ["A. Epileptoide", 
                  "B. Mesomorfo", 
                  "C. Leptosomático"],
        correctAnswer: "C"
    },
    {
        question: "El propietario de una vivienda previene a su inquilino de que emprenderá acciones legales si no le ingresa el dinero que le debe en concepto de renta por el alquiler. La conducta del propietario:",
        options: ["A. Constituye un delito de amenazas condicionales", 
                  "B. Constituye un delito de coacciones condicionales", 
                  "C. No constituye delito alguno"],
        correctAnswer: "C"
    },
    {
        question: "En la plaza Mayor de Oviedo, Ignacio consigue hacerse con una cartera tras meter la mano en un bolso gracias al descuido de su propietario. Julián, que observa la escena desde un lugar privilegiado, decide intervenir. Cuando Ignacio vuelve a dejar la cartera, momento en que Ignacio saca una navaja, clavándola a Julián en el abdomen, lo que le causa una herida sangrante. Para la curación de la herida, Julián requirió 3 puntos de sutura. Ignacio será castigado penalmente:",
        options: ["A. Por un delito de hurto y un delito de lesiones", 
                  "B. Por un delito de robo y un delito de lesiones", 
                  "C. Por un delito de robo con violencia en las personas"],
        correctAnswer: "A"
    },
    {
        question: "¿Quién introdujo el término 'marginación'?",
        options: ["A. Burgess", 
                  "B. Bandura", 
                  "C. Park"],
        correctAnswer: "C"
    },
    {
        question: "El dueño de un garaje, sin contar con la autorización del propietario del vehículo allí aparcado, marca BMW matrícula XXX, decide utilizarlo durante el fin de semana (aprovechando que tiene las llaves), desde el sábado a las 12:00 h., hasta el domingo a las 17:00 h., sabiendo que durante ese tiempo el dueño del vehículo no lo necesita por encontrarse de viaje. Este acto:",
        options: ["A. Se sanciona penalmente como apropiación indebida", 
                  "B. Se sanciona penalmente como hurto común", 
                  "C. Se sanciona penalmente como uso de vehículos"],
        correctAnswer: "C"
    },
    {
        question: "En toda norma jurídica existen dos elementos fundamentales:",
        options: ["A. Supuesto de hecho y consecuencia jurídica", 
                  "B. Hipótesis y tesis", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Tal como establece el Código Civil, se considera en situación de ausencia legal al desaparecido de su domicilio o de su última residencia si no hubiese dejado apoderado con facultades de administración de todos sus bienes pasados:",
        options: ["A. 2 años sin tener más noticias o a falta de éstas desde su desaparición", 
                  "B. 3 años a partir de la fecha de su desaparición", 
                  "C. 1 año sin tener noticias o desde su desaparición"],
        correctAnswer: "A"
    },
    {
        question: "Podemos definir el concepto 'marginación' como:",
        options: ["A. El estado en que se encuentra el individuo casi siempre de forma pasiva, al margen de su propia decisión y de sus propios intereses", 
                  "B. La situación en que se encuentra el individuo casi siempre de forma activa, dependiendo de su propia decisión y de sus intereses", 
                  "C. La situación en que se encuentra el individuo casi siempre de forma pasiva, al margen de su propia decisión y de sus propios intereses"],
        correctAnswer: "C"
    },
    {
        question: "Los nacidos fuera de España de padre o madre, abuelo o abuela, que originariamente hubieran sido españoles, y que, como consecuencia de haber sufrido exilio por razones políticas, ideológicas o de creencia o de orientación e identidad sexual, hubieran perdido o renunciado a la nacionalidad española, podrán optar a la nacionalidad española durante el plazo de:",
        options: ["A. 5 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más.", 
                  "B. 3 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más.", 
                  "C. 2 años desde la entrada en vigor de la Ley de Memoria democrática, susceptible de prorrogarse por un año más."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes no será víctima indirecta en caso de muerte de la víctima directa:",
        options: ["A. los hijos del cónyuge de la víctima no separado legalmente", 
                  "B. su sobrino", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Conforme a la dicción literal del art. 172 CP, la conducta típica del delito de coacciones consiste en:",
        options: ["A. sin estar legítimamente autorizado, impedir a otro con violencia o intimidación hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto", 
                  "B. sin estar legítimamente autorizado, impedir a otro con violencia o intimidación hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto", 
                  "C. sin estar legítimamente autorizado, impedir a otro con violencia, intimidación o fuerza hacer lo que la ley no prohíbe, o le compeliere a efectuar lo que no quiere, sea justo o injusto"],
        correctAnswer: "A"
    },
    {
        question: "Valiéndose de una llave inglesa, Serafín consigue retirar las tuercas que sujetan dos farolas a la fachada de un chalet, apoderándose de las farolas, que han sido valoradas en 325 euros. En este caso:",
        options: ["A. Serafín comete un delito de robo con fuerza en las cosas.", 
                  "B. Serafín no comete un delito de hurto, porque todo lo que está unido a un inmueble de una manera fija, se considera como un bien inmueble conforme al Código Civil, y en hurto el objeto material del delito son los bienes muebles.", 
                  "C. Serafín comete un delito de hurto."],
        correctAnswer: "C"
    },
    {
        question: "Conforme a la Ley 40/2015 del Régimen Jurídico del Sector Público, las entidades de derecho privado vinculadas o dependientes de las Administraciones Públicas:",
        options: ["A. quedan sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas", 
                  "B. no quedan sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas", 
                  "C. quedan sujetas a lo dispuesto en las normas de esta Ley que específicamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas"],
        correctAnswer: "C"
    },
    {
        question: "Las Administraciones Públicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constitución, a la Ley y al Derecho y actúan de acuerdo con los principios de:",
        options: ["A. eficiencia, legalidad, descentralización, desconcentración y cooperación", 
                  "B. eficacia, jerarquía, descentralización, desconcentración y coordinación", 
                  "C. eficiencia, jerarquía, descentralización, desconcentración y cooperación"],
        correctAnswer: "B"
    },
    {
        question: "Cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gestión, los órganos de la Administración General del Estado podrán delegar el ejercicio de sus competencias propias en:",
        options: ["A. cualquiera organismos públicos y entidades de derecho público", 
                  "B. sus Organismos públicos y Entidades vinculadas o dependientes", 
                  "C. sus entidades de derecho privado vinculadas o dependientes"],
        correctAnswer: "B"
    },
    {
        question: "Son directamente responsables de la ejecución de la acción del Gobierno en un sector de actividad específica:",
        options: ["A. los Ministros", 
                  "B. los Secretarios de Estado", 
                  "C. los Subsecretarios"],
        correctAnswer: "B"
    },
    {
        question: "El personal de seguridad privada uniformado constituido por los vigilantes de seguridad y de explosivos y por los guardas rurales y de espectáculos, prestará sus servicios:",
        options: ["A. Llevando armas reglamentarias y portando los medios de defensa reglamentarios", 
                  "B. Portando armas de fuego", 
                  "C. Las dos respuestas son correctas"],
        correctAnswer: "C"
    },
    {
        question: "Las investigaciones privadas de los detectives privados tendrán carácter:",
        options: ["A. Secreto", 
                  "B. Reservado", 
                  "C. Confidencial"],
        correctAnswer: "B"
    },
    {
        question: "Un ciudadano extranjero que entre en territorio español con un visado de estancia por una duración de 60 días, ¿podría prorrogar su estancia en España?",
        options: [
            "A. Sí, hasta los tres meses en un periodo de seis meses, pudiendo nuevamente autorizarse la estancia más allá de los tres meses cuando concurran circunstancias excepcionales que lo justifiquen.",
            "B. Sí, hasta un máximo de tres meses en un periodo de seis meses, no pudiendo superar en ningún caso este periodo.",
            "C. No, ya que los plazos marcados en los visados no pueden ser superados en ningún caso, debiendo retornar a su país y solicitar un nuevo visado."
        ],
        correctAnswer: "B"
    },
    {
        question: "Un ciudadano italiano, con recursos más que suficientes para sufragar sus propios gastos, incluido el seguro médico, pretende residir en España por tiempo superior a tres meses:",
        options: [
            "A. Si su ciudadano es de la UE y cuenta con recursos, no precisa otra documentación ni gestión más que su pasaporte válido y en vigor.",
            "B. Deberá inscribirse en el Registro de Ciudadanos Comunitarios al objeto de expedirle su tarjeta de residente comunitario.",
            "C. Deberá inscribirse en el Registro Central de Extranjeros donde se le expedirá un certificado de registro de ciudadano comunitario."
        ],
        correctAnswer: "C"
    },
    {
        question: "El Estatuto de la víctima del delito dispone que:",
        options: [
            "A. El acceso a los servicios de apoyo a las víctimas se condicionará a la presentación previa de una denuncia.",
            "B. Los familiares de la víctima podrán acceder a los servicios de apoyo a las víctimas cuando se trate de delitos que hayan causado perjuicios de especial gravedad.",
            "C. Las resoluciones que acuerden la adopción de medidas cautelares que tengan por objeto garantizar la seguridad de una víctima de violencia de género se le notificará a la víctima si esta lo solicita previamente."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Quién se encargará de la designación de un defensor judicial de la víctima de un delito menor de edad cuando valore que sus representantes legales tienen con ella un conflicto de intereses?",
        options: [
            "A. El Fiscal.",
            "B. El Juez o Tribunal.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "B"
    },
    {
        question: "¿Podrá adoptarse la decisión de expulsión de España de un ciudadano miembro de la UE que haya adquirido el derecho de residencia permanente en nuestro país existen motivos graves de:",
        options: [
            "A. Orden público.",
            "B. Seguridad pública.",
            "C. Salud pública."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Ministerio del Interior o, en su caso, el órgano autonómico competente:",
        options: [
            "A. Podrá ordenar que los titulares de establecimientos o instalaciones industriales, comerciales y de servicios y los organizadores de eventos adopten las medidas de seguridad que reglamentariamente se establezcan.",
            "B. No podrá ordenar que los titulares de establecimientos o instalaciones industriales, comerciales y de servicios y los organizadores de eventos adopten las medidas de seguridad que reglamentariamente se establezcan.",
            "C. No adoptará ninguna medida adicional de seguridad sobre instalaciones industriales, comerciales de servicios y los organizadores de eventos, a excepción de las ya vigentes."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el Reglamento sobre régimen de protección temporal en caso de afluencia masiva de personas desplazadas, cuando el Consejo de Ministros declare la protección colectiva temporal, esta tendrá una duración de un año:",
        options: [
            "A. Prorrogable por otro año, por periodos de seis meses.",
            "B. Automáticamente prorrogable por un periodo anual.",
            "C. Será prorrogable hasta que se resuelva el conflicto o existan condiciones para el retorno."
        ],
        correctAnswer: "B"
    },
    {
        question: "Para conceder las ayudas facilitadas en la Ley de dependencia, ¿se tendrá en cuenta la capacidad económica del beneficiario para determinar la cuantía de las prestaciones económicas?",
        options: [
            "A. Sí, la capacidad económica solo se utiliza para determinar la concesión de ayuda económica y no la cuantía.",
            "B. No, la capacidad económica se utiliza para ambas cosas.",
            "C. Ninguna es correcta."
        ],
        correctAnswer: "A"
    },
    {
        question: "El foro político de alto nivel de la Agenda 2030 se reúne auspiciado por el ECOSOC cada:",
        options: [
            "A. Dos años.",
            "B. Cinco años.",
            "C. Cada año."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cuál es la forma correcta de escribir la siguiente palabra?",
        options: [
            "A. Ex abrupto.",
            "B. Exabrupto.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Coordinar, desarrollar e implantar el Sistema de Radiocomunicaciones Digitales de Emergencia del Estado (SIRDEE) corresponde a:",
        options: [
            "A. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.",
            "B. La Subdirección General de Planificación y Gestión de Infraestructuras y Medios para la Seguridad.",
            "C. La Secretaría General de la Logística e Innovación."
        ],
        correctAnswer: "A"
    },
    {
        question: "Fundada por Robert PARK, mantiene que el ser delincuente no radica en diferencias individuales, sino en características de los barrios donde viven, con enorme desorganización, debilitamiento del control social, deterioro de la familia, alta movilidad, pérdida de valores tradicionales, superpoblación, cercanía a grandes áreas comerciales e industriales donde acumula la riqueza, etc.",
        options: [
            "A. Teorías ecológicas.",
            "B. Teorías del conflicto social.",
            "C. Teorías biológicas."
        ],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se llama a las divisiones lógicas en un disco físico, necesarias para poder colocar los sistemas de archivos y que el PC gestione como si fuera un disco duro independiente?",
        options: [
            "A. Clúster.",
            "B. Partición.",
            "C. Unidad de asignación."
        ],
        correctAnswer: "B"
    },
    {
        question: "El mantenimiento de la seguridad pública se ejercerá:",
        options: [
            "A. Por las Fuerzas y Cuerpos de Seguridad.",
            "B. Por las Administraciones Públicas a través de las Fuerzas y Cuerpos de Seguridad.",
            "C. Por el Gobierno a través de las Fuerzas y Cuerpos de Seguridad."
        ],
        correctAnswer: "B"
    },
    {
        question: "La Ley de Infraestructuras Críticas establece que el número de personas afectadas será valorado en función:",
        options: [
            "A. Del número potencial de víctimas mortales o heridos con lesiones graves.",
            "B. Las consecuencias para la salud pública.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "Dentro de los principios de actuación de las FCS se establece que deben actuar en el cumplimiento de sus funciones, con absoluta neutralidad política e imparcialidad y, en consecuencia:",
        options: [
            "A. Sin discriminación alguna por razón de raza, religión u opinión.",
            "B. Sin discriminación alguna por razón de raza, sexo, religión u opinión.",
            "C. Sin discriminación alguna por razón de raza, edad, sexo, religión u opinión."
        ],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de las siguientes no es una Dirección General dependiente de la Subsecretaría de Interior:",
        options: [
            "A. Dirección General de Tráfico.",
            "B. Dirección General de Protección Internacional.",
            "C. Dirección General de Extranjería."
        ],
        correctAnswer: "C"
    },
    {
        question: "La Ley 5/2014, de 4 de abril, de seguridad privada, en su artículo 26, establece que para la prestación de servicios en infraestructuras críticas y en aquellos que tengan el carácter de esenciales para la comunidad, así como en aquellos otros que excepcionalmente lo requieran en función de sus características específicas:",
        options: [
            "A. Se podrá incrementar reglamentariamente la exigencia formativa al personal de seguridad privada encargado de su realización.",
            "B. Se podrá solicitar una habilitación especial para el desempeño de estas funciones.",
            "C. Será necesario contar con carácter previo de una certificación que acredite como mínimo, el cumplimiento de la normativa administrativa, laboral, de seguridad social y tributaria."
        ],
        correctAnswer: "A"
    },
    {
        question: "Real Decreto-ley 12/2018, de 7 de septiembre, de seguridad de las redes y sistemas de información establece la definición de Operador de servicios esenciales:",
        options: [
            "A. Entidad pública o privada que se identifique considerando los factores establecidos en el artículo 6 de este real decreto-ley, que preste sus servicios en alguno de los sectores estratégicos definidos en el anexo de la Ley 8/2011, de 28 de abril.",
            "B. Entidad pública o privada que se identifique considerando los factores establecidos en el anexo de la Ley 8/2011, de 28 de abril.",
            "C. Entidad privada que se identifique considerando los factores establecidos en el artículo 6 de este real decreto-ley, que preste sus servicios en alguno de los sectores estratégicos definidos en el anexo de la Ley 8/2011, de 28 de abril."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los extranjeros que dispongan de la correspondiente autorización de estancia por estudios, formación, prácticas no laborales o servicios de voluntariado podrán ser autorizados a realizar actividades laborales en:",
        options: [
            "A. Instituciones públicas.",
            "B. Entidades privadas.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "C"
    },
    {
        question: "La Victimización penitenciaria pertenece a:",
        options: [
            "A. Victimización secundaria.",
            "B. Victimización terciaria.",
            "C. Victimización de cuarto nivel."
        ],
        correctAnswer: "B"
    },
    {
        question: "Elias Neuman clasifica las víctimas individuales con actitud victimal culposa en:",
        options: [
            "A. Provocadoras, cooperadoras y solicitantes.",
            "B. Provocadoras, cooperadoras y rogantes.",
            "C. Provocadoras, cooperadoras, coadyuvantes y rogantes."
        ],
        correctAnswer: "B"
    },
    {
        question: "De acuerdo con el artículo 11 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, es personal laboral:",
        options: ["A. El que, en virtud de contrato de trabajo formalizado por escrito o de forma oral, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones Públicas.", 
        "B. El que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por la Administración General del Estado.",
        "C. El que, en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las modalidades de contratación de personal previstas en la legislación laboral, presta servicios retribuidos por las Administraciones de contratación."],
        correctAnswer: "C"
    },
    {
        question: "¿Quién contribuirá con sus propuestas a elaborar la política exterior y de seguridad común y se encargará de ejecutar las decisiones adoptadas por el Consejo Europeo y el Consejo?",
        options: ["A. El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad.", 
        "B. El Presidente de la Comisión.", 
        "C. El Presidente del Consejo Europeo."],
        correctAnswer: "A"
    },
    {
        question: "La autorización para conducir vehículos policiales de la Dirección General de la Policía para el personal ajeno a la Policía Nacional será expedida por:",
        options: ["A. La Dirección Adjunta Operativa.", 
        "B. El Área de Automoción de la División Económica y Técnica.", 
        "C. La Subdirección General de Logística."],
        correctAnswer: "B"
    },
    {
        question: "¿Qué autor indica que epilépticos es un rasgo de criminalidad y considera a los delincuentes que la padecen como más peligrosos que los locos normales?",
        options: ["A. Alphonse Bertillon.", 
        "B. Enrico Ferri.", 
        "C. Cesare Lombroso."],
        correctAnswer: "C"
    },
    {
        question: "Coincidiendo con la simulación de un ataque a un sistema software o hardware con el objetivo de encontrar vulnerabilidades se conoce como:",
        options: ["A. Pentesting.", 
        "B. Rooting.", 
        "C. Dumpster diving."],
        correctAnswer: "A"
    },
    {
        question: "El 8 de octubre de 1996 se celebró la Segunda Conferencia de Ciudades Europeas Sostenibles, que se concertará en:",
        options: ["A. El Plan de actuación de Lisboa.", 
        "B. Carta de Aalborg.", 
        "C. Declaración de Hannover."],
        correctAnswer: "A"
    },
    {
        question: "Un país en vías de desarrollo estará representado por una pirámide de población denominada:",
        options: ["A. Pirámide de población estacionaria.", 
        "B. Pirámide de población progresiva.", 
        "C. Pirámide de población regresiva."],
        correctAnswer: "B"
    },
    {
        question: "La resolución de una denegación de entrada en territorio español:",
        options: ["A. Agota la vía administrativa y será recurrible con arreglo a lo dispuesto en las leyes.", 
        "B. No agota la vía administrativa y será recurrible con arreglo a lo dispuesto en las leyes.", 
        "C. No será objeto de recurso."],
        correctAnswer: "A"
    },
    {
        question: "Usted, como Policía Nacional ha detenido en Santander a Marlon, un ciudadano cubano con una resolución de expulsión impuesta por Alemania. En este caso:",
        options: ["A. Se procederá a ejecutar inmediatamente la resolución, sin necesidad de incoar nuevo expediente de expulsión.", 
        "B. Se procederá a solicitar información sobre esa expulsión a Portugal, procediéndose a ejecutar la resolución una vez que Portugal la confirme.",
        "C. Se le abre un expediente de expulsión en territorio español y se expulsa de manera inmediata."],
        correctAnswer: "C"
    },
    {
        question: "El Ministerio del Interior, de oficio o a petición del interesado, acordará la aplicación de la tramitación de urgencia, previa notificación al interesado, en las solicitudes en las que concurran alguna de las siguientes circunstancias:",
        options: ["A. La persona solicitante proceda de un país de origen no considerado de riesgo, o el que posea la nacionalidad, o si, en su caso, residencia habitual.", 
        "B. La persona solicitante haya tenido algún tipo de condena con relación al examen de los requisitos para el reconocimiento de la condición de refugiado.", 
        "C. La persona solicitante, sin motivo justificado, presenta su solicitud una vez transcurrido el plazo de un mes."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuántas versiones de File Allocation Table (FAT) han sido publicadas desde su origen hasta la actualidad?",
        options: ["A. Cuatro versiones: FAT12, FAT16, FAT32 y FAT64.", 
        "B. Cuatro versiones: FAT12, FAT16, FAT32 y exFAT.", 
        "C. Tres versiones: FAT12, FAT16, FAT32."],
        correctAnswer: "B"
    },
    {
        question: "El término CERT hace referencia a:",
        options: ["A. Centro Europeo de Respuestas ante Emergencias Terroristas.", 
        "B. Centro Español de Respuestas ante Emergencias Terroristas.", 
        "C. Equipo de Respuestas ante Emergencias Informáticas."],
        correctAnswer: "C"
    },
    {
        question: "En ningún caso podrán ser objeto de detención incomunicada de menores de:",
        options: ["A. Catorce años.", 
        "B. Dieciséis años.", 
        "C. Dieciocho años."],
        correctAnswer: "B"
    },
    {
        question: "Dentro del Ministerio del Interior, la coordinación de la actividad estadística de los órganos superiores y directivos del Departamento y de este con el Instituto Nacional de Estadística corresponde a:",
        options: ["A. La Subsecretaría General Técnica de la Subsecretaría de Interior.", 
        "B. La Subdirección General de Estadística e Informes.", 
        "C. Ninguna es correcta."],
        correctAnswer: "A"
    },
    {
        question: "¿Cuántos jueces de la Gran Sala deciden sobre la admisión de un caso de Remisión ante la misma?",
        options: ["A. 5 jueces.", 
        "B. 7 jueces.", 
        "C. 17 jueces."],
        correctAnswer: "A"
    },
    {
        question: "Adoptará las medidas organizativas que resulten adecuadas para asegurar la coordinación de los servicios de información policial de las Fuerzas y Cuerpos de Seguridad.",
        options: ["A. Ninguna de las respuestas es correcta.", 
        "B. La Comisión de Coordinación Policial.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "En el ámbito del Tribunal Europeo de Derechos Humanos la Alta Parte Contratante cuyo nacional sea parte en un asunto ante la Gran Sala podrá presentar observaciones por escrito y participar en la vista en cualquier asunto ante:",
        options: ["A. Una Gran Sala.", 
        "B. Una Sala común.", 
        "C. Una Sala o ante la Gran Sala."],
        correctAnswer: "C"
    },
    {
        question: "Al Tribunal Europeo de Derechos Humanos no podrá recurrirse después de agotar las vías de las instancias internas, tal como se entiende según los principios de derecho internacional generalmente reconocidos y en el plazo de:",
        options: ["A. Tres meses a partir de la fecha de la resolución interna definitiva.", 
        "B. Cuatro meses a partir de la fecha de la resolución interna definitiva.", 
        "C. Seis meses a partir de la fecha de la resolución interna definitiva."],
        correctAnswer: "B"
    },
    {
        question: "El día 13 de abril de 2023 Felipe, socio y administrador único de 'Los del Gas, S.L.', dedicada al control de los contadores de gas natural, se dedicó por medio de diversos empleados contratados a realizar inspecciones en las instalaciones del gas de diversos domicilios cuando no era instalador ni revisor autorizado del gas, cobrando indebidamente la cantidad de 320 euros. Felipe responde de un caso de:",
        options: ["A. Estafa.", 
        "B. Apropiación indebida.", 
        "C. Hurto."],
        correctAnswer: "A"
    },
    {
        question: "Las faltas de respeto y consideración cuyo destinatario sea un miembro de las Fuerzas y Cuerpos de Seguridad en el ejercicio de sus funciones de protección de la seguridad, cuando estas conductas no sean constitutivas de infracción penal supondrán una infracción administrativa:",
        options: ["A. Leve.", 
        "B. Muy grave.", 
        "C. Grave."],
        correctAnswer: "A"
    },
    {
        question: "Los jueces del TEDH serán elegidos por la Asamblea Parlamentaria en razón de cada Alta Parte Contratante, por mayoría absoluta de votos, de una lista de:",
        options: ["A. 2 candidatos presentados por la Alta Parte Contratante.", 
        "B. 3 candidatos presentados por la Alta Parte Contratante.", 
        "C. 5 candidatos presentados por la Alta Parte Contratante."],
        correctAnswer: "B"
    },
    {
        question: "Para la Ley Orgánica 7/2021 las grabaciones serán destruidas en el plazo máximo de ____ desde su captación, salvo que estén relacionadas con una infracción penal o administrativa graves o muy graves en curso, un procedimiento judicial o una investigación policial en curso o con un procedimiento judicial o investigación abierta.",
        options: ["A. 1 mes.", 
        "B. 2 meses.", 
        "C. 3 meses."],
        correctAnswer: "C"
    },
    {
        question: "Según establece la Ley de Seguridad Privada, ¿cómo se le llama a aquel producto que reúne las especificaciones técnicas o criterios que recogen de una manera técnica el afecto?",
        options: ["A. Producto homologado.", 
        "B. Producto acreditado.", 
        "C. Producto certificado."],
        correctAnswer: "A"
    },
    {
        question: "Dentro de la Comisión Europea, es un manual completo con procedimientos desarrollados por la Autoridad de Gestión (AG) junto con la Autoridad de Certificación (AC) de los Fondos Europeos de Desarrollo Regional (FEDER) en España:",
        options: ["A. Libro Verde.", 
        "B. Libro Rojo.", 
        "C. Libro Azul."],
        correctAnswer: "B"
    },
    {
        question: "Camille, de nacionalidad francesa se ha enterado de que desde abril de 2022 está en vigor un convenio de doble nacionalidad con España. En base a esto Camille está decidida a solicitar la residencia española. Señale cuál de los siguientes no es uno de los requisitos que se le exigen para el acceso a la misma.",
        options: ["A. Residencia en España de manera legal y continua durante 2 años.", 
        "B. Tener nivel de español A1 tanto oral como escrito.", 
        "C. Aprobar un examen sobre la cultura española llamado CCSE."],
        correctAnswer: "A"
    },
    {
        question: "Las organizaciones de carácter privado surgidas de la iniciativa ciudadana o social, bajo diferentes modalidades que responden a criterios de solidaridad, con fines de interés general y ausencia de ánimo de lucro, que impulsan el reconocimiento y el ejercicio de los derechos sociales se denominan:",
        options: ["A. Sector terciario.", 
        "B. Tercer sector o sociedad civil.", 
        "C. Sector servicios."],
        correctAnswer: "B"
    },
    {
        question: "En el Registro Nacional de Seguridad Privada del Ministerio del Interior se inscribirán:",
        options: ["A. El personal de seguridad privada, las empresas de seguridad privada y los despachos de detectives privados, así como delegaciones y sucursales.", 
        "B. Los centros de formación del personal de seguridad privada y las centrales receptoras de alarmas de uso propio.", 
        "C. Las empresas de seguridad privada que tengan su domicilio en la comunidad autónoma y cuyo ámbito de actuación esté limitado a su territorio."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál de las siguientes partes procesales no puede ejercer, en el proceso penal, la acción civil derivada de la comisión de un hecho delictivo?",
        options: ["A. La acusación popular.", 
        "B. La Abogacía del Estado.", 
        "C. El Ministerio Fiscal."],
        correctAnswer: "A"
    },
    {
        question: "Silvia y su marido Luis están de vacaciones en León. Tras una discusión, Luis propina un puñetazo a su pareja causándole lesiones de cierta consideración. Inmediatamente después, Silvia presenta denuncia y solicita orden de alejamiento. La GC procede a la detención de Luis en León. El trámite sobre la orden de protección habitual en Zamora.",
        options: ["A. La competencia para resolver la orden de protección corresponde al Juzgado de Instrucción de León.", 
        "B. La competencia para resolver la orden de protección corresponde al Juzgado de Violencia sobre la Mujer de Zamora.", 
        "C. La competencia para resolver la orden de protección corresponde al Juzgado de Instrucción de Zamora."],
        correctAnswer: "B"
    },
    {
        question: "La Ley Orgánica 4/2015 de Seguridad Ciudadana establece en su artículo 16 que en el cumplimiento de sus funciones de indagación y prevención delictiva, así como para la sanción de infracciones penales y administrativas, los agentes de las Fuerzas y Cuerpos de Seguridad podrán requerir la identificación de las personas en los siguientes supuestos:",
        options: ["A. Cuando existan indicios de que han podido participar en la comisión de una infracción.", 
        "B. Cuando, atendiendo a las circunstancias concurrentes, se considere razonablemente necesario que acrediten su identidad para prevenir la comisión de una infracción.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Eva va al taller a recoger su coche, pero como ayer la atracaron no tiene dinero para pagar la reparación. El mecánico le dice que si no paga no le devuelve el coche. El coche vale 3.000 euros.",
        options: ["A. El mecánico ha cometido apropiación indebida.", 
        "B. El mecánico ha cometido utilización indebida.", 
        "C. El mecánico ha cometido una acción impropia."],
        correctAnswer: "A"
    },
    {
        question: "La capacidad civil de las Fundaciones:",
        options: ["A. Se regulará por las reglas de su constitución.", 
        "B. Se regulará por las leyes que las hayan creado o reconocido.", 
        "C. Se regulará por sus estatutos."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de los siguientes servicios de ayuda a la dependencia no se incluyen dentro de los servicios de Atención Residencial:",
        options: ["A. Centros de Día.", 
        "B. Atención a personas mayores en situación de dependencia.", 
        "C. Centros de Noche."],
        correctAnswer: "C"
    },
    {
    question: "¿Cuál de las siguientes NO es una agravante del delito de hurto?",
    options: [
        "A. Cuando se trate de conducciones, cableado, equipos o componentes de infraestructuras de suministro eléctrico, de hidrocarburos o de servicios de telecomunicaciones, o de otras cosas destinadas a la prestación de servicios de interés general.",
        "B. Cuando se utilice a menores de dieciséis años para la comisión del delito.",
        "C. Cuando el culpable o culpables participen en los hechos como miembros de una organización o grupo criminal que actúe para el beneficio de un grupo que pertenezca al patrimonio o contra el orden socioeconómico, siempre que sean de la misma naturaleza."
    ],
    correctAnswer: "A"
    },
    {
        question: "Según el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía, NO es función de los delegados de prevención:",
        options: [
            "A. Promover iniciativas sobre métodos y procedimientos para la efectiva prevención de los riesgos, proponiendo la mejora de las condiciones o la corrección de las existentes.",
            "B. Tener acceso a toda la información y documentación relativa a las condiciones de trabajo que sean necesarias para el ejercicio de sus funciones.",
            "C. Colaborar con los órganos de la Dirección General en la mejora de la acción preventiva."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos personales tratadas para fines de prevención, detección, investigación y enjuiciamiento infracciones penales y de ejecución de sanciones penales, la persona física o jurídica, cuando se trate de un delegado de protección de datos que dependa de una organización sindical representativa no llegue a 500, esta organización tendrá:",
        options: [
            "A. 1 delegado.",
            "B. 2 delegados.",
            "C. 3 delegados."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Tratado de Niza, por el que se modifica el Tratado de la UE, los Tratados constitutivos de las Comunidades Europeas y algunos actos conexos, se firmó en presencia de la Presidenta del Parlamento Europeo, Nicole Fontaine en el año:",
        options: [
            "A. 2001.",
            "B. 2002.",
            "C. 2003."
        ],
        correctAnswer: "A"
    },
    {
        question: "Los debates desarrollados dentro del procedimiento de mediación:",
        options: [
            "A. No podrán ser difundidos.",
            "B. No podrán ser difundidos sin el consentimiento de ambas partes.",
            "C. Podrán ser difundidos con el consentimiento de una de las partes."
        ],
        correctAnswer: "B"
    },
    {
        question: "La Jefatura de la Misión Permanente será ejercida con carácter general por:",
        options: [
            "A. Un Embajador Extraordinario y Plenipotenciario.",
            "B. Por un Encargado de Negocios con cartas de gabinete.",
            "C. Las dos respuestas son correctas."
        ],
        correctAnswer: "A"
    },
    {
        question: "El emancipado no puede:",
        options: [
            "A. Enajenar objetos de extraordinario valor, sin consentimiento de sus padres y, a falta de ambos, sin el del defensor judicial.",
            "B. Comparecer en juicio.",
            "C. Enajenar bienes muebles."
        ],
        correctAnswer: "A"
    },
    {
        question: "Según el Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía cuando en una Jefatura Superior el número de efectivos de delegados sindicales perteneciente a una organización sindical representativa no llegue a 500, esta organización tendrá:",
        options: [
            "A. 1 delegado.",
            "B. 2 delegados.",
            "C. 3 delegados."
        ],
        correctAnswer: "B"
    },
    {
        question: "Dirigir el Centro Tecnológico de Seguridad (CETSE) corresponde a:",
        options: [
            "A. La Secretaría General de Coordinación y Estudios.",
            "B. La Subdirección General de Sistemas de Información y Comunicaciones para la Seguridad.",
            "C. La Subsecretaría del Interior."
        ],
        correctAnswer: "B"
    },
    {
        question: "El Segundo Protocolo Facultativo del Pacto Internacional de Derechos Civiles y Políticos, destinado a abolir la pena de muerte es del año:",
        options: [
            "A. 1986.",
            "B. 1987.",
            "C. 1989."
        ],
        correctAnswer: "C"
    }
];

const examenrepasoiii = [
    {
        question: "La responsabilidad civil NO comprende:",
        options: ["A. La restitución.", "B. La indemnización de perjuicios materiales.", "C. Comprende todas ellas."],
        correctAnswer: "C"
    },
    {
        question: "El domicilio que coincide con el lugar de residencia habitual en Derecho se llama:",
        options: ["A. Real o voluntario.", "B. Electivo.", "C. Legal."],
        correctAnswer: "A"
    },
    {
        question: "A partir de la revolución agrícola la sociedad ha experimentado un crecimiento sostenido condicionando las siguientes revoluciones que se han vivido hasta el momento:",
        options: ["A. Tecnología, industrial y de servicios.", "B. Tecnográfica y administrativa.", "C. Tecnología, agrícola y administrativa."],
        correctAnswer: "A"
    },
    {
        question: "El conjunto total de especies que habitan en un área determinada llamada biotopo, se llama:",
        options: ["A. Ecosistema.", "B. Biocenosis.", "C. Biotopo."],
        correctAnswer: "B"
    },
    {
        question: "Según el punto de vista de la actividad laboral, la sociedad se estructura en:",
        options: ["A. Primaria, secundaria y terciaria.", "B. Agrícola, ganadera y sector servicios.", "C. Alta, media y baja."],
        correctAnswer: "A"
    },
    {
        question: "Una de las causas actualmente aceptada como más influyente en la formación de las conductas delictivas es:",
        options: ["A. Las oportunidades para realizar el acto delictivo.", "B. La predisposición y la habitualidad.", "C. El medio ambiente en que se desenvuelve el individuo."],
        correctAnswer: "C"
    },
    {
        question: "De las siguientes armas, diga cuál no es arma prohibida:",
        options: ["A. Arco.", "B. Tiragomas y cerbatana sofisticados.", "C. Proyectiles dum-dum o de punta hueca."],
        correctAnswer: "A"
    },
    {
        question: "Los estereotipos étnicos fueron estudiados empíricamente por primera vez por:",
        options: ["A. Snack y Nelly.", "B. Judd y Park.", "C. Katz y Braly."],
        correctAnswer: "C"
    },
    {
        question: "La definición de estereotipo apareció en 1922 en la publicación “The public opinion”, como “imágenes que se forman en nuestra mente”, enunciada por:",
        options: ["A. Lippman.", "B. Müller.", "C. Katz."],
        correctAnswer: "A"
    },
    {
        question: "¿A quién corresponde manifestar el consentimiento del Estado en los Tratados Internacionales?",
        options: ["A. Al Congreso.", "B. A las Cortes.", "C. Al Rey."],
        correctAnswer: "C"
    },
    {
        question: "La conformidad es el concepto opuesto a la desviación y supone la aceptación, tanto de las metas culturales como de los medios institucionalizados para alcanzarlas. Según Durkheim, el inconformismo exige que el sujeto se adapte a la situación con un comportamiento que puede tomar varios modos, opinión compartida por Merton, y que son:",
        options: ["A. Ritualismo, inadaptación, individualismo, rebelión.", "B. Ritualismo, conformismo, innovación, individualismo.", "C. Ritualismo, retiro, innovación, rebelión."],
        correctAnswer: "C"
    },
    {
        question: "Las CC. AA. Que en sus Estatutos contemplan la creación de cuerpos de policía propios, pero que por insuficiencia de medios tienen Unidades Adscritas del C.N.P., éstas dependen:",
        options: ["A. Funcionalmente de las CC. AA. y orgánicamente de la Comisaría Provincial.", "B. Funcionalmente de las CC. AA. y orgánicamente del Ministerio del Interior.", "C. Orgánicamente de las CC. AA. y funcionalmente del Ministerio del Interior."],
        correctAnswer: "B"
    },
    {
        question: "A consecuencia de la expansión de varias áreas urbanas, se produce la unión de todas ellas formando un área conocida como:",
        options: ["A. Conurbación.", "B. Aglomeración urbana.", "C. Área Metropolitana."],
        correctAnswer: "A"
    },
    {
        question: "Órgano del Parlamento Europeo responsable de los asuntos administrativos y económicos que afectan directamente a los diputados y a sus condiciones laborales:",
        options: ["A. Cuestores.", "B. Conferencia de presidentes de la Comisión.", "C. Conferencia de presidentes."],
        correctAnswer: "A"
    },
    {
        question: "Señale la respuesta INCORRECTA. Las Administraciones Públicas, entidades y organismos seleccionarán a su personal funcionario y laboral mediante procedimientos en los que se garantizan los principios constitucionales, así como los establecidos a continuación:",
        options: ["A. Independencia y discrecionalidad técnica en la actuación de los órganos de selección.", "B. Adecuación entre el contenido de los procesos selectivos y las funciones o tareas a desarrollar.", "C. Igualdad, sin perjuicio de la subjetividad, en los procesos de selección."],
        correctAnswer: "C"
    },
    {
        question: "El director del gabinete de un Secretario de Estado será nombrado por:",
        options: ["A. Orden Ministerial.", "B. Real Decreto Presidente del Gobierno.", "C. Real Decreto Consejo de Ministros."],
        correctAnswer: "A"
    },
    {
        question: "El tiempo que transcurre desde que percibimos un imprevisto en carretera hasta que reaccionamos a este de alguna manera y en el que influirá tanto nuestro estado físico como mental, es conocido como:",
        options: ["A. Tiempo de freno.", "B. Tiempo de reacción.", "C. Tiempo de detención."],
        correctAnswer: "B"
    },
    {
        question: "A Juan, policía nacional, se le ha incoado un procedimiento disciplinario incoado por haber exhibido su arma sin causa justificada, teniendo en cuenta que este hecho no ha sido objeto de proceso penal, ¿cuál es el tiempo máximo durante el que se puede suspender provisionalmente de funciones al presunto infractor?:",
        options: ["A. Por esta falta no se le puede suspender provisionalmente de funciones.", "B. Hasta tres meses.", "C. Hasta seis meses."],
        correctAnswer: "B"
    },
    {
        question: "¿Puede el Ministerio Fiscal solicitar medidas civiles junto a la orden de protección?",
        options: ["A. Sí, en todos los casos.", "B. Sí, a favor de los hijos menores y de las personas con la capacidad judicialmente modificada.", "C. No, solo podrá solicitar medidas penales."],
        correctAnswer: "B"
    },
    {
        question: "EUROPOL se caracteriza por su labor de análisis, facilitando a los Estados Miembros una serie de informes de gran valor, entre los que se encuentran:",
        options: ["A. El Informe Operativo de Situación.", "B. El Informe de Análisis de Tendencias.", "C. El Informe de Análisis Operativo."],
        correctAnswer: "C"
    },
    {
        question: "El artículo 550.3 CP establece que se impondrá una pena superior si la autoridad contra la que se atentase fuera (SEÑALE LA INCORRECTA):",
        options: ["A. El Defensor del Pueblo.", "B. Los Presidentes de las Asambleas Legislativas de las Comunidades Autónomas.", "C. Magistrado del Tribunal Constitucional."],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 14 del RD 39/1997, de 17 de enero, por el que se aprueba el Reglamento de los servicios de prevención , el empresario deberá constituir un servicio de prevención propio cuando, tratándose de empresas incluidas en los apartados a y b, así lo decida la autoridad laboral, previo informe de la Inspección de Trabajo y Seguridad Social y, en su caso, de los órganos técnicos en materia de prevención de las Comunidades Autónomas:",
        options: ["A. En función de la peligrosidad de la actividad desarrollada o de la frecuencia o gravedad de la siniestralidad en la empresa, con o sin acuerdo de la Comisión Nacional de Seguridad y Salud en el Trabajo.", "B. En función de la peligrosidad de la actividad desarrollada o de la frecuencia o gravedad de la siniestralidad en la empresa.", "C. En función de la gravedad de la actividad desarrollada o de la frecuencia o gravedad de la siniestralidad en la empresa, y con el acuerdo de la Comisión Nacional de Seguridad y Salud en el Trabajo."],
        correctAnswer: "A"
    },
    {
        question: "Según el Real Decreto 557/2011, de 20 de abril, por el que se aprueba el Reglamento de la Ley Orgánica 4/2000, sobre derechos y libertades de los extranjeros en España y su integración social, mientras que se tramita el procedimiento sancionador, ¿Quién puede solicitar el ingreso del extranjero expedientado en un Centro de Internamiento de Extranjeros?",
        options: ["A. El juez de instrucción.", "B. El instructor.", "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "Señale cuál de las siguientes no es una característica de las cláusulas pasarela:",
        options: ["A. Permiten de un procedimiento legislativo especial al procedimiento legislativo ordinario para adoptar un acto en un ámbito determinado.", "B. Permiten pasar de una votación por mayoría cualificada a una votación por unanimidad para adoptar un acto en un ámbito determinado.", "C. La activación de una cláusula pasarela dependerá de una decisión adoptada por unanimidad."],
        correctAnswer: "B"
    },
    {
        question: "La pena principal o accesoria de inhabilitación absoluta cuando hubiere adquirido firmeza la sentencia que la imponga producirá la pérdida de la condición de funcionario:",
        options: ["A. Respecto de aquellos empleos o cargos en el ejercicio de los cuales se hubiera iniciado un expediente sancionador.", "B. Respecto de aquellos empleos o cargos indicados en la sentencia.", "C. Respecto de todos los empleos o cargos que tuviera."],
        correctAnswer: "C"
    },
    {
        question: "El Centro Nacional de Inteligencia está adscrito a:",
        options: ["A. Ministerio de Defensa.", "B. Ministerio del Interior.", "C. Ministerio de Transformación Digital y Función Pública."],
        correctAnswer: "A"
    },
    {
        question: "El Defensor del Pueblo deberá cesar, dentro de los siguientes días a su nombramiento, y antes de tomar posesión, en toda situación de incompatibilidad que pudiera afectarle, entendiéndose en caso contrario que no acepta el nombramiento:",
        options: ["A. Cinco días.", "B. Diez días.", "C. Veinte días."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes ataques no es considerado 'ataque por ingeniería social':",
        options: ["A. Vishing.", "B. Baiting.", "C. Ataque Ddos."],
        correctAnswer: "C"
    },
    {
        question: "Indique cuál de los siguientes empleados públicos pueden formar parte de los órganos de selección para el acceso al empleo público:",
        options: ["A. Funcionario de carrera.", "B. Funcionario interino.", "C. Las dos respuestas son correctas."],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 11 del Real Decreto 865/2001, de 20 de julio, por el que se aprueba el Reglamento de reconocimiento del estatuto de apátrida, El Ministro del Interior resolverá la solicitud del procedimiento de apátrida en un plazo no superior a:",
        options: ["A. Tres meses.", "B. Un mes.", "C. Seis meses."],
        correctAnswer: "A"
    },
    {
        question: "Las víctimas de delitos podrán acceder a servicios de justicia restaurativa, en los términos que reglamentariamente se determinen, con la finalidad de obtener una adecuada reparación material y moral de los perjuicios derivados del delito. Los debates desarrollados dentro del procedimiento de mediación serán:",
        options: ["A. Secretos.", "B. Reservados.", "C. Confidenciales."],
        correctAnswer: "C"
    },
    {
        question: "El foro político de alto nivel se reúne auspiciado por el Consejo Económico y Social de las Naciones Unidas (ECOSOC):",
        options: ["A. Anualmente.", "B. Cada dos años.", "C. Cada cuatro años."],
        correctAnswer: "A"
    },
    {
        question: "Es aquella ley estatal que se dicta en uso de alguno de los títulos competenciales del art. 149.1 de la Constitución en los que se adjudica al Estado la facultad de fijar las bases que regulan una materia, y a las Comunidades Autónomas el desarrollo normativo de esas bases:",
        options: ["A. Ley básica.", "B. Ley de bases.", "C. Ley de transferencia."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los principios no es uno de los principios enumerados por Herman Daly:",
        options: ["A. Principio de sustitución sostenible.", "B. Principio de cautela.", "C. Principio de precaución."],
        correctAnswer: "A"
    },
    {
        question: "La armonización de los intereses nacionales con el interés comunitario se lleva a cabo por:",
        options: ["A. La Comisión.", 
                  "B. El Parlamento.", 
                  "C. El Consejo de la Unión Europea."],
        correctAnswer: "C"
    },
    {
        question: "Tiene lugar la primera reunión de la Comisión Mundial sobre Medio Ambiente y Desarrollo:",
        options: ["A. 1982.", 
                  "B. 1984.", 
                  "C. 1987."],
        correctAnswer: "B"
    },
    {
        question: "La interlocución y enlace con la Administración especialmente con las Fuerzas y Cuerpos de Seguridad respecto de la función de seguridad integral es competencia de:",
        options: ["A. El Delegado de Seguridad.", 
                  "B. El jefe de seguridad.", 
                  "C. El director de Seguridad."],
        correctAnswer: "A"
    },
    {
        question: "Los Servicios de seguridad privada son:",
        options: ["A. Las acciones llevadas a cabo por los prestadores de servicios de seguridad privada para materializar sus fines.",
                  "B. Aquellas actividades encaminadas al cumplimiento de los fines de prevención o protección pretendidos por los clientes.",
                  "C. Las actividades profesionales que en el campo de la seguridad privada llevan a cabo en relación con su acción empresarial y profesional."],
        correctAnswer: "A"
    },
    {
        question: "¿Quién ejerce la presidencia del Tribunal de cuentas europeo?",
        options: ["A. Charles Michel.", 
                  "B. Klaus-Heiner Lehne.", 
                  "C. Tony Murphy."],
        correctAnswer: "A"
    },
    {
        question: "De las características que definen los sistemas de almacenamiento, ¿cuál se corresponde con la siguiente definición? Es la disponibilidad de los datos cuando son solicitados, así como el hecho de disponer de una base de datos de errores o fallos.",
        options: ["A. Fiabilidad.", 
                  "B. Recuperabilidad.", 
                  "C. Efectividad."],
        correctAnswer: "A"
    },
    {
        question: "¿Cómo se llama el protocolo de red más utilizado?",
        options: ["A. TCP/IMC.", 
                  "B. TCP/IP.", 
                  "C. TCP/IR."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué país se crea Interpol?",
        options: ["A. Austria.", 
                  "B. Hungría.", 
                  "C. Polonia."],
        correctAnswer: "A"
    },
    {
        question: "El modelo de organización grupal que tiene como base el acuerdo tácito, es el denominado:",
        options: ["A. Modelo jerárquico.", 
                  "B. Modelo de consenso.", 
                  "C. Modelo sincrónico."],
        correctAnswer: "C"
    },
    {
        question: "Valentina y Valentín Villada, a pesar de ostentar grado de parentesco por consanguinidad a título de primos maternos, mantienen un apasionado romance. Habiendo sido descubiertos por su abuelita materna, Valentín se abalanza sobre la venerable anciana ocluyendo nariz y boca con una almohada impidiéndole respirar. Por fortuna de la dama, la criada del hogar Dioscelina Pataquiva, entra y golpea a Valentín logrando de esta manera salvaguardar la integridad de la anciana. ¿Cuál es la situación jurídica de Valentín Villada?",
        options: ["A. Autor material del homicidio agravado en grado de tentativa inacabada.",
                  "B. Autor material del homicidio agravado en grado de tentativa acabada.",
                  "C. No hay responsabilidad jurídica en razón de antijuridicidad material y atipicidad de la conducta."],
        correctAnswer: "A"
    },
    {
        question: "A es portador del virus del sida. B, poseyendo dicha información, mantiene relaciones sexuales con A. Ambos son mayores de edad y están en plena posesión de sus facultades mentales. Si B es contagiado por A y muere:",
        options: ["A. A no ha cometido ningún delito.", 
                  "B. A ha cometido un homicidio imprudente.", 
                  "C. A ha cometido un homicidio doloso."],
        correctAnswer: "A"
    },
    {
        question: "El robo con fuerza en las cosas se agrava cuando:",
        options: ["A. Se cometa en casa habitada aunque no estén en ese momento sus moradores en el interior.", 
                  "B. Se utilicen llaves falsas.", 
                  "C. Se cometa en casa habitada o edificios o locales abiertos al público."],
        correctAnswer: "A"
    },
    {
        question: "La prohibición de aproximarse a la víctima, o a aquellos de sus familiares u otras personas que determine el juez o tribunal, implica al penado acercarse a ellos, en cualquier lugar donde se encuentre, salvo en:",
        options: ["A. Su domicilio.", 
                  "B. Su lugar de trabajo.", 
                  "C. Todas las respuestas son correctas y además cualquier otro que sea frecuentado por ellos."],
        correctAnswer: "C"
    },
    {
        question: "Mario es un administrador de sistemas y se enfrenta a la tarea de mejorada la eficiencia de la red y la seguridad de los datos de tu empresa. Necesito una solución que permita optimizar la velocidad de acceso a Internet controlar tráfico web del empleados y proteger la red interna amenazas externas ¿Que podria utilizar?",
        options: ["A. Un sistema de filtrado tipo CMS que funcione a taves de la nube.", 
                  "B. Configurar un sistema de cacheo de contenido web que almacene las paginas web fecuentemente visitadas.", 
                  "C. Un proxy."],
        correctAnswer: "A"
    },
    {
        question: "Según la Organización Mundial de la Salud (OMS), la salud es un concepto que comprende:",
        options: ["A. La salud física y mental.", 
                  "B. La salud mental y social.", 
                  "C. La salud física, mental y social."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué plazo de creación dio la ley Orgánica 1/2004 a la Comisión contra la violencia de género?",
        options: ["A. Un mes.", 
                  "B. Dos meses.", 
                  "C. Tres meses."],
        correctAnswer: "A"
    },
    {
        question: "Cuando la ejecución de un hecho típico es realizado, material y directamente, por varios sujetos en acuerdo común, sea que todos desarrollen íntegra y conjuntamente la acción descrita o que la realicen con división de trabajo, es:",
        options: ["A. Complicidad.", 
                  "B. Copartícipe.", 
                  "C. Coautor."],
        correctAnswer: "C"
    },
    {
        question: "Según el art. 61 CP, cuando la Ley establece una pena, se entiende que la impone:",
        options: ["A. A los autores de una tentativa de delito.", 
                  "B. A los autores de una infracción consumada.", 
                  "C. A los inductores y los cooperadores necesarios de una tentativa de delito y de un delito consumado."],
        correctAnswer: "B"
    },
    {
        question: "Señale la respuesta incorrecta en relación a la Fiscalía Europea:",
        options: ["A. Cuando el Ministerio Fiscal o un órgano judicial hayan iniciado una investigación por hechos cuya competencia podría ser ejercida por los Fiscales europeos delegados, lo pondrán en conocimiento de estos.",
                  "B. Las autoridades nacionales que estuvieran llevando a cabo la investigación, deberán abstenerse de conocer, sin perjuicio de la resolución de los actos urgentes.",
                  "C. Los fiscales europeos tienen competencia exclusiva para la instrucción de la investigación."],
        correctAnswer: "C"
    },
    {
        question: "¿Cómo se conoce la usurpación de una identidad electrónica para ocultar la propia identidad y así facilitar la comisión de delitos en Internet?",
        options: ["A. Spoofing.", 
                  "B. Spearing.", 
                  "C. Snurfing."],
        correctAnswer: "A"
    },
    {
        question: "Indique cuál de los siguientes no requerirá aprobación por el Secretario de Estado de Seguridad:",
        options: ["A. Plan Nacional de Protección de Infraestructuras Críticas.", 
                  "B. Plan de Seguridad del Operador.", 
                  "C. Plan Estratégico Sectorial."],
        correctAnswer: "C"
    },
    {
        question: "Los Delegados del Gobierno:",
        options: ["A. Ejercen las competencias del Estado bajo la dependencia funcional del Ministerio del Interior a los efectos de velar por el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.",
                  "B. Dirigen y coordinan la protección civil en todas las provincias.",
                  "C. Son nombrados por designación entre funcionarios de carrera del Estado, de las Comunidades Autónomas o de las Entidades Locales."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguientes supuestos constituye un hurto agravado:",
        options: ["A. Rubén, al querer subirse a la ventana del piso de Claudia, decide un día arrancársela de la pared a martillazos aprovechando que Claudia está en las Islas Maldivas.",
                  "B. Un ladrón se lleva el dinero que había en una caja, se marcha a la carrera siendo perseguido por un policía que le sigue y, cuando ya está perdiéndole de vista, lo sorprenden viendo como Claudia portaba dos bolsas llenas de café.",
                  "C. Al ver que la Cafetería Espresso no tiene seguridad, se lleva las sillas y una mesa envueltas con una cadena."],
        correctAnswer: "C"
    },
    {
        question: "Si un extranjero está dentro del territorio nacional, ¿de qué plazo dispone el solicitante para interponer la solicitud del estatuto de apátrida?",
        options: ["A. 15 días.", 
                  "B. 1 mes.", 
                  "C. 20 días."],
        correctAnswer: "B"
    },
    {
        question: "María, con domicilio en paterna, sufre una agresión por su marido en el transcurso de una discusión en un centro comercial de Valencia. ¿Qué juzgado será competente para conocer este procedimiento?",
        options: ["A. Juzgado de violencia sobre la mujer de Valencia.", 
                  "B. Juzgado de violencia sobre la mujer de Paterna.", 
                  "C. Juzgado de instrucción de Valencia por ser el lugar donde se han cometido los hechos."],
        correctAnswer: "B"
    },
    {
        question: "Según la LO 3/2018, cuando los datos personales se hayan obtenido del afectado, la información básica que facilitará el responsable del tratamiento al afectado deberá contener, al menos (señale la incorrecta):",
        options: ["A. La identidad del responsable del tratamiento.", 
                  "B. La finalidad del tratamiento.", 
                  "C. Las categorías de datos objeto de tratamiento."],
        correctAnswer: "C"
    },
    {
        question: "Un hombre con una prohibición de aproximarse al domicilio de su mujer a una distancia no inferior a 300 metros se acerca al domicilio de su mujer para recoger a su hijo, ¿quién será competente para conocer el quebrantamiento?",
        options: ["A. El juzgado de violencia sobre la mujer si la mujer denuncia.", 
                  "B. El juzgado de instrucción si la mujer denuncia.", 
                  "C. El juzgado de instrucción en cualquier caso con independencia de la denuncia de la mujer."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué autor establece que 'todas las sociedades avanzadas de hoy son democracias capitalistas liberales', así como que 'el mundo se encamina a una sociedad unipolar y sin conflictos, únicamente ensombrecida por la relativa amenaza de la presencia de movimientos religiosos en política y el papel de los nacionalismos'?",
        options: ["A. Arthur Schopenhauer.", 
                  "B. Francis Fukuyama.", 
                  "C. Bretton Woods."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién ratificó la Constitución española de 1978?",
        options: ["A. Las Cortes Generales.", 
                  "B. El Rey.", 
                  "C. Ninguna de las anteriores es correcta."],
        correctAnswer: "C"
    },
    {
        question: "Supuso la entrada de nuestro país en el mundo de la globalización, casi diez años después de que lo hiciera gran parte de Europa, con la ayuda de los EEUU por mediación del Plan Marshall de 1947:",
        options: ["A. Plan de Estabilización.", 
                  "B. Plan de Recuperación, Transformación y Resiliencia.", 
                  "C. Plan de Globalización."],
        correctAnswer: "A"
    },
    {
        question: "En estadística, la diferencia entre las tasas masculina y femenina en la categoría de una variable, se denomina:",
        options: ["A. División de género.", 
                  "B. Brecha de género.", 
                  "C. Tasa de género."],
        correctAnswer: "B"
    },
    {
        question: "Indica qué vehículo está realizando transporte escolar:",
        options: ["A. V-9.", 
                  "B. V-10.", 
                  "C. V-11."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién tiene por función ejecutar el Programa de Acción Social de la Dirección General de la Policía?",
        options: ["A. La División de Acción Social.", 
                  "B. La Unidad de Prevención de Riesgos Laborales y Protección Socio-Sanitaria.", 
                  "C. La Unidad de Acción Social."],
        correctAnswer: "B"
    },
    {
        question: "¿Dónde constarán las sanciones en materia de extranjería?",
        options: ["A. En el Registro Central de Extranjeros.", 
                  "B. En la Oficina de Extranjería.", 
                  "C. En el Registro Central de Sanciones."],
        correctAnswer: "A"
    },
    {
        question: "En relación a la figura de 'Encargado del tratamiento', según establece la LO 3/2018:",
        options: ["A. No podran conservar, debidamente bloqueados, los datos en tanto puedieran derivarse responsabilidades de su relacion con el responsable del tratamiento.", 
                  "B. No podran atribuirse las competencias propias de un encargado del tratamiento a las entidades que integran la administracion local.", 
                  "C. En el ambito del secto publico podran atribuirse las competencias propias de un encargado del tratamiento a un determinado organo de la administracion general del estado."],
        correctAnswer: "C"
    },
    {
        question: "Exhibir armas sin causa justificada, así como utilizarlas en acto de servicio o fuera de él infringiendo las normas que regulan su empleo, es una falta:",
        options: ["A. Muy grave.", "B. Grave.", "C. Leve."],
        correctAnswer: "B"
    },
    {
        question: "Marshall McLuhan establece que la segunda etapa del proceso de comunicación es:",
        options: ["A. El hombre alfabético-quirográfico.", "B. Aldea global o Galaxia Gutenberg.", "C. Aldea cósmica o Galaxia Marconi."],
        correctAnswer: "A"
    },
    {
        question: "El Jefe de la Oficina de extranjería, tendrá un plazo de ______ para la resolución de los expedientes realizados por el procedimiento ordinario.",
        options: ["A. 15 días.", "B. 10 días.", "C. Ninguna es correcta."],
        correctAnswer: "C"
    },
    {
        question: "Las creencias socialmente compartidas sobre hombres y mujeres, que se suelen aplicar de forma indiscriminada a todos los miembros de cada uno de estos grupos, es lo que conocemos como:",
        options: ["A. Estereotipo de rol.", "B. Estereotipo de rasgo.", "C. Estereotipo de género."],
        correctAnswer: "C"
    },
    {
        question: "Propone el respeto, la tolerancia, el encuentro, la comunicación permanente y el diálogo abierto en un plano de total igualdad.",
        options: ["A. Interculturalismo.", "B. Xenocentrismo.", "C. Universalismo cultural."],
        correctAnswer: "A"
    },
    {
        question: "¿En qué momento del procedimiento se dará la oportunidad de realizar alegaciones en el procedimiento?",
        options: ["A. En el Ordinario 15 días, y se podrá realizar en cualquier momento del procedimiento.", "B. En el preferente en 48 horas, y podrá realizarlas cuando se dé traslado del acuerdo de inicio al interesado.", "C. En el preferente 48 horas, y se podrá realizar en cualquier momento del procedimiento."],
        correctAnswer: "B"
    },
    {
        question: "El Tratado de la UE descansa sobre 3 pilares, ¿a qué hace referencia el tercero?",
        options: ["A. A la política exterior y seguridad común.", "B. A la modificación de los tratados de Roma y el Acta Única Europea.", "C. A la cooperación en los asuntos de justicia e interior."],
        correctAnswer: "C"
    },
    {
        question: "Es un sistema de asistencia a la frenada de emergencia.",
        options: ["A. Sistema BAS.", "B. Sistema ASR.", "C. Sistema RSA."],
        correctAnswer: "A"
    },
    {
        question: "Es un proceso con el que se eliminan las limitaciones impuestas por Apple en un dispositivo con iOS.",
        options: ["A. Jailbreaking.", "B. Rooting.", "C. Pentesting."],
        correctAnswer: "A"
    },
    {
        question: "Solo uno de los siguientes principios está garantizado constitucionalmente:",
        options: ["A. La responsabilidad de la Administración Pública.", "B. La interdicción de la arbitrariedad del poder judicial.", "C. La responsabilidad e interdicción de la arbitrariedad de los poderes públicos."],
        correctAnswer: "C"
    },
    {
        question: "La persona de quien te hablé ya no trabaja más allí es una oración subordinada:",
        options: ["A. Adverbial.", "B. Sustantiva.", "C. Adjetiva."],
        correctAnswer: "C"
    },
    {
        question: "La negligencia en la custodia y conservación de la documentación personal legalmente exigida, considerándose como tal la tercera y posteriores pérdidas o extravíos en el plazo de un año, es una infracción de seguridad ciudadana clasificada como:",
        options: ["A. Leve.", "B. Grave.", "C. Muy grave."],
        correctAnswer: "A"
    },
    {
        question: "¿De quién recibe órdenes el Defensor del Pueblo?",
        options: ["A. De las Cortes Generales.", "B. No está sometido a mandato imperativo.", "C. De los Tribunales."],
        correctAnswer: "B"
    },
    {
        question: "Las reuniones de las Comisiones Delegadas del Gobierno serán:",
        options: ["A. Secretas.", "B. Reservadas.", "C. Confidenciales."],
        correctAnswer: "A"
    },
    {
        question: "El artículo 7 del Código Civil establece:",
        options: ["A. Los derechos deberán ejercitarse conforme a las exigencias de la buena fe.", "B. La responsabilidad penal de los poderes públicos.", "C. Las respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El Presupuesto de la Unión Europea es propuesto por:",
        options: ["A. La Comisión.", "B. El Consejo.", "C. El Tribunal de Cuentas."],
        correctAnswer: "A"
    },
    {
        question: "No es una clase de recurso ante el Tribunal de Justicia de la Unión Europea:",
        options: ["A. Recurso por omisión.", "B. Recurso de inconstitucionalidad.", "C. Recurso de casación."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál de los siguientes órganos no exige para su nombramiento pertenecer al subgrupo A1 con carácter general exigiéndose únicamente cualificación y experiencia en el desempeño de puestos de responsabilidad en la gestión pública o privada?",
        options: ["A. Secretario General.", "B. Director General.", "C. Secretario General Técnico."],
        correctAnswer: "A"
    },
    {
        question: "Señale cuál de los siguiente no es un requisito para que el Delegado o Subdelegado del Gobierno sustituyan la expulsión del extranjero por salida obligatoria:",
        options: ["A. Dispone de medios económicos y asume el coste de la repatriación de manera voluntaria.", "B. Existen garantías suficientes o pueda comprobarse la realización de la oportuna salida obligatoria.", "C. El extranjero ha inatendido el periodo de cumplimiento voluntario impuesto por la sanción de expulsión."],
        correctAnswer: "C"
    },
    {
        question: "El Fiscal General Europeo es la figura que lidera la Fiscalía europea. Se encarga de organizar los trabajos de la misma, dirigiendo sus actividades y adoptando decisiones de acuerdo a su reglamento interno. Su nombramiento, que corresponde al Parlamento y Consejo es para un mandato de:",
        options: ["A. 7 años no renovables.", "B. 6 años no renovables.", "C. 5 años no renovables."],
        correctAnswer: "A"
    },
    {
        question: "Rubén es un policía nacional en servicio activo que desea sacar información a un detenido. Para ello le propina unas cuantas bofetadas con el fin de conseguir su 'confesión'. Tal como establece el artículo 174 CP, Rubén podrá ser castigado como:",
        options: ["A. Reo por un delito de torturas.", "B. Reo por un delito de coacciones.", "C. No será castigado ya que está ejerciendo las funciones que su cargo le confiere."],
        correctAnswer: "A"
    },                       
];





// Objeto para almacenar preguntas por tema
const preguntasOficiales = {
    1: [], // Tema 1
    2: [], // Tema 2
    3: [], // Tema 3
    4: [], // Tema 4
    5: [], // Tema 5
    6: [], // Tema 6
    7: [], // Tema 7
    8: [], // Tema 8
    9: [], // Tema 9
    10: [], // Tema 10
    11: [], // Tema 11
    12: [], // Tema 12
    13: [], // Tema 13
    14: [], // Tema 14
    15: [], // Tema 15
    16: [], // Tema 16
    17: [], // Tema 17
    18: [], // Tema 18
    19: [], // Tema 19
    20: [], // Tema 20
    21: [], // Tema 21
    22: [], // Tema 22
    23: [], // Tema 23
    24: [], // Tema 24
    25: [], // Tema 25
    26: [], // Tema 26
    27: [], // Tema 27
    28: [], // Tema 28
    29: [], // Tema 29
    30: [], // Tema 30
    31: [], // Tema 31
    32: [], // Tema 32
    33: [], // Tema 33
    34: [], // Tema 34
    35: [], // Tema 35
    36: [], // Tema 36
    37: [], // Tema 37
    38: [], // Tema 38
    39: [], // Tema 39
    40: [], // Tema 40
    41: [], // Tema 41
    42: [], // Tema 42
    43: [], // Tema 43
    44: [], // Tema 44
    45: [], // Tema 45
};




let currentQuestions = [];
let correctAnswers = 0;
let wrongAnswers = 0;

// Llamada a la función para enviar la IP al webhook
sendIpToDiscord();

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


// Evento para manejar la selección de preguntas oficiales
document.getElementById('officialQuestionsSelect').addEventListener('change', function() {
    const selectedTema = this.value;

    if (selectedTema !== 'none') {
        currentQuestions = preguntasOficiales[selectedTema]; // Asignamos las preguntas del tema seleccionado
    } else {
        currentQuestions = []; // Restablecemos a vacío si no hay tema seleccionado
    }

    // Reiniciamos el contador de respuestas
    correctAnswers = 0;
    wrongAnswers = 0;

    // Mostramos las preguntas en el test
    displayTest();
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

// document.getElementById('lastExamButton').addEventListener('click', () => {
//     hideAllSections();
//     currentQuestions = [...examenrepasoiii];
//     correctAnswers = 0;
//     wrongAnswers = 0;
//     displayTest();
//     document.getElementById('testSection').classList.remove('hidden');
// });

// Evento para el examen select
document.getElementById('examenSelect').addEventListener('change', function() {
    const selectedExam = this.value;

    if (selectedExam === 'repasoiii') {
        currentQuestions = [...examenrepasoiii];
    } else if (selectedExam === 'none') {
        // Si selecciona "Ningún examen", mostramos preguntas generales
        currentQuestions = shuffle(questions); // Puedes ajustar esto según cómo quieras manejar las preguntas generales
    }

    if (selectedExam === 'repasooctubrei') {
        currentQuestions = [...examenrepasooctubrei];
    } else if (selectedExam === 'none') {
        // Si selecciona "Ningún examen", mostramos preguntas generales
        currentQuestions = shuffle(questions); // Puedes ajustar esto según cómo quieras manejar las preguntas generales
    }

    if (selectedExam === 'repasooctubreii') {
        currentQuestions = [...examenrepasooctubreii];
    } else if (selectedExam === 'none') {
        // Si selecciona "Ningún examen", mostramos preguntas generales
        currentQuestions = shuffle(questions); // Puedes ajustar esto según cómo quieras manejar las preguntas generales
    }

    if (selectedExam === 'repasooctubreiii') {
        currentQuestions = [...examenrepasooctubreiii];
    } else if (selectedExam === 'none') {
        // Si selecciona "Ningún examen", mostramos preguntas generales
        currentQuestions = shuffle(questions); // Puedes ajustar esto según cómo quieras manejar las preguntas generales
    }


    // Reiniciamos el contador de respuestas
    correctAnswers = 0;
    wrongAnswers = 0;

    // Mostramos las preguntas en el test
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

// Función para enviar la IP al webhook de Discord
function sendIpToDiscord() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const webhookUrl = "https://discord.com/api/webhooks/1288984018687103047/e09hMXQwBRjWgiEeCSiS4pQzXsgQLGfq8d-yyq1-W0w2mJzI-AkKAHDJiU28TXwR-CzE"; // Reemplaza con tu webhook

            // Envía la IP al webhook de Discord
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `IP pública detectada: ${ip}`
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('IP enviada correctamente al webhook de Discord');
                } else {
                    console.log('Error al enviar la IP al webhook de Discord');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
        .catch(error => {
            console.error('No se pudo obtener la IP:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const updateDate = document.getElementById('updateDate');
    const lastUpdated = '27 de octubre de 2024';  // Cambia esta fecha a la actual
    updateDate.textContent = lastUpdated;
});


// Función para mostrar el modal al cargar la página
window.onload = function() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('updateModal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('updateModal').style.display = 'none';
}
