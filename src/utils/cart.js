// src/utils/cart.js
export const CART_KEY = "cart_simple_v1";

export function getCartLocal() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCartLocal(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {}
}

export function addToCartLocal(product, qty = 1) {
  const items = getCartLocal();
  const idx = items.findIndex((i) => String(i.id) === String(product.id));
  if (idx > -1) {
    items[idx].qty = (items[idx].qty || 1) + qty;
  } else {
    items.push({
      id: product.id,
      title: product.title,
      price: Number(product.price || 0),
      thumbnail:
        product.thumbnail || (product.images && product.images[0]) || null,
      sku: product.id,
      qty,
      brand: product.brand || "",
    });
  }
  saveCartLocal(items);
  return items;
}

export function removeFromCartLocal(id) {
  const items = getCartLocal().filter((i) => String(i.id) !== String(id));
  saveCartLocal(items);
  return items;
}

export function updateQtyLocal(id, qty) {
  const items = getCartLocal()
    .map((i) => (String(i.id) === String(id) ? { ...i, qty } : i))
    .filter((i) => i.qty > 0);
  saveCartLocal(items);
  return items;
}

export function clearCartLocal() {
  saveCartLocal([]);
  return [];
}
