<!DOCTYPE html>

<html lang="en">
<head>
    <title>Form</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<form action="Activity5-preview.php" method="POST">
		<table>
		<tr>
				<td>Name:</td>
				<td><input type="text" name="name"></td>
			</tr>
			<tr>
				<td>Username:</td>
				<td><input type="text" name="username"></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="password" name="password"></td>
			</tr>
			<tr>
				<td>Address:</td>
				<td><input type="text" name="address"></td>
			</tr>
			<tr>
				<td>Country:</td>
				<td>
					<select name="country" id="country">
						<option value="USA">America</option>
						<option value="TR">Türkiye</option>
						<option value="FR">France</option>
						<option value="ENG">England</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>ZIP Code:</td>
				<td><input type="text" name="zip"></td>
			</tr>
			<tr>
				<td>Email:</td>
				<td><input type="email" name="email"></td>
			</tr>
			<tr>
				<td>Sex:</td>
				<td>
					<input type="radio" id="male" name="sex" value="male">
					<label for="male">Male</label>	
					<input type="radio" id="female" name="sex" value="female">
					<label for="female">Female</label>
				</td>
			</tr>
			<tr>
				<td>Language:</td>
				<td>
					<label for="eng">English</label>
					<input type="checkbox" id="eng" name="lang[]" value="English">	
					<label for="fr">French</label>
					<input type="checkbox" id="fr" name="lang[]" value="French">
					<label for="gr">German</label>
					<input type="checkbox" id="gr" name="lang[]" value="German">			</td>
			</tr>
			<tr>
				<td>About:</td>
				<td><textarea name="about" rows="4"></textarea></td>
			</tr>
			<tr>
				<td></td>
				<td><button type="submit" name="submitbtn">submit</button></td>
			</tr>
		</table>
	</form>		
</body>
