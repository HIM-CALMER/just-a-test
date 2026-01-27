// Auto-fill role and scroll
function autoSelectRole(roleName) {
    const roleInput = document.getElementById('selectedRole');
    roleInput.value = roleName;
    
    document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
    
    // Visual feedback
    roleInput.style.borderColor = "#d4a373";
    setTimeout(() => { roleInput.style.borderColor = "#f0f0f0"; }, 2000);
}

// File Upload Feedback
const fileInput = document.getElementById('passportPhoto');
const fileLabel = document.getElementById('fileLabel');

fileInput.addEventListener('change', function(e) {
    if (this.files && this.files[0]) {
        fileLabel.innerHTML = `<span style="color: #2d6a4f">✅ Selected: ${this.files[0].name}</span>`;
    }
});

// Form Submission Handle
const appForm = document.getElementById('coreApplicationForm');
const successScreen = document.getElementById('successScreen');
const submitBtn = document.getElementById('submitBtn');

appForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Processing your vision...</span> <i class="fas fa-spinner fa-spin"></i>`;

    // Simulate Server Delay (2 seconds)
    setTimeout(() => {
        appForm.style.display = 'none';
        document.querySelector('.form-header').style.display = 'none';
        
        document.getElementById('targetEmail').innerText = email;
        successScreen.classList.remove('hidden');
        
        window.scrollTo({ top: document.getElementById('apply').offsetTop - 50, behavior: 'smooth' });
        
        console.log(`Log: New Application from ${name} (${email})`);
    }, 2000);
});
