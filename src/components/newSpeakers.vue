<template>
  <section id="speaker" class="speaker">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 section-head">
          <h2>Speaker</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img
            src="@/assets/img/quotes-1.png"
            class="img img-fluid rounded-circle"
            alt=""
            height="480px"
          />
        </div>
        <div class="col-md-6 my-auto">
          <div class="quotes">
            <div class="quotes-text">
              <p>Embrace yourself. <br>
                Design your personal brand. <br>
                Act upon it.</p>
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

<script>
export default {
  name: "Speakers",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
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

.quotes .quotes-speaker h3{
  color: var(--secondary-blue);
}
</style>
