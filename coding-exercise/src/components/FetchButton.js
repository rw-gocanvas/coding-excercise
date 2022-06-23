export const FetchButton = props => (
 <button type={props.type} onClick={props.onClick}>
   {(props.animalData && props.visible) ? 'Click here to learn about another animal!' : 'Click here to learn about an animal!' }
 </button>
);


