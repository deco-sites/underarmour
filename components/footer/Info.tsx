import Icon from "$store/components/ui/Icon.tsx";
import InfoItem from "./InfoItem.tsx";

function Info() {
  return (
    <>
      <div
        class="flex flex-col sm:flex-row items-left text-left gap-10 sm:gap-20"
        style="font-size: 15px;"
      >
        <div class="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <InfoItem
              title="Encontre uma loja perto"
              link="https://www.underarmour.com.br/lojas"
            />
            <InfoItem
              title="Acompanhe seu Pedido"
              link="https://www.underarmour.com.br/login?ReturnUrl=%2f_secure%2faccount%2forders"
            />
            <InfoItem title="Métodos de Pagamento" />
            <InfoItem title="Segurança" />
          </div>
          <div className="flex flex-col gap-4">
            <InfoItem title="Fale conosco" />
            <InfoItem title="Telefone" />
            <InfoItem
              title="0800 000 7076"
              link="tel:08000007076"
            />
            <InfoItem title="Email" />
            <InfoItem
              className="whitespace-pre-line break-all"
              title="sacunderarmour@vulcabras.com"
              link="mailto:sacunderarmour@vulcabras.com"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p class="font-bold">Sac</p>
            <InfoItem
              title="Informações de Entrega"
              link="https://www.underarmour.com.br/informacoes-de-entrega"
            />
            <InfoItem
              title="Política de Pagamento"
              link="https://www.underarmour.com.br/politica-de-pagamento"
            />
            <InfoItem
              title="Trocas e Devoluções"
              link="https://www.underarmour.com.br/trocas-e-devolucoes"
            />
            <InfoItem
              title="Política de Promoções"
              link="https://www.underarmour.com.br/politica-de-promocoes"
            />
            <InfoItem
              title="Dúvidas Frequentes (FAQs)"
              link="https://www.underarmour.com.br/faq"
            />
            <InfoItem
              title="Política de Privacidade"
              link="https://www.underarmour.com.br/politica-de-privacidade"
            />
            <InfoItem
              title="Política de Cookies"
              link="https://www.underarmour.com.br/politica-de-cookies"
            />
            <InfoItem
              title="Guia de Tamanhos"
              link="https://www.underarmour.com.br/guia-de-tamanhos"
            />
            <InfoItem
              title="Solicitações de Patrocínio"
              link="https://www.underarmour.com.br/patrocinio"
            />
            <InfoItem
              title="Mapa do Site"
              link="https://www.underarmour.com.br/mapa-do-site"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p class="font-bold">Sobre a Under Armour</p>
            <a href="https://about.underarmour.com/en/investors/resources.html">
              Relação com Investidores
            </a>
            <a href="https://www.underarmour.com.br/nossa-historia">
              A Nossa História
            </a>
            <a href="https://www.vulcabras.com/trabalhe-conosco">
              Trabalhe Conosco
            </a>

            <p class="mt-3 font-bold">UA Social</p>
            <a href="https://www.instagram.com/underarmourbrasil/?hl=pt-br">
              Instagram
            </a>
            <a href="https://www.youtube.com/user/underarmourbrasil">
              Instagram Youtube
            </a>
          </div>
        </div>
      </div>
      <div class="text-center my-10">
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
