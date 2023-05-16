import { useState } from "react";
import Boxy from "./card";

const ExpandableCards = (props) => {

    const [data, setData] = useState(props.data);

    const onCardClick = (id) => {
        const newState = [...data];

        newState.map((item) => item.id === id ? item.active = true : item.active = false)
        setData(newState);
    }

    return (
        <section className='cards w-5/6 p-2 md:w-5/6 mx-auto bg-main-green'>
            {
                data.map((card) => <Boxy key={card.id}
                 data={card} onCardClick={onCardClick} /> )
            }

        </section>
    )
}

export default ExpandableCards;