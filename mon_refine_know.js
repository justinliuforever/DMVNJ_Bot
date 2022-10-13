//making an appointment  ["index(location)", "date", "location_id"]
let target = [
    
    [19, "09/27/2022","makebtn27419"], [19, "09/28/2022","makebtn27419"], [19, "09/29/2022","makebtn27419"], [19, "09/30/2022","makebtn27419"],  [19, "09/31/2022","makebtn27419"],
    [19, "09/22/2022","makebtn27419"], [19, "09/23/2022","makebtn27419"], [19, "09/24/2022","makebtn27419"], [19, "09/25/2022","makebtn27419"],  [19, "09/26/2022","makebtn27419"],
    [19, "09/17/2022","makebtn27419"], [19, "09/18/2022","makebtn27419"], [19, "09/19/2022","makebtn27419"], [19, "09/20/2022","makebtn27419"],  [19, "09/21/2022","makebtn27419"],
    [19, "09/22/2022","makebtn27419"],  [19, "09/23/2022","makebtn27419"],[19, "09/24/2022","makebtn27419"],  [19, "09/15/2022","makebtn27419"], [19, "09/16/2022","makebtn27419"],
    //[20, "09/08/2022", "makebtn27719"],[20, "09/09/2022", "makebtn27719"], [20, "09/10/2022", "makebtn27719"], [20, "09/11/2022", "makebtn27719"], [20, "09/12/2022", "makebtn27719"], 
    //[3, "09/11/2022", "makebtn28919"],[3, "09/12/2022", "makebtn28919"], [3, "09/13/2022", "makebtn28919"], [3, "09/14/2022", "makebtn28919"], [3, "09/15/2022", "makebtn28919"],
    //[20, "09/11/2022", "makebtn27719"],[20, "09/12/2022", "makebtn27719"], [20, "09/13/2022", "makebtn27719"], [20, "09/14/2022", "makebtn27719"], [20, "09/15/2022", "makebtn27719"],
    //[2, "09/11/2022", "makebtn27019"],[2, "09/12/2022", "makebtn27019"], [2, "09/13/2022", "makebtn27019"], [2, "09/14/2022", "makebtn27019"], [2, "09/15/2022", "makebtn27019"],
    
    //[15, "08/29/2022","makebtn28719"], [15, "08/30/2022","makebtn28719"], [15, "08/31/2022","makebtn28719"], [15, "09/01/2022","makebtn28719"],
    //[10, "09/17/2022","makebtn27919"],[10, "09/19/2022","makebtn27919"],
    [6, "09/26/2021","makebtn27519"],[6, "09/27/2021","makebtn27519"], [6, "09/28/2022","makebtn27519"],[6, "09/29/2021","makebtn27519"], [6, "09/30/2021","makebtn27519"],
    [6, "09/21/2021","makebtn27519"],[6, "09/22/2021","makebtn27519"], [6, "09/23/2022","makebtn27519"],[6, "09/24/2021","makebtn27519"], [6, "09/25/2021","makebtn27519"],
    [6, "09/16/2021","makebtn27519"],[6, "09/17/2021","makebtn27519"], [6, "09/18/2022","makebtn27519"],[6, "09/19/2021","makebtn27519"], [6, "09/20/2021","makebtn27519"],
    //[0, "08/28/2021","makebtn26719"],[0, "08/29/2021","makebtn26719"], [0, "08/30/2022","makebtn26719"],[0, "08/31/2021","makebtn26719"], [0, "09/01/2021","makebtn26719"]
    //[23,"08/09/2022","makebtn28619"], [23,"08/10/2022","makebtn28619"],[23,"08/11/2022","makebtn28619"], [23,"08/12/2022","makebtn28619"],
    //[15,"09/17/2022","makebtn28719"], [15,"09/19/2022","makebtn28719"], [15,"09/20/2022","makebtn28719"], [15,"09/21/2022","makebtn28719"], [15,"09/22/2022","makebtn28719"],[15,"09/23/2022","makebtn28719"],
    //[11,"09/10/2022","makebtn28119"], [11,"09/12/2022","makebtn28119"], [11,"09/13/2022","makebtn28119"], [11,"09/14/2022","makebtn28119"], [11,"09/15/2022","makebtn28119"]
    //[7,"09/10/2022","makebtn29019"], [7,"09/12/2022","makebtn29019"], [7,"09/13/2022","makebtn29019"], [7,"09/14/2022","makebtn29019"], [7,"09/15/2022","makebtn29019"]
    
 
  ];


