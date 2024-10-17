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

function setCourtVisual() {
	// for (var i = 0; i < 6; i++) {
	// 	var j1 = (i + rotaOffset[0]) % 6 + 1;
	// 	var j2 = (i + rotaOffset[1]) % 6 + 1;
	// 	// console.log(j1,j2, rosters);

	// 	$("div.sets div#set" + setNumber + " div.court-visual-left-team td.pos" + j1).text(rosters[0][i]);
	// 	$("div.sets div#set" + setNumber + " div.court-visual-right-team td.pos" + j2).text(rosters[1][i]);
	// 	console.log($("div.sets div#set" + setNumber + " div.court-visual-left-team td.pos" + j1));
	// 	console.log("div.sets div#set" + setNumber + " div.court-visual-left-team td.pos" + j1);
	// }

	$("div.sets div.set > table td.pos-num-and-vis td.selected").removeClass("selected");

	for (var i = 0; i < 6; i++) {
		var j1 = (i + rotaOffset[0]) % 6 + 1;
		var j2 = (i + rotaOffset[1]) % 6 + 1;

		$(`div.sets div#set${setNumber} > table.team-on-left td.pos-num-and-vis:contains("${i+1}") td.pos${j1}`).addClass("selected");
		$(`div.sets div#set${setNumber} > table.team-on-right td.pos-num-and-vis:contains("${i+1}") td.pos${j2}`).addClass("selected");

		// console.log("div.sets div#set" + setNumber + " > table.team-on-left td.pos-num-and-vis td.pos" + j1);
		// console.log($("div.sets div#set" + setNumber + " > table.team-on-left td.pos-num-and-vis td.pos" + j1));
	}
}

function rotate(side) {
	rotaOffset[side-1] += 5;
	setCourtVisual();
}