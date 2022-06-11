/**
 * @author PixeledLuaWriter (Godcat567)
 * @description Generates A Guid specifically from a randomized string generator with the built in math module
 * @version 2.0
 */

/**
   This Code Is Licensed Under The MIT License, Please Keep The LICENSE File
   When Redistributing This
 */

const genRandString = (Length: number) => {
    let str = '';
    for (let i = 0; i < Length; i++) {
        str += String.fromCharCode(Math.floor((Math.random() * (57 - 48 + 1) + 48)), Math.floor((Math.random() * (90 - 65 + 1) + 65)));
    }
    return str.slice(0, Length);
}

const GenerateGUID = (IsWrappedInCurlyBrackets: boolean = null) => {
    if(!IsWrappedInCurlyBrackets) {
        return genRandString(8) + '-' + genRandString(4) + '-' + genRandString(4) + '-' + genRandString(4) + '-' + genRandString(12);
    } else if(IsWrappedInCurlyBrackets || IsWrappedInCurlyBrackets === null && typeof(IsWrappedInCurlyBrackets) === 'undefined') {
        return '{' + genRandString(8) + '-' + genRandString(4) + '-' + genRandString(4) + '-' + genRandString(4) + '-' + genRandString(12) + '}';
    }
}


// Benchmark Stuff (Keep This If Your Gonna Test, If Not Then Just Remove The Lines Below that's not below 'ConvertRandStringToGUID()')

for (let i = 0; i < 1e2; i++) {
    console.log(GenerateGUID())
}
