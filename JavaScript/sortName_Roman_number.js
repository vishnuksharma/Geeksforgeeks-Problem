const romanToNumber = (roman) => {
    if (roman === "") return 0;

    if (roman.startsWith("L")) return 50 + romanToNumber(roman.substr(1));
    if (roman.startsWith("XL")) return 40 + romanToNumber(roman.substr(2));
    if (roman.startsWith("X")) return 10 + romanToNumber(roman.substr(1));
    if (roman.startsWith("IX")) return 9 + romanToNumber(roman.substr(2));
    if (roman.startsWith("V")) return 5 + romanToNumber(roman.substr(1));
    if (roman.startsWith("IV")) return 4 + romanToNumber(roman.substr(2));
    if (roman.startsWith("I")) return 1 + romanToNumber(roman.substr(1));

    return 0;
}

const sortRoman = (names) => {
    return names.map(n => ({name: n, num: romanToNumber(n.split(" ").pop())}))
                .sort((a, b) => {
                    if (a.name.split(" ").shift() == b.name.split(" ").shift()){
                        return a.num - b.num;
                    }
                    if (a.name < b.name) return -1;
                    if (a.name > b.name )return 1;
                    return 0;
                })
                .map(n => n.name);
}

console.log(sortRoman(["King III", "King II", "Queen IX"]));
console.log(sortRoman(["Louis V", "Louis II", "Queen IX"]));

