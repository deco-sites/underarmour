import Icon from "$store/components/ui/Icon.tsx";

function Info() {
  return (
    <>
      <div
        class="flex flex-col sm:flex-row items-left gap-10 sm:gap-20"
        style="font-size: 15px;"
      >
        <div class="mt-5 grid grid-cols-4 gap-6">
          <div class="font-bold">
            <a href="https://www.underarmour.com.br/lojas">
              Encontre uma loja perto
            </a>
            <p class="mt-3">
              <a href="https://www.underarmour.com.br/login?ReturnUrl=%2f_secure%2faccount%2forders">
                Acompanhe seu Pedido
              </a>
            </p>
            <p class="mt-3">Métodos de Pagamento</p>
            <p class="mt-3">icones</p>
            <p class="mt-3">Segurança</p>
          </div>
          <div class="">
            <p class="font-bold">Fale conosco</p>
            <p class="mt-3 font-bold ">Telefone</p>
            <p>
              <a href="tel:08000007076">0800 000 7076</a>
            </p>

            <p class="mt-3  font-bold">Email</p>
            <p>
              <a href="mailto:sacunderarmour@vulcabras.com">
                sacunderarmour<br />@vulcabras.com
              </a>
            </p>
          </div>
          <div class="">
            <p class="font-bold">Sac</p>
            <p>
              <a href="https://www.underarmour.com.br/informacoes-de-entrega">
                Informações de Entrega
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/politica-de-pagamento">
                Política de Pagamento
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/trocas-e-devolucoes">
                Trocas e Devoluções
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/politica-de-promocoes">
                Política de Promoções
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/faq">
                Dúvidas Frequentes (FAQs)
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/politica-de-privacidade">
                Política de Privacidade
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/politica-de-cookies">
                Política de Cookies
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/guia-de-tamanhos">
                Guia de Tamanhos
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/patrocinio">
                Solicitações de Patrocínio
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/mapa-do-site">
                Mapa do Site
              </a>
            </p>
          </div>
          <div>
            <p class="font-bold">Sobre a Under Armour</p>
            <p>
              <a href="https://about.underarmour.com/en/investors/resources.html">
                Relação com Investidores
              </a>
            </p>
            <p>
              <a href="https://www.underarmour.com.br/nossa-historia">
                A Nossa História
              </a>
            </p>
            <p>
              <a href="https://www.vulcabras.com/trabalhe-conosco">
                Trabalhe Conosco
              </a>
            </p>

            <p class="mt-3 font-bold">UA Social</p>
            <p>
              <a href="https://www.instagram.com/underarmourbrasil/?hl=pt-br">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://www.youtube.com/user/underarmourbrasil">
                Instagram Youtube
              </a>
            </p>
          </div>
        </div>
      </div>
      <div style="font-size: 12px; margin-top: 15px;">
        <p>© 2023 UnderArmour, Inc. All Rights Reserved.</p>
        <p>
          Vulcabras – SP Comércio de Artigos Esportivos Ltda. – CNPJ
          18.565.468/0012-41
        </p>
        <p>
          Estrada Municipal Luiz Lopes Neto, n.º 21 – Tenentes – CEP. 37.640-000
          – Extrema/MG
        </p>
      </div>
    </>
  );
}

export default Info;
