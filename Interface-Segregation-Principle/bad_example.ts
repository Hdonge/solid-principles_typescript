/**
 * Do not force to client to depend on methods they dont use.
 * Many small classes/interfcaes
 * Role interfaces, support abstraction.
 * Need to write a series of smaller and more specific interfaces that are implemented by the class
 * Each interface provides single behavior
 */

interface IVehicle {
    getSpeed(): number;
    getVehicleType(): string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
    isLightsOff(): boolean;
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
    StartRadio(): void;
    playCd(): void;
    stopRadio(): void;
}

/**
 * Above we are forcing vehicles to implement the methods which may not relevent to them
 */


interface Printer {
    copyDocument();
    printDocument(document: Document);
    stapleDocument(document: Document, tray: Number);
}


class SimplePrinter implements Printer {

    public copyDocument() {
        //...
    }

    public printDocument(document: Document) {
        //...
    }

    public stapleDocument(document: Document, tray: Number) {
        //...
    }
}

/**
 * The printer interface makes it impossible to implement a printer
 * that can print and copy but not staple. So it is forceful to have stapleDocument
 * method for SimplePrinter.
 */


/**
 * Below interface is having method that add permenant and non permenant employee
 */

interface IEmployee {
    AddEmployeeDetails();
}

/**
 * Now if company asks to implement method to show only permenant employee details
 * and if we add that method to IEmployee interface then it would not be relevent for non-permenant employee class.
 */

interface IEmployee {
    AddEmployeeDetails();
    ShowEmployeeDetails(id: number);
}