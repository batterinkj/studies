Router.configure({
    layoutTemplate: 'layout'
})

Router.route('/', function () {
  this.render('studyList');
    },{
        name:"home"
    });

Router.route('/studies/:_id',{
    name: 'studyPage',
    data: function(){return Studies.findOne(this.params._id);}
})

Router.route('/studies/:_id/edit',{
    name: 'studyEdit',
    data: function(){return Studies.findOne(this.params._id);}
})

Router.route('/studyNew', {
    name: 'studyNew'
})