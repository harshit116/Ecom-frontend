import Link from 'next/link';

const Wishlist =()=>{
    const wishlist_items =[
        {
            name:"Couch",
            description:"Comfortable and Stylish",
            price:1232,
            img:"/double-bed.png"

        },
        {
            name:"Bed",
            description:"Comfortable and Smooth",
            price:4537,
            img:"/double-bed.png"

        },
        {
            name:"Curtain",
            description:"Good Fabric and Stylish",
            price:654,
            img:"/double-bed.png"

        },
        {
            name:"Desk",
            description:"Stable and Strong",
            price:1200,
            img:"/double-bed.png"
        },
        {
            name:"Table",
            description:"Comfortable and Stylish",
            price:1532,
            img:"/double-bed.png"
        }
    ];

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0)', 
        border: 'none'
    };

    const imgContainerStyle = {
        maxHeight: '150px',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '15px'
    };

    const imgStyle = {
        objectFit: 'cover',
    };


    return(
        <div className="container mt-4">
            <h1 className="mb-4">Wishlist</h1>
            <div className='row'>
                {wishlist_items.map((item,index)=>(
                    <div className="col-12 mb-5" key={index}>
                        <div className="card text-white" style={cardStyle}>
                        <div className="d-flex">
                                <div style={imgContainerStyle} className="me-3">
                                    <img src={item.img} alt={item.name} width={50} height={50} style={imgStyle} />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="card-title d-flex justify-content-between">
                                        {item.name}
                                        <span>${item.price}</span>
                                    </h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Wishlist;