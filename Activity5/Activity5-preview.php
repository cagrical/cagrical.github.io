<?php
echo $_POST["name"] ? $_POST["name"] : "Not provided";
echo "<br>";
echo $_POST["username"] ? $_POST["username"] : "Not provided";
echo "<br>";
echo $_POST["password"] ? $_POST["password"] : "Not provided";
echo "<br>";
echo $_POST["address"] ? "Address: ".$_POST["address"] : "Address: Not provided";
echo "<br>";
echo $_POST["country"] ? $_POST["country"] : "Not provided";
echo "<br>";
echo $_POST["zip"] ? "Zip: ".$_POST["zip"] : "Zip: Not provided";
echo "<br>";
echo $_POST["email"] ? $_POST["email"] : "Not provided";
echo "<br>";
for($i=0;$i<sizeof($_POST["lang"]);$i++){
    echo $_POST["lang"][$i]."<br>";
}
echo $_POST["about"] ? "About: ".$_POST["about"] : "About: Not provided";



?>