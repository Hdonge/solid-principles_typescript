import { Email } from "./email.class";

export class CashRegister {
    public subTotal = 0;
    public taxRate = 7.5;
    public grandTotal = 0;

    public calculateTotal() {
        this.grandTotal = this.subTotal + (this.subTotal * this.grandTotal);
        return this.grandTotal;
    }
}


const cashregister = new CashRegister();
const grandTotal = cashregister.calculateTotal();
Email.sendMessage(`Thank you for your business! Your total was: ${grandTotal}`);
