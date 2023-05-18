// link button to HTML
var startWorkoutBtn = document.querySelector("#get-started-btn");

startWorkoutBtn.addEventListener("click", function() {console.log("Hi!")});

// insert variables

var exercises = ['Push-Ups','Pull-Ups','Sit Ups','Plank','Squats','Deadlifts','Rear Foot Elevated Split Squats','Calf Raises','Jog','Chest Press','Bicep Curls','Single Leg Deadlifts','Fire Hydrants','Donkey Kicks','Tricep Extensions','Hip Bridges','Hip Thrusts','Pistol Squats']; 

//playing with object sets - commented out for now
// var exerciseSets =
//     {move: 'Push Ups',
//     reps: 'max',
//     sets: '3',
//     };
// document.querySelector('section').innerHTML = exerciseSets.move;

var workoutMaxLength = 10;

// function printExercise
var printExercises = function() {
    var exerciseList = [];
    for (var i = 0; i < workoutMaxLength; i++) {
    var pickRandom = exercises[Math.floor(Math.random() * exercises.length)];
    console.log(pickRandom);
    exerciseList.push(pickRandom);
    exerciseList.join('\r\n'); // should this start a new line?
    document.querySelector('#printed-exercises-section').innerHTML = exerciseList;
    }
    // next: separate variables AND prevent duplicates. 
}   


// activate function with event listener

startWorkoutBtn.addEventListener("click", printExercises);
