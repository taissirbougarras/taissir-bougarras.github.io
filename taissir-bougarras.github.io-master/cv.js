// Attend que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    // Récupère le formulaire
    var form = document.querySelector(".contact__form");
  
    // Ajoute un écouteur d'événements pour le soumission du formulaire
    form.addEventListener("submit", function (event) {
      // Annule l'envoi du formulaire par défaut
      event.preventDefault();
  
      // Récupère les valeurs des champs
      var name = form.querySelector(".contact__form-el--name").value;
      var email = form.querySelector(".contact__form-el--email").value;
      var message = form.querySelector(".contact__form-el--message").value;
  
      // Vérifie que le nom et l'email ne sont pas vides
      if (!name.trim()) {
        alert("Veuillez entrer votre nom.");
        return;
      }
  
      if (!email.trim()) {
        alert("Veuillez entrer votre email.");
        return;
      }
  
      // Vérifie la longueur du message
      if (message.length < 10) {
        alert("Votre message doit contenir au moins 10 caractères.");
        return;
      }
  
      // Si toutes les validations sont réussies, affiche les données dans une boîte de dialogue
      var confirmationMessage =
        "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message;
      alert("Formulaire soumis avec succès!\n\n" + confirmationMessage);
  
      // Vous pouvez également réinitialiser le formulaire ici si nécessaire
      form.reset();
    });
  });
11:51
Vous avez envoyé
<!DOCTYPE html>
<html lang="en">
<head>
  <title>taissir-bougarras-</title>
  <link rel="stylesheet" href="css/main.css">
  <meta charset="UTF-8">
</head>
<body>

	<!-- SECTION: Splashscreen -->
	<div class="splashscreen">
		<div class="preloader">
			<span class="preloader__text">Loading</span>
		</div>
	</div>
	<!-- END SECTION: Splashscreen -->
	
	<!-- SECTION: Intro -->
	<header class="header">
		<!-- SECTION: Navigation -->
	<div id="top" class="navigation">
		<div class="navigation__wrapper wrapper--large">
			<a class="navigation__logo logo" href="#0">bienvenu dans mon cv en ligne !</a>
			<nav class="navigation__container">
				<ul class="navigation__list">
			    <li><a href="index.html">Accueil</a></li>
                <li><a href="parcours.html">Parcours Academic</a></li>
                <li><a href="experiences.html">Expériences</a></li>
                <li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			
			
		</div>
	</div>
	<!-- END SECTION: Navigation -->
	</header>
	
		
		
		<!-- SECTION: Work -->
		<section id="work"> class="work">
			<h2 class="work__heading title">taissir-bougarras- </h2>
			<table>
				<tr>
					<td>
						<div class="contact__visual">
							<img src="img/tas.jpg" alt="Photo de taissir-bougarras-">
						</div>
					</td>
					<td>
						<h1> bonjour!je suis une étudiante à l'Esprit<br>
							 j'espere que je peux ajouter le plus pour vos projets <br>
							Je vous represente  mon CV pour plus de détails et merci pour vous.<br>
							 </h1>
					</td>
				
				</tr>
			</table>
		</section>
		<!-- END SECTION: About -->
			
		
		<!-- END SECTION: Work -->
		
		<!-- SECTION: Contact -->
		<section id="contact" class="contact">
			<h2 class="contact__heading title">Contact Me</h2>
			<div class="contact__wrapper wrapper--large">
				
				<!-- Simple form setup: formspree.io -->
				<form class="contact__form">
					<input class="contact__form-el contact__form-el--name" type="text" placeholder="Your Name" spellcheck="false">
					<input class="contact__form-el contact__form-el--email" type="email" placeholder="Your Email" spellcheck="false">
					<textarea class="contact__form-el contact__form-el--message" placeholder="Your Message"></textarea>
					<input class="contact__form-el contact__form-el--submit" type="submit" value="Send">
				</form>
			</div>
		</section>
		<!-- END SECTION: Contact -->
	
	<!-- SECTION: Footer -->
	<footer class="footer">
		<div class="footer__wrapper wrapper--large">
			<p class="footer__copyright no-margin">&copy; 2022 -Esprit></p>
			
		</div>
	</footer>
	<!-- END SECTION: Footer -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="js/functions-min.js"></script>

