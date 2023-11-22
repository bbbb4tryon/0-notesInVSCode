//INTENT:a number, equal sign and fizz every third; buzz every 5th and fizzbuzz every 15th, all arranged on bullet points
// RESULT/ OUTPUT:
```1 =
2 =
3 = fizz
4 =
5 = buzz
6 = fizz
7 =
8 =
9 = fizz
10 = buzz
11 =
12 = fizz
13 =
14 =
15 = fizzbuzz
16 =
17 =
18 = fizz```


const ul = document.getElementById("fizzbuzzer");
for (const i = 1; i <= 100; i++, msg = "") {
  if (i % 15 == 0)
    msg = "fizzbuzz";
  else if (i % 3 == 0)
    msg = "fizz";
  else if (i % 5 == 0)
    msg = "buzz";
  else
    msg = "";
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(i + " = " + msg));
  li.setAttribute("class", msg);
  ul.appendChild(li);
}