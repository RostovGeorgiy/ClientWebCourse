Vue.createApp({
    data() {
        return {
            newTodoItemText: "",
            items: [],
            isNewTodoItemTextInvalid: false,
            isEditTodoItemTextInvalid: false,
            currentItemId: 1
        };
    },

    methods: {
        addTodoItem() {
        this.isNewTodoItemTextInvalid = false;

            const newTodoItemText = this.newTodoItemText;

            if (newTodoItemText.length === 0) {
                this.isNewTodoItemTextInvalid = true;
                return;
            }

            this.items.push({
                id: this.currentItemId,
                text: newTodoItemText,
                isEditing: false,
                editingTodoItemText: ""
            });

            ++this.currentItemId;

            this.newTodoItemText = "";
        },

        removeTodoItem(item) {
            this.items = this.items.filter(x => x.id !== item.id);
        },

        startEditing(item) {
            item.editingTodoItemText = item.text;
            item.isEditing = true;
        },

        saveTodoItem(item) {
            isEditTodoItemTextInvalid = false;

            if (item.editingTodoItemText.length === 0) {
                this.isEditTodoItemTextInvalid = true;
                return;
            }

            item.text = item.editingTodoItemText;
            item.isEditing = false;
        }
    }
}).mount("#app");