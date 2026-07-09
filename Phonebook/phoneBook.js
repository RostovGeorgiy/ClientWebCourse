$(function() {
    const addUserForm = $("#add-user-form");
    const newLastNameTextField = $("#last-name-text-field");
    const newFirstNameTextField = $("#first-name-text-field");
    const newPhoneNumberTextField = $("#phone-number-text-field");
    const table = $("#phone-table");
    const errorMessage = $(".error-message");

    let id = 1;

    const currentRow = null;

    function clearValidationErrors() {
        newLastNameTextField.removeClass("invalid");
        newFirstNameTextField.removeClass("invalid");
        newPhoneNumberTextField.removeClass("invalid");

        errorMessage.text("");
    }

    addUserForm.on("submit", function(e) {
        e.preventDefault();

        clearValidationErrors();

        const newLastNameText = newLastNameTextField.val().trim();
        const newFirstNameText = newFirstNameTextField.val().trim();
        const newPhoneNumberText = newPhoneNumberTextField.val().trim();

        const isInvalid = false;

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
            errorMessage.text("Необходимо заполнить поля: " + emptyFields.join(", "));
            return;
        }

        $("#phone-table tbody").append(`
            <tr>
                <td class="id">${id}</td>
                <td class="last-name">${newLastNameText}</td>
                <td class="first-name">${newFirstNameText}</td>
                <td class="phone-number">${newPhoneNumberText}</td>
                <td class="buttons-cell">
                    <button class="button edit-button" type="button">Редактировать</button>
                    <button class="button delete-button" type="button">Удалить</button>
                </td>
            </tr>
        `);

        id++;

        newLastNameTextField.val("");
        newFirstNameTextField.val("");
        newPhoneNumberTextField.val("");
    });

    table.on("click", ".delete-button", function() {
        const clickedRow = $(this).closest("tr");

        if (clickedRow.hasClass("editing")) {
            toggleInterfaceBlock(false, $(this));
            editErrorMessage.text("");
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
            addUserForm.css("opacity", "0.5");
            table.find("tbody tr").not($(currentButton).closest("tr")).css("opacity", "0.5");
        } else {
            addUserForm.css("opacity", "1");
            table.find("tbody tr").css("opacity", "1");
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

        originalLastName = lastNameCell.text().trim();
        originalFirstName = firstNameCell.text().trim();
        originalPhoneNumber = phoneNumberCell.text().trim();

        lastNameCell.html(`<input type="text" class="edit-last-name" value="${originalLastName}">`);
        firstNameCell.html(`<input type="text" class="edit-first-name" value="${originalFirstName}">`);
        phoneNumberCell.html(`<input type="text" class="edit-phone-number" value="${originalPhoneNumber}">`);

        editButton.text("Сохранить").removeClass("edit-button").addClass("save-button");
        editButton.after(`<button class="button cancel-button" type="button">Отмена</button>`);

        editRow.find(".delete-button").css("display", "none");
    });

    table.on("click", ".save-button", function() {
        const editRow = $(this).closest("tr");
        const saveButton = $(this);

        const inputLastName = editRow.find(".edit-last-name");
        const inputFirstName = editRow.find(".edit-first-name");
        const inputPhoneNumber = editRow.find(".edit-phone-number");

        inputLastName.removeClass("invalid");
        inputFirstName.removeClass("invalid");
        inputPhoneNumber.removeClass("invalid");

        editErrorMessage.text("");

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
            editErrorMessage.text("Необходимо заполнить поля: " + emptyFields.join(", "));
            return;
        }

        editRow.find(".last-name").text(newLastName);
        editRow.find(".first-name").text(newFirstName);
        editRow.find(".phone-number").text(newPhoneNumber);

        editRow.removeClass("editing");

        editRow.find(".cancel-button").remove();

        saveButton.text("Редактировать").removeClass("save-button").addClass("edit-button");

        toggleInterfaceBlock(false, saveButton);

        editRow.find(".delete-button").css("display", "block");
    });

    table.on("click", ".cancel-button", function() {
        const cancelEditRow = $(this).closest("tr");
        const cancelButton = $(this);
        const saveButton = cancelEditRow.find(".save-button");

        editErrorMessage.text("");

        cancelEditRow.find(".last-name").text(originalLastName);
        cancelEditRow.find(".first-name").text(originalFirstName);
        cancelEditRow.find(".phone-number").text(originalPhoneNumber);

        cancelEditRow.removeClass("editing");

        saveButton.text("Редактировать").removeClass("save-button").addClass("edit-button");
        cancelButton.remove();

        toggleInterfaceBlock(false, saveButton);

        cancelEditRow.find(".delete-button").css("display", "block");
    });

    $("body").on("click", "#edit-form .cancel-button", function() {
        $("#edit-form").remove();
        currentRow = null;
    });
});