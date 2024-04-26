var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {

	$("name").focus();

	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function addScore()
{
	let name = $("name").value;
	let score = $("score").value;

	if(name == "" || score == "" || score < 0 || score > 100 || isNaN(score)){
		alert("You must enter a name and a valid score");
	}else{
		names.push(name);
		scores.push(parseInt(score));
		$("name").focus();
	}
}

function displayResults()
{
	var average = 0;
	var max = 0, maxIndex = 0;

	for(var i=0;i<scores.length;i++)
	{
		average = (average * (i) + scores[i]) / (i + 1);

		if(max < scores[i]){
			max = scores[i];
			maxIndex = i;
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /><p> Average score is "+average + "</p><p> High score is " + names[maxIndex] + " with a score of " + max+"</p>";
}

function displayScores()
{
	$("scores_table").innerHTML = "<h2> Scores </h2><tr><th style='text-align:start'>Name</th><th style='text-align:start'>Score</th></tr>"
	for(var i = 0; i < scores.length; i++)
	{
		$("scores_table").innerHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
	}
	
}

