class FactsController {

    constructor(){
        this._service = new HttpService();
        this._randomLabel = document.querySelector('#random');
    }

    getRandomFact(){
        this._randomLabel.innerHTML = `<img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading">`
        let api = "https://api.chucknorris.io/jokes/random";
        this._service
            .get(api)
            .then(data => {
                setTimeout(()=>{
                    this._randomLabel.innerHTML = data.value;
                    this._randomLabel.setAttribute('data-id', data.id)
                }, 500);
            })
            .catch(error => console.log(error));
    }
}