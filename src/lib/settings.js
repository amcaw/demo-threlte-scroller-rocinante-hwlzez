import { writable } from 'svelte/store';

export const fractionalUpdates = writable(true);
export const float = writable(false);
export const globalShipPosition = writable([0, 0, 0]);
export const globalShipRotation = writable([0, 0, 0]);
