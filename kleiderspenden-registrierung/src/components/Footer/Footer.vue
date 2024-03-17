<template>
  <footer class="mt-auto bg-dark text-light py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="mb-0">&copy; 2024 Kleiderspenden Initiative Stiftung. Alle Rechte vorbehalten.</p>
        </div>
        <div class="col-md-6 text-md-end">
          <ul class="list-inline mb-0">
            <li class="list-inline-item"><router-link to="/Datenschutz" class="text-light">Datenschutz</router-link></li>
            <li class="list-inline-item"><router-link to="/Nutzungsbedingungen" class="text-light">Nutzungsbedingungen</router-link></li>
            <li class="list-inline-item"><router-link to="/Impressum" class="text-light">Impressum</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
