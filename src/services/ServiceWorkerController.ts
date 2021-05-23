import { ready } from './BrowserServices';
import ConnectionObserver from './ConnectionObserver';
import { Vue } from 'vue-property-decorator';

const container = navigator.serviceWorker;

class ServiceWorkerController
{
    private _updated: boolean = false;

    onRegistered: (registration: ServiceWorkerRegistration) => void = () => { };
    onReady: (registration: ServiceWorkerRegistration) => void = () => { };

    /**
     * At this point, the old content will have been purged and the fresh
     * content will have been added to the cache. It's the perfect time to
     * display a "New content is available; please refresh." message in your web
     * app.
     */
    onUpdated: (registration: ServiceWorkerRegistration) => void = () => { };
    onUpdateFound: (registration: ServiceWorkerRegistration) => void = () => { };

    /**
     * At this point, everything has been precached. It's the perfect time to
     * display a "Content is cached for offline use." message.
     */
    onCached: (registration: ServiceWorkerRegistration) => void = () => { };

    onError: (error: any) => void = () => { };

    get isUpdated() {
        return this._updated;
    }

    async register(scriptURL: string, options?: RegistrationOptions)
    {
        await ready();

        await this.registerServiceWorker(scriptURL, options);

        let registration = await container.ready

        this.safeEmit(this.onReady, registration);
    }

    private async registerServiceWorker(scriptURL: string, options?: RegistrationOptions)
    {
      const registration = await container.register(scriptURL, options);

      this.safeEmit(this.onRegistered, registration)

      if (registration.waiting)
      {
          this._updated = true;
          this.safeEmit(this.onUpdated, registration)
          return
      }

      registration.addEventListener('updatefound', () => {
          this.safeEmit(this.onUpdateFound, registration)

          const installingWorker = registration.installing!

          installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed') {
                  if (container.controller) {
                      this._updated = true;
                      this.safeEmit(this.onUpdated, registration);
                  } else {
                      this.safeEmit(this.onCached, registration);
                  }
              }
          })
      });
    }

    private handleError(error: any)
    {
        this.onError(error);

        if (!navigator.onLine)
            ConnectionObserver.checkConnection();
    }

    private safeEmit<T extends (...args: any) => any = () => void>(callback: T, ...args: Parameters<T>) : void
    {
        try
        {
            callback.apply(args);
        }
        catch (error)
        {
            this.handleError(error);
        }
    }
}

export default Vue.observable(new ServiceWorkerController());
