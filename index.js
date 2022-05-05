function distanceFromHqInBlocks(start){
   
    if(start >42){
        return start-42
        
    }
    else{
        return 42-start
    }


}
function distanceFromHqInFeet(start){
  return 264 * distanceFromHqInBlocks(start) 

}

function distanceTravelledInFeet(start,destination){
    return 264 * distanceFromHqInBlocks(destination)-distanceFromHqInFeet(start)
}
function calculatesFarePrice(start,destination){
    
    let distance = distanceTravelledInFeet(start,destination)
console.log(distance)
    if(distance<=400){
        return 0
    }
    else if (distance>400&&distance<=2000){
    return (distance -400) * 0.02}
    else if (distance>2000&&distance<2500){
        return 25
    }else {
            return ('cannot travel that far')
        }


    

    


}
