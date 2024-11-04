function getFormvalue(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form element
    const form = document.getElementById('form1');

    // Get the values of the first name and last name fields
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the full name in an alert box
    alert(firstName + ' ' + lastName);
}
