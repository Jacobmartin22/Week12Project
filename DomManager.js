class DomManager {
    static planets;

    static getAllPlanets() {
        HotelService.getAllPlanets().then(planets => this.render(planets));
    }

    static render(planets) {
        this.planets = planets;
        $('#app').empty();
        for (let planet of planets) {
            $('#app').prepend(
                `<div id="${planet._id}" class="card">
              <div class="card-header">
               <h2>${planet.name}</h2>
              </div>
            </div>
            `
            );
        }
    }
}
