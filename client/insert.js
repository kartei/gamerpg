Template.insertData.events(
    {
        // button이 클릭되면 우측 함수가 실행된다
        "click #btnSend": function (evt, tmpl) {
            evt.preventDefault();
            var user = Meteor.user();
            console.log(user);
            if (!user) {
                return alert('로그인이 필요합니다');
            }

            //data를 input에서 꺼내서 디비에 저장한다
            var obj = {};
            obj.name = $('#name').val();
            obj.job = $('#job').val();
            obj.maxhp = $('#maxhp').val();
            obj.maxmp = $('#maxmp').val();
            obj.maxst = $('#maxst').val();
            obj.hp = $('#maxhp').val();
            obj.mp = $('#maxmp').val();
            obj.st = $('#maxst').val();
            obj.ap = $('#ap').val();
            obj.dp = $('#dp').val();
            obj.sp = $('#sp').val();
            obj.exp = 150;
            obj.lv = 1;
            
            Stat.insert(obj);

            $('#Name').val(name);
            $('#job').val(job);
            $('#hp').val(maxhp);
            $('#mp').val(maxmp);
            $('#st').val(maxst);
            $('#maxhp').val(maxhp);
            $('#maxmp').val(maxmp);
            $('#maxst').val(maxst);
            $('#ap').val(ap);
            $('#dp').val(dp);
            $('#sp').val(sp);
        }
    });