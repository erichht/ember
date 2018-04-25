import Route from '@ember/routing/route';

export default Route.extend({
    model () {
        return this.store.findAll('invitation');
    },

    actions: {
        deleteInvitations(delInvitation) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                delInvitation.destroyRecord();
            }
        }
    }

});
