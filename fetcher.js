const fs = require('fs')

const request = require('request')

// const content = 'Some content!'

const rq = request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  return content = ('body:', body); // Print the HTML for the Google homepage.
})

  setTimeout(function() {
    fs.writeFile('/vagrant/w2/d3-net/page-fetcher/index.html', content, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log('The file has been successfully written')
    })
  }, 3000);