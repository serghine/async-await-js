"use strict";
let button=document.getElementById('mon-btn');
let resultat=document.getElementById('resultat');
button.addEventListener('click',function(e){
    e.preventDefault();

    async function calcule1(){
        return 5+2;
    }
    async function calcule2(){
        return 8+9;
    }
    async function calcule3(){
        const value1=await calcule1();
    
        const value2=await calcule2();
    
        return value1+value2;
    }
    calcule3().then(function(data){console.log(data);resultat.innerHTML=data}).catch(function(err){console.log('erreur monimentale')});

});
setTimeout(function(){
console.log('hay i am herre ..!')
},5000)
console.log('boudji where are you');