</body>
</html>
+
ajax.googleapis.com
Oumayma
Oumayma Werfelli
<script src="js/cv.js"></script>
Oumayma
Oumayma Werfelli
/* Reset some default styles */
body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }
  
  /* Global styles */
  body {
    font-family: 'Arial', sans-serif;
  }
  
  .wrapper--large {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Header styles */
  header {
    background-color: turquoise;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  nav {
    margin-top: 10px;
  }
  
  nav ul {
    list-style-type: none;
  }
  
  nav li {
    display: inline-block;
    margin-right: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  
  /* Section styles */
  .section {
    padding: 40px 0;
  }
  
  /* About section */
  .about {
    background-color: turquoise;
  }
  
  /* Work section */
  .work {
    background-color: grey ;
  }
  
  .work__heading {
    color:turquoise;
  }
  
  /* Contact section */
  .contact {
    background-color: turquoise;
  }
  
  .contact__heading {
    color: turquoise;
  }
  
  /* Footer styles */
  .footer {
    background-color: turquoise;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }
  
  /* Form styles */
  .contact__form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .contact__form-el {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px; /* Adjusted font size */
  }
  
  .contact__form-el--submit {
    cursor: pointer;
    background-color: turquoise;
    color: #fff;
    border: none;
    font-size: 16px; /* Adjusted font size */
  }
  
  /* Responsive styles */
  @media screen and (max-width: 768px) {
    /* Add responsive styles here
  }
Vous avez envoyé
<!DOCTYPE html>
<html lang="en">
<body>
   <head>
 
    <title> taissir-bougarras </title>
    <link rel="stylesheet" href="css/main.css">
    <meta charset="UTF-8">

    </head>
<body>

	<!-- SECTION: Splashscreen -->
	<div class="splashscreen">
		<div class="preloader">
			<span class="preloader__text">Loading</span>
		</div>
	</div>
	<!-- END SECTION: Splashscreen -->
	
	<!-- SECTION: Intro -->
	<header class="header">
		<!-- SECTION: Navigation -->
	<div id="top" class="navigation">
		<div class="navigation__wrapper wrapper--large">
			<a class="navigation__logo logo" href="#0">bienvenu dans mon cv en ligne !</a>
			<nav class="navigation__container">
				<ul class="navigation__list">
			    <li><a href="index.html">Accueil</a></li>
                <li><a href="parcours.html">Parcours Academic</a></li>
                <li><a href="experiences.html">Expériences</a></li>
                <li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			
			
		</div>
	</div>
	<!-- END SECTION: Navigation -->
	</header>
	
		
		
		<!-- SECTION: Work -->
		<section id="work" class="work">
			<h2 class="work__heading title">taissir-bougarras- </h2>
			<table>
				<tr>
					<td>
						<div class="contact__visual">
							<img src="img/tas.jpg" alt="Photo de taissir-bougarras-">
						</div>
					</td>
					<td>
						<h1> bonjour!<br>
							je suis une étudiante à l'Esprit<br>
							j'espere que je peux ajouter le plus pour vos projets <br>
							Je vous represente  mon CV pour plus de détails et merci pour vous.<br>
					    </h1>
					</td>
				
				</tr>
			</table>
		</section>
		<!-- END SECTION: About -->
			
		
		<!-- END SECTION: Work -->
		
		<!-- SECTION: Contact -->
		<section id="contact" class="contact">
			<h2 class="contact__heading title">Contact Me</h2>
			<div class="contact__wrapper wrapper--large">
				
				<!-- Simple form setup: formspree.io -->
				<form class="contact__form">
					<input class="contact__form-el contact__form-el--name" type="text" placeholder="Your Name" spellcheck="false">
					<input class="contact__form-el contact__form-el--email" type="email" placeholder="Your Email" spellcheck="false">
					<textarea class="contact__form-el contact__form-el--message" placeholder="Your Message"></textarea>
					<input class="contact__form-el contact__form-el--submit" type="submit" value="Send">
				</form>
			</div>
		</section>
		<!-- END SECTION: Contact -->
	
	<!-- SECTION: Footer -->
	<footer class="footer">
		<div class="footer__wrapper wrapper--large">
			<p class="footer__copyright no-margin">&copy; 2022 -Esprit></p>
			
		</div>
	</footer>
	<!-- END SECTION: Footer -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="js/functions-min.js"></script>
	<script src="js/cv.js"></script>

</body>
</html>
ajax.googleapis.com
Oumayma
Oumayma Werfelli
/* Reset some default styles */
body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
}

/* Global styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Header styles */
.header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation__logo {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
}

.navigation__list {
    list-style-type: none;
    display: flex;
}

.navigation__list li {
    margin-right: 20px;
}

.navigation__list a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
}

/* Splashscreen styles */
.splashscreen {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.preloader {
    font-size: 24px;
}

/* Work section styles */
.work {
    padding: 40px 0;
}

.work__heading {
    color: #333;
}

/* Contact section styles */
.contact {
    background-color: #f4f4f4;
    padding: 40px 0;
}

.contact__heading {
    color: #333;
}

.contact__form {
    display: flex;
    flex-direction: column;
}

.contact__form-el {
    margin-bottom: 20px;
    padding: 10px;
}

.contact__form-el--submit {
    background-color: #333;
    color: #fff;
    cursor: pointer;
}

/* Footer styles */
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .navigation {
        flex-direction: column;
        align-items: flex-start;
    }

    .navigation__list {
        margin-top: 20px;
    }
}
Oumayma
Oumayma Werfelli
/* Reset some default styles */
body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
}

/* Global styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Header styles */
.header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation__logo {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
}

.navigation__list {
    list-style-type: none;
    display: flex;
}

.navigation__list li {
    margin-right: 20px;
}

.navigation__list a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
}

