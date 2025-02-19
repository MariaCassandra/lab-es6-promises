// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        }, error => console.log(error));
      }, error => console.log(error));
    }, error => console.log(error));
  }, error => console.log(error));
}, error => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        obtainInstruction("steak", 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            obtainInstruction("steak", 3)
              .then((step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
                obtainInstruction("steak", 4)
                  .then((step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
                    obtainInstruction("steak", 5)
                      .then((step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
                        obtainInstruction("steak", 6)
                          .then((step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
                            obtainInstruction("steak", 7)
                              .then((step7) => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                              })
                              .catch((error) => console.log(error));
                          })
                          .catch((error) => console.log(error));
                      })
                      .catch((error) => console.log(error));
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  })

// Iteration 3 using async/await
makeBroccoli();
async function makeBroccoli() {
  for (let i = 0; i < 7; i++) {
    await obtainInstruction("broccoli", i).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  document.querySelector("#steakImg").removeAttribute("hidden");
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  document.querySelector("#broccoliImg").removeAttribute("hidden");

}

// Bonus 1 - Promise all
// When the specific food is ready to be served (all steps are listed), remove the hidden attribute from the <img /> element that represents the food, so that the image gets displayed.


// Bonus 2 - Promise all
//Using Promise.all display the cooking steps to make Brussels Sprouts in the correct order. After the last step, you should display an additional <li> with the text: Brussels sprouts are ready!
makeBrusselsSprouts();
 async function makeBrusselsSprouts() {
  for (let i = 0; i < 7; i++) {
    await obtainInstruction("brusselsSprouts", i).then((step0) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
    });
  }
  
Promise.all(promises)
  .then(result => {
    for (value of result) {
      console.log(value)
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  })
  .catch(error => {
    console.log(error)
  })
   }