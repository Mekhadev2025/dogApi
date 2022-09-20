//dog api
// https://dog.ceo/api/breeds/image/random

console.log('run 1st')
//to get the dogimage div id 
const dogImageDiv=document.getElementById('dogImage')

//to fetch the dog api //.then pulls data
fetch('https://dog.ceo/api/breeds/image/random')//returns a javascript promise
.then(response => response.json())//data turned to json
.then(json => {
    console.log(json.message)//to print the json message
   dogImageDiv.innerHTML=`<img src='${json.message}'  
  />` //to change the image scr of html div dogImage wrt to the api ie json message is updates and width and height of the image recieved is set 





})
