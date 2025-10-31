const toggle = document.getElementById("toggleMode");
const body = document.body;

// Load mode dari localStorage
if (localStorage.getItem("mode") === "light") {
  body.classList.add("light");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("mode", body.classList.contains("light") ? "light" : "dark");
});