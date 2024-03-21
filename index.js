const form = document.querySelector("form");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	container.classList.add("hide");
	success.classList.remove("hide");
});	