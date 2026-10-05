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

    output.innerHTML = `
        <h2>Booking Result</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Unit Price:</strong> ${unitPrice}</p>
        <p><strong>Member Status:</strong> ${memberStatus}</p>
        <p><strong>Delivery Type:</strong> ${deliveryType}</p>
    `;
});