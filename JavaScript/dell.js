var txt = "Welcome to Javascript coding task"
const r = txt.split(" ");

String.prototype.reverse = function () {
	return this.split("").reverse().join("");
}

const t = r.map(str=>str.reverse()).join(" ")
console.log(t)

// output: emocleW ot tpircsavaJ gnidoc ksat







const obj1 = {
    getName: function () {
        return this.name; // Should not change
    }
}

const obj2 = { name: "test" }

// when we call the `obj1.getName` function should return the name in `obj2`

obj1.test  = function () {
	return "test function";
}

/* console.log(obj1.test()) */

const ob = obj1.getName.bind(obj2)

/* console.log(ob()) */


