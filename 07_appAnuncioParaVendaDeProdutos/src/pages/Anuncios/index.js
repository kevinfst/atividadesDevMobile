import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/anuncio'

function Anuncios(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>Anúncios GFKL</Text>

      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Anuncio foto='https://static.wixstatic.com/media/71a6c2_a235cf823fb041d5a293b7dbbdc2a5da~mv2.png/v1/fill/w_1200,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/DARK%20AVENGER%20PNG.png' titulo='Teclado' linha1='Teclado em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>

          <Anuncio foto='https://s2-techtudo.glbimg.com/oXs_-egjFpFexJYc4UYQh6GZ3FM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/I/9/o9MjIxSniARVS3ftwjcA/redragon.png' titulo='Mouse' linha1='Mouse em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>

          <Anuncio foto='https://static.wixstatic.com/media/71a6c2_9a20061e42c948d882f481e10f1be04d~mv2.png/v1/fill/w_1304,h_1298,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Hero.png' titulo='Headset' linha1='Headset em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>

          <Anuncio foto='https://cdn.dooca.store/15/products/1jxnotqaxtaeqo2gxzl6d4jzmbjwirbr2t04_640x640+fill_ffffff.png?v=1608136767&webp=0' titulo='Mesa' linha1='Mesa em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>

          <Anuncio foto='https://www.comfy.com.br/media/catalog/product/cache/be00e66d6037499d540c5ce12579d442/c/a/cadeira_gamer_xperience_ultra_vermelha_1.webp' titulo='Cadeira' linha1='Cadeira em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>

          <Anuncio foto='https://patoloco.com.br/arquivos/produtos/imagens_adicionais/97d55fbf37c0115c8c1a6726d57e85fb5ee15646.jpeg' titulo='Mousepad' linha1='Mousepad em bom estado' linha2='Pouco uso, apenas três meses' linha3='Aproveite a promoção'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios