var teamNames = ["", ""];

$('div.team-one > div.team-name > p > input').on('input',function(e){
	teamNames[0] = getTeamName(1);
	console.log(teamNames);
});

$('div.team-two > div.team-name > p > input').on('input',function(e){
	teamNames[1] = getTeamName(2);
	console.log(teamNames);
});