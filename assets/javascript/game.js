//var wins = 0
//var losses = 0
var totalScore = 0
//var box_1 = 0
var randomNumber = Math.floor((Math.random() * 12) + 1);

console.log(randomNumber)

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var goalNumber = randomIntFromInterval(19, 120)


//$("#total_score").text(totalScore)


$(document).ready(function () {
    reset()
    var wins = 0
    var losses = 0
    console.log(goalNumber)

    function reset() {
        var totalScore = 0
        var goalNumber = randomIntFromInterval(19, 120)
        box_1 = Math.floor((Math.random() * 12) + 1);
        box_2 = Math.floor((Math.random() * 12) + 1);
        box_3 = Math.floor((Math.random() * 12) + 1);
        box_4 = Math.floor((Math.random() * 12) + 1);
        //somthing about reseting the crystals
    }
    
    

    $("#box_1").on("click", function () {
        winOrNo()
        totalScore = box_1 + totalScore
        $(".random-number").text(goalNumber);
        $("#total_score").text(totalScore)
        $("#wins").text(wins)
        $("#losses").text(losses)

    });

    $("#box_2").on("click", function () {
        winOrNo()
        totalScore = box_2 + totalScore
        $(".random-number").text(goalNumber);
        $("#total_score").text(totalScore)
        $("#wins").text(wins)
        $("#losses").text(losses)
    });

    $("#box_3").on("click", function () {
        winOrNo()
        totalScore = box_3 + totalScore
        $(".random-number").text(goalNumber);
        $("#total_score").text(totalScore)
        $("#wins").text(wins)
        $("#losses").text(losses)
    });

    $("#box_4").on("click", function () {
        winOrNo()
        totalScore = box_4 + totalScore
        $(".random-number").text(goalNumber);
        $("#total_score").text(totalScore)
        $("#wins").text(wins)
        $("#losses").text(losses)
    });



    


    function winOrNo() {
        if (totalScore === goalNumber) {
            wins++
            totalScore = 0
            goalNumber = randomIntFromInterval(19, 120)
            box_1 = Math.floor((Math.random() * 12) + 1);
            box_2 = Math.floor((Math.random() * 12) + 1);
            box_3 = Math.floor((Math.random() * 12) + 1);
            box_4 = Math.floor((Math.random() * 12) + 1);
        } else if (totalScore > goalNumber) {
            losses++
            totalScore = 0
            goalNumber = randomIntFromInterval(19, 120)
            box_1 = Math.floor((Math.random() * 12) + 1);
            box_2 = Math.floor((Math.random() * 12) + 1);
            box_3 = Math.floor((Math.random() * 12) + 1);
            box_4 = Math.floor((Math.random() * 12) + 1);
        }
    }


    console.log("box 1 " + box_1)
    console.log("box 2 " + box_2)
    console.log("box 3 " + box_3)
    console.log("box 4 " + box_4)





});