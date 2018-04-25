import Route from '@ember/routing/route';

export default Route.extend({
    model () {
        return this.store.findAll('contact');
    },

    actions: {
        deleteContacts(delContact) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                delContact.destroyRecord();
            }
        }
    }


});