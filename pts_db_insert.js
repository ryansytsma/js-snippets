//template
function InsertXFromHttpArray(id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) {
  
  args = [id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
  
  db.transaction(function(tx) {
		args = [id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
		tx.executeSql('INSERT INTO X (id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) VALUES(?,?,?,?,?,?,?);', args);
	},
	function(error) {
		console.log('data insert error');
	},
	function() {
		//successful
	});
  
}


//insert data from API into sqlite table
function InsertContractFromHttpArray(id, contractname, isactive) {
  
	db.transaction(function(tx) {
		tx.executeSql('INSERT INTO contract (id, contract_name, is_active) VALUES (?,?,?)', [id, contractname, isactive]);
	},
	function(error) {
		console.log('Contract data insert error');
	},
	function() {
		//successful
	});
}

//insert data from API into sqlite table
function InsertContractTaskFromHttpArray(id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) {
	
	db.transaction(function(tx) {
		args = [id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
		tx.executeSql('INSERT OR REPLACE INTO contracttask (id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, ' + 'mobile_update, user_create, user_update) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);', args);
	},
	function(error) {
		console.log('data insert error');
	},
	function() {
		//successful
	});
}

function InsertDailyCrewFromHttpArray(id, crew_date, crew_start, crew_end, note, server_create, server_update, mobile_create, mobile_update, user_create, user_update) {
  
  args = [crewdate, crewstart, crewend, note, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
  
  db.transaction(function(tx) {
		args = [id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
		tx.executeSql('INSERT INTO dailycrew (crew_date, crew_start, crew_end, note, mobile_create, user_create) VALUES(?,?,?,?,?,?);', args);
	},
	function(error) {
		console.log('data insert error');
	},
	function() {
		//successful
	});
  
}

function InsertUserFromHttpArray(id, user_name) {
  
  args = [id, user_name];
  
  db.transaction(function(tx) {
		args = [id, user_name];
		tx.executeSql('INSERT INTO X (id, user_name) VALUES(?,?);', args);
	},
	function(error) {
		console.log('data insert error');
	},
	function() {
		//successful
	});
  
}

function InsertContractTaskDetailFromHttpArray(id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) {
  
  args = [id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
  
  db.transaction(function(tx) {
		args = [id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
		tx.executeSql('INSERT INTO X (id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) VALUES(?,?,?,?,?,?,?);', args);
	},
	function(error) {
		console.log('data insert error');
	},
	function() {
		//successful
	});
  
}