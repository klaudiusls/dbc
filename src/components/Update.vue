<template>
  <section id="update" class="update">
    <div class="row tab">
      <div class="col-md-6"></div>
      <button class="col-md-6 tablinks" id="defaultOpen">
        Upcoming Events
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
    </div>

    <div id="update-tab" class="tabcontent">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-6 my-auto pr-4 order-md-0 order-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>Communicate Your Brand Through Storytelling</h2>
            <p>
              Through brand story, you can effectively humanize your brand and
              communicate who you are, what you do, and how you can help people.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <div class="text-lg-start">
                <a
                  href="#event"
                  class="btn-outline scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Register</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 order-md-1 order-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img class="img-fluid" src="@/assets/img/event-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*Tab Content*/
/* Style the tab */
.tab {
  margin: 0;
  padding: 0 5rem;
  padding-top: 0.5rem;
  overflow: hidden;
  background-color: white;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  border: 1px solid var(--secondary-orange);
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
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: block;
  padding: 5rem;
  padding-bottom: 3rem;
  border: 1px solid var(--secondary-orange);
  border-top: none;
  background-color: var(--secondary-orange);
}

.update .col-md-6 {
  color: white;
}

.update h2 {
  margin-top: 2rem;
  font-size: 32px;
  font-weight: 700;
}

.update p {
  margin-top: 2rem;
  line-height: 24px;
}

.update .btn-outline {
  text-decoration: none;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1px;
  padding: 1rem 2rem;
  border-radius: 100px;
  transition: 0.5s;
  color: white;
  background: transparent;
  border: 2px solid white;
}

.update .btn-outline:hover {
  transition: ease-in;
  transition: 0.7s;
  color: var(--secondary-orange);
  background: white;
  border: 2px solid white;
}

.update img {
  border-radius: 18px;
  z-index: 20;
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 418px) {
  .tab {
    padding: 0.5rem 1rem 0px;
    margin-bottom: -1px;
  }

  .tabcontent {
    padding: 2rem;
    margin-bottom: -1px;
  }

  .update h2 {
    margin-top: 2rem;
  }

  .update p {
    margin-top: 1rem;
  }

  .update .btn-outline {
    margin-top: 1rem;
  }
}
</style>