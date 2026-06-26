document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("new-todo-form");
    const newTodoItemTextField = document.getElementById("new-todo-item-text-field");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        newTodoItemTextField.classList.remove("invalid");

        let newTodoItemText = newTodoItemTextField.value.trim();

        if (newTodoItemText.length === 0) {
            newTodoItemTextField.classList.add("invalid");
            return;
        }

        const todoItem = document.createElement("li");

        function setViewMode () {
            newTodoItemTextField.classList.remove("invalid");

            todoItem.innerHTML = `
                <span class="todo-item-text"></span>
                <button class="edit-button" type="button">Редактировать</button>
                <button class="delete-button" type="button">Удалить</button>
            `;

            todoItem.querySelector(".todo-item-text").textContent = newTodoItemText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                todoItem.innerHTML = `
                    <form>
                        <input class="edit-todo-item-text-field" type="text">
                        <button class="save-button">Сохранить</button>
                        <button class="cancel-button" type="button">Отменить</button>
                        <div class="error-message">Нужно заполнить поле</div>
                    </form>
                `;

                const editTodoItemTextField = todoItem.querySelector(".edit-todo-item-text-field");

                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = "Необходимо заполнить поле";
                errorDiv.style.display = "none";


                editTodoItemTextField.value = newTodoItemText;

                todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                todoItem.querySelector("form").addEventListener("submit", function (e) {
                    e.preventDefault();

                    const editTodoItemText = editTodoItemTextField.value.trim();

                    if (editTodoItemText.length === 0) {
                        editTodoItemTextField.classList.add("invalid");
                        return;
                    }

                    newTodoItemText = editTodoItemText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.appendChild(todoItem);
        newTodoItemTextField.value = "";
    });
});