/**
 * 1. The SRP states that each software module should have one and only one reson to change.
 * 2. small classes, single responsiblity classes, limiting impact of change
 * 3. Gather together the things that change for same reasons. 
 *    Seperate those things that change for different reasons.
 * 4. Cohesion where it matters
 * 5. Decoupling where it doesn not
 */

export class CashRegister {
    public subTotal = 0;
    public taxRate = 7.5;
    public grandTotal = 0;

    public calculateTotal() {
        this.grandTotal = this.subTotal + (this.subTotal * this.grandTotal);
        this.emailReceipt(`Thank you for your business! Your total was: ${this.grandTotal}`);
    }

    public emailReceipt(message: string) { 
        //mailing logic
    }
}