const result=document.getElementById("para");
console.log(result);
result.innerHTML="Hello World";
document.write(result);

// Selecting with class
const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="Dipanshu";
x[1].innerHTML="Roy";

//selecting with tag
//returns a NodeList
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";

//Query Selector
const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";

//Query Selector All
const test2=document.querySelectorAll("ul li");
for (x in test2)
{
    test2[x].style.backgroundColor = "green";
    test2[x].style.margin = "10px";
    test2[x].style.color = "blue";
}
