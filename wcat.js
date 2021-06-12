const { getFilesData, applySFlag, applyBFlag, applyNFlag } = require("./util");

let contents = process.argv.slice(2);

const flags = [];
const files = [];

for(let i=0 ; i<contents.length ; i++){
    if(contents[i].startsWith("-")){
        flags.push(contents[i])
    }else{
        files.push(contents[i]);
    }
}

let filesData = getFilesData(files);

if(flags.includes("-s")){
    filesData = applySFlag(filesData);
}

if(flags.includes("-n") && flags.includes("-b")){
    if(flags.indexOf("-b") < flags.indexOf("-n")){
        filesData = applyBFlag(filesData);
    }else{
        filesData =applyNFlag(filesData);
    }
}else if(flags.includes("-b")){
    filesData = applyBFlag(filesData);
}else if(flags.includes("-n")){
    filesData = applyNFlag(filesData);
}

console.log(filesData);