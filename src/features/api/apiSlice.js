import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://59.152.62.177:8085'
    }),
    tagTypes: ["employees", "employee"],
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => ({
                url: '/api/Employee/EmployeeData',
                method: 'GET',
            }),
            providesTags: ["employees"],
        }),
        getEmployee: builder.query({
            query: (employeeId) => ({
                url: `/api/Employee/IndividualEmployeeData/${employeeId}`,
                method: 'GET',
            }),
            providesTags: (result, error, arg) => [
                { type: "employee", id: arg }
            ]
        }),
        addEmployee: builder.mutation({
            query: (data) => ({
                url: '/api/Employee/SaveEmployeeInformation',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["employees"],
        }),
        updateEmployeeInfo: builder.mutation({
            query: ({ employeeId, data }) => ({
                url: `/api/Employee/UpdateEmployeeInformation/${employeeId}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "employees",
                { type: "employee", id: arg.employeeId },
            ]
        }),
    }),
});

export const { useGetEmployeesQuery, useGetEmployeeQuery, useAddEmployeeMutation, useUpdateEmployeeInfoMutation } = apiSlice;