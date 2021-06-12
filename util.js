let fs = require("fs");


function getFilesData(files) {
    let filesData = "";
    for (let i = 0; i < files.length; i++) {
      if (!fs.existsSync(files[i])) {
        console.log("One or more Files Doesn't Exist !");
        return;
      }
      if (i == files.length - 1) {
        filesData += fs.readFileSync(files[i]);
      } else {
        filesData += fs.readFileSync(files[i]) + "\r\n";
      }
    }
    return filesData;
  }

function applyNFlag(data) {
    let count  = 1;
    let splitedData = data.split("\r\n");

    for(let i = 0; i < splitedData.length; i++){
        splitedData[i] = `${count}. ${splitedData[i]} `;
        // splitedData[i] = count + "." + splitedData[i];
        count++;
    }

    let NFlag = splitedData.join("\r\n");
    return NFlag;
}


function applyBFlag(data) {
    let count  = 1;
    let splitedData = data.split("\r\n");

    for(let i = 0; i < splitedData.length; i++){
        if (splitedData[i] != "") {
            splitedData[i] = `${count}. ${splitedData[i]} `;
            // splitedData[i] = count + "." + splitedData[i];
            count++;
        }
    }

    let BFlag = splitedData.join("\r\n");
    return BFlag;
}

function applySFlag(data) {
    let emptySpaceIncluded = false;
    let removeSpace = [];
    
    let splitedData = data.split("\r\n");
    console.log(splitedData);

    for (let i = 0; i < splitedData.length; i++) {
        if (splitedData[i] == "" && emptySpaceIncluded == false) {
            removeSpace.push(splitedData[i]);
            emptySpaceIncluded  = true;
        }else if(splitedData[i] != "" ){
            removeSpace.push(splitedData[i])
            if (i < splitedData.length - 2) {
                emptySpaceIncluded = false;
            }
        }  
    }

    let SFlag = removeSpace.join("\r\n");
    return SFlag;
    
}

module.exports.getFilesData = getFilesData;
module.exports.applyBFlag = applyBFlag;
module.exports.applySFlag = applySFlag;
module.exports.applyNFlag = applyNFlag;