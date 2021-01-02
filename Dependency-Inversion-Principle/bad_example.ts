/**
 * High level objects should not be depedent upon on low level implmentations
 * Rather it should depend upon abstraction (abstract classes or interfaces)
 * Abstraction should not depend on low level details
 * Support abstraction
 */

class Email {
    sendEmail() {
        //code to send mail
    }
}

class Notifications {
    private _email: Email
    constructor() {
        this._email = new Email();
    }

    promotionalNotifications() {
        this._email.sendEmail();
    }
}

/**
 * Here our Notifications directly depends upon Email class which should not be
 * Rather it should depends on its abstraction
 */

 