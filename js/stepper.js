export function attachStepperEvents(stepper) {
	const p = stepper.querySelector("p");
	const children = Array.from(stepper.children);
	const initialCount = parseInt(p.textContent, 10);
	let count = initialCount;

	children.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();

			if (e.currentTarget.id === "increase" && count <= initialCount) {
				p.textContent = ++count;
			}
			if (e.currentTarget.id === "decrease" && count >= initialCount && count > 0) {
				p.textContent = --count;
			}
		});
	});
}

// Attach events to all existing steppers on page load:
const steppers = document.querySelectorAll(".stepper");
steppers.forEach(attachStepperEvents);
