$('#subscribe').bind('change', function () {
    let checked = $(this).prop('checked')
    if (checked) {
        console.log("selected");
        $('#emailField').show();
    }
    else {
        console.log("Not selected");
        $('#emailField').hide();

    }
})
