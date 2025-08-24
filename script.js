document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.add('hidden'));
            tab.classList.add('active');
            forms[idx].classList.remove('hidden');
        });
    });

    // Registration form validation
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const msg = document.getElementById('register-message');
        msg.className = 'form-message';
        if (username.length < 3) {
            msg.textContent = 'Username must be at least 3 characters.';
            msg.classList.add('error');
            return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            msg.textContent = 'Please enter a valid email address.';
            msg.classList.add('error');
            return;
        }
        if (password.length < 6) {
            msg.textContent = 'Password must be at least 6 characters.';
            msg.classList.add('error');
            return;
        }
        msg.textContent = 'Successfully registered!';
        msg.classList.add('success');
        this.reset();
    });

    // Login form validation
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const msg = document.getElementById('login-message');
        msg.className = 'form-message';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            msg.textContent = 'Please enter a valid email address.';
            msg.classList.add('error');
            return;
        }
        if (password.length < 6) {
            msg.textContent = 'Password must be at least 6 characters.';
            msg.classList.add('error');
            return;
        }
        // Redirect to blog.html after successful login
        window.location.href = 'blog.html';
    });

    // Forgot password form validation
    document.getElementById('forgot-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('forgot-email').value.trim();
        const msg = document.getElementById('forgot-message');
        msg.className = 'form-message';
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            msg.textContent = 'Please enter a valid email address.';
            msg.classList.add('error');
            return;
        }
        msg.textContent = 'Password reset link sent!';
        msg.classList.add('success');
        this.reset();
    });
});
