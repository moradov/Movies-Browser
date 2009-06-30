import { createContext } from "react";

const counterContext = createContext({ total: 0, addOne: () => {} });
export default counterContext;
