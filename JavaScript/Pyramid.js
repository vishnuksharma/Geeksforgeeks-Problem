// how to Display Pyramid using Javascript?
// With two loops
function generatePyramid() {
    var totalNumberofRows = 5;
    var output="";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output+=j + "     ";
        }
        console.log(output);
        output="";
    }
}

// With one loop
var num = "";
var size = 5 //prompt ? prompt("Enter the size of the pyramid") : 5;
for(var i=1; i<=size; i++)
{
  num = num + i
  console.log(num);
}