//app /routes/libraries/index.js
import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('library');
    },

    actions: {
        deleteLibrary(delLibrary) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
                delLibrary.destroyRecord();
            }
        }
    }
    
});