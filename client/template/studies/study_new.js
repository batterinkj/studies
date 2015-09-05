Template.afObjectField_test.helpers({
  quickFieldsAtts: function () {
    return _.pick(this, 'name', 'id-prefix');
  },
  panelClass: function() {
    return this.panelClass || 'panel-default';
  }
});