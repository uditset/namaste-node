console.log("index.js is running");
let currentScore;

// document.addEventListener('DOMContentLoaded', () => {
const getUserData = async () => {
    try {
        const response = await fetch('/homedata');
        const data = await response?.json();
        document.getElementById('data').innerHTML = JSON.stringify(data);
    } catch (error) {
        console.log("error occured in getting the response: ",error?.message);
    }
}

const getScoreDataLongPolling = async () => {
    try {
        console.log(currentScore);
        const response = await fetch('/cricket/score-update',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: currentScore
        });
        const data = await response?.json();
        currentScore = JSON.stringify(data)
        document.getElementById('score-data').innerHTML = currentScore;
    } catch (error) {
        console.log("Error in fetching Score Data Long Polling");
    } finally {
        getScoreDataLongPolling();
    }
}

const getUserDataIntervalId = setInterval(() => {
    getUserData();
},5000);
// });

getUserData();
getScoreDataLongPolling();