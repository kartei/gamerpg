Template.commend.events({
    // button이 클릭되면 우측 함수가 실행된다
    //탐색 실행
    "click #btnSuch": function(evt, tmpl) {
        var obj = Stat.findOne({});
        var obj2 = AnimyData.findOne({});

        if(obj.hp <= 0 || obj.st <= 0){
            location.reload();

        }else {
            $("#home").hide()
            $("#btnAtteck").show()
            $("#btnRun").show()
            $("#btnCure").hide()
            $("#animy").show()
            $("#animy2").show()
            $("#btnSuch").hide()

            obj.st = obj.st - 1;
            Stat.update({_id: obj._id}, obj);

            obj2.name = "보글보글";
            obj2.job = "몬스터";
            obj2.maxhp = 50;
            obj2.maxmp = 10;
            obj2.hp = 50;
            obj2.mp = 10;
            obj2.ap = 20;
            obj2.dp = 5;
            obj2.sp = 5;
            obj2.lv = 1;

            AnimyData.update({_id: obj2._id}, obj2);


        }
    },

    //회복 실행
    "click #btnCure": function (evt, tmpl) {
        var obj = Stat.findOne({});
        obj.hp = obj.maxhp;
        obj.mp = obj.maxmp;
        obj.st = obj.maxst;
        Stat.update({_id: obj._id},obj);
    },


    //공격버튼
    "click #btnAtteck": function (evt, tmpl) {
        var obj = Stat.findOne({});
        var obj2 = AnimyData.findOne({});

        obj.hp = obj.hp - (obj2.ap - obj.dp);
        obj.st = obj.st - 1;
        obj.exp = obj.exp + 5;
        obj2.hp = obj2.hp - (obj.ap - obj2.dp);

        if(obj.hp <= 0 || obj.st <= 0 || obj2.hp <= 0){
            location.reload();}
            Stat.update({_id: obj._id}, obj);
            AnimyData.update({_id: obj2._id}, obj2);
    },

    //도망 버튼
    "click #btnRun": function (evt, tmpl) {
        $("#home").show()
        $("#btnAtteck").hide()
        $("#btnRun").hide()
        $("#btnCure").show()
        $("#animy").hide()
        $("#animy2").hide()
        $("#btnSuch").show()
    }
});


