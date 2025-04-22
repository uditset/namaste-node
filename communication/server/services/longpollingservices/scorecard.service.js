let scoreCardData = {
    "MS Dhoni": "21 runs in 4 Balls",
    "Virat Kohli": "15 runs in 6 Balls",
    "Sehwag": "50 runs in 30 Balls",
}

export const getScoreCardDataService = () => {
    return scoreCardData;
}

export const updateScoreCardDataService = (newData) => {
    console.log(newData);
    try {
        scoreCardData = {...scoreCardData,...newData};
        return scoreCardData;
    } catch (error) {
        console.log(error);
    }
}