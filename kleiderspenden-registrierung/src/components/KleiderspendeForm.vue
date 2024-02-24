<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
        <h2 class="text-center">Kleiderspende registrieren</h2>
        <form>
          <div class="form-group row mb-3">
            <label for="name" class="col-sm-3 col-form-label">Name:</label>
            <div class="col-sm-9">
              <input type="text" id="name" class="form-control" required>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="email" class="col-sm-3 col-form-label">E-Mail:</label>
            <div class="col-sm-9">
              <input type="email" id="email" class="form-control" required>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="uebergabeOption" class="col-sm-3 col-form-label">Übergabeoption:</label>
            <div class="col-sm-9">
              <select id="uebergabeOption" class="form-control" required>
                <option value="">Bitte wählen</option>
                <option value="persoenlich">Persönliche Übergabe</option>
                <option value="geschaeftsstelle">Übergabe an der Geschäftsstelle</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Spende registrieren</button>
        </form>
      </div>
    </div>
  </div>
</template>