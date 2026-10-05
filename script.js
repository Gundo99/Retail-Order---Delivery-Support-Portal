
const bookingForm = document.getElementById("bookingForm");
const output = document.getElementById("output");

// Calculate base price
function calculateBaseCost(quantity, unitPrice) {
    return quantity * unitPrice;
}

// Applies the 10% discount
function calculateFinalCost(subTotal,discountAmount, memberStatus) {
     if (memberStatus === 'Employee'){
        return subTotal - discountAmount;
     }

     return subTotal; 
}

// Calculate discountAmount
function calculateDiscountAmount(subTotal, memberStatus){
         if (memberStatus === 'Employee'){
        return subTotal * 0.10;
     }

     return 0;
}

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const memberStatus = document.getElementById("memberStatus").value;
    const deliveryType = document.getElementById("deliveryType").value;

    // Name validation
    const namePattern = /^[A-Za-z\s]+$/;

    if (customerName === "" || productName === "") {
        output.innerHTML = `
            <p class="error">Please enter the correct name.</p>
        `;
        return;
    }

    if (!namePattern.test(customerName) || !namePattern.test(productName)) {
        output.innerHTML = `
            <p class="error">Name must contain letters only.</p>
        `;
        return;
    }

    // Drop down validation
    if (memberStatus === "" || deliveryType === "") {
        output.innerHTML = `
            <p class="error">Please select a service type.</p>
        `;
        return;
    }

    // Numbers validation
    if ( quantity <= 0  || unitPrice <= 0) {
        output.innerHTML = `
            <p class="error">Please enter a valid number, greater than 0.</p>
        `;
        return;
    }

    const subTotal = calculateBaseCost(quantity, unitPrice);
    const discountAmount = calculateDiscountAmount(subTotal, memberStatus);
    const finalAmount  = calculateFinalCost(subTotal,discountAmount, memberStatus);

    output.innerHTML = `
        <h2>Booking Result</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Sub Total:</strong> ${subTotal}</p>
        <p><strong>Discount Amount:</strong> ${discountAmount}</p>
        <p><strong>Final Total:</strong> ${finalAmount}</p>
    `;
});