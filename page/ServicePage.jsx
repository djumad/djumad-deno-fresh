import {data} from "../static/database.js"; 
const ServicePage = () => {
  return (
    <>
        <div class="w3-row-padding w3-grayscale" id="service">
        {data.map((data)=>(
        <div class="w3-col l3 m6 w3-margin-bottom" key={data.id}>
          <img src={data.image} alt="John" style="width:100%" />
          <h3>{data.name}</h3>
          <p class="w3-opacity">{data.position}</p>
          <p>{data.description}</p>
          <p>
            <button class="w3-button w3-light-grey w3-block">Contact</button>
          </p>
        </div>
        ))}
      </div>
    </>
  )
}

export default ServicePage