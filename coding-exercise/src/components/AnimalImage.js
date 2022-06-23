export const AnimalImage = props => (
    <div className="animal-image">
        {props.image ? <img src={props.image} alt={props.name} /> : <p>Loading..</p>}
        
    </div>
)