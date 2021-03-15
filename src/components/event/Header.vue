<template>
  <section class="header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h1 class="header-title" v-bind:class="text_color">{{ title }}</h1>
          <p class="header-desc">{{ desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "header",
  props: {
    title: String,
    desc: String,
    text_color: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  width: 100%;
  height: auto;
  padding: 6rem 0;
}

.header-title {
  padding: 2rem;
}
</style>
