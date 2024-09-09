Vue.createApp({
  data() {
    return {
      newTodoName: "",
      todos: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:4730/todos");
    const results = await response.json();
    this.todos = results;
    console.log(this.todos);
  },

  computed: {},
  methods: {
    async addTodo() {
      const newTodo = {
        description: this.newTodoName,
        done: false,
      };

      const response = await fetch("http://localhost:4730/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        const fetchResponse = await fetch("http://localhost:4730/todos");
        const results = await fetchResponse.json();
        this.todos = results;
        this.newTodoName = "";
      }
    },

    async updateTodoStatus(todo) {
      await fetch(`http://localhost:4730/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(todo),
      });
    },
  },
}).mount("#app");
