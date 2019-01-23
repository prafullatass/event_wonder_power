/*
The learning objective of this challenge to write a function handler to be 
used for multiple events, and uses information in the event argument to perform common logic. */

const addRemoveClass = (el) => {
    el.classList.add("enabled")
    el.classList.remove("disabled")
}

//only to deactivate all
const deactivate = (el) => {
    el.classList.add("disabled")
    el.classList.remove("enabled")

}

const buttons = document.querySelectorAll("button")

console.log(buttons)
buttons.forEach(btn => {
    btn.addEventListener("click", function (evt) {
        //console.log(evt.target)
        const split_btn = btn.id.split("-")
        //for active all sections
        if (split_btn[1] === 'all') {
            if(split_btn[0] === "activate"){
                const allSections = document.querySelectorAll("section")
                allSections.forEach(element => {
                    addRemoveClass(element)
                });
            }
            // deactivate
            else {
                const allSections = document.querySelectorAll("section")
                allSections.forEach(element => {
                    deactivate(element)
                });
            }
        // target single section
        } else {
            buttonId = split_btn[1]
            const selectedButton = document.querySelector(`#${buttonId}`)
            addRemoveClass(selectedButton)
           
        }
    })
});


