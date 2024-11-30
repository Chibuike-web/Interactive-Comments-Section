const steppers = document.querySelectorAll(".stepper");
const updateBtns = document.querySelectorAll(".update-btn");
const cancelBtn = document.getElementById("cancel-btn"); // modal cancel Button
const deleteBtns = document.querySelectorAll(".delete-btn");
const modalDeleteBtn = document.getElementById("modal-delete-btn");
const replyBtn = document.querySelectorAll(".reply-btn");

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

const editBtns = document.querySelectorAll(".edit-btn");

// Attach event listeners to update buttons outside the edit button click handler
updateBtns.forEach((updateBtn, index) => {
	updateBtn.addEventListener("click", function handleUpdate(e) {
		e.preventDefault();
		console.log("update-btn " + index);

		// Select the specific comment text and text area
		const commentText = document.querySelectorAll(".my-comment")[index];
		const commentContainer = document.querySelectorAll(".comment-container")[index];
		const textArea = commentContainer.querySelector(".update-textarea");

		if (commentText && textArea) {
			// Update the comment text with the value from the text area
			commentText.textContent = textArea.value;

			// Remove the text area
			commentContainer.removeChild(textArea);

			// Show the comment text
			commentText.style.display = "block";

			// Hide the save button
			updateBtn.style.display = "none";

			// Re-enable the edit button
			editBtns[index].disabled = false;
		}
	});
});

// Attach event listeners to edit buttons
editBtns.forEach((editBtn, index) => {
	editBtn.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("edit-text");

		// Get the specific comment text and container
		const commentText = document.querySelectorAll(".my-comment")[index];
		const commentContainer = document.querySelectorAll(".comment-container")[index];

		// Hide the comment text
		commentText.style.display = "none";

		// Create a text area
		const textArea = document.createElement("textarea");
		textArea.value = commentText.textContent.replace(/\s+/g, " ").trim();
		textArea.className = "update-textarea";

		// Append the text area to the comment container
		commentContainer.appendChild(textArea);

		// Display the update button
		updateBtns[index].style.display = "block";

		editBtn.disabled = true;
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
			} else if (index == 1) {
				const secondComment = document.getElementById("second-comment");
				secondComment.classList.remove("flex");
				secondComment.classList.add("hidden");
			} else if (index == 2) {
				const thirdComment = document.getElementById("third-comment");
				thirdComment.classList.remove("flex");
				thirdComment.classList.add("hidden");
			} else if (index == 3) {
				const fourthComment = document.getElementById("fourth-comment");
				fourthComment.classList.remove("flex");
				fourthComment.classList.add("hidden");
			}
		});
	});
});

replyBtn.forEach((btn, index) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		const inputBoxes = document.querySelectorAll(".input-box");
		inputBoxes[index].classList.remove("hidden");
		inputBoxes[index].classList.add("flex");
		const textInput = inputBoxes[index].querySelector("textarea");
		btn.disabled = true;
		console.log(index);
		const replyButton = inputBoxes[index].querySelector("input[type='button']");
		replyButton.addEventListener("click", (e) => {
			e.preventDefault();
			console.log(textInput.value);
			if (index == 0) {
				const firstComment = document.getElementById("first-comment");
				firstComment.classList.remove("hidden");
				firstComment.classList.add("flex");
				const paragraph = firstComment.querySelector(".my-comment");
				paragraph.textContent = textInput.value;
				inputBoxes[index].classList.add("hidden");
				inputBoxes[index].classList.remove("flex");
			} else if (index == 1) {
				const secondComment = document.getElementById("second-comment");
				secondComment.classList.remove("hidden");
				secondComment.classList.add("flex");
				const paragraph = secondComment.querySelector(".my-comment");
				paragraph.textContent = textInput.value;
				inputBoxes[index].classList.add("hidden");
				inputBoxes[index].classList.remove("flex");
			} else if (index == 2) {
				const thirdComment = document.getElementById("third-comment");
				thirdComment.classList.remove("hidden");
				thirdComment.classList.add("flex");
				const paragraph = thirdComment.querySelector(".my-comment");
				paragraph.textContent = textInput.value;
				inputBoxes[index].classList.add("hidden");
				inputBoxes[index].classList.remove("flex");
			}
		});
	});
});
