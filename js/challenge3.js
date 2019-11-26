$("input[type=radio]").on('change', function () {
    $('input[type=radio]').prop('checked', false)
    $(this).prop('checked', true)
})
// The submit button must link to Challenge 4, but the button should not work unless one radio button is selected.
$('#ch3form').on('submit', function () {
    if ($('input[type=radio]:checked').length) return true
    alert("You must pick a fruit!")
    return false
})
