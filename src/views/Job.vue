<template>
  <div class="job">
    <h3>{{job.company}}</h3>
    <h5>{{job.jobTitle}}</h5>
    <h6>{{job.hours}}</h6>
    <h6>{{job.rate}}</h6>
    <p>{{job.description}}</p>
  </div>
</template>


<script>
export default {
  name: "job",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getJobById", { jobId: this.$route.params.jobId });
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>