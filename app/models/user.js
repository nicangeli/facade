import DS from 'ember-data';
import { equal } from 'ember-awesome-macros';
import raw from 'ember-macro-helpers/raw';

export default DS.Model.extend({
  role: DS.attr('string'),
  prefix: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),

  isSolicitor: equal('role', raw('solicitor')),
  isBuyer: equal('role', raw('buyer'))
});
