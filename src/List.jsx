

function List(props){
    const fruitscatagory = 'Fruits';
    const fruits = [{id : 1,name : 'apple', calories : 69},
                    {id : 2,name : 'banana', calories : 40},
                    {id : 3,name : 'orange', calories : 80},]

    const list_item = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp;
                                                               {fruits.calories}</li>)
    
    const vegetablescatagory = 'Vegetables';
    const vegetables = [{id : 4,name : 'badrang', calories : 1},
                        {id : 5,name : 'moli', calories : 4},
                        {id : 6,name : 'zardak', calories : 8},]

const list_item2 = vegetables.map(vegetables => <li key={vegetables.id}>
                                                        {vegetables.name}: &nbsp;
                                                        {vegetables.calories}</li>)
    return(
        <ol><>
            <h3 className="cat">{fruitscatagory}</h3>
            <p className="items">{list_item}</p>
            <h3 className="cat">{vegetablescatagory}</h3>
            <p className="items">{list_item2}</p>
            </>
        </ol>
    );

}

export default List