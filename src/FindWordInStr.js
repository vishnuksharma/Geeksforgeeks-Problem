const findWordsFromStr = (arg) => {
    let mainStr = null;
    const splitArg = arg.split('\n');
    if (splitArg.length >= 2) {
        mainStr = splitArg[0];
        numOfSubStr = splitArg[1];
        
        for(let i = 0; i < numOfSubStr; i++) {
            const subStr = splitArg[i+2];
            // console.log(subStr);
            debugger;
            const index = mainStr.indexOf(subStr);
            mainStr = mainStr.slice(0, index) + " "+mainStr.slice(index, index+subStr.length)+ " "+mainStr.slice(index+subStr.length);
        }
    } 
    
    return mainStr;
}

console.log(findWordsFromStr('ssdgsfdsfsdfsinvertedthesdsds\n2\ninverted\nthe'));
