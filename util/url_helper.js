var config = require("../config");
var endpoint = "http://api.crunchbase.com/v/2/";
var keyParam = "user_key";
var qs = require("qs");

function getProductUrl(permalink) {
  return endpoint
  + 'product/' + permalink + '?' 
  + keyParam + '=' + config.apikey
}

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations?' + keyParam + '=' + config.apikey
  + '&' + qs.stringify(params);
}

function getPeopleUrl(page){
  return endpoint
  + 'people?' 
  + keyParam + '=' + config.apikey;
  + "&" + "=" + qs.stringify(page)
}

function getPersonUrl(permalink){
  return endpoint
  + 'person/' 
  + permalink
  + "?"
  + keyParam + '=' + config.apikey
}

module.exports = {
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getProductUrl: function(permalink) {
    return getProductUrl(permalink);
  },
  getPeopleUrl: function(page) {
    return getPeopleUrl(page);
  },
  getPersonUrl: function(permalink) {
    return getPersonUrl(permalink);
  }
}
