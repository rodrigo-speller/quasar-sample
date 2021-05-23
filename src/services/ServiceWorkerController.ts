import { Vue } from 'vue-property-decorator';

class ServiceWorkerController
{
    updated: boolean = false;
    offline: boolean = false;
}

export default Vue.observable(new ServiceWorkerController());