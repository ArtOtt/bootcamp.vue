Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
    };
  },
  methods: {
    da(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
