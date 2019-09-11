<template>
  <div class="job col-3 border">
    <h3>{{jobProp.company}}</h3>
    <h5>{{jobProp.jobTitle}}</h5>
    <h6>{{jobProp.hours}}</h6>
    <h6>{{jobProp.rate}}</h6>
    <p>{{jobProp.description}}</p>
  </div>
</template>


<script>
export default {
  name: "job",
  props: ["jobProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>