var teamNames = ["", ""];
var teamPlayers = [[], []];
var setNumber = 1;

$('table.team-on-right td.pos-num-and-vis').each(function(index){
	var num = index % 6 + 1;
	$(this).append(`
		<div class="court-visual">
		${num}
			<table class="players">
				<tbody>
				<tr>
					<td class="pos2"></td>
					<td class="pos1"></td>
				</tr>
				<tr>
					<td class="pos3"></td>
					<td class="pos6"></td>
				</tr>
				<tr>
					<td class="pos4"></td>
					<td class="pos5"></td>
				</tr>
				</tbody>
			</table>
		</div>
	`);
});

$('table.team-on-left td.pos-num-and-vis').each(function(index){
	var num = index % 6 + 1;
	$(this).append(`
		<div class="court-visual">
		${num}
			<table class="players">
				<tbody>
				<tr>
					<td class="pos5"></td>
					<td class="pos4"></td>
				</tr>
				<tr>
					<td class="pos6"></td>
					<td class="pos3"></td>
				</tr>
				<tr>
					<td class="pos1"></td>
					<td class="pos2"></td>
				</tr>
				</tbody>
			</table>
		</div>
	`);
});

for (var i = 1; i <= 6; i++) {
	$(`div.sets div.set > table td.pos-num-and-vis:contains("${i}") td.pos${i}`).addClass("selected");
}

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

$('input#left-team-fs-input').prop("checked", true);

$('input[type=radio][name=first_serve]').change(function() {
    if (this.value == 'Left Team') {
        currentTeamServing = 1;
    }
    else if (this.value == 'Right Team') {
        currentTeamServing = 2;
    }
    console.log(currentTeamServing);
});

for (var i = 0; i < 4; i++) {
  var $div = $('div[id^="set"]:last');
  var num = parseInt( $div.prop("id").match(/\d+/g), 10 ) +1;
  var $clon = $div.clone().prop('id', 'set'+num );
  $div.after( $clon );
}

$('div.team-one > table > tbody > tr > td > input').on('input', function(){
	teamPlayers[0] = getTeamPlayers(1);
	// console.log(teamPlayers);
});

$('div.team-two > table > tbody > tr > td > input').on('input', function(){
	teamPlayers[1] = getTeamPlayers(2);
	// console.log(teamPlayers);
});

$('select.select-team-name').on("change", function(){
	setOtherTeamName(this);
});

$('div.sets > div.set table.team-on-left input.player-in').on('input', function(){
	var setID = $(this).parent().parent().parent().parent().parent().attr('id');
	rosters = getRosters(setID);
	setCourtVisual(setID);
});

$('div.sets > div.set table.team-on-right input.player-in').on('input', function(){
	var setID = $(this).parent().parent().parent().parent().parent().attr('id');
	rosters = getRosters(setID);
	setCourtVisual(setID);
});