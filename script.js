const form = document.getElementById("contact-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  fetch("https://formsubmit.co/YOUR_EMAIL@example.com", {
    method: "POST",
    body: data
  })
  .then(res => {
    if (res.ok) {
      statusEl.textContent = "Thank you! Your message was sent.";
      form.reset();
    } else {
      throw new Error("Network error");
    }
  })
  .catch(err => {
    statusEl.textContent = "Oops! Something went wrong. Email me at YOUR_EMAIL@example.com";
    console.error(err);
  });
});
