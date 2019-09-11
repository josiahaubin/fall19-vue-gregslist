<template>
  <div class="jobs container-fluid">
    <div class="row">
      <job v-for="job in jobs" :key="job._id" :jobProp="job" />
    </div>
  </div>
</template>

<script>
import job from "../components/Job";
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
  components: {
    job
  }
};
</script>


<style scoped>
</style>