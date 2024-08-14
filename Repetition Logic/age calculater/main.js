function calculateAge(){

    let age=document.getElementById('dob').value;
    
    const currDate=new Date();
    
    const currMonth=currDate.getMonth();
    const currYear=currDate.getFullYear();
    const currDay=currDate.getDate();
 
    const birthyear=new Date(age).getFullYear();
    const birthmonth=new Date(age).getMonth();
    const birthday=new Date(age).getDay();
 
    let Age=currYear-birthyear;
    let Month=currMonth-birthmonth;
    let day=currDay-birthday;
    if(Month<0){ 
       Age--;  
       Month+=12;
    }
 
    console.log(`${Age} Yearold ${Month} Month ${day} day` );
 
  
}