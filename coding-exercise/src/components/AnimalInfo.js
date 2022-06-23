export const AnimalInfo = props => (
    <div className="animal-info">
        <p>Latin Name: {props.latin_name}</p>
        <p>Type: {props.animal_type}</p>
        <p>Length: {props.length_min} - {props.length_max} feet</p>
        <p>Weight: {props.weight_min} - {props.weight_max} pounds</p>
        <p>Active Time: {props.active_time}</p>
        <p>Lifespan: {props.lifespan} years</p>
        <p>Habitat: {props.habitat}</p>
        <p>Diet: {props.diet}</p>
        <p>Geographic Range: {props.geo_range}</p>

    </div>
);
