import {useState, useEffect} from 'react';
import {location, useSearchParams} from 'react-router-dom';
import {getCastById} from 'MoviesAPI';

import { CastList, CastItem, CastImg } from "./Cast.styled";


const Cast = () => {

const [cast, setCast] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();

useEffect(()={


getCastById

})

};

export default Cast;