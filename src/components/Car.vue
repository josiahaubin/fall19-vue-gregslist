<template>
  <div class="car col-3 border rounded" @click="viewCar()">
    <h5>{{carProp.make}}</h5>
    <h5>{{carProp.model}}</h5>
    <h5>{{carProp.year}}</h5>
    <h5>{{carProp.price}}</h5>
  </div>
</template>


<script>
export default {
  name: "car",
  props: ["carProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    viewCar() {
      //NOTE better way to navigate programatically
      this.$router.push({ name: "car", params: { carId: this.carProp._id } });
      //NOTE The OTHER way...
      //   this.$router.push("/cars/" + this.carProp._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>