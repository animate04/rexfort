import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web19201 from "./components/Web19201";
import Frame5 from "./components/Frame5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/web-1920-1">
          <Web19201 {...web19201Data} />
        </Route>
        <Route path="/:path(|frame-5)">
          <Frame5 src="/img/home--service@1x.png" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const nomeCompletoData = {
    nomeCompleto: "NOME COMPLETO",
    nomeSobrenome: "Nome Sobrenome",
};

const nomeCompleto2Data = {
    nomeCompleto: "EMPRESA",
    nomeSobrenome: "Nome da Empresa",
    className: "nome-completo-1-1",
};

const nomeCompleto3Data = {
    nomeCompleto: "FONE",
    nomeSobrenome: "+ 55 54 0000.0000",
    className: "nome-completo-1",
};

const nameData = {
    text13: "Politriz de borda vertical",
    under: "Under",
};

const name2Data = {
    text13: "Politriz de borda automática",
    under: "Recta",
    className: "name-4",
};

const name3Data = {
    text13: "Politriz de borda automática",
    under: "Gennus",
    className: "name-5",
};

const web19201Data = {
    back: "/img/estrutura-1@1x.png",
    footer: "/img/footer@1x.png",
    backImg: "/img/rectangle-103@1x.png",
    text1: "“",
    text2: "CLIENTES SATISFEITOS",
    casesDeSucesso: "Cases de Sucesso",
    maisCasesRexfort: "MAIS CASES REXFORT",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum nulla magna, sit amet bibendum dui finibus nec. Quisque sit amet lacus non felis condimentum tempus. Donec eget fermentum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porta consequat ipsum vestibulum dapibus. Vestibulum ullamcorper magna volutpat felis pharetra, sit amet sodales augue semper. Morbi at est arcu. Donec et magna est. Nunc eu tincidunt risus.",
    spanText: <>Edson Fagundes<br /></>,
    spanText2: <>Diretor de Tecnologia . Logísitica Express<br />Bento Gonçalves . RS . Brasil</>,
    group: "/img/vector-6@1x.png",
    person: "/img/ellipse-2-1@1x.png",
    conheaARexfort: "CONHEÇA A REXFORT",
    nossaHistria: "NOSSA HISTÓRIA",
    aRexfortAtuaDesde: <>A REXFORT atua desde 2008 no segmento de rochas ornamentais, diferenciada pela inovação atende com excelência às necessidades das marmorarias agregando mais eficiência e competitividade aos seus negócios.<br /><br />Com mais de 400 máquinas comercializadas, a REXFORT está presente em 26 estados brasileiros e no exterior (América do Norte e Europa), se especializa e desenvolve equipamentos que se destacam por assegurar maior produtividade às empresas.<br /><br />Além do segmento de rochas ornamentais a REXFORT também atua no segmento de Intralogística desde 2016, produzindo o armazém vertical automatizado, equipamento para verticalização de estoque. Um produto que alia tecnologia e automação para as indústria na tendência 4.0.</>,
    text4: <>Segurança, agilidade e <br />qualidade em máquinas <br />eficientes</>,
    img: "/img/rectangle-87-1@1x.png",
    eMail: "E-MAIL",
    text9: "empresa@empresa.com.br",
    assunto: "ASSUNTO",
    text7: "Escrevendo o assun...",
    mensagem: "MENSAGEM",
    text6: "Digite aqui sua mensagem",
    enviarMensagem: "ENVIAR MENSAGEM",
    faleConosco: "FALE CONOSCO",
    text5: <>Entre em Contato <br />com a Rexfort</>,
    spanText3: <>CORPORATIVO<br /></>,
    spanText4: <>rexfort@rexfort.com.br<br /></>,
    spanText5: <><br />SUPORTE TÉCNICO<br /></>,
    spanText6: <>suporte@rexfort.com.bt<br /><br /></>,
    spanText7: <>WHATSAPP<br /></>,
    spanText8: <>+ 55 54 99933.9777<br /><br /></>,
    spanText9: <>FIXO<br /></>,
    spanText10: <>+ 55 54 3452.9900<br /><br /></>,
    spanText11: <>ENDEREÇO<br /></>,
    spanText12: <>Estrada da Vindima, 90<br />Pomorosa  |  Bento Gonçalves  |  RS<br />95700-436</>,
    text10: "PARA TODOS OS EQUIPAMENTOS",
    text11: <>Peças<br />Rexfort<br />Service</>,
    selecioneSeuTipoD: <>Selecione seu tipo de equipamento, para que possamos  apresentar para você, todas as peças relacionadas.<br /><br />Caso você não saiba qual é seu equipamento, acesse a  lista de peças através do botão TODAS AS PEÇAS ao lado.</>,
    todasAsPeas: "TODAS AS PEÇAS",
    manualDeOperao: "MANUAL DE OPERAÇÃO",
    text12: "VÍDEO DE TREINAMENTO",
    imgProduto: "/img/img-produto-1@1x.png",
    text14: "Politriz de borda automática",
    naked: "Naked",
    seta: "/img/vector-6@1x.png",
    produtoNaked1: "/img/produto-naked-1-1@1x.png",
    mouse3: "/img/mouse-3-1@1x.png",
    produtoRecta1: "/img/produto-recta-1-1@1x.png",
    gennus: "/img/gennus-1@1x.png",
    text17: "Politriz de borda automática",
    velox: "Velox",
    seta2: "/img/vector-10@1x.png",
    velox2: "/img/velox-1@1x.png",
    text18: "Politriz de borda automática",
    place: "Magna",
    seta3: "/img/vector-10@1x.png",
    magna: "/img/magna-1@1x.png",
    text19: "NOVIDADES DA EMPRESA",
    rexfortNaMdia: "Rexfort na Mídia",
    anterior: "/img/rectangle-105-1@1x.png",
    overlapGroup7: "/img/rectangle-104-1@1x.png",
    group2: "/img/vector-19@1x.png",
    group3: "/img/vector-18@1x.png",
    proximo: "/img/rectangle-106-1@1x.png",
    phone: "28.03.2021",
    text20: <>REXFORT - Armazém de tubos HEVO<br />Industria 4.0</>,
    group4: "/img/vector-14@1x.png",
    vector2: "/img/vector-17@1x.png",
    vector3: "/img/vector-15@1x.png",
    vector4: "/img/vector-15@1x.png",
    oArmazmVerticalH: <>O armazém vertical HEVO é um equipamento aplicado em demandas que necessitam armazenagem de cargas pesadas.O equipamento que está em fase de construção neste momento na REXFORT é uma máquina com 8 metros de altura e bandejas de 6,6 x 1,35 metros. Com capacidade individual de 2ton.<br /><br />A máquina vai ser instalada em uma das principais metalúrgicas que prestadoras de serviços de corte térmico, dobra, solda e pintura de Bento Gonçalves - RS, a empresa possui entre seus cliente player multinacionais no ramos de elevadores, equipamentos para industria de asfalto e fabricação de máquinas.<br /><br />A aplicação será um pulmão intermediario entre o corte e a preparação de conjuntos de solda. O armazém que possui uma plataforma própria com funções de WMS será integrado ao sistema de gestão atual da fabrica o TOTVS.<br /><br />Os ganhos que serão obtidos com a aplicação do HEVO serão: recuperação de espaço fabril, velocidade e assertividade de separação, oque irá entregar maior performance e redução de custo de operação. Tornando a empresa mais competitiva e ágil. Este é mais um passo que a empresa está dando em sua jornada de inovação e crescimento!</>,
    socialAddthis: "/img/social---addthis-1@1x.png",
    todasAsNovidades: "TODAS AS NOVIDADES",
    text21: "QUALIDADE QUE CONQUISTA",
    diferenciais: "Diferenciais",
    vector5: "/img/vector-20@1x.png",
    vector6: "/img/vector-21@1x.png",
    vector7: "/img/vector-22@1x.png",
    sustentabilidade: "Sustentabilidade",
    text22: "O compromisso com o meio ambiente é expresso nas soluções que permitem o reaproveitamento de materiais, o uso consciente dos recursos e geram economia.",
    group5: "/img/vector-23@1x.png",
    vector8: "/img/vector-24@1x.png",
    vector9: "/img/vector-25@1x.png",
    garantia: "Garantia",
    text23: "A REXFORT tem compromisso com a excelência dos produtos e com a satisfação do cliente. Informe-se sobre os produtos com garantia estendida.",
    overlapGroup1: "/img/vector-27@1x.png",
    vector10: "/img/vector-28@1x.png",
    vector11: "/img/vector-26@1x.png",
    durabilidade: "Durabilidade",
    text24: "Os equipamentos têm componentes em aço inox, o que lhes assegura vida útil mais longa, resistência e qualidade diferenciada.",
    group6: "/img/vector-29@1x.png",
    text26: "Testadas e Aprovadas",
    text25: "A Rexfort Service possui um rigoroso sistema de testes e validações, que garantem total segurança das peças fornecidas",
    group7: "/img/vector-30@1x.png",
    overlapGroup12: "/img/vector-31@1x.png",
    vector12: "/img/vector-32@1x.png",
    peasOriginais: "Peças Originais",
    text27: "Produtos de qualidade para garantir o correto funcionamento e alta performance do seu produto por mais tempo",
    overlapGroup13: "/img/vector-33@1x.png",
    group8: "/img/vector-34@1x.png",
    text29: "Manutenção Preventiva",
    text28: "Obtenha a máxima produtividade e eficiência do seu equipamento, operando com a máquina sempre em dia.",
    overlapGroup8: "/img/rectangle-113@1x.png",
    text32: <>Originalidade<br />e Duração</>,
    aRexfortService: "A REXFORT Service é responsável por suprir os clientes de peças e acessórios para seus equipamentos, garantindo a manutenção da alta produtividade por um longo período",
    spanText13: "1",
    spanText14: " . 3",
    spanText15: <>PEÇAS<br /><br /></>,
    spanText16: "Peças e acessórios para seus equipamentos",
    group9: "/img/vector-35@1x.png",
    spanText17: <>REVISÃO<br /><br /></>,
    spanText18: "Mantenha seus equipamentos em dia",
    group10: "/img/vector-35@1x.png",
    logotipoService: "/img/logotipo-service-1@1x.png",
    spanText19: "Home",
    spanText20: "           Empresa           Peças           Divisões           Cases de Sucesso          Blog           Contato",
    vector13: "/img/vector-37@1x.png",
    vector14: "/img/vector-38@1x.png",
    vector15: "/img/vector-39@1x.png",
    facebook: "/img/vector-40@1x.png",
    linkedin: "/img/vector-41@1x.png",
    whatsapp: "/img/vector-42@1x.png",
    phone2: "54 99999.9999",
    nomeCompletoProps: nomeCompletoData,
    nomeCompleto2Props: nomeCompleto2Data,
    nomeCompleto3Props: nomeCompleto3Data,
    nameProps: nameData,
    name2Props: name2Data,
    name3Props: name3Data,
};

