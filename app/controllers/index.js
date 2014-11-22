
$.index.open();
Alloy.Collections.Farmacos.fetch();

var peso=10.0;
var dosis=2.0;

function cleanup() {
    $.destroy();
}

function farmaco(event) {
	Ti.API.info("Farmaco elegido: "+ event.selectedValue);
	var selectedFarmaco = Alloy.Collections.Farmacos.where({Farmaco: event.row.title})[0];
	Ti.API.info("Nombre Comercial: " + selectedFarmaco.get('NombreComercial'));
	var rangoTerapeutico = selectedFarmaco.get('RangoTerapMin') + "-" + selectedFarmaco.get('RangoTerapMax');
	$.RangoTerap.setText(rangoTerapeutico);
	$.Dosis.setValue(selectedFarmaco.get('RangoTerapMin'));
}


function peso(event) {
	peso=$.Peso.getValue();
	Ti.API.info("peso: " + peso);
}

function dosis(event) {
	dosis=$.Dosis.getValue();
	Ti.API.info("dosis: " + dosis);
}
