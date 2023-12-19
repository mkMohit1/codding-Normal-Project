export const Button = (prop) => {
    const { value, className } = prop;
    return (
        <button className={className}>{value}</button>
    )
}