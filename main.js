var newform = document.querySelector('.newform');
var entry = document.querySelector('#name');
var amount = document.querySelector('#amount');
var btn = document.querySelector('#submit');
var newentry = document.querySelector("#newentry");


newform.addEventListener('submit', onClicked);


function onClicked(e)
{
    e.preventDefault();
    if(entry.value == '' || amount.value == '' )
    {
            alert("please enter the values");
    }

    else
    {
        var li = document.createElement('li');
        var newnode = document.createTextNode(`New Entry ${entry.value} and ${amount.value}`);
        li.appendChild(newnode);
        newentry.appendChild(li);
        entry.value='';
        amount.value='';
    }
  
}
