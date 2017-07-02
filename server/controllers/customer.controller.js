import Customer from '../models/customer';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all customers
 * @param req
 * @param res
 * @returns void
 */
export function getCustomers(req, res) {
  Customer.find().sort('-dateAdded').exec((err, customers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customers });
  });
}

/**
 * Save a customer
 * @param req
 * @param res
 * @returns void
 */
export function addCustomer(req, res) {
  if (!req.body.customer.name || !req.body.customer.title || !req.body.customer.content) {
    res.status(403).end();
  }

  const newCustomer = new Customer(req.body.customer);

  // Let's sanitize inputs
  newCustomer.title = sanitizeHtml(newCustomer.title);
  newCustomer.name = sanitizeHtml(newCustomer.name);
  newCustomer.content = sanitizeHtml(newCustomer.content);

  newCustomer.slug = slug(newCustomer.title.toLowerCase(), { lowercase: true });
  newCustomer.cuid = cuid();
  newCustomer.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customer: saved });
  });
}

/**
 * Get a single customer
 * @param req
 * @param res
 * @returns void
 */
export function getCustomer(req, res) {
  Customer.findOne({ cuid: req.params.cuid }).exec((err, customer) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ customer });
  });
}

/**
 * Delete a customer
 * @param req
 * @param res
 * @returns void
 */
export function deleteCustomer(req, res) {
  Customer.findOne({ cuid: req.params.cuid }).exec((err, customer) => {
    if (err) {
      res.status(500).send(err);
    }

    customer.remove(() => {
      res.status(200).end();
    });
  });
}
