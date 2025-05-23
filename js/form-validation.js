function validateField(field, isValid) {
    if (isValid) {
        field.classList.remove('error');
        field.classList.add('success');
    } else {
        field.classList.remove('success');
        field.classList.add('error');
    }
    return isValid;
}

function validateForm(name, email, phone, subject, message) {
    let isValid = true;

    // Validate required fields
    isValid &= validateField(name, name.value.trim().length >= 2);
    isValid &= validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
    isValid &= validateField(phone, !phone.value || /^[\d\s-+()]{10,}$/.test(phone.value));
    isValid &= validateField(subject, subject.value.trim().length >= 5);
    isValid &= validateField(message, message.value.trim().length >= 20);

    return isValid;
}

function showStatusMessage(message, type = '') {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
}

function clearValidationStyles() {
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.classList.remove('success', 'error');
    });
}