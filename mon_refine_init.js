//making an appointment  ["index(location)", "date", "location_id"]
let target = [
  [0, "09/21/2022","makebtn18615"],[0, "09/17/2022","makebtn18615"],[0, "09/18/2022","makebtn18615"],[0, "09/19/2022","makebtn18615"],[0, "09/20/2022","makebtn18615"],
  [0, "09/22/2022","makebtn18615"],[0, "09/23/2022","makebtn18615"],[0, "09/24/2022","makebtn18615"],[0, "09/25/2022","makebtn18615"],[0, "09/26/2022","makebtn18615"],
  [19, "10/02/2022","makebtn19315"], [19, "10/03/2022","makebtn19315"], [19, "10/04/2022","makebtn19315"],[19, "10/05/2022","makebtn19315"], [19, "10/06/2022","makebtn19315"],
  [19, "09/28/2022","makebtn19315"], [19, "09/29/2022","makebtn19315"], [19, "09/30/2022","makebtn19315"],[19, "09/31/2022","makebtn19315"], [19, "10/01/2022","makebtn19315"],
  [19, "09/23/2022","makebtn19315"], [19, "09/24/2022","makebtn19315"], [19, "09/25/2022","makebtn19315"],[19, "09/26/2022","makebtn19315"], [19, "09/27/2022","makebtn19315"],
  [19, "09/18/2022","makebtn19315"], [19, "09/19/2022","makebtn19315"], [19, "09/20/2022","makebtn19315"],[19, "09/21/2022","makebtn19315"], [19, "09/22/2022","makebtn19315"],  
  [19, "09/24/2022","makebtn19315"], [19, "09/17/2022","makebtn19315"], [19, "09/16/2022","makebtn19315"], 
  [19, "09/11/2022","makebtn19315"], [19, "09/12/2022","makebtn19315"], [19, "09/13/2022","makebtn19315"], [19, "09/14/2022","makebtn19315"], [19, "09/15/2022","makebtn19315"], 

  [23, "09/23/2022","makebtn20515"],[23, "09/17/2022","makebtn20515"],[23, "09/18/2022","makebtn20515"],[23, "09/19/2022","makebtn20515"],
  [23, "09/20/2022","makebtn20515"],[23, "09/21/2022","makebtn20515"],[23, "09/22/2022","makebtn20515"],

  [6, "09/23/2022","makebtn19415"],[6, "09/17/2022","makebtn19415"],[6, "09/18/2022","makebtn19415"],[6, "09/19/2022","makebtn19415"],
  [6, "09/20/2022","makebtn19415"],[6, "09/21/2022","makebtn19415"],[6, "09/22/2022","makebtn19415"]
  //[8, "09/12/2022","makebtn19515"],[8, "09/13/2022","makebtn19515"], [8, "09/14/2022","makebtn19515"],[8, "09/15/2022","makebtn19515"],[8, "09/16/2022","makebtn19515"],
  //[9, "09/12/2022","makebtn19715"],[9, "09/13/2022","makebtn19715"], [9, "09/14/2022","makebtn19715"],[9, "09/15/2022","makebtn19715"],[9, "09/16/2022","makebtn19715"],
  //[5, "09/12/2022","makebtn19215"],[5, "09/13/2022","makebtn19215"], [5, "09/14/2022","makebtn19215"],[5, "09/15/2022","makebtn19215"],[5, "09/16/2022","makebtn19215"],
  
  //[3, "09/05/2022","makebtn20815"], [3, "09/06/2022","makebtn20815"], [3, "09/07/2022","makebtn20815"],
  // [3, "09/08/2022","makebtn20815"],[3, "09/09/2022","makebtn20815"], [3, "09/10/2022","makebtn20815"],  
  //[3, "09/03/2022","makebtn20815"], [3, "09/04/2022","makebtn20815"], [3, "09/05/2022","makebtn20815"],
  //[3, "09/11/2022","makebtn20815"]
  //[15, "09/12/2022","makebtn20615"],[15, "09/16/2022","makebtn20615"],[15, "09/19/2022","makebtn20615"],[15, "09/23/2022","makebtn20615"]
  //[15, "09/06/2022","makebtn20615"],[15, "09/07/2022","makebtn20615"],[15, "09/08/2022","makebtn20615"],
  //[15, "09/11/2022","makebtn20615"],[15, "09/12/2022","makebtn20615"],[15, "09/13/2022","makebtn20615"]
  //[0, "09/09/2022","makebtn18615"], [0, "09/10/2022","makebtn18615"], [0, "09/03/2022","makebtn18615"], [0, "09/04/2022","makebtn18615"], 
  //[0, "09/05/2022","makebtn18615"], [0, "09/06/2022","makebtn18615"], [0, "09/07/2022","makebtn18615"], [0, "09/08/2022","makebtn18615"]


];


let loca_inform = [
["initial Bakers Basin","makebtn18615", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/186"], ["initial Bayonne", "makebtn18715", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/187"], ["initial Camden", "makebtn18915", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/189"], ["initial Cardiff", "makebtn20815", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/208"],
["initial Delanco", "makebtn19115", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/191"], ["initial Eatontown", "makebtn19215", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/192"], ["initial Edison","makebtn19415", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/194"], ["initial Elizabeth", "makebtn26415", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/264"],
["initial Flemingto", "makebtn19515", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/195"], ["initial Freehold", "makebtn19715", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/197"], ["initial Lodi", "makebtn19815", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/198"], ["initial Newark", "makebtn20015", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/200"], 
["initial North Bergen", "makebtn28219", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/282"], ["initial Oakland", "makebtn20315", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/203"], ["initial Paterson", "makebtn20415", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/204"], ["initial Rahway", "makebtn20615", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/206"], 
["initial Randolph", "makebtn20715", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/207"], ["initial Rio Grande", "makebtn18815", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/188"], ["initial Salem", "makebtn19015", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/190"], ["initial South Plainfiel", "makebtn19315", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/193"], 
["initial Toms River", "makebtn27719", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/277"], ["initial Vineland", "makebtn19915", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/199"], ["initial Wayne", "makebtn20215", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/202"], ["initial West Deptford", "makebtn20515", "https://telegov.njportal.com/njmvc/AppointmentWizard/15/205"]
];



// read file
const fs = require('fs');
//var grablocation = fs.readFileSync('init_availble.txt').toString().split("\n");




async function start(){


  // Check if targer exist(the location with the same date we want and return" making appointmentID")
  var grablocation = fs.readFileSync('init_availble.txt').toString().split("\n");
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
            fs.writeFile('./discord_bot/init_target.txt', '', function(){console.log('writen to file')})
            console.log(loca_inform[i][0] + ": " + finallink)
            fs.appendFileSync('./discord_bot/init_target.txt', loca_inform[i][0]+": ");
            fs.appendFileSync('./discord_bot/init_target.txt', finallink);
  
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
    fs.writeFile('./discord_bot/init_target.txt', '', function(){console.log('Non..')})

  }






//}






//await page.waitForTimeout(12000);
//wait browser.close();
};
//start()
setInterval(start, 50)