let loca_inform = [
  ["Knowledge Bakers Basin","makebtn26719", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/267"], ["Knowledge Bayonne", "makebtn26819", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/268"], ["Knowledge Camden", "makebtn27019", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/270"], ["Knowledge Cardiff", "makebtn28919", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/289"],
  ["Knowledge Delanco", "makebtn27219", "https://telegov.njportal.com/njmvc/AppointmentWizard/272"], ["Knowledge Eatontown", "makebtn27319", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/273"], ["Knowledge Edison","makebtn27519", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/275"], ["Knowledge Elizabeth", "makebtn29019", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/290"],
  ["Knowledge Flemingto", "makebtn27619", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/276"], ["Knowledge Freehold", "makebtn27819", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/278"], ["Knowledge Lodi", "makebtn27919", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/279"], ["Knowledge Newark", "makebtn28119", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/281"], 
  ["Knowledge North Bergen", "makebtn28219", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/282"], ["Knowledge Oakland", "makebtn28419", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/284"], ["Knowledge Paterson", "makebtn28519", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/285"], ["Knowledge Rahway", "makebtn28719", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/287"], 
  ["Knowledge Randolph", "makebtn28819", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/288"], ["Knowledge Rio Grande", "makebtn26919", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/269"], ["Knowledge Salem", "makebtn27119", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/271"], ["Knowledge South Plainfiel", "makebtn27419", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/274"], 
  ["Knowledge Toms River", "makebtn27719", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/277"], ["Knowledge Vineland", "makebtn28019", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/280"], ["Knowledge Wayne", "makebtn28319", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/283"], ["Knowledge West Deptford", "makebtn28619", "https://telegov.njportal.com/njmvc/AppointmentWizard/19/286"]
];
  
  // read file
  const fs = require('fs');
  //var grablocation = fs.readFileSync('know_availble.txt').toString().split("\n");
  
  
  
  
  async function start(){


    // Check if targer exist(the location with the same date we want and return" making appointmentID")
    var grablocation = fs.readFileSync('know_availble.txt').toString().split("\n");
    function check_exist(web_index, web_date, target){
      //console.log(web_date)
      for (let i = 0; i < target.length; i++) {
        if (target[i][0]==web_index){
            //if(target[i][1].includes(web_date)){
            if(web_date.includes(target[i][1])){
              //console.log(target[i][2])
  
              //change the form in a bid to creat the link
              date = web_date.slice(0, 10)
              datemonth = date.slice(0, 2)
              datedate = date.slice(3, 5)
              dateyear = date.slice(6, 10)
              newdate = `${dateyear}-${datemonth}-${datedate}`
              
              
              timehour = web_date.slice(11, 13)
              timemiute = web_date.slice(14, 16)
              timeAMPM = web_date.slice(17, 19)
              if (timeAMPM == 'AM'){
                timehour = timehour
              }else{
                timehour = (parseInt(timehour)+12).toString()
              }
              
                
  
              if (timehour.slice(0,1)!='0'){
                newtime = `${timehour}${timemiute}`
                console.log(newtime)
              }else{
                newtime = `${timehour.substring(1)}${timemiute}`
              }
              
              return [target[i][2], newdate, newtime]
            }
        }
    }
    return false
    }
    
    
    
    //Check if "target" exist
    //exist return "id"
    //not exist return false
    function check_targetfind(){
      //form = grablocation
      //console.table(form)
      for (let i = 0; i < grablocation.length; i++) {
        //locationID [Id, avaibletime]
        let locationID = check_exist(i, grablocation[i], target)
        if(locationID != false){
          console.log(locationID[1]);
          //output
          for (let i = 0; i < loca_inform.length; i++) {
            if (loca_inform[i][1]==locationID[0]){
              finallink = `${loca_inform[i][2]}/${locationID[1]}/${locationID[2]}`
              //console.log(loca_inform[i][0]);
              fs.writeFile('./discord_bot/know_target.txt', '', function(){console.log('writen to file')})
              console.log(loca_inform[i][0] + ": " + finallink)
              fs.appendFileSync('./discord_bot/know_target.txt', loca_inform[i][0]+": ");
              fs.appendFileSync('./discord_bot/know_target.txt', finallink);
    
            }
        }
    
          return locationID
        }
      }
      return false
    }
  
  
  
  
  
  
    //Main
    //enter timeselecting_page
    targetfind = check_targetfind()
    if (targetfind != false){
      //console.log("https://telegov.njportal.com/njmvc/AppointmentWizard/15");
      //console.log(targetfind);
        
    }else{
      fs.writeFile('./discord_bot/know_target.txt', '', function(){console.log('Non..')})
  
    }
  
  
  
  
  
  
  //}
  
  
  
  
  
  
  //await page.waitForTimeout(12000);
  //wait browser.close();
  };
  //start()
  setInterval(start, 50)
  