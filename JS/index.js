$(document).ready(function() {
    $("#destxt").click(function(){
        $("#desp").toggle(1000);
    })
    $("#devtxt").click(function(){
        $("#devp").toggle(1000);
    })
    $("#protext").click(function(){
        $("#prop").toggle(1000);
    })

    $(".image-overlay").hover(function(){

        $(".image-title").css("border", "1px solid","white");

        $(".image-title").css("border-radius","2px")
        $(".image-title").css("padding","5px")
    });
    $(document).ready(function(){
        $('.text').hover(function () {
        $(this).animate({opacity:'1'});
        },
        function () {
        $(this).animate({opacity:'0'});
    })
    });

})

var validation =function (){
    let name =document.getElementById("name").value;
    let email=document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Enter details")
    }else{
        alert("Your message has been received")
    }

}