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

	let projectsPage = document.getElementsByClassName("projects");
		for (let i = 0; i < projectsPage.length; i++) {
		projectsPage[i].setAttribute("style", "display: none;");
	}

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: none;");
}

/* Projects Button Functionality */

let projectsButton = document.getElementById("projects-button");
projectsButton.onclick = projectsAction;

function projectsAction(e) {
	document.documentElement.style.setProperty('--primary-color', '#ededed');
	document.documentElement.style.setProperty('--secondary-color', '#482d69');
	document.documentElement.style.setProperty('--third-color', '#482d69');
	document.documentElement.style.setProperty('--fourth-color', '#80c5a5');

	logo.setAttribute("src", "images/logo2.svg");

	let homePage = document.getElementById("home");
	homePage.setAttribute("style", "display: none;");

	let aboutPage = document.getElementById("about");
	aboutPage.setAttribute("style", "display: none;");

	let projectsPage = document.getElementsByClassName("projects");
		for (let i = 0; i < projectsPage.length; i++) {
		projectsPage[i].setAttribute("style", "display: block;");
	}

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

	let projectsPage = document.getElementsByClassName("projects");
		for (let i = 0; i < projectsPage.length; i++) {
		projectsPage[i].setAttribute("style", "display: none;");
	}

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

	let projectsPage = document.getElementsByClassName("projects");
		for (let i = 0; i < projectsPage.length; i++) {
		projectsPage[i].setAttribute("style", "display: none;");
	}

	let contactPage = document.getElementById("contact");
	contactPage.setAttribute("style", "display: none;");
}

/* Project One button Functionality */

let projectOne = document.getElementById("project1-button");
projectOne.onclick = projectOneAction;

function projectOneAction(e) {
	
	let projectOnePage = document.getElementById("projectOne");
	projectOnePage.setAttribute("style", "display: block;");

	let projectTwoPage = document.getElementById("projectTwo");
	projectTwoPage.setAttribute("style", "display: none;");

	let projectThreePage = document.getElementById("projectThree");
	projectThreePage.setAttribute("style", "display: none;");

	let projectFourPage = document.getElementById("projectFour");
	projectFourPage.setAttribute("style", "display: none;");
}


/* Project Two button Functionality */

let projectTwo = document.getElementById("project2-button");
projectTwo.onclick = projectTwoAction;

function projectTwoAction(e) {
	
	let projectOnePage = document.getElementById("projectOne");
	projectOnePage.setAttribute("style", "display: none;");

	let projectTwoPage = document.getElementById("projectTwo");
	projectTwoPage.setAttribute("style", "display: block;");

	let projectThreePage = document.getElementById("projectThree");
	projectThreePage.setAttribute("style", "display: none;");

	let projectFourPage = document.getElementById("projectFour");
	projectFourPage.setAttribute("style", "display: none;");

}

/* Project Three button Functionality */

let projectThree = document.getElementById("project3-button");
projectThree.onclick = projectThreeAction;

function projectThreeAction(e) {
	
	let projectOnePage = document.getElementById("projectOne");
	projectOnePage.setAttribute("style", "display: none;");

	let projectTwoPage = document.getElementById("projectTwo");
	projectTwoPage.setAttribute("style", "display: none;");

	let projectThreePage = document.getElementById("projectThree");
	projectThreePage.setAttribute("style", "display: block;");

	let projectFourPage = document.getElementById("projectFour");
	projectFourPage.setAttribute("style", "display: none;");
}

/* Project Two button Functionality */

let projectFour = document.getElementById("project4-button");
projectFour.onclick = projectFourAction;

function projectFourAction(e) {
	
	let projectOnePage = document.getElementById("projectOne");
	projectOnePage.setAttribute("style", "display: none;");

	let projectTwoPage = document.getElementById("projectTwo");
	projectTwoPage.setAttribute("style", "display: none;");

	let projectThreePage = document.getElementById("projectThree");
	projectThreePage.setAttribute("style", "display: none;");

	let projectFourPage = document.getElementById("projectFour");
	projectFourPage.setAttribute("style", "display: block;");

	consolelog("hello");
}
