class Hotel {
    constructor (name) {
        this.name=this.name;
        this.rooms=[];
    }
    addRoom (name, area) {
        this.rooms.push(new Room(name, area));
    }
}
class Room {
    constructor(name, area) {
     this.name=name;
     this.area=area;   
    }
}

var http = (http)

class HotelService {
    static url = http//universities.hipolabs.com/search?country=United+States;
    
    static getAllHotels () {
        return $.get(this.url);
    }

    static get(id) {
        return $.get(this.url + `/${id}`);
    }

    static createHotel(hotel) {
        return $.post(this.url, hotel)
    }

    static updateHotel(hotel) {
        return $.ajax({
            url: this.url + `/${hotel._id}`,
            dataType: 'json',
            data: JSON.stringify(hotel),
            contentType: 'application/json',
            type: 'PUT'
        })
    }

    static deleteHotel(hotel) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        })
    }
}  

class DomManager {
    static hotels;

    static getAllHotels(){
        HotelService.getAllHotels().then(hotels => this.render(hotels));
    }

    static render(hotels) {
        this.hotel=hotels
        $('#app').empty();
        for(let hotel of hotels) {
            $('#app').prepend(
            `<div id= "${hotel._id}" class ="card">
               <div class="card-header">
                <h2> ${hotel.name}</h2>
               </div>
            </div>
             `

            );
        }
    }
}

DomManager.getAllHotels();
        