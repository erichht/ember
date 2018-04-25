//refactor start 20/3/18
import DS from 'ember-data';
// import { gte, empty, and, not, match } from '@ember/object/computed';
import { gte, and, not, match } from '@ember/object/computed';
export default DS.Model.extend({
    email: DS.attr('string'),
    message: DS.attr('string'),

    contactMessage: 'Contact Page',

    isLongEnough: gte('message.length', 5),

    isValid: match('email', /^.+@.+\..+$/),

    isAllTrue: and('isLongEnough','isValid'),

    isDisabled: not('isAllTrue')
    
});

// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import Validator from '../mixins/model-validator';

// export default Model.extend(Validator, {
//     email: attr('string'),
//     message: attr('string'),

//     contactMessage: 'Contact Page',
//     messageText:'',
//     emailAddress: '',

//     isLongEnough: gte('message.length', 5),
//     isEmpty: empty('message'),
//     isValue: not('isEmpty'),
//     isBothTrue: and('isLongEnough', 'isValue'),

//     isValid: match('emailAddress', /^.+@.+\..+$/),

//     isAllTrue: and('isBothTrue','isValid'),

//     isDisabled: not('isAllTrue'),
    
    // validations: {
    //     messageText: {
    //         presence: true,
    //         length: 5
    //     },
    //     emailAddress: {
    //         presence: true,
    //         format: {with: /^.+@.+\..+$/}
    //     }
    // }

// });
//refactor end 20/3/18
