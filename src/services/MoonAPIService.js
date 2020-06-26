export class MoonAPIService {
    API_URL = "https://www.icalendar37.net/lunar/api/?"


    getMoonInfo= (date, successCallback, errorCallback) => {
        const gets = [];
        const currDate = new Date(date)
        const API_PARAM = {
            lang  		:'pl',
            month 		:currDate.getMonth() + 1,
            year  		:currDate.getFullYear(),
            size		:50,
            lightColor	:"#f8f8b1",
            shadeColor	:"#494b58",
            sizeQuarter	:20,
            texturize	:false
        }
        for (let i in API_PARAM) {
            gets.push(i+"="+encodeURIComponent(API_PARAM[i]))
        }

        fetch(`${this.API_URL}`+gets.join("&"), {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }
}