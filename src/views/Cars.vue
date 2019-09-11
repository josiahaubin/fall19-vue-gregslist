<template>
  <div class="cars container-fluid">
    <div class="row">
      <car v-for="car in cars" :carProp="car" :key="car._id" />
      <div class="col-12 pt-5">
        <CreateCarModal />
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-car-modal">List Car</button>
      </div>
    </div>
  </div>
</template>

<script>
import Car from "../components/Car";
import CreateCarModal from "../components/CreateCarModal";
export default {
  name: "cars",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  methods: {},
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  components: { Car, CreateCarModal }
};
</script>
