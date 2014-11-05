(function() {

  return {

    events: {
      'app.activated':'initialize', // this event is run once when the app loads and calls the 'initialize' function
      'ticket.custom_field_{{parent_dropdown}}.changed': 'changePartnerHandler',
    },

    requests: {
      getCustomFields: {
        url: '/api/v2/ticket_fields.json',
        type: 'GET'
      }
    },


    changePartnerHandler: function(event) {

      var options         = this.ticketFields('custom_field_' + this.setting('child_dropdown')).options(),
          selectedPartner = this.ticket().customField('custom_field_' + this.setting('parent_dropdown')),
          i;

      for (i = 1; i < options.length; i++) {
        if (selectedPartner != null && options[i].value().indexOf(selectedPartner) !== 0) {
          options[i].hide();
        } else {
          options[i].show();          
        }
      }

    },

    initialize: function(event) { // function called when we load
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