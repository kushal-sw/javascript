console.log("This is the Uber module.");

// Sign up button functionality
const signUpBtn = document.querySelector('.btn-signup-main');

if (signUpBtn) {
    signUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // You can change this to your signup page URL
        window.location.href = 'signup.html';
    });

    // Hover effect
    signUpBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    });

    signUpBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.color = 'white';
    });
}

// Log in button functionality
const loginBtn = document.querySelector('.btn-login');

if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // You can change this to your login page URL
        window.location.href = 'login.html';
    });
}

// About dropdown functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Change city functionality
const changeCityLink = document.querySelector('.change-city-link');

if (changeCityLink) {
    changeCityLink.addEventListener('click', function(e) {
        e.preventDefault();
        // You can customize this - open a modal, redirect to a page, or show a city selector
        const newCity = prompt('Enter your city:');
        if (newCity) {
            const cityDisplay = document.querySelector('.location-selector h5');
            if (cityDisplay) {
                cityDisplay.textContent = newCity;
            }
        }
    });
}

// Pickup Modal functionality
const pickupBtn = document.getElementById('pickupBtn');
const pickupModal = document.getElementById('pickupModal');
const modalClose = document.getElementById('modalClose');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');
const pickupText = document.getElementById('pickupText');

// Open modal
if (pickupBtn) {
    pickupBtn.addEventListener('click', function() {
        pickupModal.classList.add('active');
    });
}

// Close modal functions
function closeModal() {
    pickupModal.classList.remove('active');
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalCancel) {
    modalCancel.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (pickupModal) {
    pickupModal.addEventListener('click', function(e) {
        if (e.target === pickupModal) {
            closeModal();
        }
    });
}

// Confirm selection
if (modalConfirm) {
    modalConfirm.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="pickup-option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === 'now') {
                pickupText.textContent = 'Pickup now';
            } else {
                pickupText.textContent = 'Schedule later';
            }
        }
        closeModal();
    });
}
