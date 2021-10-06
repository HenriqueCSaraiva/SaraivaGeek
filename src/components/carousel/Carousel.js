import React from 'react';
import Products from '../products/Products';
import './Carousel.css'
import Carousel from 'react-grid-carousel'

function Catalogy() {
    return (
        <Carousel cols={5}
            rows={1}
            gap={11}
            responsiveLayout={[
                {
                    breakpoint: 1200,
                    cols: 3
                },
                {
                    breakpoint: 990,
                    cols: 2
                },
                {
                    breakpoint: 600,
                    cols: 1
                }
            ]}
            mobileBreakpoint={670}
        >

            <Carousel.Item>
                <Products
                    key="1"
                    id="312"
                    name="Super Mario Odyssey"
                    price={197.88}
                    score={100}
                    image="assets/super-mario-odyssey.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="12"
                    id="201"
                    name="Call Of Duty Infinite Warfare"
                    price={49.99}
                    score={80}
                    image="assets/call-of-duty-infinite-warfare.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="123"
                    id="102"
                    name="The Witcher III Wild Hunt"
                    price={119.5}
                    score={250}
                    image="assets/the-witcher-iii-wild-hunt.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="1234"
                    id="99"
                    name="Call Of Duty WWII"
                    price={249.99}
                    score={205}
                    image="assets/call-of-duty-wwii.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="12345"
                    id="12"
                    name="Mortal Kombat XL"
                    price={69.99}
                    score={150}
                    image="assets/mortal-kombat-xl.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="54321"
                    id=" 74"
                    name="Shards of Darkness"
                    price={71.94}
                    score={400}
                    image="assets/shards-of-darkness.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="4321"
                    id="31"
                    name="Terra Média: Sombras de Mordor"
                    price={79.99}
                    score={50}
                    image="assets/terra-media-sombras-de-mordor.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="321"
                    id="420"
                    name="FIFA 18"
                    price={195.39}
                    score={325}
                    image="assets/fifa-18.png"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Products
                    key="21"
                    id="501"
                    name="Horizon Zero Dawn"
                    price={115.8}
                    score={290}
                    image="assets/horizon-zero-dawn.png"
                />
            </Carousel.Item>

        </Carousel>
    )
}
export default Catalogy;