var image = $('#image');
var msg = "Hover over an image below."
$('img').on('mouseover', function () {
    image.css('backgroundImage', "url('" + $(this).attr('src') + "')")
    image.html($(this).attr('alt'))
})

$('img').on('focus', function () {
    image.css('backgroundImage', "url('" + $(this).attr('src') + "')")
    image.html($(this).attr('alt'))
})

$('img').on('mouseleave', function () {
    image.css('backgroundImage', "url('')")
    image.html(msg)
})

$('img').on('blur', function () {
    image.css('backgroundImage', "url('')")
    image.html(msg)
})
