function sendMail() {
    var params = {
      name: document.getElementById("exampleInputName").value,
      email: document.getElementById("exampleInputEmail2").value,
      message: document.getElementById("exampleInputMessage").value,
    };

    const serviceID = "service_rzrxhgl";
    const templateID = "template_o6ierwy";

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("exampleInputName").value = "";
          document.getElementById("exampleInputEmail2").value = "";
          document.getElementById("exampleInputMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!")

      })
      .catch(err=>console.log(err));

  }