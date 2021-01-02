class ReportGeneration {
    public generateReport() {
        //Any general report creation logic
    }
}

class CrystalReportGeneration extends ReportGeneration {
    public generateReport() {
        //Logic specific to create crystal report
    }
}

class PdfReportGeneration extends ReportGeneration {
    public generateReport() {
        //Logic to create pdf report
    }
}

/**
 * Here ReportGeneration class is extended to have specific reports
 * By this way we do not need to have multiple if-else switch statements
 * Now consumer class can create instance of these child classes and create 
 * reports.
 */

class CreditCard {
    private Code: String;
    private Expiration: Date;
    protected MonthlyCost: number;

    constructor(code: String, Expiration: Date, MonthlyCost: number) {
        this.Code = code;
        this.Expiration = Expiration;
        this.MonthlyCost = MonthlyCost;
    }

    getCode(): String {
        return this.Code;
    }

    getExpiration(): Date {
        return this.Expiration;
    }

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.02;
    }
}

class GoldCreditCard extends CreditCard {

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.05;
    }
}

class SilverCreditCard extends CreditCard {

    monthlyDiscount(): number {
        return this.MonthlyCost * 0.03;
    }
}

/**
 * Here Credit class describes a method to calculate the monthlyDiscount().
 * The monhtly discount depends on the type of card, which can be Silver or Gold.
 * To change the monhtly discount calc, you should create another class which overrides 
 * the monthlyDiscount method.
 * The Solution is to create two new classes: one for each type of card
 */