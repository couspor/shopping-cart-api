import Button from '@material-ui/core/Button'
import {CartItemType} from '../App'
import {Wrapper} from './CartItem.styles'

type Props ={ 
    Item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({Item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{Item.title}</h3>
            <div className='information'>
                <p>Price: ${Item.price}</p>
                <p>Total: ${(Item.amount * Item.price).toFixed(2)}</p>
            </div>
            <div className='button'>
                <Button size='small' 
                disableElevation 
                variant='contained' 
                onClick={() => removeFromCart(Item.id)}>
                    -
                </Button>
                <p>
                    {Item.amount}
                </p>
                <Button size='small' 
                disableElevation 
                variant='contained' 
                onClick={() => addToCart(Item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={Item.image} alt={Item.title}/>
    </Wrapper>
)

export default CartItem;