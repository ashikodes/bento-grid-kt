import { createContext } from "react";
import { Account, PostTime, Review } from "../amplify/data/resource";

export interface APIData {
    Review: Review[];
    PostTime: PostTime[];
    Account: Account[];
  }
  
  export const DataContext = createContext({} as APIData);