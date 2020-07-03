var score = 0;
var ball = 0;
var show1 = false;
var res = "";
var scoreRow = 0;
var nextRow = 501;
var totalScore = 0;
var maxScore = 0;
var player = "";
var timer = 0;
var myvar;
var myFunction = function () {
    document.getElementById('a').innerHTML = "0";
    document.getElementById('b').innerHTML = "0";
    myvar = setInterval(function () {
        var k = 1;
        document.getElementById("timer").innerHTML = timer.toString();
        timer = timer + k;
        console.log(timer);
        if (timer === 60) {
            if (ball <= 60) {
                disbtn1()
                undisbtn2()
                timer = 0;
            }
            else {
                showRes()
                show1 = false;
                disbtn2()
                check()
                timer = 0;
                clearInterval(myvar);
            }
        }
    }, 1000);
};
var updateTotalscore = function () {
    if (scoreRow > maxScore) {
        maxScore = scoreRow;
        player = "Player " + (ball / 6 + 1).toString();
    }
    document.getElementById(nextRow.toString()).innerHTML = scoreRow.toString();
    scoreRow = 0;
    nextRow++;
};
var generateResults = function () {
    var scoreA = parseInt(document.getElementById("a").innerText);
    var scoreB = parseInt(document.getElementById("b").innerText);
    if (scoreA > scoreB)
        res = "Team A";
    else if (scoreA < scoreB)
        res = "Team B";
    else
        res = "None";
        var team
        if(ball>60)
        team = "Team B"
        else
        team = "Team A"
       document.getElementById("Results").innerHTML = "Match Won By " + res;
       document.getElementById("Man").innerHTML = "Man of the Match : " + player + "\nScore : " + maxScore.toString() + " Of " + team; 
};
var setScore = function (id) {
    ball++;
    if (ball >= 61 && id === 'a') {
        show1 = true;
        ball--;
        totalScore = 0;
        timer = 0;
        check();
        return;
    }
    if (ball > 120) {
        show1 = false;
        totalScore = 0;
        scoreRow = 0;
        clearInterval(myvar);
        check()
        showRes()
        return;
    }
    score = Math.floor(Math.random() * 7);
    scoreRow = scoreRow + score;
    if (score === 0) {
        document.getElementById(ball.toString()).innerHTML = score.toString();
        while (ball % 6 != 0)
            ball++;
        updateTotalscore();
        // console.log(ball)
    }
    else {
        totalScore = totalScore + score;
        document.getElementById(id).innerHTML = totalScore.toString();
        //  console.log(ball +" "+score)
        document.getElementById(ball.toString()).innerHTML = score.toString();
        if (ball % 6 === 0)
            updateTotalscore();
    }
};
