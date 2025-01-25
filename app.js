n = 0;
m = 0;
a = 0;
p = 0;
arr = [{ name: "", phone: +99899000, id: n }];

let newELe = document.querySelector("#contactList");

let nameInp = document.getElementById("name");
let phoneInp = document.getElementById("phone");
let emailInp = document.getElementById("email");

let btn = document.querySelector("#add");
btn.addEventListener("click", () => {
  try {
    event.preventDefault();

    let div = document.createElement("div");

    div.setAttribute("id", "hello");

    newELe.append(div);
    if (
      nameInp.value == "" ||
      phoneInp.value == "" ||
      Number(phoneInp.value == NaN) ||
      (nameInp.value == "" &&
        (Number(phoneInp.value) || phoneInp.value == 0)) ||
      emailInp.value == "" ||
      ![...emailInp.value].includes("@")
    ) {
      throw new Error("Invalid input type!");
    }

    let name1 = document.createElement("h4");
    let phone = document.createElement("h4");

    let email1 = document.createElement("h4");

    email1.setAttribute("id", `m${m}`);
    name1.setAttribute("id", `n${a}`);
    phone.setAttribute("id", `p${p}`);
    div.append(name1);
    div.append(phone);
    div.append(email1);
    let butn = document.createElement("button");
    butn.setAttribute("id", "del");
    butn.innerHTML = "Delete";
    div.append(butn);
    let nm = document.getElementById(`n${a}`);
    let call = document.getElementById(`p${p}`);
    let mail = document.getElementById(`m${m}`);
    arr.push({
      name: nameInp.value,
      phone: phoneInp.value,
      email: emailInp.value,
      id: n,
    });

    arr.forEach((element) => {
      call.innerHTML = "Phone:" + " " + element.phone;

      nm.innerHTML = "Name:" + " " + element.name;

      mail.innerHTML = "Mail:" + " " + element.email;
    });
    console.log(arr);
    document.querySelector("form").reset();
    document.querySelector("p").innerHTML = "Contact added succesfully!";
    document.querySelector("p").style.color = "green";

    m++;
    a++;
    p++;
  } catch (error) {
    document.querySelector("p").style.color = "red";
    document.querySelector("p").innerHTML = error;

    console.error(error);
  }
});
