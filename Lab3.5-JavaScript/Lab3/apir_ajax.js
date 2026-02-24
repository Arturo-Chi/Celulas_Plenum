const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content


//Lo mejor al consultar elementos que tienen que agregarse al dom es cargar todos los
//Elementos en un fragmento de HTML para que al final se agreguen al final al DOM