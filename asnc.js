const processOrder = (customer) => {

    console.log("Processing Order From Customer 1");

    // Synchronous

    // var currentTime = new Date().getTime();
    // while(currentTime + 3000 >= new Date().getTime());

    // Asynchronous
    setTimeout(()=>{
        console.log("Cooking Complete");
    }, 3000);

    console.log("Order Process For Customer 1");
}
console.log("Take Order From Customer 1");
processOrder();
console.log("Complete Order From Customer 1")