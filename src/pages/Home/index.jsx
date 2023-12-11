import { Container, Banner, Starter, Dessert, Drinks } from "./styles";
import photo from "../../assets/pngegg 1.png";
import pratro1 from "../../assets/Imagens - Food Explorer-v2/Mask group.png"

import { Card } from "../../components/Card"
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

export function Home() {

    return (
        <Container >

            <div id="menu" className="hide">
                <Menu/>
            </div>
            
            <div id="home" className="home">

                <Header/>

                <Banner>
                        <img src={photo} alt="" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                <h3>Pratos Principais</h3>
                <Starter>
                    
                    <div className="cards">

                        <Swiper
                            cssMode={true}
                            breakpoints={{
                                370: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                }
                            }}
                            navigation= {true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                        </Swiper>
                        
                    </div> 
                </Starter>

                
                <h3>Sobremesas</h3>
                <Dessert>

                    <div className="cards">

                        <Swiper
                            cssMode={true}
                            breakpoints={{
                                370: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                }
                            }}
                            navigation= {true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                        </Swiper>
                        
                    </div> 
                </Dessert>
                
                
                <h3>Bebidas</h3>
                <Drinks>

                    <div className="cards">

                        <Swiper
                            cssMode={true}
                            breakpoints={{
                                370: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                }
                            }}
                            navigation= {true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card src={pratro1} name="Salada Ravanello >" price="49,97" value="01"/>
                            </SwiperSlide>
                        </Swiper>
                        
                    </div> 
                </Drinks>
            </div>

            

        </Container>
    )
}