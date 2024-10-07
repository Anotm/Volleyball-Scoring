function updateTeamNameDropDown(teamNameList) {
	const team1Name = teamNameList[0];
	const team2Name = teamNameList[1];
	$("select.select-team-name option:nth-child(2)").attr("value", team1Name);
	$("select.select-team-name option:nth-child(3)").attr("value", team2Name);

	$("select.select-team-name option:nth-child(2)").text(team1Name);
	$("select.select-team-name option:nth-child(3)").text(team2Name);
}

function setOtherTeamName(el) {
	const parentTable = $(el).parent().parent().parent().parent();
	const parentTableClass = $(parentTable).attr("class");
	const parentSet = $(parentTable).parent();
	console.log(parentTable);
	console.log(parentSet);
}