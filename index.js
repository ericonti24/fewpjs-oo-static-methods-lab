class Formatter {
  //add static methods here

  // is a static method
  // uppercases the first letter in a String
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  // is a static method
  // removes non-alphanumeric characters except for dash, single quote and space
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\' ]+/g, '')  
  }

  static titleize(string) {
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(' ').map(function(word, index) {
      if (index != 0 && except.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }.bind(this)).join(' ')
  }
}