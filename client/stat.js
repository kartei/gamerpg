Template.stat.helpers({
    stats: function () {
        return Stat.find({}).fetch()[0];
    }
});