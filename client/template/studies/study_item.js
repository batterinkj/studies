Template.studyItem.helpers({
    reviewer:function(){
        return Meteor.user()['emails'][0]['address'];
    }
});


Template.studyItem.events({
    "click .editableContent":function(event, template){
        console.log(event.target);
        console.log(this);
        var chartInput = $("input").attr({
            type: 'text',
            class: 'chartInput',
            name: 'chartInput',
            value: $(event.target).html()
        });
        $(event.target).html('');
        $(event.target).append(chartInput);
        
    }
})