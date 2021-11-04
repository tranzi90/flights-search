
const FlightCard = ({ flight }) => {
    return (
        <div>
            <div className="header">
                {flight.carrier.caption}
            </div>
        </div>
    );
};

export default FlightCard;