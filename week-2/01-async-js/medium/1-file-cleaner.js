/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman*/

const fs = require("fs");
let fileloc = 'temp.txt'
function FileCleaner(fileloc){
    fs.readFile(fileloc,"utf-8", function(err,data){
        if(err){
            console.log(err)
        }
        else{
            data = data.replace(/\s+/g, ' ')
            data = data.trim();
            fs.writeFile(fileloc,data,function(err){
                if(err){
                    console.log(err);
                }
            })
        }
    })
}
FileCleaner(fileloc);
