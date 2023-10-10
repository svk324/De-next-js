import Image from 'next/image'

export default function Home() {
  return (
    
          <div>
            
            <div className="container">
              <div className="card__container">
                <article className="card__article">

      <Image
      className="card__img"
        src="/images/my-image.jpg"
        alt="My Image"
        width={500}
        height={500}
      />
    
                  <div className="card__data">
                    <span className="card__description">Vancouver Mountains, Canada</span>
                    <h2 className="card__title">The Great Path</h2>
                    <a href="#" className="card__button">Read More</a>
                  </div>
                </article>
                <article className="card__article">
                <Image
        className="card__img"
        src="/images/landscape-2.png"
        alt="My Image"
        width={500}
        height={500}
      />
                 <div className="card__data">
                    <span className="card__description">Poon Hill, Nepal</span>
                    <h2 className="card__title">Starry Night</h2>
                    <a href="#" className="card__button">Read More</a>
                  </div>
                </article>
                <article className="card__article">
                <Image
        src="/images/landscape-3.png"
        alt="My Image"
        className="card__img"
        width={500}
        height={500}
      />
                  <div className="card__data">
                    <span className="card__description">Bojcin Forest, Serbia</span>
                    <h2 className="card__title">Path Of Peace</h2>
                    <a href="#" className="card__button">Read More</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
}
