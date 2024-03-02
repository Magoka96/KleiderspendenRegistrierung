<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h2 class="text-center">Kleiderspende registrieren</h2>
        <form>
          <div class="form-group row mb-3">
            <label class="col-sm-3 col-form-label">Art der Übergabe:</label>
            <div class="col-sm-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="checkbox1" v-model="collection">
                <label class="form-check-label" for="checkbox1">Abholung</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="checkbox2" v-model="personalDelivery">
                <label class="form-check-label" for="checkbox2">Persönlich Übergabe an der Geschäftsstelle</label>
              </div>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="firstname" class="col-sm-3 col-form-label">Vorname:</label>
            <div class="col-sm-9">
              <input type="text" id="firstname" class="form-control" v-model="test">
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

          <button type="submit" class="btn btn-primary btn-block">Spende registrieren</button>
        </form>

        <span> {{ test }}</span>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'KleiderspendeForm',
    data(){
      return {
        test: ''
      }
    }
  }
</script>