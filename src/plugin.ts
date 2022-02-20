import {Vue} from "vue-property-decorator";
import PortalVue from 'portal-vue'
export * from './components'
import * as services from './services'
export class TestComponent {
    public static install(vue: typeof Vue){
        Vue.use(PortalVue)

        services.registerComponents(vue)
        vue.config.productionTip = false;
    }
}