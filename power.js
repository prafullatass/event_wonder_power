/*Add the correct string as the first argument to addEventListener()
Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
Have your developer tools open. When you click the button, the following element... */
const addRemoveClass = (el) => {
    el.classList.add("enabled")
    el.classList.remove("disabled")
}

const flightAddRemoveClass = () => {
    const flightSectionEl = document.querySelector("#flight")
    addRemoveClass(flightSectionEl)
}

const mindreadingAddRemoveClass = () => {
    const mindreadingSectionEl = document.querySelector("#mindreading")
    addRemoveClass(mindreadingSectionEl)
}

const xrayAddRemoveClass = () => {
    const xraySectionEl = document.querySelector("#xray")
    addRemoveClass(xraySectionEl)
}

const deactivate = (el) => {
    el.classList.add("disabled")
    el.classList.remove("enabled")

}

document.querySelector("#activate-flight").addEventListener("click", flightAddRemoveClass)

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingAddRemoveClass)
document.querySelector("#activate-xray").addEventListener("click", xrayAddRemoveClass)


//for all sections
document.querySelector("#activate-all").addEventListener("click", function () {
    const allSections = document.querySelectorAll("section")
    allSections.forEach(element => {
        addRemoveClass(element)
        // console.log(element)
    });
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    const allSections = document.querySelectorAll("section")
    allSections.forEach(element => {
        deactivate(element)
    });
})




