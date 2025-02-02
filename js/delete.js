export function attachDeleteEvents(deleteBtn) {
	const overlay = document.querySelector(".overlay");
	const deleteModal = document.querySelector(".delete-modal");
	const modalCancelBtn = document.querySelector(".modal-cancel-btn");
	const modalDeleteBtn = document.querySelector(".modal-delete-btn");

	let activeComment;

	deleteBtn.addEventListener("click", (e) => {
		e.preventDefault();
		activeComment = deleteBtn.closest(".my-comment");

		overlay.style.display = "block";
		deleteModal.style.display = "block";
		overlay.addEventListener("click", (e) => {
			if (e.target.classList.contains("overlay")) {
				overlay.style.display = "none";
				deleteModal.style.display = "none";
			}
		});
	});

	modalCancelBtn.addEventListener("click", (e) => {
		e.preventDefault();
		overlay.style.display = "none";
		deleteModal.style.display = "none";
	});

	modalDeleteBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (activeComment) {
			activeComment.remove();
		}
		overlay.style.display = "none";
		deleteModal.style.display = "none";
	});
}

const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(attachDeleteEvents);
