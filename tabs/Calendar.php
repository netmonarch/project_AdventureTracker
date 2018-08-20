<?php
include ("../php/includes/sql-conn.php");
# Note: Adventures are tracked in seconds.
?>

<div style="float:right; border:1px solid black; width:250px; height:250px; padding:4px;">
	
</div>
<h1>Calendar</h1>
<?php

$beginningOfTime = 0; // will always be zero
$startTime = 60*60*24*365; // Our Adventuring world is only 1 year old.
$currentTime = $startTime + 60*60*24*10; // a tenday has passed since the beginning of the adventure.

?>
The DM can add or remove time from the adventure here. This is a way of keeping track of time spent adventuring.<br />
There is also an event tracker. You should be able to add an event to an adventure.<br />