import Controller from '@ember/controller';
//refactor start 20/3/18
// import { gte, empty, and, not, match } from '@ember/object/computed';
//refactor end 20/3/18

export default Controller.extend({
    // contactMessage: 'Contact Page',
    // message:'',
    // email: '',

//refactor start 20/3/18
    // isLongEnough: gte('message.length', 5),
    // isEmpty: empty('message'),
    // isValue: not('isEmpty'),
    // isBothTrue: and('isLongEnough', 'isValue'),

    // isValid: match('email', /^.+@.+\..+$/),

    // isAllTrue: and('isLongEnough','isValid'),

    // isDisabled: not('isAllTrue'),
//refactor end 20/3/18

    actions: {
        saveContact(){
            const emails = this.get('email');
            const messages = this.get('message');

            const newContact = this.store.createRecord('contact', { email: emails, message: messages });

            newContact.save().then(() => {
                this.set('email', '');
                this.set('message', '');
            });

        }

    }

});
