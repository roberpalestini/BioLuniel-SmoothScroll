import React from 'react'
import Icon12 from '../../images/bigsize/12-bioApetito.png'
import HeroSectionP from '../HeroSectionP';
import { Compuestos } from '../ProductC/ProductCElements';
import './productbio.css'
import { ProductCContainer,  InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap} from './ProductCElements';


const ProductApetito = ({lightBg, id, imgStart, topLine, lighText, headLine, darkText, description, buttonLabel, img, alt,}) => {
    return (
        <>
        <HeroSectionP />
            <ProductCContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                    <TopLine>BioBach</TopLine>
                    <Heading >Bio Apetito</Heading>
                    <Subtitle>Ideal si se está cursando peródos de falta de apetito tanto en adultos como en
niños, los síntomas pueden ser desde comer menos de lo habitual a no sentir
hambre para o sentirse saciados después de comer solo una pequeña
cantidad.
La pérdida de apetito puede provocar graves complicaciones, pérdida de peso
que conlleva a que el cuerpo no reciba los nutrientes que necesita en los
alimentos, pérdida de masa muscula y fuerza.</Subtitle>
<Compuestos>Compuestos florales electromagnéticos: Gentian, Achicory, Wild Rose, entre otros.  </Compuestos>
                        <BtnWrap>
                                <button className="boton">WhatsApp</button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <img src={Icon12} className="productoImagen" alt="Bio Apetito"/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>

                </InfoWrapper>   
            </ProductCContainer>
        </>
    )
}

export default ProductApetito
