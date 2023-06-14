import $ from 'jquery';

const url = window.location.href;
let Request = {

  get: function(path){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url + path,
        type: 'GET',
        success: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  },

  post: function(path, term){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url + path,
        type: 'POST',
        data: JSON.stringify({ term: term }),
        contentType: 'application/json',
        success: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }
}

export default Request;