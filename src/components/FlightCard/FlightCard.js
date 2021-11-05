import classes from './FlightCard.module.scss'
import Header from "./Header"
import OneWayTrip from "./OneWayTrip"

const FlightCard = ({ flight }) => {
    const { carrier, price, trips } = flight

    return (
        <>
            <div className={classes.flight}>
                <Header carrier={carrier} price={price}/>
                <OneWayTrip trips={trips[0]}/>
                <OneWayTrip trips={trips[1]}/>
                <button className={classes.selectButton}>ВЫБРАТЬ</button>
            </div>
        </>
    )
}

export default FlightCard