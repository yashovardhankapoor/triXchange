// // Function to handle the click event on a cryptocurrency
// function handleClick(coinName) {
//     // Replace 'YOUR_API_KEY' with your actual CoinMarketCap API key
//     const apiKey = '0c1ffa47-fbf7-4bc3-855a-1bd4e7d3b40e';
//     const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coinName}&CMC_PRO_API_KEY=${apiKey}`;
  
//     // Make the API call
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         // Extract the necessary information from the API response
//         const coin = data.data[coinName];
//         const price = coin.quote.USD.price;
//         const marketCap = coin.quote.USD.market_cap;
//         const volume = coin.quote.USD.volume_24h;
  
//         // Redirect to the full graph, history, and news page with the cryptocurrency details
//         window.location.href = `https://coinmarketcap.com/currencies/${coinName}/`;
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  
//   // Add event listeners to the cryptocurrency elements
//   const bitcoinElement = document.getElementById('bitcoin'); // Replace 'bitcoin' with the actual ID of the element
//   const ethereumElement = document.getElementById('ethereum'); // Replace 'ethereum' with the actual ID of the element
  
//   bitcoinElement.addEventListener('click', () => handleClick('BTC'));
//   ethereumElement.addEventListener('click', () => handleClick('ETH'));
  