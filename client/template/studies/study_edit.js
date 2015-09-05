Template.studyEdit.helpers({
    study:function(){
        return Studies.findOne(this._id);
    },
    reviewer:function(){
        return Meteor.user()['emails'][0]['address'];
    },
    methods:function(){
        console.log(this['methods'])
        return this['methods'];
    }
});