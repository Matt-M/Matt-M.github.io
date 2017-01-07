$(document).on('click', '.imagebox .image-thumbnail', function () {
    $(this).parent().toggleClass('fullscreen');
    $('body').toggleClass('imagebox-fullscreen');
});