$(document).ready(function () {


    $("#peerBtn").click(function (event) {
        event.preventDefault();
        // console.log($('.school').val());
        // console.log($('.course').val());
        // console.log($('.grade').find(":selected").text());
        // console.log($('.classMessage').val());
        
        var user = "user@example.com"
        var amount = $('.peerAmount').find(":selected").text()
        var message = $('.peerMessage').val()
            $.post("/api/posts/peer", {user, amount, message}
            )
                .then(function(){
                    console.log("Added Charity");
                });

     });
});
