$("#datetime").dateTime();
$("#postButton").click(function() {
    if ($("#datetime").val() !== "") {
        var data = $("#datetime").val().replace("T", " ");
        data += ".000";
        console.log("data:",data);
        alert("Post");
        $.ajax({
            type: "POST",
            url: "/api/Date",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function() {
                alert("Date post successfully");
            },
            error: function() {
                alert("Posting time failed.");
            }
        });
    } else {
        alert("Please fill in time");
    }
});