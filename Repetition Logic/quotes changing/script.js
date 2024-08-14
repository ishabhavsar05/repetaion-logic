let hrs=document.getElementById('hr');
let mins=document.getElementById('min');
let secs=document.getElementById('sec');

setInterval(function(){
    let current=new Date();
    hrs.innerHTML=(current.getHours()+0<10?"0":"")+current.getHours();
    mins.innerHTML=(current.getMinutes()+0<10?"0":"")+current.getMinutes();
    secs.innerHTML=(current.getSeconds()+0<10?"0":"")+current.getSeconds();
})

let quotesIndex=["“If You can Change Your Mind, You can change Your Life”",
    "“So many books, so little time.”","“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be Mindful. Be grateful. Be Positive. Be True. Be Kind”",
    "“You are enough just as you are.”"
]
let quots=document.getElementById('quote');
let current=0;
function slider(){
    quots.innerHTML=quotesIndex[current];
    current=(current+1)%quotesIndex.length;
}
setInterval(slider,1000);