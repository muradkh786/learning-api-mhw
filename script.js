// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://mhw-db.com/weapons', true);

request.onload = function () {
    console.log("Reached Onload");
    const app = document.getElementById("root");
        
    const container = document.createElement("div");
    container.setAttribute("class", "container");
        
    app.appendChild(container);
    
    
    var data = JSON.parse(this.response);
    
    var newLine = "\r\n";
    
    data.forEach(weapon => {
//        console.log(weapon.assets.image);
        console.log(weapon.name);   
        
        const card = document.createElement('div');
//         card.setAttribute('class', 'card');
        card.className = 'card' + ' ' + weapon.type;
        
        const h1 = document.createElement('h1');
        h1.textContent = weapon.name;
        
        const image = document.createElement("img");
        image.src = weapon.assets.image;
        
        const p = document.createElement("p");
        p.textContent = "Attack: " + weapon.attack.display + "\n" + "Raw: " + weapon.attack.raw;
        
        const red = document.createElement("span");
        red.setAttribute('class', 'red');
        if(weapon.sharpness.red) {
            const redLen = weapon.sharpness.red;
        }
        red.style.width = String(redLen) + "px";
        
        const orange = document.createElement("span");
        orange.setAttribute('class', 'orange');
        const orangeLen = weapon.sharpness.orange;
        orange.style.width = String(orangeLen) + "px";
        
        const yellow = document.createElement("span");
        yellow.setAttribute('class', 'yellow');
        const yellowLen = weapon.sharpness.yellow;
        yellow.style.width = String(yellowLen) + "px";
        
        const green = document.createElement("span");
        green.setAttribute('class', 'green');
        const greenLen = weapon.sharpness.green;
        green.style.width = String(greenLen) + "px";
        
        const blue = document.createElement("span");
        blue.setAttribute('class', 'blue');
        const blueLen = weapon.sharpness.blue;
        blue.style.width = String(blueLen) + "px";
        
        const white = document.createElement("span");
        white.setAttribute('class', 'white');
        const whiteLen = weapon.sharpness.white;
        white.style.width = String(whiteLen) + "px";white
        
        container.appendChild(card);
        
        card.appendChild(h1);
        card.appendChild(image);
        card.appendChild(p);
        card.appendChild(red);
        card.appendChild(orange);
        card.appendChild(yellow);
        card.appendChild(green);
        card.appendChild(blue);
        card.appendChild(white);
        
    })
};

//request.onload = function () {
//    
//    const app = document.getElementById("root");
//    
//    const logo = document.createElement("img");
//    logo.src = "https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";
//    
//    const container = document.createElement("div");
//    container.setAttribute('class', 'container');
//    
//    app.appendChild(logo);
//    app.appendChild(container);
//    
//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response);
//    
//    if (request.status >= 200 && request.status < 400) {
//        data.forEach(movie => {
//        
//            // Create a div with a card class
//            const card = document.createElement('div');
//            card.setAttribute('class', 'card');
//            
//            // Create an h2 and set the text content to the film's title
//            const h1 = document.createElement('h1');
//            h1.textContent = movie.title;
//            
//            // Create a p and set the text content to the film's description
//            const p = document.createElement('p');
//            movie.description = movie.description.substring(0, 300); // Limit to the first 300 characters
//            p.textContent = `${movie.description}...`; // End with an ellipses
//            
//            // Append the cards to the container element
//            container.appendChild(card);
//            
//            // Each card will contain an h1 and a p
//            card.appendChild(h1);
//            card.appendChild(p);
//            
//        
//        
//        });
//    }
//    else {
//        const errorMessage = document.createElement('marquee');
//        errorMessage.textContent = `It ain't workin!`
//        app.appendChild(errorMessage);
//    }
//    
//};

// Send request
request.send();
