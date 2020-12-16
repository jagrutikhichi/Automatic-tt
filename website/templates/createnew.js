const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function openWin() {
    myWindow = window.open("file:///C:/Users/Karthik/Documents/FinalYearProject/HTML/index2.html")
}

function closeDiaglog() {
    document.getElementById('modal').style.display = 'none';
    overlay.style.display = 'none';

}

function openPage() {
    // window.close();
    myWindow = window.open("file:///C:/Users/Karthik/Documents/FinalYearProject/HTML/index3.html") // myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closePage() {
    // document.getElementById('html').style.display = "none";
    myWindow = window.open("file:///C:/Users/Karthik/Documents/FinalYearProject/HTML/index2.html") // myWindow.
}