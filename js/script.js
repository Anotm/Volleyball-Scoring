var teamNames = ["", ""];
var teamPlayers = [[], []];

$('div.team-one > div.team-name > p > input').on('input', function(){
	teamNames[0] = getTeamName(1);
	updateTeamNameDropDown(teamNames);
	// console.log(teamNames);
});

$('div.team-two > div.team-name > p > input').on('input', function(){
	teamNames[1] = getTeamName(2);
	updateTeamNameDropDown(teamNames);
	// console.log(teamNames);
});

$('div.team-one > table > tbody > tr > td > input').on('input', function(){
	teamPlayers[0] = getTeamPlayers(1);
	// console.log(teamPlayers);
});

$('div.team-two > table > tbody > tr > td > input').on('input', function(){
	teamPlayers[1] = getTeamPlayers(2);
	// console.log(teamPlayers);
});

$("select.select-team-name").on("change", function(){
	setOtherTeamName(this);
});