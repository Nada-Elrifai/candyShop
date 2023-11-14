// StaticController.js

const staticData = require('./staticData.json');

// Get all customers
export const getAllCustomers = (req, res) => {
  res.json(staticData.customer);
};

// Get a specific customer by ID
export const getCustomerById = (req, res) => {
  const customerId = parseInt(req.params.id);
  const customer = staticData.customer.find((c) => c.id === customerId);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};
export const CustomerController = {
  getCustomer: () => staticData.customer,
  updateAddresses: (newAddresses) => {
    staticData.customer.addresses = newAddresses;

  },
  updateName: (newName) => {
    staticData.customer.name = newName;

  },
  isLoggedIn: () => staticData.customer.isLoggedIn || false, 
};

export const ShopController = {
  getShop: () => staticData.shops,
  isShopOpen: () => {
    // Add logic to determine if the shop is open or closed
    return staticData.shop.open;
  },
};

export const ProductController = {
  getProducts: () => staticData.products,
  isProductAvailable: (productId) => {
    // Add logic to determine if the product is available
    const product = staticData.products.find((p) => p.id === productId);
    return product && product.available;
  },
};
