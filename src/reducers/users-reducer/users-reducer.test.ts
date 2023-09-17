import {
    usersReducer,
    initState,
    follow,
    unFollow,
    UsersPageType
} from './users-reducer';

describe('usersReducer', () => {
    it('should handle FOLLOW action', () => {
        const id = 1;
        const state: UsersPageType = {
            ...initState,
            items: [
                {id: 1, followed: false, photos: {small: null, large: null}, name: '', status: ''},
                {id: 2, followed: false, photos: {small: null, large: null}, name: '', status: ''},
            ],
        };
        const action = follow(id);
        const nextState = usersReducer(state, action);
        expect(nextState.items).toEqual([
            {id: 1, followed: true, photos: {small: null, large: null}, name: '', status: ''},
            {id: 2, followed: false, photos: {small: null, large: null}, name: '', status: ''},
        ]);
    });

    it('should handle UNFOLLOW action', () => {
        const id = 2;
        const state: UsersPageType = {
            ...initState,
            items: [
                {id: 1, followed: true, photos: {small: null, large: null}, name: '', status: ''},
                {id: 2, followed: true, photos: {small: null, large: null}, name: '', status: ''},
            ],
        };
        const action = unFollow(id);
        const nextState = usersReducer(state, action);
        expect(nextState.items).toEqual([
            {id: 1, followed: true, photos: {small: null, large: null}, name: '', status: ''},
            {id: 2, followed: false, photos: {small: null, large: null}, name: '', status: ''},
        ]);
    });

});