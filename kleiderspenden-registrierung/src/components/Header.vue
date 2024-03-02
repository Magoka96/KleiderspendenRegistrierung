<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/Kleiderspende" class="navbar-brand">Kleiderspenden</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/Kleiderspende" class="nav-link text-light">Registrieren</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link text-light">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link text-light">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
