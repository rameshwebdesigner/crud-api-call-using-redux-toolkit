import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action for creating a user
export const createUserAction = createAsyncThunk(
    "userDetail/createUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3001/users", data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Async action for fetching users
export const fetchUsersAction = createAsyncThunk(
    "userDetail/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:3001/users");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const userDetailSlice = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: "succeeded",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUserAction.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(createUserAction.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.users.push(action.payload);
            })
            .addCase(createUserAction.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            })
            .addCase(fetchUsersAction.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchUsersAction.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUsersAction.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload;
            });
    },
});

export default userDetailSlice.reducer;
