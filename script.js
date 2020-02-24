$(document).ready(function () {
    $("#menutoggle").click(function () {
        if ($("#wrap").hasClass("off") === false) {
            $("#wrap").addClass("off");
            $("header").addClass("off");
            $("footer").addClass("off");
        } else {
            $("#wrap").removeClass("off");
            $("header").removeClass("off");
            $("footer").removeClass("off");
        }
    });
});

$(document).ready(function () {
    $("#nighttoggle").click(
        function nightDayHandler() {
            if ($("#nighttoggle").hasClass("on") === false) {
                $("#nighttoggle").addClass("on");
                Outer.setTitleColor('#4E2700');
                Outer.setHeaderColor('#272100');
                Body.setBackgroundColor('#181800');
                Body.setColor('white');
                Links.setColor('#74BAEC');
                Footer.setInstarColor('#008453');
                Footer.setFaceColor('#522719');
                Footer.setColor('#626671');
            } else {
                $("#nighttoggle").removeClass("on");
                Outer.setTitleColor('gold');
                Outer.setHeaderColor('palegoldenrod');
                Body.setBackgroundColor('lightgoldenrodyellow');
                Body.setColor('black');
                Links.setColor('saddlebrown');
                Footer.setInstarColor('pink');
                Footer.setFaceColor('lightblue');
                Footer.setColor('gray');
            }
        }
    );
});



var Outer = {
    setTitleColor: function (color) {
        $('#title').css('backgroundColor', color);
    },
    setHeaderColor: function (color) {
        $('header').css('backgroundColor', color);
    }
};

var Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    }
};

var Links = {
    setColor: function (color) {
        $('a').css('color', color);
    }
};

var Footer = {
    setInstarColor: function (color) {
        $('.instar').css('backgroundColor', color);
    },
    setFaceColor: function (color) {
        $('.face').css('backgroundColor', color);
    },
    setColor: function (color) {
        $('footer').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('footer').css('backgroundColor', color)
    }
};
