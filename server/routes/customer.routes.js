import { Router } from 'express';
import * as CustomerController from '../controllers/customer.controller';
const router = new Router();

// Get all Customers
router.route('/customers').get(CustomerController.getCustomers);

// Get one customer by cuid
router.route('/customers/:cuid').get(CustomerController.getCustomer);

// Add a new Customer
router.route('/customers').post(CustomerController.addCustomer);

// Delete a customer by cuid
router.route('/customers/:cuid').delete(CustomerController.deleteCustomer);

export default router;
