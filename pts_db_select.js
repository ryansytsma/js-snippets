function GetContractList() {
	db.transaction(function(tx) {
		var s = "SELECT * FROM contract WHERE is_active='1';";
		tx.executeSql(s, function(tx resultSet){
			
		});
	});
 
}

function GetContract(id) {
 
	db.transaction(function(tx) {
	var s = "SELECT * FROM contract WHERE id=?;";
		tx.executeSql(s, [id], function(tx resultSet){
			return resultSet
		});
	});

}












function GetTask(id) {
 args = [id];
 var s = new Array(["SELECT * FROM contracttask WHERE id=?;", args]);
 Sql(DB, s);
}

function GetTaskList(contractid) {
 args = [contractid];
 var s = new Array(["SELECT * FROM contracttask WHERE contract_id=?;", args]);
 Sql(DB, s);
}

function GetTaskDetailList(taskid) {
 args = [taskid];
 var s = new Array(["SELECT * FROM viewtaskvaluedisplay WHERE task_id=? ORDER BY ValueOrder;", args]);
 Sql(DB, s);
}

function GetUserDetail(id) {
 args = [id];
 var s = new Array(["SELECT * FROM users WHERE id=?;"]);
 Sql(DB, s);
}

function GetUserPermissions(id) {
  
}
  
function GetActivityCode() {
 var s = new Array(["SELECT * FROM activitycode;"]);
 Sql(DB, s);
}

function GetWorkTactic() {
 var s = new Array(["SELECT * FROM worktactic;"]);
 Sql(DB, s);
}

function GetWorkLocationType() {
 var s = new Array(["SELECT * FROM worklocationtype;"]);
 Sql(DB, s);
}

function GetCleanupTactic() {
 var s = new Array(["SELECT * FROM cleanuptactic;"]);
 Sql(DB, s);
}

function GetSpecies() {
 var s = new Array(["SELECT * FROM species;"]);
 Sql(DB, s);
}

function GetPosition() {
 var s = new Array(["SELECT * FROM position;"]);
 Sql(DB, s);
}