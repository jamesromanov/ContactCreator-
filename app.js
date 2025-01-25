arr = [{ name: "", phone: +99899000 }];
let newELe = document.querySelector("#contactList");

let btn = document.querySelector("#add");
btn.addEventListener("click", () => {
  event.preventDefault();
  let name1 = document.createElement("h3");
  let phone = document.createElement("p");
  name1.setAttribute("id", "name1");
  phone.setAttribute("id", "phone1");
  newELe.append(name1);
  newELe.append(phone);
  let nm = document.getElementById("name1");
  let call = document.getElementById("phone1");
  call.innerHTML = "sam";
  nm.innerHTML = "salom";
  arr.push({ name: nm, phone: call });

  console.log(nm, call);
});
