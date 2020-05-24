const fetch = require('node-fetch');

const googleSearchFetch = async (url, callback) => {
  await fetch(url, {
      method: 'get' // opcional 
    })
    .then(res => {
      // use a resposta 
      res.text()
        .then(data => {
          const str = data.split('<').join('');
          const otherStr = str.split('/').join('');
          const arr = otherStr.split('>');

          console.log(arr);

          if (callback) {
            return callback(data);
          }
        });
    })
    .catch(err => {
      throw new Error(err);
    });
}

module.exports = googleSearchFetch;