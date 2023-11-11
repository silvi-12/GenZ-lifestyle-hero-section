function myFunction() {
	var links = document.querySelectorAll(".link");

	// Toggle the display property of each link
	links.forEach(function (link) {
		var currentDisplay = window
			.getComputedStyle(link)
			.getPropertyValue("display");

		if (currentDisplay === "inline" || currentDisplay === "") {
			link.style.display = "none";
		} else {
			link.style.display = "inline";
		}
	});
}
