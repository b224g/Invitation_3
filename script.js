function afficherMessage() {
    const msg = document.getElementById("messageSecret");
    msg.style.display = "block";
    msg.style.opacity = "1";
  }
  
  document.getElementById("imageUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        document.getElementById("imageContainer").innerHTML = "";
        document.getElementById("imageContainer").appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });