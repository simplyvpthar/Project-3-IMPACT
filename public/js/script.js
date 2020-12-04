$(document).ready(function () {

    let charities = [];
    var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=6b5ea4b8&app_key=40ac61b862d04198817f974a0691af9f&pageSize=50";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            charities.push(response[i].charityName);
            $('.box').append('<option value=' + charities[i].replace(' ', '_') + ' name=' + charities[i].replace(' ', '_') + '>' + charities[i] + '</option>');
            
        }
        console.log(charities);



        $("#submitBtn").click(function (event) {
            event.preventDefault();
            console.log($('.box').find(":selected").text());
            
            // console.log(($('#box).find(select => select.selected)));
            //     var list = [];
            //     $("#charityOptions").filter(":selected").each(function(east){
            //         list.push($(this).val());
            //     });
            //     console.log(list);
            //     $.post("/addeast", {'NameList': list})
            //         .then(function(){
            //             console.log("Added country");
            //         });

        });
    });


});