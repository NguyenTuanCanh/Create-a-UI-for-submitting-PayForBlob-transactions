<template>
  <div class="footer">
    <a
      v-for="(item, index) in SOCIAL_NETWORK"
      :href="item.url"
      target="_blank"
      :key="index"
    >
      <fa :icon="item.icon" />
    </a>
  </div>
</template>

<script>
import { SOCIAL_NETWORK } from "src/constants/PFBTransaction.js";

export default {
  name: "PfbFooter",
  setup() {
    return {
      SOCIAL_NETWORK,
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
}

.footer a svg {
  color: #7b2bf9;
  font-size: 22px;
  margin-right: 12px;
}
</style>
