const botonYes = document.getElementById("btnYes");
const botonNo = document.getElementById("btnNo");

botonYes.addEventListener("click", () => {
    window.location.href = "/web/pages/home.html";
});

botonNo.addEventListener("click", () => {
    location.reload();
});

