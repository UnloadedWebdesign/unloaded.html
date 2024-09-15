function validateForm() {
    var name = document.getElementById("Naam en achternaam").value;
        var email = document.getElementById("Email adres").value;
    var phone = document.getElementById("Telefoonnummer").value;
    
    if (name === "" || email === "" || phone === "") {
        alert("All fields are required.");
        return false;
    }
    
    // Simple validation for phone number and email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10,15}$/; // Allows between 10-15 digits

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
