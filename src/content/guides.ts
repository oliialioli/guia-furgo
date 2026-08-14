import type { Guide } from './types'

const beforeDriving: Guide = {
  id: 'antes-de-conducir',
  title: 'Antes de conducir',
  description:
    'Una pasada rápida por la furgo para que nada se mueva, se abra o se caiga en marcha.',
  category: 'Conducir',
  icon: 'drive',
  keywords: [
    'arrancar',
    'checklist',
    'puertas',
    'ventanas',
    'mesa',
    'conducir',
    'carretera',
  ],
  placeholder: true,
  editorNote: 'Ajustar la lista al inventario y a los cierres reales de la furgo.',
  video: {
    kind: 'video',
    duration: '1:20',
    caption: 'Vídeo: comprobación rápida antes de salir',
  },
  steps: [
    {
      id: 'recoger-mesa',
      text: 'Recoge la mesa interior y cualquier tablero suelto. Si hay mesa exterior, plíegala y guárdala en su sitio.',
    },
    {
      id: 'objetos',
      text: 'Guarda objetos sueltos: vasos, ordenador, sartenes, crema solar. Cualquier cosa que pueda salir volando en una curva.',
    },
    {
      id: 'ventanas',
      text: 'Cierra ventanas laterales y claraboyas. Deja un poco de ventilación solo si el modelo lo permite en marcha — en esta furgo, ciérralas del todo.',
      info: 'Sustituir si vuestra claraboya sí puede viajar entreabierta.',
    },
    {
      id: 'puertas',
      text: 'Comprueba la puerta corredera, el portón trasero y la cabina. Tira suavemente de cada una para confirmar el cierre.',
      warning: 'No arranques si la corredera no está claramente encajada.',
    },
    {
      id: 'cama',
      text: 'Si habéis dejado la cama montada, recógela o asegúrala según el sistema de esta furgo.',
    },
    {
      id: 'exterior',
      text: 'Desconecta mangueras, cable eléctrico, sillas y calzos. Da una vuelta completa alrededor del vehículo.',
    },
    {
      id: 'altura',
      text: 'Mira la altura antes de entrar en parkings, túneles o ramajes: está en Datos de la furgo, bien visible.',
    },
  ],
  warning:
    'Si algo suena raro al arrancar (golpe, puerta, gas), para y revisa antes de seguir.',
  troubleshooting: [
    {
      id: 'puerta-no-cierra',
      title: 'Una puerta no cierra del todo',
      steps: [
        'Mira si hay un pestillo girado o un seguro infantil activado.',
        'Comprueba que no haya una mochila o cable en el marco.',
        'Consulta Puertas y cierres si el mecanismo es poco intuitivo.',
      ],
    },
  ],
}

const doors: Guide = {
  id: 'puertas',
  title: 'Puertas y cierres',
  description:
    'Cómo abrir y cerrar cabina, corredera y portón. Algunos pestillos no se ven a simple vista.',
  category: 'Furgo',
  icon: 'doors',
  keywords: [
    'puerta',
    'corredera',
    'portón',
    'llave',
    'cierre',
    'abrir',
    'cerrar',
  ],
  placeholder: true,
  editorNote: 'Documentar el mecanismo real de corredera, portón y cierre de cabina.',
  video: {
    kind: 'video',
    duration: '0:45',
    caption: 'Vídeo: abrir la corredera',
  },
  steps: [
    {
      id: 'cabina',
      text: 'Cabina: desbloquea con el mando o la llave. El botón del interior está en el panel de la puerta del conductor.',
    },
    {
      id: 'corredera',
      text: 'Corredera: tira del asidero hacia fuera y desliza hacia atrás. Si no cede, confirma que no está el seguro interior abajo.',
      media: { kind: 'image', alt: 'Asidero de la puerta corredera' },
    },
    {
      id: 'porton',
      text: 'Portón trasero: el tirador está en el centro. Levántalo con las dos manos; es pesado y se queda abierto solo.',
      warning: 'No dejes que el portón caiga: sujeta hasta notar el muelle.',
    },
    {
      id: 'cerrar',
      text: 'Para cerrar, acompaña la puerta hasta el final y escucha el clic. En la corredera hace falta un empujón firme, no un golpe seco.',
    },
    {
      id: 'desde-dentro',
      text: 'Desde dentro, el pestillo de la corredera suele estar en el marco delantero, a media altura. Gíralo hasta que la palanca quede horizontal.',
      info: 'Sustituir por la posición real del pestillo.',
    },
  ],
  troubleshooting: [
    {
      id: 'no-abre',
      title: 'No puedo abrir una puerta',
      steps: [
        'Prueba el mando cerca de la puerta, no desde el asiento.',
        'Mira si hay un seguro interior o un giratorio extra.',
        'No fuerces: si algo traba, para y ve a Ayuda.',
      ],
    },
  ],
}

