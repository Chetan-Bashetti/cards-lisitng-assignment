import styled from 'styled-components';
import { LIT_GRAY } from 'theme';

const StyledIcon = styled.span`
	color: ${(props) => (props.color ? props.color : LIT_GRAY)};
	cursor: pointer;
	position: ${(props) => (props.position ? props.position : 'LIT_GRAY')};
	right: ${(props) => (props.right ? props.right : 'LIT_GRAY')};
	font-size: ${(props) => (props.size ? props.size : 'LIT_GRAY')};
	margin: ${(props) => (props?.margin ? props?.margin : '')};
`;

const Icon = ({ icon, color, onClick, position, right, size, margin }) => {
	return (
		<StyledIcon
			className='material-symbols-outlined'
			color={color}
			onClick={onClick}
			position={position}
			right={right}
			size={size}
			margin={margin}
		>
			{icon}
		</StyledIcon>
	);
};

export default Icon;
