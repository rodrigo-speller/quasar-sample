import { Vue } from 'vue-property-decorator';

class ConnectionObserver {
  private _online: boolean = false;

  constructor() {
    addEventListener('online', () => this.checkConnection());
    addEventListener('offline', () => this.checkConnection());

    this.checkConnection();
  }

  onError: (error: any) => void = () => { };

  onOnline: () => void = () => { };
  onOffline: () => void = () => { };

  get isOnline() {
    return this._online;
  }

  get isOffline() {
    return !this._online;
  }

  checkConnection() {
    if (this._online !== navigator.onLine) {
      if (this._online) {
        this._online = false;
        this.safeEmit(this.onOffline);
      }
      else {
        this._online = true;
        this.safeEmit(this.onOnline);
      }
    }

    return this._online;
  }

  private handleError(error: any) {
    this.onError(error);

    if (!navigator.onLine)
      this.checkConnection();
  }

  private safeEmit<T extends (...args: any) => any = () => void>(callback: T, ...args: Parameters<T>): void {
    try {
      callback.apply(args);
    }
    catch (error) {
      this.handleError(error);
    }
  }
}

export default Vue.observable(new ConnectionObserver());
