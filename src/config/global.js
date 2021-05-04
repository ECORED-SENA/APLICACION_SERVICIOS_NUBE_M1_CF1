export default {
  global: {
    componenteFormativo: 'Ingeniería de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los saberes de ingeniería de requisitos: ciclo de vida del software fases y objetivos, modelos, características, caracterización de la fase de definición de requisitos y herramientas para el uso de captura de requisitos que se usan para el desarrollo del software.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    programaFormacion: 'Construcción de requisitos del software',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciclo de vida del software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fases ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Paradigmas de los modelos de ciclo de vida del software',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fase de definición de requisitos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Importancia de los requisitos.',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fase de definición de requisitos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Henry Eduardo Bastidas Paruma',
          'Jonathan Guerrero Astaiza',
          'Peter Emerson Pinchao Solis',
          'Zulema Yidney León Escobar',
        ],
        cargo: 'Experto temático',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: ['Alix Cecilia Chinchilla Rueda', 'Oscar Absalón Guevara'],
        cargo: 'Diseñador instruccional',
        centro: 'Centro de gestión industrial',
        regional: 'Regional Bogotá',
      },
      {
        nombre: ['José Gabriel Ortiz Abella', 'Julia Isabel Roberto'],
        cargo: 'Evaluador instruccional',
        centro: 'Centro para la industria y la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro industrial del diseño Y la manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'Juan Daniel Polanco Muñoz',
          'Nelson Iván Vera Briceño',
          'Wilson Andres Arenales Cáceres',
          'Yuly Andrea Rey Quiñonez',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: [
          'Lizeth Karina Manchego Suarez',
          'Luis Gabriel Urueta Alvarez',
          'Jhon Jairo Urueta Alvarez',
        ],
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: ['Milady Tatiana Villamil Castellanos'],
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boehm, B. W. (1979). A Spiral Model of Software Development and Enhancement. ACM Software Engineering Notes, 11(4), 22-42. ',
      link: '',
    },
    {
      referencia:
        'Durán, A., y Bernárdez, B. (2001). Metodología para el análisis de requisitos de sistemas software.',
      link:
        'https://www.infor.uva.es/~mlaguna/is1/materiales/metodologia_elicitacion.pdf',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo, L. (2018). Ingeniería de software. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'ISO/IEC 12207. (2008). Systems and software engineering - Software life cycle processes',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en',
    },
    {
      referencia:
        'McCracken, D., y Jackson, M. A. (1981). “A Minority Dissenting Opinion”. En W. W. Cotterman, J. D. Couger, N. L. Enger, F. Harold (Eds.). Systems Analysis and Design: A Foundation for the 1980s (pp. 551-553). Elsevier.',
      link: '',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). Requirements Engineering. CSU Long Beach. https://bit.ly/3rtBKXN',
      link: '',
    },
    {
      referencia:
        'Pfleeger, Sh. (2002). Ingeniería del software. Teoría y práctica. Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. atSistemas - Consultoría it blog. https://bit.ly/3cvumqz',
      link: '',
    },
    {
      referencia:
        'Rivadeneira, M., S. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29',
      link: ' https://doi.org/10.22305/ict-unpa.v5i1.66 ',
    },
    {
      referencia:
        'Sommerville I. (2011). Ingeniería del software. Addison-Wesley. ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Agil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Ciclo de vida software',
      significado:
        'aplicación de metodologías para el desarrollo del sistema software [AECC, 1986].',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el software. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
  ],
  complementario: [
    {
      texto:
        'Andrade, J. C. (2012). Desarrollo de un prototipo informático de consulta y asignación de plazas libres en parqueaderos. (Tesis pregrado). Pontifica Universidad Católica del Ecuador. http://repositorio.puce.edu.ec/handle/22000/6354',
      tipo: 'Tesis',
      link: ' http://repositorio.puce.edu.ec/handle/22000/6354',
    },
    {
      texto:
        'Pressman, R. (1993). Ingeniería del software: un enfoque práctico. McGraw-Hill Inc. https://doku.pub/documents/ingenieria-de-software-un-enfoque-practico6thedicion-rogerpressman1-p6lkgywex804',
      tipo: 'Libro',
      link:
        'https://doku.pub/documents/ingenieria-de-software-un-enfoque-practico6thedicion-rogerpressman1-p6lkgywex804',
    },
    {
      texto:
        'Norris, M., y Rigby, P. (1994). Ingeniería de software explicada. MegaByte-Noriega Editores. http://cic.puj.edu.co/wiki/lib/exe/fetch.php?media=materias:is1:01_lectura_ingenieria_software.pdf',
      tipo: 'Libro',
      link:
        'http://cic.puj.edu.co/wiki/lib/exe/fetch.php?media=materias:is1:01_lectura_ingenieria_software.pdf',
    },
    {
      texto:
        'Universidad Católica de Murcia. (11 de febrero de 2015). Ingeniería del software - Ciclo de vida - Raquel Martínez. [Video]. YouTube. https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s',
    },
    {
      texto:
        'Itunes U – UAEH. (10 de enero de 2019). Tipos de requerimientos. [Video]. YouTube. https://www.youtube.com/watch?v=PUyfzEzSUSg',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PUyfzEzSUSg',
    },
    {
      texto:
        'CavernaTech. (01 de septiembre de 2019). Requisitos funcionales y no funcionales. [Video]. YouTube. https://www.youtube.com/watch?v=Lv7XbZtnQ6A ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Lv7XbZtnQ6A',
    },
    {
      texto:
        'Salamea, J. (2016). Requisitos funcionales, no funcionales. [Video]. YouTube. https://www.youtube.com/watch?v=JXT1Hxth9bA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JXT1Hxth9bA',
    },
  ],
}
