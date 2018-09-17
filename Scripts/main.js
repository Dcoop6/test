var usFlag = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-DImShCzLswrJBeRZUOx3hQpEMus_Uet353bet2cIih3oRxq';
var caFlag = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/383px-Flag_of_Canada.svg.png';

var x = 0;
var myImg = document.querySelector('img');

myImg.onclick = function() 
{
  x++;
    var mySrc = myImg.getAttribute('src');
  if(myImg.getAttribute('src') === caFlag )  
    myImg.setAttribute('src', usFlag);
  else
    myImg.setAttribute('src', caFlag);
  alert('Total changes: ' + x);
};

document.querySelector('h1').onclick = function() 
{
    alert('Ouch! Stop poking me!');
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

if(!localStorage.getItem('name'))
    setUserName();
else 
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome: ' + storedName;
}



