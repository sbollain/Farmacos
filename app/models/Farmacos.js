exports.definition = {
	config: {

		adapter: {
			type: "sql",
			db_file: "/medlinetec.sqlite",			//Nombre del fichero que contiene la BBDD en assets
			//db_name: "medlinetec",				//Nombre de la BBDD, si queremos que sea distinta del nombre anterior
			collection_name: "Farmacos",			//Nombre de la tabla
			remoteBackup: false
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};