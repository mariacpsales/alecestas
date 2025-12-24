// ============================================
// SCRIPT DE ORDENAÇÃO DE PRODUTOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const selectOrdenar = document.getElementById('ordenar');
    const produtosGrid = document.querySelector('.produtos-grid');
    
    // Verificar se os elementos existem na página
    if (selectOrdenar && produtosGrid) {
        selectOrdenar.addEventListener('change', function() {
            const produtos = Array.from(produtosGrid.querySelectorAll('.produto-card'));
            const criterio = this.value;
            
            // Ordenar produtos conforme critério selecionado
            produtos.sort((a, b) => {
                switch(criterio) {
                    case 'menor-preco':
                        const precoA = parseFloat(a.querySelector('.produto-preco').textContent.replace('R$', '').replace('.', '').replace(',', '.').trim());
                        const precoB = parseFloat(b.querySelector('.produto-preco').textContent.replace('R$', '').replace('.', '').replace(',', '.').trim());
                        return precoA - precoB;
                        
                    case 'maior-preco':
                        const precoA2 = parseFloat(a.querySelector('.produto-preco').textContent.replace('R$', '').replace('.', '').replace(',', '.').trim());
                        const precoB2 = parseFloat(b.querySelector('.produto-preco').textContent.replace('R$', '').replace('.', '').replace(',', '.').trim());
                        return precoB2 - precoA2;
                        
                    case 'nome-az':
                        const nomeA = a.querySelector('.produto-nome').textContent;
                        const nomeB = b.querySelector('.produto-nome').textContent;
                        return nomeA.localeCompare(nomeB);
                        
                    case 'nome-za':
                        const nomeA2 = a.querySelector('.produto-nome').textContent;
                        const nomeB2 = b.querySelector('.produto-nome').textContent;
                        return nomeB2.localeCompare(nomeA2);
                        
                    default: // relevancia - ordem original
                        return 0;
                }
            });
            
            // Limpar grid e reordenar produtos
            produtosGrid.innerHTML = '';
            produtos.forEach(produto => {
                produtosGrid.appendChild(produto);
            });
            
            // Scroll suave para o topo dos produtos
            produtosGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});
