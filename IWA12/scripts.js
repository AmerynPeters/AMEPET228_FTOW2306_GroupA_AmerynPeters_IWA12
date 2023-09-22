const STATUS_MAP = {
    shelf: {
        color: "green",
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: "blue",
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: "red",
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: "orange",
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
};

// Edit below line

//making so that the buttons have no color

/* get the button elements */
const allButtons = document.getElementsByTagName("button");
/* pull style id from html to change text colour*/
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.color = "";
}

//change status to corresp to correct obj.

/* fetch element to be changed*/
const fetchStatus = document.getElementsByClassName("status");

const books = document.getElementsByTagName("div");

/* use indexes to change the text colors using the style object 
(have to use set.attribute method instead of style object
because style needs to be REPLACED, not changed or updated.

use for loop to loop through all the book divs in html, 
check status of the spans and change buttons accordingly
 */

for (let i = 0; i < books.length; i++) {
    const reserveBtn = books[i].getElementsByClassName("reserve")[0];
    const checkoutBtn = books[i].getElementsByClassName("checkout")[0];
    const checkinBtn = books[i].getElementsByClassName("checkin")[0];

    if (fetchStatus[i].innerHTML === "shelf") {
        fetchStatus[i].setAttribute("style", "color: green");
        checkinBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === "reserved") {
        fetchStatus[i].setAttribute("style", "color: blue");
        reserveBtn.disabled = true;
        checkinBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === "overdue") {
        fetchStatus[i].setAttribute("style", "color: red");
        reserveBtn.disabled = true;
        checkoutBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === "checkedOut") {
        fetchStatus[i].setAttribute("style", "color: orange");
        reserveBtn.disabled = true;
        checkoutBtn.disabled = true;
    }
}
