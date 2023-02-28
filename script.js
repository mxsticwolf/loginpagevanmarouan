var createAccountClicks = 0;

function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username === "" || password === "") {
		alert("Please enter both username and password");
		return false;
	}
	
	// Send login credentials to server
	// Replace "login.php" with the actual URL of the login script on your server
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "login.php");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// If login was successful, redirect to dashboard page
			if (xhr.responseText === "success") {
				window.location.href = "dashboard.html";
			} else {
				alert("Incorrect username or password");
			}
		}
	};
	xhr.send("username=" + username + "&password=" + password);
}

function createAccount() {
	createAccountClicks++;
	if (createAccountClicks === 3) {
		// Redirect to dashboard page after three clicks
		window.location.href = "dashboard.html";
	} else {
		alert("Click " + (3 - createAccountClicks) + " more times to create an account");
	}
}
