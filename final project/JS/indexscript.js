
const order = document.querySelector("#order");
order.onclick = function () {
    const name = document.querySelector("#name").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const coffeetype = document.querySelector("#coffeetype").value;
    const flavors = document.querySelector("#flavors").value;
    const temperature = document.querySelector("#temperature").value;
    const size = document.querySelector("#size").value;
    const milk = document.querySelector("#milk").value;

  if (name && phonenumber && coffeetype && flavors && temperature && size && milk) {
    alert("Order placed successfully!");
  } else {
    alert("Please fill in all fields.");
  }
}
const reset = document.querySelector("#reset");
reset.onclick = function () {
    document.querySelector("#name").value = "";
    document.querySelector("#phonenumber").value = "";
    document.querySelector("#coffeetype").value = "";
    document.querySelector("#flavors").value = "";
    document.querySelector("#temperature").value = "";
    document.querySelector("#size").value = "";
    document.querySelector("#milk").value = "";
}
const submit = document.querySelector("#submit");
submit.onclick = function () {
    alert("Order submitted successfully!");
    alert("Thank you for your order!");
}

