let bookings = [];

const addBookings = ()=>{    
    let booking = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    }
    
    let date = booking.date;
    let time = booking.time;
    

    if (checkDateTime(date, time)){
        bookings.push(booking);
        textContent = '\n' + JSON.stringify(bookings, '\t', 2);
        localStorage.setItem('ListOfBookings', JSON.stringify(bookings)); 
    }
    document.forms[0].reset();
}

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addBookings);
});

function checkDateTime(date, time) {
   
    for (let i = 1; i < bookings.length; i++) {
      if (bookings[i].date === date && bookings[i].time === time) {
          `${bookings.date} vs ${date}`;
          `${bookings.time} vs ${time}`;
           alert('Sorry!Date and time already booked by another person. Please book another date or time.');
           document.forms[0].reset();
           return false;
      }
      else{
            alert('booking added successfully!\nAn email will be sent to you for confirmation of booking.');
            return true;
      }
    }
    alert('booking added successfully!\nAn email will be sent to you for confirmation of booking.');
    return true;  
} 

