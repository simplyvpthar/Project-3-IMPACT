$(document).ready(function () {


        $("#applyBtn").click(function (event) {
            event.preventDefault();
            // console.log($('.box').find(":selected").text());
            // console.log($('.donation-amount').find(":selected").text());
            var user = "user@example.com"
            var school = "SMU"
            var course = "Biology"
            var grade = "A"
            var message = "hard coded message"
                $.post("/api/posts/reinburse", {user, school, course, grade, message}
                )
                    .then(function(){
                        console.log("Added Charity");
                    });

        });
    });


