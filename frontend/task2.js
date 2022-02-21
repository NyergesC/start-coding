


function getOpenDoors(){

    let doors = []; 

    for (let i = 1; i <= 100; i++) {
        doors.push({ // tombbe uj elem belerakasa, itt akar a valtozoba is kulon megadhatjuk elotte az objektumot es itt csak a nevet adjuk meg
            "isOpen": false,
            "doorNumber": i
        })
        
    };

    for (let i = 1; i <= 100; i++) {

        for (let door of doors) { //minden ajtot megvizsgal

            let shouldToggle = door.doorNumber % i //maradekos osztas
            
            if (shouldToggle === 0) {
                door.isOpen = !door.isOpen; //tehat nem egyenlo, megvaltozik az allitas

            };
        };

    };

    for (let door of doors) {
        if (door.isOpen === true) {
            console.log(door.doorNumber);
        }
    

    }

}

getOpenDoors()


    