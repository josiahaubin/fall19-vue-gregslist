<template>
  <div class="job col-3 border" @click="viewJobs()">
    <h3>{{jobProp.company}}</h3>
    <h5>{{jobProp.jobTitle}}</h5>
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
  methods: {
    viewJobs() {
      this.$router.push({ name: "job", params: { jobId: this.jobProp._id } });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>