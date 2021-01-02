interface IMessanger {
    sendEmail();
}

class Email1 implements IMessanger {
    sendEmail() {
        //code to send mail
    }
}

class SMS implements IMessanger {
    sendEmail() {
        //code to send sms
    }
}

class Notifications2 {
    private _iMessanger: IMessanger
    constructor(iMessanger: IMessanger) {
        this._iMessanger = iMessanger;
    }

    promotionalNotifications() {
        this._iMessanger.sendEmail();
    }
}
/**
 * Now here Notifications2 class is not directly depends upon email class
 * Rather it depends on its abstraction.
 */

const emailNotifications = new Notifications2(new Email());
emailNotifications.promotionalNotifications(); //this will send email notifications

const smsNotifications = new Notifications2(new SMS());
smsNotifications.promotionalNotifications(); //this will send sms notifications
