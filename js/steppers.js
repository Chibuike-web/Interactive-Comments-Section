const steppers = document.querySelectorAll(".stepper");

steppers.forEach((stepper) => {
	const p = stepper.querySelector("p");
	const children = Array.from(stepper.children);

	const initialCount = parseInt(p.textContent);
	let count = parseInt(p.textContent);

	children.forEach((child) => {
		child.addEventListener("click", (e) => {
			e.preventDefault();

			if (e.currentTarget.id === "increase" && count <= initialCount) {
				p.textContent = ++count;
				console.log(initialCount);
				console.log(count);
			}
			if (e.currentTarget.id === "decrease" && count >= initialCount) {
				p.textContent = --count;
				console.log(initialCount);
				console.log(count);
			}
		});
	});
});
