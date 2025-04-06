let x = document.getElementById("menu");
      let menuBtn = document.querySelector(".menuBtn");
      let closeBtn = document.querySelector(".closeBtn");

      function openmenu() {
        x.style.display = "block";
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
      }
      function closemenu() {
        x.style.display = "none";
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
      }

      function showModal() {
        document.querySelector(".popup").classList.add("popupactive");
      }
      function closeModal() {
        document.querySelector(".popup").classList.remove("popupactive");
      }
