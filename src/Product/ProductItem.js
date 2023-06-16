const ProductItem = (props) => {
  const deleteHandler = () => {
    props.deleting(props.item.id);
  };

  //displaying logic
  return (
    <div>
      <div>{`Product = ${props.item.id} and Title = ${props.item.title}`}</div>
      <span>{`${props.item.description} `}</span>
      <span>{`Category => ${props.item.category} `}</span>
      <div>{` Price => ${props.item.price} `}</div>
      <span>{`discounted Price => ${props.item.discountPercentage} `}</span>
      <span>{`Rating => ${props.item.rating} `}</span>
      <span>{`Brand => ${props.item.brand} `}</span>
      <span>{`Stock => ${props.item.stock} `}</span>
      <button onClick={deleteHandler}>Delete Product</button>
      <div>Checkout our next Product</div>
    </div>
  );
};

export default ProductItem;
