$(document).ready(function(){
	$("#birthday").datepicker();

	var pls = [
		"ActionScript",
		"AppleScript",
		"ASP",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python"
		];

	$( "#pls" ).autocomplete({
		source: pls
	});
});