<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3.title-num 1
      .h3 Ciclo de vida del software
    .row
      .col-12
        p.mt-3 También conocido como (SDLC o Systems Development Life Cycle), es el proceso que se sigue para construir y hacer evolucionar un determinado software. El ciclo de vida permite iniciar una serie de fases mediante las cuales se procede a la validación y al desarrollo del software garantizando que se cumplan los requisitos para la aplicación y verificación de los procedimientos de desarrollo; para ello, se utilizan métodos del ciclo del software, que indican distintos pasos a seguir para el desarrollo de un producto.
      .bloque-texto-a.p-4.p-md-5.mb-5.mt-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            .h2.mb-0 Si bien existen diferentes ciclos de desarrollo de software, la normativa ISO/IEC/IEEE 12207:2017 establece que: 
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p [Es] un marco común para los procesos del ciclo de vida de los programas informáticos, con una terminología bien definida, a la que pueda remitirse la industria del software. #[strong Contiene procesos, actividades y tareas aplicables durante la adquisición, el suministro, el desarrollo, el funcionamiento, el mantenimiento o la eliminación de sistemas, productos y servicios informáticos]. Estos procesos del ciclo de vida se llevan a cabo mediante la participación de los interesados, con el objetivo final de lograr la satisfacción del cliente (s.p.).
    p.mt-5 A continuación, se indican cuáles son los elementos que integran un ciclo de vida:
    .row.mt-5
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-2.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Fases:
              p.mt-3 Una fase es un conjunto de actividades relacionadas con un objetivo en el desarrollo del proyecto. Se construye agrupando tareas (actividades elementales) que pueden compartir un tramo determinado del tiempo de vida de un proyecto. La agrupación temporal de tareas impone requisitos temporales correspondientes a la asignación de recursos (humanos, financieros o materiales).
    .row.mt-0
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-1.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-bot
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Entregables:
              p.mt-3 Son los productos intermedios que generan las fases. Pueden ser materiales o inmateriales (documentos, software). Los entregables permiten evaluar la marcha del proyecto mediante comprobaciones de su adecuación o no a los requisitos funcionales y de condiciones de realización previamente establecido.
    
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1   Fases.
    p.mt-5 Las fases del modelo de ciclo del software son: planificación, análisis, diseño, implementación, pruebas y mantenimiento, las cuales se describen en la siguiente figura.
    SlyderB.mb-5(:datos="datosSlyder").mt-5

    .titulo-segundo.mt-5
      #t_1_2.h4 1.2.	 Paradigmas de los modelos de ciclo de vida del software
    p.mt-5 Con la finalidad de proporcionar una metodología común entre el cliente y la empresa de software, se utilizan los modelos de ciclos de vida o paradigmas de desarrollo de software para plasmar las etapas y la documentación necesaria, de manera que cada fase se valide antes de continuar con la siguiente.
    p.mt-4 Un modelo de ciclo de vida de software es una vista de las actividades que ocurren durante el desarrollo de software e intenta determinar el orden de las etapas involucradas y los criterios de transición asociados entre estas.
    .row.mt-5
      .col-lg-6.mb-5.mb-lg-0
        p Según la norma 1074 IEEE se define al ciclo de vida del software como:
        .bloque-texto-b.p-4
          .bloque-texto-b__texto.h3.mb-0 Una aproximación lógica a la adquisición, el suministro, el desarrollo, la explotación y el mantenimiento del software
      .col-lg-6
        p  La ISO/IEC 12207 Information Technology / Software Life Cycle Processes señala que es: 
        p.mt-4 Un marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotación y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definición de los requisitos hasta la finalización de su uso (2008).
    p.mt-5 Existen modelos preestablecidos con los cuales se pude elaborar un proyecto; a continuación, se mencionan los diferentes paradigmas de modelos de ciclo de vida para desarrollar software.        
    .row.mt-5
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-4.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Paradigma tradicional
              p.mt-3 Los paradigmas tradicionales se identifican, fundamentalmente, por ser lineales, es decir se trata de completar cada proceso de principio a fin hasta que quede listo para avanzar a la segunda fase del ciclo del software.
              p.mt-3 Si bien es verdad que las metodologías actuales están basadas en lo que fueron los paradigmas tradicionales, hoy en día se ha evolucionado, sin embargo, los paradigmas tradicionales se mantienen.
    .row.mt-0
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-5.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-bot
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Desventaja:
              p.mt-3 Pérdida de tiempo si se encuentran errores en una fase avanzada porque al devolverse se debe pasar nuevamente por todas las fases y reestructurar de acuerdo con las modificaciones.
    .row.mt-0
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-6.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-bot
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Paradigma orientado a objetos:
              p.mt-3 Las etapas de desarrollo de software en el paradigma orientado a objetos, se conforma principalmente por la creación de clases, análisis de requisitos y el diseño. Con este paradigma se pretende que el código fuente sea reutilizable para otros proyectos.
    .row.mt-0
      .col-12
        .row
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/template/tema-1-7.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.border-bot
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              .h5 Paradigma de desarrollo ágil
              p.mt-3 El objetivo de este paradigma es el desarrollo de proyectos en poco tiempo, se simplifican procesos tediosos, se agilizan las fases del desarrollo y las interacciones se hacen en corto tiempo.
              p.mt-3 Una de las principales diferencias con los paradigmas anteriores es que el cliente se ve involucrado en el proyecto durante el desarrollo de este, así, el cliente sugiere mejoras, propone ideas y se mantiene al tanto del desarrollo del producto, a diferencia del paradigma tradicional y el orientado objeto donde el cliente únicamente está al principio.

    p.mt-5 A continuación, se revisan los modelos del paradigma tradicional más utilizados.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mt-4
      .row(titulo="Modelo en cascada.").px-5.mx-2
          p.mt-4 Uno de los primeros modelos de ciclo de vida del desarrollo fue establecido por W. Royce en 1970 y es conocido como el “modelo de cascada” (waterfall model). 
          p.mt-3 En su concepción básica, cada una de las actividades genera, como salidas, productos y modelos que son utilizados como entradas para el proceso subsiguiente; esto supone que una actividad debe terminarse (por lo menos, en algún grado) para empezar la siguiente.
          .col-12.mt-3.tarjeta.tarjeta--amarilla
            .row.my-3
              .col-3
              .col-6
                figure
                  img(src='@/assets/template/tema-1-8.png', alt='Texto que describa la imagen')
          figcaption #[strong Figura 1.] Modelo de cascada del ciclo de vida del desarrollo.      
      .row(titulo="Modelo espiral.").px-5.mx-2
        p.mt-4 Fue diseñado por Boehm en el año 1988 y se basa en una serie de ciclos repetitivos para ir ganando madurez en el producto final. El espiral se repite las veces que sea necesario hasta que el cliente o el usuario obtenga la satisfacción de sus necesidades.
        p.mt-3 En este modelo hay 4 actividades que envuelven a las etapas: planificación, análisis de riesgo, implementación y evaluación. Una de sus principales ventajas es que los riesgos van disminuyendo conforme avanzan los ciclos o interacciones
        .col-12.mt-4.tarjeta.tarjeta--amarilla
            .row.my-3
              .col-3
              .col-6
                figure(style="text-align: -webkit-center;")
                  img(src='@/assets/template/tema-1-9.png', alt='Texto que describa la imagen').d-none.d-lg-block.w-75
                  img(src='@/assets/template/tema-1-9.png', alt='Texto que describa la imagen').d-lg-none.w-100
                  figcaption(style="font-weight: 400;").tarjeta--amarilla.mt-4 #[strong Nota.] Adaptada de Boehm (2018)

        figcaption #[strong Figura 2.] Modelo espiral del ciclo de vida del desarrollo. 
      .row(titulo="Modelo interactivo o por prototipos.").px-5.mx-2
        p.mt-4 Este modelo consiste en un procedimiento que permite al equipo de desarrollo diseñar y analizar una aplicación que represente el sistema que será implementado (McCracken y Jackson, 1982).
        .h6.mt-3 Objetivos
        .row
          .col-lg-5.border-y.offset-1.mt-3
            .col-sm.my-2
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta(style="width: 60px;")
                    span A
                  | Son un medio eficaz para aclarar los requisitos de los usuarios e identificar las características de un sistema que deben cambiarse o añadirse. 
          .col-lg-5.border-y.offset-1.mt-3
            .col-sm.my-2
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta(style="width: 40px;")
                    span B
                  | Mediante el prototipo se puede verificar la viabilidad del diseño de un sistema. 
        .row.mt-4
          p Las etapas del modelo son:
          .col.mt-3
            .col-sm.my-2
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 1
                  | Colecta y refinamiento de los requerimientos y proyecto rápido.
                li.px-4
                  i.lista-ul__vineta.color-verde
                  | Análisis.
                li.px-4
                  i.lista-ul__vineta.color-verde
                  | Especificación del prototipo.
                li.mt-4 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 2
                  | Diseño rápido.
                li.mt-4 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 3
                  | Construcción del prototipo.
                li.mt-4 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 4
                  | Evaluación del prototipo por el cliente.
                li.mt-4 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 5
                  | Refinamiento del prototipo.
                li.px-4
                  i.lista-ul__vineta.color-amarillo
                  | Diseño técnico.
                li.px-4
                  i.lista-ul__vineta.color-amarillo
                  | Programación y test.
                li.px-4
                  i.lista-ul__vineta.color-amarillo
                  | Operación y mantenimiento.
                li.mt-4 
                  .lista-ol--cuadro__vineta(style="width: 25px;")
                    span 6
                  | Producto de ingeniería.
          .row.mt-4
            .col-8.offset-2.tarjeta--amarilla.py-4
              figure(style="text-align: -webkit-center;")
                img(src='@/assets/template/tema-1-10.png', alt='Texto que describa la imagen').w-50
            figcaption.col-8.offset-2 #[strong Figura 3.] Modelo de iterativo o por prototipos.

    p.mt-3 Con respecto a los modelos del ciclo de vida del paradigma ágil, estos se caracterizan por estar basados en etapas del ciclo de vida del software tradicional, pero combinándolas con algunas técnicas, al respecto se pueden revisar los siguientes: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mt-4
      .row(titulo="Modelo Scrum.").px-5.mx-2  
        p.mt-3 Este modelo se basa en el desarrollo incremental, es decir conforme pasen las fases y la iteración mayor será el tamaño del proyecto que se está desarrollando.
        p.mt-3 Los procesos que utiliza son:
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 1
                | Product Backlog.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 2
                | Sprint Backlog.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 3
                | Sprint Planning Meeting.
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 4
                | Daily Scrum.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 5
                | Sprint Review.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 6
                | Sprint Retrospective
        p.mt4 El Scrum consiste en realizar un análisis de los requerimientos del sistema (Product Backlog), señalar cuáles serán los objetivos a corto o mediano plazo dentro de un sprint, o sea, la fase de desarrollo. Posteriormente, los desarrolladores harán lo suyo, se realizarán algunas pruebas y se retroalimentará de acuerdo con lo conseguido al terminar la última fase.
        .h5.mt-4 Ventajas
        ul
          li.px-4
            i.lista-ul__vineta.color-amarillo
            | #[strong Gestión regular de las expectativas del usuario:] los usuarios participan y proponen soluciones
          li.px-4.mt-2
            i.lista-ul__vineta.color-amarillo
            | #[strong Resultados anticipados:] no es necesario esperar hasta el final para ver resultados
          li.px-4.mt-2
            i.lista-ul__vineta.color-amarillo
            | #[strong Flexibilidad y adaptación:] se adapta a cualquier contexto, área o sector.
          li.px-4.mt-2
            i.lista-ul__vineta.color-amarillo
            | #[strong Gestión sistemática de riesgos:] los problemas son gestionados en el mismo momento de su aparición.
        .row.mt-4
          .col-10.offset-1.tarjeta--amarilla.py-4
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-1-11.png', alt='Texto que describa la imagen').w-75
          figcaption.col-10.offset-1 #[strong Figura 4.] Modelo ágil Scrum.
      .row(titulo="Modelo Kanban.").px-5.mx-2 
        p.mt-3 David J. Anderson (reconocido como el líder de pensamiento de la adopción del Lean/Kanban para el trabajo de conocimiento), formuló el método Kanban como una aproximación al proceso evolutivo e incremental y al cambio de sistemas para las organizaciones de trabajo. El método está enfocado en llevar a cabo las tareas pendientes y los principios más importantes pueden ser divididos en cuatro principios básicos y seis prácticas. 
        p.mt-3 El modelo Kanban es uno de los modelos más visuales de las metodologías ágiles; este consiste en la creación de un tablero con etiquetas, donde se seccionan cada una de las fases de su desarrollo, además se clasifican de acuerdo con los equipos de trabajo y se les asignan objetivos a corto, mediano y largo plazo.
        p.mt-3 Mediante la metodología japonesa Kanban se:
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 1
                | Define el flujo de trabajo.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 2
                | Establecen las fases del ciclo de producción.
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 3
                | Stop Starting, start finishing.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 4
                | Tiene un control.
        .row.mt-4
          .col-10.offset-1.tarjeta--amarilla.py-4
            .h3.text-center Kanban.
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-1-12.png', alt='Texto que describa la imagen').w-75
              figcaption(style="font-weight: 400;").tarjeta--amarilla.mt-4 #[strong Nota.] Adaptada de Anderson. 
          figcaption.col-10.offset-1 #[strong Figura 5.] Modelo ágil Kanban.
      .row(titulo="Modelo XP o programación extrema.").px-5.mx-2           
        p.mt-3 La programación extrema o eXtreme Programming (XP) es un enfoque de la ingeniería de software formulado por Kent Beck, autor del primer libro sobre este tema: Extreme Programming Explained: Embrace Change (1999). Esta metodología es adaptable según las necesidades y requerimientos a implementar, además, el cliente se encuentra involucrado en el proceso de desarrollo lo que hace que el producto pueda ser terminado en un menor tiempo.
        p.mt-3 Características principales de la programación extrema:
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 1
                | Tipo de desarrollo iterativo e incremental. 
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 2
                | Pruebas unitarias.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 3
                | Trabajo en Equipo.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 4
                | Trabajo junto al cliente.
        .col-12.col-lg-5.mt-3
          .col-sm.my-2
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 5
                | Corrección de errores. 
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 6
                | Reestructuración del código.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 7
                | El código es de todos.
              li.mt-4 
                .lista-ol--cuadro__vineta(style="width: 25px;")
                  span 8
                | El código simple es la clave.
        .row.mt-4
          .col-10.offset-1.tarjeta--amarilla.py-4
            .h3.text-center Programación Extrema (XP).
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-1-13.png', alt='Texto que describa la imagen').w-75
              figcaption(style="font-weight: 400;").tarjeta--amarilla.mt-4 #[strong Nota.] Adaptada de Muradas (2020). 
              
          figcaption.col-10.offset-1 #[strong Figura 6.] Modelo XP
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'FASE PLANIFICACIÓN:',
        texto:
          'En esta primera fase se realiza el planteamiento del problema, se definen alcances y objetivos del software. <br> <br> <strong> Objetivos: </strong> estudio de viabilidad, realizar planificación detallada.',
        imagen: require('@/assets/template/tema-1-3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'FASE ANÁLISIS (definición de requisitos):',
        texto:
          'Esta fase busca definir los requisitos que son los que dirigirán el desarrollo del proyecto de software. <br> <br> <strong> Objetivos: </strong> conocer los requisitos, asegurar que los requisitos son alcanzables, formalizar acuerdo con el cliente.',
        imagen: require('@/assets/template/tema-1-14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'FASE DISEÑO:',
        texto:
          'En esta fase se estudian posibles opciones de implementación para el software que hay que construir, estructura general del mismo. <br> <br> <strong> Objetivos: </strong> Identificar soluciones tecnológicas, asignar recursos materiales, proponer identificar y seleccionar, establecer métodos de validación, ajustar especificaciones. ',
        imagen: require('@/assets/template/tema-1-15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'FASE PRUEBAS:',
        texto:
          'Esta fase busca detectar fallos cometidos en las etapas anteriores para corregirlos. <br> <br> <strong> Objetivos: </strong> Realizar los ajustes necesarios para corregir posibles errores o inconsistencias.',
        imagen: require('@/assets/template/tema-1-16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'FASE MANTENIMIENTO:',
        texto:
          'En esta fase se realizan tres puntos referenciados: mantenimiento correctivo, mantenimiento adaptativo y mantenimiento perfectivo.<br> <br> <strong> Objetivos: </strong> Operación asegurar que el uso del proyecto es el que se pretendía, mantenimiento.',
        imagen: require('@/assets/template/tema-1-16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.bg-gris
  background-color: #E8E8E8
.color-verde
  color: #009688
.color-amarillo
  color: #FFA726
</style>
