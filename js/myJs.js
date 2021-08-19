$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'He luu Huệ xinh đẹp đáng yêu!',
        text: 'Anh có điều này muốn hỏi, em nhớ phải trả lời thật lòng nhaaa.',
        imageUrl: 'images/cuteCat2.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("images/dom_sang.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
    n++;
}
// move random button póition
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 1300;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
    n++;
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1){
        switchButton();
    }
    else{
        moveButton();
    }
    /*
    else{
        if (n <9){
            moveButton();
        }
    }
    */
});
// generate text in input
function textGenerate() {
    var n = "";
    var text = " Tại vì anh đẹp trai vl :<<<<<<< ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Nói cho anh lí do em thích anh đi :vvvv',
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("images/dom_sang.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("images/de_thuong.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Thôi ngại lém :<<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi cho anh <3'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("images/dom_sang.jpg")',
                title: 'Anh biết mà ^^ Yêu em nhiều 300.000',
                text: "Anh cũng muốn làm chồng của em :v Còn giờ thì chờ gì nữa mà ko inbox cho anh đi nàoooooo",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'http://fb.com';
                  }
            })
        }
    })
})
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})
/*
$('#no').click(function() {
    n=0;
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Cậu muốn ngủ với tớ thiệt đó hả <o',
        width: 900,
        padding: '3em',
        background: '#fff url("images/dom_sang.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("images/de_thuong.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Đùa thôi :<<",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Tớ muốn thiệt mà <3'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("images/dom_sang.jpg")',
                title: 'Ngủ với tớ rồi cũng phải làm người yêu tớ ^^',
                text: "Còn không mau inbox cho tớ báo thời gian địa chỉ đi nàoooo :v Hay tối nay tớ qua đón cậu luôn hihi ",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'http://fb.com';
                  }
            })
        }
    })
})
*/

