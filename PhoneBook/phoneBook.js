"use strict";

$(function() {
    const addUserForm = $("#add-user-form");
    const newLastNameTextField = $("#last-name-text-field");
    const newFirstNameTextField = $("#first-name-text-field");
    const newPhoneNumberTextField = $("#phone-number-text-field");
    const table = $("#phone-table");
    const errorMessage = $(".error-message");

    let id = 1;

    let currentRow = null;

    function clearValidationErrors() {
        newLastNameTextField.removeClass("invalid");
        newFirstNameTextField.removeClass("invalid");
        newPhoneNumberTextField.removeClass("invalid");

        errorMessage.addClass("invisible");
    }

    addUserForm.on("submit", function(e) {
        e.preventDefault();

        clearValidationErrors();

        const newLastNameText = newLastNameTextField.val().trim();
        const newFirstNameText = newFirstNameTextField.val().trim();
        const newPhoneNumberText = newPhoneNumberTextField.val().trim();

        const emptyFields = [];

        if (newLastNameText.length === 0) {
            newLastNameTextField.addClass("invalid");
            emptyFields.push("Фамилия");
        }

        if (newFirstNameText.length === 0) {
            newFirstNameTextField.addClass("invalid");
            emptyFields.push("Имя");
        }

        if (newPhoneNumberText.length === 0) {
            newPhoneNumberTextField.addClass("invalid");
            emptyFields.push("Номер телефона");
        }

        if (emptyFields.length > 0) {
            errorMessage.removeClass("invisible");
            errorMessage.text("Необходимо заполнить поля: " + emptyFields.join(", "));
            return;
        }

        const newRow = $('<tr>')
            .append($('<td>').addClass('id').text(id))
            .append($('<td>').addClass('last-name').text(newLastNameText))
            .append($('<td>').addClass('first-name').text(newFirstNameText))
            .append($('<td>').addClass('phone-number').text(newPhoneNumberText))
            .append(`
                <td class="buttons-cell">
                    <button class="button edit-button" type="button">Редактировать</button>
                    <button class="button delete-button" type="button">Удалить</button>

                    <button class="button save-button hidden-button" type="button">Сохранить</button>
                    <button class="button cancel-button hidden-button" type="button">Отмена</button>
                </td>
            `);

        $("#phone-table tbody").append(newRow);

        id++;

        newLastNameTextField.val("");
        newFirstNameTextField.val("");
        newPhoneNumberTextField.val("");
    });

    table.on("click", ".delete-button", function() {
        const clickedRow = $(this).closest("tr");

        if (clickedRow.hasClass("editing")) {
            toggleInterfaceBlock(false, $(this));
            editErrorMessage.addClass("invisible");
        }

        clickedRow.remove();

        table.find("tbody tr").each(function(index) {
            $(this).find("td:first").text(index + 1);
        });

        id = $(".table tr").length;
    });

    let originalLastName = "";
    let originalFirstName = "";
    let originalPhoneNumber = "";

    const editErrorMessage = $(".edit-error-message");

    function toggleInterfaceBlock(isBlocked, currentButton) {
        addUserForm.find("input, button").prop("disabled", isBlocked);

        table.find(".edit-button, .delete-button").not(currentButton).prop("disabled", isBlocked);

        if (isBlocked) {
            addUserForm.addClass("form-blocked");
            table.find("tbody tr").not($(currentButton).closest("tr")).addClass("form-blocked");
        } else {
            addUserForm.removeClass("form-blocked");
            table.find("tbody tr").removeClass("form-blocked");
        }
    }

    table.on("click", ".edit-button", function() {
        const editRow = $(this).closest("tr");
        const editButton = $(this);

        if (editRow.hasClass("editing")) {
            return;
        }

        editRow.addClass("editing");

        toggleInterfaceBlock(true, editButton);

        const lastNameCell = editRow.find(".last-name");
        const firstNameCell = editRow.find(".first-name");
        const phoneNumberCell = editRow.find(".phone-number");
        const buttonsCell = editRow.find(".buttons-cell");

        originalLastName = lastNameCell.text().trim();
        originalFirstName = firstNameCell.text().trim();
        originalPhoneNumber = phoneNumberCell.text().trim();

        lastNameCell.empty().append($('<input>')
            .attr('type', 'text')
            .attr('id', 'edit-last-name')
            .addClass('input-field')
            .val(originalLastName)
        );

        firstNameCell.empty().append($('<input>')
            .attr('type', 'text')
            .attr('id', 'edit-first-name')
            .addClass('input-field')
            .val(originalFirstName)
        );

        phoneNumberCell.empty().append($('<input>')
            .attr('type', 'text')
            .attr('id', 'edit-phone-number')
            .addClass('input-field')
            .val(originalPhoneNumber)
        );

        editButton.addClass("hidden-button");
        editRow.find(".delete-button").addClass("hidden-button");

        editRow.find(".save-button").removeClass("hidden-button");
        editRow.find(".cancel-button").removeClass("hidden-button");
    });

    table.on("click", ".save-button", function() {
        const editRow = $(this).closest("tr");
        const saveButton = $(this);

        const inputLastName = editRow.find("#edit-last-name");
        const inputFirstName = editRow.find("#edit-first-name");
        const inputPhoneNumber = editRow.find("#edit-phone-number");

        inputLastName.removeClass("invalid");
        inputFirstName.removeClass("invalid");
        inputPhoneNumber.removeClass("invalid");

        editErrorMessage.addClass("invisible");

        const newLastName = inputLastName.val().trim();
        const newFirstName = inputFirstName.val().trim();
        const newPhoneNumber = inputPhoneNumber.val().trim();

        const emptyFields = [];

        if (newLastName.length === 0) {
            inputLastName.addClass("invalid");
            emptyFields.push("Фамилия");
        }

        if (newFirstName.length === 0) {
            inputFirstName.addClass("invalid");
            emptyFields.push("Имя");
        }

        if (newPhoneNumber.length === 0) {
            inputPhoneNumber.addClass("invalid");
            emptyFields.push("Номер телефона");
        }

        if (emptyFields.length > 0) {
            editErrorMessage.removeClass("invisible");
            editErrorMessage.text("Необходимо заполнить поля: " + emptyFields.join(", "));
            return;
        }

        editRow.find(".last-name").text(newLastName);
        editRow.find(".first-name").text(newFirstName);
        editRow.find(".phone-number").text(newPhoneNumber);

        editRow.removeClass("editing");

        editRow.find(".cancel-button").addClass("hidden-button");
        saveButton.addClass("hidden-button");

        editRow.find(".edit-button").removeClass("hidden-button");
        editRow.find(".delete-button").removeClass("hidden-button");

        toggleInterfaceBlock(false, saveButton);
    });

    table.on("click", ".cancel-button", function() {
        const cancelEditRow = $(this).closest("tr");
        const cancelButton = $(this);
        const saveButton = cancelEditRow.find(".save-button");

        cancelEditRow.find(".last-name").text(originalLastName);
        cancelEditRow.find(".first-name").text(originalFirstName);
        cancelEditRow.find(".phone-number").text(originalPhoneNumber);

        cancelEditRow.removeClass("editing");

        saveButton.addClass("hidden-button");
        cancelEditRow.find(".cancel-button").addClass("hidden-button");


        cancelEditRow.find(".edit-button").removeClass("hidden-button");
        cancelEditRow.find(".delete-button").removeClass("hidden-button");

        toggleInterfaceBlock(false, saveButton);
    });
});