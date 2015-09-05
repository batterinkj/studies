Template.study.helpers({
    study:function(){
        return Studies.findOne(this._id);
    },
    reviewer:function(){
        return Meteor.user()['emails'][0]['address'];
    },
    studyItem:function(){
        console.log(this);
    }
});