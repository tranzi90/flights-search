import classes from './FlightCard.module.scss'
import Header from "./Header"
import OneWayTrip from "./OneWayTrip"

const FlightCard = ({ flight }) => {
    const { carrier, price, legs } = flight

    return (
        <>
            <div className={classes.flight}>
                <Header carrier={carrier} price={price}/>
                <OneWayTrip leg={legs[0]}/>
                <OneWayTrip leg={legs[1]}/>
                <button className={classes.selectButton}>ВЫБРАТЬ</button>
            </div>
        </>
    )
}

export default FlightCard