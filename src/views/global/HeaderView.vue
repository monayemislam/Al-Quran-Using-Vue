<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/full-quran-asad" class="nav-link"
              >Full Quran Asad</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/full-quran-uthmani"
              >Full Quran Uthmani</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/full-quran-audio"
              >Full Quran Audio</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>