const bla = Vue.createApp({
  data() {
    return {
      red: 1,
      green: 1,
      blue: 1,
    };
  },
  methods: {
    removeFruits(fruit) {
      this.fruitBasket = this.fruitBasket.filter((fruits) => {
        return fruits !== fruit;
      });
    },
  },
}).mount("#app");
