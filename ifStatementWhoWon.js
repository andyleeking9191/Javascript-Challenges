/*
Challenge:
    Make a function that takes Team 1 and Team 2 goals as arguments and output the final result of the match:
    - "Team 1 won", if Team 1's score is higher than Team 2's score
    - "Team 2 won", if Team 2's score is higher than Team 1's score
    - "Draw", if the scores are equal  
*/

function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    // function call
    finalResult(goalsTeam1, goalsTeam2);

}
//complete the function
function finalResult(team1Score, team2Score) {
    if (team1Score == team2Score) {
        console.log('Draw');
    } else if (team1Score > team2Score) {
        console.log('Team 1 won');
    } else {
        console.log('Team 2 won');
    }
}