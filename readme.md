 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById-catch the exact tag element of the given id
getElementsByClassName-catch all tags of the given same classname. its an collection of element /array
queryselector-select first element written in queryselector.it might be class,it,tag
queryselectorall-select all element written in queryselectorall.it might be class,it,tag
2. How do you **create and insert a new element into the DOM**?
select the div/container then append child.in casee of building child node we can use add elements like p,div and so on.
3. What is **Event Bubbling** and how does it work?
if there are 3 divs like parent-child-last child .and all of them has event listener. if we click the parent then at first last child execute,then child atlast parent.
4. What is **Event Delegation** in JavaScript? Why is it useful?
use one event listener in parents so that it become activate in the inline childs of that parent.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault actually stop the default behaviour of any tag.
stoppropagation - not to propagate event from child to parents.