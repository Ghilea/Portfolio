<?php require_once($_SERVER['DOCUMENT_ROOT']."/resources/includes/header.php"); ?>

<div id="indexContent">
<?php foreach ($config->ActivateModule("index") as $output) { 	
	require_once($_SERVER['DOCUMENT_ROOT'].$output["link"]);
} ?>
</div>

<?php require_once($_SERVER['DOCUMENT_ROOT']."/resources/includes/footer.php"); ?>