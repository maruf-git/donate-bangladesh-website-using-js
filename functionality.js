// blog button direct location index.html to blog.html event
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "blog.html";
})
function getBalanceById(id) {
    return Number(document.getElementById(id).innerText);
}
function getValueByInputElement(element) {
    return element.value;
}
// global variables
let totalBalance = getBalanceById("balance");
let noakhaliBalancec = getBalanceById("noakhali-balance");
let feniBalancec = getBalanceById("feni-balance");
let quotaBalancec = getBalanceById("quota-balance");


let donationCards = document.querySelectorAll(".donation-card");
let donationInputs = document.querySelectorAll(".donate-input");
let donationBtns = document.querySelectorAll(".donate-btn");

// donation functionality
function donate(evt, idx) {
    
    // const donateBtn = document.querySelector()
    if (evt.target === donationBtns[idx]) {
        let inputBalance = Number(donationInputs[idx].value);
        console.log(inputBalance);
        if(!isNaN(inputBalance))
        {
            console.log("Donation Successful");
        }
        else{
            alert("Donation is Failed");
        }
    }

}

for (let i = 0; i < donationCards.length; i++) {
    donationCards[i].addEventListener('click', function (evt) {
        donate(evt, i);
    })
}



// donation and history toggle functionality
let donationActive = true; // true means donation is now active button, false means history in now active btn
function changeDonationHistoryStyle(str1, str2) {
    // currently clicked button 
    document.getElementById(str1).classList.remove("bg-white");
    document.getElementById(str1).classList.add("bg-btn-color");
    // currently non-clicked button 
    document.getElementById(str2).classList.remove("bg-btn-color");
    document.getElementById(str2).classList.add("bg-white");

    let donationSection = document.getElementById("donation-section");
    let historySection = document.getElementById("history-section");
    // now active btn
    console.log('hi');
    if (str1 === "donation") {
        console.log('see donation');
        donationActive = true;
        donationSection.classList.remove("hidden");
        donationSection.classList.add("flex");
        historySection.classList.remove('grid'); //flex
        historySection.classList.add('hidden');
        // donationSection.classList.add("hidden bg-green-400");
        // donationSection.classList.remove("flex");
    }
    else {
        console.log('see history');
        donationActive = false;
        historySection.classList.remove("hidden");
        historySection.classList.add("grid"); // flex
        donationSection.classList.remove('flex');
        donationSection.classList.add('hidden');
        // historySection.classList.add("hidden bg-green-400");
        // historySection.classList.remove("flex");
    }
}
function donationHistoryToggle(e) {
    if (e.target === document.getElementById("donation")) { // when donation button clicked
        console.log('donation');
        if (!donationActive) { // history button is the last active button
            changeDonationHistoryStyle("donation", "history"); // clicked,non-click id
        }
    }
    else {
        console.log('history');
        if (donationActive) {
            changeDonationHistoryStyle("history", "donation");
        }
    }
}
document.getElementById("donation").addEventListener('click', function (e) {
    donationHistoryToggle(e);
});
document.getElementById("history").addEventListener('click', function (e) {
    donationHistoryToggle(e);
});