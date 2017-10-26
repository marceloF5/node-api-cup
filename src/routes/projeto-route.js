module.exports = app => {
    const x = 'projeto-controller';
    const controller = app.src.controllers.projetoController;
    const sequelize = app.bin.db;

    //app.get('/', )
    //app.get('/projetos', controller.list);

    
    app.get('/', function(request, response) {
        response.end('Servidor NodeJS ativo!');
    });

    app.get('/versao', controller.versao);

 /*   app.get('/modalidadeProjetoItens', function(request, response) {
        console.log('/modalidadeProjetoItens');
        projetoController.modalidadeProjetoItens(function(callback) {
            response.send(callback);

        });
    });

    app.get('/carregarProjeto/:idt_projeto', function(request, response) {
        console.log('carregarProjeto');

        var idt_projeto = validator.trim(validator.escape(request.param('idt_projeto')));

        projetoController.carregarProjeto(idt_projeto, function(callback) {
            response.send(callback);
    
        });
    });

    app.get('/carregarItensProjeto/:idt_projeto', function(request, response) {
        console.log('carregarItensProjeto');

        var idt_projeto = validator.trim(validator.escape(request.param('idt_projeto')));

        projetoController.carregarItensProjeto(idt_projeto, function(callback) {
            response.send(callback);
    
        });
    });

    app.post('/especificacaoProduto', function(request, response, body) {
        projetoController.especificacaoProduto(request, function(callback) {
            response.send(callback);
    
        });
    });

    app.post('/filtrarProjetos', function(request, response, body) {
        console.log('filtrarProjetos');
        projetoController.filtrarProjetos(request, function(callback) {
            response.send(callback);
    
        });
    });

    app.get('/buscar', function(request, response) {
        console.log('search');
        var url = require('url');
        var url_parts = url.parse(request.url, true);
        var query = url_parts.query;


        projetoController.buscar(request,function(callback) {
            console.log('mÃ©todo get com retorno');
            console.log('CALLBACK');
            console.log(callback);
            response.send(callback);
            //response.send(callback);

        });
        
        //response.end('search!');
    });


    app.get('/projetos', function(request, response) {
        projetoController.list(function(callback) {
            console.log('mÃ©todo get com retorno');
            response.send(callback);

        });
    });

    app.get('/gestao', function(request, response) {
        projetoController.gestao(function(callback) {
            response.send(callback);

        });
    });

    app.get('/certificacao', function(request, response) {
        projetoController.certificacao(function(callback) {
            response.send(callback);

        });
    });


    app.get('/funcao', function(request, response) {
        projetoController.funcao(function(callback) {
            response.send(callback);

        });
    });

    app.get('/funcao/:familia_projeto', function(request, response) {

        var familia_projeto = validator.trim(validator.escape(request.param('familia_projeto')));
        
        projetoController.funcaoFamiliaProjeto(familia_projeto, function(callback) {
            response.send(callback);
        });
    });

    app.get('/projetosItensEspecificacaoProduto/:idt_projetos_itens', function(request, response) {

        var idt_projetos_itens = validator.trim(validator.escape(request.param('idt_projetos_itens')));
        
        projetoController.projetosItensEspecificacaoProduto(idt_projetos_itens, function(callback) {
            response.send(callback);
        });
    });

    app.get('/selo', function(request, response) {
        projetoController.seloEditorial(function(callback) {
            response.send(callback);

        });
    });

    app.get('/empresa', function(request, response) {
        projetoController.empresa(function(callback) {
            response.send(callback);

        });
    });

    app.get('/familia', function(request, response) {
        projetoController.familiaProjeto(function(callback) {
            response.send(callback);

        });
    });

    app.get('/mercado', function(request, response) {
        projetoController.mercadoAlvo(function(callback) {
            response.send(callback);

        });
    });

    app.get('/nivelEnsino', function(request, response) {
        projetoController.nivelEnsino(function(callback) {
            response.send(callback);

        });
    });

    app.get('/nivelEnsino/:id_nivel_ensino', function(request, response) {

        var id_nivel_ensino = validator.trim(validator.escape(request.param('id_nivel_ensino')));
        
        projetoController.nivelEnsinoSerieAno(id_nivel_ensino, function(callback) {
            response.send(callback);
        });
    });

    app.get('/tipoProduto', function(request, response) {
        projetoController.tipoProduto(function(callback) {
            response.send(callback);

        });
    });

    app.get('/modalidadeProdutos', function(request, response) {
        projetoController.modalidadeProdutos(function(callback) {
            response.send(callback);

        });
    });

    app.get('/subTipoProduto/:id_tipo_produto', function(request, response) {

        var id_tipo_produto = validator.trim(validator.escape(request.param('id_tipo_produto')));
        
        projetoController.subTipoProduto(id_tipo_produto, function(callback) {
            response.send(callback);
        });
    });

    app.get('/projeto/:idt_projeto', function(request, response) {

        var idt_projeto = validator.trim(validator.escape(request.param('idt_projeto')));
        
        projetoController.projeto(idt_projeto, function(callback) {
            response.send(callback);
        });
    });


    app.get('/projetoDetalhado/:idt_projeto', function(request, response) {
        
        var idt_projeto = validator.trim(validator.escape(request.param('idt_projeto')));
        
        projetoController.projetoDetalhado(idt_projeto, function(callback) {
            response.send(callback);
        });
    });




    app.get('/statusProjetos', function(request, response) {
        
        projetoController.statusProjetos(function(callback) {
            response.send(callback);
        });
    });

    app.post('/projetos', function(request, response) {
        console.log(request.body);
        
        var colecoes = request.body.colecoes;
        
        var projeto = Projeto;
        projeto = ({
            idt_projeto: request.body.idt_projeto,
            id_gestao: request.body.id_gestao,
            nome_projeto: request.body.nome_projeto,
            desc_projeto: request.body.desc_projeto,
            id_selo_editorial: request.body.id_selo_editorial,
            id_familia_projeto: request.body.id_familia_projeto,
            id_estagio_projeto: request.body.id_estagio_projeto,
            id_status_projeto: request.body.id_status_projeto,
            id_mercado_alvo: request.body.id_mercado_alvo,
            colecoes: colecoes,
            id_empresa: request.body.id_empresa,
            idt_certificacao: request.body.idt_certificacao,
            perfil_alvo: request.body.perfil_alvo,
            usuarios: request.body.usuarios,
            nivel_ensino: request.body.nivel_ensino,
            projetos_itens: request.body.projetos_itens
        })

        projetoController.gravarProjeto(projeto, function(resp) {
            response.send(resp);
        });  
    });

    app.get('/telaEspecificacao/:id_tipo_produto', function(request, response) {
        
        var id_tipo_produto = validator.trim(validator.escape(request.param('id_tipo_produto')));

        projetoController.telaEspecificacao(id_tipo_produto, function(callback) {
            response.send(callback);
        });
    });


    app.get('/briefingEspecificacaoProjeto/:idt_projeto', function(request, response) {

        var idt_projeto = validator.trim(validator.escape(request.param('idt_projeto')));

        projetoController.listaBriefingEspecificacaoProjeto(idt_projeto, function(callback) {
            response.send(callback);
        });
    });

    app.get('/briefing/:idt_projetos_itens', function(request, response) {

        var idt_projetos_itens = validator.trim(validator.escape(request.param('idt_projetos_itens')));
        console.log('/briefing/:idt_projetos_itens');
        console.log(idt_projetos_itens);
        projetoController.listaBriefing(idt_projetos_itens, function(callback) {
            response.send(callback);
        });
    });

    app.get('/listaIntegracao/:idt_projetos/:orderBy', function(request, response) {

        var idt_projetos = validator.trim(validator.escape(request.param('idt_projetos')));
        var orderBy = validator.trim(validator.escape(request.param('orderBy')));

        projetoController.listaIntegracao(idt_projetos,orderBy, function(callback) {
            response.send(callback);
        });
    });

    app.post('/alteracaoBriefing',function(request,response){
        
        console.log('briefing');
        var brief = Briefing;
        brief = ({
                idt_projetos_itens : request.body.idt_projetos_itens,
                tipo_briefing : request.body.tipo_briefing,
                desc_item : request.body.desc_item,
                procedencia: request.body.procedencia,
                desc_fornecedor: request.body.desc_fornecedor,
                desc_especificacao : request.body.desc_especificacao,
                desc_aplicacao: request.body.desc_aplicacao,
        })
        projetoController.gravarBriefing(brief, function(resp) {
                response.send(resp);
        }); 
    });


    //AlteraÃ§Ã£o Produto
    app.post('/alteracaoProjetoItens', function(request, response) {
        
    
        console.log('alteracaoProjetoItens');
        //console.log(request);
        
        /*var obj = request.body;
        var prjItens = request.body;
        
        for( var i in obj)
        {			
            var projetoItens = Projetos_Itens;
                projetoItens = ({
                        idt_projetos_itens: obj[i].idt_projetos_itens,
                        id_tipo_produto:   obj[i].id_tipo_produto,
                        id_sub_tipo_produto: obj[i].id_sub_tipo_produto,
                        prod_grafica_interna : obj[i].prod_grafica_interna,
                        nome_produto : obj[i].nome_produto,									
                        fornecedor_externo : obj[i].fornecedor_externo,
                        prod_editorial : obj[i].prod_editorial,
                        centro_custo : obj[i].centro_custo
                })
            prjItens.push(projetoItens);
        }*/
/*        var prjItens = request.body;
        projetoController.gravarAlteracaoProjetoItens(prjItens, function(resp) {
            response.send(resp);
        });  
    });


    // AlteraÃ§Ã£o Projeto
    app.post('/alteracaoProjetos', function(request, response) {
        
        var projeto = Projeto;
        projeto = ({
            idt_projeto: request.body.idt_projeto,
            id_gestao: request.body.id_gestao,
            nome_projeto: request.body.nome_projeto,
            desc_projeto: request.body.desc_projeto,
            id_selo_editorial: request.body.id_selo_editorial,
            id_familia_projeto: request.body.id_familia_projeto,
            id_estagio_projeto: request.body.id_estagio_projeto,
            id_status_projeto: request.body.id_status_projeto,
            id_mercado_alvo: request.body.id_mercado_alvo,
            colecoes: request.body.colecoes,
            id_empresa: request.body.id_empresa,
            perfil_alvo: request.body.perfil_alvo,
            usuarios: request.body.usuarios,
            nivel_ensino: request.body.nivel_ensino,
            projetos_itens: request.body.projetos_itens
        })

        projetoController.gravarAlteracaoProjeto(projeto, function(resp) {
            response.send(resp);
        });  
    });
*/
}