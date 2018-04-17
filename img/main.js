$(document).ready(function () {


    $("#goToBrief").click(function() {
        window.location = '/index.html';
        // var url = "index.html";
        // $(location).attr('href', url);
        $('html, body').delay(2000).animate({
            scrollTop: $("#brief").offset().top
        }, 2000);
    });
    

    // CREATE AND SEND FORM

    $("#form").submit(function () {
        $('#submit').attr("disabled", true)

        var contentURL = "Name: " + $("#name").val() + "\nWant to: " + $("#wants").val() + "\nNeed service:"
            + $("#needService").val() + "\nService:" + $("#service").val() + "\nGoal: " + $("#goal").val()
            + "\nProblem to be solved: " + $("#problem").val() + "\nAudience: " + $("#audience").val()
            + "\nAdvertise: " + $("#advertise").val() + "\nSite or page: " + $("#link").val()
            + "\nPhone: " + $("#phone").val() + "\nEmail: " + $("#email").val()
            + "\nURL: " + window.location.href;
        var formData = {
            subject: "zhivotnye.agency",
            Name: $("#name").val(),
            Want: $("#wants").val(),
            Need: $("#needService").val(),
            Service: $("#service").val(),
            Goal: $("#goal").val(),
            Problem: $("#problem").val(),
            Audience: $("#audience").val(),
            Advertise: $("#advertise").val(),
            Site: $("#link").val(),
            Phone: $("#phone").val(),
            Email: $("#email").val(),
            fullUrl: window.location.href,
            content: contentURL
        };

        jQuery.ajax({
            url: "./agency.php",
            data: formData,
            type: "POST",
            success: function () {
                $('#submit').attr("disabled", false);
                $('#submit').html('Отпрвлено');
                $('#form')[0].reset();
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText + '|\n' + status + '|\n' + error);
            }

        });
        return false;
    });
});