<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3.title-num 4
      .h3 Ingeniería de requisitos
    .row.mt-4
      .col-12
        figure
          img(src='@/assets/template/tema-4-1.png', alt='Texto que describa la imagen').w-100
        p.mt-4 Las siguientes son definiciones de ingeniería de requisitos de algunos autores.
    .row.mt-4
      .col-lg-12.mb-5.mb-lg-0
        .bloque-texto-c.p-4
          .h4.mb-2 La ingeniería de requisitos es la disciplina para desarrollar una especificación completa, consistente y no ambigua, la cual servirá como base para acuerdos comunes entre todas las partes involucradas y en dónde se describen las funciones que realizará el sistema.
          span - (Boehm, 1979).
      .col-lg-12.mb-5.mb-lg-0.mt-3
        .bloque-texto-c.p-4
          .h4.mb-2 La ingeniería de requisitos es el proceso de estudiar las necesidades del usuario para llegar a una definición de requisitos de sistema, hardware o software.
          span - (IEEE, 1990).
      .col-lg-12.mb-5.mb-lg-0.mt-3
        .bloque-texto-c.p-4
          .h4.mb-2 La ingeniería de requisitos puede considerarse como un proceso de descubrimiento y comunicación de las necesidades de clientes y usuarios y la gestión de los cambios de dichas necesidades.
          span - (Amador, 2000)
    .row.mt-5
      p El término IR #[strong “ingeniería de requisitos”] ha surgido para englobar los procesos de desarrollo y gestión de requisitos en el ciclo de vida del software, el primer término (ingeniería) se enfoca en las actividades de obtención, análisis, especificación y validación de los requisitos que permitirá alcanzar los objetivos del negocio y el segundo (requisitos) está centrado en la administración de los mismos y tiene como propósito central la gestión de los cambios y la trazabilidad, de esta forma la IR proporciona el mecanismo apropiado para:
      .col-sm.mb-5.mb-sm-0.mt-4
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Entender lo que el cliente quiere.
          li 
            i.fas.fa-angle-right
            | Analizar las necesidades.
          li 
            i.fas.fa-angle-right
            | Evaluar la factibilidad.
          li 
            i.fas.fa-angle-right
            | Negociar una solución razonable.
          li 
            i.fas.fa-angle-right
            | Especificar la solución sin ambigüedades.
          li 
            i.fas.fa-angle-right
            | Validar la especificación.
          li 
            i.fas.fa-angle-right
            | Administrar los requisitos conforme éstos se transforman en un sistema operacional.
    .row.mt-5
      .h6 Etapas de la ingeniería de requisitos
      p.mt-3 Hay cuatro (4) etapas en un proceso usual de ingeniería de requisitos y que son utilizadas para el desarrollo de un producto único, a saber: elicitación, análisis, especificación y validación de los requisitos.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mt-4
      .row(titulo="Elicitación").px-4
        p Actividad involucrada en el descubrimiento de los requisitos del sistema. Aquí los analistas deben trabajar junto con el cliente para descubrir el problema que el sistema debe resolver, los diferentes servicios que el sistema debe prestar y las restricciones que se pueden presentar.
        p.mt-3 Los principales objetivos que se deben alcanzar son los siguientes:
        .col-sm.mb-5.mb-sm-0.mt-3
          ul.lista-ul
            li.mb-0
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-texto.text-center
                .col-8
                  p Conocer el dominio del problema, de forma tal que los analistas puedan entenderse con los clientes y usuarios y sean capaces de transmitir dicho conocimiento al resto del equipo. 
            li.mb-0.mt-2
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-texto.text-center
                .col-8
                  p Descubrir necesidades reales entre clientes y usuarios, haciendo énfasis en aquellas que la mayor parte de las veces se asumen y toman por implícitas.  
            li.mb-0.mt-2 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-texto.text-center
                .col-8
                  p Consensuar los requisitos entre los propios clientes y usuarios hasta obtener una visión común de los mismos. 
      .row(titulo="Análisis").px-4
        p Sobre la base de la obtención realizada previamente, comienza esta fase la cual tiene como propósito descubrir problemas con los requisitos del sistema identificados hasta el momento, para ello se basa en los siguientes objetivos:
        .col-sm.mb-5.mb-sm-0.mt-3
          ul.lista-ul
            li.mb-0
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-texto.text-center
                .col-8
                  p Detectar conflicto en los requisitos que suelen provenir de distintas fuentes y presentar contradicciones o ambigüedades debido a su naturaleza informal. 
            li.mb-0.mt-2
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-texto.text-center
                .col-8
                  p Profundizar en el conocimiento del dominio del problema puede facilitar el proceso de construir un producto útil para clientes y usuarios (Durán, 2000).
        p.mt-3 En esta fase, el analista proporciona un sistema de retroalimentación que refina el entendimiento conseguido en la etapa de obtención.
      .row(titulo="Especificación").px-4
        p Aquí se documentan los requisitos acordados con el cliente, en un nivel apropiado de detalle. En la práctica, esta etapa se realiza conjuntamente con el análisis, por lo que se puede decir que la especificación es el “pasar en limpio” el análisis realizado previamente aplicando técnicas y/o estándares de documentación, como la notación UML (Lenguaje de Modelado Unificado), que es un estándar para el modelado orientado a objetos, por lo que los casos de uso y la obtención de requisitos basada en los casos de uso se utilizan cada vez más para la obtención de requisitos.
      .row(titulo="Validación").px-4
        p Por último, la validación garantiza que los requisitos, una vez analizados y resueltos los posibles conflictos, correspondan realmente a las necesidades de clientes y usuarios, para evitar que, a pesar de que el producto final sea técnicamente correcto, no sea satisfactorio. La validación puede llevar al analista a reescribir algunas especificaciones de requisitos y, en otros casos, a obtener nuevos, producto de la aparición de necesidades que hasta entonces estaban ocultas, para volver a evaluar el análisis inicial, o para corregir y perfeccionar el conjunto de requisitos documentados.
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
}
</script>

<style lang="sass" scoped>
.color-texto
  color: $color-sistema-texto !important
.text-align-right
  text-align: right
</style>
