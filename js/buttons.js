var currentTeamServing = 1;
var serveSwitchCounter = 1;
var playerServing = 0.5;
var score = [0,0];

function setFirstServe(num) {
	currentServing = num;
}

function point(num) {
	score[num-1] += 1;

	if (num == 1) {
		var side = "team-on-left";
	} else if (num == 2) {
		var side = "team-on-right";
	}

	$("div.sets div#set" + setNumber + " table." + side + " div.team-score").text(score[num-1]);

	if (currentTeamServing != num) {
		serveSwitchCounter += 1;
		playerServing += 0.5;
		currentTeamServing = num;
		rotate(currentTeamServing);
	}

	var serverNumber = (Math.floor(playerServing) % 6 + 1) * 10 + Math.floor(serveSwitchCounter/12) + 1;
	$("div.sets div#set" + setNumber + " table." + side + " td.serve-" + serverNumber).text(score[num-1]);
	// console.log($("div.sets div#set" + setNumber + " table." + side + " td.serve-" + serverNumber));
	// console.log("div.sets div#set" + setNumber + " table." + side + " td.serve-" + serverNumber);
}

function teamTimeOut(el) {
	var parent = $(el).parent();
	console.log(el)
	console.log(parent);
	$(parent).empty();
	$(parent).text(score[0] + "/" + score[1]);

	$(parent).next().children().attr('disabled', false);
}
