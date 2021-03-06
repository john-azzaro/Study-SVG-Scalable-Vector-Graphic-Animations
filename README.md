# SVG Animations study
See it live: https://john-azzaro.github.io/Study-SVG-Scalable-Vector-Graphic-Animations/

<br>

## What is SVG Animations Study?
A handy study in SVG animations, including how to create a SVG file with Figma, the construction of a special utility to find the exact lengths of paths for the animation, translating the results to CSS,  etc.

Here are a few questions from the study to consider:

* [What are the key takeaways from the SVG Animation Study?](#What-are-the-key-takeaways-from-the-SVG-Animation-Study)
* [Does the SVG Animation Study feature commentary?](#Does-the-SVG-Animation-Study-feature-commentary)
* [Screenshots](#Screenshots)

<br>

## What are the key takeaways from the SVG Animation Study?

<dl>
<dd>

### Figma makes it super easy to create an SVG file.
-----
This study uses a text outline created in figma, but the process of creating the SVG file applies to pretty much any text or image. For figma, all
you need to do to create a SVG file is: right click on the image, copy/paste, then save as an SVG file. Then you can paste the SVG file in your HTML
file.


### Create a length utility to get the exact length of the path. 
-----
To accomplish this, create a simple utility that finds the EXACT length of the path you want to animate.
```JavaScript
  function findLength() {
    const words = document.querySelectorAll('#words path')                // select the words path
                                                                
    for (let i=0; i < words.length; i++) {                                // loop through the words paths...
      console.log(`Letter ${i} is ${words[i].getTotalLength()}`);         // "Letter 0 is 493.9128723144531"
    }
  }
```

### Translate the results of the length utility to CSS.
-----
With the results of the utility, you can transfer the values to  the words path.
```CSS
  #words path:nth-child(2) {                   /*   S  */
    stroke-dasharray: 493.9128723144531px;
    stroke-dashoffset: 493.9128723144531px;
    animation: line-anim 2s ease forwards;
  }
```


</dd>
</dl>

<br>

## Does the SVG Animation Study feature commentary?
Yes! I use extensive Commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code.  In addition to my line-by-line commantary, I also provide a Process text file that gives a good outline of my design and implementation process. 

<br>

## Screenshots
![svg](https://user-images.githubusercontent.com/37447586/74305868-dd428e80-4d15-11ea-89f4-2c8530907d28.png)
