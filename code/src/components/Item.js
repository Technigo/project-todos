


const handleRemoveButtonClick = () => {
    dispatchEvent(todos.action.removeItem(props.item.id))
}

return (
    <li>
        <span>{props.item.name} - </span>

        <label>
            buy more
            <input
            type='checkbox'
            checked={props.item.needsMore}
            onChange={handleCheckboxClick}
            />
        </label>

        <Button type='button' onClick={handleRemoveButtonClick}>
            Remove
        </Button>
    </li>
)