class CakesService {
  constructor($log, $http) {
    this.http = $http;
    this.log = $log;

    this.server = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';
  }

  getAllCakes() {
    var that = this;
    return this.http.get(`${this.server}/cakes`)
      .then((response) => {
        that.log.info(response);
        return response.data;
      });
  }
}

angular
  .module('cakesss')
  .service('cakesService', CakesService);