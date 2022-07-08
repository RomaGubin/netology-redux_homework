import { useSelector } from "react-redux"

const Value = () => {
  const numberValue = useSelector((state) => state.number.value);

  return (
    <big>
      <strong>
        {numberValue}
      </strong>
    </big>
  )
}

export default Value;
