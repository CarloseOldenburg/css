export const CSS_BASE_TEMPLATE = `:root body#custom-theme.theme {
  --black-font: "iFoodRCTextos-ExtraBold";
  --black-italic-font: "iFoodRCTextos-ExtraBold";
  --bold-font: "iFoodRCTextos-Bold";
  --bold-italic-font: "iFoodRCTextos-Bold";
  --extra-bold-font: "iFoodRCTextos-ExtraBold";
  --extra-bold-italic-font: "iFoodRCTextos-ExtraBold";
  --extra-light-font: "iFoodRCTextos-Light";
  --extra-light-italic-font: "iFoodRCTextos-Light";
  --italic-font: "iFoodRCTextos-Regular";
  --regular-font: "iFoodRCTextos-Regular";
  --light-font: "iFoodRCTextos-Light";
  --light-italic-font: "iFoodRCTextos-Light";
  --medium-font: "iFoodRCTextos-Medium";
  --medium-italic-font: "iFoodRCTextos-Medium";
  --semi-bold-font: "iFoodRCTextos-Medium";
  --semi-bold-italic-font: "iFoodRCTextos-Medium";
  --thin-font: "iFoodRCTextos-Thin";
  --thin-italic-font: "iFoodRCTextos-Thin";
  --title-bold-font: "iFoodRCTitulos-Bold";
  --title-extra-bold-font: "iFoodRCTitulos-ExtraBold";
  --title-regular-font: "iFoodRCTitulos-Regular";
  --title-light-font: "iFoodRCTitulos-Light";
  --title-medium-font: "iFoodRCTitulos-Medium";
  --title-thin-font: "iFoodRCTitulos-Thin";
  --title-museosans-100: "MuseoSans-100";
  --gutenberg: "Gutenberg";

  /* VARIAVEIS PRIMARIAS E SECUNDARIAS */
  --primary-color: #000000; /*cor pricipal*/
  --lateral-bar-color: #ED7A04; /*cor de fundo das categorias*/
  --primary-auxiliary-color: #ffffff; /*não alterar*/
  --secondary-color: #ff1414; /*não alterar*/
  --category-menu-list-font-var: #ffffff; /*Cor da fonte na categoria*/
  --category-menu-list-selected-bg-var: #ffffff; /*cor da categoria selecionada*/
  --secondary-auxiliary-color: #000000; /*Cor da fonte na categoria selecionada*/
  --fidelity-bar-font-color: #ffffff; /*não alterar*/
  --fidelity-bar-bg-color: #ea1d2c; /*não alterar*/
  --product-card-background-color: #ffffff; /*cor do bloco dos itens*/

  /* VARIAVEIS ESPECIFICAS PARA PARTES DO SISTEMA */
  --price: var(--primary-color);
  --product-name: var(--dark-color);
  --product-substep-description: var(--primary-color);
  --subcategory-products-name: var(--gray-auxiliary-color);
  --footer-cart-inner-color: var(--primary-color);
  --footer-cart-inner-font-color: var(--primary-auxiliary-color);
  --quantity-in-cart-bg: var(--primary-color);
  --quantity-in-cart-font: var(--primary-auxiliary-color);
  --summary-title-color: var(--primary-color);
  --category-menu-list-bg: var(--lateral-bar-color);
  --category-menu-list-font: var(--category-menu-list-font-var);
  --category-menu-list-selected-bg: var(--category-menu-list-selected-bg-var);
  --category-menu-list-selected-font: var(--secondary-auxiliary-color);
  --choose-where-eat-bg-color: var(--primary-color);
  --choose-where-eat-font-color: var(--primary-auxiliary-color);
  --sub-category-selected-color: var(--gray-auxiliary-color);
  --action-button-bg-color: var(--primary-color);
  --action-button-font-color: var(--primary-auxiliary-color);
  --admin-bg-color: var(--primary-color);
  --back-button-bg-color: var(--white-auxiliary-color);
  --back-button-font-color: var(--dark-color);
  --home-button-bg-color: var(--primary-color);
  --select-option-card-checkbox-border-color: var(--primary-color);
  --select-option-card-checkbox-bg-color: var(--primary-color);
  --select-option-card-checkbox-check-color: var(--primary-auxiliary-color);
  --select-option-card-border-checked-color: var(--primary-color);
  --select-option-card-upsell-value-color: var(--primary-auxiliary-color);
  --select-option-card-upsell-value-bg-color: var(--primary-color);
  --close-purchase-suggestion-button-bg: var(--primary-color);
  --close-purchase-suggestion-button-font: var(--primary-auxiliary-color);
  --cart-button-bg-color: var(--primary-color);
  --cart-button-font-color: var(--primary-auxiliary-color);
  --cart-list-button-bg-color: var(--primary-color);
  --cart-list-button-font-color: var(--primary-auxiliary-color);
  --accordion-btn-action-bg-color: var(--primary-color);
  --accordion-btn-action-font-color: var(--primary-auxiliary-color);
  --header-bg-color: var(--primary-color);
  --marker-bg-color: var(--primary-color);
  --coupon-remove-button-bg-color: var(--primary-color);
  --coupon-remove-button-font-color: var(--primary-auxiliary-color);
  --fidelity-loader-color: var(--primary-color);
  --sidebar-cart-inner-opened-footer-actions-button-bg-color: var(
    --primary-color
  );
  --admin-actions-loader-color: var(--primary-color);
  --last-orders-loader-color: var(--primary-color);
  --category-menu-list-category-border-color: var(--primary-color);
  --fidelity-cashback-toggle-selected-bg: var(--primary-color);
  --fidelity-cashback-toggle-selected-font: var(--primary-auxiliary-color);
  --tipping-option-active-bg: var(--primary-color);
  --tipping-option-active-font: var(--primary-auxiliary-color);
  --modal-close-button-bg-color: var(--primary-color);
  --navigation-selector-counter-bg-color: var(--primary-color);
  --navigation-selector-counter-font-color: var(--primary-auxiliary-color);
  --navigation-selector-expanded-bg-color: var(--primary-color);
  --purchase-suggestion-scroll-button-bg: var(--primary-color);
  --purchase-suggestion-scrollbar-thumb-bg: var(--primary-color);
  --cart-list-toogle-options-font-color: var(--primary-color);
  --plus-and-minus-button-bg-color: var(--primary-color);
  --plus-and-minus-button-font-color: var(--primary-auxiliary-color);
  --select-option-card-score-bg-color: var(--primary-color);
  --select-option-card-score-font-color: var(--primary-auxiliary-color);
  --select-product-control-button-continue-background-color: var(
    --primary-color
  );
  --select-product-control-button-continue-font-color: var(
    --primary-auxiliary-color
  );
  --modal-product-button-background-color: var(--primary-color);
  --modal-product-button-font-color: var(--primary-auxiliary-color);
  --home-actions-button-background-color: var(--primary-color);
  --home-actions-button-font-color: var(--primary-auxiliary-color);
  --details-header-font-color: var(--dark-color);
  --details-position-indicator-active-bg: var(--primary-color);
  --details-review: var(--primary-color);
  --details-review-button-bg-color: var(--primary-color);
  --details-review-button-font-color: var(--primary-auxiliary-color);
  --fidelity-bar-bt-color: var(--gray-auxiliary-color);
  --fidelity-bar-bt-bg-color: var(--white-auxiliary-color);
  --commands-home-button-background-color: #212121;
  --commands-home-button-font-color: #fcc500;
  --fidelity-used-payments-color: var(--primary-color);
  --selector-internal-multi-store-bg-color: linear-gradient(
    rgba(48, 48, 48, 1) 0%,
    rgba(86, 86, 89, 1) 50%,
    rgba(116, 115, 115, 1) 100%
  );
  --category-title-inline: var(--primary-color);
  --payment-methods-color: var(--primary-color);
  --my-favorite-button-bg-color: var(--primary-color);
  --my-favorite-button-icon-color: var(--primary-auxiliary-color);

  /* VARIAVEIS DE CORES, NORMALMENTE NAO SAO ALTERADAS */
  --continue-button-bg-color: #339900;
  --new-orde-button-bg-color: #2e6499;
  --details-error-button-color: #dddddd;
  --background-color-get-digital-recepit: #f5f5f5;
  --screen-input-cupom-code-bg-color: #fff;
  --screen-applied-coupons-bg-color: #fff;
  --sumary-discount-color: #da0000;
  --assisted-payment-bar-bg-color: #edff3a;
  --used-payments-color: #a3a3a3;
  --terms-of-use-bg-color: #fff;
  --terms-of-use-content-color: #fff;
  --white-auxiliary-color: #ffffff;
  --gray-auxiliary-color: #202020;
  --gray-dark-color: #707070;
  --gray-color: #949494;
  --gray-light-color: #d3d3d3;
  --successful-color: #4caf50;
  --error-color: #cc2929;
  --red: #ff0000;
  --green: #18a222;
  --attention-color: #e6c317;
  --dark-color: #000000;
  --weak-black: #00000086;
  --green-auxiliary-color: #5fa770;
  --screen-observation-product-bg-color: #fff;
  --screen-observation-product-font-color: #565656;
  --marsala: #8f0340;

  --background-color-selfcheckout: #f7f7f7;
  --green-weak: #dfffee;
  --green: #009e4a;
  --border-button-color: #8d8d8d45;

  --common-border-radius: 1.5vmin;
  --common-border-radius-just-left: 1.5vmin 0 0 1.5vmin;
  --common-border-radius-just-right: 0 1.5vmin 1.5vmin 0;

  --common-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  --common-filter-drop-shadow: drop-shadow(
    0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3)
  );
  --admin-change-virtual-device-identification-bg-color: var(
    --white-auxiliary-color
  );
  --admin-change-virtual-device-identification-font-color: var(
    var(--gray-auxiliary-color)
  );
  --menu-selfcheckout-bg-color: var(--white-auxiliary-color);
  --menu-selfcheckout-font-color: var(--dark-color);
  --menu-selfcheckout-selected-bg-color: var(--primary-color);
  --menu-selfcheckout-selected-font-color: var(--white-auxiliary-color);

  --classic: flex;
  --slim: none;
}

/* Exemplo de cor para fidelidade */
:root body#custom-theme.theme-fidelidade {
  /* VARIAVEIS PRIMARIAS E SECUNDARIAS */
  --primary-color: #b40000;
  --primary-auxiliary-color: #ffffff;
  --secondary-color: #b40000;
  --secondary-auxiliary-color: #ffffff;
}

:root body#custom-theme.theme app-input main content input::placeholder,
:root body#custom-theme.theme app-input main content textarea::placeholder {
  font-size: 4vw;
  font-family: var(--light-font);
}


:root
  body#custom-theme.theme
  app-campaign-coupon
  .apply-coupon
  .toggle-buttons
  .toggle-button {
  background-color: #ea1d2c38;
}

:root
  body#custom-theme.theme
  app-campaign-coupon
  .apply-coupon
  .toggle-buttons
  .toggle-button.selected {
  background-color: var(--secondary-color);
}

:root
  body#custom-theme.theme
  app-campaign-coupon
  .apply-coupon
  .toggle-buttons
  .toggle-button.selected
  span {
  color: #ffffff;
}

:root
  body#custom-theme.theme
  app-modal-fidelity-login
  .container.bannerFidelity {
  width: 93%;
  margin-top: 12vmin;
  padding: 9vmin 0 2vmin;
  gap: 0;
}

:root
  body#custom-theme.theme
  app-modal-fidelity-login
  .container
  .form-input
  h2 {
  font-size: 1.7vh;
}

:root
  body#custom-theme.theme
  app-modal-fidelity-login
  .container.bannerFidelity:has(.final-order) {
  padding: 6vmin 0 2vmin;
}

:root body#custom-theme.theme app-fidelity-message-login header {
  margin: 0 0 8vmin;
}

:root body#custom-theme.theme app-fidelity-message-login header h1 {
  font-family: var(--bold-font);
  font-size: 4.2vh;
  margin: 0 0 0.7vmin;
}

:root body#custom-theme.theme app-fidelity-message-login header h2 {
  /* margin: 0vmin 15vmin 0; */
  font-size: 1.9vh;
  color: #717171;
}

:root body#custom-theme.theme app-fidelity-message-login header.final-order {
  margin: 0 0 5vmin;
}

:root
  body#custom-theme.theme
  app-fidelity-message-login
  header.final-order
  span {
  font-family: var(--semi-bold-font);
  font-size: 4.6rem;
  line-height: inherit;
}

:root
  body#custom-theme.theme
  app-fidelity-message-login
  header.final-order
  span
  #customCashback {
  margin: 0;
  line-height: 1;
  font-size: 6.2rem;
  color: #1fad68;
}

:root
  body#custom-theme.theme
  app-fidelity-message-login
  header.final-order
  span.auxiliar-message {
  font-family: var(--regular-font);
  font-size: 3.5rem;
  padding: 0;
}

:root body#custom-theme.theme app-fidelity-bar-identification header {
  min-height: 8vmin;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  content {
  justify-content: start;
  flex: 1;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  .logo {
  flex: 0 0 auto;
  margin: 0 3vmin;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  span {
  flex: 1 1 auto;
  display: inline;
  white-space: normal;
  word-break: normal;
  margin: 1vmin 0;
  font-family: var(--regular-font);
  font-size: 1.6rem;
  text-align: left;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  span
  #customValue,
:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  span
  #customCredit {
  margin: 0;
  font-size: 1.6rem;
  white-space: nowrap;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-in
  button {
  display: none;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-out
  content {
  justify-content: start;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-out
  .logo {
  margin: 0 3vmin;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-out
  span {
  margin: 1vmin;
  font-size: 1.6rem;
  font-family: var(--regular-font);
  text-align: left;
}

:root
  body#custom-theme.theme
  app-fidelity-bar-identification
  header
  .logged-out
  button {
  font-size: 1.6rem;
  margin-right: 8vmin;
  text-transform: unset;
}

:root
  body#custom-theme.theme
  app-category-menu-list
  .content-categories
  .category
  .description {
  font-size: 2rem;
}

:root
  body#custom-theme.theme
  app-category-menu-list
  .content-categories
  .category.selected
  .description {
  font-family: var(--medium-font);
}

:root body#custom-theme.theme app-product-card .card-item .card-content p.name {
  font-size: 1.6rem;
  color: var(--product-card-background-color);
}

:root
  body#custom-theme.theme
  app-product-card
  .card-item
  .card-content
  p.description {
  font-size: 1.2rem;
}

:root body#custom-theme.theme app-extra-options {
  width: 90%;
  margin: 2vmin 0;
}

:root body#custom-theme.theme app-extra-options section {
  border-radius: 2.7vmin;
}

:root body#custom-theme.theme app-fidelity-cashback legend {
  font-size: 2rem;
  font-family: var(--thin-font);
}

:root body#custom-theme.theme app-fidelity-cashback legend #customCredit {
  font-family: var(--bold-font);
}

:root body#custom-theme.theme app-fidelity-cashback .toggle-buttons {
  flex-direction: row-reverse;
  max-width: 30%;
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button {
  background-color: #ea1d2c38;
  padding: 1.5vmin 3vmin;
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button
  span {
  font-family: var(--light-font);
  font-size: 1.5rem;
  color: #333;
  text-transform: uppercase;
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button.left {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button.right {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button.selected {
  background-color: var(--secondary-color);
}

:root
  body#custom-theme.theme
  app-fidelity-cashback
  .toggle-buttons
  .toggle-button.selected
  span {
  color: var(--secondary-auxiliary-color);
  font-family: var(--medium-font);
}

:root body#custom-theme.theme app-totals p {
  font-size: 1.7rem;
}

:root body#custom-theme.theme app-totals p b {
  font-family: var(--bold-font);
}

:root body#custom-theme.theme app-totals p.used-payment {
  color: #ea1d2c;
}

:root body#custom-theme.theme app-totals p.total {
  padding: 2vmin 0 0;
  font-size: 2.5rem;
  color: #222222;
}

:root body#custom-theme.theme app-method header h1 {
  font-family: var(--light-font);
  font-size: 3.2rem;
  margin: 0;
}

:root
  body#custom-theme.theme
  app-method
  article.method-article
  div.content
  button.item {
  box-shadow: var(--common-box-shadow);
  border-radius: 3vmin;
}

:root body#custom-theme.theme app-method .method-article .content .item img {
  height: 10vmin;
  width: 18vmin;
  margin-bottom: 0.7vmin;
}

:root body#custom-theme.theme app-method .method-article .content .item p {
  font-size: 1.7rem;
}

:root body#custom-theme.theme app-method article.method-article h2 {
  font-family: var(--regular-font);
  font-size: 4rem;
  color: #3f3e3e;
}

:root body#custom-theme.theme app-cards {
  padding: 0 6vmin;
}

:root body#custom-theme.theme app-cards div.container h3 {
  font-family: var(--thin-font);
  justify-content: flex-start;
  padding: 0 4vmin 1vmin;
}

:root body#custom-theme.theme app-cards app-cart {
  margin: 4vmin 0;
}

:root body#custom-theme.theme app-cart .container button.left-content {
  position: relative;
}

:root
  body#custom-theme.theme
  app-cart
  .container
  button.left-content
  span.icon.icon-back-alt {
  position: absolute;
  left: 3vmin;
  font-size: 3vw;
}

:root body#custom-theme.theme app-cart .container button p {
  text-transform: inherit;
  font-size: 1.7rem;
}

:root body#custom-theme.theme app-cart .container button.left-content p {
  font-family: var(--light-font);
}

:root body#custom-theme.theme app-status article.usedCampaign {
  background-color: var(--secondary-color);
  color: var(--secondary-auxiliary-color);
}

:root
  body#custom-theme.theme
  app-status
  article.usedCampaign
  .content
  .queueNumber {
  color: var(--secondary-auxiliary-color);
  border-color: var(--secondary-auxiliary-color);
}

:root body#custom-theme.theme app-status article .content p:first-child {
  font-size: 4vh;
  font-family: var(--regular-font);
  margin: 2vmin 3vmin 5vmin;
}

:root body#custom-theme.theme app-status article .content p:nth-child(2),
:root body#custom-theme.theme app-status article .content p:nth-child(3) {
  font-size: 2vh;
  font-weight: lighter;
  margin: 0 6vmin;
}

:root body#custom-theme.theme app-keyboard {
  overflow: visible;
}

:root body#custom-theme.theme app-keyboard .keyboard-row {
  overflow: visible;
}

:root body#custom-theme.theme app-keyboard .keyboard-row button {
  font-family: var(--thin-font);
  font-size: 4.6vmin;
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.2);
  overflow: visible;
}
:root body#custom-theme.theme app-actions button {
  font-family: var(--medium-font);
}

:root body#custom-theme.theme app-actions button.cancel,
:root body#custom-theme.theme app-actions button.go-back,
:root body#custom-theme.theme app-actions button.do-not-inform {
  font-family: var(--light-font);
}

:root body#custom-theme.theme app-developed-by {
  display: none;
}

:root body#custom-theme.theme span.customHighlight {
  /*aqui adicionar a cor de destaque desejada*/
  color: var(--secondary-color)
}

:root body#custom-theme.theme .phone,
:root body#custom-theme.theme .tablet,
:root body#custom-theme.theme .totem,
:root body#custom-theme.theme .phone-classic,
:root body#custom-theme.theme .phone-slim,
:root body#custom-theme.theme .tablet-slim,
:root body#custom-theme.theme .tablet-classic,
:root body#custom-theme.theme .totem-slim,
:root body#custom-theme.theme .totem-classic {
  display: none;
}

@media screen and (max-width: 992px) and (orientation: portrait) {
  :root body#custom-theme.theme .phone {
    display: flex;
  }
  :root body#custom-theme.theme .phone-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .phone-slim {
    display: var(--slim);
  }
}

@media screen and (orientation: landscape) {
  :root body#custom-theme.theme .tablet {
    display: flex;
  }
  :root body#custom-theme.theme .tablet-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .tablet-slim {
    display: var(--slim);
  }
}

@media screen and (min-width: 992px) and (orientation: portrait) {
  :root body#custom-theme.theme .totem {
    display: flex;
  }
  :root body#custom-theme.theme .totem-classic {
    display: var(--classic);
  }
  :root body#custom-theme.theme .totem-slim {
    display: var(--slim);
  }
}
`
