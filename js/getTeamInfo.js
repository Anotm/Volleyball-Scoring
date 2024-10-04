
function getTeamName(n) {
	if (n == 1) {
		return $("div.team-one > div.team-name > p > input").val();
	} else if (n == 2) {
		return $("div.team-two > div.team-name > p > input").val();
	} else {
		throw "Team number not 1 or 2";
	}
}