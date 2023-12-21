import { gql } from 'apollo-angular';

export const GET_ACTIVES = gql`
    query Get_Actives{
        actives{
            ActiveID
            ActiveType
            ActivePropierties
            ActiveLocation
            Area
        }
    }
`

export const GET_AREAS = gql`
    query Get_Areas{
        areas{
            AreaID
            AreaName
        }
    }
`

export const SAVE_ACTIVE = gql`
    mutation Save_Active($input: CreateActiveInput!){
        createActive(createActiveInput: $input){
            Status
            Message
        }
    }
`

export const SAVE_AREA = gql`
    mutation Save_Area($input: CreateAreaInput!){
        createArea(createAreaInput: $input){
            Status
            Message
        }
    }
`

export const DELETE_ACTIVE = gql`
    mutation Delete_Active($input: String!){
        removeActive(id: $input){
            Status
            Message
        }
    }
`

export const DELETE_AREA = gql`
    mutation Delete_Area($input: String!){
        removeArea(id: $input){
            Status
            Message
        }
    }
`

export const GET_SUBGROUP_ACTIVES = gql`
    query Get_Subgroup_Actives($input: Int!){
        activeSubGroup(page: $input){
            ActiveID
            ActiveType
            ActivePropierties
            ActiveLocation
            Area
        }
    }
`