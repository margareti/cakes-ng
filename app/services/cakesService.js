class CakesService {
  constructor($log, $http) {
    this.http = $http;
    this.log = $log;

    this.server = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';
  }

  getAllCakes() {
    return this.http.get(`${this.server}/cakes`)
      .then((response) => {
        return response.data;
      });
  }


  getCakeById(id) {
    return this.http.get(`${this.server}/cakes/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  updateCake(cake) {
    return this.http.put(`${this.server}/cakes/${cake.id}`, cake)
      .then((response) => {
        return response.data;
      });
  }

  addCake(cake) {
    return this.http.post(`${this.server}/cakes/`, cake)
      .then((response) => {
        return response.data;
      });
  }

  removeCake(id) {
    return this.http.delete(`${this.server}/cakes/${id}`)
      .then((response) => {
        return response.data;
      });  }
}

angular
  .module('cakesss')
  .service('cakesService', CakesService);