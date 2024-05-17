$(document).ready(function() {

    $("a").on("click",function(){
        let title = this.title;
        var url = "json_files/" + title + ".json";
        
        $.getJSON(url, function(data){
            var html = "";
            $("#title").html("");
            $("#image").attr("src", "");
            $("#content").html("");
            $("#month-speaker").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").html(value.title);
                    $("#image").attr("src", value.image);
                    $("#content").html(value.text);
                    $("#month-speaker").html(value.month + "<br>" + value.speaker);
                });
            });
        });
    });

}); // end ready