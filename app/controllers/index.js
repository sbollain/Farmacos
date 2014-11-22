
$.index.open();
Alloy.Collections.Farmacos.fetch();

var peso=10.0;

function cleanup() {
    $.destroy();
}

function farmaco(event) {
	Ti.API.info(event.selectedValue);
	var selectedFarmaco = Alloy.Collections.Farmacos.where({Farmaco: event.row.title})[0];
	Ti.API.info(selectedFarmaco.get('NombreComercial'));
	var rangoTerapeutico = "Rango terapeútico en μg/Kg/min: "+selectedFarmaco.get('RangoTerapMin') + "-" + selectedFarmaco.get('RangoTerapMax');
	$.RangoTerap.setText(rangoTerapeutico);
}


function peso(event) {
	peso=$.Peso.getValue();
	Ti.API.info(peso);
}
