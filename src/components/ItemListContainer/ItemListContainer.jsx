import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <h2 className='subtitulo text-center mt-5 border border-dark rounded border-2 p-2 mx-4'>{props.greeting}</h2>
    )
}

export default ItemListContainer
