import { configureStore, createSlice} from '@reduxjs/toolkit'

let user=createSlice({
    name : 'user',
    initialState : {name:'kim',age:20},
    reducers : {
        changeName(state){
            state.age+=1;
        }
    }
})
export let {changeName}=user.actions

let data=createSlice({
    name:'data',
    initialState :
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers:{
        stockCount(state,action){
            state.find((v)=>{return v.id==action.payload}).count+=1;
            
        },
        addStock(state,action){
            state.push(action.payload);
        }
    }
})
export let {stockCount, addStock}=data.actions

export default configureStore({
  reducer: {
    user:user.reducer,
    data:data.reducer
  }
}) 
