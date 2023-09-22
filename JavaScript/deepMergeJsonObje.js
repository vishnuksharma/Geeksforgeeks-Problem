function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function deepMerge(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

// Example
const json1 = {
    "a": {
        "b": 1,
        "c": {
            "d": 2,
            "e": 3
        }
    },
    "f": 4
};

const json2 = {
    "a": {
        "b": 5,
        "c": {
            "e": 6
        }
    },
    "g": 7
};

console.log(deepMerge(json1, json2));
