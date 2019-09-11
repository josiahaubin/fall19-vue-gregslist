<template>
  <div class="jobs container-fluid">
    <div class="row">
      <h3></h3>
    </div>
  </div>
</template>


<script>
export default {
  name: "jobs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>