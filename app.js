document.addEventListener('DOMContentLoaded',function(){

    const searchBtn = document.getElementById('btn');
    const resultsDiv = document.getElementById('result');
    const search = document.getElementById('superheroSearch')
 /*
    searchBtn.addEventListener('click',function(){
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                alert(error.message);
            });
    });
*/


    searchBtn.addEventListener('click',function(e){
        e.preventDefault();
        resultsDiv.innerHTML = '';
        const xhr = new XMLHttpRequest();
        let url = 'superheroes.php?query=' + search.value;
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    let response = xhr.responseText;
                    resultsDiv.innerHTML = response;
                } 
                else {
                    resultsDiv.innerHTML = 'Unable to fetch data';
                }
            }
        };
        xhr.open("GET",url);
        xhr.send();
    });
});

