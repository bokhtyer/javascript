const processOrder = (customer) => {
    console.log("Processing Order From Customer 1");
    var currentTime = new Date().getTime();
    while(currentTime + 3000 >= new Date().getTime());
    console.log("Order Process For Customer 1");
}
console.log("Take Order From Customer 1");
processOrder();
console.log("Complete Order From Customer 1")