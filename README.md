# intern-summer-tasks
Clear Code recruitment tasks


Task 1 - navbar:

Navbar is created as the header in which there is unordered list with button for dropdown list showing next undorder list of options.
the contact button is added as the last element in nav outside first level unordered list. 
CSS styling is prepared based on flexbox to properly postion all elements. Dropdown menu has display property set to none as default. 
After hovering on button it shows and highliths when mouse is over the option. Whole dropdown menu is put in one element of unordered list 
so it can styled together.

Task 2 - Indiana Jones: 

RiddleSolver function takes one argument and that is the board which is checked if it meets requirement (number of rows, columns and 
integers as array items). If not it throws the error. 
If board meet requirements it is copied to prevent mutability and after that it is iterated to find: 
  1. common numbers (3 or more) in rows and change it to 0,
  2. common numbers (3 or more) in columns and change it to 0,
  3. to check if positive numbers have zeros underneath, and move it to the row below. 
After all above the array is checked to see if it has changed. If so it pushed through this 3 loops again and that procedure continues until 
the array won't change. When it happends it shows final result. Thanks to that we are certain that after moving elements down new common numbers
in rows and columns are changed to zero, and all the elements with zeros underneath are moved down. 
To deep copy array the map method and ternary operator is used. To check equality of array JSON.stringify method is used (useful when the array 
don't contain objects). 
