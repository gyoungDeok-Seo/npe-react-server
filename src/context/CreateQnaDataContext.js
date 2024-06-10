import { createContext } from "react";

export const CreateQnaDataContext = createContext({
  title: "",
  question: "",
  catagory: "JAVA",
  tags: [],
});
