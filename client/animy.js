Template.animy.helpers({
    animy: function () {
        return AnimyData.find({}).fetch()[0];
    }
});