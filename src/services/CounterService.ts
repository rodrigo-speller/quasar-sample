import { Vue } from 'vue-property-decorator'

class CounterController
{
    count = 0;
    
    increment() {
        this.count++;
    }
}

export default Vue.observable(new CounterController());