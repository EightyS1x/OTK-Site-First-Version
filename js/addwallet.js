
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addWallet");
  if (window.ethereum && addButton) {
    addButton.addEventListener("click", function () {
      ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0xA6AF26dFA082272fBbbcEAA57d145d10F51F7431',
            symbol: 'OTK',
            decimals: 18,
            image: 'https://otk-token.io/images/aike-1.png'
          }
        }
      });
    });
  }
});
