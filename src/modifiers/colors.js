import PropTypes from 'prop-types';
import classnames from 'classnames';

export default {
  propTypes: {
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    colorVariant: PropTypes.oneOf(['light', 'dark']),
  },
  defaultProps: {
    textColor: undefined,
    backgroundColor: undefined,
    colorVariant: undefined,
  },
  classnames: props =>
    classnames({
      [`has-text-${props.textColor}`]: props.textColor,
      [`has-background-${props.backgroundColor}`]: props.backgroundColor,
      [`is-${props.colorVariant}`]: props.colorVariant,
    }),
  clean: ({ textColor, backgroundColor, colorVariant, ...props }) => props,
};
