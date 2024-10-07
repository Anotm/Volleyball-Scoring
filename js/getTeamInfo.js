
function getTeamName(n) {
	if (n == 1) {
		return $("div.team-one > div.team-name > p > input").val();
	} else if (n == 2) {
		return $("div.team-two > div.team-name > p > input").val();
	} else {
		throw "Team number not 1 or 2";
	}
}

function getTeamPlayers(n) {
	var teamNum = "";
	var teamPlayers = [];

	if (n == 1) {
		teamNum = "team-one";
	} else if (n == 2) {
		teamNum = "team-two";
	} else {
		throw "Team number not 1 or 2";
	}
	$("div." + teamNum + " table tbody tr").each(function(index) {
		var dic = {};

		var tdNum = $(this).children("td")[0];
		var tdName = $(this).children("td")[1];
		var tdSub = $(this).children("td")[2];

		var numVal = $(tdNum).children().val();
		var nameVal = $(tdName).children().val();
		var subVal = $(tdSub).children().is(":checked");

		if (numVal && nameVal) {
			dic["Number"] = numVal;
			dic["Name"] = nameVal;
			dic["Spare"] = subVal;
			teamPlayers.push(dic);
		}
	});
	return teamPlayers;
}