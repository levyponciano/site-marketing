# Memória — Site Levy

Última atualização: 26 de agosto de 2026.

## Objetivo

Manter e evoluir o Site Levy, portfólio pessoal de Levy Ponciano, voltado à apresentação de sua trajetória, seus serviços e seus projetos, além da captação de clientes que precisam de sites.

## Identidade profissional

- Nome: Levy Ponciano
- Localização: Aracati, Ceará, Brasil
- Título: Web Designer
- Atuação: criação de sites sob medida para profissionais e empresas
- Público principal: nutricionistas, advogados, contadores, cabeleireiros, profissionais autônomos e pequenas empresas
- Diferenciais: trabalho profissional, identidade visual personalizada, comunicação acessível e acompanhamento contínuo
- Modelo de trabalho: independente e remoto
- Objetivo comercial: conquistar novos clientes por meio de orçamentos personalizados

## Serviços apresentados

- Portfólios profissionais
- Sites institucionais
- Lojas virtuais
- UI/UX e landing pages

Não são apresentados preços fixos. O contato direciona para solicitação de orçamento.

## Tecnologias e formação

- Tecnologias destacadas: HTML, CSS, JavaScript, Node.js, UI/UX e Git
- Tecnologias em estudo: C, Python, JavaScript e Node.js
- Técnico em Informática pelo IFCE
- Bacharelado em Ciência da Computação pelo IFCE, em andamento
- Cursos complementares mencionados: Swift pelo IFRS, banco de dados, Windows Server, redes e inteligência artificial
- Experiência: cerca de 2 anos criando para a web

## História profissional

Levy começou a criar sites por diversão durante o curso técnico em Informática. Com o tempo, percebeu que gostava de unir criatividade e tecnologia e passou a desenvolver sites profissionalmente. Seu foco é organizar a presença digital de cada cliente, construir uma identidade visual coerente e tornar evidente o valor do trabalho apresentado.

Tom desejado: criativo, sofisticado e acessível.

## Contatos

- E-mail: levyponciano2006@gmail.com
- WhatsApp: +55 88 92161-8242
- GitHub: https://github.com/levyponciano
- LinkedIn: https://www.linkedin.com/in/pedro-levy-ponciano-lopes-835797256/
- Instagram: https://instagram.com/levyponcianoo

## Direção visual

- A base editorial e a paleta do antigo site foram preservadas.
- Cores principais: azul-petróleo, coral, amarelo, branco e off-white.
- Foi criada uma identidade tipográfica com monograma “LP”.
- O favicon também utiliza o monograma “LP”.
- A assinatura principal do hero é: “Seu trabalho merece ser visto.”
- O site possui versões em português e inglês, alternadas pelo botão no cabeçalho.

## Projetos exibidos

Os três projetos atuais são estudos fictícios completos e aparecem explicitamente identificados como “Projeto conceito”:

1. Lia Nogueira — Nutrição possível: site para nutricionista clínica e comportamental, com estética orgânica e acolhedora. Página em `sites/nutricao/index.html`.
2. Moura & Salles: site institucional para escritório de advocacia empresarial, com linguagem editorial e arquitetura visual precisa. Página em `sites/advocacia/index.html`.
3. Pulso: site para criador de conteúdo e estúdio de marketing, com estética gráfica, enérgica e orientada a campanhas. Página em `sites/marketing/index.html`.

Cada cartão da seção de projetos abre sua respectiva demonstração. As três demos incluem conteúdo comercial completo, CTA para o WhatsApp de Levy, navegação responsiva, animações de entrada, preferência por movimento reduzido e link de retorno ao portfólio.

Para deixar a navegação evidente, cada prévia possui um CTA flutuante “Abrir site” e cada bloco de informações apresenta o botão “Ver site completo”, ambos bilíngues e com feedback de hover e foco.

