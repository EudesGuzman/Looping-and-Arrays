let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]



function getParkingLotState(parking_state){

    let estados ={
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
}

//console.log(parking_state);
    for (let i =0; i < 3; i++){
        for (let z =0; z < 3; z++){
           // console.log(parking_state[i][z]);

            if (parking_state[i][z] == 1){
                estados.totalSlots +=1;
                estados.occupiedSlots += 1;
            } else if (parking_state[i][z] == 2){
                estados.totalSlots +=1;
                estados.availableSlots += 1;
            }
           
         }

    }

    return estados;

}
console.log(getParkingLotState(parking_state))