const bed: Guide = {
  id: 'cama',
  title: 'Cama',
  description:
    'Pasar del salón a la cama y dejarlo otra vez como estar de día. Sin forzar las bisagras.',
  category: 'Interior',
  icon: 'bed',
  keywords: ['cama', 'dormir', 'colchón', 'salón', 'mesa', 'convertir'],
  placeholder: true,
  editorNote: 'Describir el sistema real: cama transversal, longitudinal, elevable, etc.',
  video: {
    kind: 'video',
    duration: '1:05',
    caption: 'Vídeo: de salón a cama',
  },
  steps: [
    {
      id: 'mesa',
      text: 'Baja o quita la mesa del salón. Guarda el pie de mesa para que no ruede por la noche.',
    },
    {
      id: 'cojines',
      text: 'Coloca los cojines en el orden marcado (si hay etiquetas en el reverso). El orden importa para que no queden huecos.',
      info: 'Si no hay etiquetas, añadir fotos del orden correcto.',
    },
    {
      id: 'tablero',
      text: 'Extiende el tablero o la base extra hasta que encaje. No te sientes encima hasta oír que ha entrado del todo.',
      media: { kind: 'gif', alt: 'Encaje del tablero de la cama' },
    },
    {
      id: 'colchon',
      text: 'Alisa el colchón y coloca sábanas. Deja un pasillo o un borde libre si necesitáis salir de noche.',
    },
    {
      id: 'recoger',
      text: 'Para recoger: sábanas a la bolsa, cojines a su sitio, tablero dentro, mesa otra vez arriba.',
    },
  ],
  warning:
    'No fuerces el tablero si encaja torcido: sácalo y vuelve a alinearlo. Las bisagras se rompen fácil.',
  troubleshooting: [
    {
      id: 'no-encaja',
      title: 'El tablero no encaja',
      steps: [
        'Quita los cojines y mira si hay una hebilla o un listón fuera de sitio.',
        'Comprueba que la mesa está del todo recogida.',
        'Prueba desde el otro lado de la furgo; a veces entra mejor en ángulo.',
      ],
    },
  ],
}

const kitchen: Guide = {
  id: 'cocina',
  title: 'Cocina',
  description:
    'Cómo usar el camping gas con calma: ventilar, encender, apagar y no dejar nada abierto.',
  category: 'Interior',
  icon: 'cook',
  keywords: [
    'cocina',
    'gas',
    'camping gas',
    'fogón',
    'cocinar',
    'bombona',
    'encender',
  ],
  placeholder: true,
  editorNote: 'Indicar si es camping gas extraíble, placa fija, o ambos. Marcar dónde está la bombona.',
  video: {
    kind: 'video',
    duration: '1:10',
    caption: 'Vídeo: encender el fogón',
  },
  steps: [
    {
      id: 'ventilar',
      text: 'Abre una ventana o la corredera antes de encender. El gas necesita aire y tú también.',
    },
    {
      id: 'ubicar',
      text: 'El camping gas está en el cajón de la cocina (ejemplo). Sácalo a una superficie estable y horizontal.',
      info: 'Sustituir por la ubicación real.',
    },
    {
      id: 'montar',
      text: 'Enrosca el cartucho o abre la llave según el modelo. No aprietes con herramientas.',
      warning: 'Si huele a gas, cierra todo, ventila y no enciendas nada. Ve a Ayuda.',
    },
    {
      id: 'encender',
      text: 'Acerca el mechero o pulsa el piezo. Enciende primero y luego sube el caudal. Llama azul y estable.',
    },
    {
      id: 'uso',
      text: 'No dejes el fogón solo. Usa cazuelas que quepan en la placa. Ten a mano una tapa por si hay que apagar rápido.',
    },
    {
      id: 'apagar',
      text: 'Cierra el gas, espera a que se enfríe y guarda el camping gas en su cajón. Nunca viajes con la llave abierta.',
    },
  ],
  warning:
    'Prohibido cocinar con la furgo en marcha. Prohibido usar el gas para calentar el interior.',
  troubleshooting: [
    {
      id: 'no-enciende',
      title: 'No se enciende',
      steps: [
        'Comprueba que el cartucho está bien enroscado y no está vacío.',
        'Confirma que la llave está abierta.',
        'Si sigue sin llama y huele a gas, no insistas: cierra, ventila y avísanos.',
      ],
    },
  ],
}

