//use case 1
function aborpre() {
  let randnumber = (Math.random())
  const  treshold = 0.5  
  if (randnumber < treshold){
    
    console.log("absent")
      return 0 ;
  }
  else {

     console.log("present");
      return 1 ;

  }
}
// use case3
let totalhours = 0

// use case 2

function CalculateWages() {
  let worktype = Math.floor(Math.random()*3);
  const partTime_work  = 4 
  const FullTime_work  = 8 
  const WagesPerHour = 20 
  let Totalwages ;
  const absentorpresent = aborpre();
  switch(absentorpresent){
      case 1 :
          switch (worktype){
              case 0 :
                totalhours=totalhours+0
                 console.log("no work today ")
                  Totalwages = 0 ;
                 console.log(Totalwages);
                  break ;
          
              case 1 :
                  totalhours=totalhours+4
                  Totalwages = partTime_work * WagesPerHour;
                  console.log(`Total wages ${Totalwages} `)
                  break ;
                  
              case 2 :
                  totalhours=totalhours+8
                  Totalwages = FullTime_work * WagesPerHour;
                  console.log(`Total wages ${Totalwages} `)
                  break ;
           default:
            console.log("invalid input");          
       } 
     }
  }

CalculateWages()

// usecase 4
for(let i =0;i<20 && totalhours<=160 ;i++){
  CalculateWages()
}
console.log(totalhours);
