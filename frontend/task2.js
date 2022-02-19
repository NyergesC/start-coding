
let doors = [];

for (let i = 1; i <= 100; i++) {
    doors.push({
        "isOpen": false,
        "doorNumber": i
    })
    
};

for (let i = 1; i <= 100; i++) {

    for (let door of doors) {

        let shouldToggle = door.doorNumber % i
        
        if (shouldToggle === 0) {
            door.isOpen = !door.isOpen;

        };
    };

};

for (let door of doors) {
    if (door.isOpen === true) {
        console.log(door.doorNumber);
    }
 

}



    