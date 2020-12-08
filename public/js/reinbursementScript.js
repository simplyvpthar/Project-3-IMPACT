$(document).ready(function () {


        $("#applyBtn").click(function (event) {
            event.preventDefault();
            // console.log($('.school').val());
            // console.log($('.course').val());
            // console.log($('.grade').find(":selected").text());
            // console.log($('.classMessage').val());
            
            var user = "user@example.com"
            var school = $('.school').val()
            var course = $('.course').val()
            var grade = $('.grade').find(":selected").text()
            var message = $('.classMessage').val()
                $.post("/api/posts/reinburse", {user, school, course, grade, message}
                )
                    .then(function(){
                        console.log("Added Charity");
                    });

         });
    });


