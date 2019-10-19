<?php
    $year=($_GET['year']);
    $gender=($_GET['gender']);
    $con=mysqli_connect("localhost","root","root","hw3");
	
    if(mysqli_connect_errno()) {
		echo "failed to connect to mysql:" .mysqli_connect_error();
	}
	
	if($year=="All" && $gender=="Both"){
		$sql="select * from babynames";
	}
	else if($year=="All") {
		$sql="select * from babynames where gender='$gender'";
	}
	else if($gender=="Both") {
	    $sql="select * from babynames where year='$year'";
	}
	else{
	$sql="select * from babynames where gender='$gender' and year='$year'";
	}
	
	$result=mysqli_query($con,$sql);
	
	echo "<table border='1'>
	<tr>
		<th>Name</th>
		<th>Popularity Ranking</th>
		<th>Gender</th>
		<th>Year</th>
	</tr>";
	
	while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		echo "<tr>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['ranking']."</td>";
		echo "<td>".$row['gender']."</td>";
		echo "<td>".$row['year']."</td>";
	}
	echo "</table>";
	mysqli_close($con);
?>