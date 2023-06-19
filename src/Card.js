import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./card.css";
import "./theme.css"

export default function Card({ data }) {

    return (
        <div className='col-md-4 col-sm-5 col-xs-5 pb-3 pt-3'>
            <div className="custom-card blue">
                <img src={data["thumbnail"]} alt="" />
                <h6>{data["title"]}</h6>
                <span>{data["company_name"]}</span>
                <span>{data["location"]}</span>
            </div>
        </div>
    );
}