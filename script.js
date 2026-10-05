
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
    const status = document.getElementById("statusFilter").value;

    // Orders records
    const orders = [];

    const Order = {
        id : Number,
        customerName : Text,
        productName : Text,
        quantity : Number,
        unitPrice : Number,
        memberStatus : Text,
        deliveryType : Text,
        status : Text
    };

    //Assigning values to the object
    Order.id = orders.length;
    Order.customerName = customerName;
    Order.productName = productName;
    Order.quantity = quantity;
    Order.unitPrice = unitPrice;
    Order.memberStatus = memberStatus;
    Order.deliveryType = deliveryType;
    Order.status = "Pending";

    orders.push(Order)

    console.log(orders)


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

const orderList = document.getElementById("orderList");
const statusFilter = document.getElementById("statusFilter");

// Display orders
function displayOrders(orders) {
    orderList.innerHTML = "";

    if (orders.length === 0) {
        orderList.innerHTML = "<p>No orders found.</p>";
        return;
    }

    orders.forEach(function (Order) {
        const ordersItem = document.createElement("div");

        ordersItem.innerHTML = `
            <p>
                <strong>ID:</strong> ${Order.id}<br>
                <strong>Customer Name:</strong> ${Order.customerName}<br>
                <strong>Product Name:</strong> ${Order.productName}<br>
                <strong>Quantity:</strong> ${Order.quantity}<br>
                <strong>Unit Price:</strong> ${Order.unitPrice}<br>
                <strong>Member Status:</strong> ${Order.memberStatus}<br>
                <strong>Delivery Type:</strong> ${Order.deliveryType}<br>
                <strong>Order Status:</strong> ${Order.status}
                <button>Completed</button> ${"Completed"}
            </p>
            <hr>
        `;

        orderList.appendChild(ordersItem);
    });
}   

// Filter orders
function filterBookings() {
    const selectedStatus = status.value;

    const filteredOrders = orders.filter(function (orders) {
        const statusMatches =
            selectedStatus === "All" ||
            orders.status === selectedStatus;
        return statusMatches;
    });

    displayOrders(filteredOrders);
}

// Display all orders when the page loads
displayOrders(orders);
statusFilter.addEventListener("change", filterBookings);

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