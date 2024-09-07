Vue.createApp({
  data() {
    return {
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
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
