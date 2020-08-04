class FactsView{
    constructor(){
        this._randomLabel = document.querySelector('#random');
        this._twitter = document.querySelector('#twitter');
    }


    loading(){
        this._randomLabel.innerHTML = `<img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading"><img src="assets/loading2.svg" alt="Loading">`;
    }

    updateRandomLabel(data){
        setTimeout(()=>{
            this._randomLabel.innerHTML = data.value;
            this._randomLabel.setAttribute('data-id', data.id);
        }, 500);
    }

    updateShare(label){
        const footer = `\n\nCheck it out more in: ${window.location.href}.\n\n@chucknorris #chucknorris`;
        let twitter = `${label}${footer}`;
        
        console.log(encodeURIComponent(twitter));
        this._twitter.setAttribute('href', `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitter)}`);
    }
}