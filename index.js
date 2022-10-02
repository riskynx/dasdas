const turu = require('request');

turu.get('https://turu.com/api', (err,res) => {
  if (!err) {
    const result = res.body;
    const ngantuk = result.turu[0];
  } else {
    console.log("turu")
  }
});
