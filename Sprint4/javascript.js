function handleSubmit(e){
    e.preventDefault()
}

// Name validation
function validateName(name) {
    if (name == "") {
        let errorMsg = "Name cannot be empty!";
        return errorMsg;
    } else if (name.length < 2) {
        let errorMsg = "Name length cannot be smaller than 2!";
        return errorMsg;
    }
    return name;
}

// Message validation
function validateMessage(message) {
    if (message == "") {
        let errorMsg = "Message cannot be empty!"
        return errorMsg
    }
    return message
}


$(document).ready(function() {

    $(function() {
        
        var names = [];

        $.getJSON("jsons/users.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    names.push(value.name + " " + value.lastname);
                });
            });
        });


        console.log(names);
        $("#search-input").autocomplete({
          source: names
        });
    });

    $("#tabs").tabs();

    $("#datepicker").datepicker();

    new jBox('Tooltip', {
      attach: '#myTooltipEvents',
      trigger: 'click',
      onOpen: function() {
        let name = document.getElementById('name').value;
        let message = document.getElementById('message').value;
                
        if(validateName(name) != name){
            new jBox('Notice', {content: validateName(name), color: 'red'});
        }else if (validateMessage(message) != message){
            new jBox('Notice', {content: validateMessage(message), color: 'red'});
        }else{
            document.getElementById('name').value='';
            document.getElementById('email').value='';
            document.getElementById('message').value='';
            document.getElementById('phone').value = '';
            document.getElementById('country').value = 'Ankara';
            
            new jBox('Notice', {content: 'Submission is successful', color: 'green'});
        }
      }
    });
  });

$(document).ready(function(){
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const pageName = url.pathname.split('/').pop().split('.')[0];

    const clubName = params.get('clubs');
    const newsName = params.get('news');
    const tag = params.get('tag');
    const username = params.get('username');

    // Clubs
    $.getJSON("jsons/clubs.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    if(value.clubLink == clubName){
                        $("#clubName").html(value.clubName);
                        $("#clubHead").html(value.clubHead);
                        $("#memberNum").html(value.memberNum);
                        $("#clubScope").html(value.clubScope);
                        $("#image").attr("src","images/" + value.clubImage);
                    }else{
                        $(".container-clubs").append('<a href="club-info.html?clubs=' + value.clubLink + '" class="club-div"><img src="images/' + value.clubImage + '" alt="" class="club-img"><p class="club-name">' + value.clubName + '</p></a>');
                    }
                    $(".club-list").append('<a href="club-info.html?clubs=' + value.clubLink + '"><img src="images/' + value.clubImage + '" alt="" class="club-img">' + value.clubName + '</a>');
            });
        });
    });

    // Tags
    $.getJSON("jsons/tags.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $(".subject-list").append('<a href="index.html?tag=' + value.tag + '">' + value.name + '</a>');
            });
        });
    });

    // News
    $.getJSON("jsons/news.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                if(value.link == newsName){
                    $(".date").html(value.date);
                    $(".resource").html(value.resource);
                    $(".header-news").html(value.header);
                    $(".news-content-text").html(value.content);
                    $(".news-image").attr("src","images/" + value.image);
                }
                $("#news").append('<div class="news-card"><img src="images/' + value.image + '" alt="" class="news-img"><h5 class="news-header">' + value.header + '</h5><p class="news-text">' + value.summary + '</p><a href="news.html?news=' + value.link + '" class="news-link">Go News</a></div>');
            });
        });
    });

    // Homepage
    if(pageName == "index"){
        $.getJSON("jsons/posts.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    if(!tag){
                        if(value.tag){
                            $(".posts-section").append('<div class="post-card"><div class="post-header"><div class="header-left"><img src="images/' + value.image + '" alt="" class="profile-img"><div class="header-center"><div class="poster-name">' + value.name + '</div><div class="time-elapsed">' + value.time + '</div></div></div><div class="header-right"></div></div><p class="post-content"><span style="color:blue; font-weight:bold">#' + value.tag + '</span> ' + value.content + '</p><div class="post-interaction"><div class="like"></div></div></div>');
                        }else{
                            $(".posts-section").append('<div class="post-card"><div class="post-header"><div class="header-left"><img src="images/' + value.image + '" alt="" class="profile-img"><div class="header-center"><div class="poster-name">' + value.name + '</div><div class="time-elapsed">' + value.time + '</div></div></div><div class="header-right"></div></div><p class="post-content">' + value.content + '</p><div class="post-interaction"><div class="like"></div></div></div>');
                        }
                    }else{
                        if(value.tag == tag){
                            $(".posts-section").append('<div class="post-card"><div class="post-header"><div class="header-left"><img src="images/' + value.image + '" alt="" class="profile-img"><div class="header-center"><div class="poster-name">' + value.name + '</div><div class="time-elapsed">' + value.time + '</div></div></div><div class="header-right"></div></div><p class="post-content"><span style="color:blue; font-weight:bold">#' + tag + '</span> ' + value.content + '</p><div class="post-interaction"><div class="like"></div></div></div>');
                        }
                    }
                });
            });
        });
    }

    // Search Button
    $(".search-btn").on("click",function(){
        let searchInput = $("#search-input").val();
        
        $.getJSON("jsons/users.json", function(data){
            $.each(data, function() {
                $.each(this, function(key, value) {
                    let fullname = value.name + " " + value.lastname;
                    if(fullname === searchInput){
                        window.location.href = "profilepage.html?username=" + value.username;
                    }
                });
            });
        });
    });

    // Share Button
    $(".share-btn").on("click",function(){
        let postContent = $(".share-content").val();
    
        const d = new Date();

        const hour = d.getHours();
        const min = d.getMinutes();

        let date = hour + ":" + min;

        $(".posts-section").prepend('<div class="post-card"><div class="post-header"><div class="header-left"><img src="images/non-image.png" alt="" class="profile-img"><div class="header-center"><div class="poster-name">Ebubekir Alatepe</div><div class="time-elapsed">' + date + '</div></div></div><div class="header-right"></div></div><p class="post-content">' + postContent + '</p><div class="post-interaction"><div class="like"></div></div></div>');
    });

    // Profile Page
    $.getJSON("jsons/users.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                if(value.username == username){
                    $(".username").html(value.name + " " + value.lastname);
                    $(".bio").html(value.aboutme);
                    $(".profile-picture").attr("src","images/" + value.image);
                    $(".cover-picture").attr("src","images/" + value.coverimage);

                    $("#phoneNum").html(value.number);
                    $("#birthday").html(value.birthday);
                    $("#university").html(value.university);
                    $("#faculty").html(value.faculty);
                    $("#department").html(value.department);
                    $("#country").html(value.country);
                    $("#city").html(value.city);

                    value.hobbies.forEach(element => {
                        $("#hobbies").append(element + " ");
                    });


                    value.clubs.forEach(element => {
                        $.getJSON("jsons/clubs.json", function(data){
                            $.each(data, function() {
                                $.each(this, function(key, value) {
                                    if(element == value.clubLink){
                                        $(".followed-clubs").append('<a href="clubs.html?clubs=' + value.clubLink + '"><img src="images/' + value.clubImage + '" class="club-image"></a>');
                                    }
                                });
                            });
                        });
                    });
                    
                }
            });
        });
    });
}); 

$(document).ready(function(){
    var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ankara,TR?key=GBW2H28W57ZSDZCNADREHTZRF";
    $.getJSON(url, function(data){
        let celcius = Math.round(( data.currentConditions.temp - 32 ) / 1.8);
        $("#temperature").html(celcius);
        $("#location").html(data.address);
    });
});