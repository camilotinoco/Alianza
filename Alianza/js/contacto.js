const checkbox = document.querySelector('.my-formm input[type="checkbox"]');
const btns = document.querySelectorAll(".my-formm button");

checkbox.addEventListener("change", function () {
    const checked = this.checked;
    for (const btn of btns) {
        checked ? (btn.enabled = false) : (btn.enabled = true);
    }
});