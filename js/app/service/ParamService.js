class ParamService{
    static checkParam(){
        new FactsView().loading();
        const params = window.location.href.substr(1);
        let splitted = params.split('&');
        for (let i = 0; i < splitted.length; i++){
            if (splitted[i].indexOf('zz=') > 0)
            {
                return {value: decodeURIComponent(splitted[i].split('=')[1]), id: new Date().getUTCMilliseconds()}
            }
        }
        return null;
    }
}