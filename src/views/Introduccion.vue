<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")
    
    p.mt-4 En este módulo se estudiarán los conceptos básicos sobre la ingeniería de requisitos, sus fases técnicas y las herramientas necesarias para la gestión y especificación de los requisitos.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
