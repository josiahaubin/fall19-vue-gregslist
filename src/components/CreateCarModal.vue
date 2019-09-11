<template>
  <div id="create-car-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create A Car!</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addCar()">
            <div class="form-group">
              <label for="make">Make</label>
              <input
                type="text"
                class="form-control"
                id="make"
                placeholder="Enter make"
                v-model="newCar.make"
                required
              />
            </div>
            <div class="form-group">
              <label for="model">Model</label>
              <input
                type="text"
                class="form-control"
                id="model"
                placeholder="Enter model"
                v-model="newCar.model"
              />
            </div>
            <div class="form-group">
              <label for="year">Year</label>
              <input
                type="number"
                class="form-control"
                id="year"
                placeholder="Enter year"
                v-model="newCar.year"
              />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Enter price"
                v-model="newCar.price"
              />
            </div>
            <div class="form-group">
              <label for="imgurl">Image Url</label>
              <input
                type="text"
                class="form-control"
                id="imgurl"
                placeholder="Enter imgurl"
                v-model="newCar.imgUrl"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                id="description"
                placeholder="Enter description"
                v-model="newCar.description"
              />
            </div>
            <button type="submit" class="btn btn-primary">List Car</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-car-modal",
  data() {
    return {
      newCar: {}
    };
  },
  computed: {},
  methods: {
    addCar() {
      this.$store.dispatch("addCar", this.newCar);
      this.newCar = {};
    }
  },
  components: {}
};
</script>


<style lang="scss" scoped>
</style>