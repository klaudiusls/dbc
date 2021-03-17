<template>
  <section id="speaker" class="speaker">
    <div class="row tab">
      <button class="col-md-6 tablinks" id="defaultOpen" style="display: none">
        Speaker<span class="float-right"
          ><i class="bi bi-caret-down-fill"></i
        ></span>
      </button>
    </div>

    <div id="speaker-tab" class="tabcontent">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row gx-0">
          <div class="col-sm-12 text-center color-po">
            <h2>Speakers</h2>
          </div>
          <div class="col-md-6 text-center">
            <img
              src="@/assets/img/quotes-1.png"
              class="img img-fluid rounded-circle"
              alt=""
              height="480px"
            />
          </div>

          <div class="col-md-6 d-flex flex-column justify-content-center">
            <div class="content">
              <h2 class="color-po">
                Embrace yourself. <br />
                Design your personal brand. <br />
                Act upon it.
              </h2>
              <p>
                <strong class="color-sb">Ria R Christiana</strong>
                <br />
                <span>Brand Strategist dbrandcom</span>
              </p>
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
/*Tab Content*/
/* Style the tab */
.tab {
  margin: 0;
  padding: 0 8rem;
  padding-top: 0.5rem;
  overflow: hidden;
  background-color: transparent;
  width: 100%;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  border: 1px solid white;
  outline: none;
  cursor: pointer;
  text-align: left;
  padding: 1rem 2rem;
  transition: 0.3s;
  font-size: 18px;
  font-weight: 700;
  color: white;
  background-color: var(--secondary-orange);
  border-radius: 16px 16px 0 0;
}

.tab button:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0; /* This will center the border. */
  width: 80%; /* Change this to whatever width you want. */
  padding-top: 4px; /* This creates some space between the element and the border. */
  border-bottom: 4px solid white; /* This creates the border. Replace black with whatever color you want. */
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: var(--secondary-orange);
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: var(--secondary-orange);
}

/* Style the tab content */
.tabcontent {
  display: block;
  padding: 8rem;
  padding-bottom: 3rem;
  border: 1px solid white;
  border-top: none;
  height: 100%;
}
/*--------------------------------------------------------------
# Speaker
--------------------------------------------------------------*/
.speaker .content {
  padding: 40px;
}

.speaker h2 {
  font-size: 32px;
  font-weight: 700;
}

.speaker p {
  margin: 5rem 0 2rem 0;
  font-size: 24px;
  line-height: 24px;
}

.speaker p span {
  margin: 5rem 0 2rem 0;
  font-size: 18px;
  line-height: 24px;
}

@media only screen and (max-width: 768px) {
  .tab {
    padding: 0.5rem 1rem 0px;
    margin-bottom: -1px;
    border-bottom: none;
  }

  .tabcontent {
    padding: 2rem;
    margin-bottom: -1px;
  }

  .speaker .content {
    position: relative;
    border: none;
    padding: 2rem 0.25rem;
  }

  .speaker img {
    max-height: 320px;
    border-radius: 1rem;
    box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.25);
  }

  .speaker h2 {
    font-size: 24px;
  }

  .speaker p {
    text-align: right;
    margin: 3rem 0 0 0;
    line-height: 24px;
  }
}
</style>
