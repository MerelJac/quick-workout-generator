// link button to HTML
var startWorkoutBtn = document.querySelector("#get-started-btn");

// test that the button works 
startWorkoutBtn.addEventListener("click", function () { console.log("Hi!") });

// insert variables to be randomized later
var exercises = ['Push-Ups', 'Pull-Ups', 'Sit Ups', 'Plank', 'Squats', 'Deadlifts', 'Rear Foot Elevated Split Squats', 'Calf Raises', 'Jog', 'Chest Press', 'Bicep Curls', 'Single Leg Deadlifts', 'Fire Hydrants', 'Donkey Kicks', 'Tricep Extensions', 'Hip Bridges', 'Hip Thrusts', 'Pistol Squats'];

// how long the randomization should be
var workoutMaxLength = 10;
// blank array that random exercises will be pushed to
var workoutIncludes = [];

// create the function that will be used in the button push
var selectExercises = function () {

    for (var i = 0; i < workoutMaxLength; i++) {
        // create a li (list element) in html
        var li = document.createElement("li");
        // converts JavaScript object to string
        li.innerText = JSON.stringify(exercises[i]);
        // randomly picks exercises given the length of the exercise array
        var pickRandom = exercises[Math.floor(Math.random() * exercises.length)];
        console.log(pickRandom);
        // will exclude pushing an exercise if it is already in the new array 
        if (!workoutIncludes.includes(pickRandom)) {
            workoutIncludes.push(pickRandom)}
    }
    // how to insert elements into HTML using HTML syntax in JavaScript
    workoutIncludes.forEach(function (li) {
        document.querySelector("#printed-exercises-section").innerHTML += `<li><div><h1>${li}</h1><p>${"[insert reps/sets]"}</p></div></li>`
    })
};

// activate function with event listener
startWorkoutBtn.addEventListener("click", selectExercises);
