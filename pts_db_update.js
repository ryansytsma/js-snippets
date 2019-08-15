function UpdateTask(id, date_complete, crew_comments, completed_crew_id, mobile_update, user_update) {
  id = id;
  datecomplete = date_complete;
  crewcomments = crew_comments;
  completedcrewid = completed_crew_id;
  mobileupdate = GetCurrentDate();
  userupdate = user_update;
  args = [datecomplete, crewcomments, completedcrewid, mobileupdate, userupdate, id]
  var s = new Array(["UPDATE contract_task SET date_complete = ?, crew_comments = ?, completed_crew_id = ?, " 
                    + "mobile_update = ?, user_update = ? WHERE id= ?;", args]);
  Sql(DB,s);
}