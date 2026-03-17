//Selection with Id
const result=document.getElementById("para");//it's convention is camel case
//console.log(result);
result.innerHTML="Hello World";
result.title="Dr";
//document.write(result);

// Selecting with class
const x=document.getElementsByClassName("p1");//it returns an array
console.log(x);
x[0].innerHTML="Dipanshu";
x[1].innerHTML="Roy";

//selecting with tag
//returns a NodeList
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";//if you want to apply style in any element of paragraph the use .style.property
result3[1].innerText="i am learning JavaScript";

//Query Selector
const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";

//Query Selector All
const test2=document.querySelectorAll("ul li");
for (i in test2)
{
    test2[i].style.backgroundColor = "green";
    test2[i].style.margin = "10px";
    test2[i].style.color = "blue";
}
