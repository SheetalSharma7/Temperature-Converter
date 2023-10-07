// let celciusInput=document.querySelector('#celcius, #Farehheit, #kelvin')
let celciusInput=document.querySelector('#celcius > input');
let farehheitInput=document.querySelector('#farehheit > input');
let kelvinInput=document.querySelector('#kelvin > input');
let btn=document.querySelector(".button button");

function roundNumber(number){
    return Math.round(number*100)/100;
}
//cecius to fareheit and kelvin

celciusInput.addEventListener('input',function (){
    let cTemp=parseFloat(celciusInput.value);
    let fTemp=(cTemp*(9/5))+32;
    let kTemp=cTemp+273.15;

    farehheitInput.value=roundNumber(fTemp);
    kelvinInput.value=roundNumber(kTemp);
});


  //farenheit to celcius and krlvin

farehheitInput.addEventListener('input',function (){
    let fTemp=parseFloat(farehheitInput.value);
    let cTemp=(fTemp-32)*(5/9);
    let kTemp=(fTemp-32)*(5/9)+273.15;

    celciusInput.value=roundNumber(cTemp);
    kelvinInput.value=roundNumber(kTemp);
})

   //kelvin to farenheit and celcius

kelvinInput.addEventListener('input',function (){
    let kTemp=parseFloat(kelvinInput.value);
    let cTemp=kTemp-273.15;
    let fTemp=(kTemp-273.15)*(9/5)+32;

    celciusInput.value=roundNumber(cTemp);
    farehheitInput.value=roundNumber(fTemp);
})


btn.addEventListener("click",()=>{
    celciusInput.value="";
    farehheitInput.value="";
    kelvinInput.value="";
})

