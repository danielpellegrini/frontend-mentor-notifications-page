"use strict";
const notifications = (() => {
    
    let counter = 0;
    const notificationsCounter = document.getElementById('notifications-counter');
    const rows = document.querySelectorAll('.row');
    const markAll = document.querySelector('#mark-all');
    const getNotif = document.querySelectorAll('#text-content');

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const getNotif = row.querySelector('#text-content');
        if(!row.classList.contains('to-read')) {
            getNotif.style.setProperty("--toggle-display", "none");
        } else {
            counter += 1;
        }
        const notificationRead = () => {
            if (row.classList.contains('to-read')) {
                console.log(getNotif)
                row.classList.remove('to-read');
                getNotif.style.setProperty("--toggle-display", "none");
                counter -= 1;
                notificationsCounter.innerText = counter;
            }
        }
        row.addEventListener("click", notificationRead);
        notificationsCounter.innerText = counter;
    };

    const markAllAsRead = () => {
        rows.forEach(el => {
            el.classList.remove('to-read');
        });
        getNotif.forEach(el => {
            el.style.setProperty("--toggle-display", "none");
        })
        counter = 0;
        notificationsCounter.innerText = counter;
    };
    
    markAll.addEventListener("click", markAllAsRead)
    


})();






