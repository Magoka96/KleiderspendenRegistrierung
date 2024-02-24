<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
        <h2 class="text-center">Kleiderspende registrieren</h2>
        <form>
          <div class="form-group row mb-3">
            <label for="firstname" class="col-sm-3 col-form-label">Vorname:</label>
            <div class="col-sm-9">
              <input type="text" id="firstname" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="lastname" class="col-sm-3 col-form-label">Nachname:</label>
            <div class="col-sm-9">
              <input type="text" id="lastname" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="steetAndNumber" class="col-sm-3 col-form-label">Straße und Hausnummer:</label>
            <div class="col-sm-9">
              <input type="text" id="steetAndNumber" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="city" class="col-sm-3 col-form-label">Stadt</label>
            <div class="col-sm-9">
              <input type="text" id="city" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="postalCode" class="col-sm-3 col-form-label">Postleitzahl:</label>
            <div class="col-sm-9">
              <input type="number" id="postalCode" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="typeOfClothe" class="col-sm-3 col-form-label">Art der Kleidung:</label>
            <div class="col-sm-9">
              <input type="text" id="typeOfClothe" class="form-control">
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="crisisArea" class="col-sm-3 col-form-label">Krisengebiet:</label>
            <div class="col-sm-9">
              <input type="text" id="crisisArea" class="form-control">
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