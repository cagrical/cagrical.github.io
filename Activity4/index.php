<!DOCTYPE html>

<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />

</head>

<body>
<?php

$fromValue = $_GET["fromValue"];
$fromCurr = substr($_GET["fromCurrencies"], 1, 3);
$toCurr = substr($_GET["toCurrencies"], 1, 3);

if($fromValue){
	$currencies = array("USD" => 1, "CAD" => 1.35, "EUR" => 0.92);

	$toValue = $fromValue * $currencies[$toCurr] / $currencies[$fromCurr];
}else{
	$toValue = "";
	$fromValue = "";
}
?>
	<form method="GET" action="index.php">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="fromValue" value="<?=$fromValue?>"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="fromCurrencies">
						<option value="FUSD" <?=($_GET["fromCurrencies"] == "FUSD") ? "selected" : ""?>/> USD </option>
						<option value="FCAD" <?=($_GET["fromCurrencies"] == "FCAD") ? "selected" : ""?>/> CAD </option>
						<option value="FEUR" <?=($_GET["fromCurrencies"] == "FEUR") ? "selected" : ""?>/> EUR </option>
					</select>
				</td>	
			</tr>
			<tr>
				<td>
					To:
				</td>
				<td>
					<input type="text" name="toValue" value="<?=$toValue?>"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="toCurrencies">
						<option value="TUSD" <?=($_GET["toCurrencies"] == "TUSD") ? "selected" : ""?>/> USD </option>
						<option value="TCAD" <?=($_GET["toCurrencies"] == "TCAD") ? "selected" : ""?>/> CAD </option>
						<option value="TEUR" <?=($_GET["toCurrencies"] == "TEUR") ? "selected" : ""?>/> EUR </option>
					</select>
				</td>	
			</tr>
				<tr>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					<input type="submit" value="convert"/>
				</td>	
			</tr>
		</table>
		
	</form>		
</body>