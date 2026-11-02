import { writable } from 'svelte/store';

// Define the shape of a cart item
export interface CartItem {
    id: number;
    productName: string;
    price: string;
    image: string;
    quantity: number;
}

class CartStore {
    // Use a Svelte writable store under the hood
    private store = writable<CartItem[]>([]);

    // Expose the subscribe method so Svelte components can use the $ prefix
    subscribe = this.store.subscribe;

    add(product: { id: number; productName: string; price: string; image: string }) {
        this.store.update(items => {
            const existing = items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
                return [...items];
            } else {
                return [...items, { ...product, quantity: 1 }];
            }
        });
    }

    remove(id: number) {
        this.store.update(items => items.filter(item => item.id !== id));
    }

    clear() {
        this.store.set([]);
    }
}

export const cart = new CartStore();