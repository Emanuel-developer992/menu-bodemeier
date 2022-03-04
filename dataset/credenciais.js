function createDataset(fields, constraints, sortFields) {
	
	var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("USER");
    newDataset.addColumn("ID");
    newDataset.addColumn("MSG");
    newDataset.addColumn("PROCESS");
	
	try{
		var response = getResponse();

	    newDataset.addRow(new Array(response.user, response.id, response.message, response.process ));
	 }
	 catch(e){
		 newDataset.addRow(new Array("error", "error", e.message));
	 }
	
	 return newDataset;

}


function getResponse() {

	var user = getValue("WKUser");
	var id = 115;
	var message = '- orion';
	var process = getValue("WKNumProces");

	
	const jsonResponse = {
		"user": user, "id": id, "message" : message, "process": process
	}
	
	return  jsonResponse;
}
