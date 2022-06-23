import { AnimalImage } from "./AnimalImage";
import { AnimalName } from "./AnimalName";
import { AnimalInfo } from './AnimalInfo';

export const AnimalCard = props => (
    <div className="animal-card">
        <div className="title-image-container">
            <AnimalName name={props.name}/>
            <AnimalImage name={props.name} image={props.image_link} />
        </div>
        <div className="info-container">
            <AnimalInfo
                latin_name={props.latin_name}
                animal_type={props.animal_type}
                active_time={props.active_time}
                length_min={props.length_min}
                length_max={props.length_max}
                weight_min={props.weight_min}
                weight_max={props.weight_max}
                lifespan={props.lifespan}
                habitat={props.habitat}
                diet={props.diet}
                geo_range={props.geo_range}
                image_link={props.image_link}
                id={props.id}
            />
        </div>
    </div>
);