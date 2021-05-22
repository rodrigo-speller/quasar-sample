import { Vue } from 'vue-property-decorator'

interface BeforeInstallPromptEvent extends Event
{
  prompt(): Promise<void>;
  userChoice: Promise<InstallPromptUserChoiceResult>;
}

interface InstallPromptUserChoiceResult {
  outcome: "accepted" | "dismissed",
  platform: ""
}

class InstallerController
{
    readonly isIOS: boolean;
    readonly isStandalone: boolean;
    
    private installPromptEvent: BeforeInstallPromptEvent | null = null;

    constructor()
    {
        const agent = window.navigator.userAgent.toLowerCase();

        // is iOS?

        this.isIOS = /\b(macintosh|ipad|iphone|ipod)\b/.test(agent);

        // is standalone?

        if (this.isIOS)
            this.isStandalone = ('standalone' in window.navigator) && ((window.navigator as SafariNavigator).standalone) || false;
        else
            this.isStandalone = (window.matchMedia('(display-mode: standalone)').matches);

        // intercepts install prompt

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();

            // Stash the event so it can be triggered later.
            this.installPromptEvent = e as BeforeInstallPromptEvent;
        });
    }

    get canInstall()
    {
      return !this.isStandalone && (this.installPromptEvent || this.isIOS)
    }

    async install()
    {
      if (this.isIOS)
      {
        alert('Tap "Share" > "Add to Home Screen" to install.')
        return;
      }
  
      let install = this.installPromptEvent!;
      this.installPromptEvent = null;
  
      // prompt
      install.prompt();
  
      // Wait for the user to respond to the prompt
      let choice = await install.userChoice;
  
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    }
}

export default Vue.observable(new InstallerController());