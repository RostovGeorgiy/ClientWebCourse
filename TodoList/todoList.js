"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("new-todo-form");
    const newTodoItemTextField = document.getElementById("new-todo-item-text-field");
    const todoList = document.getElementById("todo-list");
    const inputContainer = document.getElementById("input-container");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        inputContainer.classList.remove("invalid");

        let newTodoItemText = newTodoItemTextField.value.trim();

        if (newTodoItemText.length === 0) {
            inputContainer.classList.add("invalid");
            return;
        }

        const todoItem = document.createElement("li");
        todoItem.classList.add("list-item");

        function setViewMode() {
            inputContainer.classList.remove("invalid");

            todoItem.innerHTML = `
                <div class="todo-item">
                    <span class="todo-item-text"></span>
                    <span class="edit-delete-buttons-container">
                        <button class="button edit-button" type="button">Редактировать</button>
                        <button class="button delete-button" type="button">Удалить</button>
                    </span>
                </div>
            `;

            todoItem.querySelector(".todo-item-text").textContent = newTodoItemText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                todoItem.innerHTML = `
                    <form>
                        <div class="edit-container">
                            <input class="edit-todo-item-text-field" type="text">
                            <div class="save-cancel-buttons-container">
                                <button class="button save-button">Сохранить</button>
                                <button class="button cancel-button" type="button">Отменить</button>
                            </div>
                        </div>
                        <div class="error-message">Необходимо заполнить поле</div>
                    </form>
                `;

                const editTodoItemTextField = todoItem.querySelector(".edit-todo-item-text-field");

                editTodoItemTextField.value = newTodoItemText;

                todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                todoItem.querySelector("form").addEventListener("submit", function (e) {
                    e.preventDefault();

                    const editTodoItemText = editTodoItemTextField.value.trim();

                    const editContainer = e.target.querySelector(".edit-container");

                    if (editTodoItemText.length === 0) {
                        editContainer.classList.add("invalid");
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