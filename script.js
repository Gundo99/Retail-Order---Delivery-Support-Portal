const bookingForm = document.getElementById("bookingForm");
const output = document.getElementById("output");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const memberStatus = document.getElementById("memberStatus").value;
    const deliveryType = document.getElementById("deliveryType").value;

    const subTotal = quantity * unitPrice;

    let finalAmount = subTotal;
    let discount = 0;

    console.log("This is the total amount : ", finalAmount)
    console.log("This is the discount : ", discount)

    if (memberStatus === 'Employee') {
        discount = subTotal * 0.10;
        finalAmount = subTotal - discount;
        
        console.log("This is the total amount : ", finalAmount)
        console.log("This is the discount : ", discount)
    }

    output.innerHTML = `
        <h2>Booking Result</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Sub Total:</strong> ${subTotal}</p>
        <p><strong>Discount Amount:</strong> ${discount}</p>
        <p><strong>Final Total:</strong> ${finalAmount}</p>
    `;
});