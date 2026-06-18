let customerType = "premium";
let amount = 3000;


switch (customerType) {
    case "premium":
        console.log("Get 20% Discount:", amount - (amount * 0.2), "Final Amount :");
        break;

    case "regular":
        console.log("Get 10% Discount:", amount - (amount * 0.1), "Final Amount :");
        break;
    case "new":
        console.log("Get 5% Discount:", amount - (amount * 0.05), "Final Amount :");
        break;

    default:
        console.log("Invalid Customer Type");

}

