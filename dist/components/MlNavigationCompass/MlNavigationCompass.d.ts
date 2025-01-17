import PropTypes from "prop-types";

interface MlNavigationCompassProps {
    mapId?: string;
    insertBeforeLayer?: string;
    style?: object;
    backgroundStyle?: object;
    needleStyle?: object;
}
/**
 * Navigation component that displays a compass component which indicates the current oriantation of the map it is registered for and offers controls to turn the bearing 90° left/right or reset north to point up.
 *
 * All style props are applied using @mui/material/styled to allow more complex css selectors.
 *
 * @component
 */
declare const MlNavigationCompass: {
    (props: MlNavigationCompassProps): JSX.Element;
    propTypes: {
        /**
         * Component id prefix
         */
        idPrefix: PropTypes.Requireable<string>;
        /**
         * Style object to adjust css definitions of the component.
         */
        style: PropTypes.Requireable<object>;
        /**
         * Style object to adjust css definitions of the background.
         */
        backgroundStyle: PropTypes.Requireable<object>;
        /**
         * Style object to adjust css definitions of the compass needle.
         */
        needleStyle: PropTypes.Requireable<object>;
    };
};
export default MlNavigationCompass;
