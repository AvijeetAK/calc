var newform = document.querySelector('.newform');
var entry = document.querySelector('#name');
var amount = document.querySelector('#amount');
var btn = document.querySelector('#submit');
var newentry = document.querySelector("#newentry");


newform.addEventListener('submit', onClicked);
newentry.addEventListener('click', deleteitm);


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
       
        var deletebtn = document.createElement('button');

        deletebtn.className = 'btn btn-danger btn-sm float-right delete';

        deletebtn.appendChild(document.createTextNode('X'));

        li.appendChild(deletebtn);

        newentry.appendChild(li);

        //Adding classes to delete button
        entry.value='';
        amount.value='';
    }
  
}

function deleteitm(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            newentry.removeChild(li);
        }
    }
}
