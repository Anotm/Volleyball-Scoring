var rotaOffset = [0,0];
var rosters = [];

function getRosters(setID) {
	var rosters = []
	var leftTeam = [];
	var rightTeam = [];

	for (var i = 1; i <= 6; i++) {
		leftTeam.push($("div.sets div#" + setID + " .team-on-left input.p" + i).val());
		rightTeam.push($("div.sets div#" + setID + " .team-on-right input.p" + i).val());
	}

	rosters.push(leftTeam);
	rosters.push(rightTeam);
	return rosters;
}

function setCourtVisual(setID) {
	for (var i = 0; i < 6; i++) {
		var j1 = (i + rotaOffset[0]) % 6 + 1;
		var j2 = (i + rotaOffset[1]) % 6 + 1;
		console.log(j1,j2, rosters);
		// $("div.sets div#" + setID + " div.court-visual-left-team td.pos" + j1).empty();
		// $("div.sets div#" + setID + " div.court-visual-right-team td.pos" + j2).empty();

		$("div.sets div#" + setID + " div.court-visual-left-team td.pos" + j1).text(rosters[0][i]);
		$("div.sets div#" + setID + " div.court-visual-right-team td.pos" + j2).text(rosters[1][i]);
		console.log($("div.sets div#" + setID + " div.court-visual-left-team td.pos" + j1));
	}
}

function rotate(setID, side) {
	rotaOffset[side-1] += 5;
	setCourtVisual(setID);
}