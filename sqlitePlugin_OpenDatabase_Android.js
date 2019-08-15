$scope.OpenDatabase = function()
{

var db = window.sqlitePlugin.openDatabase({
    name: 'pts.db3',
    location: 'default',
    androidDatabaseProvider: 'system' },

    function(db) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS activitycode ('id', 'activity_code', 'activity_description', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS worktactic ('id', 'code', 'description', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS contract ('id', 'contract_name', 'is_active', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS contracttask ('id', 'contract_id', 'task_number', 'date_complete', 'crew_comments', 'completed_crew_id', 'server_create', 'server_update', 'mobile_create', 'mobile_update', 'user_create', 'user_update', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS viewtaskvaluedisplay ('id', 'contract_id', 'task_id', 'label_text', 'value_display', 'value_order', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS dailycrew ('id', 'crew_date', 'crew_start', 'crew_end', 'note', 'crew_hours', 'server_create', 'server_update', 'mobile_create', 'mobile_update', 'user_create', 'user_update', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS dailycrewactivity ('id', 'daily_crew_id', 'activity_date', 'contract_id', 'activity_code', 'activity_start', 'activity_end', 'activity_hours', 'server_create', 'server_update', 'mobile_create', 'mobile_update', 'user_create', 'user_update', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS dailycrewemployee ('id', 'daily_crew_id', 'user_id', 'employee_position', 'user_start', 'user_end', 'server_create', 'server_update', 'mobile_create', 'mobile_update', 'user_create', 'user_update',  PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS users ('id', 'full_name', 'user_name', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS position ('id', 'code', 'description', PRIMARY KEY('id'))");
    tx.executeSql("CREATE TABLE IF NOT EXISTS tracking ('table', 'action', 'record_id')");
    },
    function(error) {
    console.log('Transaction ERROR: ' + error.message);
    return false;
    },
    function() {
    console.log('database OK');
    return true;
  });

}
