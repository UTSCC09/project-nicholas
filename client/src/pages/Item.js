import "../css/Item.css";

function Item(){
    return(
        <div className="item_display">
            <div className="item_image">
                <h1>Nike Dunks</h1>
                <h2>Panda Colourway</h2>
                <img src={require("../images/nike-panda-dunks.jpg")}/>
            </div>
            
            <div className="item_description">
                <button>
                    Add to Cart
                </button>
                <button>
                    Check out
                </button>
            </div>
        </div>
    )
}

export default Item;