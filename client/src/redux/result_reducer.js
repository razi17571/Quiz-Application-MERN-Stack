import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        // updateResult: () => {},
        setUserId : (state, action) => {
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result[trace] = checked;
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : []
            }
        }
    }
})

export const { setUserId, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;
// import { postServerData } from '../helper/helper';
// import { pushResultAction, updateResultAction } from '../redux/result_reducer';

// export const PushAnswer = (result) => async (dispatch) => {
//   try {
//     dispatch(pushResultAction(result));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateResult = (index) => async (dispatch) => {
//   try {
//     dispatch(updateResultAction(index));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const usePublishResult = (resultData) => {
//   const { result, username } = resultData;
//   (async () => {
//     try {
//       if (result !== [] && !username) throw new Error("Couldn't get Result");
//       await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data);
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// };

