document.addEventListener("DOMContentLoaded", function () {
  function openModal(imgSrc, projectName) {
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    modalImg.alt = `${projectName} - Full`;
  }

  let modal = document.getElementById("projectModal");

  let span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  let projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((projectCard) => {
    projectCard.addEventListener("click", function () {
      let imgSrc = projectCard.querySelector("img").src;
      imgSrc = imgSrc.replace(".jpg", "-full.jpg");
      let projectName = projectCard.querySelector("h3").innerText;

      openModal(imgSrc, projectName);
    });
  });
});
