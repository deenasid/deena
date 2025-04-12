if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}

// Sample tasks - you can expand these lists
const truths = [
    "What's the most embarrassing thing you've ever done?",
    "Have you ever cheated on a test?",
    "What's your biggest fear?",
    "What's the weirdest dream you've ever had?",
    "If you could date any celebrity, who would it be?",
    "What's something you're glad your parents don't know about you?",
    "What's the biggest lie you've ever told?"
];

const dares = [
    "Do your best impression of a celebrity",
    "Let the group give you a new hairstyle",
    "Sing a song loudly in public",
    "Dance with no music for 1 minute",
    "Eat a spoonful of a condiment you dislike",
    "Let someone draw on your face with a pen",
    "Post an embarrassing photo on social media"
];

function getNewTask(type) {
    const taskArea = document.getElementById('taskArea');
    let randomTask;
    
    if (type === 'truth') {
        randomTask = truths[Math.floor(Math.random() * truths.length)];
        taskArea.style.border = "2px solid #4facfe";
    } else {
        randomTask = dares[Math.floor(Math.random() * dares.length)];
        taskArea.style.border = "2px solid #f093fb";
    }
    
    // Add animation
    taskArea.style.animation = "none";
    void taskArea.offsetWidth; // Trigger reflow
    taskArea.style.animation = "fadeIn 0.5s";
    
    taskArea.textContent = randomTask;
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);