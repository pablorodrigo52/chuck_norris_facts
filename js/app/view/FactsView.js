class FactsView{
    constructor(){
        this._randomLabel   = document.querySelector('#random');
        this._twitter       = document.querySelector('#twitter');
        this._facebook      = document.querySelector('#facebook');
        this._whatsapp      = document.querySelector('#whatsapp');
    }

    loading(){
        this._randomLabel.innerHTML = `<img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading">`;
    }

    _updateDependencies(label){ 
        const footer = `\n\nCheck it out more in: ${window.location.href.split('?')[0]}.\n\n@chucknorris #chucknorris`;
        const params = encodeURIComponent(`${label}${footer}`);
        
        this._twitter.setAttribute('href', `https://twitter.com/intent/tweet?text=${params}`);
        this._facebook.setAttribute('href', `https://www.facebook.com/sharer.php?u=${window.location.href}`);
        this._whatsapp.setAttribute('href', `whatsapp://send?text=${params}`);
    }

    updateRandomLabel(data){
        setTimeout(()=>{
            this._randomLabel.innerHTML = data.value;
            this._randomLabel.setAttribute('data-id', data.id);
        }, 500);
        this._updateDependencies(data.value);
    }
}