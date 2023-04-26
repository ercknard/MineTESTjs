function talk() {
    var npcText = document.getElementById("npc-text");
    var messages = [
      "Hello, adventurer!",
      "I'm Pepe.",
      "Welcome to CryptechTest.",
      "Wanna play with me?",
      "Come back soon!"
    ];
    var index = 0;
    setInterval(function() {
      npcText.innerText = messages[index];
      index++;
      if (index >= messages.length) {
        index = 0;
      }
    }, 3000);
  }
  
  talk();