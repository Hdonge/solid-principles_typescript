/**
 * We have broken down IVehicle interface into multiple interface
 */

interface IVehicle1 {
    getSpeed(): number;
    getVehicleType(): string;
    isTaxPayed(): boolean;
}

interface ILights {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface IEngine {
    startEngine(): void;
    acelerate(): number;
    stopEngine(): void;
}

interface IRadio {
    StartRadio(): void;
    playCd(): void;
    stopRadio(): void;
}

class Vehicle implements IVehicle1 {
    public getSpeed() { return 1 }
    public getVehicleType() { return '' }
    public isTaxPayed() { return true }
}


/**
 * Here Printer interface is broeken down into the multiple interfaces
 */


interface Printer1 {
    printDocument(document: Document);
}


interface Stapler {
    stapleDocument(document: Document, tray: number);
}


interface Copier {
    copyDocument();
}

class SimplePrinter1 implements Printer1 {
    public printDocument(document: Document) {
        //...
    }
}

class SuperPrinter implements Printer, Stapler, Copier {
    public copyDocument() {
        //...
    }

    public printDocument(document: Document) {
        //...
    }

    public stapleDocument(document: Document, tray: number) {
        //...
    }
}

/**
 * IEmployee interface is also broken down into two different interfaces
 */

interface IAddOperation {
    AddEmployeeDetails();
}

interface IGetOperation {
    ShowEmployeeDetails(employeeId: number);
}
