import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three from "../../images/3.jpg";
import "./style.scss";
const portfolioData = [
  {
    id:2,
    name:"Ecommerce",
    Image: one,
    link:''
  },
  {
    id:3,
    name:"Notes App",
    Image: two,
    link:''
  },
  {
    id:2,
    name:"List App",
    Image: three,
    link:''
  },
]

const filterData = [
  {
    filterId:1,
    label:"All",
  },
  {
    filterId:2,
    label:"Development",
  },
  {
    filterId:3,
    label:"Design",
  },
]
const Portfolio = () => {

  const [filteredvalue,setFilteredValue] = useState(1);
  const [hoveredValue,setHoveredValue]=useState(null);

  function handleFilter(currentId){
    setFilteredValue(currentId)
  };

  function handleHover(index){
    setHoveredValue(index)
  }

  const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredvalue)

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterData.map(item=>(
              <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)}key={item.filterId}>
                {item.label}
              </li>
            ))
          }
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredItems.map((item,index)=>(
              <div className="portfolio__content__cards__item" 
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href="www.google.com">
                    <img alt="data" src={item.Image}/>
                  </a>
                  </div>
                  <div className="overlay">
                    {
                      index === hoveredValue && (
                        <div>
                          <p>{item.name}</p>
                          <button>Visit</button>
                        </div>
                      )
                    }
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
