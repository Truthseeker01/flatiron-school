/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated March 13, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
// the target(what element the even will fire on), the event(the user action, "click"), the handler/listener(log)
document.getElementById("today").addEventListener("click", event => {
    console.log("Today was clicked")
});
// ~ the "submit" event
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    console.log("Submitted!");
    console.log(document.querySelector("form").date);
    const submittedDate = document.querySelector("form").date.value;
    console.log(submittedDate);
})
// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!
document.body.addEventListener("keydown", e => {
    console.log("Keydown was pressed")
});

// ~ the "submit" event

// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!
