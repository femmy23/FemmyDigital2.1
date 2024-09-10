const submitBtn = document.getElementById("submit-form");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("llk");

  const params = {
    name: document.getElementById("cname").value,
    email: document.getElementById("cemail").value,
    message: document.getElementById("cmessage").value,
  };
  console.log(params);

  emailjs
    .send("service_9yjiz92", "template_1tcdwgs", params)
    .then(alert("Email Sent!!"));
});
