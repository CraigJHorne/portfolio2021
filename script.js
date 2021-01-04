/* About Button Functionality */

let aboutButton = document.getElementById("about-button");
aboutButton.onclick = aboutAction;

function aboutAction(e) {
	document.documentElement.style.setProperty('--primary-color', '#80c5a5');
	document.documentElement.style.setProperty('--secondary-color', '#482d69');
	document.documentElement.style.setProperty('--third-color', '#482d69');
	document.documentElement.style.setProperty('--fourth-color', '#ededed');

	logo.setAttribute("src", "images/logo.svg");

	let homePage = document.getElementById("home");
	homePage.setAttribute("style", "display: none;");

	let aboutPage = document.getElementById("about");
	aboutPage.setAttribute("style", "display: block;");

	let projectsPage = document.getElementById("projects");
	projectsPage.setAttribute("style", "display: none;");

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: none;");
}

/* Recent Work Button Functionality */

let projectsButton = document.getElementById("projects-button");
projectsButton.onclick = projectsAction;

function projectsAction(e) {
	document.documentElement.style.setProperty('--primary-color', '#ef7e5f');
	document.documentElement.style.setProperty('--secondary-color', '#fff');
	document.documentElement.style.setProperty('--third-color', '#482d69');
	document.documentElement.style.setProperty('--fourth-color', '#80c5a5');

	logo.setAttribute("src", "images/logo.svg");

	let homePage = document.getElementById("home");
	homePage.setAttribute("style", "display: none;");

	let aboutPage = document.getElementById("about");
	aboutPage.setAttribute("style", "display: none;");

	let projectsPage = document.getElementById("projects");
	projectsPage.setAttribute("style", "display: block;");

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: none;");
}

/* Contact Button Functionality */

let contactButton = document.getElementById("contact-button");
contactButton.onclick = contactAction;

function contactAction(e) {
	document.documentElement.style.setProperty('--primary-color', '#ededed');
	document.documentElement.style.setProperty('--secondary-color', '#482d69');
	document.documentElement.style.setProperty('--third-color', '#482d69');
	document.documentElement.style.setProperty('--fourth-color', '#80c5a5');

	logo.setAttribute("src", "images/logo2.svg");

	let homePage = document.getElementById("home");
	homePage.setAttribute("style", "display: none;");

	let aboutPage = document.getElementById("about");
	aboutPage.setAttribute("style", "display: none;");

	let projectsPage = document.getElementById("projects");
	projectsPage.setAttribute("style", "display: none;");

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: block;");
}

/* Logo click Functionality */

let logo = document.getElementById("logo");
logo.onclick = logoAction;

function logoAction(e) {
	document.documentElement.style.setProperty('--primary-color', '#482d69');
	document.documentElement.style.setProperty('--secondary-color', '#80c5a5');
	document.documentElement.style.setProperty('--third-color', '#ededed');
	document.documentElement.style.setProperty('--fourth-color', '#ef7e5f');
	
	logo.setAttribute("src", "images/logo.svg");

	let homePage = document.getElementById("home");
	homePage.setAttribute("style", "display: block;");

	let aboutPage = document.getElementById("about");
	aboutPage.setAttribute("style", "display: none;");

	let projectsPage = document.getElementById("projects");
	projectsPage.setAttribute("style", "display: none;");

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: none;");
}
