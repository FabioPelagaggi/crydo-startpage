class CurrencyWidget extends Component {
  constructor() {
    super();
    this.prices = {};
    this.tracked = ['USD', 'CAD', 'EUR', 'BRL'];
  }

  imports() {
    return [
      this.resources.fonts.roboto,
    ];
  }

  async fetchPrices() {
    try {
      const userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
      const base = userSettings.baseCurrency || 'BRL';
      const url = `https://api.exchangerate-api.com/v4/latest/${base}`;
      const response = await fetch(url);
      const data = await response.json();

      const toDisplay = this.tracked.filter(c => c !== base);
      
      this.prices = {};
      toDisplay.forEach(currency => {
        const rate = data.rates[currency];
        const valueInBase = rate ? (1 / rate) : 0;
        this.prices[currency] = valueInBase.toFixed(2);
      });

      this.updateDisplay();
    } catch (error) {
      this.updateDisplay(true);
    }
  }

  updateDisplay(error = false) {
    const container = this.shadow.querySelector('.currency-container');
    if (!container) return;

    const userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    const base = userSettings.baseCurrency || 'BRL';
    const toDisplay = this.tracked.filter(c => c !== base);

    // Symbols for UI
    const symbols = {
      'USD': '$',
      'CAD': 'C$',
      'EUR': '€',
      'BRL': 'R$'
    };
    const baseSymbol = symbols[base] || '';

    let html = '';
    toDisplay.forEach(currency => {
      const price = error ? '--' : (this.prices[currency] || '--');
      html += `
        <div class="currency-item">
          <span class="currency-symbol ${currency.toLowerCase()}">${currency}</span>
          <span class="currency-value">${baseSymbol}${price}</span>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  style() {
    return `
      :host {
        display: flex;
        align-items: center;
      }

      .currency-container {
        display: flex;
        align-items: center;
        gap: 20px;
        font-family: var(--font-primary);
      }

      .currency-item {
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        user-select: none;
      }

      .currency-symbol {
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0.5px;
        opacity: 0.7;
      }

      .currency-symbol.usd { color: #8cbfa5; }
      .currency-symbol.cad { color: #d68c8c; }
      .currency-symbol.eur { color: #8899cc; }
      .currency-symbol.brl { color: #eebb77; }

      .currency-value {
        color: var(--color-text-primary);
        font-weight: 500;
        font-size: 11px;
        opacity: 0.9;
      }
    `;
  }

  template() {
    const userSettings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    const base = userSettings.baseCurrency || 'BRL';
    const toDisplay = this.tracked.filter(c => c !== base);
    
    let initialHtml = '';
    toDisplay.forEach(currency => {
      initialHtml += `
        <div class="currency-item">
          <span class="currency-symbol ${currency.toLowerCase()}">${currency}</span>
          <span class="currency-value">--</span>
        </div>
      `;
    });

    return `
      <div class="currency-container">
        ${initialHtml}
      </div>
    `;
  }

  connectedCallback() {
    this.render().then(() => {
      this.fetchPrices();
      const refreshInterval = (typeof CURRENCY_CONFIG !== 'undefined' && CURRENCY_CONFIG.refreshInterval) ? CURRENCY_CONFIG.refreshInterval : 10 * 60 * 1000;
      setInterval(() => this.fetchPrices(), refreshInterval);
    });
  }
}

customElements.define('currency-widget', CurrencyWidget);
