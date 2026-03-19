import { Customer } from "./Customer";
import { Address } from "./Address";
import { Phone } from "./Phone";
import { Product } from "./Product";
import { Sale } from "./Sale";

const address = new Address("Rua Alberto Martini", 638, "PR", "PR");
const phone = new Phone("42", 999207773, "celular");

const customer = new Customer(
  "Eric",
  "09818619978",
  "02/07/2005",
  "M",
  address,
  [phone]
);

const p1 = new Product(1, "Notebook", 5300);
const p2 = new Product(2, "Mouse", 450);

const sale = new Sale(1, "19/03/2026", customer, [p1, p2]);

console.log("Total:", sale.calculateTotal());