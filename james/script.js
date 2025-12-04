const messagesContainer = document.getElementById('messagesContainer');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

const tangentialResponses = {
    greetings: [
        "Did you know that penguins can't fly but they're excellent swimmers?",
        "The weather today reminds me of toast. Crispy.",
        "Hello to you too! Fun fact: socks rarely come in threes.",
    ],
    food: [
        "That's interesting, but have you considered learning the accordion?",
        "Food is great, but so is the Pythagorean theorem: a² + b² = c²",
        "I once knew a sandwich. We don't talk anymore.",
    ],
    weather: [
        "Weather, sure, but did you hear about the invention of the stapler in 1841?",
        "Clouds are basically sky marshmallows if you think about it incorrectly.",
        "The best weather for contemplating rubber ducks is partly cloudy.",
    ],
    time: [
        "Time is a flat circle, but pizza is a round circle. Coincidence?",
        "Speaking of time, my watch runs on pure imagination.",
        "The concept of yesterday is just today's tomorrow thinking backwards.",
    ],
    technology: [
        "Technology is cool, but have you tried yelling at clouds? Very therapeutic.",
        "Computers are basically fancy rocks we taught to think. Also, I like turtles.",
        "Binary code is just computers speaking in whispers. 01001000 01101001",
    ],
    animals: [
        "Animals are nature's way of making furniture more interesting.",
        "If birds aren't real, then why do they taste like chicken? Checkmate.",
        "I'm more of a mineral person myself. Quartz is very reliable.",
    ],
    sports: [
        "Sports! That reminds me: have you filed your taxes this year?",
        "The real MVP is whoever invented sliced bread. What an athlete.",
        "I prefer competitive sitting. I'm ranked #47 in my neighborhood.",
    ],
    work: [
        "Work is important, but so is the alphabet. Without it, we'd have nothing to work with.",
        "Productivity tip: try doing things while standing on one leg. It's science.",
        "My career goal is to become a professional cloud namer. Cumulus Greg.",
    ],
    music: [
        "Music is just air moving around in interesting ways. Like a very talented breeze.",
        "My favorite instrument is the triangle. It's got all the right angles.",
        "Did you know that Beethoven never heard a car alarm? Lucky guy.",
    ],
    default: [
        "That's a great point! It reminds me that giraffes only sleep 30 minutes a day.",
        "Interesting perspective. Have you considered becoming a lighthouse keeper?",
        "I see where you're going with this. On an unrelated note, the moon is roughly 238,855 miles away.",
        "Absolutely! This ties directly into why shoelaces exist in pairs.",
        "You raise an excellent question about carpentry. Wait, what were we talking about?",
        "That makes sense. Similarly, did you know that octopi have three hearts?",
        "I couldn't agree more with your stance on continental drift.",
        "Your message has been received and will be processed in the order it was not asked.",
        "That's exactly what someone who owns seven houseplants would say!",
        "Fascinating! This reminds me of the time I didn't meet Napoleon.",
    ]
};

function getRandomResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    let pool = tangentialResponses.default;

    if (msg.match(/hello|hi|hey|greetings|sup/)) {
        pool = tangentialResponses.greetings;
    } else if (msg.match(/food|eat|hungry|pizza|dinner|lunch/)) {
        pool = tangentialResponses.food;
    } else if (msg.match(/weather|rain|sun|cloud|temperature/)) {
        pool = tangentialResponses.weather;
    } else if (msg.match(/time|clock|hour|minute|date|day/)) {
        pool = tangentialResponses.time;
    } else if (msg.match(/computer|phone|tech|internet|app|code/)) {
        pool = tangentialResponses.technology;
    } else if (msg.match(/dog|cat|animal|pet|bird|fish/)) {
        pool = tangentialResponses.animals;
    } else if (msg.match(/sport|game|play|football|soccer|basketball/)) {
        pool = tangentialResponses.sports;
    } else if (msg.match(/work|job|career|office|boss|meeting/)) {
        pool = tangentialResponses.work;
    } else if (msg.match(/music|song|sing|concert|band/)) {
        pool = tangentialResponses.music;
    }

    return pool[Math.floor(Math.random() * pool.length)];
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.textContent = text;
    
    messageDiv.appendChild(bubbleDiv);
    messagesContainer.appendChild(messageDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') return;
    
    addMessage(message, 'user');
    messageInput.value = '';
    
    setTimeout(() => {
        const response = getRandomResponse(message);
        addMessage(response, 'bot');
    }, 500 + Math.random() * 1000);
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

messageInput.focus();