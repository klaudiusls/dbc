<template>
  <section id="event" class="event">
    <div class="row tab">
      <button
        class="col-sm-4 tablinks tab-sb"
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
      >
        Webinar
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
      <button
        class="col-sm-4 tablinks tab-so"
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
      >
        Podcast
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
      <button
        class="col-sm-4 tablinks tab-po"
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
      >
        Video
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
    </div>

    <div
      id="webinar-tab"
      class="tabcontent tab-sb no-border"
      v-if="activetab === 1"
    >
      <div class="container-fluid">
        <div class="row webinar-layout">
          <div class="col-md-6 text-poster my-auto" data-aos="fade-right" data-aos-offset="320" data-aos-easing="ease-in-sine">
            <img class="img-fluid" src="@/assets/img/text-poster-po.png" alt="" />
            <a href="https://loket.com/event/dbclass-quarter-life-breakthrough" target="_blank"><button class="btn-save">Save your seat</button></a>
          </div>
          <div class="col-md-6 text-right" data-aos="fade-right" data-aos-offset="320" data-aos-easing="ease-in-sine">
            <img
              class="img-fluid photo-poster"
              src="@/assets/img/photo-poster.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div
      id="podcast-tab"
      class="tabcontent tab-so no-border"
      v-if="activetab === 2"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h2>Magical things will appear here!</h2>
          </div>
        </div>
      </div>
    </div>

    <div
      id="video-tab"
      class="tabcontent tab-po no-border"
      v-if="activetab === 3"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h2>Magical things will appear here!</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      activetab: 1,
    };
  }
};
</script>

<style scoped>
/*Tab Content*/
/* Style the tab */
.tab {
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  overflow: hidden;
  background-color: white;
  width: 100%;
}

/* Style the buttons inside the tab */
.tab button {
  outline: none;
  cursor: pointer;
  text-align: left;
  padding: 1rem 2rem;
  padding-bottom: .5rem;
  transition: 0.3s;
  font-size: 18px;
  font-weight: 700;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
}

.tab-po {
  color: white;
  border: transparent;
  background-color: var(--primary-orange);
}

.tab-sb {
  color: white;
  border: transparent;
  background-color: var(--secondary-blue);
}

.tab-so {
  color: white;
  border: transparent;
  background-color: var(--secondary-orange);
}

.tab button:after {
  display: none;
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0; /* This will center the border. */
  width: 80%; /* Change this to whatever width you want. */
  padding-top: 4px; /* This creates some space between the element and the border. */
  border-bottom: 4px solid transparent; /* This creates the border. Replace black with whatever color you want. */
}

/* Change background color of buttons on hover 
.tab button:hover {
  background-color: var(--secondary-blue);
}*/

.tab .tab-po:hover {
  background-color: #F03022;
  transition: ease-in-out background .5s;
}

.tab .tab-so:hover {
  background-color: #F05800;
  transition: ease-in-out background .5s;
}

.tab .tab-sb:hover {
  background-color: #210588;
  transition: ease-in-out background .5s;
}

/* Create an active/current tablink class 
.tab button.active {
  background-color: var(--secondary-purple);
}*/

/* Style the tab content */
.tabcontent {
  width: 100%;
  display: block;
  padding: 5rem;
  padding-bottom: 3rem;
  width: 100%;
  border: transparent;
}

.no-border {
  border-left: none;
  border-right: none;
}

.event .register {
  border: 4px solid white;
  height: 100%;
  padding: 2rem;
  border-radius: 18px;
}

.event h2 {
  font-size: 48px;
  font-weight: 700;
  color: white;
}

#webinar-tab {
  background: var(--secondary-blue) url("~@/assets/img/bg-blue.jpg") no-repeat fixed;
  padding: 0;
  width: 100%;
}

#webinar-tab .container-fluid {
  padding: 6rem 6rem;
  padding-bottom: 0;
  width: 100%;
}

.photo-poster {
  max-height: 700px;
}

.btn-save {
    margin: 0;
    margin-top: 2rem;
    margin-left: 1.5rem;
    padding: 1rem 2rem;
    border: transparent;
    border-radius: 2rem;
    font-weight: 700;
    background-color: white;
}

.btn-save:hover {
  transition: ease-in 0.2s;
    color: white;
    background-color: var(--secondary-orange);
}

#podcast-tab {
  background: var(--secondary-orange) url("~@/assets/img/bg-so.jpg") no-repeat fixed;
  padding: 8rem;
  width: 100%;
  text-align: center;
}

#video-tab {
  background: var(--primary-orange) url("~@/assets/img/bg-po.jpg") no-repeat fixed;
  padding: 8rem;
  width: 100%;
  text-align: center;
}

@media only screen and (max-width: 418px) {
  .tab {
    width: 100%;
    padding: 0.5rem 0px;
    padding-bottom: 0;
    margin-bottom: -2px;
  }

  .tab button {
  outline: none;
  cursor: pointer;
  text-align: left;
  padding: 1rem 2rem;
  padding-bottom: .5rem;
  transition: 0.3s;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
}

  .tabcontent {
    border-top: 0;
    width: 100%;
    padding: 2rem 1rem;
    margin-bottom: -1px;
  }

  #webinar-tab {
    background: var(--secondary-blue) url("~@/assets/img/bg-blue.jpg") no-repeat fixed;
    padding: 0;
    width: 100%;
  }

  #webinar-tab .container-fluid {
    padding: 3rem 1rem;
    padding-bottom: 0;
    width: 100%;
  }

  .text-poster {
    margin-top: 2rem;
  }

  .photo-poster {
    margin-top: 2rem;
  }

  .event .register {
    margin-top: 2rem;
    border: 4px solid white;
    height: 100%;
    padding: 2rem 1rem;
    border-radius: 18px;
  }

  .event h2 {
    font-size: 32px;
    font-weight: 700;
    color: white;
  }

  #podcast-tab {
  background: var(--secondary-orange) url("~@/assets/img/bg-so.jpg") no-repeat fixed;
  padding: 4rem 1rem;
  width: 100%;
  text-align: center;
}

#video-tab {
  background: var(--primary-orange) url("~@/assets/img/bg-po.jpg") no-repeat fixed;
  padding: 4rem 1rem;
  width: 100%;
  text-align: center;
}
}
</style>
