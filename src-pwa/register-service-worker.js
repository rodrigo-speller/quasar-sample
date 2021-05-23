import ConnectionObserver from 'src/services/ConnectionObserver'
import ServiceWorker from 'src/services/ServiceWorkerController'

// ConnectionObserver

ConnectionObserver.onOffline = () => {
  ServiceWorker.offile = true;
  console.log('No internet connection found. App is running in offline mode.')
};

ConnectionObserver.onError = (err) => {
  console.error('Error while observing the connection:', err)
};

// ServiceWorker

ServiceWorker.onReady = (/* registration */) => {
  console.log('Service worker is active.')
}

ServiceWorker.onRegistered = (/* registration */) => {
  console.log('Service worker has been registered.')
}

ServiceWorker.onCached = (/* registration */) => {
  console.log('Content has been cached for offline use.')
};

ServiceWorker.onUpdateFound = (/* registration */) => {
  console.log('New content is downloading.')
};

ServiceWorker.onUpdated = (/* registration */) => {
  ServiceWorker.updated = true;
  console.log('New content is available; please refresh.')
};

ServiceWorker.onError = (err) => {
  console.error('Error during service worker registration:', err)
};

// Service worker registrantion

ServiceWorker.register(process.env.SERVICE_WORKER_FILE);
