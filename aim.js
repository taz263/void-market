// ── TAB SWITCH ────────────────────────────────────────────────
function switchTab(tab) {
  document.getElementById('form-login').style.display    = tab === 'login'    ? 'flex' : 'none';
  document.getElementById('form-register').style.display = tab === 'register' ? 'flex' : 'none';
  document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
}

// ── LOGIN (visuel uniquement) ─────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const errEl    = document.getElementById('login-error');
  errEl.textContent = '';

  if (!email || !password) {
    errEl.textContent = '❌ Remplis tous les champs.';
    return;
  }

  // Passe directement à l'étape TikTok
  document.getElementById('gate').style.display        = 'none';
  document.getElementById('verify-step').style.display = 'flex';
}

// ── REGISTER (visuel uniquement) ──────────────────────────────
function handleRegister(e) {
  e.preventDefault();
  const email    = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const errEl    = document.getElementById('register-error');
  errEl.textContent = '';

  if (!email || !password) {
    errEl.textContent = '❌ Remplis tous les champs.';
    return;
  }
  if (password.length < 6) {
    errEl.textContent = '❌ Mot de passe trop court (min 6 caractères).';
    return;
  }

  // Passe à l'étape TikTok
  document.getElementById('gate').style.display        = 'none';
  document.getElementById('verify-step').style.display = 'flex';
}

// ── VERIFY TIKTOK + CAPTCHA ───────────────────────────────────
function handleVerify() {
  const tiktokChecked = document.getElementById('tiktok-check').checked;
  const errEl         = document.getElementById('verify-error');
  errEl.textContent   = '';

  if (!tiktokChecked) {
    errEl.textContent = '❌ Tu dois confirmer ton abonnement TikTok.';
    return;
  }

  const captchaResponse = hcaptcha.getResponse();
  if (!captchaResponse) {
    errEl.textContent = '❌ Complète le captcha.';
    return;
  }

  // Affiche le contenu
  document.getElementById('verify-step').style.display = 'none';
  document.getElementById('content').style.display     = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
