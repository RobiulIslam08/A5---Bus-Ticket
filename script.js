let seats = document.getElementsByClassName('seats');
let count = 0;
let leftSeat = 8;
let totalCost = 0;

// let seatCount = 0;
for (let seat of seats){
    seat.addEventListener('click', function(){
        // seat.classList.add('howkerlkdfds');
        console.log(seat)
        
        
        seat.style.backgroundColor = '#1DD100';
        // decrease seat number
        let totalSeatElement = document.getElementById('total-seat');
       
        

        // select sect number
        let selectSeatElement = document.getElementById('select-seat')
       
        
        
        if(count > 3){
            // seat.classList.add("pointer-events-none")
            
            // seat.classList.remove('seats')
            seat.style.backgroundColor = '';
            alert('apni 4tar beshi seat select korte parben nah')
            
            return;
            
        }
        leftSeat = leftSeat - 1;
        
        count = count  + 1
        selectSeatElement.innerText = count
        totalSeatElement.innerText = leftSeat
       
        // price 
        let totalAmount = document.getElementById('total-amount');
        let priceElement = document.getElementById('price');
        let priceElementText = priceElement.innerText;
        let price = parseInt(priceElementText);
        totalCost += price
        totalAmount.innerText = totalCost;

        //grand
       let grandTaka = document.getElementById('grand');
       grandTaka.innerText = totalCost
        

        // create div
       
        let innerP = document.getElementById('inner-p');
     
        let div = document.createElement('div');
        div.classList.add('flex');
        div.classList.add('justify-between');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        p.innerText = seat.innerText;
        p2.innerText = 'Economoy';
        p3.innerText = price;

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        innerP.appendChild(div);

    })
}

document.getElementById('apply-btn').addEventListener('click', function(){
    let label = document.getElementById('label');
    let grandTaka = document.getElementById('grand');
    let inputField = document.getElementById('input-field');
    let inputFieldValue = inputField.value;
    if(inputFieldValue == 'NEW15'){
       let discount = totalCost * 0.15;
       let finalPayTaka = totalCost - discount;
       grandTaka.innerText = finalPayTaka;
       label.classList.add('hidden')
       
       
    }
  
    else if( inputFieldValue == 'Couple 20'){
        let discount = totalCost * 0.20;
        let finalPayTaka = totalCost - discount;
        grandTaka.innerText = finalPayTaka;
        label.classList.add('hidden')
    }
    else{
        alert('please write a valid cupon')
    }

})