A seção de projetos usa um carrossel centralizado com largura máxima de 1120 px e um site por vez. Ele alterna automaticamente a cada 5 segundos, possui setas e indicadores para controle manual, aceita gesto lateral no celular, pausa durante interação e respeita movimento reduzido. As prévias são capturas reais em 16:9 do início de cada site, armazenadas em `assets/projects/` como WebP de 1120 × 630 px para corresponder exatamente à moldura, preservar a navbar e reduzir carregamento. Apenas a primeira captura é baixada inicialmente; as demais carregam sob demanda ao entrar no carrossel.

As imagens principais das três demos foram geradas especialmente para os projetos e estão dentro das respectivas pastas `assets`.

Eles devem ser substituídos ou complementados por projetos reais quando Levy fornecer imagens, links, tecnologias e descrições.

## Estado atual do site

- Site identificado como “Site Levy”, o portfólio pessoal de Levy Ponciano.
- Layout responsivo revisado para celulares pequenos, celulares comuns, tablets e desktops.
- Não há rolagem horizontal nas larguras validadas de 320, 768 e 1440 px.
- Alternância PT/EN funcional.
- Menu móvel funcional, com áreas de toque ampliadas e navegação adaptada a telas pequenas.
- CTA principal direcionado ao WhatsApp.
- Links sociais configurados.
- Animações e preferência por movimento reduzido preservadas.
- A faixa de especialidades do hero funciona como carrossel realmente infinito: o JavaScript calcula a largura disponível, cria quantas cópias forem necessárias e recalcula o conjunto quando a janela muda de tamanho, sem espaços vazios entre as palavras.
- A seção de estatísticas não informa mais quantos sites Levy já produziu. Permanecem apenas “2+ anos criando para a web” e “100% atendimento remoto e próximo”.
- No celular, as estatísticas aparecem em uma coluna; em telas maiores, aparecem em duas colunas com alinhamento e espaçamento próprios.
- Foram adicionados ajustes responsivos para tipografia, projetos, serviços, contato, rodapé e foco de teclado.
- Bug de sobreposição no título “Vamos criar juntos” corrigido em desktop e celular.
- Validação visual feita em navegador real com Playwright.
- As três novas demos foram validadas em navegador real nas larguras de 390 e 1440 px.
- A fluidez do portfólio foi otimizada: cursor usa `requestAnimationFrame` e `transform`, fica desativado em dispositivos touch, o ticker pausa fora da tela, o blur do cabeçalho foi removido e o próximo slide é pré-carregado antes da transição.
- Alterações commitadas e publicadas no GitHub Pages.
- Último commit publicado: `d5a6355`, com as três capturas do carrossel refeitas em 16:9 real (`1120 × 630`) para preservar integralmente as navbars.

## Publicação

- Repositório: https://github.com/levyponciano/site-marketing
- Site público: https://levyponciano.github.io/site-marketing/
- Branch publicada: `main`
- Hospedagem: GitHub Pages pela raiz do repositório
- HTTPS habilitado

## Arquivos principais

- `index.html`: estrutura, conteúdo em português e inglês e links.
- `styles.css`: identidade visual, layout e responsividade.
- `script.js`: animações, menu móvel e seletor de idioma.
- `assets/favicon.svg`: favicon com o monograma LP.
- `sites/shared/base.css` e `sites/shared/demo.js`: base responsiva, navegação e animações compartilhadas pelas demos.
- `sites/advocacia/`: projeto conceito Moura & Salles.
- `sites/marketing/`: projeto conceito Pulso.
- `sites/nutricao/`: projeto conceito Lia Nogueira.

## Próximos passos recomendados

- Substituir projetos conceituais por projetos reais.
- Adicionar imagens ou capturas dos trabalhos reais.
- Revisar cursos e certificações que devem aparecer publicamente.
- Considerar currículo em PDF para download.
- Considerar a configuração de um domínio personalizado.
- Continuar validando alterações em celular, tablet e desktop antes de cada publicação.
