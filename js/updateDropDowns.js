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
	
	var otherTableClass = "";
	if (parentTableClass == "team-on-left") {
		otherTableClass = "team-on-right";
	} else if (parentTableClass == "team-on-right") {
		otherTableClass = "team-on-left";
	}
	const otherSelectString = ".sets #set" + setNumber + " table." + otherTableClass + " tbody tr td select.select-team-name";
	const otherSelect = $(otherSelectString);

	const nonSelectedOption = $(el).children('option:not(:selected)')[1];
	const nonSelectedName = nonSelectedOption.text;

	$(otherSelectString).children('option[value = "' + nonSelectedName + '"]').prop('selected', true);
}