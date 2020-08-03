class HttpService{
    get(url){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4){
                    if (xhr.status == 200){ // OK
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Something Wrong');
                    }
                }
            }
            xhr.send();
        });
    }
}