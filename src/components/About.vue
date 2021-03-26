<template>
  <section id="about" class="about">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 section-head">
          <h2>What is <span class="color-po">Do Better Class?</span></h2>
        </div>
      </div>
      <div class="row"></div>
      <div class="row">
        <div class="col-sm-12 text-md-center text-left mb-4">
          <p>
            An answer for every fighter that wants to know how to increase their
            credibilities and capabilities under the scope of communications. We
            provide what you are seeking for in communications, personal
            branding, and marketing communication with free online classes. Get
            fresh insights and upgrade your business, career, personal life with
            extra tips & tricks by joining the classes frequently.
          </p>
        </div>
        <div class="col-sm-12 mb-4">
          <iframe
            v-resize="{ log: true }"
            width="100%"
            height="472"
            src="https://www.youtube.com/embed/mbkD3ACMLtk?rel=0&vq=hd720"
            style="position:relative;width:1px;min-width:100%;*width:100%;"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background: var(--secondary-blue) url("~@/assets/img/bg-blue.jpg") no-repeat
    top;
  color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.container-fluid {
  padding: 0 6rem;
}

.section-head {
  padding: 2rem 1rem;
  padding-bottom: 3rem;
  text-align: center;
  color: white;
}

.section-head h2 {
  font-size: 48px;
}

iframe {
  border-radius: 1rem;
}

p {
  line-height: 1.8;
}

@media only screen and (max-width: 418px) {
  .container-fluid {
    text-align: center;
    padding: 0 2rem;
  }

  .section-head {
    padding: 2rem 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: white;
  }

  .section-head h2 {
    font-size: 32px;
  }
}
</style>
