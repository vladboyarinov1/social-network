import {v1} from 'uuid';
import {observe} from 'web-vitals/dist/modules/lib/observe';


export type PostsType = {
    id: string
    avatar: string
    message: string
    likes: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: any) => void
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), avatar: 'ava', message: 'Hello, it\'s my first message', likes: 8},
                {id: v1(), avatar: 'ava', message: 'Hello, it\'s my second message', likes: 24}
            ],
            newPostText: '',
            // profile: null,
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Valera'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your it-kamasutra?'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Yo'},
            ],
            // newMessageText: '',
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: any) {
        console.log('state changed!')
    },
    addPost(postText: string) {
        const newPost: PostsType = {
            id: v1(),
            avatar: '',
            message: postText,
            likes: 3
        }
        this._state.profilePage.posts.unshift(newPost)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    }
}

export default store;