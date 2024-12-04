function EmpAttd(){
  let attendance = Math.random()
  const randomnumber=0.5

  if(attendance<randomnumber){
    console.log("Employee is present")
  }else{
    console.log("Employee is absent")
  }
}
EmpAttd()