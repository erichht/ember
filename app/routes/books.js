import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('book');
    },

    actions: {
        editBookTitle(book) {
            book.set('isEditingTitle', true);
        },

        cancelBookEditTitle(book) {
            book.set('isEditingTitle', false);
            book.rollbackAttributes();
        },

        saveBookTitle(book) {
            if (book.get('isNotValidTitle')) {
                return;
            }

            book.set('isEditingTitle', false);
            book.save();
        },

        editBookYear(book) {
            book.set('isEditingYear', true);
        },

        cancelBookEditYear(book) {
            book.set('isEditingYear', false);
            book.rollbackAttributes();
        },

        saveBookYear(book) {
            if (book.get('isNotValidYear')) {
                return;
            }

            book.set('isEditingYear', false);
            book.save();
        }        
    }
});
