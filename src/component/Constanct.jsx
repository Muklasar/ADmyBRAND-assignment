const Constant = ({ constant, constantHandler, deleteHandler }) => {
    return (
        <div>
            <select value={constant} onChange={constantHandler}>
                <option value={true} >true</option>
                <option value={false}>false</option>
            </select>
            <button onClick={deleteHandler}>X</button>
        </div>
    )
}

export default Constant