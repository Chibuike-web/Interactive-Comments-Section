export function attachDeleteEvents(deleteBtn) {
	deleteBtn.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("delete-btn clicked");
		const overlay = document.querySelector(".overlay");
		const deleteModal = document.querySelector(".delete-modal");
		overlay.style.display = "block";
		deleteModal.style.display = "block";
		overlay.addEventListener("click", (e) => {
			if (e.target.classList.contains("overlay")) {
				overlay.style.display = "none";
				deleteModal.style.display = "none";
			}
		});
	});
}

const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(attachDeleteEvents);
