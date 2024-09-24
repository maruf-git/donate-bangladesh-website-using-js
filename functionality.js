// blog button direct location index.html to blog.html event
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "blog.html";
})
function getBalanceByElement(element) {
    return Number(element.innerText);
}

// global variables
let totalBalance = Number(document.getElementById("balance").innerText);
// nodeLists
let allEachBalance = document.querySelectorAll(".each-balance");
let donationCards = document.querySelectorAll(".donation-card");
let donationInputs = document.querySelectorAll(".donate-input");
let donationBtns = document.querySelectorAll(".donate-btn");

// Check Donation Status

function isDonationSuccessful(inputBalance) {
    if (inputBalance <= 0 || inputBalance > totalBalance) {
        return false;
    }
    else return true;
}

// set history
function setHistory(donatedAmount, donatedTo, time) {
    document.getElementById("no-history").classList.add("hidden");
    let html = `
    <div class="border rounded-xl mb-6 p-6">
                <h1 class="font-semibold text-xl mb-3 text-donate-primary lg:text-start">${donatedAmount} Taka is Donated ${donatedTo}</h1>
                <p class="font-light text-base mb-6 text-donate-secondary">
                Date : ${time}
                </p>
            </div>
    `
    document.getElementById("history-section").innerHTML += html;
}

// donation functionality
function donate(evt, idx) {
    console.log("event target: ", evt.target);
    console.log("donation btn: ", donationBtns[idx]);
    if (evt.target === donationBtns[idx]) {
        let inputBalance = Number(donationInputs[idx].value);
        if (!isNaN(inputBalance)) {
            if (isDonationSuccessful(inputBalance)) {
                let eachBalance = getBalanceByElement(allEachBalance[idx]);
                eachBalance += inputBalance;
                allEachBalance[idx].innerText = eachBalance;
                totalBalance -= inputBalance;
                document.getElementById("balance").innerText = totalBalance;
                let donatedTo = donationCards[idx].querySelector(".donated-to").innerText;
                let time = new Date();
                // console.log("time : ", time);
                setHistory(inputBalance, donatedTo, time);
                // console.log("Donation Successful");
                // calling modal from daisyUI
                my_modal_5.showModal();
            } else {
                alert("Donation is Failed 3");
            }

        }
        else {
            alert("Donation is Failed 2");
        }
        donationInputs[idx].value = "";
    }

}



for (let i = 0; i < donationCards.length; i++) {
    // console.log(i,donationCards[i]);
    donationCards[i].addEventListener('click', function (evt) {
        donate(evt, i);
    })
}



// donation and history toggle functionality
let donationActive = true; // true means donation is now active button, false means history in now active btn
function changeDonationHistoryStyle(str1, str2) {
    // // currently clicked button 
    document.getElementById(str1).classList.remove("bg-white");
    document.getElementById(str1).classList.add("bg-btn-color");
    document.getElementById(str1).classList.add("hover:bg-btn-color");
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