// isLocalhost

export const isLocalhost = () => !!(
  window.location.hostname === 'localhost'
  || window.location.hostname === '[::1]'
  || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

// onReady

let waitHostLoad: PromiseLike<void>;
if (typeof window !== void 0) {
  waitHostLoad = new Promise(resolve => window.addEventListener('load', () => resolve()))
}
else {
  waitHostLoad = Promise.resolve();
}

export const ready = async () => {
  await waitHostLoad;
}
