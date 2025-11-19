document.addEventListener('DOMContentLoaded',function(){

    const searchBtn = document.getElementById('btn');
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


    searchBtn.addEventListener('click',function(){
        
        const xhr = new XMLHttpRequest();
        let url = 'superheroes.php';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                if(xhr.responseText){
                    let response = xhr.responseText;
                    alert(response);
                }
                else {
                    alert('Error'); 
                }
            }
        };
        xhr.open("GET",url);
        xhr.send();
    });
});

