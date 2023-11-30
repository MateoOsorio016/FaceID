const modalContainer = document.querySelector(".modalContainer");

const modal = document.querySelector(".modal");

const modalClose = document.querySelector(".closeModal");

const user = document.querySelector("#user");

user.addEventListener("click", () => {
    modalContainer.classList.add("active");
})

modalClose.addEventListener("click", () => {
    modalContainer.classList.remove("active");
})

modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("active");
})

modal.addEventListener("click", (e) => {
    e.stopPropagation();
})