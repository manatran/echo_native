import { TOGGLE_NAV, CLOSE_NAV, OPEN_NAV } from '../constants';

// Toggle navigation
export function closeNavigation() {
  return { type: CLOSE_NAV };
}

export function openNavigation() {
  return { type: OPEN_NAV };
}

export function toggleNavigation() {
  return { type: TOGGLE_NAV };
}