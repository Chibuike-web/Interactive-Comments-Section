import { attachStepperEvents } from "./stepper.js";
import { attachDeleteEvents } from "./delete.js";
import { attachEditEvents } from "./edit.js";
import { updateDuration } from "./time.js";

const sendBtn = document.getElementById("send-btn");
const wrapper = document.getElementById("wrapper");
const commentInput = document.getElementById("comment-input");

const addComment = (e) => {
	e.preventDefault();

	if (commentInput.value.trim().length === 0) {
		return;
	}

	// Create the comment container
	const parentDiv = document.createElement("div");

	parentDiv.className = "my-comment flex w-full items-start gap-6 bg-white p-6 rounded-[12px]";

	// Create the Stepper container
	const newStepper = document.createElement("div");
	newStepper.className =
		"stepper bg-veryLightGray w-full max-w-10 flex flex-col py-3 rounded-lg gap-5 items-center";

	// Increase button
	const increaseBtn = document.createElement("button");
	increaseBtn.id = "increase";
	increaseBtn.classList.add("increase-btn");
	increaseBtn.innerHTML = `
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path
        d="M5.83015 10.396C5.96715 10.396 6.08515 10.346 6.18415 10.247C6.28415 10.147 6.33315 10.03 6.33315 9.893V6.504H9.64815C9.78415 6.504 9.90215 6.454 10.0021 6.355C10.1011 6.255 10.1501 6.138 10.1501 6.001V4.772C10.151 4.70601 10.1383 4.64056 10.1128 4.57967C10.0874 4.51879 10.0497 4.46376 10.0021 4.418C9.95647 4.37027 9.90149 4.33243 9.8406 4.3068C9.77971 4.28117 9.71421 4.26831 9.64815 4.269H6.33315V0.899999C6.33384 0.83394 6.32098 0.768441 6.29535 0.707552C6.26972 0.646663 6.23187 0.591679 6.18415 0.545999C6.13847 0.498274 6.08348 0.460427 6.0226 0.434799C5.96171 0.409171 5.89621 0.396306 5.83015 0.396999H4.41515C4.34909 0.396306 4.28359 0.409171 4.2227 0.434799C4.16181 0.460427 4.10683 0.498274 4.06115 0.545999C3.96115 0.645999 3.91215 0.762999 3.91215 0.899999V4.27H0.580148C0.514017 4.26943 0.448473 4.28246 0.38758 4.30826C0.326687 4.33406 0.271742 4.37209 0.226148 4.42C0.126148 4.519 0.0771484 4.637 0.0771484 4.773V6.003C0.0771484 6.139 0.127148 6.257 0.226148 6.356C0.326148 6.456 0.443148 6.505 0.580148 6.505H3.91315V9.895C3.91315 10.031 3.96315 10.149 4.06315 10.248C4.16115 10.348 4.27915 10.397 4.41615 10.397H5.83015V10.396Z"
        fill="#C5C6EF"
      />
    </svg>
  `;
	newStepper.appendChild(increaseBtn);

	// Stepper quantity
	const quantityParagraph = document.createElement("p");
	quantityParagraph.textContent = 0;
	quantityParagraph.className = "text-moderateBlue font-medium";
	newStepper.appendChild(quantityParagraph);

	// Decrease button
	const decreaseBtn = document.createElement("button");
	decreaseBtn.id = "decrease";
	decreaseBtn.classList.add("decrease-btn");
	decreaseBtn.innerHTML = `
    <svg width="12" height="4" viewBox="0 0 12 4" fill="none">
      <path
        d="M9.75579 3.16004C9.95979 3.16004 10.1358 3.10404 10.2858 2.99304C10.4338 2.88304 10.5078 2.75004 10.5078 2.59704V1.22204C10.5078 1.07004 10.4338 0.93804 10.2848 0.82704C10.1315 0.71419 9.94508 0.655448 9.75479 0.66004H1.25979C1.0695 0.655448 0.883074 0.71419 0.729789 0.82704C0.582789 0.93704 0.508789 1.07004 0.508789 1.22204V2.59704C0.508789 2.75004 0.582789 2.88204 0.731789 2.99304C0.885074 3.10589 1.0715 3.16463 1.26179 3.16004H9.75679Z"
        fill="#C5C6EF"
      />
    </svg>
  `;
	newStepper.appendChild(decreaseBtn);

	// Add the stepper to the comment container
	parentDiv.appendChild(newStepper);

	// Create the content container
	const contentDiv = document.createElement("div");
	contentDiv.className = "content-container flex flex-col gap-[10px] w-full";
	parentDiv.appendChild(contentDiv);

	// Create the top row (profile info, action buttons)
	const topRow = document.createElement("div");
	topRow.className = "flex flex-row items-center justify-between w-full";
	contentDiv.appendChild(topRow);

	// Profile wrapper (holds profile image, username)
	const profileWrapper = document.createElement("div");
	profileWrapper.className = "flex gap-4 items-center";

	const profile = document.createElement("div");
	profile.className = "flex gap-4 items-center";

	const profileImg = document.createElement("img");
	profileImg.className = "w-full max-w-[32px]";
	profileImg.src = "./images/avatars/Image 4.png";

	const h3 = document.createElement("h3");
	h3.textContent = "amyrobson";
	h3.className = "font-medium text-darkBlue";

	profile.appendChild(profileImg);
	profile.appendChild(h3);
	profileWrapper.appendChild(profile);

	// "You" tag
	const youTag = document.createElement("div");
	youTag.className =
		"text-white bg-moderateBlue rounded-[2px] leading-[1em] font-medium px-[6px] py-[4px]";
	youTag.textContent = "you";
	profileWrapper.appendChild(youTag);

	// Duration
	const timeOfPost = new Date();
	let duration = document.createElement("div");
	duration.className = "text-grayishBlue";
	updateDuration(timeOfPost, duration);
	setInterval(() => updateDuration(timeOfPost, duration), 3600);

	profileWrapper.appendChild(duration);
	topRow.appendChild(profileWrapper);

	// Action buttons container
	const actionBtns = document.createElement("div");
	actionBtns.className = "flex flex-row gap-6 items-center";

	// Delete button
	const deleteBtn = document.createElement("button");
	deleteBtn.className = "delete-btn flex flex-row gap-2 items-center cursor-pointer";
	const deleteIcon = document.createElement("img");
	deleteIcon.src = "./images/icon-delete.svg";
	deleteIcon.alt = "Delete Icon";
	const deleteText = document.createElement("p");
	deleteText.textContent = "Delete";
	deleteText.className = "text-softRed font-medium";
	deleteBtn.appendChild(deleteIcon);
	deleteBtn.appendChild(deleteText);

	// Add event listener to delete button by attaching the function
	attachDeleteEvents(deleteBtn);

	// Edit button.
	const editBtn = document.createElement("button");
	editBtn.className = "delete-btn flex flex-row gap-2 items-center cursor-pointer";
	const editIcon = document.createElement("img");
	editIcon.src = "./images/icon-edit.svg";
	editIcon.alt = "Edit Icon";
	const editText = document.createElement("p");
	editText.textContent = "Edit";
	editText.className = "text-moderateBlue font-medium";
	editBtn.appendChild(editIcon);
	editBtn.appendChild(editText);

	// Add event listener to edit button by attaching the function
	attachEditEvents(editBtn);

	actionBtns.appendChild(deleteBtn);
	actionBtns.appendChild(editBtn);
	topRow.appendChild(actionBtns);

	// Bottom Row
	const comment = document.createElement("p");
	comment.className = "my-comment-text text-grayishBlue leading-[1.6em] w-full";
	let inputText = commentInput.value;

	if (inputText.trim().startsWith("@")) {
		const [usernamePart, ...commentParts] = inputText.split(" ");
		const commentBody = commentParts.join(" ").trim();
		comment.innerHTML = `<span class="text-moderateBlue font-medium">${usernamePart.trim()}</span> ${commentBody}`;
	} else {
		comment.textContent = inputText;
	}

	contentDiv.appendChild(comment);

	const children = wrapper.children;
	wrapper.insertBefore(parentDiv, children[children.length - 1]);

	attachStepperEvents(newStepper);

	commentInput.value = "";
};

sendBtn.addEventListener("click", addComment);
