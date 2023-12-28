/* eslint-disable no-unused-vars */
import { apiSlice } from "./../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
    }),
    editTaskByStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          if (res?.data?.id > 0) {
            // pessimistic cache update
            dispatch(
              apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                const taskId = draft?.findIndex((d) => d?.id == arg.id);
                
                draft[taskId] = res.data;
              })
            );

            // pessimistic cache update
            dispatch(
              apiSlice.util.updateQueryData(
                "getTask",
                arg.id.toString(),
                (draft) => {
                  Object.assign(draft, res?.data);
                }
              )
            );
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
          if (res?.data?.id) {
            // pessimistic cache update
            dispatch(
              apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                draft.push(res?.data);
              })
            );
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update
        const result = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((d) => d.id != arg);
          })
        );
        try {
          const task = await queryFulfilled;
        } catch (err) {
          console.log(err);
          result.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useEditTaskByStatusMutation,
  useEditTaskMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
