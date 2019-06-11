const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
fs.writeFile('test-command-file.txt', 'This is a test file', function(err) {
  if(err) throw err;
  console.log('File is created successfully');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('newCommandFolder', function(err) {
    if(err) throw err;
    console.log('Directory created successfully');
  });
};
