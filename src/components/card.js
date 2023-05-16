
const Boxy = (props) => {

    const { id, image, active, cardName, text } = props.data;


    return ( 
    <div key={id} className={`card ${active && 'active'}`} 
        style={{backgroundImage:`url(${image})`}}
        onClick={() => props.onCardClick(id)}>
        <h3>{cardName}</h3>
        <p>{text}</p>
    </div>
    );
}

export default Boxy;