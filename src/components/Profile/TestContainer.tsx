import {useParams} from 'react-router-dom';
import ProfileContainer from './ProfileContainer';


export function TestContainer() {
    let {id} = useParams();
    if (!id) {
        id = '2';
    }
    return <ProfileContainer id={Number(id)}/>;
}