// Uber Login Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const phoneEmailInput = document.getElementById('phoneEmail');
    const googleBtn = document.getElementById('googleBtn');
    const appleBtn = document.getElementById('appleBtn');
    const qrBtn = document.getElementById('qrBtn');

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const value = phoneEmailInput.value.trim();
        
        if (!value) {
            // Add visual feedback for empty input
            phoneEmailInput.style.borderColor = '#dc3545';
            phoneEmailInput.focus();
            
            setTimeout(() => {
                phoneEmailInput.style.borderColor = '';
            }, 2000);
            return;
        }

        // Validate email or phone
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^[\d\s\-\+\(\)]{10,}$/.test(value);

        if (isEmail || isPhone) {
            console.log('Proceeding with:', value);
            // In a real app, this would redirect to the next step
            alert(`Continuing with: ${value}`);
        } else {
            phoneEmailInput.style.borderColor = '#dc3545';
            setTimeout(() => {
                phoneEmailInput.style.borderColor = '';
            }, 2000);
        }
    });

    // Handle Google login
    googleBtn.addEventListener('click', () => {
        console.log('Google login clicked');
        // In a real app, this would initiate OAuth flow
        alert('Google login would be initiated here');
    });

    // Handle Apple login
    appleBtn.addEventListener('click', () => {
        console.log('Apple login clicked');
        // In a real app, this would initiate Apple Sign In
        alert('Apple login would be initiated here');
    });

    // Handle QR code login
    qrBtn.addEventListener('click', () => {
        console.log('QR code login clicked');
        // In a real app, this would show a QR code
        alert('QR code login would be shown here');
    });

    // Input animation on focus
    phoneEmailInput.addEventListener('focus', () => {
        phoneEmailInput.parentElement.classList.add('focused');
    });

    phoneEmailInput.addEventListener('blur', () => {
        phoneEmailInput.parentElement.classList.remove('focused');
    });

    // Clear error state when typing
    phoneEmailInput.addEventListener('input', () => {
        phoneEmailInput.style.borderColor = '';
    });
});
