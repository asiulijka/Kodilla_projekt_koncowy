export const calculateSubtotal = cart => {
  let subtotal = 0;
  for (const product of cart) {
    subtotal += product.price * product.qty;
  }
  return subtotal;
};

export const calculateGst = cart => calculateSubtotal(cart) * 0.1;

export const calculateTotal = cart =>  cart.length == 0 ? 0 : calculateSubtotal(cart) + calculateDelivery(cart) + calculateGst(cart);

export const calculateDelivery = cart => cart.length == 0 ? 0 : 20.00;