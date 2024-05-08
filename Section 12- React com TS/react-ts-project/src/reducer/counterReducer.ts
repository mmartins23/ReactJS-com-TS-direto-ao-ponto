import { CounterAction } from "../types/actions";

export const counterReducer = (state: number, action: CounterAction) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}