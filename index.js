const fs = require('fs');
const parse = require('csv-parse');

//Reads a csv file where first column is current file name and the second column is the new file name.

const csv_data = [];

fs.createReadStream(__dirname + '/data/filenames.csv') 

    //Use pipe to read the stream and then parse the csv.
    .pipe(
        parse({
            delimiter:',',
            columns: ['current_filename', 'new_filename'],
        })
    )

    //Parsed rows will be stored in the csv_data array.
    .on('data', function(row) {
        csv_data.push(row);
    })

    //Once all rows in the csv file are parsed the files will be renamed according to each index of the array.
    .on('end', function(){

        csv_data.forEach(row => {
            console.log(row);

        })   
        
    })

    //Log error.
    .on('error', function(error){
        console.log(error);
    })

