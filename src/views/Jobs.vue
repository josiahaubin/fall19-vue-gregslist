<template>
  <div class="jobs container-fluid">
    <div class="row">
      <job v-for="job in jobs" :key="job._id" :jobProp="job" />
    </div>
    <div class="row">
      <div class="col-12">
        <CreateJobModal />
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-job-modal">List Job</button>
      </div>
    </div>
  </div>
</template>

<script>
import job from "../components/Job";
import CreateJobModal from "../components/CreateJobModal";
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
    job,
    CreateJobModal
  }
};
</script>


<style scoped>
</style>