const water: Guide = {
  id: 'agua',
  title: 'Agua',
  description:
    'Nivel del depósito, cómo rellenar agua limpia y qué hacer con las aguas grises.',
  category: 'Agua',
  icon: 'water',
  keywords: [
    'agua',
    'depósito',
    'llenar',
    'grifo',
    'aguas grises',
    'bomba',
    'nivel',
  ],
  placeholder: true,
  editorNote: 'Marcar boca de llenado, vaciado de grises y cómo se lee el nivel en esta furgo.',
  video: {
    kind: 'video',
    duration: '0:50',
    caption: 'Vídeo: rellenar agua limpia',
  },
  steps: [
    {
      id: 'nivel',
      text: 'El nivel se ve en el panel interior (ejemplo: cuatro luces junto a la cocina). Si está en rojo o vacío, no uses la bomba.',
      info: 'Sustituir por el indicador real (panel, app, mirilla…).',
    },
    {
      id: 'llenar',
      text: 'La boca de llenado está en el lado izquierdo, junto al depósito (ejemplo). Usa una manguera potable y no la dejes sucia en el suelo.',
      media: { kind: 'image', alt: 'Boca de llenado de agua' },
    },
    {
      id: 'grifo',
      text: 'Abre el grifo con suavidad. Si escupe aire, es normal tras rellenar: deja correr un momento.',
    },
    {
      id: 'grises',
      text: 'Las aguas grises se vacían en un punto habilitado, nunca en un río ni en un parking. La palanca está cerca de la rueda trasera (ejemplo).',
      warning: 'Vaciar solo en áreas de servicio o campings. Es obligatorio en muchos sitios.',
    },
    {
      id: 'invierno',
      text: 'Si helara, deja un chorrito o pregunta: en esta furgo no hay calefacción de depósitos (ejemplo).',
    },
  ],
  troubleshooting: [
    {
      id: 'no-sale',
      title: 'No sale agua del grifo',
      steps: [
        'Mira el nivel del depósito limpio.',
        'Comprueba que la bomba está encendida (botón junto al panel).',
        'Escucha: si la bomba zumba sin parar, puede estar en seco. Apágala.',
      ],
    },
  ],
}

