import {FooterContainer, Title, Link, List, Group} from './styles'

function Footer () {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title>Nubank</Title>
              <Group >
                <List><Link href="">Sobre nós</Link></List>
                <List><Link href="">Carreiras</Link></List>
                <List><Link href="">Perguntas frequentes</Link></List>
                <List><Link href="">Contato</Link></List>
                <List><Link href="">Imprensa</Link></List>
              </Group>
              <Title>Produtos</Title>
              <Group >
                <List><Link href="">Conta digital</Link></List>
                <List><Link href="">Cartão de crédito</Link></List>
                <List><Link href="">Rewards</Link></List>
                <List><Link href="">Empréstimos</Link></List>
                <List><Link href="">Conta PJ</Link></List>
              </Group>
              <Title>Explore</Title>
              <Group >
                <List><Link href="">Comunidade</Link></List>
                <List><Link href="">Blog</Link></List>
                <List><Link href="">Newsletter</Link></List>
                <List><Link href="">México</Link></List>
                <List><Link href="">Argentina</Link></List>
                <List><Link href="">Colômbia</Link></List>
              </Group>
              <Title></Title>
              <Group >
                <List><Link href="">Auxilio Emergencial e FGTS</Link></List>
                <List><Link href="">Tudo sobre o Pix</Link></List>
              </Group>
              <Title>Transparência</Title>
              <Group >
                <List><Link href="">Politica de Pivacidade</Link></List>
                <List><Link href="">Politica de compliance</Link></List>
                <List><Link href="">Contratos</Link></List>
                <List><Link href="">Politica de Segurança</Link></List>
                <List><Link href="">Relatórios Financeiros</Link></List>
                <List><Link href="">Ética & Compliance</Link></List>
                <List><Link href="">Dados Abertos</Link></List>
                <List><Link href="">SCR</Link></List>
              </Group>
              <Title>Ouvidoria</Title>
              <Group >
                <List><Link href="">0800 887 0463</Link></List>
                <List><Link href="">ouvidoria@nubank.com.br</Link></List>
                <List><p>Atendimento das 9h ás 18h (dias úteis</p></List>
              </Group>
              <Title>Fale com a gente</Title>
              <Group >
                <List><Link href="">0800 608 6236</Link></List>
                <List><Link href="">meajuda@nubank.com.br</Link></List>
                <List><p>Atendimento 24h</p></List>
              </Group>


            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}
export default Footer;