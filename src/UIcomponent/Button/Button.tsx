import './index.less';
import LightFlowButton from './LightFlowBtn';
import DazzleButton from './DazzleButton';

interface BtnProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'minimum' | 'small' | 'default' | 'large';
  style?: React.CSSProperties;
}
interface primaryProps {
  ghost?: boolean;
  shape?: 'default' | 'fillet';
  type?: 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'link';
}

const Button: React.FC<BtnProps & primaryProps> = (
  props: BtnProps & primaryProps
) => {
  const {text, className, type, disabled, ghost, size, onClick, shape, style} =
    props;
  return (
    <button
      className={className}
      data-size={size || 'default'}
      data-type={!disabled && (type || 'primary')}
      data-ghost={!disabled && ghost}
      data-shape={shape || 'default'}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text || 'button'}
    </button>
  );
};

export {LightFlowButton};
export {DazzleButton};
export default Button;
