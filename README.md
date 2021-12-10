# File Rename Tool (Node.js)

## Description
The purpose of this tool is to rename a batch of files. The script reads and parses a .csv file where the first column is the current file name, and the second column is the desired file name. Node's file system package is used to read .csv file and to rename to files. The npm package [csv-parse](https://www.npmjs.com/package/csv-parse) is also used. 

## Installation 

1. Install package dependencies

`npm install`

2. Add files to the _data/files_ folder. The image file foo.png is included as an example and should be removed. 
3. Update _data/filenames.csv_ where the first column is for the current file names and the second column is for the desired file names. I have included `foo.png, bar.jpg` in _data/filenames.csv_ as an example and should be removed. 
4. Run the following in the terminal to execute.
`npm run start`


If you run the example then you will see __foo.png__ update to __bar.jpg__.