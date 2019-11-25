"use strict";

const logo = document.querySelectorAll('#logo path')                // select the logo path
                                                                    // console.log(logo) to check if nodelist appears.
for (let i=0; i < logo.length; i++) {                               // loop through the logo paths...
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);        // "Letter 0 is 493.9128723144531"
}