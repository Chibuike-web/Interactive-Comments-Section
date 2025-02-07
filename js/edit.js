export function attachEditEvents(editBtn) {
	editBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (document.querySelector("#reply-input")) return;

		const activeComment = editBtn.closest(".my-comment");
		const commentText = activeComment.querySelector(".my-comment-text");

		// Helper function to toggle the disabled state of elements
		function toggleButtons(selector, boolean) {
			const button = activeComment.querySelector(selector);
			button.disabled = boolean;
		}

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

		// Attach a click event on the body to remove the comment if clicked outside.
		document.body.addEventListener("click", function handleBodyClick(e) {
			if (
				!contentContainer.contains(e.target) &&
				!editBtn.contains(e.target) &&
				textArea.value.trim().length === 0
			) {
				activeComment.remove();
				document.body.removeEventListener("click", handleBodyClick);
			}
		});

		// Create the update button
		const updateBtn = document.createElement("input");
		updateBtn.type = "button";
		updateBtn.value = "UPDATE";
		updateBtn.classList.add("update-btn");

		updateBtn.addEventListener("click", (e) => {
			if (textArea.value.trim().length === 0) {
				return;
			}
			e.preventDefault();

			const activeSpan = commentText.querySelector("span");
			let username = "";
			let updatedText = textArea.value.trim();

			if (activeSpan) {
				username = activeSpan.textContent.trim();
			}

			if (updatedText.startsWith("@")) {
				const match = updatedText.match(/^@(\S+)/);
				if (match) {
					username = match[0];
					updatedText = updatedText.slice(username.length).trim();
				}
			}

			if (username && textArea.value.trim().startsWith("@")) {
				commentText.innerHTML = `<span class="text-moderateBlue font-medium">${username}</span> ${updatedText}`;
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
