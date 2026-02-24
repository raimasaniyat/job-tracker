1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
Ans:  getElementById calls ID only,
      getElementsByClassName calls classes,
      querySelector calls any element such as tag, class, id.
      querySelectorAll calls any element such as tag, class, id, element but it needs to be specific.  It calls first element only.
      

      
2. How do you create and insert a new element into the DOM?
   
ans:  At first we create a function inside that we take a variable in 'let' then call document and use the method createElement(''). Inside the bracet we mention what element we want to create.
      Then we use innerText or innerHTML(according to what is needed) to write the documentation. After these we call the function again
and mention appendChild() method. And it's done.



3. What is Event Bubbling? And how does it work?
   
ans:  Eent bubbling is a DOM mechanism, where if you click an element the parent element will be triggered. It means if a child element is clicked then the parent element will be triggered and clicked as well.



4. What is Event Delegation in JavaScript? Why is it useful?

ans:  It is used when we want to use the parent element to trigger the child element. for example, when we want to control a specific event but not with the usual button but with something else we use this technic to do that. We have done this in assignment-4 as well.



5. What is the difference between preventDefault() and stopPropagation() methods?

ans:  stopPropagation() is a method to stop or prevent event bubbling. And preventDefault(), helps to stop the default event from happening.

