import { RouteProps } from "react-router-dom";

export interface IUserType {
    type: string,
    level: number
}

export interface ReduxStoreRootTypes {
    userType: IUserType
}

export interface Routes extends RouteProps {
    component: React.FC,
    path: string,
    protected: boolean | undefined,
    userLevel?: number
}