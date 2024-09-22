// blog button direct location index.html to blog.html event
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = "blog.html";
})

// donation and history functionality
let donationActive = true;
function changeDonationHistoryStyle(num) {
    if (num === 1) { // when donation button is clicked
        // currently donation is clicked
        document.getElementById("donation").classList.remove("bg-white");
        document.getElementById("donation").classList.add("bg-btn-color");
        // currently de-active button style
        document.getElementById("history").classList.remove("bg-btn-color");
        document.getElementById("history").classList.add("bg-white");
        donationActive = true;
    }
    else {
             // currently history is clicked
             document.getElementById("history").classList.remove("bg-white");
             document.getElementById("history").classList.add("bg-btn-color");
             // currently de-active button style
             document.getElementById("donation").classList.remove("bg-btn-color");
             document.getElementById("donation").classList.add("bg-white");
             donationActive = false;
    }
}
function donationHistoryToggle(e) {

    if (e.target === document.getElementById("donation")) { // when donation button clicked
        console.log('donation');
        if (!donationActive) { // history button is the last active button
            changeDonationHistoryStyle(1);
        }
    }
    else
    {
        console.log('history');
        if(donationActive)
        {
            changeDonationHistoryStyle(2);
        }
    } 
}
document.getElementById("donation").addEventListener('click', function (e) {
    donationHistoryToggle(e);
});
document.getElementById("history").addEventListener('click', function (e) {
    donationHistoryToggle(e);
});