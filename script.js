class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

class Store {
    constructor() {
        this.inventory = [];
    }

    getProductCount() {
        return this.inventory.length;
    }

    clearInventory() {
        this.inventory = [];
        console.log("Inventory has been cleared.");
    }

    removeProduct(name) {
        this.inventory = this.inventory.filter(p => p.name !== name);
        console.log(`Removed ${name} from inventory.`);
    }

   restockProduct(name, amount) {
        const product = this.findProductByName(name);
        if (product) {
            product.quantity += amount;
            console.log(`Restocked ${name}. New quantity: ${product.quantity}`);
        } else {
            console.log(`Restock failed: ${name} not found.`);
        }
    }
        }
    }getProductsUnderPrice(maxPrice) {
    return this.inventory.filter(p => p.price < maxPrice);
}

    listAllProducts() {
        console.log("--- Current Inventory ---");
        this.inventory.forEach(p => console.log(p.toString()));
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }
}

// --- TESTING SCRIPT ---
const myStore = new Store();

const prod1 = new Product("Apple", 1.00, 100);
const prod2 = new Product("Bread", 2.50, 20);
const prod3 = new Product("Cheese", 5.00, 15);
const prod4 = new PerishableProduct("Milk", 3.50, 10, "2026-04-01");
const prod5 = new PerishableProduct("Eggs", 4.00, 12, "2026-04-05");

myStore.addProduct(prod1);
myStore.addProduct(prod2);
myStore.addProduct(prod3);
myStore.addProduct(prod4);
myStore.addProduct(prod5);

console.log("Total Value Before Discount: $" + myStore.getInventoryValue().toFixed(2));
Product.applyDiscount(myStore.inventory, 0.15);
console.log("Total Value After 15% Discount: $" + myStore.getInventoryValue().toFixed(2));

const foundProduct = myStore.findProductByName("Milk");
console.log(foundProduct ? foundProduct.toString() : "Product not found");

myStore.removeProduct("Apple");
myStore.restockProduct("Milk", 5);
myStore.listAllProducts();
const cheapItems = myStore.getProductsUnderPrice(3.00);
console.log("Items under $3.00:", cheapItems.map(p => p.name).join(", "));
// update 12