const shower: Guide = {
  id: 'ducha',
  title: 'Cómo usar la ducha',
  description:
    'Montar, usar y recoger la ducha exterior sin dejar la bomba trabajando en vacío.',
  category: 'Agua',
  icon: 'shower',
  keywords: [
    'ducha',
    'duchar',
    'manguera',
    'bomba',
    'compartimento',
    'agua',
    'exterior',
  ],
  placeholder: true,
  editorNote: 'Adaptar a ducha exterior, interior o portátil según el vehículo real.',
  video: {
    kind: 'video',
    duration: '1:30',
    caption: 'Vídeo: montar la ducha',
  },
  steps: [
    {
      id: 'compartimento',
      text: 'Abre el compartimento de la ducha (ejemplo: trampilla trasera, lado izquierdo).',
      media: { kind: 'image', alt: 'Compartimento de la ducha' },
    },
    {
      id: 'extraer',
      text: 'Extrae la alcachofa y la manguera. Desenróllala del todo para que no se kinke.',
    },
    {
      id: 'conectar',
      text: 'Conecta la manguera al racor hasta que encaje. Si gotea al abrir, no está bien sentada: vuelve a empujar.',
    },
    {
      id: 'bomba',
      text: 'Activa la bomba de agua en el panel interior. Espera dos segundos y abre la alcachofa.',
      warning: 'No dejes la bomba de agua encendida si el depósito está vacío.',
    },
    {
      id: 'usar',
      text: 'Dúchate con calma y corto. El depósito no es infinito. Evita jabones si estás sobre tierra: mejor sobre hierba o un plato de ducha.',
    },
    {
      id: 'recoger',
      text: 'Al terminar, apaga la bomba, deja escurrir la manguera, recógela y cierra el compartimento.',
    },
  ],
  warning:
    'Apaga siempre la bomba al guardar la ducha. En seco se quema en pocos minutos.',
  troubleshooting: [
    {
      id: 'no-sale-agua',
      title: 'No sale agua',
      steps: [
        'Comprueba que haya agua en el depósito limpio.',
        'Comprueba que la bomba esté encendida.',
        'Comprueba la conexión de la manguera.',
      ],
    },
    {
      id: 'poca-presion',
      title: 'Sale con muy poca presión',
      steps: [
        'Estira la manguera: un pliegue corta el caudal.',
        'El depósito puede estar bajo. Rellena agua limpia.',
      ],
    },
  ],
}

const electricity: Guide = {
  id: 'electricidad',
  title: 'Electricidad',
  description:
    'Luces, USB, enchufes y batería auxiliar. Qué se puede usar en parado y qué no agotar.',
  category: 'Energía',
  icon: 'power',
  keywords: [
    'electricidad',
    'batería',
    'usb',
    'enchufe',
    'luces',
    '12v',
    'auxiliar',
    'fusible',
  ],
  placeholder: true,
  editorNote: 'Documentar panel real, interruptor principal, USB, 220V e inversor si existe.',
  video: {
    kind: 'video',
    duration: '1:15',
    caption: 'Vídeo: panel eléctrico',
  },
  steps: [
    {
      id: 'principal',
      text: 'El interruptor principal de la habitación está en el panel junto a la puerta corredera (ejemplo). Sin él, no hay luces ni bomba.',
    },
    {
      id: 'bateria',
      text: 'La batería auxiliar es independiente de la de arranque. Mira el porcentaje o las barras antes de una noche sin enchufe.',
      media: { kind: 'image', alt: 'Indicador de batería auxiliar' },
    },
    {
      id: 'luces',
      text: 'Luces: interruptores en cada zona (cabina, cocina, cama). La luz más potente gasta más: usa la cálida por la noche.',
    },
    {
      id: 'usb',
      text: 'USB y 12V están en la cocina y junto a la cama. Sirven para el teléfono. No conectes un termo ni una plancha.',
    },
    {
      id: 'enchufes',
      text: 'Si hay enchufe de 220V, solo funciona con inversor o con cable a toma de camping (ejemplo: aclarar cuál es el caso).',
      info: 'Sustituir: ¿hay inversor? ¿de cuántos vatios? ¿dónde se enchufa el cable exterior?',
    },
    {
      id: 'ahorrar',
      text: 'Con frío, la calefacción es lo que más gasta. Por el día, un rato de viaje recarga. No dejes luces toda la noche.',
    },
  ],
  warning:
    'Si la auxiliar baja mucho, la nevera es lo primero que hay que vigilar. No agotes la batería de arranque: no está pensada para el habitáculo.',
  troubleshooting: [
    {
      id: 'sin-luz',
      title: 'No hay luces ni USB',
      steps: [
        'Comprueba el interruptor principal.',
        'Mira el nivel de la batería auxiliar.',
        'Revisa si ha saltado un fusible en la caja (ejemplo: bajo el asiento del conductor).',
      ],
    },
  ],
}

