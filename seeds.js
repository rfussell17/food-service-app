let time = today.getHours() + ":" + today.getMinutes();

module.exports = [
    {
        title: "Pizza",
        description: "Large vegetable pizza on cauliflower crust - peppers, onions, sundried tomato, soy cheese",
        price: "13",
        image: url('https://unsplash.com/photos/oBbTc1VoT-0'),
        isStarted: false ,
        cookTime: 600,
        startTime: time,
        elapsedTime: null
    },
];