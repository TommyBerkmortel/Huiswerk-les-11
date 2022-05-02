import React from 'react';
import './App.css';
import Button from "./assets/components/Button";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Product from "./assets/components/Product";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import Tile from "./assets/components/Tile";



function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttontext="to the collection"
                    buttondisabled={false}
                />
                <Button
                    buttontext="shop all bags"
                    buttondisabled={false}
                />
                <Button
                    buttontext="pre-orders"
                    buttondisabled={true}
                />
            </nav>

            <main>
                <Product
                    labeltext="Best seller"
                    picture={bag_1}
                    productname="The handy bag"
                    price="400"
                />

                <Product
                    labeltext="Best seller"
                    picture={bag_2}
                    productname="The stylish bag"
                    price="250"
                />

                <Product
                    labeltext="New collection"
                    picture={bag_3}
                    productname="The simple bag"
                    price="300"
                />

                <Product
                    labeltext="New collection"
                    picture={bag_4}
                    productname="The trendy bag"
                    price="150"
                />
            </main>

            <footer>
                <Tile
                    title="The brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate eius impedit neque nihil quae ratione sequi suscipit tempore vitae.</p>
                    <p>Paragraaf 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore expedita labore minima neque nulla obcaecati quae reiciendis sunt tempora.</p>

                </Tile>

                <Tile>
                    <img src={brand} alt="Tile afbeelding"/>
                </Tile>

                <Tile>
                    <img src={our_story} alt="Tile afbeelding"/>
                </Tile>

                <Tile
                    title="Our story"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cupiditate eius impedit neque nihil quae ratione sequi suscipit tempore vitae.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



