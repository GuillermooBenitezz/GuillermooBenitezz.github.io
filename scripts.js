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
        question: "Es un tipo de fraude contra empresas que realizan transferencias electrónicas de dinero. donde el ciberdelincuente suplanta a uno de los proveedores e intercepta los correos de facturación que envía,  Cambiando la cuenta del banco donde realizar los pagos, de manera que se haga una transferencia a una  cuenta controlada por ellos, este tipo de fraude es conocido como:",
        options: ["A. Business E-mail Cornpromise (BEC).", 
        "B. Ransomware.", 
        "C. Skimming."],
        correctAnswer: "A"
    },
    {
        question: "Dentro de los EPI, ¿en qué categoría encontramos los equipos destinados a proteger contra riesgos mínimos ?",
        options: ["A. Categoria I.", 
        "B. Categoria II.", 
        "C. Categoria III."],
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
        question: "La inseguridad y la discriminación, ¿qué causas de la inmigración son?:",
        options: ["A. Económicas.", 
        "B. Sociales.", 
        "C. Politicas."],
        correctAnswer: "B"
    },
    {
        question: "¿Cuál de los siguientes delitos no necesita de un sujeto activo colectivo?",
        options: ["A. Ocupación de locales.", 
        "B. Desórdenes públicos.", 
        "C. Perturbación del orden."],
        correctAnswer: "C"
    },
    {
        question: "En cuanto a los representantes legales de las empresas de seguridad privada, señale la incorrecta",
        options: ["A. No haber sido sancionados en los dos o cuatro años anteriores por infraccIón grave o muy grave, respectivamente, en materia de seguridad privada.", 
        "B. No haber sido separados del servicio en las Fuerzas Armadas o en las Fuerzas y Cuerpos de Seguridad, ni haber ejercido funciones de control de las entidades o servicio& de seguridad, vigilancia o investigación privadas, ni de su personal o medios, como miembros de las Fuerzas y Cuerpos de Seguridad, en los dos o cuatro años anteriores.", 
        "C. No haber sido administrador de hecho o de derecho o apoderado general, en los diez años anteriores, enuna empresa que haya sido declarada en concurso ca    do Como culpable, o condenada mediante sentencia firme por delitos de insolvencia punible, contra la Hacienda Pública. contra la Seguridad Social o contra los  derechos de los trabajadores, por intromisióg lima en el ámbito de protección del derecho al honor, a la  intimidad personal y familiar o a la propia irMgen, Ineración del secreto de las comunicaciones o de otros  derechos fundamentales."],
        correctAnswer: "B"
    },
    {
        question: "EI maltrato de obra a quien sea o haya sido esposa del agresor:",
        options: ["A. Constituye un delito de lesiones con me al art 153 CP.", 
        "B. Constituye un delito de maltrato de obra a al no necesitar asistencia facultativa, tipificado en art 147.3 CP..", 
        "C. Constituye un delito contra las relaciones familiares."],
        correctAnswer: "A"
    },
    {
        question: "¿Prevé la Constitución española de 1978 la posibilidad de suspensión de forma individual de los derechos fundamentales?",
        options: ["A. No. sólo se pueden suspender de forma colectiva y según se establezca en caso de declaración de estado de alarma, excepcion o sitio.", 
        "B. No. En la Constitucidn española de 1978, se indica la suspensión de derechos fundamentales de forma individual coportaria una práctica abusiva que produciría responsabilidad penal.", 
        "C. Si. La suspension se aplica con la debida intervención judicial y con control parlamentario en los casos relacionados con actuación de bandas armadas o elementos terroristas."],
        correctAnswer: "C"
    },
    {
        question: "La coexistencia entre culturas diferentes, con intercambio entre ellas, que supongan un enriquecimiento mutuo, pero sometiéndose a los valores y principios de la sociedad del país que le acoge, ¿a qué modelo de convivencia corresponde?",
        options: ["A. Modelo francés.", 
        "B. Modelo español.", 
        "C. Modelo alemán."],
        correctAnswer: "C"
    },
    {
        question: "La persona que se hubiera beneficiado de subvenciones o ayudas percibidas por su condición de víctima estará obligada a reembolsar las cantidades recibidas en dicho concepto y al abono de los  gastos causados a la Administración por sus actuaciones de reconocimiento, información, protección y  apoyo si fuera condenada por:",
        options: ["A. Denuncia falsa.", 
        "B. Simulación de delito.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "En el siglo XIX se produjo en los EEUU, especialmente en California, un movimiento masivo de personas atraídas por el hallazgo de yacimientos de petróleo, fenómeno conocido por la fiebre del oro. ¿De qué tipo son estos movimientos?:",
        options: ["A. Movimientos rush.", 
        "B. Movimientos tumultuosos.", 
        "C. Las dos respuestas anteriores son correctas."],
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
        question: "Las diligencias de identificación, registro y comprobación practicadas por los agentes de las Fuerzas y Cuerpos de Seguridad con ocasión de actuaciones realizadas:",
        options: ["A. Estarán sujetas a las mismas formalidades que la detención.", 
        "B. No estarán sujetas a las mismas formalidades que la detención.", 
        "C. Ninguna respuesta es correcta."],
        correctAnswer: "B"
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
        question: "Son migraciones interurbanas no recurrentes:",
        options: ["A. Cuando no vuelven a su lugar de origen.", 
        "B. Cuando vuelven a su lugar de origen.", 
        "C. Ninguna es correcta."],
        correctAnswer: "A"
    },
    {
        question: "Procede la declaración de fallecimiento de una persona física:",
        options: ["A. Transcurridos diez anos desde que se haya producido la declaración de ausencia..", 
        "B. Pasados cinco años desde las ultimas noticias o, en defecto de estas, desde su desaparición, si al expirar dicho plazo hubiere cumplido el ausente setenta y cinco años..", 
        "C. En caso de siniestro, cumplidos ocho meses de un riesgo inminente de muerte por causa de violencia contra la vida, en que una persona se hubiese encontrado sin haber tenido."],
        correctAnswer: "B"
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
        question: "Para la Real Academia de la lengua, emigrar exige:,",
        options: ["A. Cambio de pais.", 
        "B. Establecerse en otro país.", 
        "C. Que el cambio de país sea por motivos económicos."],
        correctAnswer: "B"
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
        question: "Cuando un vehículo no prioritario tenga que prestar, excepcionalmente, un servicio de carácter urgente, ¿debe respetar las normas de circulación en las intersecciones?",
        options: ["A. Sí, especialmente en las intersecciones..", 
        "B. No, ya que está exento de cumplir estas normas en servicio prioritario.", 
        "C. Solo cuando circule fuera de poblado."],
        correctAnswer: "A"
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
        question: "Un marino que esté en posesión de un documento de identidad de la gente del mar en vigor podrá circular mientras dure la escala del buque por el recinto del puerto o por las localidades próximas, en un radio de:",
        options: ["A. 15 kilómetros y sin la obligación de presentarse en el puesto fronterizo, siempre que el interesado figure en la lista de tripulantes del buque al que pertenezca.", 
        "B. 5 kilómetros y sin la obligación de presentarse en el puesto fronterizo, siempre que el interesado figure en la lista de tripulantes del buque al que pertenezca.", 
        "C. 10 kilómetros y sin la obligación de presentarse en el puesto fronterizo, siempre que el interesado figure en la lista de tripulantes del buque al que pertenezca."],
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
        question: "Con la llegada de inmigrantes:",
        options: ["A. Aumenta el paro.", 
        "B. Disminuye el paro.", 
        "C. Aumentan los salarios."],
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
        question: "A partir de qué edad es obligatoria la expedición del DNI:",
        options: ["A. 14 años.", 
        "B. 16 años.", 
        "C. 18 años."],
        correctAnswer: "A"
    },
    {
        question: "Son características del Derecho:",
        options: ["A. La generalidad y superioridad.", 
        "B. La obligatoriedad y superioridad.", 
        "C. La generalidad y obligatoriedad."],
        correctAnswer: "C"
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
        question: "¿Cuál de los siguientes órganos del BCE está formado por los miembros que tendrán un mandato de 8 años no renovables?",
        options: ["A. Comité Ejecutivo.", 
        "B. Consejo de Gobierno.", 
        "C. Consejo General."],
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
        question: "A los efectos de la Ley 4/2000, representa discriminación todo acto que:",
        options: ["A. Directa o indirectamente, conlleve una distinción, exclusión, restricción o preferencia contra un extranjero basada en la raza, el color, la ascendencia o el origen nacional o étnico, las convicciones y prácticas religiosas, y que tenga como fin o efecto destruir o no limitar el reconocimiento o el ejercicio, en condiciones de igualdad, de los derechos humanos y de las libertades fundamentales en el campo político, económico, social o cultural.", 
        "B. Directamente, conlleve una distinción, exclusión, restricción o preferencia contra un extranjero basada en la raza. el color, la ascendencia o el origen nacional o étnico, las convicciones y prácticas religiosas, y que tenga como fin o efecto destruir o limitar el reconocimiento o el ejercicio, en condiciones de igualdad, de los derechos humanos y de las libertades fundamentales en el campo político, económico, social o cultural..", 
        "C. Directa o indirectamente, conlleve una distinción, exclusión, restricción o preferencia contra un extranjero basada en la raza, el color, la ascendencia o el origen nacional o étnico, las convicciones y prácticas religiosas. y que tenga como fin o efecto destruir o limitar el reconocimiento o el ejercicio, en condiciones de igualdad, de los derechos humanos y de las libertades fundamentales en el campo político, económico, social o cultural."],
        correctAnswer: "C"
    },
    {
        question: "¿Qué palabra vendría a definirse como sinónima de orden, de paz y de tranquilidad?:",
        options: ["A. Libertad.", 
        "B. Seguridad.", 
        "C. Confianza."],
        correctAnswer: "B"
    },
    {
        question: "¿Quién nombra al director del OLAF?",
        options: ["A. El Parlamento.", 
        "B. El Parlamento y el Consejo.", 
        "C. El Parlamento, el Consejo y la Comisión."],
        correctAnswer: "C"
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
        question: "Se establece en el artículo 123 de la Constitución:",
        options: ["A. Que el Presidente del Tribunal Supremo es nombrado por el Rey, a propuesta del Consejo General del Poder Judicial.", 
        "B. Que el Presidente del Tribunal Supremo es nombrado por el Rey, a propuesta del Ministerio Fiscal.", 
        "C. Que el Presidente del Tribunal Supremo es nombrado por el Rey, a propuesta del Tribunal Constitucional."],
        correctAnswer: "A"
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
        question: "Los Delegados del Gobierno ejercen las funciones propias de los Subdelegados del Gobierno:",
        options: ["A. En todas las Comunidades Autónomas, pues son los superiores jerárquicos.", 
        "B. Sólo en las Comunidades Autónomas uniprovinciales.", 
        "C. En las Comunidades Autónomas pluriprovinciales."],
        correctAnswer: "B"
    },
    {
        question: "Los oficiales de enlace serán nombrados y cesados por:",
        options: ["A. El director general de la Policía.", 
        "B. El Ministro de Interior.", 
        "C. El Ministro de Asuntos Exteriores."],
        correctAnswer: "A"
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
        question: "Señale cuál de los siguientes es un requisito para a cincesión de residencia por razones de arraigo social:",
        options: ["A. Permanencia en España durante un periodo mínimo de dos años.", 
        "B. Presentar un informe de arraigo que acredite su integración social, emitido por la Comunidad Autónoma en cuyo territorio tengan su domicilio habitual.", 
        "C. Contar con un contrato de trabajo firmado por el trabajador y el empresario en el momento de la solicitud para un periodo que no sea inferior a un año."],
        correctAnswer: "B"
    },
    {
        question: "Un marginado laboral sería:",
        options: ["A. Un parado.", 
        "B. Un jubilado.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
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
        question: "En protección internacional, en el momento de efectuar la solicitud, las persona extranjera será informada, en una lengua que pueda comprender, acerca de:",
        options: ["A. Que procedimiento que debe seguir.", 
        "B. De sus obligaciones en materia de plazos.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Los pros esos, actividades operaciones, equipos o productos que en ausencia de medidas preventivas específicas, originen riesgos para la seguridad y salud de los trabajadores que los desarrollan o utilizan, serán considerados como",
        options: ["A. Peligrosos.", 
        "B. Potencialmente peligrosos.", 
        "C. Potencialmente delicados."],
        correctAnswer: "B"
    },
    {
        question: "El aborto realizado por imprudencia se encuentra tipificado en:",
        options: ["A. Art 144 CP.", 
        "B. Art 145 CP.", 
        "C. Art 146 CP."],
        correctAnswer: "C"
    },
    {
        question: "Según el artículo 119 del Reglamento General de Circulación, se contemplan como exentos del uso del cinturón.",
        options: ["A. Los pasajeros que midan menos de 135cm, siempre y cuando vayan en la parte trasera del taxí que circule por vía urbana.", 
        "B. Los taxistas y distribuidores de mercancías.", 
        "C. Ambas respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Los grupos de personas que no constituyen un grupo social, forman:",
        options: ["A. Una agrupación de masas.", 
        "B. Un conglomerado.", 
        "C. Una categoría social."],
        correctAnswer: "B"
    },
    {
        question: "De las siguientes afirmaciones, señale cual de ellas es INCORRECTA:",
        options: ["A. Una norma general es siempre supletoria de una especial.", 
        "B. Una norma especial siempre predomina sobre la general.", 
        "C. Una norma posterior siempre prevalece sobre otra anterior."],
        correctAnswer: "C"
    },
    {
        question: "¿En qué tipo de emigración podríamos encuadrar la siguiente afirmación? La vendimia en Francia ha llegado a absorber hasta 150.000 trabajadores españoles por un período aproximado de tres meses:",
        options: ["A. Emigración natural.", 
        "B. Emigración económica.", 
        "C. Emigración estacional."],
        correctAnswer: "C"
    },
    {
        question: "Incorporará el objetivo de la integración entre inmigrantes y sociedad receptora, con carácter transversal a todas las políticas y servicios públicos",
        options: ["A. El Ministro del Interior.", 
        "B. El Gobierno.", 
        "C. Las Administraciones Públicas."],
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
        question: "A qué personas de entre las siguientes les será denegado el derecho de asilo?",
        options: ["A. A las que constituyan, por razones infundadas, un peligro para la seguridad de España.", 
        "B. A las personas que, habiendo sido objeto de una condena firme por delito grave constituyan una amenaza.", 
        "C. A las personas que, habiendo sido objeto de una condena firme por delito leve constituyan una amenaza."],
        correctAnswer: "B"
    },
    {
        question: "¿En qué consiste el efecto desvanecimiento de los prejuicios?",
        options: ["A. En que los prejuicios casi siempre son equivocados.", 
        "B. En que tienden a desaparecer con el paso del tiempo.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "B"
    },
    {
        question: "¿Dónde puede pedir una orden de protección una mujer víctima de violencia de género?",
        options: ["A. Ante las asociaciones de ayuda a la mujer.", 
        "B. Ante el juez,Ministerio Fiscal o dependencias policiales..", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "C"
    },
    {
        question: "Las Técnicas Reactivas son aquellas que",
        options: ["A. Aprovechan la experiencia que se obtiene de la investigación de los accidentes ocurridos.", 
        "B. Identifican el peligro y evalúan el riesgo.", 
        "C. Se adoptan para evitar futuros accidentes."],
        correctAnswer: "A"
    },
    {
        question: "La tarjeta acreditativa del reconocimiento de apátrida, que habilitará para residir en España y para:",
        options: ["A. Realizar actividades por cuenta ajena.", 
        "B. Realizar actividades por cuenta propia.", 
        "C. Las dos respuestas anteriores son correctas."],
        correctAnswer: "C"
    },
    {
        question: "El ACNUR tiene su sede en:",
        options: ["A. Suiza.", 
        "B. Suecia.", 
        "C. Nueva York."],
        correctAnswer: "A"
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
        question: "Cuando la víctima de un delito es un juez o un policía, se denomina:",
        options: ["A. Victimización policial o victimización judicial.", 
        "B. Victimización legal.", 
        "C. Las dos respuestas son falsas."],
        correctAnswer: "C"
    },
    {
        question: "¿Cuál no es una de las funciones excluidas del ámbito de la ley de seguridad privada, pero compatibles sin perjuicio de la normativa específica aplicable con las empresas y el personal?",
        options: ["A. El control detránsito en zonas reservadas o de circulación restringida en el interior de instalaciones en cumplimiento de la normativa interna de los mismos..", 
        "B. Las de comprobación y control del estado y funcionamiento de calderas, bienes e instalaciones en general, en cualquier clase de inmuebles, para garantizar su conservación y funcionamiento..", 
        "C. La conexión a centrales receptoras de alarmas de sistemas de prevención o protección contra incendios o de alarmas de tipo técnico o asistencial, o de sistemas o servicios de control o mantenimiento."],
        correctAnswer: "C"
    },
    {
        question: "Responsabilizarse del asesoramiento jurídico al Ministro en el desarrollo de las funciones que a éste le corresponden y, en particular, en el ejercicio de su potestad normativa y en la producción de los actos administrativos de la competencia de aquel, así como a los demás órganos del Ministerio.",
        options: ["A. Secretarios Generales Técnicos.", 
        "B. Subsecretarios.", 
        "C. Gabinetes."],
        correctAnswer: "B"
    },
    {
        question: "El Plan Estratégico Para la Igualdad Efectiva de Mujeres y Hombres estará vigente hasta el año:",
        options: ["A. 2024.", 
        "B. 2025.", 
        "C. 2026."],
        correctAnswer: "B"
    },
    {
        question: "Es el que se interpone contra las resoluciones que no gong fin a la vía administrativa y los actos de trámite cualificados:",
        options: ["A. Recurso de alzada.", 
        "B. Recurso de potestivo.", 
        "C. Recurso de revisión."],
        correctAnswer: "A"
    },
    {
        question: "Según el artículo 19 del Real Decreto 2/2006, de 16 de enero, por el que se establecen normas sobre prevención de riesgos laborales en la actividad de los funcionarios del Cuerpo Nacional de Policía, el servicio de prevención remitirá copia de la memoria anual que elabore a:",
        options: ["A. La Inspección de Personal y Servicios de Seguridad.", 
        "B. La Inspección de Trabajo y Seguridad Social.", 
        "C. La Comisión de seguridad y salud policial."],
        correctAnswer: "A"
    },
    {
        question: "Señala la respuesta correcta:",
        options: ["A. El control social es un derecho.", 
        "B. El control social es un deber.", 
        "C. Las dos respuestas son correctas."],
        correctAnswer: "C"
    },
    {
        question: "¿Se podrá llevar a cabo de manera inmediata la expulsión de un extranjero, que es residente, cuando haya sido condenado por una conducta tipificada como delito en el artículo 318 bis del Código Penal, una vez cumplida la pena privativa de libertad impuesta?",
        options: ["A. No, salvo determinados casos.", 
        "B. Sí, de manera general.", 
        "C. En este caso, al no reunir todos los requisitos de expulsión, la misma no podrá efectuarse."],
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
        question: "Señale la correcta:",
        options: ["A. El FMI fomenta la cooperación monetaria internacional, garantiza la estabilidad financiera y facilita el intercambio internacional.", 
        "B. El Indice de Desarrollo Humano (IDH) es un indicador del desarrollo humano elaborado por Naciones Unidas. Se basa en un indicador social estadístico compuesto por tres parámetros: vida larga y saludable educación y nivel de vida digno.", 
        "C. Las dos son correctas."],
        correctAnswer: "C"
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
    const lastUpdated = '11 de agosto de 2024';  // Cambia esta fecha a la actual
    updateDate.textContent = lastUpdated;
});
