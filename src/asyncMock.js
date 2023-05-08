const products = [


    {
        id: 'CAPELCXX000750',
        name: 'capel',
        productBrandName: 'capel',
        productCategory: 'piscos',
        category: 'espirituosas',
        size: '750ml',
        price: 1000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_759309-MLA49645391944_042022-F.webp',
        stock: 10,
        description: 'El Aguardiente Pisco Capel Especial es un producto de calidad que nace de la combinación de alcoholes doble destilado para lograr un pisco con gran carácter, elegante y complejo. Su color ámbar otorgado por la madera de roble americano sumado al exquisito aroma de las finas uvas logran la armonía perfecta.',
    },

    {
        id: 'CACHAPIT001000',
        name: 'cachaca pitu clasica',
        productBrandName: 'pitu',
        productCategory: 'cachacas',
        category: 'espitiruosas',
        size: '1lt',
        price: 1000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_705115-MLA40027084732_122019-F.webp',
        stock: 15,
        description: 'La Cachaza Pitu llamada también Pinga o Branquinho, es la bebida alcohólica destilada más importante de Brasil. El origen del aguardiente se remonta a la primera planta de caña de azúcar introducida en tierras brasileñas por los colonizadores portugueses a principios del siglo XVI, traída desde la isla de Madeira.',
    },

    {
        id: 'AMARULAX001000',
        name: 'amarula',
        productBrandName: 'amaruala',
        productCategory: 'licores',
        category: 'espirituosas',
        size: '750ml',
        price: 1000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_963500-MLA51344783340_082022-F.webp',
        stock: 15,
        description: 'Amarula Cream es un licor para deleitar los paladares más exquisitos, cuenta con una graduación alcohólica de 17%, ideal para degustar con hielo, aunque se puede disfrutar con café o como ingredientes en cócteles; galardonado con el premio Best Liquor of the Year en el año 2007 en la International Wine & Spirits Competition.',
    },

    {
        id: 'BAiLEYSC000750',
        name: 'baileys clasic',
        productBrandName: 'baileys',
        productCategory: 'licores',
        category: 'espirituosas',
        size: '750ml',
        price: 2000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_938379-MLA53349773410_012023-F.webp',
        stock: 1,
        description: 'La clave del Licor Baileys reside en su mezcla, es el único Licor de crema irlandesa completamente natural donde el Whisky es utilizado como conservante natural, su graduación alcohólica es de 17%, se puede consumir solo, con hielo o combinado.',
    },

    {
        id: 'ESPUMALA000750',
        name: 'alambrado blanc de blancs',
        productBrandName: 'Santa Julia',
        productCategory: 'blanc de blancs',
        category: 'espumante',
        size: '750ml',
        price: 500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_630854-MLA42118465595_062020-F.webp',
        stock: 0,
        description: 'Para hacer este espumante, la bodega selecciono diferentes parcelas de Chardonnay del Valle de Uco cuya tipicidad permitió lograr un blanc de blancs brillante, elegante y de burbujas envolventes. Metodo Charmat con 8 meses sobre Lías. Color suave amarillo con destellos dorados con fino rosario de burbujas. Complejo y sutil aroma a frutas blancas y amarillas como peras, manzanas y duraznos.',
    },

    {
        id: 'COROLATA000269',
        name: 'corona extra lata',
        productBrandName: 'corona extra',
        productCategory: 'rubias',
        category: 'cervezas',
        size: 'Lata x 6un',
        price: 2500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_639229-MLA51963035792_102022-F.webp',
        stock: '10',
        description: 'Corona Extra es una cerveza de tipo Lager Pilsner, clara y brillante, de espuma blanca y consistente. Tiene notas afrutadas, de cuerpo medio, fresca, balanceada y muy fácil de beber. En boca es dulce y recuerda al sabor del cereal. Su amargor es limpio y ligero. País: México.',
    },

    {
        id: 'ACONAZUL000750',
        name: 'aconcagua azul',
        productBrandName: 'aconcagua',
        productCategory: 'gin',
        category: 'espirituosas',
        size: '750ml',
        price: 2500,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_965180-MLA51371090397_092022-F.webp',
        stock: 82,
        description: 'Un Gin hecho a mano en Buenos Aires, Argentina. La esencia es extraída a partir de 7 botánicos: Bayas de Enebro, Cáscara de limón, Semillas de Coriandro, Raíz de Regaliz y Angélica, Almendra y Canela en Rama. Gracias a un meticuloso proceso de maceración y destilación en alambique de cobre se obtiene este Gin Aconcagua, ideal para servir bien frío acompañado de agua tónica en su versión tradicional.',
    },

    {
        id: 'HENDRICK000700',
        name: 'gin hendricks',
        productBrandName: 'hendricks',
        productCategory: 'gin',
        category: 'espitituosas',
        size: '700ml',
        price: 15000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_661192-MLA52316434338_112022-F.webp',
        stock: 2,
        description: 'Hendricks se destila a partir de una receta única donde se mezclan 11 plantas botánicas entre raíces, flores, semillas y frutos en la costa suroeste de Escocia. Ganadora de la Doble medalla de oro en 2004 en la San Francisco International Spirits Competition. La famosa ginebra Hendricks Gin que ha hecho famosos los combinados de Gin Tonic con pepino. Vista: Acerada y brillante. Nariz: Aromas florales y cítricos muy intensos, con toques de flor de jara y retama. Es intensa, potente y elegante, aromática y con un alcohol bien integrado, fondo de acícula de pino. Boca: Es aromática, con un paso de rosa y violeta, de excelente alcohol, de paso graso, aromático y potente, con una retronasal floral de cierta golosidad.',
    },

    {
        id: 'CHIVASRE000750',
        name: 'chivas regal 12 años',
        productBrandName: 'chivas',
        productCategory: 'wisky',
        category: 'espirituosas',
        size: '750',
        price: 35000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_607103-MLA50056333219_052022-F.webp',
        stock: 74,
        description: 'Origen: Speyside, Escocia.Tipo de producto: Blend Scotch Whisky. Grado alcohólico: 40% alc./vol. Tipo de elaboración: Destilado (doble destilación).Materia prima base: Cebada Malteada + Otros Cereales.Descripción: Color: ámbar radiante se perciben en nariz una infusión aromática de frutas, flores, miel y levemente ahumado. De sabor balanceado y cremoso, suave, miel, manzanas maduras y avellanas.Modo de consumo:Solo, con hielo, con agua mineral,en cócteles.',
    },

    {
        id: 'GLENDFIG000750',
        name: 'glendfiddich 12 años',
        productBrandName: 'glendfiddich',
        productCategory: 'wisky',
        category: 'espirituosas',
        size: '750ml',
        price: 25000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_807452-MLA50461450583_062022-F.webp',
        stock: 5,
        description: 'Madurado con extremo cuidado en barricas de bourbon americano y jerez español al menos durante 12 años. Maridado y añejado en barricas de roble para lograr una completa armonía de aroma y sabor. Whisky escocés de una sola malta con distintivos sabores a pera fresca, cremoso y con sabor a roble tostado con un acabado maduro, largo y suave. Es la marca emblemática del whisky escocés de una sola malta más galardonado del mundo. 40% ALC/VOL, 70 CL',
    },

    {
        id: 'GINKGOPA000500',
        name: 'gin gingkgo patagonia',
        productBrandName: 'patagonia',
        productCategory: 'gin',
        category: 'espirituosas',
        size: '500ml',
        price: 3700,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_757421-MLA53205613377_012023-F.webp',
        stock: 5,
        description: 'Intenso aroma y notas dulces por la adición de raíz de regaliz y canela. Perfil muy refrescante y aromático en el que el alcohol se balancea gracias a la sedosidad que aportan en boca y garganta el sauco, el maqui y la rosa mosqueta. Ginkgo es un gin estilo Dry Gin destilado cuatro veces en alambique de cobre, macerado previamente con 11 botánicos argentinos. Cuatro de ellos, provenientes de la Patagonia y cultivados de manera agroecológica.',
    },



]




export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
} 

/* find objeto */

export const getProductsById = (id) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.find (product => product.id === id ))
        }, 1000)
    })
} 

/* filter array */
export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.filter (product => product.category === category ))
        }, 1000)
    })
} 

export const stockConsult = (stock) => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.find (product => product.stock === stock ))
        }, 1000)
    })
} 