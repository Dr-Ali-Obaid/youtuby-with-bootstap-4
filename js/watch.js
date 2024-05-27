$(document).ready(function () {
    $('#myBtn').on('click', function () {
        read();
    });
    $('.reply').click(function () {
        $(this).parents('div.row').next('div.card-inner').toggle();
    })
});
function read() {
    var dot = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var butt = document.getElementById('myBtn');
    if (dot.style.display === 'none') {
        dot.style.display = 'inline';
        moreText.style.display = 'none';
        butt.innerHTML = 'عرض المزيد';
    }
    else {
        dot.style.display = 'none';
        moreText.style.display = 'inline';
        butt.innerHTML = 'عرض عناصر أقل';
    }
}