$('#ch4form').on('submit', function () {
    let fullname = $('#fullname').val();
    let streetaddr = $('#streetaddr').val();

    if (!fullname.length) {
        $('#nameerrormsg').show();
        $('#fullname').focus()
    }
    else {
        $('#nameerrormsg').hide();
    }

    if (!streetaddr.length) {
        $('#addrerrormsg').show();
        $('#streetaddr').focus()
    }
    else {
        $('#addrerrormsg').hide();
    }

    if ((!fullname.length) && (!streetaddr.length)) {
        $('#fullname').focus()
    }

    if (!fullname.length || !streetaddr.length) return false
    return true
})
