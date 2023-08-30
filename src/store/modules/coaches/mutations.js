export default {

    //các thay đổi từ bên ngoài ảnh hưởng đến state sẽ được viết trong này
    registerCoach(state, payload){
        state.coaches.push(payload);
    },
    setCoaches(state, payload){
        state.coaches = payload;
    },
    setFetchTimestamp(state){
        state.lastFetch = new Date().getTime();
    }
};
