import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.min.js";

const app = createApp({
  data() {
    return {
      isLoading: true,
      subdomain: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.subdomain = location.hostname.match(/^(.*)\.(demo\.localhost|demo\.beohoang98\.com)$/)?.[1] || "unknown";
    }, 2000);
  }
});

app.mount("#app");
