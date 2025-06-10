
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Veuillez remplir tous les champs.";
      status.classList.remove("text-green-600");
      status.classList.add("text-red-600");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Adresse e-mail invalide.";
      status.classList.remove("text-green-600");
      status.classList.add("text-red-600");
      return;
    }

    status.textContent = "Message envoyé avec succès !";
    status.classList.remove("text-red-600");
    status.classList.add("text-green-600");

    form.reset();
  });
});
