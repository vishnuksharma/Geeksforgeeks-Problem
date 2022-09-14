/**
 * At Canva, we have thousands of designs created each day. 
We want to write a program that can fetch public designs from our backends to do some processing on them.
The backend API looks like: GET /design/<id:integer> Starting simple, lets write a solution that 
fetches 10 designs from this backend API (say, designs with IDs between 1 and 10). 
The program should write Done to the console once all the 
designs have been fetched.
 */


/** * Fetch data at the given URL. Returns a promise that resolves with the data. * 
 * Simulates random network latency up to 4 seconds. */
function fetch(url) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`dummy data for ${url}`), Math.random() * 4000);
        });
    }
const getDesign = (designId=1) => {
    return fetch(`/design/${designId}`);
}

const list = [];
for (let i = 1; i <= 10; i++){
    list.push(getDesign(i))  
    // getDesign(i).then(res => {
    //     console.log(res)
    // });
}

Promise.all(list).then(res => {
    console.log(res);
    console.log('Done');
})

/** * A dummy implementation of the design backend. Returns a promise which resolves with the * requested design. */
// Sample Output Design 
// 1: { r: 191.25 g: 191.25 b: 127.5 }
// Design 2: { r: 191.25 g: 191.25 b: 127.5 }

function fetchDesign(id) {
    return Promise.resolve({
        designId: id,
        shapes: [
            { shapeId: 'basic-square', color: { r: 255, g: 255, b: 255 }},
            { shapeId: 'basic-circle', color: { r: 255, g: 255, b: 255 }},
            { shapeId: 'basic-diamond', color: { r: 255, g: 0, b: 0 }},
            { shapeId: 'basic-rectangle', color: { r: 0, g: 255, b: 0 }}
            ]
        });
}

const calculateAvg = (shapes = []) => {
    let r = 0;
    let g = 0;
    let b = 0;
    const totalShapes = shapes.length;
    const avg = shapes.map(item => {
        r = r+item.color.r;
        g = g+item.color.g;
        b = b+item.color.b;
        return {
            r, g, b
        };
    })

    let {r: rr, g: gg, b: bb} = avg[(avg.length - 1)];

    return { r: rr/totalShapes, g: gg/totalShapes, b: bb/totalShapes };
}

for (let i = 1; i <= 10; i++){
    fetchDesign(i).then(res => {
        const avgCalc = { [res.designId]:  {...calculateAvg(res.shapes)} };
        console.log(avgCalc);
    });
}

