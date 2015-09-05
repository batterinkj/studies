Studies = new Mongo.Collection('studies');

Meteor.methods({
    studyInsert: function(studyAttributes){
        check(Meteor.userId(), String);
        var user = Meteor.user()
        var study = _.extend(studyAttributes, {userId:user._id})
        var studyId = Studies.insert(study);
        return studyId;
    },
    
    studyDelete: function(studyId){
        check(studyId, String);
        if(Studies.findOne(studyId).userId = Meteor.user()._id){
            Studies.remove(studyId);
        }
    },
    
    studyUpdate: function(studyAttributes){
        check(Meteor.userId(), String);
        check(studyAttributes['update'], {
            title: String,
            reference: String
        });
        Studies.update(studyAttributes['studyId'],{$set:studyAttributes['update']});
    }
    
})
var Schemas = {};
Schemas.Study = new SimpleSchema({
    title:{
        type: String,
        label: "Title",
        max: 200
        },
    userId:{
        type:String,
        label: "userId"
        },
    reference:{
        type:String,
        label: "Reference"
        },
        
    methods:{
        type: Object,
        label: 'Methods'
        },
    "methods.general":{
        type: String,
        label: 'General'
        },
    'methods.randomization':{
        type: String,
        label: 'Randomization'
        },
    'methods.blinding':{
        type: String,
        label: 'Blinding'
        },
    'methods.duration':{
        type: String,
        label: 'Duration'
        },
    'methods.withdrawals':{
        type: String,
        label: 'Withdrawals'
        },
    'methods.statistics':{
        type: String,
        label: 'Statistics'
        },
    'methods.funding':{
        type: String,
        label: 'Funding'
        },
    patients:{
        type: Object,
        label: "Patients",
    },
    "patients.general":{
        type: String,
        label: 'General'
        },
    "patients.inclusion":{
        type: String,
        label: 'Inclusion'
        },
    "patients.exclusion":{
        type: String,
        label: 'Exclusion'
        },
    interventions:{
        type: [Object],
        label: 'Interventions'
        },
    "interventions.$.intervention": {
        type:String
    },
    "interventions.$.notes": {
        type:String
    },
    outcomes:{
        type: Object,
        label: 'Outcomes'
    },
    "outcomes.primary":{
        type: String,
        label: 'Primary'
        },
    "outcomes.secondary":{
        type: [String],
        label: 'Secondary'
        },
    "outcomes.secondary.$.outcome": {
        type:String
    },
    "outcomes.safety":{
        type: [String],
        label: 'Safety'
        },
    "outcomes.safety.$.outcome": {
        type:String
    },
    results:{
        label:"Results",
        type: [Object]
    },
    "results.$.outcome2": {
        type:String,
        label:"Outcome"
    },
    "results.$.experimental": {
        type:String,
        label:"Experimental"
    },
    "results.$.control": {
        type:String,
        label:"Control"
    },
    "results.$.statistic1": {
        type:String,
        label:"Statistic1"
    },
    "results.$.statistic2": {
        type:String,
        label:"Statistic2"
    },
    "conclusions":{
        type:String,
        label:"Conclusions"
    }
})

Studies.attachSchema(Schemas.Study)

Studies.allow({
    insert:function(userId){
        return (userId&&true)
    },
    update: function(userId){
        return (userId&&true)
    },
    remove: function(userId){
        return (userId&&true)
    }
})