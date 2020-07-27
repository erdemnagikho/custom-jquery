$(() => {
    console.log('Document is ready');
    $('h1').css('color', 'green');
    $('h1').css({
        fontFamily: 'sans-serif',
        cursor: 'pointer'
    });
    $('li').each(function (i) {
        if (i % 2 === 0) {
            $(this).css('color', 'red');
        }
    });
})