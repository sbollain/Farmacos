
$.index.open();
Alloy.Collections.Farmacos.fetch();

function cleanup() {
    $.destroy();
}

function farmaco(event) {
	Ti.API.info(event.selectedValue);
	var selectedFarmaco = Alloy.Collections.Farmacos.where({Farmaco: event.row.title})[0];
	Ti.API.info(selectedFarmaco.get('NombreComercial'));
}

function peso(event) {
	var peso=$.Peso.getValue();
	Ti.API.info(peso);
}
