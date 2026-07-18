"use strict";

$(function() {
    const todoForm = $("#new-todo-form");
    const newTodoItemTextField = $("#new-todo-item-text-field");
    const todoList = $("#todo-list");

    todoForm.on("submit", function(e) {
        e.preventDefault();

        newTodoItemTextField.removeClass("invalid");

        let newTodoItemText = newTodoItemTextField.val().trim();

        if (newTodoItemText.length === 0) {
            newTodoItemTextField.addClass("invalid");
            return;
        }

        const todoItem = $("<li>").addClass("list-item");

        function setViewMode() {
            newTodoItemTextField.removeClass("invalid");

            todoItem.html (`
                <div class="todo-item">
                    <span class="todo-item-text"></span>
                    <span class="edit-delete-buttons-container">
                        <button class="button edit-button" type="button">Редактировать</button>
                        <button class="button delete-button" type="button">Удалить</button>
                    </span>
                </div>
            `);

            todoItem.find(".todo-item-text").text(newTodoItemText);

            todoItem.find(".delete-button").on("click", function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").on("click", function () {
                todoItem.html (`
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
                `);

                const editTodoItemTextField = todoItem.find(".edit-todo-item-text-field");

                editTodoItemTextField.val(newTodoItemText);

                todoItem.find(".cancel-button").on("click", function () {
                    setViewMode();
                });

                todoItem.find("form").on("submit", function (e) {
                    e.preventDefault();

                    const editTodoItemText = editTodoItemTextField.val().trim();

                    if (editTodoItemText.length === 0) {
                        editTodoItemTextField.addClass("invalid");
                        return;
                    }

                    newTodoItemText = editTodoItemText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(todoItem);
        newTodoItemTextField.val("");
    });
});