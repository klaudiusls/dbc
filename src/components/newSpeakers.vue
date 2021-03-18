<template>
  <section id="speaker" class="speaker">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 section-head">
          <h2>Speaker</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 text-center">
          <img
            src="@/assets/img/quotes-1.png"
            class="img img-fluid rounded-circle"
            alt=""
          />
        </div>
        <div class="col-md-6 my-md-auto my-4">
          <div class="quotes">
            <div class="quotes-text">
              <p>
                Embrace yourself. <br />
                Design your personal brand. <br />
                Act upon it.
              </p>
            </div>
            <div class="quotes-speaker">
              <h3>Ria R Christiana</h3>
              <p>Brand Strategist dbrandcom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.section-head {
  padding: 2rem 1rem;
  padding-bottom: 3rem;
  text-align: center;
  color: var(--primary-orange);
}

.section-head h2 {
  font-size: 48px;
}

.col-md-6 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-height: 75%;
  max-height: 400px;
  width: auto;
}

.quotes {
  vertical-align: middle;
  color: #242323;
}

.quotes .quotes-text {
  padding: 1rem;
  font-size: 24px;
}

.quotes .quotes-speaker {
  padding: 1rem;
  margin-top: 1rem;
}

.quotes .quotes-speaker h3 {
  color: var(--secondary-blue);
}

@media only screen and (max-width: 418px) {
  .rounded-circle {
    border-radius: 5% !important;
  }

  .col-md-6 {
    padding: 0 2rem;
  }
}
</style>
