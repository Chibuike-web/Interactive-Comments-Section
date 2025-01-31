const steppers = document.querySelectorAll(".stepper");
const updateBtns = document.querySelectorAll(".update-btn");
const cancelBtn = document.getElementById("cancel-btn"); // modal cancel Button
const deleteBtns = document.querySelectorAll(".delete-btn");
const modalDeleteBtn = document.getElementById("modal-delete-btn");
const replyBtns = document.querySelectorAll(".reply-btn");

// Stepper
steppers.forEach((stepper) => {
	const pTag = stepper.querySelector("p");
	const children = Array.from(stepper.children);

	children.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();

			const action = e.currentTarget.id;

			if (action === "increase") {
				let counter = +pTag.textContent;
				let newCounter = ++counter;
				pTag.textContent = newCounter;
			} else if (action === "decrease") {
				let counter = +pTag.textContent;
				if (counter > 0) {
					let newCounter = --counter;
					pTag.textContent = newCounter;
				}
			}
		});
	});
});

// Comment Delete
deleteBtns.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("delete-btn " + index);
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

		// Modal cancel button
		cancelBtn.addEventListener("click", (e) => {
			e.preventDefault();
			overlay.style.display = "none";
			deleteModal.style.display = "none";
		});

		// Modal Delete button
		modalDeleteBtn.addEventListener("click", (e) => {
			e.preventDefault();
			overlay.style.display = "none";
			deleteModal.style.display = "none";

			if (index == 0) {
				const firstComment = document.getElementById("first-comment");
				firstComment.classList.remove("flex");
				firstComment.classList.add("hidden");
				replyBtns.forEach((btn) => {
					btn.disabled = false;
				});
			} else if (index == 1) {
				const secondComment = document.getElementById("second-comment");
				secondComment.classList.remove("flex");
				secondComment.classList.add("hidden");
				replyBtns.forEach((btn) => {
					btn.disabled = false;
				});
			} else if (index == 2) {
				const thirdComment = document.getElementById("third-comment");
				thirdComment.classList.remove("flex");
				thirdComment.classList.add("hidden");
				replyBtns.forEach((btn) => {
					btn.disabled = false;
				});
			} else if (index == 3) {
				const fourthComment = document.getElementById("fourth-comment");
				fourthComment.classList.remove("flex");
				fourthComment.classList.add("hidden");
			}
		});
	});
});
