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
        var names = [
          "John",
          "Michelle",
          "Adam",
          "Micheal",
          "Jackson",
          "Sarah",
          "Amanda",
          "Albert",
          "Boris",
          "Christian",
          "Drake",
          "Elvis",
          "George",
          "Hector",
          "Jacob",
          "Kelvin",
          "Luke",
          "Matthew",
          "Otis",
          "Pierce",
          "Quinn",
          "Shaw",
          "Tylor",
          "Ulrich",
          "Vincent",
          "Woody",
          "Xenon",
          "Ramsey"
        ];
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