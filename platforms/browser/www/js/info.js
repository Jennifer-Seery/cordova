// Java Script Login Page

// Setting Variables
const url = 'https://sleepy-taiga-30424.herokuapp.com/students/';
const options= {method:null,headers:{name:null,value:null}};

// Layout of the fetch function
function fetch(url, options) 
{
  return new Promise(function(resolve, reject) 
  {
    var Req = new XMLHttpRequest();
    Req.open("GET", url); 
    Req.onload = function () {
      if (Req.status >= 200 && Req.status < 300) {
        resolve(JSON.parse(Req.response));
      } else {
        reject({
          status: Req.status,
          statusText: Req.statusText
        });
      }
    };
    Req.send();
  }); 
}

// Global vars
var UserInput = document.getElementById('userid');
Username = UserInput.value;
var PasswordInput = document.getElementById('pswrd');
Password = PasswordInput.value;
var toDo = [];
var trigger1;
var trigger2;


// Function called after the login button is pressed.
function check(form)
{  
  
  // Fetch called 
  fetch(url,options)
  .then(function(data)
  {
    
    Username = form.userid.value;
    Password = form.pswrd.value

	// Storing recieved data into an array
      for(var i=0;i<data.length;i++){
        toDo=data;
      }
  
	// Validating User and Storing Triggers
     for(var i=0;i<data.length;i++){
        if(toDo[i].name==Username  && toDo[i].password == Password ){
          trigger1 = toDo[i].ColourFilter;
		  trigger2 = toDo[i].SoundFilter;
		  cssChange();
		
          
        }
	  } 
    
     
     
        
  
})

.catch(function(err)
{
  console.error(err);  
});

}     

// Function to bring user to the right version with their trigger implemented.
function cssChange(){
  
  if(trigger1 === true && trigger2 == true ){
	  
	location.replace("file:///C:/Electron/GREY/mainGREY.html")
   
  }
  if(trigger1 === true && trigger2 == false ){
	 //no color with music 
	location.replace("file:///C:/Electron/GREYWM/mainGREY.html")
   
  }
  if(trigger1 === false && trigger2 == false ){

	location.replace("file:///C:/Electron/COLORWM/main.html")
   
  }
  
  if(trigger1 === false && trigger2 == true ){
	 //no color with music 
	location.replace("file:///C:/Electron/COLOR/main.html")
   
  }
 
 
}

