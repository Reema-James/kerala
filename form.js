  let emailReg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  var em=0;
     const checkmail = () => {
        let emailError1 = document.querySelector("#emailError1");
        let mail = document.querySelector("#inputEmail3");
   
        mail.addEventListener('keyup', (e) => {
           if(emailReg.test(mail.value)) {
              emailError1.innerHTML = "Email Validation Pass";
              emailError1.style.backgroundColor = "green";
              em=1;
    
           } else {
              emailError1.innerHTML = "Email Invalid";
              emailError1.style.backgroundColor = "red";
           }
        })
     }

   

     
     let minLength = /(?=.{8,}$)/
     let oneNumber = /.*[0-9].*/
     let oneUpper = /.*[A-Z].*/
    let oneLower = /.*[a-z].*/

     const checkPassword = () => {
    let passwordError = document.querySelector("#errorPassword");
    let passwordBox = document.querySelector("#inputPassword4");

    passwordBox.addEventListener('keyup', () => {
       let len = minLength.test(passwordBox.value);
       let num = oneNumber.test(passwordBox.value);
       let upp = oneUpper.test(passwordBox.value);
       let low = oneLower.test(passwordBox.value);

       if(!len && (upp || low) && !num) {
          passwordError.innerHTML = "Weak";
          passwordError.style.backgroundColor = "red";

       } else if (len && (upp || low) && !num) {
          passwordError.innerHTML = "Medium";
          passwordError.style.backgroundColor = "orange";

       } else if (len && upp && low && num) {
          passwordError.innerHTML = "Strong";
          passwordError.style.backgroundColor = "green";
          
       }
    });
 }
 
 let emailCheckReg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
 var eml=0;
 const checkEmail = () => {
    let emailError = document.querySelector("#emailError");
    let email = document.querySelector("#inputEmail4");

    email.addEventListener('keyup', (e) => {
       if(emailCheckReg.test(email.value)) {
          emailError.innerHTML = "Email Validation Pass";
          emailError.style.backgroundColor = "green";
          eml=1;

      } else {
          emailError.innerHTML = "Email Invalid";
          emailError.style.backgroundColor = "red";
       }
    })
 }

var ph=0;

const checkNumber = () => {
   let phone = document.querySelector("#phonenumber");
   let phoneError = document.querySelector("#phoneError");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneno1 = /^\d{10}$/;

  phone.addEventListener('keyup', (e) => {

    if(!(phoneno1.test(phone.value)))
        {
         phoneError.innerHTML ="number must contain maximum 10 digits";
         phoneError.style.backgroundColor = "red";
        }
   else if(!(phoneno.test(phone.value)))
    {
      phoneError.innerHTML = "acceptable formats xxx-xxx-xxxx/"("\n"); "xxx.xxx.xxxx/xxx xxx xxxx";
      phoneError.style.backgroundColor = "red";
    }
 
      else
        {
         phoneError.innerHTML ="Valid";
         phoneError.style.backgroundColor = "green";
         ph=1;
        }
      })
   }

   function validate(){  
     

      if(em==0){
         alert("Invalid email entered");
         return false;
      }
      else if(ph==0){
         alert("Invalid phone number entered");
         return false
      }
      else return true;
      }
   
      function val(){
       if(eml==0){
            alert("Enter a valid email");
            return false;
      }
      else return true;
   }