const heating: Guide = {
  id: 'calefaccion',
  title: 'Calefacción',
  description:
    'Encender, regular y apagar la calefacción de estacionamiento sin dejarla olvidada.',
  category: 'Energía',
  icon: 'heat',
  keywords: [
    'calefacción',
    'calefaccion',
    'diesel',
    'webasto',
    'calor',
    'termostato',
    'invierno',
  ],
  placeholder: true,
  editorNote: 'Indicar marca (Webasto, Eberspächer, gas) y dónde está el mando.',
  video: {
    kind: 'video',
    duration: '0:55',
    caption: 'Vídeo: encender la calefacción',
  },
  steps: [
    {
      id: 'mando',
      text: 'El mando está en la pared de la cocina (ejemplo). Mantén pulsado el botón de encendido dos segundos.',
    },
    {
      id: 'espera',
      text: 'Espera: tarda un poco en soplar aire caliente. Es normal oír el ventilador y un tick suave.',
    },
    {
      id: 'regular',
      text: 'Sube o baja la temperatura con + y −. Empieza a media y no la pongas al máximo nada más llegar.',
    },
    {
      id: 'ventilacion',
      text: 'Deja una ranura de ventilación arriba para que no condense. Calor con todo cerrado termina en cristales mojados.',
    },
    {
      id: 'apagar',
      text: 'Apaga con una pulsación larga. El ventilador puede seguir un minuto: es la refrigeración, no lo cortes en seco.',
    },
  ],
  warning:
    'No tapes la entrada ni la salida de aire. No uses la calefacción en recintos cerrados tipo parking cubierto sin ventilar.',
  troubleshooting: [
    {
      id: 'no-arranca',
      title: 'No enciende',
      steps: [
        'Comprueba que hay diésel en el depósito del vehículo: esta calefacción bebe de ahí (ejemplo).',
        'Mira la batería auxiliar. Si está muy baja, puede negarse a arrancar.',
        'Espera 30 segundos y reintenta. Si parpadea un código, anótalo y ve a Ayuda.',
      ],
    },
  ],
}

const fridge: Guide = {
  id: 'nevera',
  title: 'Nevera',
  description:
    'Encender, regular y qué mirar si deja de enfriar. Mejor en marcha o con buena batería.',
  category: 'Cocina',
  icon: 'fridge',
  keywords: ['nevera', 'frigorífico', 'frio', 'compresor', 'alimentos', 'hielo'],
  placeholder: true,
  editorNote: 'Anotar marca, si es compresor 12V, y el termostato recomendado.',
  video: {
    kind: 'video',
    duration: '0:40',
    caption: 'Vídeo: panel de la nevera',
  },
  steps: [
    {
      id: 'encender',
      text: 'Botón de encendido en el interior de la nevera, arriba a la derecha (ejemplo). Se ilumina en azul.',
    },
    {
      id: 'temperatura',
      text: 'Nivel 2 o 3 es suficiente para un viaje. El máximo gasta más y puede congelar la lechuga.',
    },
    {
      id: 'carga',
      text: 'No la llenes hasta tapar el ventilador trasero. Deja aire. Enfría mejor lo que ya está fresco, no una nevera de playa a 30 °C.',
    },
    {
      id: 'puerta',
      text: 'Cierra bien el pestillo. En marcha, un clic mal dado y se abre en la primera rotonda.',
      warning: 'Antes de conducir, tira suavemente de la puerta para comprobar el cierre.',
    },
    {
      id: 'apagar-devolver',
      text: 'Al devolver: vacía, apaga, deja la puerta entreabierta si os lo pedimos, y limpia lo que se haya derramado.',
    },
  ],
  troubleshooting: [
    {
      id: 'no-frio',
      title: 'No enfría',
      steps: [
        'Confirma que está encendida y no en modo noche extremo.',
        'Mira la batería auxiliar y el interruptor principal.',
        'Escucha el compresor: si no suena nunca y lleva horas, anótalo y contacta.',
      ],
    },
  ],
}

