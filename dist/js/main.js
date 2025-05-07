//Image Preview for Profile Upload
const profileImageInput = document.getElementById('profileImage');
const imagePreview = document.getElementById('imagePreview');

if (profileImageInput) {
  profileImageInput.addEventListener('change', () => {
    const file = profileImageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
}

// Password Strength Checker
const newPasswordInput = document.getElementById('newPassword');
const strengthIndicator = document.getElementById('strengthIndicator');

if (newPasswordInput && strengthIndicator) {
  newPasswordInput.addEventListener('input', () => {
    const password = newPasswordInput.value;
    const strength = getPasswordStrength(password);
    strengthIndicator.textContent = `Strength: ${strength}`;
  });
}

function getPasswordStrength(password) {
  let score = 0;
  if (password.length > 7) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  switch (score) {
    case 4: return 'Strong';
    case 3: return 'Medium';
    case 2: return 'Weak';
    default: return 'Very Weak';
  }
}

//Password Match Validation
const passwordForm = document.getElementById('passwordForm');
if (passwordForm) {
  passwordForm.addEventListener('submit', e => {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
      e.preventDefault();
      alert('Passwords do not match!');
    }
  });
}

//Deactivate Modal Logic
const deactivateBtn = document.getElementById('deactivateBtn');
const deactivateModal = document.getElementById('deactivateModal');
const cancelDeactivate = document.getElementById('cancelDeactivate');
const confirmDeactivate = document.getElementById('confirmDeactivate');
const deactivateInput = document.getElementById('deactivateInput');

if (deactivateBtn) {
  deactivateBtn.addEventListener('click', () => {
    deactivateModal.classList.remove('hidden');
    deactivateInput.value = '';
    confirmDeactivate.disabled = true;
  });
}

if (cancelDeactivate) {
  cancelDeactivate.addEventListener('click', () => {
    deactivateModal.classList.add('hidden');
  });
}

if (deactivateInput) {
  deactivateInput.addEventListener('input', () => {
    confirmDeactivate.disabled = deactivateInput.value !== 'deactivate';
  });
}

if (confirmDeactivate) {
  confirmDeactivate.addEventListener('click', () => {
    alert('Account deactivated.');
    deactivateModal.classList.add('hidden');
  });
}
