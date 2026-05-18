const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
const titleElement=document.querySelector('.title');
const resetButton=document.querySelector('.reset');

buttons.forEach(function(b){
    b.addEventListener('click',function(event){
        switch(event.target.id){
            case "red": 
                body.style.backgroundColor="rgb(214, 53, 53)";
                titleElement.style.color="black";
                resetButton.style.color="black";
                break;
            case "blue": 
                body.style.backgroundColor= "rgb(55, 55, 202)";
                titleElement.style.color="black";
                resetButton.style.color="black";
                break;
            case "green": 
                body.style.backgroundColor="rgb(51, 140, 51)";
                titleElement.style.color="black";
                resetButton.style.color="black";
                break;
            case "yellow": 
                body.style.backgroundColor="rgb(209, 209, 54)";
                titleElement.style.color="black";
                resetButton.style.color="black";
                break;
            case "reset": 
                body.style.backgroundColor="#0f0f13";
                titleElement.style.color="grey";
                resetButton.style.color="grey";
                break;
        }
    });
});
