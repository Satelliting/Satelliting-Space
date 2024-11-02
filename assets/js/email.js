// Initialize EmailJS
(function () {
  emailjs.init("8jenTMyXscl46oGRR");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Use emailjs.sendForm to send the form directly by ID
    emailjs.sendForm("service_1o3z6h6", "template_zp4ck3o", this).then(
      function (response) {
        console.log("Email sent successfully:", response);
        document.getElementById("responseMessage").textContent =
          "Message sent successfully!";
        document.getElementById("contactForm").style.display = "none";
      },
      function (error) {
        console.log("EmailJS error:", error);
        document.getElementById("responseMessage").textContent =
          "Oops! Something went wrong.";
      }
    );
  });
