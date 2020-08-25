# SpiralNotes

Web application created as a final project on a **JavaScript Developer: React** course at CodersLab.

The main purpose of this project is to allow user to add notes and to remind him/her about notes that were added in the past during the same moon phase.

Other features: add/delete/edit notes, choose a category, choose a date, see a moon phase, see the list of notes.


## Tools and technologies

* Create React App
* React 16.13.1
* Sass version: 4.14.1
* JavaScript ES6
* HTML 5
* JSON server version: 0.16.1
* GIT


## Setup

Clone this repository to  the chosen directory on your computer using `git clone https://github.com/JuliaArtadi/SpiralNotes`

Go to the cloned project directory using command `cd SpiralNotes`.

To start SpiralNotes first install all dependencies with `npm i`.

Then install json-server globally by running `npm i -g json-server`.

After all the dependencies are installed successfully run json-server with the command `json-server --watch src/database/db.json`.

Open second terminal window and run `npm start` to run the app in development mode and `y` to run the app on another port as json-server is already running on your default port.

Page should open automatically, if not, try to open http://localhost:3001/.


## Further project development

* Add Firebase Authentication
* Add Firebase Hosting
* Switch from json-server database to Cloud Firestore
* Feature that will allow adding custom categories
* Add week cycle option


## Author

My name is Julia Bandera, I am a Junior FrontEnd Developer.  
You can find me on:  
[GitHub](https://github.com/JuliaArtadi)  
[LinkedIn](https://www.linkedin.com/in/julia-bandera/)  
or write me an email at julia.a.bandera@gmail.com.


# Inspirations

SpiralNotes were inspired by the [Moon Mandala tool](https://mandalasouldesigns.com/moon-charts-use/) and [Facebook Memories](https://www.facebook.com/help/www/1056848067697293/?helpref=hc_fnav).
