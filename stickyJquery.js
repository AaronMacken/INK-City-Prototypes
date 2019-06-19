$("document").ready(function() {
    $(".js--page-layout-grid").waypoint(function(direction){
        if(direction == "down") {
            $("nav").addClass("sticky");
            $("body").addClass("padding-body");
        } else {
            $("nav").removeClass("sticky");
            $("body").removeClass("padding-body");
        }
   
    }, {offset: "25px"});
});