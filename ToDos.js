/*

.-*-.-*-.- AJAX -.*-.-*-.-*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

*/

/*

.-*-.-*-.- PROMISES -.*-.-*-.-*
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

*/

/*

.-*-.-*-.- AXIOS -.*-.-*-.-*
axios.get('https://api.github.com/users/PethersonML')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

*/

/* Exercise 1
function checaIdade(idade){
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve(true);
        }else{
            reject(false);
        }
    })
}

checaIdade(20)
    .then(function(){
        setTimeout(maior, 2000);
    })
    .catch(function(){
        setTimeout(menor, 2000);
    });

function maior(){
    console.log('Maior que 18');
}

function menor(){
    console.log('Menor que 18');
}*/

/*Exercise 2
var listElement = document.querySelector('#git ul');
var inputElement = document.querySelector('input[name=user]');

var repos = [];

function search(){
    var user = inputElement.value;
    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function(response){
            listElement.innerHTML = '';
            repos = response.data;
            for(let r of repos){
                var li = document.createElement('li');
                li.innerHTML = r.name;
                listElement.appendChild(li);
            }
        })
        .catch(function(error){
            alert('Náo foi possivel encontrar este usuário');
        });
}*/

/*

.-*-.-*-.- APPLICATION TODO -.*-.-*-.-*
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

*/