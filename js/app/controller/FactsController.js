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
                this._view.updateShare(data.value);
            })
            .catch(error => console.log(error));
    }
}