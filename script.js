function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const et = e.target;

                if (et.classList.contains('btn-num')) {
                    this.pegaConteudoBotao(et.innerText);
                }
                if (et.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }
                if (et.classList.contains('btn-eq')) {
                    this.calcula(this.display);
                }
                if (et.classList.contains('btn-del')) {
                    this.apagaNum();
                }
            });
        },

        pegaConteudoBotao(value) {
            if (this.display.value.includes('.') && value === '.') return;
            // if (this.display.value.includes('-') && value === '-') return;
            // if (this.display.value.includes('+') && value === '+') return;
            // if (this.display.value.includes('/') && value === '/') return;
            // if (this.display.value.includes('*') && value === '*') return;

            this.display.value += value;
        },
        limpaDisplay() {
            this.display.value = '';
        },

        calcula() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Impossivel calcular');
                    this.limpaDisplay();
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Impossivel calcular');
                this.limpaDisplay();
                return;
            }
        },

        apagaNum() {
            this.display.value = this.display.value.slice(0, -1);
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