const windows: Guide = {
  id: 'ventanas',
  title: 'Ventanas y claraboyas',
  description:
    'Abrir, cerrar y usar oscurecedores sin romper las pestañas de plástico.',
  category: 'Interior',
  icon: 'windows',
  keywords: [
    'ventana',
    'claraboya',
    'techo',
    'oscurecedor',
    'mosquitera',
    'ventilar',
  ],
  placeholder: true,
  editorNote: 'Fotografiar el gesto de apertura de claraboya y de las ventanas laterales.',
  steps: [
    {
      id: 'lateral',
      text: 'Ventanas laterales: gira el cierre 90° y empuja el cristal hacia fuera. Se queda en varias posiciones.',
    },
    {
      id: 'claraboya',
      text: 'Claraboya: manivela o botón en el marco. Ábrela un poco para ventilar; del todo solo en parado y sin lluvia fuerte.',
      media: { kind: 'image', alt: 'Manivela de la claraboya' },
    },
    {
      id: 'mosquitera',
      text: 'La mosquitera va en el marco interior. No la fuerces si está enganchada al oscurecedor: sepáralos con dos dedos.',
    },
    {
      id: 'oscuro',
      text: 'El oscurecedor se estira de un lado a otro. Sujeta el centro para que no se desvíe y acabe fuera del raíl.',
    },
    {
      id: 'cerrar',
      text: 'Antes de conducir, claraboya cerrada y bloqueada. Las laterales también. Un cristal abierto silba y puede dañarse.',
    },
  ],
  warning: 'Nunca viajes con la claraboya abierta del todo. Un ramaje la arranca.',
  troubleshooting: [
    {
      id: 'no-cierra',
      title: 'La claraboya no cierra a ras',
      steps: [
        'Mira si el oscurecedor está a medio camino y tropieza.',
        'Gira la manivela hasta el tope, sin apretar de más.',
        'Si queda un canto levantado, no sigas: fotografía y avísanos.',
      ],
    },
  ],
}

const exterior: Guide = {
  id: 'exterior',
  title: 'Exterior',
  description:
    'Mesa, sillas y lo que viaja en el portón o el garaje. Montar, usar y volver a guardar.',
  category: 'Exterior',
  icon: 'exterior',
  keywords: ['mesa', 'sillas', 'exterior', 'toldo', 'calzos', 'garaje', 'portón'],
  placeholder: true,
  editorNote: 'Listar el inventario real: toldo, mesa, sillas, ducha, calzos, cable, etc.',
  video: {
    kind: 'video',
    duration: '1:00',
    caption: 'Vídeo: desplegar mesa y sillas',
  },
  steps: [
    {
      id: 'donde',
      text: 'Mesa y sillas van en el garaje trasero (ejemplo). Tira de la cinta, no de la tela de la silla.',
    },
    {
      id: 'mesa',
      text: 'La mesa se abre con las patas hacia abajo. Bloquea el clip central antes de apoyar nada encima.',
    },
    {
      id: 'sillas',
      text: 'Sillas: despliega el asiento primero y luego el respaldo. No te sientes a medio abrir.',
    },
    {
      id: 'toldo',
      text: 'Si hay toldo, sale con la manivela que está en el garaje. No lo dejes a media salida con viento.',
      info: 'Eliminar este paso si no hay toldo.',
    },
    {
      id: 'guardar',
      text: 'Todo mojado se guarda seco, o al menos escurrido. Antes de conducir: sillas, mesa, calzos y cable otra vez dentro.',
      warning: 'Da la vuelta a la furgo. Un calzo olvidado o una silla al sol se quedan en el parking.',
    },
  ],
  troubleshooting: [
    {
      id: 'toldo-atascado',
      title: 'El toldo no sale o no entra',
      steps: [
        'No fuerces la manivela.',
        'Mira si hay una guía torcida o una rama enganchada.',
        'Déjalo como esté y contacta: es mejor un toldo a medias que uno roto.',
      ],
    },
  ],
}

export const guides: Guide[] = [
  beforeDriving,
  doors,
  bed,
  kitchen,
  water,
  shower,
  electricity,
  heating,
  fridge,
  windows,
  exterior,
]

export function getGuide(id: string): Guide | undefined {
  return guides.find((guide) => guide.id === id)
}
