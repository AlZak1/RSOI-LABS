$("#load-button").click(function(e) {
    $.post("../resource/data.xml", function(data) {
        let nameValue = $(data).find('country').attr('capital')
        let yearValue = $(data).find('country').attr('country')

        document.querySelector('#country').value = yearValue
        document.querySelector('#capital').value = nameValue
    }).fail(function() {
        showErrorModal()
    });
});

$("#script-button").click(function(e) {
    $.getScript("../js/loaded-script.js")
        .fail(function(jqxhr, settings, exception) {
            showErrorModal()
        });
});

$("#show-data-button").click(function(e) {
    var radioArray = document.getElementsByName('size')

    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            var resultSize = radioArray[i].value
        }
    }
    console.log(resultSize)
    var textarea = document.createElement('textarea')
    document.querySelector('#placeForModal').appendChild(textarea)
    $('#placeForModal').css('text-align', 'center')
    $('textarea').css('font-size', resultSize)
    $("textarea").text(document.querySelector('#country').value + " " + document.querySelector('#capital').value)
});

function showErrorModal() {
    var modal = document.querySelector("#errorModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
}