const googleSearchFetch = async (args, callback) => {
  await fetch(`https://www.google.com/search?q=${ args }&aqs=chrome..69i57.997j0j1&sourceid=chrome&ie=UTF-8`, {
      method: 'get' // opcional 
    })
    .then(response => {
      // use a resposta 
      response.json()
        .then(data => {
          console.log(data);

          return callback(data);
        });
    })
    .catch(err => {
      throw new Error(err);
    });
}

module.exports = googleSearchFetch;