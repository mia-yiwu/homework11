function setHomeAddress() {
    let checked = $('#useBilling').prop('checked')
    let billing = $('#billing')
    let home = $('#home')
    if (checked) {
        home.val(billing.val())
        home.prop('disabled', true)
    }
    else {
        home.val('')
        home.prop('disabled', false)
    }
}
