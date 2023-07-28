import React from 'react';
import {Sidebar} from './Sidebar';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../reducers/auth-reducer/auth-reducer';
import {Dispatch} from 'redux';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

class SidebarContainer extends React.Component<any> {

    componentDidMount() {
        instance.get('auth/me')
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data);
                }
            });
    }

    render() {
        return (
            <Sidebar {...this.props} isAuth={this.props.auth.isAuth} login={this.props.auth.login}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuthUserData: (data: any) => {
            dispatch(setAuthUserData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)