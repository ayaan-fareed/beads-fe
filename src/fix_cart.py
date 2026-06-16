import re

# Read the current App.jsx file
with open('App.jsx', 'r') as f:
    content = f.read()

# Define the new addToCart function
new_add_to_cart = '''  const addToCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        // Update quantity of existing item
        return prev.map((item) => 
          item.id === productId 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prev, { ...product, quantity: 1, uid: `${Date.now()}-${Math.random()}` }];
      }
    });
    setCartOpen(true);
    
    const existingItem = cart.find((item) => item.id === productId);
    const message = existingItem 
      ? `${product.icon} "${product.name}" quantity updated`
      : `${product.icon} "${product.name}" added to cart`;
    showToast(message);
  };'''

# Replace the addToCart function
pattern = r'  const addToCart = \(productId\) => \{[^}]*\};'
content = re.sub(pattern, new_add_to_cart, content, flags=re.DOTALL)

# Add updateQuantity function after removeFromCart
update_func = '''  const updateQuantity = (uid, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(uid);
      return;
    }
    setCart((prev) => 
      prev.map((item) => 
        item.uid === uid 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };'''

# Insert updateQuantity function
content = content.replace(
    '  const removeFromCart = (uid) => {\n    setCart((prev) => prev.filter((item) => item.uid !== uid));\n  };',
    '  const removeFromCart = (uid) => {\n    setCart((prev) => prev.filter((item) => item.uid !== uid));\n  };\n\n' + update_func
)

# Write the updated content back
with open('App.jsx', 'w') as f:
    f.write(content)

print("App.jsx has been updated successfully!")
