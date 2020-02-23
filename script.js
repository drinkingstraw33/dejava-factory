var Outer = {
    setTitleColor: function (color) {
        $('#title').css('backgroundColor', color);
    },
    setHeaderColor: function (color) {
        $('header').css('backgroundColor', color);
    }
}

var Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    }
}

var Links = {
    setColor: function (color) {
        $('a').css('color', color);
    }
}

var Footer = {
    setInstarColor: function (color) {
        $('.instar').css('backgroundColor', color);
    },
    setFaceColor: function (color) {
        $('.face').css('backgroundColor', color);
    },
    setColor: function (color) {
    $('footer').css('color', color);
}
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === '야간 모드로 전환') {
        self.value = '야간 모드 해제';
        Outer.setTitleColor('#4E2700');
        Outer.setHeaderColor('#272100');
        Body.setBackgroundColor('#181800');
        Body.setColor('white');
        Links.setColor('#74BAEC');
        Footer.setInstarColor('#008453');
        Footer.setFaceColor('#522719');
        Footer.setColor('#626671');
    } else {
        self.value = '야간 모드로 전환';
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
