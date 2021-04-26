<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3.title-num 2
      .h3 Fase de definición de requisitos
    .row.mt-4
      .col-12.col-md-7.align-self-center
        p En esta primera fase del ciclo de vida del software, también llamada fase de análisis, se recopila, se examina y se formulan los requisitos del cliente, así como la verificación de las posibles restricciones que se puedan aplicar.
        p.mt-3 Por eso, la etapa de análisis en el ciclo de vida del software corresponde al proceso a través del cual se intenta descubrir qué es lo que realmente se necesita y se llega a una comprensión adecuada de los requerimientos del sistema (las características que el sistema debe poseer).
      .col-12.col-md-5
        figure(style="text-align: -webkit-center;")
          img(src='@/assets/template/tema-2-1.png', alt='Texto que describa la imagen').w-100
    p.mt-4 La etapa de análisis es esencial debido a que sin esta no se sabe con precisión qué es lo que se necesita y ningún proceso de desarrollo permitirá obtenerlo. El problema que se presenta es que al inicio del desarrollo el cliente no sepa exactamente lo que necesita; por tanto, se debe averiguar con ayuda de distintas técnicas. 
    p.mt-3 De otra parte, la inestabilidad de los requerimientos de un sistema es inevitable, pues se estima que 25% de los requerimientos iniciales de un sistema cambian antes de que el sistema comience a utilizarse. Por ello, muchas prácticas resultan efectivas para gestionar adecuadamente los requerimientos de un sistema y, en cierto modo, controlar su evolución.
    .h6.mt-4 En la siguiente tabla, se describen las actividades y los artefactos que se realizan en la fase de definición de requisitos.
    .tabla-a.mt-3 
      table
        caption Tabla 1/ Actividades y artefactos de la fase de definición de requisitos
        thead
          tr
            th Fase
            th Actividades
            th Artefactos
        tbody
          tr
            td(rowspan='6') Análisis (definición de requisitos).
          tr
            td Definición del alcance del proyecto.
            td 
          tr
            td Identificación del negocio.
            td Modelo del negocio.
          tr
            td Toma de requerimientos.
            td Análisis y realización de casos de uso.
          tr
            td Estudio de procesos de negocio.
            td Modelo de procesos y actividades de negocio.
          tr
            td Calendarización del proyecto.
            td Cronograma del proyecto.
</template>

<script>
export default {
  name: 'Tema2',
}
</script>

<style lang="sass" scoped></style>
