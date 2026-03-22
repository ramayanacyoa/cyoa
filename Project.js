// Global variable to track the current scene
var currentScene = 0;
var playerName = "";
var ruler = "";
var spouse = "";

function restart() {
    currentScene = 0;
    document.getElementById('storyCard').innerHTML = "<!-- this is where the story will be displayed --><div id='questionTitle'><h2 id='Question'>Question 1</h2></div><div id='choices'></div>";
}

function startAdventure() {
    // Get the values from the inputs
    playerName = document.getElementById('playerName').value;

    // Check if name is entered
    if (playerName === "") {
        alert("Please enter your name!");
        return;
    }

    // Start the adventure at scene 1
    currentScene = 1;
    showScene();
}

function showScene() {
    var storyCard = document.getElementById('storyCard');
    if (currentScene === 1) {
        storyCard.innerHTML = "<h2>Hello!</h2><p>Are you a boy or a girl?</p><div id='choices'><button onclick='makeChoice(1)'>Boy</button><button onclick='makeChoice(2)'>Girl</button></div>";
    } else if (currentScene === 2) {
        // Put into exile
        storyCard.innerHTML = "<h2>Welcome, " + playerName + "!</h2><p>You are a brave warrior in ancient India from the Kingdom of Ayodhya. You are soon to be crowned the " + ruler + ", as your father, King Dasharatha is getting old. </p> <p>One of your father's wives, Kaikeyi, demands her own son, your younger brother, Bharata be crowned the new king. Your father is left with no choice but to exile you from the kingdom.</p> <p> Do you:</p><div id='choices'><button onclick='makeChoice(3)'>Argue back</button><button onclick='makeChoice(4)'>Accept the exile</button></div>";
    } else if (currentScene === 3) {
        // Argue against exile
        storyCard.innerHTML = "<h2>You choose to argue back.</h2><p>Dasharatha is moved by your words and begins to argue with Kaikeyi. Though, he is ultimately unable to resist her demands, as he had owed her a great favor for years. You are left with no choice but to agree.</p><div id='choices'><button onclick='makeChoice(4)'>Continue</button></div>";
    } else if (currentScene === 4) {
        // Accept the exile
        storyCard.innerHTML = "<h2>You choose to accept the exile.</h2><p>You prepare to leave, but your brother Lakshmana and your " + spouse + ", Sita insist to go along on your journey with you. Do you:</p><div id='choices'><button onclick='makeChoice(6)'>Go with them</button><button onclick='makeChoice(5)'>Go alone</button></div>";
    
    } else if (currentScene === 5) {
        // Go alone
        storyCard.innerHTML = "<h2>You choose to go alone.</h2><p>You decide to go alone, believing that it will be easier for your loved ones to stay behind and live a comfortable life. You set out on your journey, facing many challenges and adventures along the way. Though you miss your loved ones, you must stay.</p><div id='choices'><button onclick='makeChoice(8)'>Continue</button></div>";
    }
     else if (currentScene === 6) {
        // Go with them
        storyCard.innerHTML = "<h2>You choose to go with them.</h2><p>You, Lakshmana, and Sita set out on your journey together. You face many challenges and adventures along the way, but you are grateful to have your loved ones by your side.</p><div id='choices'><button onclick='makeChoice(8)'>Continue</button></div>";
    } else if (currentScene === 8) {
        storyCard.innerHTML = "<h2>The journey continues...</h2><p>Your adventure through the Ramayana is unfolding and your choices are writing history.</p>";
    }
}

function makeChoice(choice) {
    if(currentScene === 1) {
        if (choice === 1) {
            ruler = ("king")
            spouse = ("wife")
            currentScene = 2; // Move to the next scene after choosing
    }
        else if (choice === 2) {
            ruler = ("queen")
            spouse = ("husband")
            currentScene = 2; // Move to the next scene after choosing
        }
    } else if (currentScene === 2) {
        if (choice === 3) {
            currentScene = 3; // Argue back
        } else if (choice === 4) {
            currentScene = 4; // Accept exile
        }
    } else if (currentScene === 3) {
        if (choice === 4) {
            currentScene = 4; // Continue after arguing back
        }
    } else if (currentScene === 4) {
        if (choice === 5) {
            currentScene = 5; // Go alone
        } else if (choice === 6) {
            currentScene = 6; // Go with them
        }
    } else if (currentScene === 5) {
        if (choice === 8) {
            currentScene = 8; // Continue after going alone
        }
    } else if (currentScene === 6) {
        if (choice === 8) {
            currentScene = 8; // Continue after going with them
        }
    }
    showScene();
        
    }
