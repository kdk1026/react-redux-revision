import { useDispatch } from "react-redux";
import { numberAction } from "../store/actions/NumberAction";

export default function Right3(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Right3</h1>
            <button onClick={() => {
                numberAction.increaseNumber(dispatch);
            }}>+</button>
            <button onClick={() => {
                numberAction.decreaseNumber(dispatch);
            }}>-</button>
        </div>
    )
}