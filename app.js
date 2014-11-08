(function() {

  return {

    events: {
      'app.activated':'initialize', // this event is run once when the app loads and calls the 'initialize' function
      'ticket.custom_field_{{parent_dropdown}}.changed': 'changeHandler1',
      'ticket.custom_field_{{parent_dropdown2}}.changed': 'changeHandler2',
      'ticket.custom_field_{{parent_dropdown3}}.changed': 'changeHandler3',
      'ticket.custom_field_{{parent_dropdown4}}.changed': 'changeHandler4',
      'ticket.custom_field_{{parent_dropdown5}}.changed': 'changeHandler5',
    },
  

    requests: {
      getCustomFields: {
        url: '/api/v2/ticket_fields.json',
        type: 'GET'
              }
    },


    changeParentHandler: function(event, parentName, childName) {

      var options         = this.ticketFields('custom_field_' + this.setting(childName)).options(),
          selectedParent = this.ticket().customField('custom_field_' + this.setting(parentName)),
          i;

      for (i = 1; i < options.length; i++) {
        if (selectedParent != null && options[i].value().indexOf(selectedParent) !== 0) {
          options[i].hide();
        } else {
          options[i].show();          
        }
      }

    },

    changeHandler1: function(event) {

      this.changeParentHandler(event, 'parent_dropdown', 'child_dropdown');
    },

    changeHandler2: function(event) {

      this.changeParentHandler(event, 'parent_dropdown2', 'child_dropdown2');
    },

    changeHandler3: function(event) {

      this.changeParentHandler(event, 'parent_dropdown3', 'child_dropdown3');
    },

    changeHandler4: function(event) {

      this.changeParentHandler(event, 'parent_dropdown4', 'child_dropdown4');
    },

    changeHandler5: function(event) {

      this.changeParentHandler(event, 'parent_dropdown5', 'child_dropdown5');
    },

    initialize: function(event) { // function called when we load
      console.log("init");
      // this.ajax('getCustomFields').then(
      //   function (data) {
      //     console.log("hi");
      //     done();
      //   },
      //   function() {
      //     console.log('AJAX failed!!!!');
      //     done();
      //   }
      // );
    },
  };
}());