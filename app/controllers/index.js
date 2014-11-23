
$.index.open();
Alloy.Collections.Farmacos.fetch();

var peso=10.0; //Valor por defecto
$.Peso.setValue("10");

var selectedFarmaco = Alloy.Collections.Farmacos.where({Farmaco: "Dopamina"})[0]; //Dopmaina como valor por defecto
Ti.API.info("Farmaco por defecto: "+ selectedFarmaco.get('Farmaco'));
pantalla(selectedFarmaco);

var rangoTerapeutico;
var dosis;
var suero;
var volDil;
var farmacoA;
var ConcentracionM; 

function cleanup() {
    $.destroy();
}

function pantalla(selectedFarmaco){ //funcion para modificar los valores de la pantalla según el fármaco elegido
	rangoTerapeutico = selectedFarmaco.get('RangoTerapMin') + " - " + selectedFarmaco.get('RangoTerapMax');
	$.RangoTerap.setText(rangoTerapeutico);
	
	dosis = selectedFarmaco.get('RangoTerapMin');
	$.Dosis.setValue(dosis);
	
	suero="SG"+selectedFarmaco.get('SG')+"%";
	if (selectedFarmaco.get('SSF')>0){
		suero=suero + " o " + "SSF " +  selectedFarmaco.get('SSF') + "%";
	}
	$.VolDilT.setText("Vol. dil. en ml ("+suero+")");
	Ti.API.info("Suero: " + suero);
	volDil = selectedFarmaco.get('VolumenDil');
	$.VolDil.setText(volDil);
	
	farmacoA=selectedFarmaco.get('FarmacoAñadir');
	$.FarmacoA.setText(farmacoA);
	
	concentracionM=selectedFarmaco.get('MaxConcentr');
	Ti.API.info("Concentración Máxima: " + concentracionM);
	if (concentracionM<10){
		$.tit10.setVisible(false);
	}
	if (concentracionM<9){
		$.tit9.setVisible(false);
	}
	if (concentracionM<8){
		$.tit8.setVisible(false);
	}
	if (concentracionM<7){
		$.tit7.setVisible(false);
	}
	if (concentracionM<6){
		$.tit6.setVisible(false);
	}
	if (concentracionM<5){
		$.tit5.setVisible(false);
	}
	if (concentracionM<4){
		$.tit4.setVisible(false);
	}
	if (concentracionM<3){
		$.tit3.setVisible(false);
	}
	if (concentracionM<2){
		$.tit2.setVisible(false);
	}
	$.Concentracion.setSelectedRow(0,0);
}

function farmaco(event) {
	Ti.API.info("Farmaco elegido: "+ event.selectedValue);
	selectedFarmaco = Alloy.Collections.Farmacos.where({Farmaco: event.row.title})[0];
	Ti.API.info("Nombre Comercial: " + selectedFarmaco.get('NombreComercial'));
	
	pantalla(selectedFarmaco);
}


function peso(event) {
	peso=$.Peso.getValue();
	Ti.API.info("peso: " + peso);
}

function dosis(event) {
	dosis=$.Dosis.getValue();
	Ti.API.info("dosis: " + dosis);
}
