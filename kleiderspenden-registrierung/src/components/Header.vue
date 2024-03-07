<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border border-black border-bottom fixed-top">
    <div class="container fluid">
      <img src="@/assets/iu-logo.png" alt="Logo" class="navbar-brand img-fluid" style="max-height: 60px;">
      <router-link to="/Kleiderspende" class="navbar-brand">Kleiderspenden</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/Kleiderspende" class="nav-link text-black">Registrieren</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link text-black">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Kontakt" class="nav-link text-black">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
