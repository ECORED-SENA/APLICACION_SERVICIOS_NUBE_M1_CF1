<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3.title-num 3
      .h3 Requisitos
    .row.mt-4
      .col-lg-6.mb-5.mb-lg-0
        .bloque-texto-c.p-4
          .h4.mb-2 Un requisito es una condición o capacidad que necesita el usuario para resolver un problema o conseguir un objetivo determinado (IEEE, 1990). 
      .col-lg-6.align-self-center
        p Los requisitos comunican las expectativas de los consumidores de productos software; de otra parte, los requisitos pueden ser obvios o estar ocultos, conocidos o desconocidos, esperados o inesperados, desde el punto de vista del cliente.
    .titulo-segundo.mt-5
      #t_3_1.h4 3.1   Importancia de los requisitos.
    p.mt-4 Los requisitos cobran importancia dentro del ciclo de vida del software, puesto que:
    .row.mt-4
      .col-12.col-md-8
        .row.mt-2
          .col-12
            .row
              .col-1.col-lg-1.offset-1.align-self-center.justify-content-center
                img(src='@/assets/template/tema-3-1.png', alt='', style='margin-right: -100px').w-100
              .col-9.py-3.border-y
                .col-sm.mb-5.mb-sm-0.mt-2.mx-5
                  p.mt-3 Establecen el alcance del trabajo subsecuente, pueden definir estrategias de desarrollo, riesgos, tomar decisiones de negocio (viabilidad de negocio), de proyecto (tiempo, recursos), de sistema (arquitectura).
        .row.mt-0
          .col-12
            .row
              .col-1.col-lg-1.offset-1.align-self-center.justify-content-center
                img(src='@/assets/template/tema-3-2.png', alt='', style='margin-right: -100px').w-100
              .col-9.py-3.border-bot
                .col-sm.mb-5.mb-sm-0.mt-2.mx-5
                  p.mt-3 Indican al equipo del proyecto qué requieren los usuarios (necesidades de negocio).
        .row.mt-0
          .col-12
            .row
              .col-1.col-lg-1.offset-1.align-self-center.justify-content-center
                img(src='@/assets/template/tema-3-3.png', alt='', style='margin-right: -100px').w-100
              .col-9.py-3.border-bot
                .col-sm.mb-5.mb-sm-0.mt-2.mx-5
                  p.mt-3 El éxito o fracaso de un proyecto está altamente influenciado por la calidad de los requisitos y el proceso para gestionarlos durante el desarrollo de un producto.
      .col-4.d-none.d-md-block
        figure(style="text-align: -webkit-center;")
          img(src='@/assets/template/tema-3-4.png', alt='Texto que describa la imagen').w-100
    p.mt-5 En la siguiente figura se pueden revisar las características que los requisitos deben cumplir de acuerdo con Pfleeger (2002).
    TabsA.mt-4
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Necesario.")
        h4 Necesario.
        p Si se tiene alguna duda acerca de la necesidad del requerimiento, se puede preguntar #[strong “¿qué sería lo peor de no incluirlo?”]. Si no se encuentra una respuesta o cualquier consecuencia, entonces es probable que no sea un requerimiento necesario.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Completo.")
        h4 Completo.
        p Un requerimiento está completo si no necesita ampliar detalles en su redacción, es decir, si se proporciona la información suficiente para su comprensión.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Consistente.")
        h4 Consistente.
        p Un requerimiento es consistente si no es contradictorio con otro requerimiento.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Correcto.")
        h4 Correcto.
        p Acuerdo entre dos partes. Contiene una sola idea
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Factible.")
        h4 Factible.
        p El requerimiento deberá de ser totalmente factible y dentro de presupuesto, calendario y otras restricciones, si se tiene alguna duda de su factibilidad, hay que investigar, generar pruebas de concepto para saber su complejidad y factibilidad, si aun así el requerimiento es no factible, hay que revisar la visión del sistema y replantear el requerimiento.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Modificable.")
        h4 Modificable.
        p Los cambios en los requisitos deben hacerse de manera sistemática, y debe tenerse en cuenta su impacto en otros requisitos.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Priorizado.")
        h4 Priorizado.
        p Categorizar el requerimiento nos ayuda a saber el grado de necesidad del mismo: esencial/crítico, deseado, opcional verificable.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Verificable.")
        h4 Verificable.
        p Si un requerimiento no se puede comprobar, entonces, ¿cómo se sabe si se cumplió con él o no? Debe ser posible verificarlo ya sea por inspección, análisis de prueba o demostración. Cuando se escriba un requerimiento, se deberán determinar los criterios de aceptación.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Rastreable.")
        h4 Rastreable.
        p La especificación se debe organizar de tal forma que cada función del sistema se pueda rastrear hasta su conjunto de requerimientos correspondiente. Facilita las pruebas y la validación del diseño.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Claro.")
        h4 Claro.
        p Un requerimiento es conciso si es fácil de leer y entender, su redacción debe ser simple y clara para quienes lo consulten en un futuro.
    .titulo-segundo.mt-5
      #t_3_2.h4 3.2   Clasificación
    p.mt-4 Los requerimientos se pueden definir de distintas maneras, la primera clasificación se encuentra relacionada con el nivel de descripción con la que cuentan estos y dentro de este tipo de clasificación se encuentran:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mt-4
      .row(titulo="Requerimientos de usuario.").px-5.mx-2
          .col-5.d-none.d-md-block
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-3-5.png', alt='Texto que describa la imagen').w-100
          .col-12.col-md-7.align-self-center
            p Son declaraciones, en lenguaje natural y en diagramas, de los servicios que se espera que el sistema proporcione y de las restricciones bajo las cuales debe funcionar.

      .row(titulo="Requerimientos de sistema.").px-5.mx-2
          .col-5.d-none.d-md-block
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-3-6.png', alt='Texto que describa la imagen').w-100
          .col-12.col-md-7.align-self-center
            p Estos requerimientos establecen con detalle las funciones, servicios y restricciones operativas del sistema. El documento de requerimientos del sistema deberá ser preciso, y definir exactamente lo que se va a desarrollar.
    p.mt-4 En la siguiente clasificación se observa la que se da a los requerimientos del sistema, la cual se encuentra dividida con base en lo que se va a describir, las clasificaciones son:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mt-4
      .row(titulo="Requerimientos funcionales.").px-5.mx-2
          .col-5.d-none.d-md-block
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-3-7.png', alt='Texto que describa la imagen').w-100
          .col-12.col-md-7.align-self-center
            p Son declaraciones de los servicios que debe proporcionar el sistema, de la manera en que este debe reaccionar a entradas particulares; o también pueden declarar explícitamente lo que el sistema no debe hacer.

      .row(titulo="Requerimientos no funcionales:").px-5.mx-2
          .col-5.d-none.d-md-block
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/template/tema-3-8.png', alt='Texto que describa la imagen').w-100
          .col-12.col-md-7.align-self-center
            p Son restricciones de los servicios o funciones ofrecidos por el sistema. Incluyen restricciones de tiempo, sobre el proceso de desarrollo y estándares. Dentro de estos requerimientos se encuentra todo lo referente a la fiabilidad, el tiempo de respuesta y la capacidad de almacenamiento.
    p.mt-5 En la siguiente tabla se presentan algunos ejemplos sobre requisitos funcionales y no funcionales.
    .tabla-a.mt-3 
      table
        caption Tabla 2/ Requisitos.
        thead
          tr
            th Funcionales
            th No funcionales
        tbody.text-center
          tr
            td Se debe ingresar cédula, nombre y teléfono de cada cliente.
            td Las consultas deben resolverse en menos de 3 segundos.
          tr
            td Se requiere un listado de clientes por zona.
            td El lenguaje de programación debe ser Java.
          tr
            td(colspan='2') Se puede ampliar el tema de requisitos funcionales y no funcionales en los videos que se proponen dentro del material complementario.



</template>

<script>
export default {
  name: 'Tema2',
}
</script>

<style lang="sass" scoped>
table
  background-color: #EDF2F8
.border-table
  border: solid 1px
  tr, th, td
    border: solid 1px
    text-align: center
  p
    text-align: left
  thead
    border: none
.border-y
  border-top: solid 1px #437795
  border-bottom: solid 1px #437795
.border-y-morado
  border-top: solid 2px $color-curso-c
  border-bottom: solid 2px $color-curso-c
.border-top
  border-top: solid 1px #437795 !important
.border-top-gris
  border-top: solid 2px #C9C9C9 !important
.borde-y-punteado
  border-top: solid
  border-top: dotted
  border-color: #8E8E8E
.border-morado
  border: solid 4px $color-curso-c
  border-radius: 30px
.bg-amarillo-claro
  background-color: #FFFCF5
.bg-gris
  background-color: #D9E4EA
.bg-verde
  background-color: #00B050
.bg-rojo
  background-color: #FF3F3F
.bg-naranja
  background-color: #FFC269
.rounded
  border-radius: 20px !important
.color-white
  color: $white
.font-normal
  font-weight: normal !important
ul li::marker
  color: red
.text-align-right
  text-align: right
</style>
