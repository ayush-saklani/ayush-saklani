const select = (target_element, flag) => (flag ? [...document.querySelectorAll(target_element)] : document.querySelector(target_element));
function add_listener (target_element, func){
	let target_arr = select(target_element, true); //select all elemant with this class
	console.log(target_arr)
	if (target_arr){
		target_arr.forEach((e) => e.addEventListener("click", func));
	}
};

add_listener("#navbar .nav-link", function () {
	let section = select(this.hash);
	// console.log(this.hash)
	if (section) {
		let header = select("#header", false);
		let sections = select("section", true);
		let navlinks = select(".nav-link", true);
		// console.log("1 "+header)
		// console.log("2 "+sections)
		// console.log("3 "+navlinks)

		navlinks.forEach((item) => item.classList.remove("active"));
		this.classList.add("active");

		if (this.hash == "#header") {
			header.classList.remove("header-top");
			sections.forEach((item) => item.classList.remove("section-overlay"));
			return;
		}
		if (!header.classList.contains("header-top")) {
			header.classList.add("header-top");
			setTimeout(() => {
				sections.forEach((item) => item.classList.remove("section-overlay"));
				section.classList.add("section-overlay");
			}, 500);
		} else {
			sections.forEach((item) => item.classList.remove("section-overlay"));
			section.classList.add("section-overlay");
		}
		section.scrollIntoView({ behavior: "smooth" });
	}
});
