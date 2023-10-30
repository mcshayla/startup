1. Link element established relationship between current document and external resources like a style sheet. <link rel="stylesheet" href="main.css" />. Relationship and URL

2. <div></div>. A block division of content
3. In CSS, #title is for a unique ID id = “test” while .grid is a class selector. Classes can be applied to multiple elements. Ex: <div class="grid">This is a grid item</div>
.grid { display: grid; //this displays element's children in a grid orientation.
}
4. Padding is the space between the content of an element. Margin is the space outside an element, between the elements border and adjacent elements. 
5. Flex: "display" - all childrent of element will be in flex flow. "flex-direction" - used to arrange elements column or row. equal distribution. uses a flexible orientation. 
    '.flex-container {
        display: flex;
        flex-direction: row;
    }
    <div class="flex-container">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
    </div>' in this example, images will appear next to each other side by side. you can also use things like justifiy-content: center, or justify-content: space-between. to control the spacing between things.
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
} - the 0 means that it will not grow, and 80px means it has a starting base of 80 pixels.
flex 1 would mean it would get one fractional unit of growth or one unit of space. if there is only one child with a non zero, it's going to take up the rest of the space. If one child had 1 and another had 3, the one with 3 would take up 75%. 
6. (px = number of pixels) (em = based on the font size of root element) (percentage % = percentage of width or heigh of parent element) ex: padding: 10%. 
header {
  background-color: #444;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
}
padding: 1em; sets the padding for the header element. em = a multiplier of the width of the letter m in the parent's font. It provides spacing inside the header element, pushing the content away from the edges of the element. In this case, the padding creates space around the content inside the header. The padding is uniform on all four sides of the header. padding: 1em 2em; first would correspond with top and bottom. second would correspond with left and right.
7. Arrow Functions!
    'const a = [1, 2, 3, 4];

    // standard function syntax
    a.sort(function (v1, v2) {
    return v1 - v2;
    });

    // arrow function syntax
    a.sort((v1, v2) => v1 - v2);

- these are the same. the arrow replaces the function key word after parameter delcaration.
arrow returns: 
    () => 3;
    // RETURNS: 3

    () => {
    3;
    };
    // RETURNS: undefined

    () => {
    return 3;
    };
    // RETURNS: 3
