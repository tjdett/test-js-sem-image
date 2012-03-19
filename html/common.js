var getBinaryString = function(url, cb) {
  $.ajax(url, { 
    'success': function (data, textStatus, jqXHR) {
      return cb($.base64.decode(data));
    }
  });
};
