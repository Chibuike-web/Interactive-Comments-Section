// Helper function to toggle the disabled state of elements
function toggleButtons(selector, boolean) {
	document.querySelectorAll(selector).forEach((btn) => {
		btn.disabled = boolean;
	});
}

export function attachEditEvents(editBtn) {
	editBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const activeComment = editBtn.closest(".my-comment");
		const commentText = activeComment.querySelector(".my-comment-text");

		// Remove the old comment text
		commentText.remove();

		// Create a textarea for editing
		const textArea = document.createElement("textarea");
		textArea.placeholder = "Add a comment...";
		textArea.id = "reply-input";
		textArea.className =
			"w-full px-5 pt-[10px] pb-[20px] border-[1px] border-lightGray rounded-[6px]";
		textArea.value = commentText.textContent.replace(/\s+/g, " ").trim();

		const contentContainer = activeComment.querySelector(".content-container");
		contentContainer.appendChild(textArea);

		editBtn.disabled = true;
		toggleButtons(".delete-btn", true);

		// Create the update button
		const updateBtn = document.createElement("input");
		updateBtn.type = "button";
		updateBtn.value = "UPDATE";
		updateBtn.classList.add("update-btn");

		updateBtn.addEventListener("click", (e) => {
			e.preventDefault();

			const activeSpan = commentText.querySelector("span");
			const username = activeSpan ? activeSpan.textContent.trim() : "";
			let updatedText = textArea.value.trim();

			if (username && updatedText.startsWith(username)) {
				updatedText = updatedText.slice(username.length).trim();
			}

			if (activeSpan) {
				commentText.innerHTML = `<span class="text-moderateBlue font-medium">${activeSpan.textContent}</span> ${updatedText}`;
			} else {
				commentText.textContent = updatedText;
			}

			textArea.remove();
			updateBtn.remove();

			contentContainer.appendChild(commentText);
			editBtn.disabled = false;
			toggleButtons(".delete-btn", false);
		});

		contentContainer.appendChild(updateBtn);
	});
}

const editBtns = document.querySelectorAll(".edit-btn");
editBtns.forEach(attachEditEvents);
