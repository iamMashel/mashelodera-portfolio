// Tiny toast bus. No context/provider needed: any client component imports
// `toast(...)` and the mounted <Toaster /> renders it. Counter-based ids keep
// it deterministic.
export type ToastItem = { id: number; message: string };
type Listener = (t: ToastItem) => void;

const listeners = new Set<Listener>();
let counter = 0;

export function toast(message: string) {
  counter += 1;
  const item: ToastItem = { id: counter, message };
  listeners.forEach((l) => l(item));
}

export function subscribeToast(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