/* Splashscreen styles */
.splashscreen {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.preloader {
    font-size: 24px;
}

/* Work section styles */
.work {
    padding: 40px 0;
}

.work__heading {
    color: #333;
}

/* Contact section styles */
.contact {
    background-color: #f4f4f4;
    padding: 40px 0;
}

.contact__heading {
    color: #333;
}

.contact__form {
    display: flex;
    flex-direction: column;
}

.contact__form-el {
    margin-bottom: 20px;
    padding: 10px;
}

.contact__form-el--submit {
    background-color: #333;
    color: #fff;
    cursor: pointer;
}

.contact__image {
    max-width: 100%;
    height: auto;
}

/* Footer styles */
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .navigation {
        flex-direction: column;
        align-items: flex-start;
    }

    .navigation__list {
        margin-top: 20px;
    }
}
Oumayma
Oumayma Werfelli
// Attend que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    // Récupère le formulaire
    var form = document.querySelector(".contact__form");
  
    // Ajoute un écouteur d'événements pour le soumission du formulaire
    form.addEventListener("submit", function (event) {
      // Annule l'envoi du formulaire par défaut
      event.preventDefault();
  
      // Récupère les valeurs des champs
      var name = form.querySelector(".contact__form-el--name").value;
      var email = form.querySelector(".contact__form-el--email").value;
      var message = form.querySelector(".contact__form-el--message").value;
  
      // Vérifie que le nom et l'email ne sont pas vides
      if (!name.trim()) {
        alert("Veuillez entrer votre nom.");
        return;
      }
  
      if (!email.trim()) {
        alert("Veuillez entrer votre email.");
        return;
      }
  
      // Vérifie la longueur du message
      if (message.length < 10) {
        alert("Votre message doit contenir au moins 10 caractères.");
        return;
      }
  
      // Si toutes les validations sont réussies, affiche les données dans une boîte de dialogue
      var confirmationMessage =
        "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message;
      alert("Formulaire soumis avec succès!\n\n" + confirmationMessage);
  
      // Vous pouvez également réinitialiser le formulaire ici si nécessaire
      form.reset();
    });
  });
Oumayma
Oumayma Werfelli
<script src="js/cv.js"></script>
Oumayma
Oumayma Werfelli
document.addEventListener("DOMContentLoaded", function () {
    // Récupère le formulaire
    var form = document.querySelector(".contact__form");
  
    // Ajoute un écouteur d'événements pour le soumission du formulaire
    form.addEventListener("submit", function (event) {
      // Annule l'envoi du formulaire par défaut
      event.preventDefault();
  
      // Récupère les valeurs des champs
      var name = form.querySelector(".contact__form-el--name").value;
      var email = form.querySelector(".contact__form-el--email").value;
      var message = form.querySelector(".contact__form-el--message").value;
  
      // Vérifie que le nom et l'email ne sont pas vides
      if (!name.trim()) {
        alert("Veuillez entrer votre nom.");
        return;
      }
  
      if (!email.trim()) {
        alert("Veuillez entrer votre email.");
        return;
      }
  
      // Vérifie la longueur du message
      if (message.length < 10) {
        alert("Votre message doit contenir au moins 10 caractères.");
        return;
      }
  
      // Si toutes les validations sont réussies, affiche les données dans une boîte de dialogue
      var confirmationMessage =
        "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message;
      alert("Formulaire soumis avec succès!\n\n" + confirmationMessage);
  
      // Vous pouvez également réinitialiser le formulaire ici si nécessaire
      form.reset();
    });
  });
