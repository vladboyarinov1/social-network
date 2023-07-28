import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setUserProfile} from '../../reducers/profile-reducer/profile-reducer';
import {Profile} from './Profile';

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        // this.props.setLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
            .then(res => {
                // debugger
                this.props.setUserProfile(res.data)
                // this.props.setLoader(false)
            })
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile} posts={this.props.posts}/>
                {/*<MyPostsContainer/>*/}
            </>
        )

    }
}

const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)
