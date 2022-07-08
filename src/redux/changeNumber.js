import { CHANGE_NUMBER } from "./actions"

const changeNumber = (number) => {
  return {
    type: CHANGE_NUMBER,
    payload: number,
  }
}

export default changeNumber;