Vous avez envoyé
<!DOCTYPE html>
<html lang="en">
<head>
  <title>taissir-bougarras</title> <br>
  <link rel="stylesheet" href="css/main.css">
  <meta charset="UTF-8">
</head>
<body>

	<!-- SECTION: Splashscreen -->
	<div class="splashscreen">
		<div class="preloader">
			<span class="preloader__text">Loading</span>
		</div>
	</div>
	<!-- END SECTION: Splashscreen -->
	
	<!-- SECTION: Intro -->
	<header class="header">
		<!-- SECTION: Navigation -->
	<div id="top" class="navigation">
		<div class="navigation__wrapper wrapper--large">
			
			<nav class="navigation__container">
				<ul class="navigation__list">
			    <li><a href="index.html">Accueil</a></li>
                <li><a href="parcours.html">Parcours Academic</a></li>
                <li><a href="experiences.html">Expériences</a></li>
                <li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			
			
		</div>
	</div>
	<!-- END SECTION: Navigation -->
	</header>
	
		
		
		<!-- SECTION: Work -->
		<section id="work" class="work">
			<h2 class="work__heading title">taissir bougarras</h2>
			<table>
				<tr>
					<td>
						<div class="contact__visual">
							<img src="img/tas.jpg" alt="Photo de taissir-bougarras-">
						</div>
					</td>
					<td>
						<h1> bonjour! <br>je suis une étudiante à l'Esprit<br>
							 j'espere que je peux ajouter le plus pour vos projets <br>
							Je vous represente  mon CV pour plus de détails et merci pour vous.<br>
							 </h1>
					</td>
				
				</tr>
			</table>
		</section>
		<!-- END SECTION: About -->
			
		
		<!-- END SECTION: Work -->
		
		<!-- SECTION: Contact -->
		<section id="contact" class="contact">
			<h2 class="contact__heading title">Contact Me</h2>
			<div class="contact__wrapper wrapper--large">
				
				<!-- Simple form setup: formspree.io -->
				<form class="contact__form">
					<input class="contact__form-el contact__form-el--name" type="text" placeholder="Your Name" spellcheck="false">
					<input class="contact__form-el contact__form-el--email" type="email" placeholder="Your Email" spellcheck="false">
					<textarea class="contact__form-el contact__form-el--message" placeholder="Your Message"></textarea>
					<input class="contact__form-el contact__form-el--submit" type="submit" value="Send">
				</form>
			</div>
		</section>
		<!-- END SECTION: Contact -->
	
	<!-- SECTION: Footer -->
	<footer class="footer">
		<div class="footer__wrapper wrapper--large">
			<p class="footer__copyright no-margin">&copy; 2023 -Esprit></p>
			
		</div>
	</footer>
	<!-- END SECTION: Footer -->

	
	<script src="js/cv.js"></script>

</body>
</html>
Oumayma
Oumayma Werfelli
document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    var contactForm = document.querySelector('.contact__form');

    // Add an event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the form fields
        var nameInput = document.querySelector('.contact__form-el--name');
        var emailInput = document.querySelector('.contact__form-el--email');
        var messageInput = document.querySelector('.contact__form-el--message');

        if (!isValidName(nameInput.value)) {
            alert('Please enter a valid name.');
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidMessage(messageInput.value)) {
            alert('Please enter a message.');
            return;
        }

        // If all validations pass, you can submit the form or perform other actions here
        alert('Form submitted successfully!');
    });

    // Function to validate the name
    function isValidName(name) {
        // You can customize the validation logic for the name
        return name.trim() !== '';
    }

    // Function to validate the email
    function isValidEmail(email) {
        // You can customize the validation logic for the email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate the message
    function isValidMessage(message) {
        // You can customize the validation logic for the message
        return message.trim() !== '';
    }
});
