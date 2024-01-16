function sendMail() {
    

  var params = {
      name: document.getElementById("exampleInputName").value,
      email: document.getElementById("exampleInputEmail2").value,
      message: document.getElementById("exampleInputMessage").value,
    };

    const serviceID = "service_rzrxhgl";
    const templateID = "template_o6ierwy";

    var name = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputEmail2').value;
    var message = document.getElementById('exampleInputMessage').value;

    if (name !== '' && email !== '' && message !== '') {
      // All fields are filled, you can submit the form or perform other actions here
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("exampleInputName").value = "";
          document.getElementById("exampleInputEmail2").value = "";
          document.getElementById("exampleInputMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!")

      })
      .catch(err=>console.log(err));

    }else {
      alert('Please fill in all the required fields.');
    }
      

  }

