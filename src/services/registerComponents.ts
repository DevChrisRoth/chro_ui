import { Vue } from 'vue-property-decorator'
import * as components from '../components'
const componentName = 'odav-';
export const registerComponents = (vue: typeof Vue) => {
    vue.component(`${componentName}button`, components.Button);
    vue.component(`${componentName}alert`, components.Alert);
    vue.component(`${componentName}input`, components.InputField);
    vue.component(`${componentName}loader`, components.Loader);
    vue.component(`${componentName}skeleton`, components.Skeleton);
    vue.component(`${componentName}table`, components.Table);
    vue.component(`${componentName}notification`, components.NotificationCard);
    vue.component(`${componentName}divider`, components.Divider);
    vue.component(`${componentName}radiobutton`, components.Radiobutton);
    vue.component(`${componentName}switch`, components.Switch);
    vue.component(`${componentName}dropdown`, components.Dropdown);
}