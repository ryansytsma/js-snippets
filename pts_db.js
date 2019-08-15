

/* var db = window.sqlitePlugin.openDatabase({
  name: 'pts.db3',
  location: 'default',
  androidDatabaseProvider: 'system'
}); */

/* var store = store || {};

  store.setJWT = function(data) {
    this.JWT = data;
  }


  function GetJWToken(user, pass) {
    var obj = {
      'username': user,
      'password': pass,
      'action': 'login'
    };
    alert(obj);
    jdata = JSON.stringify(obj);
    alert(jdata);
    $.post("https://precisiontreeservicesapp.ca/api/login", jdata, function(data) {
      store.setJWT(data.JWT);
      alert("login success. jwt:" + data.JWT);
    }).fail(function(xhr, status, error) {
      NSB.MsgBox("Login failed with status: " + status + ", error: " + error);
    });
  } */
  
  





//get data from api
/* function GetContractTaskData(id) {
  $.ajax({
    dataType: 'json',
    url: "https://precisiontreeservicesapp.ca/api/Mobile/GetContractTasksList",
    type: "GET",
    success: function(data) {
      for (var x = 0; x < data.length; x++) {
        id = data[x].id;
        contract_id = data[x].contract_id;
        task_number = data[x].task_number;
        date_complete = data[x].date_complete;
        crew_comments = data[x].crew_comments;
        complete_crew_id = data[x].complete_crew_id;
        server_create = data[x].server_create;
        server_update = data[x].server_update;
        mobile_create = data[x].mobile_create;
        mobile_update = data[x].mobile_update;
        user_create = data[x].user_create;
        user_update = data[x].user_update;
        args = [id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update];
        var s = new Array(["INSERT OR REPLACE INTO contracttask (id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);", args]);
        Sql(DB, s);
      }
      
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("status: " + xhr.status + ", error: " + thrownError);
    },
    beforeSend: function(request) {
      //not needed yet
    }
  });
}

//get data from api
function GetTaskDetailData() {
  $.ajax({
    dataType: 'json',
    url: "http://precisiontreeservicesapp.ca/api/list/viewtaskvaluedisplay",
    type: "GET",
    success: function(data, status, xhr) {
      var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
      alert(out);
      return out;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("status: " + xhr.status + ", error: " + thrownError);
    },
    beforeSend: function(request) {
      // Set JWT header
      request.setRequestHeader('Authorization', 'Bearer ' + store.JWT);
    }
  });
}

function LoadTasksDetailToSQLite(taskID) {
    var d = GetTaskData();
    for (var o in d) {
      id = [d[o].id];
      contractid = [d[o].contract_id];
      tasknumber = [d[o].task_number]; 
      datecomplete = [d[o].date_complete];
      crewcomments = [d[o].crew_comments];
      completedcrewid = [d[o].completed_crew_id];
      servercreate = [d[o].server_create];
      serverupdate = [d[o].server_update];
      mobilecreate = [d[o].mobile_create];
      mobileupdate = [d[o].mobile_update];
      usercreate = [d[o].user_create];
      userupdate = [d[o].user_update];
      args = [id, contractid, tasknumber, datecomplete, crewcomments, servercreate, serverupdate, mobilecreate, mobileupdate, usercreate, userupdate];
      var s = new Array(["INSERT OR REPLACE INTO contract (id, contract_id, task_number, date_complete, crew_comments, completed_crew_id, server_create, server_update, mobile_create, mobile_update, user_create, user_update) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);", args]);
      Sql(DB, s);
    }
}

 */