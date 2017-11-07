import Vue from 'vue'

var ajax = {
  getList: function (successCallback, errorCallback) {
    Vue.http.get('/static/data.json').then(successCallback, errorCallback)
  }
}

export default ajax
