import Route from '@ember/routing/route';

export default Route.extend({

    responseMessage: '',

    model() {
        return this.store.createRecord('invitation');
    },

    actions: {
        saveInvitation(newInvitation) {

            newInvitation.save().then(() => this.transitionTo('index'));

            this.controller.set('responseMessage',`Thank you! We've just saved your email address with the following id: ${this.controller.get('model.id')}`);

        },

        willTransition() {
            this.controller.get('model').rollbackAttributes();
        } 
    }

});