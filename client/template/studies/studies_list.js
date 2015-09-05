Template.studyList.helpers({
    studyListRow: function(){
        return Studies.find();
    }
})

Template.studyList.events({
    'click #deleteStudyButton': function(){
            Meteor.call("studyDelete",this._id)
    }
    
})