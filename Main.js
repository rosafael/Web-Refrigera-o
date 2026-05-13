document.addEventListener("DOMContentLoaded", () => {
    const foneEmpresa = "5591980375037";
    const modal = document.getElementById("modal-servico");
    const galeria = document.getElementById("modal-galeria");
    const listaServicos = document.getElementById("lista-servicos");
    const listaBeneficios = document.getElementById("lista-beneficios");
    const btnVoltar = document.querySelector(".botao-voltar");
    const neveContainer = document.querySelector('.neve-container');

    /*BASE DE DADOS DOS SERVIÇOS*/
    const infoServicos = {
        "Ar": {
            titulo: "Ar-Condicionado",
            pasta: "ar",
            qtdFotos: 10,
            servicos: [
                { nome: "Instalação Profissional", detalhe: "Realizamos a instalação de aparelhos novos seguindo rigorosamente as normas dos fabricantes para preservar sua garantia.Modelos: Split Hi-Wall, Inverter, Piso-Teto e Cassete." },
                { nome: "Infraestrutura", detalhe: "Preparação de tubulação e dreno em obras ou reformas." },
                { nome: "Cálculo de BTUs", detalhe: "Consultoria para escolher a potência ideal para o seu espaço." },
                { nome: "Higienização Técnica (Limpeza)", detalhe: "Uma limpeza profunda que vai muito além do filtro, utilizando produtos bactericidas e fungicidas biodegradáveis. Limpeza da serpentina, bandeja de dreno e turbina.Higienização da unidade externa (condensadora). Aplicação de produto para eliminar 99% de fungos e bactérias." },
                { nome: "Manutenção Preventiva e Contratos (PMOC)", detalhe: "Ideal para empresas e condomínios que precisam estar em dia com a legislação (Lei 13.589/2018). Visitas periódicas para check-up do sistema. Emissão de laudos técnicos e planos de manutenção. Prevenção de quebras e redução no consumo de energia." },
                { nome: "Manutenção Corretiva (Consertos)", detalhe: "Seu ar parou de gelar ou está fazendo barulho? Nós resolvemos. Diagnóstico de falhas e erros no painel. Troca de peças (compressores, capacitores, placas eletrônicas). Reparo de vazamentos e carga de gás (fluido refrigerante)." },
                { nome: "Desinstalação e Remanejamento", detalhe: "Vai mudar de casa ou escritório? Nós retiramos seu aparelho com cuidado. Recolhimento do gás para evitar desperdício e poluição. Transporte e reinstalação no novo local com teste de performance." },

            ],
            beneficios: [
                 { titulo: "​Saúde Respiratória", desc: "Elimina 99% de fungos e bactérias, combatendo rinite e alergias." },
                { titulo: "Economia Real", desc: "Reduz o consumo de energia em até 30% ao evitar a sobrecarga do motor." },
                { titulo: "Mais Potência", desc: "O aparelho gela o ambiente muito mais rápido e com menos esforço." },
                { titulo: "Vida Útil Prolongada", desc: "Previne a corrosão de peças e evita gastos inesperados com consertos caros." },
                { titulo: "Ar Puro", desc: "Acaba com o mau cheiro e garante um ambiente com frescor de verdade." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Ar-Condicionado.`
        },
        "Geladeira": {
            titulo: "Geladeiras",
            pasta: "geladeira",
            qtdFotos: 3,
            servicos: [
                { nome: "Desbloqueio e Higienização do Sistema de Dreno", detalhe: "Limpeza técnica do canal de escoamento de água e da calha de degelo, removendo resíduos e fungos que obstruem a passagem." },
                { nome: "Substituição de Sensores de Temperatura e Degelo", detalhe: "Troca dos componentes eletrônicos (sensores NTC) que fazem a leitura do frio e controlam o momento de ligar e desligar a resistência." },
                { nome: "Troca de Filtro Secador e Limpeza de Tubulação", detalhe: "Substituição do filtro que retém umidade e impurezas no sistema de refrigeração, acompanhada de limpeza química interna da tubulação." }
            ],
            beneficios: [
                { titulo: "Fim dos Vazamentos e Maus Odores", desc: "Impede que a água transborde para dentro da geladeira (molhando a gaveta de legumes) ou escorra pelo chão da cozinha. Além disso, elimina o cheiro ruim causado pela água parada e por bactérias no dreno." },
                { titulo: "Precisão Térmica e Proteção do Motor", desc: "Garante que a geladeira não trabalhe direto sem parar (o que queimaria o compressor) e assegura que a temperatura interna seja exatamente a necessária para manter os alimentos conservados sem congelar o que não deve."},
                { titulo: "Performance de Fábrica", desc: "Evita entupimentos que fazem a geladeira 'perder o fôlego' e parar de gelar gradativamente. Esse serviço garante que o gás circule livremente, fazendo com que o aparelho atinja a temperatura ideal de forma muito mais rápida." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Geladeiras.`
        },
        "Camaras": {
            titulo: "Câmaras Frias",
            pasta: "camara",
            qtdFotos: 4,
            servicos: [
                { nome: "Manutenção Preventiva Geral", detalhe: "Verificação de compressores, testes de estanqueidade (vazamentos), limpeza de evaporadores e condensadores de grande porte." },
                { nome: "Manutenção Corretiva de Emergência", detalhe: "Substituição de peças, carga de fluido refrigerante e reparos em quadros de comando." },
                { nome: "Ajuste de Quadros Elétricos", detalhe: "Como especialistas em elétrica, garantimos que os dispositivos de proteção (disjuntores, contatores e relés) estejam operando para evitar a queima do motor." },
                { nome: "Troca de Gaxetas e Vedação", detalhe: "Reparo em portas e vedações de painéis para evitar a entrada de calor e a formação de gelo excessivo." },
                { nome: "Calibração de Temperatura", detalhe: "Ajuste fino dos controladores para garantir que a câmara opere na faixa exata para resfriados ou congelados." }
            
            
            ],
            beneficios: [
                { titulo: "temperatura estável", desc: "Mantemos a temperatura estável  respeitando as normas sanitárias." },
                { titulo: "Economia de Energia", desc: "Sistemas bem regulados e limpos consomem muito menos eletricidade." },
                { titulo: "Vida Útil do Compressor", desc: "Evitamos quebras catastróficas com monitoramento técnico constante." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Câmaras Frias.`
        },
        "Ilha": {
            titulo: "Ilhas Refrigeradas",
            pasta: "ilha",
            qtdFotos: 1,
            servicos: [
                { nome: "Manutenção Preventiva Especializada", detalhe: "Limpeza técnica das colmeias e condensadoras (essencial para evitar o superaquecimento do motor). Desobstrução do sistema de drenagem para evitar acúmulo de gelo e vazamentos no piso. Verificação e calibração de controladores digitais de temperatura." },
                { nome: "Manutenção Corretiva Agilizada", detalhe: "Troca de motores (compressores) e microventiladores. Localização e reparo de vazamentos de fluido refrigerante (gás). Substituição de sensores e termostatos." },
                { nome: "Revisão Elétrica", detalhe: "Inspeção de fiação e componentes para evitar curtos-circuitos e picos de consumo." }
            ],
            beneficios: [
                { titulo: "Prolongamento da Vida Útil do Compressor", desc: "A limpeza técnica dos condensadores e a lubrificação dos micro-motores evitam que o compressor trabalhe em temperaturas críticas. Isso impede o desgaste prematuro da peça mais cara do equipamento, garantindo que sua ilha funcione por muitos anos sem necessidade de substituição total." },
                 { titulo: "Proteção Contra Perda de Mercadoria", desc: "Em ilhas de congelados, poucos graus de variação podem comprometer todo o estoque. Nossa manutenção corretiva foca na agilidade do diagnóstico e na reposição imediata de fluidos ou peças, garantindo que a temperatura volte ao ideal antes que os produtos comecem a descongelar, evitando prejuízos financeiros." },
                  { titulo: "Eficiência Energética e Segurança", desc: "Revisamos fiações, contatores e sensores de degelo para garantir que não haja fugas de corrente ou picos de consumo. Isso não apenas reduz o valor da sua conta de luz, mas também elimina riscos de curtos-circuitos que poderiam causar incêndios ou queimar as placas controladoras da ilha." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Ilhas.`
        },
        "Balcoes": {
            titulo: "Balcões Refrigerados",
            pasta: "balcao",
            qtdFotos: 7,
            servicos: [
                { nome: "Manutenção Preventiva", detalhe: "O foco aqui é antecipar problemas e manter o consumo de energia baixo." },
                { nome: "Limpeza da Unidade Condensadora", detalhe: "Essencial para evitar que o motor queime por superaquecimento." },
                { nome: "Verificação de Gaxetas (Borrachas)", detalhe: "Conferimos a vedação das portas para evitar perda de frio" },
                { nome: "Checagem de Fluido Refrigerante", detalhe: "Monitoramento de pressão para garantir o resfriamento correto." },
                { nome: "Higienização do Dreno", detalhe: "Evita acúmulo de água e odores desagradáveis dentro do balcão." },
                { nome: "Manutenção Corretiva (Reparos)", detalhe: "Atendimento ágil para quando o equipamento apresenta falhas." },
                { nome: "Troca de Compressores", detalhe: "Substituição técnica do 'coração' do sistema. Carga de Gás: Identificação e correção de vazamentos com reposição de fluido." },
                { nome: "Reparo em Termostatos e Controladores Digitais", detalhe: "Ajuste preciso da temperatura." },
                { nome: "Substituição de Microventoinhas", detalhe: "Correção de ruídos e falhas na circulação do ar." }
            
            ],
            beneficios: [
                { titulo: "Segurança Alimentar", desc: "Mantém a temperatura estável, evitando a perda de mercadorias e garantindo a saúde dos seus clientes." },
                { titulo: "Economia na Conta de Luz", desc: "Balcões sujos ou com borrachas frouxas podem gastar o dobro de energia." },
                { titulo: "Evita Multas", desc: "Equipamentos em bom estado são requisitos básicos em vistorias sanitárias." },
                { titulo: "Higiene Total", desc: "Ambiente limpo e livre de odores para seus clientes." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Balcões.`
        },
        "Frezzer": {
            titulo: "Freezers",
            pasta: "frezzer",
            qtdFotos: 8,
            servicos: [
                { nome: "Detecção de Vazamentos Fluido", detalhe: "Utilizamos ferramentas de precisão para encontrar microvazamentos de gás que impedem o congelamento total." },
                { nome: "Troca de Borrachas (Gaxetas)", detalhe: "Uma vedação ruim é a maior causa de gasto de energia e formação de gelo excessivo. Substituímos para garantir o fechamento hermético." },
                { nome: "Manutenção do Sistema de Degelo", detalhe: "Reparo em resistências e sensores para evitar que o freezer 'vire um bloco de gelo' e pare de refrigerar." },
                { nome: "Limpeza da Unidade de Condensação", detalhe: "Removemos a gordura e a poeira que se acumulam no motor, evitando que ele trabalhe sob pressão e queime." },
                { nome: "Substituição de Termostatos e Relés", detalhe: "Garantimos que o sistema elétrico responda corretamente ao comando de temperatura." },
                { nome: "Manutenção Preventiva", detalhe: "Limpeza e check-up de componentes. Evita que o freezer pare de repente e você perca todo o estoque de carnes, sorvetes ou congelados." },
                { nome: "Manutenção Corretiva", detalhe: "Troca de compressor, recarga de gás e reparos de emergência quando o equipamento para de congelar." }
            ],
            beneficios: [
                { titulo: "Segurança Total dos Alimentos", desc: "Ao manter a temperatura constante entre -18°C e -24°C, garantimos que produtos sensíveis, como carnes e sorvetes, não sofram oscilações térmicas. Isso preserva a textura, o sabor e, principalmente, a segurança alimentar, evitando a proliferação de bactérias por descongelamento parcial." },
                { titulo: "Prevenção de Perda de Estoque", desc: "Através da manutenção preventiva do sistema de degelo e sensores, evitamos que o freezer pare de funcionar inesperadamente. Isso protege seu investimento, impedindo que você perca todo o estoque de congelados da noite para o dia por uma falha técnica simples." },
                { titulo: "Economia na Conta de Luz", desc: "Freezers com borrachas (gaxetas) gastas ou condensadores sujos podem consumir até 40% mais energia. Nossa substituição de vedações e limpeza da unidade compressora garante que o motor trabalhe menos tempo para atingir o frio ideal, reduzindo seus custos fixos mensais." },
                { titulo: "Resfriamento Rápido e Silencioso", desc: "Com a substituição de relés, termostatos e a recarga precisa do fluido refrigerante, o sistema elétrico e mecânico responde instantaneamente. O freezer atinge a temperatura negativa de forma muito mais rápida e opera de maneira silenciosa, sem vibrações ou ruídos excessivos." }
            ],
            link: `https://wa.me/${foneEmpresa}?text=Olá! Gostaria de um orçamento para Freezers.`
        }
    };

    /*NEVE*/
    function criarFloco() {
        if (!neveContainer) return;
        const floco = document.createElement('div');
        floco.className = 'particula';
        const size = Math.random() * 5 + 2 + 'px';
        floco.style.width = size;
        floco.style.height = size;
        floco.style.left = Math.random() * window.innerWidth + 'px';
        floco.style.animationDuration = Math.random() * 3 + 3 + 's';
        neveContainer.appendChild(floco);
        setTimeout(() => floco.remove(), 6000);
    }
    setInterval(criarFloco, 150);

    /*MODAL E ACORDEÃO*/
    document.querySelectorAll(".Servicos-Container img").forEach(img => {
        img.addEventListener("click", function() {
            const id = this.className;
            const dados = infoServicos[id];
            if (!dados) return;

            document.getElementById("modal-titulo").innerText = dados.titulo;
            
            galeria.innerHTML = "";
            for (let i = 1; i <= dados.qtdFotos; i++) {
                const foto = document.createElement("img");
                foto.src = `imagens/${dados.pasta}/foto${i}.jpeg`;
                foto.onerror = function() { this.style.display = 'none'; };
                foto.onclick = () => abrirZoom(foto.src);
                galeria.appendChild(foto);
            }

            const criarItemAcordeao = (container, lista, chaveTitulo, chaveDesc) => {
                container.innerHTML = "";
                lista.forEach(item => {
                    const li = document.createElement("li");
                    li.className = "acordeao-item";
                    li.innerHTML = `
                        <div class="acordeao-header"><span>${item[chaveTitulo] || item}</span></div>
                        <div class="acordeao-texto"><p>${item[chaveDesc] || "Detalhes sob consulta."}</p></div>
                    `;
                    li.onclick = () => {
                        container.querySelectorAll('.acordeao-item').forEach(outro => {
                            if (outro !== li) outro.classList.remove('ativo');
                        });
                        li.classList.toggle('ativo');
                    };
                    container.appendChild(li);
                });
            };

            criarItemAcordeao(listaServicos, dados.servicos, 'nome', 'detalhe');
            criarItemAcordeao(listaBeneficios, dados.beneficios, 'titulo', 'desc');

            document.getElementById("modal-whatsapp").href = dados.link;
            modal.style.display = "flex";
        });
    });

    btnVoltar.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

    function abrirZoom(src) {
        const overlay = document.querySelector(".zoom-overlay");
        overlay.querySelector("img").src = src;
        overlay.style.display = "flex";
    }
    document.querySelector(".zoom-overlay").onclick = function() { this.style.display = "none"; };
});