class FactsController {

    constructor(){
        this._service = new HttpService();
        this._view = new FactsView();
    }

    getRandomFact(){
        this._view.loading();
        let api = "https://api.chucknorris.io/jokes/random";
        this._service
            .get(api)
            .then(data => {
                this._view.updateRandomLabel(data);
            })
            .catch(error => console.log(error));
    }

    setFact(data){
        this._view.loading();
        this._view.updateRandomLabel(data);
    }
}