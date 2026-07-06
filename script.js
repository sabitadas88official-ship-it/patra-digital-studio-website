// Patra Digital Studio
// JavaScript File

console.log("Patra Digital Studio Website Loaded Successfully!");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function () {
    console.log("Menu Clicked: " + this.textContent);
  });
});
