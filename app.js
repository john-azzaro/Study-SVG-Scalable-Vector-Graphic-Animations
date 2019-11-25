"use strict";

function findLength() {
  const words = document.querySelectorAll('#words path')                // select the words path
                                                                        // console.log(words) to check if nodelist appears.
  for (let i=0; i < words.length; i++) {                                // loop through the words paths...
    console.log(`Letter ${i} is ${words[i].getTotalLength()}`);         // "Letter 0 is 493.9128723144531"
  }
}

function initialize() {
  findLength();
}

$(initialize);

