<script>
        var products = [
        { id: 1, name: "Vans SK8-Low Skate Shoes", price: 2470.00 },
        { id: 2, name: "Vans ComfyCush Checkerboard Slip", price: 2660.00 },
        { id: 3, name: "Vans X Stranger", price: 3405.00 },
        { id: 4, name: "Vans Aloha Old Skool Sneakers", price: 3395.00 },
        { id: 5, name: "Vans SK8-Hi Skate Shoes", price: 3420.00 },
        { id: 6, name: "Vans SK8-Hi Wide High Tops", price: 3040.00 },
        { id: 7, name: "Vans Half Cab Skate", price: 2850.00 },
        { id: 8, name: "Vans Daz Skate Half Cab Skate", price: 3040.00 },
        { id: 9, name: "Vans Suede Skate Shoes", price: 3395.00 }
    ];
    
    
    var qtyInputs = document.querySelectorAll('[id^="qty"]');
    var carts = document.getElementById("carts");
    var totalInput = document.getElementById("total");
    var cashInput = document.getElementById("cash");
    var changeInput = document.getElementById("change");
    
    
    qtyInputs.forEach(function(qtyInput) {
        qtyInput.addEventListener("input", addOrder);
    });
    
    cashInput.addEventListener("input", calculateChange);
    
    
    function addOrder() {
        carts.textContent = ""; // Clear previous cart content
    
        var total = 0;
    
        qtyInputs.forEach(function(qtyInput, index) {
            var qty = parseFloat(qtyInput.value);
            if (qty > 0) {
                var product = products[index];
                var order = qty + " pcs x " + product.name + " - Php " + (qty * product.price).toFixed(2) + "\n";
                carts.textContent += order;
                total += qty * product.price;
            }
        });
    
        totalInput.value = total.toFixed(2); // Update total
        calculateChange(); // Recalculate change
    }
    
    
    function calculateChange() {
        var total = parseFloat(totalInput.value);
        var cash = parseFloat(cashInput.value);
    
        if (!isNaN(total) && !isNaN(cash)) {
            var change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = "";
        }
    }
    </script>
