const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const unOrderedList = document.querySelector('.un-ordered-list');
menuIcon.addEventListener('click',()=>{
    unOrderedList.classList.add('active-menu');
    closeIcon.classList.add('close-icon-active');
})

closeIcon.addEventListener('click',()=>{
   unOrderedList.classList.remove('active-menu');
   closeIcon.classList.remove('close-icon-active')
})





const addButton = document.querySelectorAll('.add');
const minusButton = document.querySelectorAll('.minus');
const value=document.querySelectorAll('.value');
const priceValue=document.querySelectorAll('.price-value');
const totalPrice = document.querySelector('.total-price')

totalPrice.textContent = Number(0);

for (let i=0;i<addButton.length;i++){
    addButton[i].addEventListener('click',()=>{
        addValue=Number(value[i].textContent)
        value[i].textContent=(addValue+1)

        const priceValueNumber = Number(priceValue[i].textContent);
        totalPrice.textContent = Number(totalPrice.textContent) + Number(priceValueNumber);

    })
}

for (let i=0;i<minusButton.length;i++){
    minusButton[i].addEventListener('click',()=>{
        minusValue=Number(value[i].textContent);
        value[i].textContent= (minusValue > 0  ?  minusValue-1 : 0);

        if (minusValue > 0){
            const priceValueNumber = Number (priceValue[i].textContent);
        totalPrice.textContent = Number(totalPrice.textContent) - Number(priceValueNumber);
        }
        
    })
}






function submitForm() {
    var name = encodeURIComponent(document.getElementsByName("Name")[0].value);
    var mobileNumber = encodeURIComponent(document.getElementsByName("MobileNumber")[0].value);
    var email = encodeURIComponent(document.getElementsByName("Email")[0].value);


    if (name === "" || mobileNumber === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    var mailtoLink = "mailto:skinterior0303@gmail.com?subject=Contact%20details&body=";
    mailtoLink += "Name: " + name + "%0A" + "Mobile Number: " + mobileNumber + "%0A" + "Email: " + email;

    window.open(mailtoLink, "_blank");
}