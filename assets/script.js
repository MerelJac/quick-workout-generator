// link button to HTML
var startWorkoutBtn = document.querySelector("#get-started-btn");
startWorkoutBtn.addEventListener("click", function() {console.log("Hi!")});

// insert variables

var exercises = ['Push-Ups','Pull-Ups','Sit Ups','Plank','Squats','Deadlifts','Rear Foot Elevated Split Squats','Calf Raises','Jog','Chest Press','Bicep Curls','Single Leg Deadlifts','Fire Hydrants','Donkey Kicks','Tricep Extensions','Hip Bridges','Hip Thrusts','Pistol Squats']; 

var workoutMaxLength = 10;

// insert function printExercise
var printExercise = function() {
    var randomize = Math.floor(Math.random() * exercises.length);
    // var newExercise = exercises[randomize];
    console.log(randomize);
}


// activate function with event listener

startWorkoutBtn.addEventListener("click", printExercise);
