function initListeners (){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function (e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
}
$(document).ready(function(){
    initListeners();
});
$(document).ready(function() {
    MODEL.changePageContent("home");
});

function initOtherListeners(){
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    });
}

$(document).ready(function(){
    initOtherListeners();
});
