export default function Cart() {
  let counter = 0;

  const handleAddToCart = () => {
    counter = counter + 1;
    console.log(`Added item to cart. Total items: ${counter}`);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <p>Items in the cart: {counter}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}
