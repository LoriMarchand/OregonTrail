(function () {
    /*
    * Interfaces
    */
    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;
    }
    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }
    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        constructor(name: string, food: number, isHealthy: boolean, ) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;

        }

        hunt(): number {
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            return this.food;
        }

        eat(): boolean {
            if (this.food >= 20) {
                this.food -= 20;
            } else {
                this.isHealthy = false;
            }
            return this.isHealthy;

        }
    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {

        capacity: number;
        passengerArray: Traveler[];
        addPassenger(traveler: Traveler): string {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";

        }
        isQuarantined(): boolean {
            for (let traveler of this.passengerArray) {
                if (traveler.isHealthy) {
                    return true;
                }
            }
            return false;

        }
        getFood(): number {
            let sum: number = 0;
            for (let traveler of this.passengerArray) {
                sum += traveler.food;
            }
            return sum;

        }

        constructor(capacity: number, passengerArray: Array<Traveler>) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;

        }
    }

    let sherri = new Traveler("sherri", 83, true);
    let sue = new Traveler("sue", 99, true);
    let krista = new Traveler("krista", 88, true);
    let melody = new Traveler("melody", 87, true);
    let jon = new Traveler("jon", 98, true);

    let wagon = new Wagon(4, []);


    sherri.eat();
    sue.eat();
    melody.eat();
    krista.hunt();
    jon.hunt();

    let passengers = [sherri, sue, melody, krista, jon];

    for (let passenger of passengers) {
        if (Math.random() > 0.5) {
            console.log(`Add passenger ${passenger.name}? ${wagon.addPassenger(passenger)}`);
        } else {
            console.log(`Passenger ${passenger.name} got tackled by a wolf.`)
        }
    }

    console.log(`Wagon quarantined? ${wagon.isQuarantined()}`);
    console.log(`Wagon total food: ${wagon.getFood()}`);

    console.log(`Wagon quarantined? ${wagon.isQuarantined()}`);
    console.log(`Wagon total food: ${wagon.getFood()}`);




    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects 
    *
    */


}) ();

