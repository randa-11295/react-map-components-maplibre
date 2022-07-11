export default storyoptions;
export const ExampleConfig: any;
declare namespace storyoptions {
    export const title: string;
    export { MlGPXViewer as component };
    export namespace argTypes {
        namespace options {
            namespace control {
                const type: string;
            }
        }
    }
    export { mapContextDecorator as decorators };
}
import MlGPXViewer from "./MlGPXViewer";
import mapContextDecorator from "../../decorators/MapContextDecorator";
