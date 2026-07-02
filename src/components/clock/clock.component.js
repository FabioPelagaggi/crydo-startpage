class Clock extends Component {
  refs = {
    clock: '.clock-time',
    icon: '.clock-icon'
  };

  constructor() {
    super();
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.fonts.roboto
    ];
  }

  style() {
    return `
        :host {
            display: flex;
            align-items: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        }

        :host(:hover) {
            transform: translateY(-2px);
        }

        .clock-time {
            white-space: nowrap;
            font: 300 9pt 'Roboto', sans-serif;
            color: #d4be98;
            letter-spacing: .5px;
            margin: 0;
        }

        .clock-icon {
            color: #ea6962;
            font-size: 10pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">schedule</span>
        <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.clock.iconColor;
  }

  setTime() {
    const timezoneOffset = parseInt(localStorage.getItem('weatherTimezone') || '32400');
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const localDate = new Date(utc + (timezoneOffset * 1000));
    
    // Check user preferences
    let is24h = false;
    try {
        const saved = JSON.parse(localStorage.getItem('userSettings') || '{}');
        if (saved.widgets && typeof saved.widgets.clock24h !== 'undefined') {
            is24h = saved.widgets.clock24h;
        }
    } catch (e) {}

    const format = is24h ? 'H:i' : 'I:i p';
    this.refs.clock = localDate.strftime(format);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);

      document.addEventListener('timezoneUpdate', () => {
        this.setTime();
      });
    });
  }
}
