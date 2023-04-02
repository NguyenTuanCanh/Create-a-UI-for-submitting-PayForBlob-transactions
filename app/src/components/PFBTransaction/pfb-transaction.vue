<template>
  <div class="PFBTransaction">
    <pfb-header />
    <pfb-main />
    <pfb-footer />
  </div>
</template>

<script>
import PfbHeader from "./sections/pfb-header.vue";
import PfbMain from "./sections/pfb-main.vue";
import PfbFooter from "./sections/pfb-footer.vue";

export default {
  name: "PfbTransaction",
  components: {
      'pfb-header': PfbHeader,
      'pfb-main': PfbMain,
      'pfb-footer': PfbFooter,
  },
};
</script>

<style scoped>
.PFBTransaction {
  width: 1000px;
  height: calc(100vh - 24px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
